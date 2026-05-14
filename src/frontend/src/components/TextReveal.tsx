/**
 * TextReveal — reveals text word by word on scroll.
 * Props: text, as (default 'h2'), className, delay (default 0), staggerMs (default 40)
 * GPU-only: transform + opacity. IntersectionObserver trigger.
 */
import { type CSSProperties, useEffect, useRef } from "react";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  style?: CSSProperties;
  delay?: number;
  staggerMs?: number;
}

export default function TextReveal({
  text,
  as: Tag = "h2",
  className = "",
  style,
  delay = 0,
  staggerMs = 40,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const words = text.split(" ");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.disconnect();
            for (const span of wordRefs.current) {
              if (span) {
                span.style.transform = "translateY(0)";
                span.style.opacity = "1";
              }
            }
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={style}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: positional word
          key={index}
          style={{
            display: "inline-block",
            overflow: "hidden",
            marginRight: "0.25em",
            verticalAlign: "bottom",
          }}
        >
          <span
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            style={{
              display: "inline-block",
              transform: "translateY(100%)",
              opacity: 0,
              transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${
                delay + index * staggerMs
              }ms, opacity 0.4s ease ${delay + index * staggerMs}ms`,
              willChange: "transform",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
