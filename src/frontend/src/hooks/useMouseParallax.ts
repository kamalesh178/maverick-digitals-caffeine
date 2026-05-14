import { useEffect, useRef, useState } from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

interface MouseParallaxValues {
  mouseX: number;
  mouseY: number;
  rawX: number;
  rawY: number;
}

/**
 * useMouseParallax — smooth mouse tracking with lerp.
 *
 * Performance: the RAF loop only runs on pointer devices (hover: hover).
 * On touch/mobile devices, returns static zeros immediately with no RAF.
 * The RAF loop updates at most once per animation frame — no extra scroll
 * listeners added here.
 */
export function useMouseParallax(): MouseParallaxValues {
  const rawX = useRef(0);
  const rawY = useRef(0);
  const smoothX = useRef(0);
  const smoothY = useRef(0);
  const rafId = useRef<number>(0);
  const [values, setValues] = useState<MouseParallaxValues>({
    mouseX: 0,
    mouseY: 0,
    rawX: 0,
    rawY: 0,
  });

  useEffect(() => {
    // Skip on touch-only devices — no RAF overhead
    if (window.matchMedia("(hover: none)").matches) return;
    // Skip on mobile widths
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      rawX.current = (e.clientX / window.innerWidth) * 2 - 1;
      rawY.current = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const tick = () => {
      const newX = lerp(smoothX.current, rawX.current, 0.06);
      const newY = lerp(smoothY.current, rawY.current, 0.06);

      // Only update state if values changed meaningfully (avoids redundant renders)
      if (
        Math.abs(newX - smoothX.current) > 0.0005 ||
        Math.abs(newY - smoothY.current) > 0.0005
      ) {
        smoothX.current = newX;
        smoothY.current = newY;
        setValues({
          mouseX: smoothX.current,
          mouseY: smoothY.current,
          rawX: rawX.current,
          rawY: rawY.current,
        });
      }

      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return values;
}

interface TiltValues {
  rotateX: number;
  rotateY: number;
  style: React.CSSProperties;
}

/**
 * useTilt — CSS perspective tilt based on global mouse position.
 */
export function useTilt(intensity = 10): TiltValues {
  const { mouseX, mouseY } = useMouseParallax();

  const isTouch =
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  if (isTouch) {
    return { rotateX: 0, rotateY: 0, style: {} };
  }

  const rotateX = -mouseY * intensity;
  const rotateY = mouseX * intensity;

  return {
    rotateX,
    rotateY,
    style: {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      willChange: "transform",
    },
  };
}
