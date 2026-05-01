import { r as reactExports, j as jsxRuntimeExports } from "./index-jpOSPqTZ.js";
import { r as resolveElements, m as motion } from "./proxy-B5rRmvmM.js";
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
const QUART_OUT = [0.25, 0.46, 0.45, 0.94];
const SINGLE_VARIANTS = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EXPO_OUT }
    }
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: QUART_OUT }
    }
  },
  "slide-left": {
    hidden: { opacity: 0, x: -56 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: EXPO_OUT }
    }
  },
  "slide-right": {
    hidden: { opacity: 0, x: 56 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: EXPO_OUT }
    }
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.65, ease: EXPO_OUT }
    }
  }
};
const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05
    }
  }
};
const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EXPO_OUT }
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
export {
  AnimatedSection as A
};
