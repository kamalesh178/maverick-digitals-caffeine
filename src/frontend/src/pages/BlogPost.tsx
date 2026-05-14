import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllBlogPosts, getBlogPostById } from "@/lib/backend";
import type { BlogPost as BlogPostType } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  Tag,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Full post data ───────────────────────────────────────────────────────────
const FULL_POSTS: BlogPostType[] = [
  {
    id: BigInt(1),
    title: "How to Engineer Viral Moments: The Shareability Framework",
    excerpt:
      "Unpack the exact mechanics behind why content spreads and how Mumbai's fastest-scaling brands have built viral loops that compound over time.",
    content: `## What Actually Makes Content Go Viral

Every viral moment you've witnessed follows the same underlying architecture: a trigger creates an initial wave, which platform mechanics amplify, which generates organic sharing, which feeds back into expanded reach. That recursive cycle is the viral loop.

## The Four Drivers of Shareable Content

**1. Emotional Resonance**
Content that triggers a strong emotional response — delight, surprise, nostalgia, or outrage — is shared at 3x the rate of neutral content. The brands winning in Mumbai understand their audience's emotional vocabulary and write to it deliberately.

**2. Identity Signaling**
People share content that reflects how they want others to see them. The most effective viral content lets the person sharing it appear informed, witty, or culturally aware to their network.

**3. Social Currency**
Content that confers status within a community — exclusive insights, early takes on trends, or insider knowledge — gets shared because sharing it is itself an act of value creation.

**4. Functional Utility**
"Save this for later" content that solves a real, specific problem has exceptional shelf life and reshare rate. How-to guides, frameworks, and reference sheets get forwarded as practical resources.

## Engineering Your Own Viral Loop

Start by identifying your brand's single strongest emotional trigger. What feeling do you uniquely create? Build your content architecture around repeatedly activating that emotion at scale.

Then study platform mechanics. Reels surface to non-followers. LinkedIn carousels maximise dwell time. Twitter threads get bookmarked and reshared in waves. Matching your format to your platform's native amplification is non-negotiable.

## Why Mumbai Brands Have an Edge

Mumbai's digital audience is culturally nuanced, aspirationally motivated, and acutely trend-aware. Brands that speak the city's language — its pace, its plurality, its relentless ambition — tap into a uniquely loyal and vocal audience.

## The Bottom Line

Virality is not luck. It's a repeatable system. Study the mechanics, build your trigger, and put precision-crafted content in front of the right people at the right time. That's how we do it at Maverick.`,
    category: "Social Media",
    author: "Rohan Mehta",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop&auto=format",
    tags: ["viral", "social media", "Mumbai"],
    createdAt: BigInt(1704067200000),
    updatedAt: BigInt(1704067200000),
    published: true,
  },
  {
    id: BigInt(2),
    title: "Maximising ROAS in 2025: A Data-First Advertising Playbook",
    excerpt:
      "Stop burning budget on underperforming campaigns. Here are the data-backed frameworks our team uses to consistently achieve 10x ROAS across Meta and Google.",
    content: `## Why Most Brands Haemorrhage Their Ad Budget

The average Indian brand running digital ads achieves a 1.2x ROAS — barely covering cost. The platforms aren't broken. The approach is.

## The Three Pillars of High-Performance Advertising

**Pillar 1: Audience Architecture**
Targeting is everything. Stop relying on broad demographic buckets and start building layered audience architectures based on behavioural intent, purchase signals, and high-quality lookalike models.

**Pillar 2: Creative as Targeting Signal**
In 2025, your creative is effectively your targeting. Meta's algorithm optimises delivery toward audiences who respond to your specific creative signals. Exceptional creative self-selects its ideal audience.

**Pillar 3: Multi-Touch Attribution**
Brands still relying on last-click attribution are systematically undervaluing their upper-funnel investment. Building a proper multi-touch attribution model reveals the true compounding impact of each channel.

## The Core Metrics That Drive ROAS

Measure these with discipline:
- CPM (Cost Per Thousand Impressions) — your creative efficiency signal
- CTR (Click-Through Rate) — your offer-to-audience relevance signal
- CVR (Conversion Rate) — your landing page performance signal
- ROAS — the natural output of optimising all three simultaneously

## The Path Forward

High ROAS is not a fluke. It's the compounding result of precise audience targeting, high-converting creative, and relentless, systematic optimisation. Build the process and the numbers will follow.`,
    category: "Performance Marketing",
    author: "Priya Sharma",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
    tags: ["paid ads", "ROI", "Meta Ads"],
    createdAt: BigInt(1706745600000),
    updatedAt: BigInt(1706745600000),
    published: true,
  },
  {
    id: BigInt(3),
    title: "Building a Content Engine That Turns Readers Into Buyers",
    excerpt:
      "Impressions are not a business outcome. Learn how to architect a content system that generates qualified leads and attributable revenue for your brand.",
    content: `## The Gap Between Content and Commerce

Most brands create content for visibility. High-performing brands build content systems that guide a prospect from their first impression through every stage of trust-building to conversion and advocacy.

## The Three Content Layers Every Brand Needs

**Awareness Layer — the wide net**
Broad, value-led content that introduces your brand to new audiences. Reels, short-form video, reactive trend content. Volume and reach are the primary metrics here.

**Consideration Layer — the trust builder**
Substantive, expertise-led content that demonstrates capability and builds credibility. Long-form guides, case studies, comparison frameworks, and webinars belong here.

**Conversion Layer — the close**
Offer-focused content engineered to drive a specific action. Client testimonials, product demonstrations, time-sensitive offers, and detailed success stories.

## The 60/30/10 Content Ratio

Map your editorial calendar to the funnel: 60% awareness-building, 30% consideration nurturing, 10% conversion-driving. This ratio ensures you're continuously building the audience that makes conversion content profitable.

## Distribution Multiplies Impact

The most underrated skill in content marketing is systematic repurposing. Every long-form piece should generate 5–10 derivative short-form assets. One blog post becomes a LinkedIn carousel, Instagram caption, email newsletter, short video script, and Twitter thread.

## How to Measure Content ROI

Track organic reach, email list growth, time-on-page, lead magnet downloads, and direct revenue attribution with a 90-day attribution window. Content is a compounding asset — measure it accordingly.

## Start Today

Content strategy delivers compounding returns. The brands winning in 2025 began building their content engines two years ago. The best day to start is today.`,
    category: "Digital Marketing",
    author: "Aditya Kapoor",
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop&auto=format",
    tags: ["content", "conversion", "strategy"],
    createdAt: BigInt(1709424000000),
    updatedAt: BigInt(1709424000000),
    published: true,
  },
  {
    id: BigInt(4),
    title: "How AI Is Reshaping Performance Marketing in 2025",
    excerpt:
      "Artificial intelligence is no longer a future concept — it's the engine powering the most efficient ad campaigns today. Discover how brands are using AI to cut costs, sharpen targeting, and multiply their return on ad spend.",
    content: `## The AI Shift in Advertising

Performance marketing has entered a new era. The campaigns achieving the highest returns in 2025 aren't just better-targeted — they're intelligently automated. Artificial intelligence now influences every layer of the paid advertising stack, from audience discovery to budget allocation to creative selection.

## Smarter Targeting Through Machine Learning

Traditional audience targeting relied on static demographic buckets. AI-powered platforms like Meta Advantage+ and Google Performance Max analyse thousands of real-time behavioural signals to build dynamic audience models. These systems continuously update based on conversion data, meaning your targeting improves automatically with every rupee spent. Brands leveraging AI targeting consistently outperform manually managed campaigns by 30–60% on cost per acquisition.

## Automated Creative Testing at Scale

One of the highest-leverage uses of AI in performance marketing is creative testing. Rather than running A/B tests sequentially over weeks, AI platforms test dozens of headline, visual, and copy combinations simultaneously — then automatically reallocate budget to the highest-performing variants in real time. This compresses what used to take months into a matter of days, dramatically accelerating the pace at which winning creative is identified.

## Predictive Budget Optimisation

AI budget optimisation tools analyse historical performance data, seasonal trends, audience behaviour patterns, and competitive dynamics to recommend — and in some cases, autonomously execute — budget shifts across campaigns, ad sets, and channels. The result is capital allocation that responds to market conditions faster than any human analyst can manage.

## Lookalike Audiences and Predictive Prospecting

AI-generated lookalike audiences have become significantly more sophisticated. Modern platforms don't just match demographic proxies — they identify users who exhibit the same purchase intent signals and behavioural sequences as your existing customers. Predictive prospecting tools can now forecast which new audiences are likely to convert before they've ever interacted with your brand.

## What This Means for Your Strategy

Brands that treat AI as an autopilot will be disappointed. The highest-performing teams use AI as an accelerant — they still provide strong creative input, maintain rigorous data hygiene, and define clear conversion objectives. The brands winning in 2025 are those who understand how to direct AI systems toward the outcomes that matter, rather than simply handing over control. At Maverick Digitals, we integrate AI tooling across every campaign to ensure our clients capture its full efficiency advantage without sacrificing strategic clarity.`,
    category: "Performance Marketing",
    author: "Muskan Rathod",
    imageUrl:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop",
    tags: ["AI", "Performance Marketing", "Digital Advertising", "ROI"],
    createdAt: BigInt(1746057600000),
    updatedAt: BigInt(1746057600000),
    published: true,
  },
  {
    id: BigInt(5),
    title:
      "The Power of UGC: Why User-Generated Content Drives Real Conversions",
    excerpt:
      "In a world of polished brand content, authentic user-generated content stands out — and converts. Learn why UGC has become the most trusted form of social proof and how to build a strategy around it.",
    content: `## Why Authenticity Outperforms Production Value

Consumers have become remarkably skilled at filtering out branded content. After years of exposure to polished advertisements, audiences instinctively recognise and discount promotional messaging — regardless of production quality. User-generated content bypasses this filter entirely. When a real customer shares their genuine experience, the message carries a credibility that no amount of creative budget can replicate.

## UGC as Your Most Powerful Trust Signal

Nielsen research consistently shows that 92% of consumers trust peer recommendations over brand advertising. UGC is that recommendation at scale. When prospective customers encounter real people using and endorsing your product — in their own words, in their own environments — purchase intent rises dramatically. For e-commerce brands, UGC on product pages has been shown to increase conversion rates by up to 161%.

## Authentic Content vs. Branded Content: The Platform Divide

On social platforms, UGC doesn't just perform better psychologically — it performs better algorithmically. Instagram, TikTok, and YouTube Shorts all favour content that generates genuine engagement over content that looks like an advertisement. UGC-style videos consistently achieve higher organic reach, lower CPMs when used in paid campaigns, and stronger comment and share activity than brand-produced equivalents.

## Building a Systematic UGC Collection Strategy

The most effective approach to UGC is systematic, not opportunistic. Start by making it easy for customers to share — create branded hashtags, build post-purchase email flows that invite sharing, and run UGC-focused campaigns with clear participation mechanics. Incentivise without over-directing: light guidance on format is fine, but scripted UGC loses its authenticity advantage.

## Repurposing and Amplifying Your Best UGC

Raw UGC becomes a strategic asset when it's properly curated and redistributed. Your best customer content belongs everywhere — on product pages, in Meta and Google ad creative, in email campaigns, and in organic social feeds. Always obtain explicit permission before repurposing, and credit creators where appropriate. A single high-performing UGC clip can legitimately serve as ad creative, social proof, and email content simultaneously.

## Measuring UGC Performance

Track UGC impact across three dimensions: engagement rate relative to branded content, conversion lift on pages featuring UGC versus those without, and cost efficiency when UGC is used as paid creative versus traditional production. Brands that build a continuous UGC pipeline typically see sustained improvement across all three metrics as the content library grows — compounding returns that make early investment in UGC strategy highly worthwhile.`,
    category: "Digital Marketing",
    author: "Muskan Rathod",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    tags: ["UGC", "Content Strategy", "Social Proof", "Conversions"],
    createdAt: BigInt(1746144000000),
    updatedAt: BigInt(1746144000000),
    published: true,
  },
  {
    id: BigInt(6),
    title:
      "Building a High-Converting Landing Page: Design Principles That Actually Work",
    excerpt:
      "Your landing page has seconds to convince a visitor to stay — and only one job: convert. Here are the proven design and copywriting principles behind pages that turn clicks into customers.",
    content: `## The One Job a Landing Page Must Do

A landing page is not a brochure. It is not a showcase. It has exactly one function: convert the specific visitor arriving from a specific source into a specific action. Every design decision, every word, every visual element must serve that singular objective or be removed.

## Above the Fold: You Have Three Seconds

Research consistently shows that visitors form an impression of a page within 50 milliseconds and decide whether to stay within three seconds. Above the fold — the portion visible without scrolling — must communicate three things immediately: what you offer, who it's for, and why it matters. A strong headline paired with a clear supporting subheading and a visible primary CTA is the non-negotiable foundation.

## Visual Hierarchy and the Eye's Natural Path

The human eye follows a predictable path when scanning a page: top-left anchor, horizontal sweep, then diagonal drift downward. Effective landing pages engineer this path deliberately. The headline anchors attention, the hero image or visual creates emotional engagement, and the CTA is placed exactly where the eye naturally arrives after processing the core value proposition. Competing visual elements, multiple CTAs, and decorative complexity all break this path and reduce conversions.

## Copy Principles That Actually Convert

High-converting copy is benefit-led, not feature-led. Visitors don't care what your product does in technical terms — they care what problem it solves and what outcome it delivers. Write your headline in the language of the outcome your customer wants. Address the key objection in your subheading. Use social proof — a number, a recognisable brand name, a specific result — as the third element in your above-the-fold hierarchy.

## Trust Signals and Friction Reduction

Every unanswered question in a visitor's mind is a reason not to convert. Trust signals — customer logos, review counts, specific metrics, money-back guarantees, security badges — answer the most common objections proactively. Equally important is friction reduction: the fewer fields in a form, the fewer steps to a conversion, the higher the rate. Every additional field in a lead form reduces completion rates by approximately 10–15%.

## A/B Testing: The Only Way to Know What Works

Design principles are hypotheses, not guarantees. The only reliable way to know what converts for your specific audience and offer is to test. Prioritise tests by potential impact: headline variants, CTA copy, hero imagery, and form length all carry high leverage. Run one test at a time with sufficient traffic to reach statistical significance, record every result, and build a compounding library of learnings. Brands that commit to continuous testing compound their conversion rates meaningfully over time — it is the single highest-ROI activity available to any marketing team.`,
    category: "Web Design",
    author: "Dhaval Shah",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
    tags: ["Web Design", "Conversion Rate Optimization", "Landing Pages", "UX"],
    createdAt: BigInt(1746230400000),
    updatedAt: BigInt(1746230400000),
    published: true,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(ts: bigint): string {
  return new Date(Number(ts)).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function estimateReadTime(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.ceil(words / 200));
}

const CATEGORY_COLORS: Record<string, string> = {
  "Digital Marketing": "text-cyan-600 bg-cyan-50 border-cyan-200",
  "Social Media": "text-violet-600 bg-violet-50 border-violet-200",
  "Performance Marketing": "text-amber-600 bg-amber-50 border-amber-200",
  "Web Design": "text-emerald-600 bg-emerald-50 border-emerald-200",
  SEO: "text-rose-600 bg-rose-50 border-rose-200",
};

function getCategoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] ?? "text-primary bg-primary/10 border-primary/20";
}

// ─── Content renderer ─────────────────────────────────────────────────────────
function renderContent(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="font-display font-bold text-2xl text-foreground mt-12 mb-4 pb-2 border-b border-border/40"
        >
          {line.slice(3)}
        </h2>,
      );
    } else if (line.startsWith("- ")) {
      const text = line.slice(2);
      const parts = text.split(/\*\*([^*]+)\*\*/g);
      elements.push(
        <li
          key={key++}
          className="flex items-start gap-3 text-muted-foreground my-2 leading-relaxed"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
          <span>
            {parts.map((part, pi) => {
              const partKey = `part-${key}-${pi}`;
              return pi % 2 === 1 ? (
                <strong key={partKey} className="text-foreground font-semibold">
                  {part}
                </strong>
              ) : (
                part
              );
            })}
          </span>
        </li>,
      );
    } else if (line.trim().startsWith("**") && line.trim().includes("**", 2)) {
      const boldMatch = line.match(/^\*\*(.+?)\*\*(.*)$/);
      if (boldMatch) {
        elements.push(
          <p
            key={key++}
            className="text-foreground font-semibold text-lg mt-6 mb-2"
          >
            {boldMatch[1]}
            <span className="text-muted-foreground font-normal">
              {boldMatch[2]}
            </span>
          </p>,
        );
      }
    } else if (line.trim() !== "") {
      elements.push(
        <p
          key={key++}
          className="text-muted-foreground leading-[1.8] mb-4 text-base"
        >
          {line}
        </p>,
      );
    }
  }
  return elements;
}

// ─── Loading skeleton ─────────────────────────────────────────────────────────
function PostSkeleton() {
  return (
    <div className="container mx-auto max-w-4xl px-4 pt-24 pb-20">
      <Skeleton className="h-4 w-28 mb-6" />
      <Skeleton className="aspect-[2/1] w-full rounded-2xl mb-8" />
      <Skeleton className="h-6 w-32 mb-4" />
      <Skeleton className="h-12 w-full mb-3" />
      <Skeleton className="h-12 w-3/4 mb-6" />
      <div className="flex gap-4 mb-8">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-16" />
      </div>
      {Array.from({ length: 4 }, (_, i) => `content-skel-${i}`).map((k) => (
        <Skeleton key={k} className="h-4 w-full mb-3" />
      ))}
    </div>
  );
}

// ─── Share button ─────────────────────────────────────────────────────────────
interface ShareLink {
  label: string;
  icon: string;
  colorClass: string;
  buildUrl: (title: string, url: string) => string;
}

const SHARE_LINKS: ShareLink[] = [
  {
    label: "WhatsApp",
    icon: "📱",
    colorClass: "text-green-600 border-green-200 hover:bg-green-50",
    buildUrl: (title, url) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  {
    label: "LinkedIn",
    icon: "💼",
    colorClass: "text-sky-600 border-sky-200 hover:bg-sky-50",
    buildUrl: (title, url) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  {
    label: "Twitter / X",
    icon: "🐦",
    colorClass: "text-foreground border-border hover:bg-muted",
    buildUrl: (title, url) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
];

// ─── Main page ────────────────────────────────────────────────────────────────
export default function BlogPost() {
  const { id } = useParams({ strict: false }) as { id: string };

  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setNotFound(false);

    const numId = BigInt(id);

    // Try full post data first (has content)
    const localPost = FULL_POSTS.find((p) => p.id === numId);

    if (localPost) {
      setPost(localPost);
      setIsLoading(false);
      // Fetch related posts from backend
      getAllBlogPosts()
        .then((all) => {
          if (!cancelled) {
            const related = all
              .filter(
                (p) => p.id !== numId && p.category === localPost.category,
              )
              .slice(0, 3);
            setRelatedPosts(
              related.length >= 2
                ? related
                : FULL_POSTS.filter((p) => p.id !== numId).slice(0, 3),
            );
          }
        })
        .catch(() => {
          if (!cancelled) {
            setRelatedPosts(
              FULL_POSTS.filter((p) => p.id !== numId).slice(0, 3),
            );
          }
        });
      return;
    }

    // Try backend
    getBlogPostById(numId)
      .then((fetched) => {
        if (!cancelled) {
          if (fetched) {
            setPost(fetched);
            setRelatedPosts(
              FULL_POSTS.filter((p) => p.id !== numId).slice(0, 3),
            );
          } else {
            setNotFound(true);
          }
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setNotFound(true);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (isLoading) return <PostSkeleton />;

  if (notFound || !post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl mb-6">📄</div>
        <h1 className="font-display font-bold text-3xl text-foreground mb-4">
          Article Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          This article doesn't exist or may have been moved.
        </p>
        <Link to="/blog">
          <GradientButton variant="primary">Browse All Articles</GradientButton>
        </Link>
      </div>
    );
  }

  const readTime = estimateReadTime(post.content || post.excerpt);
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://maverickdigitals.co.in/blog/${id}`;

  return (
    <div>
      {/* ── Back nav ── */}
      <div className="container mx-auto max-w-4xl px-4 pt-24 pb-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth text-sm font-display font-semibold group"
          data-ocid="blog-post-back"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-smooth" />
          Back to Blog
        </Link>
      </div>

      {/* ── Hero image ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl px-4 mb-10"
      >
        <div className="rounded-2xl overflow-hidden aspect-[2/1] relative">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.onerror = null;
              el.src =
                "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop&auto=format";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* ── Article ── */}
      <article className="container mx-auto max-w-4xl px-4 pb-24">
        {/* Category + meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border font-display mb-5 ${getCategoryColor(post.category)}`}
          >
            {post.category}
          </span>

          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-6 text-gradient-primary">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-primary/50 pl-4">
            {post.excerpt}
          </p>

          {/* Author + meta row */}
          <div className="flex flex-wrap items-center gap-5 text-sm mb-10 pb-8 border-b border-border">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-white">
                {post.author.charAt(0)}
              </div>
              <User className="w-4 h-4 text-muted-foreground" />
              <span>{post.author}</span>
            </div>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {formatDate(post.createdAt)}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-4 h-4" />
              {readTime} min read
            </span>
            <div className="flex flex-wrap gap-2 ml-auto">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted border border-border text-xs font-semibold text-muted-foreground"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="prose-custom mb-16"
        >
          {renderContent(post.content || post.excerpt)}
        </motion.div>

        {/* ── Social share ── */}
        <GlassCard variant="solid" className="p-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Share2 className="w-5 h-5 text-primary" />
            <h3 className="font-display font-bold text-foreground text-base">
              Share This Article
            </h3>
          </div>
          <div className="flex flex-wrap gap-3" data-ocid="blog-share-section">
            {SHARE_LINKS.map((sl) => (
              <a
                key={sl.label}
                href={sl.buildUrl(post.title, shareUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold font-display transition-smooth ${sl.colorClass}`}
                data-ocid={`share-${sl.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span>{sl.icon}</span>
                {sl.label}
              </a>
            ))}
          </div>
        </GlassCard>

        {/* ── CTA card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard variant="glow" className="p-8 text-center mb-16">
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">
              Put These Strategies Into Action
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Connect with our team for a complimentary strategy session. We'll
              map out a tailored growth plan built specifically around your
              brand's objectives.
            </p>
            <Link to="/contact">
              <GradientButton
                variant="primary"
                size="lg"
                glow
                data-ocid="blog-post-cta"
              >
                Claim Your Free Strategy Session
              </GradientButton>
            </Link>
          </GlassCard>
        </motion.div>

        {/* ── Related posts ── */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-ocid="blog-related-posts"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full gradient-primary" />
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedPosts.map((r, idx) => (
                <motion.div
                  key={r.id.toString()}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Link to="/blog/$id" params={{ id: r.id.toString() }}>
                    <GlassCard
                      variant="solid"
                      hover
                      className="overflow-hidden group h-full flex flex-col"
                    >
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={r.imageUrl}
                          alt={r.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            el.onerror = null;
                            el.src =
                              "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop&auto=format";
                          }}
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <span
                          className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border font-display mb-2 w-fit ${getCategoryColor(r.category)}`}
                        >
                          {r.category}
                        </span>
                        <h4 className="font-display font-bold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-smooth flex-1">
                          {r.title}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-primary font-semibold mt-3 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  );
}
