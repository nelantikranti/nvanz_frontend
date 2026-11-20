
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { INDIA_DOTS } from "./indiaDots";

/* ---------- data ---------- */
// dx = sideways offset of the pin (world units) so nearby labels don't overlap
export const LOCATIONS = [
  { id: "tn", label: "Tamil Nadu", lat: 13.0827, lon: 80.2707, dx: 0.35 },
  { id: "hyd", label: "Hyderabad", lat: 17.385, lon: 78.4867, dx: -0.25 },
  { id: "kl", label: "Kerala", lat: 8.5241, lon: 76.9366, dx: -0.3 },
  { id: "ap", label: "Andhra Pradesh", lat: 16.5062, lon: 80.648, dx: 0.45 },
];

const HUB = { lat: 21.1458, lon: 79.0882 }; // arcs start from central India
const GOLD = "#ffc400";
const R = 1;

/* ---------- helpers ---------- */
const toVec = (lat, lon, r = R) => {
  const la = THREE.MathUtils.degToRad(lat);
  const lo = THREE.MathUtils.degToRad(lon);
  return new THREE.Vector3(Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)).multiplyScalar(r);
};

let dotTex = null;
const getDotTexture = () => {
  if (dotTex) return dotTex;
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.45, "rgba(255,255,255,0.95)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  dotTex = new THREE.CanvasTexture(c);
  return dotTex;
};

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- static layers ---------- */
function SphereDots() {
  const geo = useMemo(() => {
    const n = 2200;
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
      <pointsMaterial map={getDotTexture()} color={GOLD} size={0.012} transparent opacity={0.45}
        depthWrite={false} blending={THREE.AdditiveBlending} sizeAttenuation />
    </points>
  );
}

function IndiaDots() {
  const geo = useMemo(() => {
    const pos = new Float32Array(INDIA_DOTS.length * 3);
    INDIA_DOTS.forEach(([lat, lon], i) => toVec(lat, lon, R * 1.004).toArray(pos, i * 3));
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  return (
    <points geometry={geo}>
      <pointsMaterial map={getDotTexture()} color="#ffd633" size={0.024} transparent depthWrite={false}
        blending={THREE.AdditiveBlending} sizeAttenuation />
    </points>
  );
}

function Rim() {
  return (
    <mesh scale={1.002}>
      <sphereGeometry args={[R, 64, 64]} />
      <shaderMaterial transparent depthWrite={false} blending={THREE.AdditiveBlending}
        vertexShader={`varying vec3 vN; void main(){ vN = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`}
        fragmentShader={`varying vec3 vN; void main(){ float f = pow(1.0 - abs(vN.z), 3.0); gl_FragColor = vec4(1.0,0.77,0.0, f*0.9); }`} />
    </mesh>
  );
}

function Rings() {
  const rings = useMemo(
    () => [28, 0, -28].map((lat) =>
      Array.from({ length: 129 }, (_, i) => toVec(lat, (i / 128) * 360 - 180, R * 1.001))),
    []
  );
  return <>{rings.map((p, i) => <Line key={i} points={p} color={GOLD} lineWidth={0.6} transparent opacity={0.35} />)}</>;
}

/* ---------- pin + label (HTML overlay, fades when on far side) ---------- */
function Pin({ loc, active, onSelect }) {
  const anchor = useRef(null);
  const el = useRef(null);
  const surface = useMemo(() => toVec(loc.lat, loc.lon, R * 1.004), [loc]);
  const top = useMemo(() => {
    const n = surface.clone().normalize();
    const east = new THREE.Vector3(0, 1, 0).cross(n).normalize();
    return n.multiplyScalar(1.38).add(east.multiplyScalar(loc.dx ?? 0));
  }, [surface, loc]);
  const v = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    if (!anchor.current) return;
    anchor.current.getWorldPosition(v);
    if (el.current) el.current.style.opacity = v.z > 0.25 ? "1" : "0";
  });

  return (
    <>
      <Line points={[surface, top]} color={GOLD} lineWidth={1} dashed dashSize={0.03} gapSize={0.025}
        transparent opacity={active ? 1 : 0.6} />
      <group ref={anchor} position={top}>
        <Html center zIndexRange={[10, 0]} style={{ pointerEvents: "none" }}>
          <button ref={el} onClick={() => onSelect(loc.id)} aria-pressed={active}
            style={{
              pointerEvents: "auto", transition: "opacity .3s, background .2s", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              background: "none", border: 0, padding: 0, transform: "translateY(-22px)",
            }}>
            <span style={{
              padding: "5px 14px", borderRadius: 999, border: `1.5px solid ${GOLD}`,
              background: active ? GOLD : "rgba(15,10,0,.85)", color: active ? "#1a1200" : GOLD,
              font: "700 12px/1 Inter, system-ui, sans-serif", letterSpacing: ".04em",
              textTransform: "uppercase", whiteSpace: "nowrap",
            }}>{loc.label}</span>
            <svg width="26" height="34" viewBox="0 0 24 32" aria-hidden>
              <path d="M12 0C5.4 0 0 5.2 0 11.7 0 20 12 32 12 32s12-12 12-20.3C24 5.2 18.6 0 12 0z" fill={GOLD} />
              <circle cx="12" cy="11.5" r="4.2" fill="#1a1200" />
            </svg>
          </button>
        </Html>
      </group>
    </>
  );
}

/* ---------- connection arc + pulse at the selected location ---------- */
const ARC = 64;

function Connection({ loc }) {
  const { geo, pts, normal, quat } = useMemo(() => {
    const a = toVec(HUB.lat, HUB.lon);
    const b = toVec(loc.lat, loc.lon);
    const pts = Array.from({ length: ARC }, (_, i) => {
      const t = i / (ARC - 1);
      return a.clone().lerp(b, t).normalize().multiplyScalar(R * (1.01 + 0.14 * Math.sin(Math.PI * t)));
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
  useMemo(() => { born.current = performance.now(); }, [loc]);

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
      const k = (s % 1.6) / 1.6; // repeating ripple
      ring.current.scale.setScalar(0.02 + k * 0.12);
      ring.current.material.opacity = (1 - k) * 0.9;
    }
  });

  return (
    <>
      <points geometry={geo}>
        <pointsMaterial map={getDotTexture()} color="#fff1a8" size={0.03} transparent depthWrite={false}
          blending={THREE.AdditiveBlending} sizeAttenuation />
      </points>
      <mesh ref={head}><sphereGeometry args={[0.018, 16, 16]} /><meshBasicMaterial color="#ffffff" /></mesh>
      <group position={normal.clone().multiplyScalar(R * 1.006)} quaternion={quat}>
        <mesh ref={ring}>
          <ringGeometry args={[0.8, 1, 48]} />
          <meshBasicMaterial color={GOLD} transparent depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
        <mesh><circleGeometry args={[0.012, 24]} /><meshBasicMaterial color="#fff" /></mesh>
      </group>
    </>
  );
}

/* ---------- rotating globe ---------- */
function Globe({ selectedId, onSelect }) {
  const group = useRef(null);
  const rm = useMemo(reducedMotion, []);
  const selected = LOCATIONS.find((l) => l.id === selectedId) ?? null;

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    let tx;
    if (selected) {
      // bring the chosen location to the front-centre, with a gentle horizontal sway
      const sway = rm ? 0 : Math.sin(state.clock.elapsedTime * 0.7) * 0.1;
      const ty = -THREE.MathUtils.degToRad(selected.lon) + sway;
      tx = THREE.MathUtils.degToRad(selected.lat) * 0.8;
      const d = ((((ty - g.rotation.y + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI; // shortest path
      g.rotation.y += d * (1 - Math.exp(-dt * 3));
    } else {
      tx = 0.4;
      if (!rm) g.rotation.y += dt * 0.35; // continuous horizontal spin
    }
    g.rotation.x += (tx - g.rotation.x) * (1 - Math.exp(-dt * 3));
  });

  return (
    <>
      <Rim />
      <group ref={group}>
        <SphereDots />
        <Rings />
        <IndiaDots />
        {LOCATIONS.map((l) => <Pin key={l.id} loc={l} active={l.id === selectedId} onSelect={onSelect} />)}
        {selected && <Connection key={selected.id} loc={selected} />}
      </group>
    </>
  );
}

/* ---------- public component ---------- */
export default function IndiaGlobe({ selectedId, onSelect, className }) {
  return (
    <div className={className} style={{ width: "100%", aspectRatio: "1 / 1", maxWidth: 720 }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3.3], fov: 40 }} gl={{ alpha: true, antialias: true }}>
        <Globe selectedId={selectedId} onSelect={onSelect} />
      </Canvas>
    </div>
  );
}