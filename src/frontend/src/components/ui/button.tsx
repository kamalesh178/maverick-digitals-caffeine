import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold",
    "transition-all duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    "outline-none",
    // Focus ring — clean, visible, no movement
    "focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "gradient-primary text-white",
          "shadow-[0_2px_8px_oklch(0.72_0.22_230/0.3)]",
          "hover:shadow-[0_4px_20px_oklch(0.72_0.22_230/0.45)] hover:brightness-105 hover:scale-[1.02]",
          "active:scale-[0.97]",
        ].join(" "),
        destructive: [
          "bg-destructive text-destructive-foreground",
          "shadow-[0_1px_4px_oklch(0_0_0/0.1)]",
          "hover:bg-destructive/90 hover:scale-[1.02]",
          "active:scale-[0.97]",
          "focus-visible:ring-destructive/50",
        ].join(" "),
        outline: [
          "border-2 border-primary/40 bg-transparent text-primary",
          "hover:bg-primary/8 hover:border-primary/70 hover:scale-[1.02]",
          "active:scale-[0.97]",
        ].join(" "),
        secondary: [
          "bg-secondary/10 text-secondary border border-secondary/20",
          "hover:bg-secondary/18 hover:border-secondary/40 hover:scale-[1.02]",
          "active:scale-[0.97]",
        ].join(" "),
        ghost: [
          "text-primary bg-transparent",
          "hover:bg-primary/8 hover:scale-[1.02]",
          "active:scale-[0.97]",
        ].join(" "),
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-11 rounded-xl px-7 text-base has-[>svg]:px-5",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
