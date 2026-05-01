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

const EXPO_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number];
const QUART_OUT = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const SINGLE_VARIANTS: Record<
  Exclude<AnimationVariant, "stagger-children">,
  Variants
> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EXPO_OUT },
    },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: QUART_OUT },
    },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -56 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: EXPO_OUT },
    },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 56 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: EXPO_OUT },
    },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.65, ease: EXPO_OUT },
    },
  },
};

const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const STAGGER_ITEM: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EXPO_OUT },
  },
};

export function StaggerItem({
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
