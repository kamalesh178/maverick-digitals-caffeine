import { j as jsxRuntimeExports, L as Link } from "./index-jpOSPqTZ.js";
import { A as AnimatedSection } from "./AnimatedSection-DN-lBiBx.js";
import "./proxy-B5rRmvmM.js";
const values = [
  {
    num: "01",
    title: "AI-Powered Strategy",
    desc: "We harness artificial intelligence to identify patterns, predict trends, and build campaigns that outperform the competition before the first rupee is spent."
  },
  {
    num: "02",
    title: "Authentic UGC Content",
    desc: "Real voices convert better than polished ads. We build UGC ecosystems that generate trust, community, and sustained organic growth for your brand."
  },
  {
    num: "03",
    title: "Data-Driven Results",
    desc: "Every decision is backed by numbers. We track what matters, cut what doesn't, and double down on what moves the needle for your bottom line."
  }
];
const stats = [
  { value: "10M+", label: "Views Generated" },
  { value: "35+", label: "Brands Scaled" },
  { value: "2024", label: "Founded" },
  { value: "Mumbai", label: "Headquartered" }
];
const muskanSkills = [
  "Social Media Strategy",
  "Performance Ads",
  "AI Marketing",
  "UGC Content"
];
const dhavalSkills = [
  "Web Development",
  "Brand Design",
  "Software Development",
  "Product Strategy"
];
function PageBadge({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6",
      style: {
        background: "rgba(124,58,237,0.10)",
        border: "1px solid rgba(124,58,237,0.28)",
        color: "#a78bfa"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "w-1.5 h-1.5 rounded-full dot-badge-pulse",
            style: { background: "#7c3aed" },
            "aria-hidden": "true"
          }
        ),
        label
      ]
    }
  );
}
function GradientPill({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-flex px-3 py-1 rounded-full text-xs font-semibold",
      style: {
        background: "rgba(124,58,237,0.08)",
        border: "1px solid rgba(124,58,237,0.22)",
        color: "#a78bfa"
      },
      children: label
    }
  );
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative flex flex-col items-center justify-center text-center overflow-hidden",
        style: {
          minHeight: "56vh",
          paddingTop: "120px",
          paddingBottom: "80px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "hero-grid absolute inset-0 pointer-events-none",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PageBadge, { label: "About Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h1",
                {
                  className: "font-display font-black leading-[0.93] tracking-tight text-foreground mb-6",
                  style: { fontSize: "clamp(3rem, 7vw, 5.5rem)" },
                  children: [
                    "We Help Brands",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "gradient-text",
                        style: { display: "inline-block" },
                        children: "Scale"
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-in", delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto", children: "Founded in Mumbai in 2024, Maverick Digitals was built to help ambitious brands break through the noise — using AI, UGC content, and data-driven strategies that actually move the needle." }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", "data-ocid": "about.values_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PageBadge, { label: "What Drives Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "font-display font-black text-foreground leading-tight tracking-tight",
            style: { fontSize: "clamp(2rem, 4vw, 3rem)" },
            children: [
              "Built On Three",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: " Unshakeable Pillars" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-card glass-card-hover card-hover h-full p-8 flex flex-col group relative overflow-hidden",
          "data-ocid": `about.value_card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-smooth",
                style: {
                  background: "linear-gradient(90deg,#7c3aed,#06b6d4)"
                },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-full flex items-center justify-center text-xs font-black tracking-widest mb-6 shrink-0",
                style: {
                  background: "linear-gradient(135deg,rgba(124,58,237,0.2),rgba(6,182,212,0.1))",
                  border: "1px solid rgba(124,58,237,0.25)",
                  color: "#a78bfa"
                },
                children: v.num
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-3 tracking-tight", children: v.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1", children: v.desc })
          ]
        }
      ) }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-0 overflow-hidden",
        "data-ocid": "about.stats_section",
        style: {
          background: "#0f0f0f",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "py-12 px-6 text-center relative",
            "data-ocid": `about.stat.${i + 1}`,
            style: {
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-4xl sm:text-5xl leading-none mb-2 gradient-text", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm font-medium tracking-wide uppercase text-xs", children: s.label })
            ]
          }
        ) }, s.label)) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 bg-background", "data-ocid": "about.team_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PageBadge, { label: "The Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "font-display font-black text-foreground leading-tight tracking-tight",
            style: { fontSize: "clamp(2rem, 4vw, 3rem)" },
            children: [
              "The People Behind",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: " Maverick Digitals" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "slide-left", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "glass-card h-full flex flex-col group relative overflow-hidden transition-smooth",
            style: { borderRadius: "16px" },
            "data-ocid": "about.team_card.1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none",
                  style: {
                    background: "linear-gradient(135deg,rgba(124,58,237,0.06),rgba(6,182,212,0.03))",
                    border: "1px solid rgba(124,58,237,0.35)"
                  },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative overflow-hidden",
                  style: { height: "280px", borderRadius: "12px 12px 0 0" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=faces",
                        alt: "Muskan Rathod — Co-Founder & CEO, Maverick Digitals",
                        className: "w-full h-full object-cover",
                        style: { filter: "brightness(0.92) saturate(0.9)" },
                        onError: (e) => {
                          const el = e.currentTarget;
                          el.style.display = "none";
                          const parent = el.parentElement;
                          if (parent) {
                            parent.style.background = "linear-gradient(135deg,rgba(124,58,237,0.25),rgba(6,182,212,0.12))";
                            parent.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;font-weight:900;color:rgba(167,139,250,0.6);letter-spacing:-0.02em;">MR</div>';
                          }
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute bottom-0 left-0 right-0 h-20 pointer-events-none",
                        style: {
                          background: "linear-gradient(to bottom, transparent, #111111)"
                        },
                        "aria-hidden": "true"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col flex-1 relative z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-xl text-foreground tracking-tight mb-0.5", children: "Muskan Rathod" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-bold tracking-widest uppercase",
                      style: { color: "#a78bfa" },
                      children: "Co-Founder & CEO"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-muted-foreground text-sm leading-relaxed mb-5",
                    style: {
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    },
                    children: "Muskan Rathod is a digital marketing strategist with a passion for scaling brands through AI-powered content and performance advertising. She grew her LinkedIn following to 26K in just 8 months and has generated over 10M organic views for clients. She leads Maverick Digitals' strategy, UGC content division, and the upcoming AI-powered marketing tools vertical."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-auto", children: muskanSkills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(GradientPill, { label: s }, s)) })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "slide-right", delay: 0.18, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "glass-card h-full flex flex-col group relative overflow-hidden transition-smooth",
            style: { borderRadius: "16px" },
            "data-ocid": "about.team_card.2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none",
                  style: {
                    background: "linear-gradient(135deg,rgba(6,182,212,0.05),rgba(124,58,237,0.03))",
                    border: "1px solid rgba(6,182,212,0.3)"
                  },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative overflow-hidden",
                  style: { height: "280px", borderRadius: "12px 12px 0 0" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces",
                        alt: "Dhaval Shah — Co-Founder, Maverick Digitals",
                        className: "w-full h-full object-cover",
                        style: { filter: "brightness(0.92) saturate(0.9)" },
                        onError: (e) => {
                          const el = e.currentTarget;
                          el.style.display = "none";
                          const parent = el.parentElement;
                          if (parent) {
                            parent.style.background = "linear-gradient(135deg,rgba(6,182,212,0.2),rgba(124,58,237,0.12))";
                            parent.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;font-weight:900;color:rgba(103,232,249,0.6);letter-spacing:-0.02em;">DS</div>';
                          }
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute bottom-0 left-0 right-0 h-20 pointer-events-none",
                        style: {
                          background: "linear-gradient(to bottom, transparent, #111111)"
                        },
                        "aria-hidden": "true"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 flex flex-col flex-1 relative z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-xl text-foreground tracking-tight mb-0.5", children: "Dhaval Shah" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-bold tracking-widest uppercase",
                      style: { color: "#67e8f9" },
                      children: "Co-Founder"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-muted-foreground text-sm leading-relaxed mb-5",
                    style: {
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    },
                    children: "Dhaval Shah leads the technical and product development at Maverick Digitals — overseeing website design, custom software, and digital infrastructure for client brands. His expertise spans web development, brand identity design, and building scalable digital products."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-auto", children: dhavalSkills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-flex px-3 py-1 rounded-full text-xs font-semibold",
                    style: {
                      background: "rgba(6,182,212,0.07)",
                      border: "1px solid rgba(6,182,212,0.2)",
                      color: "#67e8f9"
                    },
                    children: s
                  },
                  s
                )) })
              ] })
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-28 relative overflow-hidden",
        "data-ocid": "about.cta_section",
        style: { background: "#0a0a0a" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at center, rgba(124,58,237,0.14) 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "hero-grid absolute inset-0 opacity-40 pointer-events-none",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PageBadge, { label: "Let's Collaborate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                className: "font-display font-black text-foreground leading-tight tracking-tight mb-5",
                style: { fontSize: "clamp(2.2rem, 5vw, 3.75rem)" },
                children: [
                  "Ready to ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Work With Us?" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-10", children: "Whether you're launching a new brand or scaling an existing one, we bring the strategy, content, and execution to make it happen — fast." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "gradient-btn btn-ripple inline-flex items-center gap-2 px-8 py-4 text-base font-display font-semibold rounded-xl glow-on-hover transition-smooth",
                  "data-ocid": "about.cta_primary",
                  children: "Start a Project"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "inline-flex items-center gap-2 px-8 py-4 text-base font-display font-semibold rounded-xl transition-smooth",
                  style: {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.85)"
                  },
                  "data-ocid": "about.cta_services",
                  children: "View Services"
                }
              ) })
            ] })
          ] }) })
        ]
      }
    )
  ] });
}
export {
  About as default
};
