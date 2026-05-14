import { useEffect, useRef } from "react";

// ─── Blob config ──────────────────────────────────────────────────────────────
// Each blob has 3 keyframe states: [0% scroll, 50% scroll, 100% scroll]
// Colors use oklch strings — interpolated in LAB-ish space via lerp on L/C/H

interface BlobState {
  x: number; // % from left
  y: number; // % from top
  w: number; // px width
  h: number; // px height
  // border-radius corners: tl tr br bl / tl tr br bl (% values)
  r: [number, number, number, number, number, number, number, number];
  // oklch L, C, H
  l: number;
  c: number;
  hue: number;
  opacity: number;
}

interface BlobKeyframes {
  k0: BlobState;
  k1: BlobState;
  k2: BlobState;
}

const BLOBS: BlobKeyframes[] = [
  // Blob 1 — soft blue (top-left)
  {
    k0: {
      x: -8,
      y: 2,
      w: 650,
      h: 550,
      r: [38, 62, 62, 38, 38, 38, 62, 62],
      l: 0.9,
      c: 0.06,
      hue: 255,
      opacity: 0.35,
    },
    k1: {
      x: -5,
      y: 15,
      w: 600,
      h: 500,
      r: [55, 45, 70, 30, 30, 55, 45, 70],
      l: 0.88,
      c: 0.08,
      hue: 260,
      opacity: 0.3,
    },
    k2: {
      x: 5,
      y: 5,
      w: 560,
      h: 480,
      r: [42, 58, 40, 60, 58, 42, 60, 40],
      l: 0.92,
      c: 0.05,
      hue: 250,
      opacity: 0.32,
    },
  },
  // Blob 2 — periwinkle (top-right)
  {
    k0: {
      x: 60,
      y: -5,
      w: 520,
      h: 460,
      r: [60, 40, 30, 70, 40, 60, 70, 30],
      l: 0.88,
      c: 0.07,
      hue: 265,
      opacity: 0.28,
    },
    k1: {
      x: 55,
      y: 8,
      w: 570,
      h: 490,
      r: [30, 70, 60, 40, 70, 30, 40, 60],
      l: 0.91,
      c: 0.06,
      hue: 255,
      opacity: 0.33,
    },
    k2: {
      x: 62,
      y: -2,
      w: 500,
      h: 440,
      r: [50, 50, 40, 60, 50, 50, 60, 40],
      l: 0.89,
      c: 0.07,
      hue: 260,
      opacity: 0.29,
    },
  },
  // Blob 3 — sky blue mid-page
  {
    k0: {
      x: 35,
      y: 28,
      w: 500,
      h: 420,
      r: [45, 55, 65, 35, 55, 45, 35, 65],
      l: 0.93,
      c: 0.05,
      hue: 250,
      opacity: 0.25,
    },
    k1: {
      x: 30,
      y: 35,
      w: 560,
      h: 470,
      r: [65, 35, 45, 55, 35, 65, 55, 45],
      l: 0.9,
      c: 0.06,
      hue: 258,
      opacity: 0.3,
    },
    k2: {
      x: 40,
      y: 25,
      w: 520,
      h: 440,
      r: [38, 62, 55, 45, 62, 38, 45, 55],
      l: 0.91,
      c: 0.06,
      hue: 252,
      opacity: 0.28,
    },
  },
  // Blob 4 — blue-indigo lower-left
  {
    k0: {
      x: -10,
      y: 55,
      w: 480,
      h: 400,
      r: [50, 50, 40, 60, 50, 50, 60, 40],
      l: 0.89,
      c: 0.07,
      hue: 262,
      opacity: 0.26,
    },
    k1: {
      x: -5,
      y: 50,
      w: 520,
      h: 430,
      r: [40, 60, 50, 50, 60, 40, 50, 50],
      l: 0.92,
      c: 0.05,
      hue: 255,
      opacity: 0.3,
    },
    k2: {
      x: 0,
      y: 58,
      w: 490,
      h: 410,
      r: [60, 40, 35, 65, 40, 60, 65, 35],
      l: 0.88,
      c: 0.08,
      hue: 260,
      opacity: 0.32,
    },
  },
  // Blob 5 — lavender lower-right
  {
    k0: {
      x: 65,
      y: 60,
      w: 440,
      h: 380,
      r: [35, 65, 45, 55, 65, 35, 55, 45],
      l: 0.91,
      c: 0.06,
      hue: 258,
      opacity: 0.24,
    },
    k1: {
      x: 62,
      y: 65,
      w: 490,
      h: 420,
      r: [55, 45, 65, 35, 45, 55, 35, 65],
      l: 0.89,
      c: 0.07,
      hue: 265,
      opacity: 0.28,
    },
    k2: {
      x: 68,
      y: 55,
      w: 460,
      h: 400,
      r: [48, 52, 55, 45, 52, 48, 45, 55],
      l: 0.92,
      c: 0.05,
      hue: 252,
      opacity: 0.31,
    },
  },
];

// Mobile: only 3 blobs
const MOBILE_BLOBS = BLOBS.slice(0, 3);

// ─── Interpolation helpers ────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpState(k0: BlobState, k1: BlobState, t: number): BlobState {
  const lerpR = k0.r.map((v, i) => lerp(v, k1.r[i], t)) as BlobState["r"];
  return {
    x: lerp(k0.x, k1.x, t),
    y: lerp(k0.y, k1.y, t),
    w: lerp(k0.w, k1.w, t),
    h: lerp(k0.h, k1.h, t),
    r: lerpR,
    l: lerp(k0.l, k1.l, t),
    c: lerp(k0.c, k1.c, t),
    hue: lerp(k0.hue, k1.hue, t),
    opacity: lerp(k0.opacity, k1.opacity, t),
  };
}

function stateAt(blob: BlobKeyframes, progress: number): BlobState {
  if (progress <= 0.5) {
    return lerpState(blob.k0, blob.k1, progress * 2);
  }
  return lerpState(blob.k1, blob.k2, (progress - 0.5) * 2);
}

function toRadius(r: BlobState["r"]): string {
  const [a, b, c, d, e, f, g, h] = r;
  return `${a}% ${b}% ${c}% ${d}% / ${e}% ${f}% ${g}% ${h}%`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function MorphingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const pendingRef = useRef(false);
  const progressRef = useRef(0);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) return;

    const blobs = isMobile ? MOBILE_BLOBS : BLOBS;

    function applyFrame() {
      pendingRef.current = false;
      const p = progressRef.current;
      const refs = blobRefs.current;

      blobs.forEach((blobDef, i) => {
        const el = refs[i];
        if (!el) return;
        const s = stateAt(blobDef, p);

        // Organic path via sin/cos on scroll progress
        const driftX = Math.sin(p * Math.PI * 2 + i * 1.3) * 50;
        const driftY = Math.cos(p * Math.PI * 2.5 + i * 0.9) * 40;

        el.style.transform = `translate(${driftX}px, ${driftY}px) translateZ(0)`;
        el.style.borderRadius = toRadius(s.r);
        el.style.opacity = s.opacity.toFixed(3);
        el.style.width = `${s.w}px`;
        el.style.height = `${s.h}px`;
        el.style.left = `${s.x}%`;
        el.style.top = `${s.y}%`;
        el.style.background = `oklch(${s.l.toFixed(3)} ${s.c.toFixed(3)} ${s.hue.toFixed(1)})`;
      });
    }

    function onScroll() {
      const scrollEl = document.documentElement;
      const max = scrollEl.scrollHeight - scrollEl.clientHeight;
      progressRef.current = max > 0 ? Math.min(window.scrollY / max, 1) : 0;

      if (!pendingRef.current) {
        pendingRef.current = true;
        rafRef.current = requestAnimationFrame(applyFrame);
      }
    }

    // Initial render
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, prefersReduced]);

  const blobs = isMobile ? MOBILE_BLOBS : BLOBS;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        contain: "layout paint",
      }}
    >
      {blobs.map((blobDef, i) => {
        // Static initial state for SSR / no-JS
        const s0 = blobDef.k0;
        return (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: blob index is stable — blobs array is static
            key={`morphblob-${i}`}
            ref={(el) => {
              blobRefs.current[i] = el;
            }}
            style={{
              position: "absolute",
              left: `${s0.x}%`,
              top: `${s0.y}%`,
              width: `${s0.w}px`,
              height: `${s0.h}px`,
              borderRadius: toRadius(s0.r),
              background: `oklch(${s0.l} ${s0.c} ${s0.hue})`,
              opacity: prefersReduced ? s0.opacity : 0,
              filter: "blur(80px)",
              willChange: "transform, border-radius, opacity",
              transform: "translateZ(0)",
            }}
          />
        );
      })}
    </div>
  );
}
