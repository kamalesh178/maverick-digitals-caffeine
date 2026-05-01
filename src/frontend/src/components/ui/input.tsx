import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Layout & base
        "flex h-11 w-full min-w-0 rounded-xl border bg-white/80 px-4 py-2.5",
        "text-sm text-foreground font-body",
        // Backdrop
        "backdrop-blur-sm",
        // Border & shadow
        "border-border/70",
        "shadow-[0_1px_3px_oklch(0_0_0/0.04),inset_0_1px_0_oklch(1_0_0/0.8)]",
        // Placeholder
        "placeholder:text-muted-foreground/70",
        // Transition — only color + shadow (no layout/movement)
        "transition-[border-color,box-shadow,background-color] duration-200 ease-out",
        // Focus — crisp cyan glow, no movement
        "outline-none",
        "focus-visible:border-primary/60",
        "focus-visible:shadow-[0_0_0_3px_oklch(0.72_0.22_230/0.15),0_1px_4px_oklch(0_0_0/0.05),inset_0_1px_0_oklch(1_0_0/0.9)]",
        "focus-visible:bg-white",
        // File input
        "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        // Selection
        "selection:bg-primary/15 selection:text-foreground",
        // Disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // Validation
        "aria-invalid:border-destructive/60",
        "aria-invalid:shadow-[0_0_0_3px_oklch(0.55_0.22_25/0.15)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
