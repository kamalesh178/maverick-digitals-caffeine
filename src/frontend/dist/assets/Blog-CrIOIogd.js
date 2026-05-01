import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-jpOSPqTZ.js";
import { g as getAllBlogPosts } from "./backend-B0hqVQPu.js";
import { m as motion } from "./proxy-B5rRmvmM.js";
import { A as AnimatePresence } from "./index-DfHBeuxA.js";
const FALLBACK_POSTS = [
  {
    id: BigInt(1),
    title: "How We Generated 10M+ Views for Our Clients",
    excerpt: "A behind-the-scenes look at the AI-powered content strategy that drove massive organic growth across Instagram and LinkedIn.",
    content: "At Maverick Digitals, generating 10 million organic views wasn't luck — it was the result of a repeatable, AI-powered content system. We analyzed top-performing content in our clients' niches, reverse-engineered the algorithm's content preferences, and built a UGC-first production pipeline that produced authentic, scroll-stopping content at scale. The key insight? Authenticity beats production value every time on Instagram and LinkedIn. By briefing UGC creators with data-backed hooks, we consistently achieved 3–5x higher save rates than branded content. The result: 10M+ organic views across client accounts in under 12 months.",
    category: "Case Study",
    author: "Muskan Rathod",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    tags: ["UGC", "organic growth", "Instagram"],
    createdAt: BigInt((/* @__PURE__ */ new Date("April 15, 2025")).getTime()),
    updatedAt: BigInt((/* @__PURE__ */ new Date("April 15, 2025")).getTime()),
    published: true
  },
  {
    id: BigInt(2),
    title: "The UGC Formula: Why Authentic Content Converts 3x Better",
    excerpt: "User-generated content is no longer optional — here's the data behind why UGC outperforms branded content consistently.",
    content: "The data is clear: UGC content converts at 3x the rate of polished branded video. Why? Because modern audiences are trained to skip ads — but they stop for content that looks and feels real. Our UGC formula involves three pillars: authentic creators who genuinely align with the brand, data-backed hooks in the first 3 seconds, and strategic calls to action that feel natural rather than sales-y. Across 35+ brands we've scaled, UGC content consistently delivers higher click-through rates, lower CPMs, and stronger brand recall than any other content format.",
    category: "Strategy",
    author: "Dhaval Shah",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    tags: ["UGC", "conversion", "strategy"],
    createdAt: BigInt((/* @__PURE__ */ new Date("March 28, 2025")).getTime()),
    updatedAt: BigInt((/* @__PURE__ */ new Date("March 28, 2025")).getTime()),
    published: true
  },
  {
    id: BigInt(3),
    title: "Performance Ads in 2025: A Data-Driven Playbook",
    excerpt: "From targeting to creatives, here's our proven framework for running high-ROAS Facebook, Instagram, and Google ad campaigns.",
    content: "Running profitable performance ads in 2025 requires a fundamentally different approach than it did two years ago. With iOS privacy changes, rising CPMs, and increasingly sophisticated audiences, the old playbook is dead. Our current framework focuses on three things: creative-led testing (80% of success comes from the ad creative, not the targeting), first-party data activation through email list lookalikes and website retargeting, and dynamic budget optimization across Meta and Google simultaneously. For our clients, this approach consistently delivers 4–8x ROAS on cold traffic and 10–15x ROAS on warm audiences.",
    category: "Performance Marketing",
    author: "Muskan Rathod",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    tags: ["performance ads", "ROAS", "Meta"],
    createdAt: BigInt((/* @__PURE__ */ new Date("March 10, 2025")).getTime()),
    updatedAt: BigInt((/* @__PURE__ */ new Date("March 10, 2025")).getTime()),
    published: true
  }
];
const FALLBACK_IMG = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop";
const CATEGORY_PILL = {
  "Case Study": "bg-purple-500/15 text-purple-300 border border-purple-500/30",
  Strategy: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30",
  "Performance Marketing": "bg-violet-500/15 text-violet-300 border border-violet-500/30",
  "Digital Marketing": "bg-blue-500/15 text-blue-300 border border-blue-500/30",
  "Social Media": "bg-pink-500/15 text-pink-300 border border-pink-500/30",
  "Web Design": "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  SEO: "bg-orange-500/15 text-orange-300 border border-orange-500/30"
};
function getCategoryPill(cat) {
  return CATEGORY_PILL[cat] ?? "bg-white/10 text-white/70 border border-white/20";
}
function formatDate(ts) {
  return new Date(Number(ts)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function BlogCard({ post, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 32 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.08 },
      "data-ocid": `blog.card.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$id", params: { id: post.id.toString() }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02]",
          style: {
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.boxShadow = "0 8px 40px rgba(124,58,237,0.25), 0 0 0 1px rgba(124,58,237,0.3)";
            e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative overflow-hidden shrink-0",
                style: { height: "220px" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: post.imageUrl,
                      alt: post.title,
                      style: {
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        borderRadius: "12px 12px 0 0",
                        display: "block"
                      },
                      loading: "lazy",
                      onError: (e) => {
                        const el = e.currentTarget;
                        el.onerror = null;
                        el.src = FALLBACK_IMG;
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                      style: {
                        background: "linear-gradient(to top, rgba(124,58,237,0.15), transparent)",
                        borderRadius: "12px 12px 0 0"
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 w-fit ${getCategoryPill(post.category)}`,
                  children: post.category
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-bold text-white text-[17px] leading-snug mb-3 transition-all duration-200 group-hover:text-transparent",
                  style: {
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  },
                  "data-gradient-title": "true",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "group-hover:bg-clip-text group-hover:[background-image:var(--gradient-text)]",
                      style: { transition: "all 0.2s" },
                      children: post.title
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm leading-relaxed mb-4",
                  style: {
                    color: "rgba(255,255,255,0.55)",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  },
                  children: post.excerpt
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-between mt-auto pt-4",
                  style: { borderTop: "1px solid rgba(255,255,255,0.07)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs font-semibold",
                          style: { color: "rgba(255,255,255,0.7)" },
                          children: post.author
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-[11px]",
                          style: { color: "rgba(255,255,255,0.35)" },
                          children: formatDate(post.createdAt)
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200",
                        style: {
                          background: "var(--gradient-text)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        },
                        children: "Read More →"
                      }
                    )
                  ]
                }
              )
            ] })
          ]
        }
      ) })
    }
  );
}
function BlogCardSkeleton({ i }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col overflow-hidden animate-pulse",
      style: {
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: "220px",
              background: "#1a1a1a",
              borderRadius: "12px 12px 0 0"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                height: "20px",
                width: "80px",
                background: "#1a1a1a",
                borderRadius: "999px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                height: "16px",
                width: "100%",
                background: "#1a1a1a",
                borderRadius: "6px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                height: "16px",
                width: "85%",
                background: "#1a1a1a",
                borderRadius: "6px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                height: "14px",
                width: "100%",
                background: "#1a1a1a",
                borderRadius: "6px",
                marginTop: "4px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                height: "14px",
                width: "70%",
                background: "#1a1a1a",
                borderRadius: "6px"
              }
            }
          )
        ] })
      ]
    },
    i
  );
}
function Blog() {
  const [posts, setPosts] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let cancelled = false;
    getAllBlogPosts().then((fetched) => {
      if (!cancelled) {
        setPosts(fetched.length > 0 ? fetched : FALLBACK_POSTS);
        setIsLoading(false);
      }
    }).catch(() => {
      if (!cancelled) {
        setPosts(FALLBACK_POSTS);
        setIsLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#0a0a0a", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative pt-32 pb-20 overflow-hidden",
        "data-ocid": "blog.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute pointer-events-none",
              style: {
                top: "-80px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "600px",
                height: "400px",
                background: "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 70%)",
                filter: "blur(40px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "32px 32px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-6xl px-4 text-center relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6",
                    style: {
                      background: "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(124,58,237,0.35)",
                      color: "#a78bfa"
                    },
                    children: "Blog"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.55, delay: 0.08 },
                className: "font-bold text-white leading-tight mb-5",
                style: {
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  letterSpacing: "-0.02em"
                },
                children: [
                  "Insights &",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      children: "Strategy"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.15 },
                className: "text-lg max-w-2xl mx-auto",
                style: { color: "rgba(255,255,255,0.55)", lineHeight: "1.7" },
                children: "Expert takes on digital marketing, performance ads, and brand scaling from the Maverick Digitals team."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3) 30%, rgba(6,182,212,0.3) 70%, transparent)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7",
        "data-ocid": "blog.loading_state",
        children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCardSkeleton, { i }, i))
      },
      "loading"
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4 },
        children: posts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-24",
            "data-ocid": "blog.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-lg mb-6",
                  style: { color: "rgba(255,255,255,0.5)" },
                  children: "No articles yet. Check back soon."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90",
                  style: {
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)"
                  },
                  "data-ocid": "blog.contact_cta_button",
                  children: "Contact Us"
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7",
            "data-ocid": "blog.grid",
            children: posts.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              BlogCard,
              {
                post,
                index: i
              },
              post.id.toString()
            ))
          }
        )
      },
      "posts"
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-4xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center p-12 rounded-2xl relative overflow-hidden",
            style: {
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12), transparent 70%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-bold uppercase tracking-[0.2em] mb-4",
                    style: { color: "#a78bfa" },
                    children: "Work With Us"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-bold text-white text-3xl mb-4",
                    style: { letterSpacing: "-0.01em" },
                    children: "Ready to Scale Your Brand?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mb-8 max-w-md mx-auto",
                    style: { color: "rgba(255,255,255,0.55)" },
                    children: "Book a free strategy session and let's map out your growth plan."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5",
                    style: {
                      background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                      boxShadow: "0 4px 24px rgba(124,58,237,0.3)"
                    },
                    "data-ocid": "blog.cta_button",
                    children: "Get a Free Strategy Session →"
                  }
                ) })
              ] })
            ]
          }
        )
      }
    ) }) })
  ] });
}
export {
  Blog as default
};
