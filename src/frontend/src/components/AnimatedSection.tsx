import { type Variants, motion, useInView } from "motion/react";
import { useRef } from "react";

export type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "stagger-children";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
}

// ─── Premium easing — cubic-bezier(0.16, 1, 0.3, 1) matches hashgraphvc feel ──
const EXPO_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number];

const SINGLE_VARIANTS: Record<
  Exclude<AnimationVariant, "stagger-children">,
  Variants
> = {
  "fade-up": {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: EXPO_OUT },
    },
  },
  "fade-in": {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: EXPO_OUT },
    },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 32, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: EXPO_OUT },
    },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -32, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: EXPO_OUT },
    },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: EXPO_OUT },
    },
  },
};

// Stagger container — orchestrates child animations
const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

// Stagger item — each child animates with premium easing
const STAGGER_ITEM: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EXPO_OUT },
  },
};

// ─── StaggerChildren internal child wrapper ────────────────────────────────────

function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={STAGGER_ITEM} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function AnimatedSection({
  children,
  className,
  variant = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (variant === "stagger-children") {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={STAGGER_CONTAINER}
        transition={{ delay }}
        className={className}
        style={{ willChange: "opacity" }}
      >
        {Array.isArray(children) ? (
          children.map((child, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: positional stagger children
            <StaggerItem key={i}>{child}</StaggerItem>
          ))
        ) : (
          <StaggerItem>{children}</StaggerItem>
        )}
      </motion.div>
    );
  }

  const v = SINGLE_VARIANTS[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={v}
      transition={{ delay }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export { StaggerItem };
