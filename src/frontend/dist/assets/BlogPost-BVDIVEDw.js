import { a as createLucideIcon, u as useParams, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-jpOSPqTZ.js";
import { a as getBlogPostById, g as getAllBlogPosts } from "./backend-B0hqVQPu.js";
import { m as motion } from "./proxy-B5rRmvmM.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
const FALLBACK_POSTS = [
  {
    id: BigInt(1),
    title: "How We Generated 10M+ Views for Our Clients",
    excerpt: "A behind-the-scenes look at the AI-powered content strategy that drove massive organic growth across Instagram and LinkedIn.",
    content: "At Maverick Digitals, generating 10 million organic views wasn't luck — it was the result of a repeatable, AI-powered content system. We analyzed top-performing content in our clients' niches, reverse-engineered the algorithm's content preferences, and built a UGC-first production pipeline that produced authentic, scroll-stopping content at scale.\n\nThe key insight? Authenticity beats production value every time on Instagram and LinkedIn. By briefing UGC creators with data-backed hooks, we consistently achieved 3–5x higher save rates than branded content.\n\nThe result: 10M+ organic views across client accounts in under 12 months.",
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
    content: "The data is clear: UGC content converts at 3x the rate of polished branded video. Why? Because modern audiences are trained to skip ads — but they stop for content that looks and feels real.\n\nOur UGC formula involves three pillars: authentic creators who genuinely align with the brand, data-backed hooks in the first 3 seconds, and strategic calls to action that feel natural rather than sales-y.\n\nAcross 35+ brands we've scaled, UGC content consistently delivers higher click-through rates, lower CPMs, and stronger brand recall than any other content format.",
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
    content: "Running profitable performance ads in 2025 requires a fundamentally different approach than it did two years ago. With iOS privacy changes, rising CPMs, and increasingly sophisticated audiences, the old playbook is dead.\n\nOur current framework focuses on three things: creative-led testing (80% of success comes from the ad creative, not the targeting), first-party data activation through email list lookalikes and website retargeting, and dynamic budget optimization across Meta and Google simultaneously.\n\nFor our clients, this approach consistently delivers 4–8x ROAS on cold traffic and 10–15x ROAS on warm audiences.",
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
  "Case Study": "bg-purple-500/15 text-purple-300 border-purple-500/30",
  Strategy: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  "Performance Marketing": "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "Digital Marketing": "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "Social Media": "bg-pink-500/15 text-pink-300 border-pink-500/30",
  "Web Design": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  SEO: "bg-orange-500/15 text-orange-300 border-orange-500/30"
};
function getCategoryPill(cat) {
  return CATEGORY_PILL[cat] ?? "bg-white/10 text-white/60 border-white/20";
}
function formatDate(ts) {
  return new Date(Number(ts)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function PostSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "container mx-auto px-4 pt-28 pb-16 animate-pulse",
      style: { maxWidth: "800px" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: "16px",
              width: "100px",
              background: "#1a1a1a",
              borderRadius: "6px",
              marginBottom: "32px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: "400px",
              width: "100%",
              background: "#1a1a1a",
              borderRadius: "16px",
              marginBottom: "32px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: "14px",
              width: "80px",
              background: "#1a1a1a",
              borderRadius: "999px",
              marginBottom: "16px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: "40px",
              width: "100%",
              background: "#1a1a1a",
              borderRadius: "8px",
              marginBottom: "12px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: "40px",
              width: "75%",
              background: "#1a1a1a",
              borderRadius: "8px",
              marginBottom: "24px"
            }
          }
        ),
        ["c1", "c2", "c3", "c4"].map((k, ki) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              height: "14px",
              width: ki % 2 === 0 ? "100%" : "90%",
              background: "#1a1a1a",
              borderRadius: "6px",
              marginBottom: "12px"
            }
          },
          k
        ))
      ]
    }
  );
}
function renderContent(content) {
  return content.split("\n\n").map((para) => {
    if (!para.trim()) return null;
    const paraKey = para.trim().slice(0, 40);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        style: {
          color: "rgba(255,255,255,0.75)",
          lineHeight: "1.85",
          marginBottom: "1.5rem",
          fontSize: "1.05rem"
        },
        children: para.trim()
      },
      paraKey
    );
  });
}
function RelatedCard({ post, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: index * 0.1 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$id", params: { id: post.id.toString() }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group overflow-hidden transition-all duration-300 hover:scale-[1.02]",
          style: {
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "14px"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,58,237,0.2)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "none";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "160px", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: post.imageUrl,
                alt: post.title,
                style: {
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease"
                },
                className: "group-hover:scale-[1.05]",
                loading: "lazy",
                onError: (e) => {
                  const el = e.currentTarget;
                  el.onerror = null;
                  el.src = FALLBACK_IMG;
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-2 ${getCategoryPill(post.category)}`,
                  children: post.category
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "text-sm font-semibold text-white leading-snug mb-3 group-hover:text-transparent transition-all duration-200",
                  style: {
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-hover:[background-image:var(--gradient-text)] group-hover:bg-clip-text", children: post.title })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all duration-200",
                  style: {
                    background: "var(--gradient-text)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  },
                  children: [
                    "Read More",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3", style: { color: "#a78bfa" } })
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
function BlogPost() {
  const { id } = useParams({ strict: false });
  const [post, setPost] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [notFound, setNotFound] = reactExports.useState(false);
  const relatedPosts = FALLBACK_POSTS.filter(
    (p) => p.id.toString() !== id
  ).slice(0, 2);
  reactExports.useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setNotFound(false);
    const numId = BigInt(id);
    const localPost = FALLBACK_POSTS.find((p) => p.id === numId);
    if (localPost) {
      setPost(localPost);
      setIsLoading(false);
      return;
    }
    getBlogPostById(numId).then((fetched) => {
      if (!cancelled) {
        if (fetched) {
          setPost(fetched);
        } else {
          return getAllBlogPosts().then((all) => {
            if (!cancelled) {
              const found = all.find((p) => p.id === numId);
              if (found) {
                setPost(found);
              } else {
                setNotFound(true);
              }
            }
          });
        }
        setIsLoading(false);
      }
    }).catch(() => {
      if (!cancelled) {
        setNotFound(true);
        setIsLoading(false);
      }
    }).finally(() => {
      if (!cancelled) setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [id]);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(PostSkeleton, {});
  if (notFound || !post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-[60vh] flex flex-col items-center justify-center text-center px-4",
        style: { background: "#0a0a0a" },
        "data-ocid": "blog-post.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-6", children: "📄" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold text-white text-3xl mb-4", children: "Article Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-8", style: { color: "rgba(255,255,255,0.5)" }, children: "This article doesn't exist or may have been moved." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90",
              style: { background: "linear-gradient(135deg, #7c3aed, #06b6d4)" },
              "data-ocid": "blog-post.back_button",
              children: "Browse All Articles"
            }
          ) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#0a0a0a", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "container mx-auto px-4 pt-28 pb-6",
        style: { maxWidth: "800px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            className: "inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group hover:gap-3",
            style: {
              background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            },
            "data-ocid": "blog-post.back_link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ArrowLeft,
                {
                  className: "w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200",
                  style: { color: "#a78bfa" }
                }
              ),
              "Back to Blog"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 1.02 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6 },
        className: "container mx-auto px-4 mb-10",
        style: { maxWidth: "800px" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              width: "100%",
              height: "400px",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: post.imageUrl,
                  alt: post.title,
                  style: {
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    display: "block"
                  },
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
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,10,0.4), transparent 60%)",
                    pointerEvents: "none"
                  }
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "container mx-auto px-4 pb-16",
        style: { maxWidth: "800px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-5 ${getCategoryPill(post.category)}`,
                    children: post.category
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "font-bold text-white leading-tight mb-5",
                    style: {
                      fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                      letterSpacing: "-0.025em"
                    },
                    children: post.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-wrap items-center gap-4 mb-6 text-sm",
                    style: { color: "rgba(255,255,255,0.45)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-semibold",
                          style: { color: "rgba(255,255,255,0.7)" },
                          children: post.author
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(post.createdAt) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      height: "1px",
                      background: "linear-gradient(90deg, rgba(124,58,237,0.4), rgba(6,182,212,0.4), transparent)",
                      marginBottom: "2rem"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontSize: "1.15rem",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: "1.75",
                      marginBottom: "2rem",
                      paddingLeft: "1rem",
                      borderLeft: "3px solid rgba(124,58,237,0.6)"
                    },
                    children: post.excerpt
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              className: "mb-16",
              children: renderContent(post.content || post.excerpt)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "mb-16",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center p-10 rounded-2xl relative overflow-hidden",
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
                        "h3",
                        {
                          className: "font-bold text-white text-2xl mb-3",
                          style: { letterSpacing: "-0.01em" },
                          children: "Ready to Apply These Strategies?"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "mb-7 max-w-md mx-auto",
                          style: { color: "rgba(255,255,255,0.5)" },
                          children: "Book a free strategy session with our team and let's map out your growth plan tailored for your brand."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5",
                          style: {
                            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                            boxShadow: "0 4px 24px rgba(124,58,237,0.3)"
                          },
                          "data-ocid": "blog-post.cta_button",
                          children: [
                            "Get a Free Strategy Session",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                          ]
                        }
                      ) })
                    ] })
                  ]
                }
              )
            }
          ),
          relatedPosts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              "data-ocid": "blog-post.related_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        width: "4px",
                        height: "24px",
                        borderRadius: "2px",
                        background: "linear-gradient(135deg, #7c3aed, #06b6d4)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-bold text-white text-xl",
                      style: { letterSpacing: "-0.01em" },
                      children: "More from the Blog"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: relatedPosts.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedCard, { post: r, index: idx }, r.id.toString())) })
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  BlogPost as default
};
