"use client";

/**
 * Zero-network looping motion graphic (SVG) — behaves like a hero GIF
 * without the download cost or decode jank of raster GIFs.
 */
export function HeroVisual() {
  return (
    <div className="relative h-full min-h-[220px] w-full sm:min-h-[320px] lg:min-h-[420px]" aria-hidden>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ink/50 to-ink" />

      <div className="float-slow absolute bottom-[14%] right-[10%] h-52 w-52 rounded-full border border-teal/25 bg-teal/10" />
      <div className="float-medium absolute bottom-[28%] right-[28%] h-28 w-28 rounded-full bg-amber/20 blur-2xl" />

      <svg
        viewBox="0 0 420 420"
        className="absolute inset-0 m-auto h-[88%] w-[88%] max-w-[480px] drop-shadow-[0_0_40px_rgba(110,193,228,0.2)]"
      >
        <defs>
          <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ec1e4" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#9b4dca" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#4c076b" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="bar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#4c076b" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6ec1e4" />
          </linearGradient>
        </defs>

        <g className="orbit-spin origin-center" style={{ transformOrigin: "210px 210px" }}>
          <circle
            cx="210"
            cy="210"
            r="150"
            fill="none"
            stroke="url(#ring)"
            strokeWidth="1.25"
            strokeDasharray="8 14"
            opacity="0.7"
          />
          <circle cx="360" cy="210" r="5" fill="#6ec1e4">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite" />
          </circle>
        </g>

        <g className="orbit-spin-rev origin-center" style={{ transformOrigin: "210px 210px" }}>
          <circle
            cx="210"
            cy="210"
            r="112"
            fill="none"
            stroke="rgba(155,77,202,0.45)"
            strokeWidth="1"
            strokeDasharray="2 10"
          />
          <circle cx="210" cy="98" r="4" fill="#9b4dca" />
        </g>

        <circle cx="210" cy="210" r="58" fill="rgba(3,3,28,0.85)" stroke="rgba(255,255,255,0.12)" />
        <text
          x="210"
          y="216"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(255,255,255,0.85)"
          fontSize="11"
          letterSpacing="2.4"
          fontFamily="var(--font-display), system-ui"
          fontWeight="600"
        >
          GROWTH
        </text>

        {/* Live chart bars — gif-like loop */}
        <g transform="translate(78 268)">
          {[18, 28, 22, 36, 30, 42, 34, 48].map((h, i) => (
            <rect
              key={i}
              x={i * 16}
              y={48 - h}
              width="9"
              height={h}
              rx="2"
              fill="url(#bar)"
              style={{
                transformOrigin: `${i * 16 + 4.5}px 48px`,
                animation: `bar-rise ${1.8 + (i % 3) * 0.35}s ease-in-out ${i * 0.08}s infinite`,
              }}
            />
          ))}
        </g>

        {/* Network nodes */}
        <g>
          <line x1="120" y1="140" x2="180" y2="180" stroke="rgba(110,193,228,0.35)" strokeWidth="1" />
          <line x1="300" y1="130" x2="240" y2="175" stroke="rgba(155,77,202,0.35)" strokeWidth="1" />
          <line x1="140" y1="260" x2="185" y2="230" stroke="rgba(110,193,228,0.3)" strokeWidth="1" />
          <circle cx="120" cy="140" r="4" fill="#6ec1e4">
            <animate attributeName="r" values="3;5.5;3" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="130" r="4" fill="#9b4dca">
            <animate attributeName="r" values="3;5;3" dur="1.8s" begin="0.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="140" cy="260" r="4" fill="#6ec1e4">
            <animate attributeName="r" values="3;5;3" dur="2.6s" begin="0.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}
