import { getAllBlogPosts, getBlogPostById } from "@/lib/backend";
import type { BlogPost as BlogPostType } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Fallback posts (with full content) ──────────────────────────────────────
const FALLBACK_POSTS: BlogPostType[] = [
  {
    id: BigInt(1),
    title: "How We Generated 10M+ Views for Our Clients",
    excerpt:
      "A behind-the-scenes look at the AI-powered content strategy that drove massive organic growth across Instagram and LinkedIn.",
    content:
      "At Maverick Digitals, generating 10 million organic views wasn't luck — it was the result of a repeatable, AI-powered content system. We analyzed top-performing content in our clients' niches, reverse-engineered the algorithm's content preferences, and built a UGC-first production pipeline that produced authentic, scroll-stopping content at scale.\n\nThe key insight? Authenticity beats production value every time on Instagram and LinkedIn. By briefing UGC creators with data-backed hooks, we consistently achieved 3–5x higher save rates than branded content.\n\nThe result: 10M+ organic views across client accounts in under 12 months.",
    category: "Case Study",
    author: "Muskan Rathod",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    tags: ["UGC", "organic growth", "Instagram"],
    createdAt: BigInt(new Date("April 15, 2025").getTime()),
    updatedAt: BigInt(new Date("April 15, 2025").getTime()),
    published: true,
  },
  {
    id: BigInt(2),
    title: "The UGC Formula: Why Authentic Content Converts 3x Better",
    excerpt:
      "User-generated content is no longer optional — here's the data behind why UGC outperforms branded content consistently.",
    content:
      "The data is clear: UGC content converts at 3x the rate of polished branded video. Why? Because modern audiences are trained to skip ads — but they stop for content that looks and feels real.\n\nOur UGC formula involves three pillars: authentic creators who genuinely align with the brand, data-backed hooks in the first 3 seconds, and strategic calls to action that feel natural rather than sales-y.\n\nAcross 35+ brands we've scaled, UGC content consistently delivers higher click-through rates, lower CPMs, and stronger brand recall than any other content format.",
    category: "Strategy",
    author: "Dhaval Shah",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    tags: ["UGC", "conversion", "strategy"],
    createdAt: BigInt(new Date("March 28, 2025").getTime()),
    updatedAt: BigInt(new Date("March 28, 2025").getTime()),
    published: true,
  },
  {
    id: BigInt(3),
    title: "Performance Ads in 2025: A Data-Driven Playbook",
    excerpt:
      "From targeting to creatives, here's our proven framework for running high-ROAS Facebook, Instagram, and Google ad campaigns.",
    content:
      "Running profitable performance ads in 2025 requires a fundamentally different approach than it did two years ago. With iOS privacy changes, rising CPMs, and increasingly sophisticated audiences, the old playbook is dead.\n\nOur current framework focuses on three things: creative-led testing (80% of success comes from the ad creative, not the targeting), first-party data activation through email list lookalikes and website retargeting, and dynamic budget optimization across Meta and Google simultaneously.\n\nFor our clients, this approach consistently delivers 4–8x ROAS on cold traffic and 10–15x ROAS on warm audiences.",
    category: "Performance Marketing",
    author: "Muskan Rathod",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    tags: ["performance ads", "ROAS", "Meta"],
    createdAt: BigInt(new Date("March 10, 2025").getTime()),
    updatedAt: BigInt(new Date("March 10, 2025").getTime()),
    published: true,
  },
];

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop";

// ─── Category pill ────────────────────────────────────────────────────────────
const CATEGORY_PILL: Record<string, string> = {
  "Case Study": "bg-purple-500/15 text-purple-300 border-purple-500/30",
  Strategy: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  "Performance Marketing":
    "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "Digital Marketing": "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "Social Media": "bg-pink-500/15 text-pink-300 border-pink-500/30",
  "Web Design": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  SEO: "bg-orange-500/15 text-orange-300 border-orange-500/30",
};

function getCategoryPill(cat: string) {
  return CATEGORY_PILL[cat] ?? "bg-white/10 text-white/60 border-white/20";
}

function formatDate(ts: bigint): string {
  return new Date(Number(ts)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// ─── Loading skeleton ─────────────────────────────────────────────────────────
function PostSkeleton() {
  return (
    <div
      className="container mx-auto px-4 pt-28 pb-16 animate-pulse"
      style={{ maxWidth: "800px" }}
    >
      <div
        style={{
          height: "16px",
          width: "100px",
          background: "#1a1a1a",
          borderRadius: "6px",
          marginBottom: "32px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "100%",
          background: "#1a1a1a",
          borderRadius: "16px",
          marginBottom: "32px",
        }}
      />
      <div
        style={{
          height: "14px",
          width: "80px",
          background: "#1a1a1a",
          borderRadius: "999px",
          marginBottom: "16px",
        }}
      />
      <div
        style={{
          height: "40px",
          width: "100%",
          background: "#1a1a1a",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      />
      <div
        style={{
          height: "40px",
          width: "75%",
          background: "#1a1a1a",
          borderRadius: "8px",
          marginBottom: "24px",
        }}
      />
      {(["c1", "c2", "c3", "c4"] as const).map((k, ki) => (
        <div
          key={k}
          style={{
            height: "14px",
            width: ki % 2 === 0 ? "100%" : "90%",
            background: "#1a1a1a",
            borderRadius: "6px",
            marginBottom: "12px",
          }}
        />
      ))}
    </div>
  );
}

// ─── Content renderer ─────────────────────────────────────────────────────────
function renderContent(content: string) {
  return content.split("\n\n").map((para) => {
    if (!para.trim()) return null;
    const paraKey = para.trim().slice(0, 40);
    return (
      <p
        key={paraKey}
        style={{
          color: "rgba(255,255,255,0.75)",
          lineHeight: "1.85",
          marginBottom: "1.5rem",
          fontSize: "1.05rem",
        }}
      >
        {para.trim()}
      </p>
    );
  });
}

// ─── Related post mini-card ───────────────────────────────────────────────────
function RelatedCard({ post, index }: { post: BlogPostType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to="/blog/$id" params={{ id: post.id.toString() }}>
        <div
          className="group overflow-hidden transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "14px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor =
              "rgba(124,58,237,0.4)";
            (e.currentTarget as HTMLDivElement).style.boxShadow =
              "0 8px 32px rgba(124,58,237,0.2)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor =
              "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          }}
        >
          <div style={{ height: "160px", overflow: "hidden" }}>
            <img
              src={post.imageUrl}
              alt={post.title}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.4s ease",
              }}
              className="group-hover:scale-[1.05]"
              loading="lazy"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.onerror = null;
                el.src = FALLBACK_IMG;
              }}
            />
          </div>
          <div className="p-4">
            <span
              className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-2 ${getCategoryPill(post.category)}`}
            >
              {post.category}
            </span>
            <h4
              className="text-sm font-semibold text-white leading-snug mb-3 group-hover:text-transparent transition-all duration-200"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              <span className="group-hover:[background-image:var(--gradient-text)] group-hover:bg-clip-text">
                {post.title}
              </span>
            </h4>
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all duration-200"
              style={{
                background: "var(--gradient-text)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Read More{" "}
              <ArrowRight className="w-3 h-3" style={{ color: "#a78bfa" }} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function BlogPost() {
  const { id } = useParams({ strict: false }) as { id: string };

  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Related = other 2 fallback posts (not the current one)
  const relatedPosts = FALLBACK_POSTS.filter(
    (p) => p.id.toString() !== id,
  ).slice(0, 2);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setNotFound(false);

    const numId = BigInt(id);

    // Try local fallback first
    const localPost = FALLBACK_POSTS.find((p) => p.id === numId);
    if (localPost) {
      setPost(localPost);
      setIsLoading(false);
      return;
    }

    // Try backend
    getBlogPostById(numId)
      .then((fetched) => {
        if (!cancelled) {
          if (fetched) {
            setPost(fetched);
          } else {
            // Also try getAllBlogPosts as fallback
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
      })
      .catch(() => {
        if (!cancelled) {
          setNotFound(true);
          setIsLoading(false);
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (isLoading) return <PostSkeleton />;

  if (notFound || !post) {
    return (
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
        style={{ background: "#0a0a0a" }}
        data-ocid="blog-post.error_state"
      >
        <div className="text-6xl mb-6">📄</div>
        <h1 className="font-bold text-white text-3xl mb-4">
          Article Not Found
        </h1>
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
          This article doesn't exist or may have been moved.
        </p>
        <Link to="/blog">
          <button
            type="button"
            className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            data-ocid="blog-post.back_button"
          >
            Browse All Articles
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      {/* ── Back link ── */}
      <div
        className="container mx-auto px-4 pt-28 pb-6"
        style={{ maxWidth: "800px" }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group hover:gap-3"
          style={{
            background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          data-ocid="blog-post.back_link"
        >
          <ArrowLeft
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"
            style={{ color: "#a78bfa" }}
          />
          Back to Blog
        </Link>
      </div>

      {/* ── Featured image ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mb-10"
        style={{ maxWidth: "800px" }}
      >
        <div
          style={{
            width: "100%",
            height: "400px",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={post.imageUrl}
            alt={post.title}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              display: "block",
            }}
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.onerror = null;
              el.src = FALLBACK_IMG;
            }}
          />
          {/* Subtle bottom gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(10,10,10,0.4), transparent 60%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </motion.div>

      {/* ── Article ── */}
      <article
        className="container mx-auto px-4 pb-16"
        style={{ maxWidth: "800px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category pill */}
          <span
            className={`inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-5 ${getCategoryPill(post.category)}`}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1
            className="font-bold text-white leading-tight mb-5"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              letterSpacing: "-0.025em",
            }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div
            className="flex flex-wrap items-center gap-4 mb-6 text-sm"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            <span
              className="font-semibold"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {post.author}
            </span>
            <span>·</span>
            <span>{formatDate(post.createdAt)}</span>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(124,58,237,0.4), rgba(6,182,212,0.4), transparent)",
              marginBottom: "2rem",
            }}
          />

          {/* Excerpt as lead */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: "1.75",
              marginBottom: "2rem",
              paddingLeft: "1rem",
              borderLeft: "3px solid rgba(124,58,237,0.6)",
            }}
          >
            {post.excerpt}
          </p>
        </motion.div>

        {/* Content body */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          {renderContent(post.content || post.excerpt)}
        </motion.div>

        {/* ── CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            className="text-center p-10 rounded-2xl relative overflow-hidden"
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12), transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <h3
                className="font-bold text-white text-2xl mb-3"
                style={{ letterSpacing: "-0.01em" }}
              >
                Ready to Apply These Strategies?
              </h3>
              <p
                className="mb-7 max-w-md mx-auto"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Book a free strategy session with our team and let's map out
                your growth plan tailored for your brand.
              </p>
              <Link to="/contact">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    boxShadow: "0 4px 24px rgba(124,58,237,0.3)",
                  }}
                  data-ocid="blog-post.cta_button"
                >
                  Get a Free Strategy Session
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ── Related posts ── */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-ocid="blog-post.related_section"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  width: "4px",
                  height: "24px",
                  borderRadius: "2px",
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                }}
              />
              <h3
                className="font-bold text-white text-xl"
                style={{ letterSpacing: "-0.01em" }}
              >
                More from the Blog
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedPosts.map((r, idx) => (
                <RelatedCard key={r.id.toString()} post={r} index={idx} />
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  );
}
