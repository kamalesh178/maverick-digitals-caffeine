import { d as resolveElements, r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-Cj8-jWY_.js";
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
const EXPO_OUT = [0.16, 1, 0.3, 1];
const SINGLE_VARIANTS = {
  "fade-up": {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: EXPO_OUT }
    }
  },
  "fade-in": {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: EXPO_OUT }
    }
  },
  "slide-left": {
    hidden: { opacity: 0, x: 32, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: EXPO_OUT }
    }
  },
  "slide-right": {
    hidden: { opacity: 0, x: -32, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: EXPO_OUT }
    }
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.85, ease: EXPO_OUT }
    }
  }
};
const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0
    }
  }
};
const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EXPO_OUT }
  }
};
function StaggerItem({
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: STAGGER_ITEM, className, children });
}
function AnimatedSection({
  children,
  className,
  variant = "fade-up",
  delay = 0
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  if (variant === "stagger-children") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        ref,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: STAGGER_CONTAINER,
        transition: { delay },
        className,
        style: { willChange: "opacity" },
        children: Array.isArray(children) ? children.map((child, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: positional stagger children
          /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: child }, i)
        )) : /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children })
      }
    );
  }
  const v = SINGLE_VARIANTS[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      variants: v,
      transition: { delay },
      className,
      style: { willChange: "transform, opacity" },
      children
    }
  );
}
function TextReveal({
  text,
  as: Tag = "h2",
  className = "",
  style,
  delay = 0,
  staggerMs = 40
}) {
  const containerRef = reactExports.useRef(null);
  const wordRefs = reactExports.useRef([]);
  const words = text.split(" ");
  reactExports.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.disconnect();
            for (const span of wordRefs.current) {
              if (span) {
                span.style.transform = "translateY(0)";
                span.style.opacity = "1";
              }
            }
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      ref: containerRef,
      className,
      style,
      "aria-label": text,
      children: words.map((word, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          style: {
            display: "inline-block",
            overflow: "hidden",
            marginRight: "0.25em",
            verticalAlign: "bottom"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              ref: (el) => {
                wordRefs.current[index] = el;
              },
              style: {
                display: "inline-block",
                transform: "translateY(100%)",
                opacity: 0,
                transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + index * staggerMs}ms, opacity 0.4s ease ${delay + index * staggerMs}ms`,
                willChange: "transform"
              },
              children: word
            }
          )
        },
        index
      ))
    }
  );
}
export {
  AnimatedSection as A,
  TextReveal as T
};
