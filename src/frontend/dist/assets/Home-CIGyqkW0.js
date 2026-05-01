import { r as reactExports, j as jsxRuntimeExports, c as cn, L as Link } from "./index-jpOSPqTZ.js";
import { A as AnimatedSection } from "./AnimatedSection-DN-lBiBx.js";
import "./proxy-B5rRmvmM.js";
const GlassCard = reactExports.forwardRef(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    const base = "rounded-2xl backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300";
    const variants = {
      default: [
        "bg-card/90",
        "border border-border/60",
        "shadow-[0_4px_24px_oklch(0_0_0/0.07),0_1px_4px_oklch(0_0_0/0.04),inset_0_1px_0_oklch(0.97_0.01_80/0.9),inset_0_-1px_0_oklch(0.86_0.03_75/0.3)]"
      ].join(" "),
      glow: [
        "bg-card/88",
        "border border-primary/20",
        "shadow-[0_4px_28px_oklch(0.32_0.09_250/0.1),0_1px_4px_oklch(0_0_0/0.04),inset_0_1px_0_oklch(0.97_0.01_80/0.9),inset_0_-1px_0_oklch(0.32_0.09_250/0.1)]"
      ].join(" "),
      gold: [
        "bg-card/88",
        "border border-accent/20",
        "shadow-[0_4px_28px_oklch(0.72_0.14_65/0.1),0_1px_4px_oklch(0_0_0/0.04),inset_0_1px_0_oklch(0.97_0.01_80/0.9),inset_0_-1px_0_oklch(0.72_0.14_65/0.1)]"
      ].join(" "),
      solid: [
        "bg-card/95",
        "border border-border",
        "shadow-[0_2px_12px_oklch(0_0_0/0.06),inset_0_1px_0_oklch(0.97_0.01_80/0.95)]"
      ].join(" ")
    };
    const hoverStyles = hover ? "cursor-pointer hover:shadow-[0_12px_48px_oklch(0.32_0.09_250/0.14),0_2px_8px_oklch(0_0_0/0.06),inset_0_1px_0_oklch(0.97_0.01_80/0.9)] hover:border-primary/30 hover:-translate-y-0.5" : "";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(base, variants[variant], hoverStyles, className),
        ...props,
        children
      }
    );
  }
);
GlassCard.displayName = "GlassCard";
const GradientButton = reactExports.forwardRef(
  ({
    className,
    variant = "primary",
    size = "md",
    glow = false,
    children,
    ...props
  }, ref) => {
    const base = [
      "relative inline-flex items-center justify-center font-display font-semibold rounded-xl",
      "cursor-pointer select-none overflow-hidden",
      "transition-all duration-200 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      "active:scale-[0.97]"
    ].join(" ");
    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5 tracking-[0.01em]",
      md: "px-6 py-3 text-base gap-2 tracking-[0.01em]",
      lg: "px-8 py-4 text-lg gap-2.5 tracking-[0.015em]",
      xl: "px-10 py-5 text-xl gap-3 tracking-[0.015em]"
    };
    const variants = {
      primary: [
        "gradient-primary text-white",
        "shadow-[0_2px_12px_oklch(0.32_0.09_250/0.35),0_1px_3px_oklch(0_0_0/0.15)]",
        "hover:shadow-[0_4px_24px_oklch(0.32_0.09_250/0.5),0_2px_8px_oklch(0_0_0/0.12)]",
        "hover:scale-[1.025] hover:brightness-105"
      ].join(" "),
      outline: [
        "border-2 border-primary text-primary bg-transparent",
        "shadow-[0_1px_4px_oklch(0.32_0.09_250/0.1)]",
        "hover:bg-primary/8 hover:shadow-[0_2px_16px_oklch(0.32_0.09_250/0.2)] hover:scale-[1.02]"
      ].join(" "),
      ghost: [
        "text-primary bg-transparent",
        "hover:bg-primary/8 hover:scale-[1.02]"
      ].join(" "),
      gold: [
        "gradient-accent text-background",
        "shadow-[0_2px_12px_oklch(0.72_0.14_65/0.35),0_1px_3px_oklch(0_0_0/0.15)]",
        "hover:shadow-[0_4px_24px_oklch(0.72_0.14_65/0.5),0_2px_8px_oklch(0_0_0/0.12)]",
        "hover:scale-[1.025] hover:brightness-105"
      ].join(" ")
    };
    const glowStyles = {
      primary: glow ? "shadow-[0_0_28px_oklch(0.32_0.09_250/0.45),0_0_56px_oklch(0.32_0.09_250/0.2),0_2px_12px_oklch(0.32_0.09_250/0.35)]" : "",
      gold: glow ? "shadow-[0_0_28px_oklch(0.72_0.14_65/0.45),0_0_56px_oklch(0.72_0.14_65/0.2),0_2px_12px_oklch(0.72_0.14_65/0.35)]" : "",
      outline: "",
      ghost: ""
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        ref,
        className: cn(
          base,
          sizes[size],
          variants[variant],
          glowStyles[variant],
          "btn-ripple",
          className
        ),
        ...props,
        children: [
          variant === "primary" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "linear-gradient(105deg, transparent 20%, oklch(1 0 0 / 0.18) 50%, transparent 80%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2.5s linear infinite"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 inline-flex items-center gap-[inherit]", children })
        ]
      }
    );
  }
);
GradientButton.displayName = "GradientButton";
function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  className
}) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex flex-col gap-4", alignClasses[align], className), children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-primary font-display", children: [
      align === "center" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-10 h-px gradient-primary opacity-70 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
        eyebrow,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 left-0 right-0 h-px gradient-primary opacity-40 rounded-full" })
      ] }),
      align === "center" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-10 h-px gradient-primary opacity-70 rounded-full" }),
      align === "left" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-12 h-px gradient-primary opacity-70 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "h2",
      {
        className: cn(
          "font-display font-extrabold leading-[1.1] tracking-tight",
          "text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl",
          "text-foreground"
        ),
        children: [
          title,
          " ",
          highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: highlight })
        ]
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: cn(
          "text-muted-foreground text-lg sm:text-xl leading-relaxed font-body",
          align === "center" && "max-w-2xl",
          align === "left" && "max-w-xl"
        ),
        children: subtitle
      }
    )
  ] });
}
function useScrollAnimation(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -60px 0px",
    staggerDelay = 60
  } = options;
  const observerRef = reactExports.useRef(null);
  const observe = reactExports.useCallback(
    (element) => {
      if (!element) return;
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            var _a;
            for (const entry of entries) {
              if (entry.isIntersecting) {
                const target = entry.target;
                const delay = Number.parseInt(target.dataset.delay ?? "0", 10);
                setTimeout(() => {
                  target.classList.add("is-visible");
                }, delay);
                (_a = observerRef.current) == null ? void 0 : _a.unobserve(target);
              }
            }
          },
          { threshold, rootMargin }
        );
      }
      observerRef.current.observe(element);
    },
    [threshold, rootMargin]
  );
  const observeChildren = reactExports.useCallback(
    (container) => {
      if (!container) return;
      const children = Array.from(container.children);
      for (const [index, child] of children.entries()) {
        child.classList.add("animate-in-view");
        child.dataset.delay = String(index * staggerDelay);
        observe(child);
      }
    },
    [observe, staggerDelay]
  );
  reactExports.useEffect(() => {
    return () => {
      var _a;
      (_a = observerRef.current) == null ? void 0 : _a.disconnect();
    };
  }, []);
  return { observe, observeChildren };
}
const STATS = [
  { value: "10M+", label: "Views Generated", sublabel: "Organic & Paid" },
  { value: "35+", label: "Brands Scaled", sublabel: "Across Industries" },
  { value: "2024", label: "Founded", sublabel: "Mumbai, India" },
  { value: "Mumbai", label: "Headquarters", sublabel: "India HQ" }
];
const SERVICES = [
  {
    title: "Digital Marketing",
    description: "Full-funnel AI-powered strategies that drive measurable growth across every channel."
  },
  {
    title: "Social Media Management",
    description: "Consistent on-brand content for Instagram, LinkedIn & YouTube — built to grow communities."
  },
  {
    title: "Performance Marketing",
    description: "Data-driven paid campaigns on Meta & Google — engineered for maximum ROAS."
  },
  {
    title: "Website Design & Dev",
    description: "Fast, beautiful, conversion-focused websites from landing pages to full e-commerce."
  },
  {
    title: "UGC & Content Strategy",
    description: "Authentic user-generated content that converts 3× better than traditional ads."
  },
  {
    title: "Brand Management",
    description: "Strategic brand identity, voice, and positioning that resonates and sticks."
  }
];
const FALLBACK_POSTS = [
  {
    id: "1",
    title: "How We Generated 10M+ Views for Our Clients",
    excerpt: "A behind-the-scenes look at the AI-powered content strategy that drove massive organic growth across Instagram and LinkedIn.",
    category: "Case Study",
    author: "Muskan Rathod",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    date: "April 15, 2025"
  },
  {
    id: "2",
    title: "The UGC Formula: Why Authentic Content Converts 3x Better",
    excerpt: "User-generated content is no longer optional — here's the data behind why UGC outperforms branded content consistently.",
    category: "Strategy",
    author: "Dhaval Shah",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    date: "March 28, 2025"
  },
  {
    id: "3",
    title: "Performance Ads in 2025: A Data-Driven Playbook",
    excerpt: "From targeting to creatives — our proven framework for running high-ROAS Facebook, Instagram, and Google ad campaigns.",
    category: "Performance Marketing",
    author: "Muskan Rathod",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    date: "March 10, 2025"
  }
];
const TESTIMONIALS = [
  {
    quote: "Maverick Digitals transformed our online presence. Our Instagram following went from 2K to 85K in just 6 months. The team is relentless, creative, and results-obsessed.",
    name: "Rohit Sharma",
    title: "Founder, FitFuel India",
    initials: "RS"
  },
  {
    quote: "The performance marketing campaigns they ran delivered 340% ROAS in Q1. Nobody comes close to the quality of thinking at Maverick.",
    name: "Priya Mehta",
    title: "Marketing Head, LivingSpace Decor",
    initials: "PM"
  },
  {
    quote: "Our new website is stunning. Load time went from 8s to 1.2s and conversions jumped 78% in the first month. Worth every rupee.",
    name: "Arjun Kapoor",
    title: "CEO, TechLaunch Ventures",
    initials: "AK"
  }
];
function ScrollProgressBar() {
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left pointer-events-none",
      style: {
        background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
        transform: `scaleX(${progress})`,
        transition: "transform 0.1s linear"
      },
      "aria-hidden": "true"
    }
  );
}
function HeroGlow() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute hero-ambient-glow pointer-events-none",
        style: {
          top: "45%",
          left: "50%",
          width: 900,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.07) 50%, transparent 72%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)"
        },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute pointer-events-none",
        style: {
          top: "15%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(124,58,237,0.08)",
          filter: "blur(120px)"
        },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute pointer-events-none",
        style: {
          bottom: "10%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(6,182,212,0.06)",
          filter: "blur(120px)"
        },
        "aria-hidden": "true"
      }
    )
  ] });
}
function ScrollIndicator() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
      style: { opacity: 0.45 },
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-1 h-2 rounded-full",
          style: {
            background: "linear-gradient(180deg, #7c3aed, #06b6d4)",
            animation: "scroll-dot 2s ease-in-out infinite"
          }
        }
      ) })
    }
  );
}
function Home() {
  const { observeChildren } = useScrollAnimation();
  const statsRef = reactExports.useRef(null);
  const blogRef = reactExports.useRef(null);
  const [activeTestimonial, setActiveTestimonial] = reactExports.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = reactExports.useState(true);
  reactExports.useEffect(() => {
    observeChildren(statsRef.current);
  }, [observeChildren]);
  reactExports.useEffect(() => {
    observeChildren(blogRef.current);
  }, [observeChildren]);
  reactExports.useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(id);
  }, [isAutoPlaying]);
  const prevTestimonial = reactExports.useCallback(() => {
    setIsAutoPlaying(false);
    setActiveTestimonial(
      (p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);
  const nextTestimonial = reactExports.useCallback(() => {
    setIsAutoPlaying(false);
    setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
  }, []);
  const goToTestimonial = reactExports.useCallback((i) => {
    setIsAutoPlaying(false);
    setActiveTestimonial(i);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { background: "#0a0a0a" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgressBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden hero-grid",
        "aria-label": "Hero section",
        "data-ocid": "hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeroGlow, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-6 py-32 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full",
                style: {
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.3)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-sm font-semibold tracking-wide",
                    style: { color: "#a78bfa" },
                    children: "✦ Digital Marketing Agency"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "font-display font-extrabold leading-[1.05] mb-7 text-white",
                style: {
                  fontSize: "clamp(2.8rem, 8vw, 5rem)",
                  letterSpacing: "-0.03em"
                },
                children: [
                  "Scale Your Brand with",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text block mt-1", children: "Data-Driven Marketing" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",
                style: { color: "rgba(255,255,255,0.6)" },
                children: "We help ambitious brands crack the algorithm, dominate social media, and run high-converting performance ads — powered by AI, UGC, and data-driven strategies."
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "hero.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                GradientButton,
                {
                  variant: "primary",
                  size: "lg",
                  glow: true,
                  className: "btn-ripple min-w-[200px]",
                  children: "Get Started →"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", "data-ocid": "hero.secondary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-smooth min-w-[200px]",
                  style: {
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "transparent"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.background = "transparent";
                  },
                  children: "View Our Work"
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-medium tracking-wide",
                style: { color: "rgba(255,255,255,0.4)" },
                children: "10M+ Views Generated · 35+ Brands Scaled · Founded 2024, Mumbai"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollIndicator, {})
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 relative overflow-hidden",
        style: {
          background: "linear-gradient(180deg, rgba(124,58,237,0.06) 0%, rgba(0,0,0,0) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)"
        },
        "aria-label": "Key statistics",
        "data-ocid": "stats.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: statsRef, className: "grid grid-cols-2 lg:grid-cols-4 gap-5", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnimatedSection,
          {
            variant: "scale-up",
            delay: i * 0.1,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "glass-card flex flex-col items-center text-center p-7 rounded-2xl",
                "data-ocid": `stats.item.${i + 1}`,
                style: { position: "relative", overflow: "hidden" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-20 pointer-events-none",
                      style: {
                        background: "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)",
                        filter: "blur(20px)"
                      },
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "gradient-text font-display font-black leading-none mb-2 relative z-10",
                      style: { fontSize: "clamp(2rem, 5vw, 3rem)" },
                      children: stat.value
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold text-sm mb-1 relative z-10", children: stat.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs relative z-10",
                      style: { color: "rgba(255,255,255,0.4)" },
                      children: stat.sublabel
                    }
                  )
                ]
              }
            )
          },
          stat.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-28",
        style: { background: "#0a0a0a" },
        "aria-label": "Services preview",
        "data-ocid": "services.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", className: "mb-16 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs font-bold tracking-[0.25em] uppercase mb-4",
                style: { color: "rgba(167,139,250,0.8)" },
                children: "WHAT WE DO"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                title: "Our Core",
                highlight: "Services",
                subtitle: "From viral content to performance-driven ads — we build everything your brand needs to dominate the digital landscape."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedSection,
            {
              variant: index % 2 === 0 ? "slide-left" : "slide-right",
              delay: index * 0.07,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "group glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 h-full",
                  style: {
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  },
                  "data-ocid": `services.item.${index + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-[2px] w-12 rounded-full mb-1",
                        style: {
                          background: "linear-gradient(90deg, #7c3aed, #06b6d4)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-white text-base leading-snug tracking-tight", children: service.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm leading-relaxed flex-1",
                        style: { color: "rgba(255,255,255,0.55)" },
                        children: service.description
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/services",
                        className: "text-sm font-semibold flex items-center gap-1 transition-smooth",
                        style: { color: "#a78bfa" },
                        children: [
                          "Learn More",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-smooth", children: "→" })
                        ]
                      }
                    )
                  ]
                }
              )
            },
            service.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedSection,
            {
              variant: "fade-up",
              delay: 0.2,
              className: "text-center mt-14",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", "data-ocid": "services.link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { variant: "outline", size: "md", children: "Explore All Services →" }) })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-28 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, rgba(124,58,237,0.05) 0%, rgba(6,182,212,0.03) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)"
        },
        "aria-label": "About section",
        "data-ocid": "about.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-14 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "slide-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs font-bold tracking-[0.25em] uppercase mb-4",
                style: { color: "rgba(167,139,250,0.8)" },
                children: "ABOUT US"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                className: "font-display font-extrabold text-white mb-6 leading-tight",
                style: {
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  letterSpacing: "-0.02em"
                },
                children: [
                  "About ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Maverick Digitals" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-base leading-relaxed mb-6",
                style: { color: "rgba(255,255,255,0.6)" },
                children: "Founded in 2024 in Mumbai, Maverick Digitals is built on one belief: every brand deserves to grow. We combine AI-powered strategy, authentic UGC content, and precision performance marketing to help ambitious brands crack the algorithm and scale fast."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-base leading-relaxed mb-8",
                style: { color: "rgba(255,255,255,0.6)" },
                children: "With 10M+ views generated and 35+ brands scaled, our data-driven approach consistently delivers results that matter — from Instagram domination to high-ROAS ad campaigns."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", "data-ocid": "about.link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { variant: "outline", size: "md", children: "Meet the Team →" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "slide-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "glass-card rounded-2xl p-8 flex flex-col gap-6",
              style: { border: "1px solid rgba(124,58,237,0.2)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-xs font-bold tracking-widest uppercase mb-2",
                    style: { color: "#a78bfa" },
                    children: "Company at a Glance"
                  }
                ),
                [
                  { label: "Founded", value: "2024" },
                  { label: "Location", value: "Mumbai, India" },
                  { label: "Brands Scaled", value: "35+" },
                  { label: "Total Views", value: "10M+" },
                  {
                    label: "Speciality",
                    value: "AI-Powered Digital Marketing"
                  }
                ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between py-3",
                    style: { borderBottom: "1px solid rgba(255,255,255,0.06)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-sm font-medium",
                          style: { color: "rgba(255,255,255,0.45)" },
                          children: item.label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-white", children: item.value })
                    ]
                  },
                  item.label
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm leading-relaxed italic mt-2",
                    style: { color: "rgba(255,255,255,0.5)" },
                    children: '"Helping brands crack the Instagram algorithm, dominate LinkedIn growth, and run high-converting performance ads."'
                  }
                )
              ]
            }
          ) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-28 relative overflow-hidden",
        style: { background: "#0a0a0a" },
        "aria-label": "Client testimonials",
        "data-ocid": "testimonials.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", className: "mb-14 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs font-bold tracking-[0.25em] uppercase mb-4",
                style: { color: "rgba(167,139,250,0.8)" },
                children: "TRUSTED BY BRANDS"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                title: "What Our Clients",
                highlight: "Say",
                subtitle: "Real results. Real brands. Real transformations from Mumbai's fastest-growing companies."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "testimonials.carousel", className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex transition-transform duration-500 ease-in-out",
                style: {
                  transform: `translateX(-${activeTestimonial * 100}%)`
                },
                children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-full flex-shrink-0 px-2",
                    "aria-hidden": i !== activeTestimonial,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      GlassCard,
                      {
                        variant: "glow",
                        className: "p-8 sm:p-10 flex flex-col gap-5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "font-display font-black leading-none select-none gradient-text",
                              style: { fontSize: "4rem", lineHeight: 0.85 },
                              children: '"'
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-base sm:text-lg leading-relaxed -mt-2",
                              style: { color: "rgba(255,255,255,0.85)" },
                              children: t.quote
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "flex items-center gap-4 pt-5 mt-2",
                              style: {
                                borderTop: "1px solid rgba(255,255,255,0.07)"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: "w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0",
                                    style: {
                                      background: "linear-gradient(135deg, #7c3aed, #06b6d4)"
                                    },
                                    children: t.initials
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-white text-sm", children: t.name }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "p",
                                    {
                                      className: "text-xs mt-0.5",
                                      style: { color: "rgba(255,255,255,0.45)" },
                                      children: t.title
                                    }
                                  )
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex gap-0.5", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    style: { color: "#a78bfa", fontSize: "14px" },
                                    children: "★"
                                  },
                                  n
                                )) })
                              ]
                            }
                          )
                        ]
                      }
                    ) })
                  },
                  t.name
                ))
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: prevTestimonial,
                  className: "w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-smooth font-bold text-xl",
                  style: { border: "1px solid rgba(124,58,237,0.3)" },
                  "aria-label": "Previous testimonial",
                  "data-ocid": "testimonials.pagination_prev",
                  children: "‹"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 items-center", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => goToTestimonial(i),
                  className: "rounded-full transition-smooth",
                  style: {
                    width: i === activeTestimonial ? "2rem" : "0.625rem",
                    height: "0.625rem",
                    background: i === activeTestimonial ? "linear-gradient(90deg, #7c3aed, #06b6d4)" : "rgba(255,255,255,0.2)"
                  },
                  "aria-label": `Go to testimonial ${i + 1}`,
                  "data-ocid": `testimonials.tab.${i + 1}`
                },
                t.name
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: nextTestimonial,
                  className: "w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-smooth font-bold text-xl",
                  style: { border: "1px solid rgba(124,58,237,0.3)" },
                  "aria-label": "Next testimonial",
                  "data-ocid": "testimonials.pagination_next",
                  children: "›"
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-28 relative",
        style: {
          background: "linear-gradient(180deg, rgba(6,182,212,0.04) 0%, rgba(0,0,0,0) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)"
        },
        "aria-label": "Latest blog posts",
        "data-ocid": "blog.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-14 flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "slide-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs font-bold tracking-[0.25em] uppercase mb-3",
                  style: { color: "rgba(167,139,250,0.8)" },
                  children: "LATEST INSIGHTS"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  className: "font-display font-extrabold text-white",
                  style: {
                    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                    letterSpacing: "-0.02em"
                  },
                  children: [
                    "From the ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Blog" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "slide-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", "data-ocid": "blog.link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { variant: "outline", size: "sm", children: "View All Posts →" }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: blogRef, className: "grid grid-cols-1 md:grid-cols-3 gap-7", children: FALLBACK_POSTS.map((post, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedSection,
            {
              variant: "scale-up",
              delay: index * 0.1,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/blog/$id",
                  params: { id: post.id },
                  "data-ocid": `blog.item.${index + 1}`,
                  className: "group block h-full",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "glass-card rounded-2xl overflow-hidden h-full flex flex-col",
                      style: {
                        transition: "transform 0.3s ease, box-shadow 0.3s ease"
                      },
                      onMouseEnter: (e) => {
                        e.currentTarget.style.transform = "translateY(-6px)";
                        e.currentTarget.style.boxShadow = "0 16px 48px rgba(124,58,237,0.2)";
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "relative overflow-hidden",
                            style: { height: "200px", flexShrink: 0 },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "img",
                                {
                                  src: post.thumbnail,
                                  alt: post.title,
                                  className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                  loading: "lazy",
                                  onError: (e) => {
                                    e.currentTarget.src = "/assets/images/placeholder.svg";
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "absolute inset-0",
                                  style: {
                                    background: "linear-gradient(to top, rgba(17,17,17,0.6) 0%, transparent 60%)"
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1.5 rounded-full",
                                  style: {
                                    background: "rgba(124,58,237,0.85)",
                                    backdropFilter: "blur(8px)",
                                    border: "1px solid rgba(255,255,255,0.2)"
                                  },
                                  children: post.category
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-3 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              className: "font-display font-bold text-base leading-snug line-clamp-2 tracking-tight",
                              style: {
                                color: "rgba(255,255,255,0.95)",
                                transition: "color 0.2s ease"
                              },
                              children: post.title
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-sm leading-relaxed line-clamp-2 flex-1",
                              style: { color: "rgba(255,255,255,0.5)" },
                              children: post.excerpt
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "flex items-center justify-between mt-auto pt-3",
                              style: {
                                borderTop: "1px solid rgba(255,255,255,0.06)"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "span",
                                  {
                                    className: "text-xs font-medium",
                                    style: { color: "rgba(255,255,255,0.4)" },
                                    children: [
                                      post.date,
                                      " · ",
                                      post.author
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "span",
                                  {
                                    className: "text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200",
                                    style: { color: "#a78bfa" },
                                    children: [
                                      "Read More ",
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "→" })
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ] })
                      ]
                    }
                  )
                }
              )
            },
            post.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-32 overflow-hidden",
        "aria-label": "Call to action",
        "data-ocid": "cta.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 aurora-bg opacity-90",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 hero-grid opacity-10",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 65%)",
                filter: "blur(40px)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-4xl mx-auto px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-2.5 mb-7 px-5 py-2.5 rounded-full",
                style: {
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(8px)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-semibold tracking-wide", children: "Limited Spots Available" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display font-black mb-6 leading-[1.05] text-shimmer",
                style: {
                  fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                  letterSpacing: "-0.025em"
                },
                children: "Ready to Scale Your Brand?"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-lg sm:text-xl max-w-xl mx-auto mb-12 leading-relaxed",
                style: { color: "rgba(255,255,255,0.8)" },
                children: "Let's build your digital presence together. Book a free strategy call and engineer your brand's breakthrough."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "cta.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "btn-ripple inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-display font-bold rounded-xl text-primary transition-smooth min-w-[220px]",
                  style: {
                    background: "rgba(255,255,255,0.96)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                  },
                  children: "Get in Touch"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => window.open(
                    "https://wa.me/919022406920?text=Hi%20Maverick%20Digitals%2C%20I'd%20like%20to%20grow%20my%20brand!",
                    "_blank"
                  ),
                  className: "btn-ripple inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-display font-semibold rounded-xl border-2 border-white text-white hover:bg-white/10 transition-smooth min-w-[220px]",
                  "data-ocid": "cta.secondary_button",
                  children: "Chat on WhatsApp"
                }
              )
            ] })
          ] }) })
        ]
      }
    )
  ] });
}
export {
  Home as default
};
