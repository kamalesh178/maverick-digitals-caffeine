import { j as jsxRuntimeExports, L as Link, r as reactExports, u as useScroll, a as useTransform, m as motion } from "./index-Cj8-jWY_.js";
import { A as AnimatedSection, T as TextReveal } from "./TextReveal-BmkunpgX.js";
import { M as Marquee, C as CounterAnimation } from "./Marquee-BCU2zHnF.js";
import { G as GradientButton } from "./GradientButton-C14l6DXz.js";
import "./utils-DWi2mX0G.js";
const SERVICES = [
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Integrated growth, precisely engineered",
    description: "End-to-end digital strategies that cut through the noise. Data-backed, audience-focused campaigns that connect your brand with the right people at exactly the right moment.",
    features: [
      "SEO & content strategy built to rank",
      "Email marketing & automated nurture flows",
      "Influencer outreach & creator collaborations",
      "Full-funnel analytics & performance reporting"
    ],
    icon: "01"
  },
  {
    id: "social-media",
    name: "Social Media Management",
    tagline: "A platform presence that commands attention",
    description: "Build a loyal, engaged community and amplify your reach. Platform-native content that stops the scroll, sparks real conversations, and turns followers into paying customers.",
    features: [
      "Multi-platform editorial calendar",
      "Community management & active engagement",
      "Trend-led viral content development",
      "Monthly performance insights & dashboards"
    ],
    icon: "02"
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    tagline: "Every rupee working at maximum efficiency",
    description: "Our performance specialists design, launch, and optimise paid campaigns across Google, Meta, and beyond — engineering maximum ROAS from every rupee of your budget.",
    features: [
      "Google Ads & Meta Ads management",
      "Programmatic & display advertising",
      "Conversion rate optimisation (CRO)",
      "A/B testing & funnel deep-dives"
    ],
    icon: "03"
  },
  {
    id: "web-development",
    name: "Website Design & Dev",
    tagline: "Fast, conversion-first digital experiences",
    description: "From high-converting landing pages to full-scale e-commerce platforms, we build websites that represent your brand at its absolute best — and perform when it matters most.",
    features: [
      "Custom responsive web design",
      "E-commerce & CMS development",
      "Core Web Vitals & technical SEO",
      "Ongoing maintenance & growth support"
    ],
    icon: "04"
  },
  {
    id: "uiux-design",
    name: "UI/UX Design",
    tagline: "Design that converts, not just impresses",
    description: "Intuitive user journeys built on research, heatmaps, and iterative testing — reducing friction at every step to maximise satisfaction and improve your bottom-line metrics.",
    features: [
      "User research & persona mapping",
      "Wireframing & interactive prototyping",
      "Design systems & component libraries",
      "Usability testing & iterative refinement"
    ],
    icon: "05"
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    tagline: "Tailor-built solutions for real-world challenges",
    description: "From mobile apps to enterprise SaaS platforms, we ship custom software that solves your unique business challenges — products your users love and your business depends on.",
    features: [
      "Web & mobile application development",
      "API design & third-party integrations",
      "Cloud-native, scalable architecture",
      "QA testing & DevOps delivery pipelines"
    ],
    icon: "06"
  },
  {
    id: "brand-management",
    name: "Brand Management",
    tagline: "Your most valuable asset, handled with precision",
    description: "We help you define, protect, and grow your brand — from visual identity and tone of voice to reputation management and omnichannel storytelling that genuinely resonates.",
    features: [
      "Brand identity & visual style guidelines",
      "ORM & online reputation monitoring",
      "Brand storytelling & strategic positioning",
      "Crisis communication planning"
    ],
    icon: "07"
  }
];
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "We dig deep into your market, competitors, and audience to uncover untapped opportunities and establish a clear, evidence-based starting point."
  },
  {
    number: "02",
    title: "Strategic Roadmap",
    description: "A bespoke growth plan with defined KPIs, channel selection, timelines, and budget allocation — all aligned to your specific business goals."
  },
  {
    number: "03",
    title: "Creative Execution",
    description: "Our creative team brings the strategy to life with bold visuals, compelling copy, and campaigns built to command attention and drive action."
  },
  {
    number: "04",
    title: "Measure & Accelerate",
    description: "Continuous monitoring, real-time reporting, and data-driven optimisation ensure your results keep improving month after month, without exception."
  }
];
const WHY_CHOOSE = [
  {
    title: "AI-Powered Strategies",
    description: "We leverage cutting-edge AI and machine learning to identify emerging trends, personalise campaigns at scale, and consistently stay ahead of the competition.",
    accent: "#2563EB"
  },
  {
    title: "Data-Driven Execution",
    description: "Every decision is rooted in real data. We track the metrics that genuinely matter and optimise relentlessly until the numbers reflect your growth ambitions.",
    accent: "#3B82F6"
  },
  {
    title: "Authentic UGC Content",
    description: "User-generated content and creator partnerships that build genuine trust, organic reach, and thriving community — without the artificial feel of traditional ads.",
    accent: "#2563EB"
  },
  {
    title: "Consistent Track Record",
    description: "Hundreds of successful campaigns, dozens of industries, and brands that scaled exponentially with us. Our portfolio speaks louder than any promise we could make.",
    accent: "#3B82F6"
  }
];
const MARQUEE_ITEMS = [
  "Social Media Marketing",
  "Performance Ads",
  "Website Development",
  "Brand Management",
  "UGC Content",
  "AI Strategy",
  "Custom Software"
];
function SpiralServicesSection() {
  const sectionRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const TOTAL = SERVICES.length;
  const ARM_ANGLE = 360 / TOTAL;
  const ARM_LENGTH = 320;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref: sectionRef,
      className: "relative",
      style: {
        height: `${TOTAL * 100 + 60}vh`,
        background: "#F8FAFC"
      },
      "data-ocid": "spiral-section",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "sticky top-0 w-full overflow-hidden flex flex-col items-center justify-center",
          style: { height: "100vh" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 pointer-events-none",
                style: {
                  backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)",
                  backgroundSize: "36px 36px"
                },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center mb-6 px-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4",
                  style: {
                    background: "rgba(37,99,235,0.08)",
                    border: "1px solid rgba(37,99,235,0.2)",
                    color: "#2563EB"
                  },
                  children: "What We Do"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextReveal,
                {
                  text: "Our Full-Service Capability Suite",
                  as: "h2",
                  className: "font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] leading-tight tracking-tight",
                  staggerMs: 35
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed",
                  style: { color: "#6B7280" },
                  children: "Scroll to explore all seven disciplines."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "relative z-10 flex-1 w-full flex items-center justify-center",
                style: { perspective: "1100px", perspectiveOrigin: "50% 50%" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    style: {
                      rotateY,
                      transformStyle: "preserve-3d",
                      width: "1px",
                      height: "1px",
                      position: "relative",
                      willChange: "transform"
                    },
                    children: SERVICES.map((service, i) => {
                      const armDeg = i * ARM_ANGLE;
                      const armRad = armDeg * Math.PI / 180;
                      const x = Math.sin(armRad) * ARM_LENGTH;
                      const z = Math.cos(armRad) * ARM_LENGTH;
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-armDeg}deg)`,
                            transformOrigin: "center center",
                            width: "240px",
                            marginLeft: "-120px",
                            marginTop: "-100px"
                          },
                          "data-ocid": `spiral-card.${i + 1}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpiralCard, { service })
                        },
                        service.id
                      );
                    })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SpiralProgress, { scrollYProgress, total: TOTAL })
          ]
        }
      )
    }
  );
}
function SpiralCard({
  service
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group relative rounded-2xl overflow-hidden cursor-default transition-transform duration-300 hover:scale-105",
      style: {
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        padding: "24px",
        minHeight: "200px",
        boxShadow: "0 4px 24px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.06)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-[2px]",
            style: {
              background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.5) 50%, transparent 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl",
            style: {
              background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)",
              border: "1px solid rgba(37,99,235,0.25)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display font-black text-3xl leading-none",
              style: { color: "#2563EB" },
              children: service.icon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base leading-snug text-[#1E3A8A]", children: service.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs font-medium uppercase tracking-widest",
              style: { color: "#3B82F6", opacity: 0.9 },
              children: service.tagline
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs leading-relaxed mt-1",
              style: { color: "#6B7280" },
              children: service.description
            }
          )
        ] })
      ]
    }
  );
}
function SpiralProgress({
  scrollYProgress,
  total
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative z-20 flex items-center gap-2 pb-6",
      "aria-hidden": "true",
      children: Array.from({ length: total }).map((_, i) => {
        const start = i / total;
        const end = (i + 1) / total;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProgressDot,
          {
            index: i,
            scrollYProgress,
            start,
            end
          },
          `dot-${start}-${end}`
        );
      })
    }
  );
}
function ProgressDot({
  index,
  scrollYProgress,
  start,
  end
}) {
  const scale = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    [0.8, 1.5, 0.8]
  );
  const bgOpacity = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    [0.3, 1, 0.3]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { scale }, className: "w-2 h-2 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "w-full h-full rounded-full",
      style: {
        opacity: bgOpacity,
        background: "#2563EB"
      }
    }
  ) }, index);
}
function ProcessStep({
  step,
  index,
  isLast
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: index * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-4 relative", children: [
    !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "hidden lg:block absolute top-10 left-[calc(50%+3.25rem)] right-[calc(-50%+3.25rem)] h-px border-dashed",
        style: {
          borderTopWidth: "1px",
          borderColor: "rgba(37,99,235,0.2)"
        },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-20 h-20 rounded-2xl flex items-center justify-center font-display font-black text-3xl",
        style: {
          background: "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0.05) 100%)",
          border: "1px solid rgba(37,99,235,0.25)",
          color: "#2563EB",
          boxShadow: "0 8px 32px rgba(37,99,235,0.08)"
        },
        children: step.number
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 max-w-[220px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-[#1E3A8A]", children: step.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: { color: "#6B7280" }, children: step.description })
    ] })
  ] }) });
}
function WhyCard({ item, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "scale-up", delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group p-6 flex flex-col gap-3 h-full rounded-2xl transition-all duration-300 cursor-default",
      style: {
        background: "#FFFFFF",
        border: "1px solid #E2E8F0"
      },
      "data-ocid": `why-card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-8 h-[2px] rounded-full transition-all duration-500 group-hover:w-full",
            style: { background: item.accent },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-[#1E3A8A] mt-1", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: { color: "#6B7280" }, children: item.description })
      ]
    }
  ) });
}
function ServicesHero() {
  const heroRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);
  const scaleVal = useTransform(scrollYProgress, [0, 0.6], [1, 0.94]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: heroRef,
      className: "relative overflow-hidden flex items-center justify-center",
      style: {
        background: "#FFFFFF",
        minHeight: "100vh",
        paddingTop: "7rem",
        paddingBottom: "6rem"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              backgroundImage: "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 h-32 pointer-events-none",
            style: {
              background: "linear-gradient(to bottom, transparent 0%, #F8FAFC 100%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            style: {
              opacity: titleOpacity,
              y: titleY,
              scale: scaleVal,
              willChange: "transform, opacity"
            },
            className: "flex flex-col items-center gap-8 text-center max-w-5xl mx-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase font-display",
                  style: {
                    background: "rgba(37,99,235,0.08)",
                    border: "1px solid rgba(37,99,235,0.2)",
                    color: "#2563EB"
                  },
                  children: "Our Services"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextReveal,
                {
                  text: "Everything Your Brand Needs to Lead in the Digital World",
                  as: "h1",
                  className: "font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#1E3A8A] leading-[1.04] tracking-tight",
                  staggerMs: 30
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-lg sm:text-xl max-w-2xl leading-relaxed font-light",
                  style: { color: "#374151" },
                  children: "From audience-first strategy to precision execution — Maverick Digitals delivers the complete digital capability suite your brand needs to grow, compete, and win."
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0.16, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-8 flex-wrap justify-center", children: [
                "7 Specialised Services",
                "AI-Powered Strategy",
                "Data-Driven Results"
              ].map((pill) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-2.5 text-sm font-medium",
                  style: { color: "#374151" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-1.5 h-1.5 rounded-full inline-block flex-shrink-0",
                        style: { background: "#2563EB" },
                        "aria-hidden": "true"
                      }
                    ),
                    pill
                  ]
                },
                pill
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "hero-cta-contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { size: "lg", glow: true, children: "Start Your Growth" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services-list", "data-ocid": "hero-cta-explore", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "inline-flex items-center gap-2 px-8 py-4 text-base font-display font-semibold rounded-xl transition-all duration-300",
                    style: {
                      border: "1px solid rgba(37,99,235,0.3)",
                      color: "#2563EB",
                      background: "transparent"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.background = "rgba(37,99,235,0.06)";
                      e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "rgba(37,99,235,0.3)";
                    },
                    children: "Explore Services"
                  }
                ) })
              ] }) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
            style: { opacity: titleOpacity },
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs tracking-[0.2em] uppercase",
                  style: { color: "#9CA3AF" },
                  children: "Scroll to explore"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-px h-12 relative overflow-hidden",
                  style: { background: "rgba(37,99,235,0.15)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "absolute top-0 left-0 right-0",
                      style: { background: "#2563EB", height: "40%" },
                      animate: { y: ["0%", "250%"] },
                      transition: {
                        duration: 1.6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                      }
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function ServiceListItem({
  service,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AnimatedSection,
    {
      variant: index % 2 === 0 ? "slide-left" : "slide-right",
      delay: index * 0.05,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative flex flex-col sm:flex-row gap-6 rounded-2xl p-7 transition-all duration-300 cursor-default",
          style: {
            background: "#FFFFFF",
            border: "1px solid #E2E8F0"
          },
          "data-ocid": `service-card-${service.id}`,
          onMouseEnter: (e) => {
            e.currentTarget.style.background = "#F8FAFC";
            e.currentTarget.style.borderColor = "rgba(37,99,235,0.3)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,99,235,0.08)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.background = "#FFFFFF";
            e.currentTarget.style.borderColor = "#E2E8F0";
            e.currentTarget.style.boxShadow = "none";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-display font-black text-5xl leading-none",
                style: { color: "rgba(37,99,235,0.2)" },
                children: service.icon
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-[10px] font-bold tracking-[0.2em] uppercase mb-1",
                    style: { color: "#2563EB" },
                    children: service.tagline
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-[#1E3A8A]", children: service.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: { color: "#374151" }, children: service.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1", children: service.features.map((feat, fi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2.5 text-xs",
                  "data-ocid": `service-feature-${service.id}.${fi + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "mt-[3px] w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-black text-white",
                        style: { background: "#2563EB" },
                        "aria-hidden": "true",
                        children: "✓"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#374151" }, children: feat })
                  ]
                },
                feat
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "mt-auto sm:mt-0",
                "data-ocid": `service-cta-${service.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "px-5 py-2.5 rounded-xl text-sm font-semibold font-display transition-all duration-300",
                    style: {
                      border: "1px solid rgba(37,99,235,0.3)",
                      color: "#2563EB",
                      background: "transparent",
                      whiteSpace: "nowrap"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.background = "rgba(37,99,235,0.08)";
                      e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "rgba(37,99,235,0.3)";
                    },
                    children: "Get Started →"
                  }
                )
              }
            ) })
          ]
        }
      )
    }
  );
}
const STATS = [
  { label: "Projects Delivered", end: 500, suffix: "+" },
  { label: "Satisfied Clients", end: 200, suffix: "+" },
  { label: "Revenue Generated", end: 10, suffix: "Cr+", prefix: "₹" },
  { label: "Industries Served", end: 30, suffix: "+" }
];
function StatsStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-2 lg:grid-cols-4 gap-px",
      style: { background: "#E2E8F0" },
      children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "scale-up", delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center text-center py-10 px-6",
          style: { background: "#FFFFFF" },
          "data-ocid": `stat-card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-4xl sm:text-5xl leading-none mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CounterAnimation,
              {
                end: stat.end,
                suffix: stat.suffix,
                prefix: stat.prefix,
                duration: 2200,
                className: "",
                style: { color: "#2563EB" }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-semibold uppercase tracking-widest",
                style: { color: "#6B7280" },
                children: stat.label
              }
            )
          ]
        }
      ) }, stat.label))
    }
  );
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden py-32",
      style: { background: "#EFF6FF" },
      "data-ocid": "final-cta-section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-px pointer-events-none",
            style: {
              background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.3) 50%, transparent 100%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto flex flex-col items-center text-center gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase font-display",
              style: {
                background: "rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.2)",
                color: "#2563EB"
              },
              children: "Time to Make Your Move."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextReveal,
            {
              text: "Ready to Elevate Your Brand?",
              as: "h2",
              className: "font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E3A8A] leading-tight tracking-tight",
              staggerMs: 40
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-lg sm:text-xl max-w-xl leading-relaxed",
              style: { color: "#374151" },
              children: "You've built a brand worth scaling. Now let's amplify it. Your first strategy session is complimentary — zero obligation."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "final-cta-contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { variant: "gold", size: "xl", glow: true, children: "Book a Strategy Session" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", "data-ocid": "final-cta-about", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "inline-flex items-center gap-2 px-10 py-5 text-xl font-display font-semibold rounded-xl transition-all duration-300",
                style: {
                  border: "1px solid rgba(37,99,235,0.25)",
                  color: "#1E3A8A",
                  background: "transparent"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.background = "rgba(37,99,235,0.06)";
                  e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(37,99,235,0.25)";
                },
                children: "About Our Team"
              }
            ) })
          ] })
        ] }) }) })
      ]
    }
  );
}
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { background: "#FFFFFF", color: "#374151" },
      "data-ocid": "services-page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesHero, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: MARQUEE_ITEMS, speed: 35 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SpiralServicesSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            id: "services-list",
            className: "py-28",
            style: { background: "#F8FAFC" },
            "data-ocid": "services-list-section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                AnimatedSection,
                {
                  variant: "fade-up",
                  className: "flex flex-col items-center mb-16",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-5",
                        style: {
                          background: "rgba(37,99,235,0.08)",
                          border: "1px solid rgba(37,99,235,0.2)",
                          color: "#2563EB"
                        },
                        children: "All Services"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TextReveal,
                      {
                        text: "Every Discipline, In Detail",
                        as: "h2",
                        className: "font-display font-black text-4xl sm:text-5xl text-[#1E3A8A] text-center leading-tight tracking-tight mb-4",
                        staggerMs: 40
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-base sm:text-lg max-w-2xl text-center leading-relaxed",
                        style: { color: "#374151" },
                        children: "Deep-dive into each of our seven capabilities and see exactly how we deliver results for your brand."
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", children: SERVICES.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ServiceListItem,
                {
                  service,
                  index
                },
                service.id
              )) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatsStrip, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-28",
            style: { background: "#FFFFFF" },
            "data-ocid": "process-section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                AnimatedSection,
                {
                  variant: "fade-up",
                  className: "flex flex-col items-center mb-16",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-5",
                        style: {
                          background: "rgba(37,99,235,0.08)",
                          border: "1px solid rgba(37,99,235,0.2)",
                          color: "#2563EB"
                        },
                        children: "How We Work"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TextReveal,
                      {
                        text: "A Structured 4-Step Framework",
                        as: "h2",
                        className: "font-display font-black text-4xl sm:text-5xl text-[#1E3A8A] text-center leading-tight tracking-tight mb-4",
                        staggerMs: 35
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-base sm:text-lg max-w-2xl text-center leading-relaxed",
                        style: { color: "#374151" },
                        children: "A proven, repeatable methodology that transforms objectives into measurable growth — every single time."
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative", children: PROCESS_STEPS.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProcessStep,
                {
                  step,
                  index,
                  isLast: index === PROCESS_STEPS.length - 1
                },
                step.number
              )) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-28 relative overflow-hidden",
            style: { background: "#F8FAFC" },
            "data-ocid": "why-choose-section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                AnimatedSection,
                {
                  variant: "slide-left",
                  className: "flex flex-col gap-8",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase w-fit",
                          style: {
                            background: "rgba(37,99,235,0.08)",
                            border: "1px solid rgba(37,99,235,0.2)",
                            color: "#2563EB"
                          },
                          children: "Why Choose Us"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        TextReveal,
                        {
                          text: "The Competitive Edge You've Been Looking For",
                          as: "h2",
                          className: "font-display font-black text-4xl sm:text-5xl text-[#1E3A8A] leading-tight tracking-tight",
                          staggerMs: 30
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-base leading-relaxed max-w-lg",
                          style: { color: "#374151" },
                          children: "Not just another vendor. A genuine growth partner armed with data, creativity, and the commitment to deliver results that actually move your business."
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: [
                      "No lock-in contracts",
                      "Personal account manager",
                      "Transparent, real-time reporting"
                    ].map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-3 text-sm",
                        style: { color: "#374151" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0",
                              style: { background: "#2563EB" },
                              "aria-hidden": "true",
                              children: "✓"
                            }
                          ),
                          point
                        ]
                      },
                      point
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "why-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { size: "lg", glow: true, children: "Let's Build Together" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: WHY_CHOOSE.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(WhyCard, { item, index }, item.title)) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: MARQUEE_ITEMS, speed: 50 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {})
      ]
    }
  );
}
export {
  Services as default
};
