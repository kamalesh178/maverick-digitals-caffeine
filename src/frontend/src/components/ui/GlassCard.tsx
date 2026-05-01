import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glow" | "gold" | "solid";
  hover?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { className, variant = "default", hover = false, children, ...props },
    ref,
  ) => {
    const base =
      "rounded-2xl backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300";

    const variants = {
      default: [
        "bg-card/90",
        "border border-border/60",
        "shadow-[0_4px_24px_oklch(0_0_0/0.07),0_1px_4px_oklch(0_0_0/0.04),inset_0_1px_0_oklch(0.97_0.01_80/0.9),inset_0_-1px_0_oklch(0.86_0.03_75/0.3)]",
      ].join(" "),
      glow: [
        "bg-card/88",
        "border border-primary/20",
        "shadow-[0_4px_28px_oklch(0.32_0.09_250/0.1),0_1px_4px_oklch(0_0_0/0.04),inset_0_1px_0_oklch(0.97_0.01_80/0.9),inset_0_-1px_0_oklch(0.32_0.09_250/0.1)]",
      ].join(" "),
      gold: [
        "bg-card/88",
        "border border-accent/20",
        "shadow-[0_4px_28px_oklch(0.72_0.14_65/0.1),0_1px_4px_oklch(0_0_0/0.04),inset_0_1px_0_oklch(0.97_0.01_80/0.9),inset_0_-1px_0_oklch(0.72_0.14_65/0.1)]",
      ].join(" "),
      solid: [
        "bg-card/95",
        "border border-border",
        "shadow-[0_2px_12px_oklch(0_0_0/0.06),inset_0_1px_0_oklch(0.97_0.01_80/0.95)]",
      ].join(" "),
    };

    const hoverStyles = hover
      ? "cursor-pointer hover:shadow-[0_12px_48px_oklch(0.32_0.09_250/0.14),0_2px_8px_oklch(0_0_0/0.06),inset_0_1px_0_oklch(0.97_0.01_80/0.9)] hover:border-primary/30 hover:-translate-y-0.5"
      : "";

    return (
      <div
        ref={ref}
        className={cn(base, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

GlassCard.displayName = "GlassCard";
export { GlassCard };
