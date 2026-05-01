import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn("flex flex-col gap-4", alignClasses[align], className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary font-display">
          {align === "center" && (
            <span className="flex-shrink-0 w-10 h-px gradient-primary opacity-70 rounded-full" />
          )}
          <span className="relative">
            {eyebrow}
            <span className="absolute -bottom-0.5 left-0 right-0 h-px gradient-primary opacity-40 rounded-full" />
          </span>
          {align === "center" && (
            <span className="flex-shrink-0 w-10 h-px gradient-primary opacity-70 rounded-full" />
          )}
          {align === "left" && (
            <span className="flex-shrink-0 w-12 h-px gradient-primary opacity-70 rounded-full" />
          )}
        </span>
      )}

      <h2
        className={cn(
          "font-display font-extrabold leading-[1.1] tracking-tight",
          "text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl",
          "text-foreground",
        )}
      >
        {title}{" "}
        {highlight && (
          <span className="text-gradient-primary">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground text-lg sm:text-xl leading-relaxed font-body",
            align === "center" && "max-w-2xl",
            align === "left" && "max-w-xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
