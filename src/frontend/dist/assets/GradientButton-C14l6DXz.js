import { r as reactExports, j as jsxRuntimeExports } from "./index-Cj8-jWY_.js";
import { c as cn } from "./utils-DWi2mX0G.js";
const GradientButton = reactExports.forwardRef(
  ({
    className,
    variant = "primary",
    size = "md",
    glow = false,
    children,
    ...props
  }, ref) => {
    const base = [
      "relative inline-flex items-center justify-center font-display font-semibold rounded-xl",
      "cursor-pointer select-none overflow-hidden",
      "transition-all duration-200 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      "active:scale-[0.97]"
    ].join(" ");
    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5 tracking-[0.01em]",
      md: "px-6 py-3 text-base gap-2 tracking-[0.01em]",
      lg: "px-8 py-4 text-lg gap-2.5 tracking-[0.015em]",
      xl: "px-10 py-5 text-xl gap-3 tracking-[0.015em]"
    };
    const variants = {
      primary: [
        "gradient-primary text-white",
        "shadow-[0_2px_12px_oklch(0.32_0.09_250/0.35),0_1px_3px_oklch(0_0_0/0.15)]",
        "hover:shadow-[0_4px_24px_oklch(0.32_0.09_250/0.5),0_2px_8px_oklch(0_0_0/0.12)]",
        "hover:scale-[1.025] hover:brightness-105"
      ].join(" "),
      outline: [
        "border-2 border-primary text-primary bg-transparent",
        "shadow-[0_1px_4px_oklch(0.32_0.09_250/0.1)]",
        "hover:bg-primary/8 hover:shadow-[0_2px_16px_oklch(0.32_0.09_250/0.2)] hover:scale-[1.02]"
      ].join(" "),
      ghost: [
        "text-primary bg-transparent",
        "hover:bg-primary/8 hover:scale-[1.02]"
      ].join(" "),
      gold: [
        "gradient-accent text-background",
        "shadow-[0_2px_12px_oklch(0.72_0.14_65/0.35),0_1px_3px_oklch(0_0_0/0.15)]",
        "hover:shadow-[0_4px_24px_oklch(0.72_0.14_65/0.5),0_2px_8px_oklch(0_0_0/0.12)]",
        "hover:scale-[1.025] hover:brightness-105"
      ].join(" ")
    };
    const glowStyles = {
      primary: glow ? "shadow-[0_0_28px_oklch(0.32_0.09_250/0.45),0_0_56px_oklch(0.32_0.09_250/0.2),0_2px_12px_oklch(0.32_0.09_250/0.35)]" : "",
      gold: glow ? "shadow-[0_0_28px_oklch(0.72_0.14_65/0.45),0_0_56px_oklch(0.72_0.14_65/0.2),0_2px_12px_oklch(0.72_0.14_65/0.35)]" : "",
      outline: "",
      ghost: ""
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        ref,
        className: cn(
          base,
          sizes[size],
          variants[variant],
          glowStyles[variant],
          "btn-ripple",
          className
        ),
        ...props,
        children: [
          variant === "primary" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "linear-gradient(105deg, transparent 20%, oklch(1 0 0 / 0.18) 50%, transparent 80%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2.5s linear infinite"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 inline-flex items-center gap-[inherit]", children })
        ]
      }
    );
  }
);
GradientButton.displayName = "GradientButton";
export {
  GradientButton as G
};
