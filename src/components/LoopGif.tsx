"use client";

/**
 * Compact looping SVG "gif" tiles for service/automation moments.
 * Inline SVG avoids heavy GIF payloads and keeps LCP clean.
 */
export function LoopGif({
  variant = "pulse",
  className = "",
}: {
  variant?: "pulse" | "radar" | "chat" | "chart";
  className?: string;
}) {
  if (variant === "radar") {
    return (
      <svg viewBox="0 0 120 120" className={className} aria-hidden>
        <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(15,159,138,0.2)" strokeWidth="1" />
        <circle cx="60" cy="60" r="32" fill="none" stroke="rgba(15,159,138,0.25)" strokeWidth="1" />
        <g style={{ transformOrigin: "60px 60px" }} className="orbit-spin">
          <path d="M60 60 L60 16 A44 44 0 0 1 98 40 Z" fill="rgba(15,159,138,0.25)" />
          <circle cx="98" cy="40" r="3" fill="#0f9f8a" />
        </g>
        <circle cx="60" cy="60" r="4" fill="#e29a2e" />
      </svg>
    );
  }

  if (variant === "chat") {
    return (
      <svg viewBox="0 0 120 120" className={className} aria-hidden>
        <rect x="18" y="28" width="70" height="44" rx="14" fill="rgba(15,159,138,0.18)" stroke="#0f9f8a" />
        <circle cx="38" cy="50" r="3.5" fill="#0f9f8a">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="52" cy="50" r="3.5" fill="#0f9f8a">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="66" cy="50" r="3.5" fill="#0f9f8a">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <path d="M40 72 L34 86 L52 72 Z" fill="rgba(15,159,138,0.35)" />
        <rect x="48" y="58" width="54" height="34" rx="12" fill="rgba(226,154,46,0.18)" stroke="#e29a2e" />
        <rect x="58" y="70" width="28" height="4" rx="2" fill="#e29a2e" opacity="0.7">
          <animate attributeName="width" values="12;34;18;28" dur="2.4s" repeatCount="indefinite" />
        </rect>
      </svg>
    );
  }

  if (variant === "chart") {
    return (
      <svg viewBox="0 0 120 120" className={className} aria-hidden>
        {[20, 34, 28, 46, 38, 54].map((h, i) => (
          <rect
            key={i}
            x={16 + i * 16}
            y={90 - h}
            width="10"
            height={h}
            rx="2"
            fill={i % 2 ? "#e29a2e" : "#0f9f8a"}
            opacity="0.85"
            style={{
              transformOrigin: `${16 + i * 16 + 5}px 90px`,
              animation: `bar-rise ${1.6 + (i % 3) * 0.3}s ease-in-out ${i * 0.1}s infinite`,
            }}
          />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <circle cx="60" cy="60" r="36" fill="none" stroke="rgba(15,159,138,0.25)" strokeWidth="2" />
      <circle cx="60" cy="60" r="22" fill="rgba(15,159,138,0.12)" stroke="#0f9f8a" strokeWidth="1.5">
        <animate attributeName="r" values="18;26;18" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.55;1;0.55" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="60" r="6" fill="#e29a2e" />
    </svg>
  );
}
