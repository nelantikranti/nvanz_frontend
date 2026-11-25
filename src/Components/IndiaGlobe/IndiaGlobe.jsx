import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { INDIA_DOTS } from "./indiaDots";

/* ---------- data ---------- */
// px, py = where the pin TIP sits in the scene (globe radius = 1, x right, y up).
// All pins are placed in an arc around the upper half of the globe.
// (Pins are automatically kept inside the visible canvas.)
export const LOCATIONS = [
  { id: "tn",  label: "Tamil Nadu",     lat: 13.0827, lon: 80.2707, px: -1.12, py: 0.35 },
  { id: "kar", label: "Karnataka",      lat: 12.9716, lon: 77.5946, px: -0.74, py: 0.76 },
  { id: "hyd", label: "Hyderabad",      lat: 17.385,  lon: 78.4867, px: -0.27, py: 1.12 },
  { id: "kl",  label: "Kerala",         lat: 8.5241,  lon: 76.9366, px: 0.27,  py: 1.12 },
  { id: "lko", label: "Lucknow",        lat: 26.8467, lon: 80.9462, px: 0.74,  py: 0.76 },
  { id: "ap",  label: "Andhra Pradesh", lat: 16.5062, lon: 80.648,  px: 1.12,  py: 0.35 },
];

const HUB = { lat: 21.1458, lon: 79.0882 }; // the one arc starts from central India
const GOLD = "#ffc400";
const INDIA_GOLD = "#e8a317"; // India dots colour (solid gold, not white)
const MARKER_GOLD = "#ffd75a";
const LABEL_GOLD = "#e0a412";
const R = 1;
const CAM_Z = 4.3;
// radius of the flat gold outline so it sits exactly on the sphere's silhouette
const RIM_R = (CAM_Z * R * Math.sqrt(1 - (R * R) / (CAM_Z * CAM_Z))) / (CAM_Z - (R * R) / CAM_Z);

// Pins keep their layout in smaller containers (they shrink with the canvas
// below this width so labels never collide / hide each other).
const PIN_REF_WIDTH = 760;
const PIN_MIN_SCALE = 0.7;

/* ---------- pin bounce animation (CSS) ---------- */
// --h = bounce height. Smooth gravity-style bounce: eases up, eases down, rests.
const BOUNCE_CSS = `
@keyframes globePinBounce {
  0%   { transform: translate3d(0, 0, 0);
         animation-timing-function: cubic-bezier(.25, .46, .45, .94); }
  40%  { transform: translate3d(0, calc(var(--h) * -1), 0);
         animation-timing-function: cubic-bezier(.55, .085, .68, .53); }
  80%  { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.globe-pin-bounce {
  animation: globePinBounce 1.8s infinite;
  will-change: transform;
  backface-visibility: hidden;
}
@media (prefers-reduced-motion: reduce) {
  .globe-pin-bounce { animation: none; }
}
`;

/* ---------- helpers ---------- */
const toVec = (lat, lon, r = R) => {
  const la = THREE.MathUtils.degToRad(lat);
  const lo = THREE.MathUtils.degToRad(lon);
  return new THREE.Vector3(
    Math.cos(la) * Math.sin(lo),
    Math.sin(la),
    Math.cos(la) * Math.cos(lo)
  ).multiplyScalar(r);
};

let dotTex = null;
const getDotTexture = () => {
  if (dotTex) return dotTex;
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.6, "rgba(255,255,255,1)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  dotTex = new THREE.CanvasTexture(c);
  return dotTex;
};

let glowTex = null;
const getGlowTexture = () => {
  if (glowTex) return glowTex;
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, "rgba(255,196,0,0)");
  grad.addColorStop(0.78, "rgba(255,196,0,0)");
  grad.addColorStop(0.8, "rgba(255,196,0,0.16)");
  grad.addColorStop(0.9, "rgba(255,196,0,0)");
  grad.addColorStop(1, "rgba(255,196,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  glowTex = new THREE.CanvasTexture(c);
  return glowTex;
};

/* ---------- Tamil Nadu fill (makes sure the state has dots) ---------- */
// rough outline of Tamil Nadu as [lon, lat]
const TN_POLY = [
  [80.3, 13.55], [79.6, 13.4], [79.0, 13.3], [78.6, 13.2], [78.1, 13.0], [77.8, 12.8],
  [77.7, 12.3], [77.8, 11.9], [77.5, 11.7], [77.2, 11.5], [76.6, 11.5], [76.4, 11.2],
  [76.7, 10.8], [76.95, 10.3], [77.2, 9.8], [77.2, 9.5], [77.3, 9.0], [77.25, 8.4],
  [77.55, 8.08], [78.1, 8.4], [78.2, 8.9], [78.9, 9.25], [79.3, 9.3], [79.2, 9.5],
  [79.0, 9.75], [79.4, 10.0], [79.85, 10.3], [79.85, 10.8], [79.85, 11.4], [79.75, 11.9],
  [80.05, 12.4], [80.27, 13.0],
];

const inPoly = (x, y, poly) => {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};

// typical distance between neighbouring dots of INDIA_DOTS (in degrees)
const estimateSpacing = (dots) => {
  const step = Math.max(1, Math.floor(dots.length / 80));
  const ds = [];
  for (let i = 0; i < dots.length; i += step) {
    let best = Infinity;
    for (let j = 0; j < dots.length; j++) {
      if (i === j) continue;
      const d = Math.hypot(dots[i][0] - dots[j][0], dots[i][1] - dots[j][1]);
      if (d < best) best = d;
    }
    ds.push(best);
  }
  ds.sort((a, b) => a - b);
  return ds[Math.floor(ds.length / 2)] || 0.5;
};

// returns INDIA_DOTS + extra dots only where Tamil Nadu has none
const withTamilNadu = (dots) => {
  if (!dots.length) return dots;
  const s = estimateSpacing(dots);
  const [o0, o1] = dots[0]; // lattice origin [lat, lon]
  const extra = [];
  for (let a = Math.ceil((8 - o0) / s); a <= Math.floor((13.6 - o0) / s); a++) {
    for (let b = Math.ceil((76 - o1) / s); b <= Math.floor((80.4 - o1) / s); b++) {
      const lat = o0 + a * s;
      const lon = o1 + b * s;
      if (!inPoly(lon, lat, TN_POLY)) continue;
      const exists = dots.some((d) => Math.hypot(d[0] - lat, d[1] - lon) < s * 0.75);
      if (!exists) extra.push([lat, lon]);
    }
  }
  return extra.length ? [...dots, ...extra] : dots;
};

/* ---------- rotating layers ---------- */

// solid dark body: hides everything on the back side of the globe
function Body() {
  return (
    <mesh>
      <sphereGeometry args={[R * 0.995, 64, 64]} />
      <meshBasicMaterial color="#0e0b06" />
    </mesh>
  );
}

// faint dotted grid over the whole sphere  (DOT SIZE: change `size`)
function SphereDots() {
  const geo = useMemo(() => {
    const n = 3000;
    const pos = new Float32Array(n * 3);
    const ga = Math.PI * (3 - Math.sqrt(5)); // fibonacci sphere
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = ga * i;
      pos.set([Math.cos(t) * r * R, y * R, Math.sin(t) * r * R], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  return (
    <points geometry={geo}>
      <pointsMaterial
        map={getDotTexture()}
        color={GOLD}
        size={0.024}
        transparent
        opacity={0.38}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

// India dots: solid gold, bigger than the grid dots  (DOT SIZE: change `size`)
function IndiaDots() {
  const geo = useMemo(() => {
    const dots = withTamilNadu(INDIA_DOTS);
    const pos = new Float32Array(dots.length * 3);
    dots.forEach(([lat, lon], i) => toVec(lat, lon, R * 1.004).toArray(pos, i * 3));
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  return (
    <points geometry={geo}>
      {/* normal blending (not additive) so overlapping dots never turn white */}
      <pointsMaterial
        map={getDotTexture()}
        color={INDIA_GOLD}
        size={0.046}
        transparent
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

// small bright dot at every location (Tamil Nadu, Hyderabad, Kerala, Andhra Pradesh)
function Markers() {
  const geo = useMemo(() => {
    const pos = new Float32Array(LOCATIONS.length * 3);
    LOCATIONS.forEach((l, i) => toVec(l.lat, l.lon, R * 1.008).toArray(pos, i * 3));
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  return (
    <points geometry={geo} renderOrder={2}>
      <pointsMaterial
        map={getDotTexture()}
        color={MARKER_GOLD}
        size={0.075}
        transparent
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

// faint latitude + longitude lines
function Grid() {
  const lines = useMemo(() => {
    const out = [];
    [-60, -30, 0, 30, 60].forEach((lat) =>
      out.push(Array.from({ length: 129 }, (_, i) => toVec(lat, (i / 128) * 360 - 180, R * 1.001)))
    );
    for (let lon = 0; lon < 180; lon += 30) {
      out.push(
        Array.from({ length: 129 }, (_, i) => {
          const a = (i / 128) * Math.PI * 2;
          const la = THREE.MathUtils.radToDeg(Math.asin(Math.sin(a)));
          const lo = lon + (Math.cos(a) < 0 ? 180 : 0);
          return toVec(la, lo, R * 1.001);
        })
      );
    }
    return out;
  }, []);
  return (
    <>
      {lines.map((p, i) => (
        <Line key={i} points={p} color={GOLD} lineWidth={0.8} transparent opacity={0.16} />
      ))}
    </>
  );
}

/* ---------- the ONE connection arc + pulse (only for the selected location) ---------- */
const ARC = 90;
const ARC_GOLD = "#ffcc33";

function Connection({ loc }) {
  const { geo, pts, normal, quat } = useMemo(() => {
    const a = toVec(HUB.lat, HUB.lon);
    const b = toVec(loc.lat, loc.lon);
    const pts = Array.from({ length: ARC }, (_, i) => {
      const t = i / (ARC - 1);
      return a
        .clone()
        .lerp(b, t)
        .normalize()
        .multiplyScalar(R * (1.01 + 0.14 * Math.sin(Math.PI * t)));
    });
    const arr = new Float32Array(ARC * 3);
    pts.forEach((p, i) => p.toArray(arr, i * 3));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    geo.setDrawRange(0, 0);
    const normal = b.clone().normalize();
    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
    return { geo, pts, normal, quat };
  }, [loc]);

  const born = useRef(performance.now());
  const ring = useRef(null);
  const head = useRef(null);

  useFrame(() => {
    const s = (performance.now() - born.current) / 1000;
    const p = Math.min(s / 1.1, 1); // arc draws in over ~1.1s
    const count = Math.floor(p * ARC);
    geo.setDrawRange(0, count);
    if (head.current) {
      head.current.visible = count > 0;
      if (count > 0) head.current.position.copy(pts[Math.min(count, ARC) - 1]);
    }
    if (ring.current) {
      const k = (s % 1.8) / 1.8; // repeating ripple (small + thin)
      ring.current.scale.setScalar(0.015 + k * 0.075);
      ring.current.material.opacity = (1 - k) * 0.8;
    }
  });

  return (
    <>
      <points geometry={geo}>
        <pointsMaterial
          map={getDotTexture()}
          color={ARC_GOLD}
          size={0.045}
          transparent
          depthWrite={false}
          sizeAttenuation
        />
      </points>
      <mesh ref={head}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color={MARKER_GOLD} />
      </mesh>
      <group position={normal.clone().multiplyScalar(R * 1.006)} quaternion={quat}>
        {/* thin ripple ring */}
        <mesh ref={ring}>
          <ringGeometry args={[0.93, 1, 64]} />
          <meshBasicMaterial color={GOLD} transparent depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
}

/* ---------- fixed layers (do NOT rotate) ---------- */

// thin gold outline + soft glow, always facing the camera
function Outline() {
  return (
    <>
      <mesh renderOrder={-1}>
        <planeGeometry args={[(2 * RIM_R) / 0.8, (2 * RIM_R) / 0.8]} />
        <meshBasicMaterial
          map={getGlowTexture()}
          transparent
          depthWrite={false}
          depthTest={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh renderOrder={5}>
        <ringGeometry args={[RIM_R - 0.0025, RIM_R + 0.0025, 128]} />
        <meshBasicMaterial color="#b9820f" transparent depthTest={false} depthWrite={false} />
      </mesh>
    </>
  );
}

/* ---------- curved, flowing dotted connection (pin -> location) ---------- */
const FLOW_DOTS = 28; // number of dots on the curve
const FLOW_SPEED = 0.18; // how fast the dots travel (curve lengths per second)
const FLOW_BEND = 0.3; // how strongly the line bends (0 = straight)

function FlowLine({ tip, surface, globeRef }) {
  const ref = useRef(null);
  const { geo, positions, colors } = useMemo(() => {
    const positions = new Float32Array(FLOW_DOTS * 3);
    const colors = new Float32Array(FLOW_DOTS * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return { geo, positions, colors };
  }, []);

  const tmp = useMemo(
    () => ({
      p2: new THREE.Vector3(),
      p1: new THREE.Vector3(),
      d: new THREE.Vector3(),
      bias: new THREE.Vector2(),
      perp: new THREE.Vector2(),
    }),
    []
  );
  const side = tip.x < 0 ? -1 : 1;

  useFrame(({ clock }) => {
    const pts = ref.current;
    const globe = globeRef.current;
    if (!pts || !globe) return;

    const { p2, p1, d, bias, perp } = tmp;
    p2.copy(surface);
    globe.localToWorld(p2); // current world position of the location
    pts.visible = p2.z > 0.05; // hide when the location is on the back side
    if (!pts.visible) return;

    // quadratic bezier: tip -> (bent control point) -> location
    d.subVectors(p2, tip);
    const len = d.length();
    perp.set(-d.y, d.x).normalize();
    bias.set(side, 0.15); // bend outward / upward
    const s = perp.dot(bias) >= 0 ? 1 : -1;
    p1.set(
      (tip.x + p2.x) / 2 + perp.x * s * len * FLOW_BEND,
      (tip.y + p2.y) / 2 + perp.y * s * len * FLOW_BEND,
      (tip.z + p2.z) / 2
    );

    const time = clock.elapsedTime * FLOW_SPEED;
    for (let i = 0; i < FLOW_DOTS; i++) {
      const t = (i / FLOW_DOTS + time) % 1; // moves forward: pin -> location
      const mt = 1 - t;
      const a = mt * mt;
      const b = 2 * mt * t;
      const c = t * t;
      positions[i * 3] = a * tip.x + b * p1.x + c * p2.x;
      positions[i * 3 + 1] = a * tip.y + b * p1.y + c * p2.y;
      positions[i * 3 + 2] = a * tip.z + b * p1.z + c * p2.z;
      // fade in at the pin, fade out at the location
      const f = Math.min(1, Math.sin(Math.PI * t) * 1.8);
      colors[i * 3] = 1 * f;
      colors[i * 3 + 1] = 0.77 * f;
      colors[i * 3 + 2] = 0.0;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;
  });

  return (
    <points ref={ref} geometry={geo} renderOrder={6} frustumCulled={false}>
      <pointsMaterial
        map={getDotTexture()}
        size={0.05}
        vertexColors
        transparent
        depthTest={false}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

// Pin floating in the arc above the globe (bounces). The curved flowing line
// (selected pin only) follows the real location on the rotating globe.
function Pin({ loc, index, active, onSelect, ctl, globeRef, portalRef }) {
  const { size, viewport } = useThree();

  // pins shrink with the canvas (never below PIN_MIN_SCALE) so they never
  // overlap / hide each other in smaller containers
  const pinScale = THREE.MathUtils.clamp(size.width / PIN_REF_WIDTH, PIN_MIN_SCALE, 1);

  // keep the whole pin (label + icon) inside the visible canvas
  const ppu = size.width / viewport.width; // pixels per world unit
  const maxX = Math.max(0, viewport.width / 2 - (100 * pinScale) / ppu);
  const maxY = viewport.height / 2 - (100 * pinScale) / ppu;
  const tip = useMemo(
    () =>
      new THREE.Vector3(
        THREE.MathUtils.clamp(loc.px, -maxX, maxX),
        Math.min(loc.py, maxY),
        0
      ),
    [loc, maxX, maxY]
  );

  const surface = useMemo(() => toVec(loc.lat, loc.lon, R * 1.004), [loc]);
  const gid = `pin-grad-${loc.id}`;

  return (
    <>
      {active && <FlowLine tip={tip} surface={surface} globeRef={globeRef} />}

      <group position={tip}>
        {/*
          portal: pins are drawn in the outer wrapper (not inside the canvas box),
          so the canvas edge can never clip a pin / label (e.g. Tamil Nadu on the left).
        */}
        <Html center portal={portalRef} zIndexRange={[40, 0]} style={{ pointerEvents: "none" }}>
          <button
            type="button"
            aria-pressed={active}
            onClick={() => {
              if (ctl.current.moved > 6) return; // it was a drag, not a click
              onSelect(loc.id);
            }}
            style={{
              pointerEvents: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "none",
              border: 0,
              padding: 0,
              cursor: "pointer",
              transformOrigin: "50% 100%",
              transform: `translateY(-50%) scale(${pinScale})`, // pin tip sits exactly on the anchor
              userSelect: "none",
            }}
          >
            {/* bouncing wrapper (label + pin) */}
            <div
              className="globe-pin-bounce"
              style={{
                "--h": active ? "14px" : "9px", // selected pin bounces higher
                animationDelay: `${index * 0.3}s`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10, // space between the location text and the pin
              }}
            >
              <span
                style={{
                  padding: "6px 16px",
                  borderRadius: 999,
                  border: `1.5px solid ${active ? "#e8a60c" : "#9a6f10"}`,
                  background: active ? "#e8a60c" : "rgba(26,18,4,.88)",
                  color: active ? "#1a1200" : LABEL_GOLD,
                  font: "800 12px/1 Inter, system-ui, sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  transition: "background .2s, color .2s",
                }}
              >
                {loc.label}
              </span>
              <svg
                width="34"
                height="45"
                viewBox="0 0 24 32"
                aria-hidden
                style={{
                  filter: active
                    ? "drop-shadow(0 0 12px rgba(255,196,0,.75))"
                    : "drop-shadow(0 4px 6px rgba(0,0,0,.5))",
                  transition: "filter .2s",
                }}
              >
                <defs>
                  <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffd45a" />
                    <stop offset="1" stopColor="#c48a12" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 0C5.4 0 0 5.2 0 11.7 0 20 12 32 12 32s12-12 12-20.3C24 5.2 18.6 0 12 0z"
                  fill={`url(#${gid})`}
                />
                <circle cx="12" cy="11.5" r="4.6" fill="#1a1200" />
              </svg>
            </div>
          </button>
        </Html>
      </group>
    </>
  );
}

/* ---------- globe: rotation is driven ONLY by the user's drag ---------- */
function Globe({ selectedId, onSelect, ctl, portalRef }) {
  const group = useRef(null);
  const selected = LOCATIONS.find((l) => l.id === selectedId) ?? null;

  useFrame((_, dt) => {
    const c = ctl.current;
    // gentle inertia after the user lets go (no auto-rotation)
    if (!c.dragging && Math.abs(c.vy) > 1e-5) {
      c.ry += c.vy * dt * 60;
      c.vy *= Math.exp(-dt * 3.5);
    } else if (!c.dragging) {
      c.vy = 0;
    }
    if (group.current) group.current.rotation.set(c.rx, c.ry, 0);
  });

  return (
    <>
      <Outline />

      <group ref={group}>
        <Body />
        <SphereDots />
        <Grid />
        <IndiaDots />
        <Markers />
        {selected && <Connection key={selected.id} loc={selected} />}
      </group>

      {LOCATIONS.map((l, i) => (
        <Pin
          key={l.id}
          loc={l}
          index={i}
          active={l.id === selectedId}
          onSelect={onSelect}
          ctl={ctl}
          globeRef={group}
          portalRef={portalRef}
        />
      ))}
    </>
  );
}

/* ---------- public component ---------- */
// Works with no props. Optional: selectedId / onSelect for controlled use.
export default function IndiaGlobe({ selectedId, onSelect, defaultId = "hyd", trimBottom = "-12%", className, style }) {
  const [inner, setInner] = useState(defaultId);
  const current = selectedId !== undefined ? selectedId : inner;
  const handleSelect = (id) => {
    setInner(id);
    onSelect?.(id);
  };

  const wrapRef = useRef(null); // pins are drawn into this (non-clipping) wrapper
  const [grabbing, setGrabbing] = useState(false);
  const ctl = useRef({
    rx: 0.3, // start with India facing the viewer
    ry: -THREE.MathUtils.degToRad(79),
    vy: 0,
    dragging: false,
    moved: 0,
    lastX: 0,
    lastY: 0,
    lastT: 0,
  });

  useEffect(() => {
    const move = (e) => {
      const c = ctl.current;
      if (!c.dragging) return;
      const dx = e.clientX - c.lastX;
      const dy = e.clientY - c.lastY;
      c.lastX = e.clientX;
      c.lastY = e.clientY;
      c.lastT = performance.now();
      c.moved += Math.abs(dx) + Math.abs(dy);
      const k = 0.006;
      c.ry += dx * k;
      c.vy = dx * k;
      // touch: vertical swipes are left for page scrolling
      if (e.pointerType !== "touch") c.rx = THREE.MathUtils.clamp(c.rx + dy * k, -1.1, 1.1);
    };
    const up = () => {
      const c = ctl.current;
      if (!c.dragging) return;
      c.dragging = false;
      if (performance.now() - c.lastT > 80) c.vy = 0; // stopped before release -> no fling
      setGrabbing(false);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const c = ctl.current;
    c.dragging = true;
    c.moved = 0;
    c.vy = 0;
    c.lastX = e.clientX;
    c.lastY = e.clientY;
    c.lastT = performance.now();
    setGrabbing(true);
  };

  return (
    <div
      ref={wrapRef}
      className={className}
      onPointerDown={onPointerDown}
      style={{
        position: "relative",
        isolation: "isolate",
        width: "100%",
        aspectRatio: "1 / 1",
        maxWidth: 900,
         marginBottom: trimBottom,
        cursor: grabbing ? "grabbing" : "grab",
        touchAction: "pan-y",
        userSelect: "none",
        ...style,
      }}
    >
      <style>{BOUNCE_CSS}</style>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, CAM_Z], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Globe selectedId={current} onSelect={handleSelect} ctl={ctl} portalRef={wrapRef} />
      </Canvas>
    </div>
  );
}