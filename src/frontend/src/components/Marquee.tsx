/**
 * Marquee — horizontal infinite auto-scroll ticker strip.
 * Props: items: string[], speed (default 40), className, separator (default '·')
 * Pure CSS animation, GPU-only (transform). Pauses on hover.
 */

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  separator?: string;
}

export default function Marquee({
  items,
  speed = 40,
  className = "",
  separator = "·",
}: MarqueeProps) {
  // Double items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden select-none ${className}`}
      aria-hidden="true"
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
        padding: "16px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
          width: "max-content",
          animation: `marquee-scroll ${speed}s linear infinite`,
          willChange: "transform",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState =
            "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState =
            "running";
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`marquee-${i}-${item}`}
            className="shrink-0"
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          >
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "#374151",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "#2563EB",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
