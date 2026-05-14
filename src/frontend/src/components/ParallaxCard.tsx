interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

/**
 * Plain wrapper — the 3D tilt / cursor-tracking animation has been removed
 * per user request. The `intensity` prop is kept for API compatibility only.
 */
export function ParallaxCard({ children, className }: ParallaxCardProps) {
  return <div className={className}>{children}</div>;
}
