/**
 * AmbientGlow — atmospheric background glow blobs. Purely decorative.
 * Props: variant ('hero' | 'section' | 'footer'), className
 * Static glows — no animation for premium feel. pointer-events:none aria-hidden.
 */

interface AmbientGlowProps {
  variant?: "hero" | "section" | "footer";
  className?: string;
}

export default function AmbientGlow({
  variant = "section",
  className = "",
}: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {variant === "hero" && (
        <>
          {/* Large amber glow — top-right */}
          <div
            style={{
              position: "absolute",
              top: "-10%",
              right: "-10%",
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(80px)",
            }}
          />
          {/* Large teal glow — bottom-left */}
          <div
            style={{
              position: "absolute",
              bottom: "-10%",
              left: "-10%",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(70px)",
            }}
          />
        </>
      )}

      {variant === "section" && (
        <>
          {/* Medium amber glow — right side */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              right: "-8%",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(70px)",
            }}
          />
          {/* Medium teal glow — left side */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "-8%",
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          />
        </>
      )}

      {variant === "footer" && (
        /* Small teal glow — center */
        <div
          style={{
            position: "absolute",
            top: "0%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
      )}
    </div>
  );
}
