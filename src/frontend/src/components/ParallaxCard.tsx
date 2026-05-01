interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

/**
 * Plain wrapper — cursor-following tilt removed per user request.
 * `intensity` prop kept for API compatibility only.
 */
export function ParallaxCard({ children, className }: ParallaxCardProps) {
  return <div className={className}>{children}</div>;
}
