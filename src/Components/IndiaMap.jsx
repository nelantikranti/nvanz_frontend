// import React, { useMemo } from "react";

// /* ---------- Size settings ---------- */
// const VIEW_W = 684;
// const VIEW_H = 660;
// const BOX_W = 363;
// const BOX_H = 345;
// // how much the 684x660 drawing is shrunk to fit the 363x345 box
// const SCALE = Math.min(BOX_W / VIEW_W, BOX_H / VIEW_H); // ≈ 0.5227
// const px = (n) => n / SCALE; // real screen pixels → SVG units

// const DOT_SIZE = 12;   // location dot diameter (px)
// const FONT_SIZE = 11;  // label size (px)

// /* ---------- Dot grid ---------- */
// const GRID = 20;
// const X0 = 36;
// const Y0 = 33;

// const ROWS = [
//   [[7, 8]], [[6, 10]], [[6, 11]], [[7, 11]], [[7, 11]],
//   [[5, 12]], [[4, 12]], [[3, 15]], [[3, 18], [29, 31]], [[2, 30]],
//   [[2, 29]], [[2, 28]], [[3, 22], [26, 27]], [[1, 22], [26, 26]], [[0, 21]],
//   [[1, 21]], [[1, 19]], [[3, 19]], [[4, 17]], [[5, 17]],
//   [[5, 16]], [[6, 15]], [[6, 14]], [[6, 13]], [[7, 12]],
//   [[7, 12]], [[7, 12]], [[7, 11]], [[8, 10]], [[9, 10]], [[9, 10]],
// ];

// /* ---------- Locations ---------- */
// const LOCATIONS = [
//   { name: "Hyderabad",      x: 252, y: 433, lx: 272, ly: 437, primary: true, delay: 0 },
//   { name: "Andhra Pradesh", x: 280, y: 467, lx: 300, ly: 471, delay: 0.6 },
//   { name: "Tamil Nadu",     x: 256, y: 572, lx: 276, ly: 576, delay: 1.2 },
//   { name: "Kerala",         x: 204, y: 588, lx: 224, ly: 610, delay: 1.8 },
// ];

// export default function IndiaDotMap({ className = "" }) {
//   const dots = useMemo(() => {
//     const out = [];
//     ROWS.forEach((segments, r) => {
//       segments.forEach(([from, to]) => {
//         for (let c = from; c <= to; c++) {
//           const x = X0 + c * GRID;
//           const y = Y0 + r * GRID;
//           const hidden = LOCATIONS.some(
//             (l) => Math.hypot(l.x - x, l.y - y) < px(DOT_SIZE / 2) + 6
//           );
//           if (!hidden) out.push({ x, y, key: `${r}-${c}` });
//         }
//       });
//     });
//     return out;
//   }, []);

//   return (
//     <div
//       className={`relative shrink-0 w-[363px] h-[345px] overflow-hidden rounded-2xl  ${className}`}
//     >
//       <style>{`
//         .map-dot { animation: dotFade 0.8s ease-out both; }
//         .ripple {
//           transform-box: fill-box;
//           transform-origin: center;
//           animation: ripple 2.6s ease-out infinite;
//         }
//         .core {
//           transform-box: fill-box;
//           transform-origin: center;
//           animation: corePulse 2.6s ease-in-out infinite;
//         }
//         @keyframes ripple {
//           0%   { transform: scale(0.45); opacity: 0.9; }
//           100% { transform: scale(2);    opacity: 0; }
//         }
//         @keyframes corePulse {
//           0%, 100% { transform: scale(1); }
//           50%      { transform: scale(1.2); }
//         }
//         @keyframes dotFade { from { opacity: 0; } to { opacity: 1; } }
//         @media (prefers-reduced-motion: reduce) {
//           .ripple, .core, .map-dot { animation: none; }
//         }
//       `}</style>

//       <svg
//         viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
//         width={BOX_W}
//         height={BOX_H}
//         preserveAspectRatio="xMidYMid meet"
//         role="img"
//         aria-label="Map of India with our locations highlighted"
//       >
//         {/* Dotted India */}
//         <g fill="#8a6d2b" opacity="0.8">
//           {dots.map((d, i) => (
//             <circle
//               key={d.key}
//               cx={d.x}
//               cy={d.y}
//               r={px(1.5)}
//               className="map-dot"
//               style={{ animationDelay: `${(i % 40) * 15}ms` }}
//             />
//           ))}
//         </g>

//         {/* Locations */}
//         {LOCATIONS.map((l) => {
//           const color = l.primary ? "#ffffff" : "#f0a90f";
//           const ringR = px(l.primary ? 15 : 13);
//           return (
//             <g key={l.name}>
//               {/* static ring */}
//               <circle
//                 cx={l.x}
//                 cy={l.y}
//                 r={ringR}
//                 fill="none"
//                 stroke="#c9b27c"
//                 strokeOpacity="0.7"
//                 strokeWidth={px(1.5)}
//               />

//               {/* ripple waves */}
//               {[0, 1].map((n) => (
//                 <circle
//                   key={n}
//                   cx={l.x}
//                   cy={l.y}
//                   r={ringR}
//                   fill="none"
//                   stroke={color}
//                   strokeWidth={px(1)}
//                   className="ripple"
//                   style={{ animationDelay: `${l.delay + n * 1.3}s` }}
//                 />
//               ))}

//               {/* 12px dot */}
//               <circle
//                 cx={l.x}
//                 cy={l.y}
//                 r={px(DOT_SIZE / 2)}
//                 fill={color}
//                 className="core"
//                 style={{ animationDelay: `${l.delay}s` }}
//               />

//               {/* 11px bold label */}
//               <text
//                 x={l.lx}
//                 y={l.ly}
//                 fill="#fff"
//                 fontSize={px(FONT_SIZE)}
//                 fontWeight="700"
//                 fontFamily="Inter, system-ui, sans-serif"
//               >
//                 {l.name}
//               </text>
//             </g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// }




import React, { useMemo } from "react";

/* ---------- Size settings ---------- */
const VIEW_W = 684;
const VIEW_H = 660;
const BOX_W = 363;
const BOX_H = 345;
const SCALE = Math.min(BOX_W / VIEW_W, BOX_H / VIEW_H); // ≈ 0.5227
const px = (n) => n / SCALE; // real screen px → SVG units

const DOT_SIZE = 12;   // location dot diameter (px)
const FONT_SIZE = 11;  // label size (px)

/* ---------- Real-geography projection (lat/lon → SVG x,y) ---------- */
const MIN_LON = 68.172;
const MAX_LAT = 37.0976;
const K = 0.92718;     // cos(22°) – keeps India's proportions correct
const S = 20.6726;     // units per degree
const OX = 61.9335;
const OY = 30;
const project = (lat, lon) => ({
  x: OX + (lon - MIN_LON) * K * S,
  y: OY + (MAX_LAT - lat) * S,
});

/* ---------- Dot grid generated from India's real boundary ---------- */
const GRID = 16;
const X0 = 14;
const Y0 = 10;
// each row = list of [startCol, endCol] segments
const ROWS = [
  [], [], [[9, 12]], [[9, 13], [16, 16]], [[10, 17]], [[10, 16]], [[10, 16]],
  [[11, 16]], [[11, 15]], [[11, 16]], [[10, 18]], [[9, 17]],
  [[9, 17], [34, 37]], [[8, 19], [33, 37]], [[5, 22], [27, 27], [32, 37]],
  [[6, 35]], [[6, 27], [29, 35]], [[7, 27], [32, 34]], [[4, 27], [31, 34]],
  [[4, 27], [31, 33]], [[5, 28], [33, 33]], [[5, 27]], [[6, 7], [9, 25]],
  [[9, 25]], [[9, 23]], [[9, 22]], [[9, 21]], [[9, 20]], [[10, 19]],
  [[10, 17]], [[11, 17]], [[11, 17]], [[11, 17]], [[12, 17]], [[12, 17]],
  [[13, 17]], [[13, 16]], [[13, 15]], [[14, 15]], [], [],
];

/* ---------- Locations (real lat/lon + label offset in px) ---------- */
const LOCATIONS = [
  { name: "Hyderabad",      lat: 17.385,  lon: 78.4867, dx: 34, dy: -6,  primary: true, delay: 0 },
  { name: "Andhra Pradesh", lat: 16.5062, lon: 80.648,  dx: 30, dy: 10,  delay: 0.6 },
  { name: "Tamil Nadu",     lat: 13.0827, lon: 80.2707, dx: 28, dy: 7,   delay: 1.2 },
  { name: "Kerala",         lat: 9.9312,  lon: 76.2711, dx: 26, dy: 22,  delay: 1.8 },
   { name: "Karnataka",      lat: 12.9716, lon: 77.5946, dx: -20, dy: 4,  anchor: "end", delay: 2.4 },
  { name: "Lucknow",        lat: 26.8467, lon: 80.9462, dx: 30, dy: 4,   delay: 3.0 },
].map((l) => ({ ...l, ...project(l.lat, l.lon) }));

export default function IndiaDotMap({ className = "" }) {
  const dots = useMemo(() => {
    const out = [];
    ROWS.forEach((segments, r) => {
      segments.forEach(([from, to]) => {
        for (let c = from; c <= to; c++) {
          const x = X0 + c * GRID;
          const y = Y0 + r * GRID;
          const hidden = LOCATIONS.some(
            (l) => Math.hypot(l.x - x, l.y - y) < px(DOT_SIZE / 2) + 4
          );
          if (!hidden) out.push({ x, y, key: `${r}-${c}` });
        }
      });
    });
    return out;
  }, []);

  return (
    <div
      className={`relative shrink-0 w-[363px] h-[345px] overflow-hidden rounded-2xl   ${className}`}
    >
      <style>{`
        .map-dot { animation: dotFade 0.8s ease-out both; }
        .ripple {
          transform-box: fill-box;
          transform-origin: center;
          animation: ripple 2.6s ease-out infinite;
        }
        .core {
          transform-box: fill-box;
          transform-origin: center;
          animation: corePulse 2.6s ease-in-out infinite;
        }
        @keyframes ripple {
          0%   { transform: scale(0.45); opacity: 0.9; }
          100% { transform: scale(2);    opacity: 0; }
        }
        @keyframes corePulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.2); }
        }
        @keyframes dotFade { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .ripple, .core, .map-dot { animation: none; }
        }
      `}</style>

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        width={BOX_W}
        height={BOX_H}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Map of India with our locations highlighted"
      >
        {/* Dotted India */}
        <g fill="#8a6d2b" opacity="0.85">
          {dots.map((d, i) => (
            <circle
              key={d.key}
              cx={d.x}
              cy={d.y}
              r={px(1.3)}
              className="map-dot"
              style={{ animationDelay: `${(i % 40) * 15}ms` }}
            />
          ))}
        </g>

        {/* Locations */}
        {LOCATIONS.map((l) => {
          const color = l.primary ? "#ffffff" : "#f0a90f";
          const ringR = px(l.primary ? 15 : 13);
          return (
            <g key={l.name}>
              <circle
                cx={l.x}
                cy={l.y}
                r={ringR}
                fill="none"
                stroke="#c9b27c"
                strokeOpacity="0.7"
                strokeWidth={px(1.5)}
              />
              {[0, 1].map((n) => (
                <circle
                  key={n}
                  cx={l.x}
                  cy={l.y}
                  r={ringR}
                  fill="none"
                  stroke={color}
                  strokeWidth={px(1)}
                  className="ripple"
                  style={{ animationDelay: `${l.delay + n * 1.3}s` }}
                />
              ))}
              <circle
                cx={l.x}
                cy={l.y}
                r={px(DOT_SIZE / 2)}
                fill={color}
                className="core"
                style={{ animationDelay: `${l.delay}s` }}
              />
             <text
  x={l.x + px(l.dx)}
  y={l.y + px(l.dy)}
  textAnchor={l.anchor || "start"}
  fill="#fff"
  fontSize={px(FONT_SIZE)}
  fontWeight="700"
  fontFamily="Inter, system-ui, sans-serif"
>
  {l.name}
</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}