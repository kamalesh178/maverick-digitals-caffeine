import { r as reactExports, j as jsxRuntimeExports } from "./index-Cj8-jWY_.js";
function CounterAnimation({
  end,
  duration = 2e3,
  prefix = "",
  suffix = "",
  className = "",
  style,
  decimals = 0
}) {
  const elRef = reactExports.useRef(null);
  const rafRef = reactExports.useRef(null);
  const hasRunRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasRunRef.current) {
            let tick = function(now) {
              const elapsed = now - startTime;
              const t = Math.min(elapsed / duration, 1);
              const eased = t * (2 - t);
              const value = eased * end;
              if (el) {
                const formatted = decimals > 0 ? value.toLocaleString(void 0, {
                  minimumFractionDigits: decimals,
                  maximumFractionDigits: decimals
                }) : Math.round(value).toLocaleString();
                el.textContent = `${prefix}${formatted}${suffix}`;
              }
              if (t < 1) {
                rafRef.current = requestAnimationFrame(tick);
              }
            };
            hasRunRef.current = true;
            observer.disconnect();
            const startTime = performance.now();
            rafRef.current = requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, prefix, suffix, decimals]);
  const initialFormatted = decimals > 0 ? 0 .toLocaleString(void 0, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }) : "0";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref: elRef, className, style, children: [
    prefix,
    initialFormatted,
    suffix
  ] });
}
function Marquee({
  items,
  speed = 40,
  className = "",
  separator = "·"
}) {
  const doubled = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `overflow-hidden select-none ${className}`,
      "aria-hidden": "true",
      style: {
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
        padding: "16px 0"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            display: "flex",
            gap: "2rem",
            width: "max-content",
            animation: `marquee-scroll ${speed}s linear infinite`,
            willChange: "transform"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.animationPlayState = "paused";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.animationPlayState = "running";
          },
          children: doubled.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "shrink-0",
              style: { display: "flex", alignItems: "center", gap: "2rem" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#374151",
                      whiteSpace: "nowrap"
                    },
                    children: item
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      color: "#2563EB",
                      fontSize: "0.875rem",
                      fontWeight: 500
                    },
                    children: separator
                  }
                )
              ]
            },
            `marquee-${i}-${item}`
          ))
        }
      )
    }
  );
}
export {
  CounterAnimation as C,
  Marquee as M
};
