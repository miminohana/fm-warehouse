import type { CSSProperties } from "react";

/* มาสคอต "น้องกล่อง": กล่องสินค้าใส่หมวกเซฟตี้ สีตามแบรนด์ */

type Pose = "wave" | "phone";

export default function Mascot({
  pose = "wave",
  label,
  className = "",
  style,
}: {
  pose?: Pose;
  label: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 200 220" role="img" aria-label={label} className={`mascot ${className}`} style={style}>
      <ellipse cx="100" cy="211" rx="48" ry="7" fill="#0b2540" opacity="0.18" className="mascot-shadow" />

      <g className="mascot-body">
        {/* ขา */}
        <rect x="76" y="170" width="16" height="32" rx="7" fill="#0b2540" />
        <rect x="108" y="170" width="16" height="32" rx="7" fill="#0b2540" />
        <rect x="70" y="196" width="26" height="10" rx="5" fill="#13345a" />
        <rect x="104" y="196" width="26" height="10" rx="5" fill="#13345a" />

        {/* แขนซ้าย */}
        <path d="M48 128 L30 152" stroke="#e0912a" strokeWidth="11" strokeLinecap="round" />
        <circle cx="28" cy="155" r="8" fill="#f2a32c" />

        {/* ตัวกล่อง */}
        <rect x="44" y="80" width="112" height="100" rx="16" fill="#f2a32c" />
        <path d="M44 96 a16 16 0 0 1 16 -16 h80 a16 16 0 0 1 16 16 v6 H44z" fill="#e0912a" />
        <rect x="70" y="154" width="60" height="16" rx="4" fill="#fff" opacity="0.92" />
        <text
          x="100"
          y="166.5"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="#0b2540"
          fontFamily="system-ui, sans-serif"
        >
          FWM
        </text>

        {/* หน้า */}
        <g className="mascot-eyes">
          <ellipse cx="80" cy="124" rx="6.5" ry="8.5" fill="#0b2540" />
          <ellipse cx="120" cy="124" rx="6.5" ry="8.5" fill="#0b2540" />
          <circle cx="82.5" cy="120.5" r="2.4" fill="#fff" />
          <circle cx="122.5" cy="120.5" r="2.4" fill="#fff" />
        </g>
        <ellipse cx="66" cy="139" rx="7" ry="4.5" fill="#ff8f7a" opacity="0.55" />
        <ellipse cx="134" cy="139" rx="7" ry="4.5" fill="#ff8f7a" opacity="0.55" />
        <path d="M88 137 Q100 149 112 137" fill="none" stroke="#0b2540" strokeWidth="4" strokeLinecap="round" />

        {/* หมวกเซฟตี้ */}
        <path d="M54 84 Q54 34 100 32 Q146 34 146 84 Z" fill="#328cc1" />
        <rect x="93" y="34" width="14" height="48" rx="7" fill="#4aa3d8" />
        <rect x="38" y="78" width="124" height="11" rx="5.5" fill="#1f6a99" />

        {/* แขนขวา */}
        {pose === "wave" ? (
          <g className="mascot-wave">
            <path d="M152 124 L176 98" stroke="#e0912a" strokeWidth="11" strokeLinecap="round" />
            <circle cx="179" cy="94" r="9" fill="#f2a32c" />
          </g>
        ) : (
          <g className="mascot-phone">
            <path d="M152 132 L168 116" stroke="#e0912a" strokeWidth="11" strokeLinecap="round" />
            <rect x="160" y="88" width="20" height="34" rx="4" fill="#0b2540" />
            <rect x="163" y="92" width="14" height="22" rx="2" fill="#7cc4ee" />
            <circle cx="170" cy="118" r="8" fill="#f2a32c" />
          </g>
        )}
      </g>
    </svg>
  );
}
