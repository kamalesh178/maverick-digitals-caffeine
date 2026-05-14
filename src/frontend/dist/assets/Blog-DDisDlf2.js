import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, X, m as motion, A as AnimatePresence, L as Link } from "./index-Cj8-jWY_.js";
import { A as AnimatedSection, T as TextReveal } from "./TextReveal-BmkunpgX.js";
import { A as ArrowLeft, a as ArrowRight, S as Skeleton, T as Tag } from "./skeleton-M7c0TZE7.js";
import { g as getAllBlogPosts, a as getBlogPostsByCategory } from "./backend-DX86TjI-.js";
import "./utils-DWi2mX0G.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const FALLBACK_POSTS = [
  {
    id: BigInt(1),
    title: "How to Engineer Viral Moments: The Shareability Framework",
    excerpt: "Unpack the exact mechanics behind why content spreads and how Mumbai's fastest-scaling brands have built viral loops that compound over time.",
    content: "",
    category: "Social Media",
    author: "Rohan Mehta",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["viral", "social media", "Mumbai"],
    createdAt: BigInt(17040672e5),
    updatedAt: BigInt(17040672e5),
    published: true
  },
  {
    id: BigInt(2),
    title: "Maximising ROAS in 2025: A Data-First Advertising Playbook",
    excerpt: "Stop burning budget on underperforming campaigns. Here are the data-backed frameworks our team uses to consistently achieve 10x ROAS across Meta and Google.",
    content: "",
    category: "Performance Marketing",
    author: "Priya Sharma",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["paid ads", "ROI", "Meta Ads"],
    createdAt: BigInt(17067456e5),
    updatedAt: BigInt(17067456e5),
    published: true
  },
  {
    id: BigInt(3),
    title: "Building a Content Engine That Turns Readers Into Buyers",
    excerpt: "Impressions are not a business outcome. Learn how to architect a content system that generates qualified leads and attributable revenue for your brand.",
    content: "",
    category: "Digital Marketing",
    author: "Aditya Kapoor",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["content", "conversion", "strategy"],
    createdAt: BigInt(1709424e6),
    updatedAt: BigInt(1709424e6),
    published: true
  },
  {
    id: BigInt(4),
    title: "Instagram Reels vs TikTok: Where Should Your Brand Focus in 2025?",
    excerpt: "A head-to-head breakdown of short-form video platforms with platform-native strategies designed to maximise your organic reach and engagement in 2025.",
    content: "",
    category: "Social Media",
    author: "Neha Joshi",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["Instagram", "Reels", "short-form video"],
    createdAt: BigInt(1712016e6),
    updatedAt: BigInt(1712016e6),
    published: true
  },
  {
    id: BigInt(5),
    title: "The Mumbai Influencer Marketing Playbook for 2025",
    excerpt: "How leading Mumbai brands are building high-value influencer partnerships — from micro to macro — that generate genuine sales, not just vanity impressions.",
    content: "",
    category: "Digital Marketing",
    author: "Maverick Team",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["influencer", "Mumbai", "partnerships"],
    createdAt: BigInt(17146944e5),
    updatedAt: BigInt(17146944e5),
    published: true
  },
  {
    id: BigInt(6),
    title: "SEO in 2025: How AI Has Rewritten the Rules of Organic Growth",
    excerpt: "Google's AI-first indexing has fundamentally changed how content ranks. Here's how to adapt your SEO approach to thrive in the new era of search.",
    content: "",
    category: "SEO",
    author: "Vikram Singh",
    imageUrl: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["SEO", "AI", "Google"],
    createdAt: BigInt(17173728e5),
    updatedAt: BigInt(17173728e5),
    published: true
  },
  {
    id: BigInt(7),
    title: "Web Design Principles That Drive Conversions, Not Just Compliments",
    excerpt: "Beautiful websites that don't convert are expensive decorations. Here are the design principles that consistently turn website visitors into paying customers.",
    content: "",
    category: "Web Design",
    author: "Kavya Nair",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["web design", "UX", "conversion"],
    createdAt: BigInt(17200512e5),
    updatedAt: BigInt(17200512e5),
    published: true
  },
  {
    id: BigInt(8),
    title: "The Complete Meta Ads Blueprint for Indian Brands in 2025",
    excerpt: "Meta's algorithm has evolved dramatically. Here's a comprehensive guide to running profitable, scalable ad campaigns tailored specifically for the Indian market.",
    content: "",
    category: "Performance Marketing",
    author: "Rohan Mehta",
    imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["Meta Ads", "Facebook", "India"],
    createdAt: BigInt(17227296e5),
    updatedAt: BigInt(17227296e5),
    published: true
  },
  {
    id: BigInt(9),
    title: "How AI Is Reshaping Performance Marketing in 2025",
    excerpt: "Artificial intelligence is no longer a future concept — it's the engine powering the most efficient ad campaigns today. Discover how brands are using AI to cut costs, sharpen targeting, and multiply their return on ad spend.",
    content: "",
    category: "Performance Marketing",
    author: "Muskan Rathod",
    imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80",
    tags: ["AI", "Performance Marketing", "Digital Advertising", "ROI"],
    createdAt: BigInt(17460576e5),
    updatedAt: BigInt(17460576e5),
    published: true
  },
  {
    id: BigInt(10),
    title: "The Power of UGC: Why User-Generated Content Drives Real Conversions",
    excerpt: "In a world of polished brand content, authentic user-generated content stands out — and converts. Learn why UGC has become the most trusted form of social proof and how to build a strategy around it.",
    content: "",
    category: "Digital Marketing",
    author: "Muskan Rathod",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
    tags: ["UGC", "Content Strategy", "Social Proof", "Conversions"],
    createdAt: BigInt(1746144e6),
    updatedAt: BigInt(1746144e6),
    published: true
  },
  {
    id: BigInt(11),
    title: "Building a High-Converting Landing Page: Design Principles That Actually Work",
    excerpt: "Your landing page has seconds to convince a visitor to stay — and only one job: convert. Here are the proven design and copywriting principles behind pages that turn clicks into customers.",
    content: "",
    category: "Web Design",
    author: "Dhaval Shah",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80",
    tags: ["Web Design", "Conversion Rate Optimization", "Landing Pages", "UX"],
    createdAt: BigInt(17462304e5),
    updatedAt: BigInt(17462304e5),
    published: true
  }
];
const FALLBACK_IMG = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop&auto=format&q=80";
const SKELETON_KEYS = ["sk-a", "sk-b", "sk-c", "sk-d", "sk-e", "sk-f"];
const CATEGORIES = [
  "All",
  "Digital Marketing",
  "Social Media",
  "Performance Marketing",
  "Web Design",
  "SEO"
];
const POSTS_PER_PAGE = 6;
function formatDate(ts) {
  return new Date(Number(ts)).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}
function BlogCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg overflow-hidden border border-[#E2E8F0] bg-white shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-52 w-full bg-[#F1F5F9] relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.04) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.6s infinite linear"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28 bg-[#E2E8F0]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full bg-[#E2E8F0]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-4/5 bg-[#E2E8F0]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-full bg-[#E2E8F0]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-11/12 bg-[#E2E8F0]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-7 rounded-full bg-[#E2E8F0]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-24 bg-[#E2E8F0]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3.5 w-20 ml-auto bg-[#E2E8F0]" })
      ] })
    ] })
  ] });
}
function FeaturedBlogCard({ post }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 28 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.55 },
      className: "md:col-span-2 lg:col-span-3",
      "data-ocid": "blog-featured-card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$id", params: { id: post.id.toString() }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-lg border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(37,99,235,0.1)] hover:border-[rgba(37,99,235,0.35)] flex flex-col lg:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none lg:w-[55%] shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 lg:h-full min-h-[260px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.imageUrl,
              alt: post.title,
              className: "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]",
              loading: "eager",
              onError: (e) => {
                const el = e.currentTarget;
                el.onerror = null;
                el.src = FALLBACK_IMG;
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#2563EB] text-white shadow-md", children: "Featured" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between p-7 lg:p-9 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-[#EFF6FF] text-[#2563EB] border-[rgba(37,99,235,0.2)] font-display mb-4 w-fit", children: post.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-[#1E3A8A] text-2xl lg:text-3xl leading-tight mb-4 group-hover:text-[#2563EB] transition-colors duration-200", children: post.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] text-base leading-relaxed line-clamp-3 mb-6", children: post.excerpt })
          ] }),
          post.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-6", children: post.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#F1F5F9] border border-[#E2E8F0] text-[#6B7280]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-2.5 h-2.5" }),
                tag
              ]
            },
            tag
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-[#E2E8F0] pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-xs font-black font-display shrink-0", children: getInitials(post.author) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[#1E3A8A] leading-none", children: post.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#9CA3AF] mt-0.5", children: formatDate(post.createdAt) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm text-[#2563EB] font-semibold group-hover:gap-2.5 transition-all duration-200", children: [
              "Read Article ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          ] })
        ] })
      ] }) })
    }
  );
}
function BlogCard({ post, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 28 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.07 },
      "data-ocid": `blog-card.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$id", params: { id: post.id.toString() }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full flex flex-col overflow-hidden rounded-lg border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(37,99,235,0.08)] hover:border-[rgba(37,99,235,0.3)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative overflow-hidden rounded-t-lg shrink-0",
            style: { height: "210px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: post.imageUrl,
                  alt: post.title,
                  className: "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]",
                  loading: "lazy",
                  decoding: "async",
                  onError: (e) => {
                    const el = e.currentTarget;
                    el.onerror = null;
                    el.src = FALLBACK_IMG;
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-[#EFF6FF] text-[#2563EB] border-[rgba(37,99,235,0.2)] font-display mb-3 w-fit", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-[#1E3A8A] text-[1.05rem] leading-snug mb-2.5 line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-200 flex-1 min-w-0", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] text-sm leading-relaxed line-clamp-2 mb-4", children: post.excerpt }),
          post.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-4", children: post.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-[#6B7280]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-2 h-2" }),
                tag
              ]
            },
            tag
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-[#E2E8F0] pt-3.5 mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[10px] font-black font-display shrink-0", children: getInitials(post.author) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[#1E3A8A] truncate leading-none", children: post.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-[#9CA3AF] mt-0.5", children: formatDate(post.createdAt) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-[#2563EB] font-semibold shrink-0 group-hover:gap-2 transition-all duration-200", children: [
              "Read ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
            ] })
          ] })
        ] })
      ] }) })
    }
  );
}
function Blog() {
  const [allPosts, setAllPosts] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [isError, setIsError] = reactExports.useState(false);
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const filterBarRef = reactExports.useRef(null);
  const searchRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setIsError(false);
    getAllBlogPosts().then((posts) => {
      if (!cancelled) {
        setAllPosts(posts.length > 0 ? posts : FALLBACK_POSTS);
        setIsLoading(false);
      }
    }).catch(() => {
      if (!cancelled) {
        setAllPosts(FALLBACK_POSTS);
        setIsLoading(false);
        setIsError(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);
  reactExports.useEffect(() => {
    if (activeCategory === "All") return;
    let cancelled = false;
    getBlogPostsByCategory(activeCategory).then((posts) => {
      if (!cancelled && posts.length > 0) ;
    }).catch(() => {
    });
    return () => {
      cancelled = true;
    };
  }, [activeCategory]);
  const filtered = allPosts.filter((post) => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchSearch = !query || post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query) || post.tags.some((t) => t.toLowerCase().includes(query));
    return matchCat && matchSearch;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const pagePosts = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );
  const featuredPost = currentPage === 1 && !searchQuery && activeCategory === "All" ? pagePosts[0] : null;
  const gridPosts = featuredPost ? pagePosts.slice(1) : pagePosts;
  function handleCategoryChange(cat) {
    var _a;
    setActiveCategory(cat);
    setCurrentPage(1);
    (_a = filterBarRef.current) == null ? void 0 : _a.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  function clearSearch() {
    var _a;
    setSearchQuery("");
    setCurrentPage(1);
    (_a = searchRef.current) == null ? void 0 : _a.focus();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { background: "#FFFFFF", color: "#374151" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "relative pt-28 pb-16 overflow-hidden",
            style: { background: "#FFFFFF" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 70%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    backgroundImage: "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                  },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4 text-center relative z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.06)] text-[#2563EB] text-xs font-bold uppercase tracking-widest font-display mb-6", children: "From the Strategy Room" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-5xl md:text-7xl leading-none tracking-tight mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TextReveal,
                      {
                        text: "The Maverick",
                        as: "span",
                        className: "text-[#1E3A8A]"
                      }
                    ),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TextReveal,
                      {
                        text: "Intelligence Hub",
                        as: "span",
                        className: "text-[#2563EB]",
                        delay: 200
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] text-lg max-w-2xl mx-auto mt-6 mb-10 leading-relaxed", children: "Growth frameworks, campaign breakdowns, and strategic insights from Mumbai's most data-driven digital marketing team — free and updated weekly." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto relative group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF] transition-colors duration-200 group-focus-within:text-[#2563EB] pointer-events-none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      ref: searchRef,
                      type: "text",
                      placeholder: "Search articles, strategies, topics, and more...",
                      value: searchQuery,
                      onChange: (e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      },
                      className: "w-full pl-11 pr-10 py-3.5 rounded-xl bg-white border border-[#E2E8F0] text-[#1E3A8A] placeholder:text-[#9CA3AF] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[rgba(37,99,235,0.12)] transition-all duration-200 shadow-sm",
                      "data-ocid": "blog.search_input"
                    }
                  ),
                  searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: clearSearch,
                      className: "absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-[#F1F5F9] text-[#6B7280] hover:bg-[#E2E8F0] transition-colors duration-150",
                      "aria-label": "Clear search",
                      "data-ocid": "blog.clear_search_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", delay: 0.18, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center flex-wrap gap-6 mt-8 text-sm text-[#6B7280]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-[#1E3A8A] font-display text-base", children: [
                      allPosts.length,
                      "+"
                    ] }),
                    " ",
                    "Articles"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-[#E2E8F0]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#1E3A8A] font-display text-base", children: CATEGORIES.length - 1 }),
                    " ",
                    "Categories"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-[#E2E8F0]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Updated",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#1E3A8A] font-display text-base", children: "Weekly" })
                  ] })
                ] }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: filterBarRef }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] py-3 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-hide",
            role: "tablist",
            "aria-label": "Blog categories",
            children: CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  role: "tab",
                  "aria-selected": isActive,
                  onClick: () => handleCategoryChange(cat),
                  className: `relative shrink-0 px-4 py-2 rounded-lg text-sm font-display font-semibold transition-all duration-200 ${isActive ? "bg-[#2563EB] text-white shadow-sm" : "bg-transparent text-[#6B7280] hover:text-[#1E3A8A] border border-[#E2E8F0] hover:border-[rgba(37,99,235,0.3)]"}`,
                  "data-ocid": `blog.filter.${cat.toLowerCase().replace(/\s+/g, "-")}`,
                  children: cat
                },
                cat
              );
            })
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", style: { background: "#F8FAFC" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4", children: [
          isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              "data-ocid": "blog.loading_state",
              children: SKELETON_KEYS.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCardSkeleton, {}, key))
            }
          ),
          isError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-24", "data-ocid": "blog.error_state", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "⚠️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-[#1E3A8A] text-xl mb-2", children: "Something went wrong" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B7280] mb-6", children: "We were unable to load the articles. Please check your connection and try again." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => window.location.reload(),
                className: "px-6 py-3 rounded-lg bg-[#2563EB] text-white font-bold font-display hover:bg-[#1D4ED8] transition-colors duration-200",
                children: "Retry"
              }
            )
          ] }),
          !isLoading && !isError && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "text-center py-24",
              "data-ocid": "blog.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-5", children: "🔍" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-[#1E3A8A] text-2xl mb-3", children: "No matching articles" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B7280] mb-8 max-w-xs mx-auto", children: "Try adjusting your search or selecting a different category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    },
                    className: "px-6 py-3 rounded-lg border border-[rgba(37,99,235,0.3)] text-[#2563EB] font-bold font-display hover:bg-[rgba(37,99,235,0.06)] transition-colors duration-200",
                    "data-ocid": "blog.clear_filters_button",
                    children: "Reset Filters"
                  }
                )
              ]
            }
          ),
          !isLoading && !isError && pagePosts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-[#6B7280]", children: [
                "Showing",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1E3A8A] font-semibold", children: filtered.length }),
                " ",
                "article",
                filtered.length !== 1 ? "s" : "",
                activeCategory !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  " ",
                  "in",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#2563EB] font-semibold", children: activeCategory })
                ] }),
                searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  " ",
                  "matching",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#2563EB] font-semibold", children: [
                    "“",
                    searchQuery,
                    "”"
                  ] })
                ] })
              ] }),
              totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-[#6B7280]", children: [
                "Page ",
                currentPage,
                " of ",
                totalPages
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -8 },
                transition: { duration: 0.3 },
                children: [
                  featuredPost && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedBlogCard, { post: featuredPost }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                      "data-ocid": "blog.grid",
                      children: gridPosts.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        BlogCard,
                        {
                          post,
                          index: i
                        },
                        post.id.toString()
                      ))
                    }
                  ) })
                ]
              },
              `${activeCategory}-${currentPage}-${searchQuery}`
            ) }),
            totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.25 },
                className: "flex items-center justify-center gap-3 mt-14",
                "data-ocid": "blog.pagination",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setCurrentPage((p) => Math.max(1, p - 1));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      },
                      disabled: currentPage === 1,
                      className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-sm font-display font-semibold text-[#6B7280] hover:text-[#1E3A8A] hover:border-[rgba(37,99,235,0.3)] disabled:opacity-40 disabled:pointer-events-none transition-all duration-200",
                      "data-ocid": "blog.pagination_prev",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                        "Prev"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setCurrentPage(page);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        },
                        className: `w-9 h-9 rounded-lg text-sm font-display font-bold transition-all duration-200 ${page === currentPage ? "bg-[#2563EB] text-white shadow-sm" : "bg-white border border-[#E2E8F0] text-[#6B7280] hover:text-[#1E3A8A] hover:border-[rgba(37,99,235,0.3)]"}`,
                        "data-ocid": `blog.page.${page}`,
                        children: page
                      },
                      page
                    )
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setCurrentPage((p) => Math.min(totalPages, p + 1));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      },
                      disabled: currentPage === totalPages,
                      className: "flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-sm font-display font-semibold text-[#6B7280] hover:text-[#1E3A8A] hover:border-[rgba(37,99,235,0.3)] disabled:opacity-40 disabled:pointer-events-none transition-all duration-200",
                      "data-ocid": "blog.pagination_next",
                      children: [
                        "Next",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white border-t border-[#E2E8F0]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-3xl px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { variant: "fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-[rgba(37,99,235,0.15)] bg-[#EFF6FF] p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(37,99,235,0.05) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-[#2563EB] font-display", children: "Never Miss an Insight" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-3xl text-[#1E3A8A] mt-3 mb-3", children: "Access the Maverick Intelligence Hub" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] mb-8 max-w-md mx-auto", children: "Fresh growth frameworks, campaign deep-dives, and insider insights — delivered straight to your inbox, every single week." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#2563EB] text-white font-bold font-display hover:bg-[#1D4ED8] transition-colors duration-200 shadow-[0_0_24px_rgba(37,99,235,0.2)]",
                "data-ocid": "blog.newsletter_cta_button",
                children: "Get Weekly Strategy Insights"
              }
            ) })
          ] })
        ] }) }) }) })
      ]
    }
  );
}
export {
  Blog as default
};
