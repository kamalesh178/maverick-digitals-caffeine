import { useCallback, useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -60px 0px",
    staggerDelay = 60,
  } = options;
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback(
    (element: HTMLElement | null) => {
      if (!element) return;

      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                const delay = Number.parseInt(target.dataset.delay ?? "0", 10);
                setTimeout(() => {
                  target.classList.add("is-visible");
                }, delay);
                observerRef.current?.unobserve(target);
              }
            }
          },
          { threshold, rootMargin },
        );
      }

      observerRef.current.observe(element);
    },
    [threshold, rootMargin],
  );

  const observeChildren = useCallback(
    (container: HTMLElement | null) => {
      if (!container) return;
      const children = Array.from(container.children) as HTMLElement[];
      for (const [index, child] of children.entries()) {
        child.classList.add("animate-in-view");
        child.dataset.delay = String(index * staggerDelay);
        observe(child);
      }
    },
    [observe, staggerDelay],
  );

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { observe, observeChildren };
}

export function useInView(
  callback: (isVisible: boolean) => void,
  options: { threshold?: number; rootMargin?: string } = {},
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) callback(entry.isIntersecting);
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [callback, options.threshold, options.rootMargin]);

  return ref;
}

/**
 * useScrollProgress — returns scroll progress 0-1.
 * Uses RAF to batch updates and avoid per-pixel re-renders.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);
  const pendingUpdateRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (pendingUpdateRef.current) return;
      pendingUpdateRef.current = true;

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
        pendingUpdateRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return progress;
}

/**
 * useParallaxOffset — CSS translateY based on scroll progress.
 */
export function useParallaxOffset(speed = 0.3): string {
  const progress = useScrollProgress();
  const docHeight =
    typeof document !== "undefined"
      ? document.documentElement.scrollHeight - window.innerHeight
      : 0;
  const offset = progress * docHeight * speed;
  return `translateY(${offset}px)`;
}

/**
 * useScrollVelocity — normalized scroll velocity 0-1.
 */
export function useScrollVelocity(): number {
  const [velocity, setVelocity] = useState(0);
  const rafRef = useRef<number>(0);
  const prevScrollRef = useRef<number>(
    typeof window !== "undefined" ? window.scrollY : 0,
  );
  const smoothedRef = useRef(0);

  useEffect(() => {
    function tick() {
      const current = window.scrollY;
      const delta = Math.abs(current - prevScrollRef.current);
      prevScrollRef.current = current;

      smoothedRef.current = smoothedRef.current * 0.82 + delta * 0.18;
      const normalized = Math.min(smoothedRef.current / 30, 1);
      setVelocity(normalized);

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return velocity;
}
