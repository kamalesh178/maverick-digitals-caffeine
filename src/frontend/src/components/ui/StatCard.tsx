import { cn } from "@/lib/utils";
import { AnimatedCounter } from "./AnimatedCounter";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  className?: string;
  variant?: "cyan" | "gold" | "purple";
}

export function StatCard({
  value,
  suffix,
  prefix,
  label,
  sublabel,
  className,
  variant = "cyan",
}: StatCardProps) {
  const cardStyles = {
    cyan: [
      "border-primary/18 bg-card/80 backdrop-blur-xl",
      "shadow-[0_4px_20px_oklch(0.32_0.09_250/0.08),inset_0_1px_0_oklch(0.97_0.01_80/0.9)]",
      "hover:border-primary/35 hover:shadow-[0_6px_32px_oklch(0.32_0.09_250/0.16),inset_0_1px_0_oklch(0.97_0.01_80/0.9)]",
    ].join(" "),
    gold: [
      "border-accent/18 bg-card/80 backdrop-blur-xl",
      "shadow-[0_4px_20px_oklch(0.72_0.14_65/0.08),inset_0_1px_0_oklch(0.97_0.01_80/0.9)]",
      "hover:border-accent/35 hover:shadow-[0_6px_32px_oklch(0.72_0.14_65/0.16),inset_0_1px_0_oklch(0.97_0.01_80/0.9)]",
    ].join(" "),
    purple: [
      "border-secondary/18 bg-card/80 backdrop-blur-xl",
      "shadow-[0_4px_20px_oklch(0.58_0.08_170/0.08),inset_0_1px_0_oklch(0.97_0.01_80/0.9)]",
      "hover:border-secondary/35 hover:shadow-[0_6px_32px_oklch(0.58_0.08_170/0.16),inset_0_1px_0_oklch(0.97_0.01_80/0.9)]",
    ].join(" "),
  };

  const accentBars = {
    cyan: "from-primary/0 via-primary/40 to-primary/0",
    gold: "from-accent/0 via-accent/40 to-accent/0",
    purple: "from-secondary/0 via-secondary/40 to-secondary/0",
  };

  const valueStyles = {
    cyan: "text-gradient-primary",
    gold: "text-gradient-accent",
    purple: "text-gradient-primary",
  };

  const dotStyles = {
    cyan: "bg-primary",
    gold: "bg-accent",
    purple: "bg-secondary",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl border px-6 py-7 text-center transition-all duration-300 overflow-hidden",
        cardStyles[variant],
        className,
      )}
    >
      {/* Top accent line */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r",
          accentBars[variant],
        )}
      />

      {/* Dot indicator */}
      <span
        className={cn(
          "absolute top-4 right-4 w-2 h-2 rounded-full opacity-60",
          dotStyles[variant],
        )}
      />

      {/* Value */}
      <div
        className={cn(
          "font-display font-black text-5xl sm:text-6xl mb-1.5 leading-none tracking-tight",
          valueStyles[variant],
        )}
      >
        <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
      </div>

      {/* Label */}
      <div className="font-display font-semibold text-foreground text-sm sm:text-base tracking-wide uppercase mt-2">
        {label}
      </div>

      {/* Sublabel */}
      {sublabel && (
        <div className="text-muted-foreground text-xs sm:text-sm mt-1.5 leading-snug">
          {sublabel}
        </div>
      )}
    </div>
  );
}
