import { j as jsxRuntimeExports, r as reactExports, L as Link, m as motion } from "./index-Cj8-jWY_.js";
import { A as AmbientGlow } from "./AmbientGlow-B1kVT81z.js";
import { A as AnimatedSection, T as TextReveal } from "./TextReveal-BmkunpgX.js";
import { M as Marquee, C as CounterAnimation } from "./Marquee-BCU2zHnF.js";
function ParallaxCard({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children });
}
function useScrollProgress() {
  const [progress, setProgress] = reactExports.useState(0);
  const rafRef = reactExports.useRef(0);
  const pendingUpdateRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const onScroll = () => {
      if (pendingUpdateRef.current) return;
      pendingUpdateRef.current = true;
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
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
const STATS = [
  {
    end: 10,
    suffix: "M+",
    label: "Content Impressions",
    sub: "Earned & Paid Combined"
  },
  {
    end: 35,
    suffix: "+",
    label: "Brands Elevated",
    sub: "Across Multiple Industries"
  },
  {
    end: 200,
    suffix: "%",
    label: "Avg. Return on Ad Spend",
    sub: "Paid Campaign Average"
  },
  {
    end: 150,
    suffix: "K+",
    label: "New Followers Acquired",
    sub: "Purely Organic"
  }
];
const SERVICES = [
  {
    title: "Digital Marketing",
    description: "Integrated growth campaigns built around your audience. From SEO to email automation, every channel is precision-tuned to move the needle on revenue.",
    accent: "#2563EB"
  },
  {
    title: "Social Media Management",
    description: "Platform-first storytelling across Instagram, LinkedIn, YouTube, and beyond. We grow your community by crafting content worth saving, sharing, and talking about.",
    accent: "#3B82F6"
  },
  {
    title: "Performance Marketing",
    description: "High-ROI paid campaigns across Meta, Google, and more. Every rupee is tracked, every conversion is optimised — with ROAS as the only scorecard that matters.",
    accent: "#2563EB"
  },
  {
    title: "Website Design & Development",
    description: "Websites engineered to convert — not just impress. From lightning-fast landing pages to full-scale e-commerce, we build experiences that represent your brand at its peak.",
    accent: "#3B82F6"
  },
  {
    title: "UI/UX Design",
    description: "Research-backed interfaces that remove friction and delight users. We design systems that make your product feel intuitive, polished, and unmissable.",
    accent: "#2563EB"
  },
  {
    title: "Custom Software Development",
    description: "Tailor-made web and mobile applications built for scale. Whether it's an MVP or a complex enterprise platform, we ship reliable software your business can grow on.",
    accent: "#3B82F6"
  },
  {
    title: "Brand Management",
    description: "Your brand is your most powerful asset. We craft compelling identities, define your voice, and shape narratives that create lasting recognition and loyalty.",
    accent: "#2563EB"
  }
];
const TESTIMONIALS = [
  {
    quote: "Working with Maverick Digitals changed everything for us. Our Instagram audience went from 2K to 85K in six months — and the engagement was real. The team is genuinely invested in your brand's success, not just the metrics.",
    name: "Rohit Sharma",
    title: "Founder, FitFuel India",
    initials: "RS",
    rating: 5
  },
  {
    quote: "I've worked with several agencies over the years. Maverick is in a different category entirely — sharper thinking, faster execution, and 340% ROAS in Q1 that made the decision to partner with them obvious in hindsight.",
    name: "Priya Mehta",
    title: "Marketing Head, LivingSpace Decor",
    initials: "PM",
    rating: 5
  },
  {
    quote: "The website Maverick built now loads in 1.2 seconds and has been a revenue driver since launch. Our bounce rate fell by more than half and conversions rose 78% in the first month alone. Exceptional execution.",
    name: "Arjun Kapoor",
    title: "CEO, TechLaunch Ventures",
    initials: "AK",
    rating: 5
  }
];
const CASE_STUDIES = [
  {
    brand: "FitFuel India",
    category: "Social Growth + Paid Advertising",
    tag: "D2C Fitness Brand",
    accent: "#2563EB",
    metrics: [
      { label: "Audience Growth", value: "42x" },
      { label: "Monthly Revenue", value: "+₹18L" },
      { label: "Return on Ad Spend", value: "8.4x" }
    ]
  },
  {
    brand: "LivingSpace Decor",
    category: "SEO + Editorial Strategy",
    tag: "Home Decor E-Commerce",
    accent: "#3B82F6",
    metrics: [
      { label: "Organic Traffic", value: "+320%" },
      { label: "Search Rankings", value: "Top 3" },
      { label: "Qualified Leads", value: "+5x" }
    ]
  },
  {
    brand: "TechLaunch Ventures",
    category: "Web Build + Brand Identity",
    tag: "B2B SaaS Startup",
    accent: "#2563EB",
    metrics: [
      { label: "Site Speed", value: "1.2s" },
      { label: "Bounce Rate", value: "-55%" },
      { label: "Conversion Lift", value: "+78%" }
    ]
  }
];
const BLOG_POSTS = [
  {
    id: "1",
    title: "How to Engineer Viral Moments: The Shareability Framework",
    cat: "Social Media",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop&auto=format"
  },
  {
    id: "2",
    title: "Maximising ROAS in 2025: A Data-First Advertising Playbook",
    cat: "Paid Advertising",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format"
  },
  {
    id: "3",
    title: "Building a Content Engine That Turns Readers Into Buyers",
    cat: "Content Strategy",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop&auto=format"
  },
  {
    id: "4",
    title: "How AI Is Reshaping Performance Marketing in 2025",
    cat: "Performance Marketing",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "The Power of UGC: Why User-Generated Content Drives Real Conversions",
    cat: "Digital Marketing",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Building a High-Converting Landing Page: Design Principles That Work",
    cat: "Web Design",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop"
  }
];
const MARQUEE_ITEMS = [
  "Social Media Marketing",
  "Performance Ads",
  "Brand Growth",
  "AI-Powered Strategy",
  "UGC Content",
  "Web Development",
  "10M+ Views Generated",
  "35+ Brands Scaled"
];
function ScrollProgressBar() {
  const progress = useScrollProgress();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "scroll-progress-bar",
      style: { transform: `scaleX(${progress})` },
      "aria-hidden": "true"
    }
  );
}
function HeroSection(_) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative min-h-screen flex items-center justify-center overflow-hidden",
      style: { background: "#FFFFFF" },
      "aria-label": "Hero section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AmbientGlow, { variant: "hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              backgroundImage: "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              zIndex: 1
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-6 py-28 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              className: "inline-flex items-center gap-2.5 mb-10 px-5 py-2 rounded-full",
              style: {
                background: "rgba(37,99,235,0.07)",
                border: "1px solid rgba(37,99,235,0.2)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-1.5 h-1.5 rounded-full animate-pulse",
                    style: { background: "#2563EB" },
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-sm font-semibold tracking-widest uppercase",
                    style: { color: "#2563EB", fontFamily: "var(--font-display)" },
                    children: "Mumbai's Premier Growth & Digital Agency"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mb-8",
              style: {
                fontSize: "clamp(2.6rem, 7.5vw, 5.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontFamily: "var(--font-display)",
                color: "#1E3A8A"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextReveal,
                  {
                    text: "Your Brand Deserves to Be",
                    as: "h1",
                    className: "inline",
                    delay: 100,
                    staggerMs: 55
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextReveal,
                  {
                    text: "Unmissable.",
                    as: "span",
                    delay: 600,
                    staggerMs: 70,
                    className: "",
                    style: {
                      color: "#2563EB",
                      display: "inline-block"
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              className: "text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed",
              style: {
                color: "#6B7280",
                fontFamily: "var(--font-body)"
              },
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] },
              children: "Your competitors are growing. Your audience is waiting. Let Mumbai's boldest digital team engineer your brand's breakthrough."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "hero.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(37,99,235,0.35)]",
                    style: {
                      background: "#2563EB",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700
                    },
                    children: "Start Growing Now →"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", "data-ocid": "hero.secondary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-[rgba(37,99,235,0.06)]",
                    style: {
                      border: "1px solid rgba(37,99,235,0.4)",
                      color: "#2563EB",
                      fontFamily: "var(--font-display)"
                    },
                    children: "View Our Services"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "flex items-center justify-center gap-8 flex-wrap",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.6, delay: 1.4 },
              children: [
                { val: 10, suffix: "M+", lbl: "Views" },
                { val: 35, suffix: "+", lbl: "Brands" },
                { val: 200, suffix: "%", lbl: "Avg. ROI" }
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "font-black text-xl leading-none mb-0.5",
                    style: {
                      color: "#2563EB",
                      fontFamily: "var(--font-display)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CounterAnimation, { end: item.val, suffix: item.suffix })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-xs font-medium",
                    style: {
                      color: "#6B7280",
                      letterSpacing: "0.08em"
                    },
                    children: item.lbl
                  }
                )
              ] }, item.lbl))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, delay: 1.8 },
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-px h-12 animate-pulse",
                  style: {
                    background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.5))"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] tracking-[0.25em] uppercase",
                  style: { color: "rgba(37,99,235,0.5)" },
                  children: "Scroll"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function StatsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-24 relative overflow-hidden",
      style: { background: "#F8FAFC" },
      "aria-label": "Key statistics",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", className: "text-center mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs font-bold tracking-[0.22em] uppercase mb-3",
              style: { color: "#2563EB", fontFamily: "var(--font-display)" },
              children: "By The Numbers"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextReveal,
            {
              text: "Growth You Can Measure",
              as: "h2",
              className: "font-extrabold text-3xl sm:text-4xl tracking-tight",
              style: {
                color: "#1E3A8A",
                fontFamily: "var(--font-display)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-5", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnimatedSection,
          {
            variant: "scale-up",
            delay: i * 0.1,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-6 flex flex-col gap-3 text-center group transition-all duration-300 hover:-translate-y-1",
                style: {
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.06)"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.borderColor = "rgba(37,99,235,0.3)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,99,235,0.12)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(37,99,235,0.06)";
                },
                "data-ocid": `stat.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "font-black text-4xl sm:text-5xl leading-none",
                      style: {
                        color: i % 2 === 0 ? "#2563EB" : "#3B82F6",
                        fontFamily: "var(--font-display)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CounterAnimation,
                        {
                          end: stat.end,
                          suffix: stat.suffix,
                          duration: 2200
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-semibold text-sm",
                        style: {
                          color: "#1E3A8A",
                          fontFamily: "var(--font-display)"
                        },
                        children: stat.label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-0.5", style: { color: "#6B7280" }, children: stat.sub })
                  ] })
                ]
              }
            )
          },
          stat.label
        )) })
      ] })
    }
  );
}
function ServiceCard({
  title,
  description,
  accent,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AnimatedSection,
    {
      variant: index % 2 === 0 ? "slide-left" : "slide-right",
      delay: index * 0.06,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative rounded-2xl p-6 flex flex-col gap-4 h-full cursor-default transition-all duration-300 hover:-translate-y-1.5",
          style: {
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            boxShadow: "0 2px 8px rgba(37,99,235,0.05)"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.borderColor = `${accent}55`;
            e.currentTarget.style.boxShadow = `0 12px 40px ${accent}18`;
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.borderColor = "#E2E8F0";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(37,99,235,0.05)";
          },
          "data-ocid": `service.item.${index + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                style: {
                  background: `linear-gradient(90deg, transparent, ${accent}, transparent)`
                },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "absolute top-4 right-4 w-1.5 h-1.5 rounded-full",
                style: { background: accent, boxShadow: `0 0 6px ${accent}88` },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-bold text-base leading-snug tracking-tight mb-2.5",
                  style: { color: "#1E3A8A", fontFamily: "var(--font-display)" },
                  children: title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: { color: "#6B7280" }, children: description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/services",
                className: "flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-3",
                style: { color: accent, fontFamily: "var(--font-display)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Learn More" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-70", children: "→" })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function TestimonialsSection() {
  const [active, setActive] = reactExports.useState(0);
  const [autoPlay, setAutoPlay] = reactExports.useState(true);
  const prev = reactExports.useCallback(() => {
    setAutoPlay(false);
    setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);
  const next = reactExports.useCallback(() => {
    setAutoPlay(false);
    setActive((p) => (p + 1) % TESTIMONIALS.length);
  }, []);
  reactExports.useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(
      () => setActive((p) => (p + 1) % TESTIMONIALS.length),
      5500
    );
    return () => clearInterval(id);
  }, [autoPlay]);
  const t = TESTIMONIALS[active];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-28 relative overflow-hidden",
      style: { background: "#FFFFFF" },
      "aria-label": "Client testimonials",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs font-bold tracking-[0.22em] uppercase mb-3",
              style: { color: "#2563EB", fontFamily: "var(--font-display)" },
              children: "Social Proof"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextReveal,
            {
              text: "Heard From the Brands We've Built",
              as: "h2",
              className: "font-extrabold text-3xl sm:text-4xl tracking-tight",
              style: {
                color: "#1E3A8A",
                fontFamily: "var(--font-display)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl p-8 sm:p-10",
              style: {
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 24px rgba(37,99,235,0.08)"
              },
              "data-ocid": "testimonials.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "font-black leading-none mb-5 select-none",
                    style: {
                      fontSize: "5rem",
                      lineHeight: 0.8,
                      color: "#2563EB",
                      opacity: 0.35
                    },
                    children: "“"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-lg sm:text-xl leading-relaxed mb-8",
                    style: { color: "#374151" },
                    children: t.quote
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between flex-wrap gap-4 pt-6",
                    style: { borderTop: "1px solid #E2E8F0" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0",
                            style: {
                              background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                              color: "#FFFFFF",
                              fontFamily: "var(--font-display)"
                            },
                            children: t.initials
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-bold tracking-tight",
                              style: {
                                color: "#1E3A8A",
                                fontFamily: "var(--font-display)"
                              },
                              children: t.name
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "#6B7280" }, children: t.title })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-sm",
                          style: { color: "#F59E0B" },
                          children: "★"
                        },
                        `star-${i}-${t.rating}`
                      )) })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-5 mt-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: prev,
                className: "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-200 hover:scale-110 hover:bg-blue-50",
                style: {
                  border: "1px solid rgba(37,99,235,0.3)",
                  color: "#2563EB",
                  background: "transparent"
                },
                "aria-label": "Previous testimonial",
                "data-ocid": "testimonial.pagination_prev",
                children: "‹"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: TESTIMONIALS.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setAutoPlay(false);
                  setActive(i);
                },
                className: "rounded-full transition-all duration-300",
                style: {
                  width: i === active ? 28 : 8,
                  height: 8,
                  background: i === active ? "#2563EB" : "rgba(37,99,235,0.2)"
                },
                "aria-label": `Go to testimonial ${i + 1}`,
                "data-ocid": `testimonial.toggle.${i + 1}`
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: next,
                className: "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-200 hover:scale-110 hover:bg-blue-50",
                style: {
                  border: "1px solid rgba(37,99,235,0.3)",
                  color: "#2563EB",
                  background: "transparent"
                },
                "aria-label": "Next testimonial",
                "data-ocid": "testimonial.pagination_next",
                children: "›"
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function CaseStudiesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-28 relative overflow-hidden",
      style: { background: "#F8FAFC" },
      "aria-label": "Case studies",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", className: "mb-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs font-bold tracking-[0.22em] uppercase mb-3",
              style: { color: "#3B82F6", fontFamily: "var(--font-display)" },
              children: "Case Studies"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextReveal,
            {
              text: "Outcomes That Tell the Story",
              as: "h2",
              className: "font-extrabold text-3xl sm:text-4xl tracking-tight",
              style: {
                color: "#1E3A8A",
                fontFamily: "var(--font-display)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-base mt-4 max-w-xl mx-auto leading-relaxed",
              style: { color: "#6B7280" },
              children: "Real transformations through sharp strategy, bold creative, and a relentless commitment to measurable outcomes."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: CASE_STUDIES.map((study, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnimatedSection,
          {
            variant: "scale-up",
            delay: i * 0.1,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParallaxCard, { intensity: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-7 flex flex-col gap-5 h-full transition-all duration-300",
                style: {
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 12px rgba(37,99,235,0.07)"
                },
                "data-ocid": `case-study.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-block text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-3",
                        style: {
                          background: `${study.accent}12`,
                          border: `1px solid ${study.accent}35`,
                          color: study.accent
                        },
                        children: study.tag
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "font-black text-xl tracking-tight",
                        style: {
                          color: "#1E3A8A",
                          fontFamily: "var(--font-display)"
                        },
                        children: study.brand
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", style: { color: "#6B7280" }, children: study.category })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex gap-2.5 pt-4",
                      style: { borderTop: "1px solid #E2E8F0" },
                      children: study.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex-1 flex flex-col items-center gap-1 rounded-xl px-2 py-2.5",
                          style: {
                            background: `${study.accent}0d`,
                            border: `1px solid ${study.accent}25`
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "font-black text-lg leading-none",
                                style: {
                                  color: study.accent,
                                  fontFamily: "var(--font-display)"
                                },
                                children: m.value
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-[10px] text-center leading-tight font-medium",
                                style: { color: "#6B7280" },
                                children: m.label
                              }
                            )
                          ]
                        },
                        m.label
                      ))
                    }
                  )
                ]
              }
            ) })
          },
          study.brand
        )) })
      ] })
    }
  );
}
function BlogSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "py-28 relative overflow-hidden",
      style: { background: "#FFFFFF" },
      "aria-label": "Latest blog posts",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-14 flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "slide-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs font-bold tracking-[0.22em] uppercase mb-3",
                style: { color: "#2563EB", fontFamily: "var(--font-display)" },
                children: "Latest Thinking"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextReveal,
              {
                text: "From the Strategy Room",
                as: "h2",
                className: "font-extrabold text-3xl sm:text-4xl tracking-tight",
                style: {
                  color: "#1E3A8A",
                  fontFamily: "var(--font-display)"
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "slide-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", "data-ocid": "blog.link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-50",
              style: {
                border: "1px solid rgba(37,99,235,0.35)",
                color: "#2563EB",
                fontFamily: "var(--font-display)"
              },
              children: "Read All Articles →"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: BLOG_POSTS.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "scale-up", delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/blog/$id",
            params: { id: post.id },
            "data-ocid": `blog.item.${i + 1}`,
            className: "group block h-full",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1.5",
                style: {
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.05)"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.borderColor = "rgba(37,99,235,0.25)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(37,99,235,0.12)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(37,99,235,0.05)";
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/9] overflow-hidden relative flex-shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: post.img,
                        alt: post.title,
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                        loading: "lazy",
                        onError: (e) => {
                          e.currentTarget.src = "/assets/images/placeholder.svg";
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full",
                        style: {
                          background: "rgba(37,99,235,0.9)",
                          color: "#FFFFFF",
                          backdropFilter: "blur(4px)"
                        },
                        children: post.cat
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col gap-3 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "font-bold text-base leading-snug line-clamp-2 tracking-tight transition-colors duration-200",
                        style: {
                          color: "#1E3A8A",
                          fontFamily: "var(--font-display)"
                        },
                        children: post.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs font-medium",
                          style: { color: "#9CA3AF" },
                          children: post.readTime
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200",
                          style: {
                            color: "#2563EB",
                            fontFamily: "var(--font-display)"
                          },
                          children: [
                            "Read More ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "→" })
                          ]
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          }
        ) }, post.id)) })
      ] })
    }
  );
}
function CtaSection({ onWhatsApp }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative py-36 overflow-hidden",
      style: { background: "#EFF6FF" },
      "aria-label": "Call to action",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              backgroundImage: "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              zIndex: 0
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none",
            style: {
              width: 600,
              height: 300,
              background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: 0
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-3xl mx-auto px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full",
              style: {
                background: "rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.2)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-1.5 h-1.5 rounded-full animate-pulse",
                    style: { background: "#2563EB" },
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-sm font-semibold tracking-widest uppercase",
                    style: { color: "#2563EB", fontFamily: "var(--font-display)" },
                    children: "Exclusive Client Intake Open"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextReveal,
            {
              text: "Your Breakthrough Begins With One Call.",
              as: "h2",
              className: "font-black mb-8 leading-tight",
              style: {
                fontSize: "clamp(2rem, 6vw, 4rem)",
                letterSpacing: "-0.025em",
                color: "#1E3A8A",
                fontFamily: "var(--font-display)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-lg max-w-xl mx-auto mb-12 leading-relaxed",
              style: { color: "#6B7280" },
              children: "Every day without a strategy, your competitors pull further ahead. Let's map out a bold, focused roadmap for your brand — starting today."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onWhatsApp,
                "data-ocid": "cta.primary_button",
                className: "inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]",
                style: {
                  background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-display)"
                },
                children: "💬 Chat on WhatsApp"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "cta.secondary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white hover:border-blue-300",
                style: {
                  border: "1px solid rgba(37,99,235,0.3)",
                  color: "#2563EB",
                  fontFamily: "var(--font-display)"
                },
                children: "Schedule a Free Strategy Call"
              }
            ) })
          ] })
        ] }) })
      ]
    }
  );
}
function Home() {
  const handleWhatsApp = reactExports.useCallback(() => {
    window.open(
      "https://wa.me/919022406920?text=Hi%20Maverick%20Digitals%2C%20I'd%20like%20to%20grow%20my%20brand!",
      "_blank"
    );
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { touchAction: "pan-y" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgressBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, { onWhatsApp: handleWhatsApp }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: MARQUEE_ITEMS, speed: 45 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-28 relative overflow-hidden",
        style: { background: "#F8FAFC" },
        "aria-label": "Our services",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", className: "mb-16 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs font-bold tracking-[0.22em] uppercase mb-3",
                style: { color: "#3B82F6", fontFamily: "var(--font-display)" },
                children: "What We Do"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextReveal,
              {
                text: "Solutions Designed to Accelerate Growth",
                as: "h2",
                className: "font-extrabold text-3xl sm:text-4xl tracking-tight mb-4",
                style: {
                  color: "#1E3A8A",
                  fontFamily: "var(--font-display)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-base max-w-2xl mx-auto leading-relaxed",
                style: { color: "#6B7280" },
                children: "From high-converting campaigns to scroll-stopping content and custom-built digital products — everything your brand needs to lead in its space."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: SERVICES.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { ...service, index: i }, service.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedSection,
            {
              variant: "fade-up",
              delay: 0.2,
              className: "text-center mt-12",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", "data-ocid": "services.link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-blue-50",
                  style: {
                    border: "1px solid rgba(37,99,235,0.35)",
                    color: "#2563EB",
                    fontFamily: "var(--font-display)"
                  },
                  children: "Explore All Services"
                }
              ) })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudiesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlogSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaSection, { onWhatsApp: handleWhatsApp })
  ] });
}
export {
  Home as default
};
