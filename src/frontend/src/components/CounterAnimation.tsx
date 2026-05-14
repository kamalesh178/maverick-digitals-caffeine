/**
 * CounterAnimation — number count-up when element enters viewport.
 * Props: end, duration (default 2000ms), prefix, suffix, className, decimals (default 0)
 * GPU-safe: no layout mutations. Uses requestAnimationFrame.
 */

import { type CSSProperties, useEffect, useRef } from "react";

interface CounterAnimationProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: CSSProperties;
  decimals?: number;
}

export default function CounterAnimation({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
  style,
  decimals = 0,
}: CounterAnimationProps) {
  const elRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasRunRef.current) {
            hasRunRef.current = true;
            observer.disconnect();

            const startTime = performance.now();

            function tick(now: number) {
              const elapsed = now - startTime;
              const t = Math.min(elapsed / duration, 1);
              // Quadratic ease-out: t * (2 - t)
              const eased = t * (2 - t);
              const value = eased * end;

              if (el) {
                const formatted =
                  decimals > 0
                    ? value.toLocaleString(undefined, {
                        minimumFractionDigits: decimals,
                        maximumFractionDigits: decimals,
                      })
                    : Math.round(value).toLocaleString();
                el.textContent = `${prefix}${formatted}${suffix}`;
              }

              if (t < 1) {
                rafRef.current = requestAnimationFrame(tick);
              }
            }

            rafRef.current = requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, prefix, suffix, decimals]);

  // Initial display value
  const initialFormatted =
    decimals > 0
      ? (0).toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : "0";

  return (
    <span ref={elRef} className={className} style={style}>
      {prefix}
      {initialFormatted}
      {suffix}
    </span>
  );
}
