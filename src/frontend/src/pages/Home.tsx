import { AnimatedSection } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "10M+", label: "Views Generated", sublabel: "Organic & Paid" },
  { value: "35+", label: "Brands Scaled", sublabel: "Across Industries" },
  { value: "2024", label: "Founded", sublabel: "Mumbai, India" },
  { value: "Mumbai", label: "Headquarters", sublabel: "India HQ" },
];

const SERVICES = [
  {
    title: "Digital Marketing",
    description:
      "Full-funnel AI-powered strategies that drive measurable growth across every channel.",
  },
  {
    title: "Social Media Management",
    description:
      "Consistent on-brand content for Instagram, LinkedIn & YouTube — built to grow communities.",
  },
  {
    title: "Performance Marketing",
    description:
      "Data-driven paid campaigns on Meta & Google — engineered for maximum ROAS.",
  },
  {
    title: "Website Design & Dev",
    description:
      "Fast, beautiful, conversion-focused websites from landing pages to full e-commerce.",
  },
  {
    title: "UGC & Content Strategy",
    description:
      "Authentic user-generated content that converts 3× better than traditional ads.",
  },
  {
    title: "Brand Management",
    description:
      "Strategic brand identity, voice, and positioning that resonates and sticks.",
  },
];

const FALLBACK_POSTS = [
  {
    id: "1",
    title: "How We Generated 10M+ Views for Our Clients",
    excerpt:
      "A behind-the-scenes look at the AI-powered content strategy that drove massive organic growth across Instagram and LinkedIn.",
    category: "Case Study",
    author: "Muskan Rathod",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    date: "April 15, 2025",
  },
  {
    id: "2",
    title: "The UGC Formula: Why Authentic Content Converts 3x Better",
    excerpt:
      "User-generated content is no longer optional — here's the data behind why UGC outperforms branded content consistently.",
    category: "Strategy",
    author: "Dhaval Shah",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    date: "March 28, 2025",
  },
  {
    id: "3",
    title: "Performance Ads in 2025: A Data-Driven Playbook",
    excerpt:
      "From targeting to creatives — our proven framework for running high-ROAS Facebook, Instagram, and Google ad campaigns.",
    category: "Performance Marketing",
    author: "Muskan Rathod",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    date: "March 10, 2025",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Maverick Digitals transformed our online presence. Our Instagram following went from 2K to 85K in just 6 months. The team is relentless, creative, and results-obsessed.",
    name: "Rohit Sharma",
    title: "Founder, FitFuel India",
    initials: "RS",
  },
  {
    quote:
      "The performance marketing campaigns they ran delivered 340% ROAS in Q1. Nobody comes close to the quality of thinking at Maverick.",
    name: "Priya Mehta",
    title: "Marketing Head, LivingSpace Decor",
    initials: "PM",
  },
  {
    quote:
      "Our new website is stunning. Load time went from 8s to 1.2s and conversions jumped 78% in the first month. Worth every rupee.",
    name: "Arjun Kapoor",
    title: "CEO, TechLaunch Ventures",
    initials: "AK",
  },
];

// ─── Scroll Progress Bar ───────────────────────────────────────────────────────

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left pointer-events-none"
      style={{
        background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
        transform: `scaleX(${progress})`,
        transition: "transform 0.1s linear",
      }}
      aria-hidden="true"
    />
  );
}

// ─── Hero ambient glow ─────────────────────────────────────────────────────────

function HeroGlow() {
  return (
    <>
      <div
        className="absolute hero-ambient-glow pointer-events-none"
        style={{
          top: "45%",
          left: "50%",
          width: 900,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.07) 50%, transparent 72%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(124,58,237,0.08)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(6,182,212,0.06)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />
    </>
  );
}

// ─── Scroll indicator ──────────────────────────────────────────────────────────

function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{ opacity: 0.45 }}
      aria-hidden="true"
    >
      <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2">
        <div
          className="w-1 h-2 rounded-full"
          style={{
            background: "linear-gradient(180deg, #7c3aed, #06b6d4)",
            animation: "scroll-dot 2s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  const { observeChildren } = useScrollAnimation();
  const statsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    observeChildren(statsRef.current);
  }, [observeChildren]);
  useEffect(() => {
    observeChildren(blogRef.current);
  }, [observeChildren]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(id);
  }, [isAutoPlaying]);

  const prevTestimonial = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveTestimonial(
      (p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  }, []);

  const nextTestimonial = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
  }, []);

  const goToTestimonial = useCallback((i: number) => {
    setIsAutoPlaying(false);
    setActiveTestimonial(i);
  }, []);

  return (
    <div className="relative" style={{ background: "#0a0a0a" }}>
      <ScrollProgressBar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid"
        aria-label="Hero section"
        data-ocid="hero.section"
      >
        <HeroGlow />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
          {/* Badge */}
          <AnimatedSection variant="fade-up" delay={0}>
            <div
              className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            >
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#a78bfa" }}
              >
                ✦ Digital Marketing Agency
              </span>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection variant="fade-up" delay={0.1}>
            <h1
              className="font-display font-extrabold leading-[1.05] mb-7 text-white"
              style={{
                fontSize: "clamp(2.8rem, 8vw, 5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Scale Your Brand with{" "}
              <span className="gradient-text block mt-1">
                Data-Driven Marketing
              </span>
            </h1>
          </AnimatedSection>

          {/* Subheading */}
          <AnimatedSection variant="fade-up" delay={0.2}>
            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              We help ambitious brands crack the algorithm, dominate social
              media, and run high-converting performance ads — powered by AI,
              UGC, and data-driven strategies.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection variant="fade-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link to="/contact" data-ocid="hero.primary_button">
                <GradientButton
                  variant="primary"
                  size="lg"
                  glow
                  className="btn-ripple min-w-[200px]"
                >
                  Get Started →
                </GradientButton>
              </Link>
              <Link to="/services" data-ocid="hero.secondary_button">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white transition-smooth min-w-[200px]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(255,255,255,0.45)";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(255,255,255,0.2)";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "transparent";
                  }}
                >
                  View Our Work
                </button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Social proof */}
          <AnimatedSection variant="fade-up" delay={0.4}>
            <p
              className="text-sm font-medium tracking-wide"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              10M+ Views Generated · 35+ Brands Scaled · Founded 2024, Mumbai
            </p>
          </AnimatedSection>
        </div>

        <ScrollIndicator />
      </section>

      {/* ── STATS ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(124,58,237,0.06) 0%, rgba(0,0,0,0) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        aria-label="Key statistics"
        data-ocid="stats.section"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((stat, i) => (
              <AnimatedSection
                key={stat.label}
                variant="scale-up"
                delay={i * 0.1}
              >
                <div
                  className="glass-card flex flex-col items-center text-center p-7 rounded-2xl"
                  data-ocid={`stats.item.${i + 1}`}
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  {/* Purple glow behind number */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-20 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)",
                      filter: "blur(20px)",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="gradient-text font-display font-black leading-none mb-2 relative z-10"
                    style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-white font-semibold text-sm mb-1 relative z-10">
                    {stat.label}
                  </span>
                  <span
                    className="text-xs relative z-10"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {stat.sublabel}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section
        className="py-28"
        style={{ background: "#0a0a0a" }}
        aria-label="Services preview"
        data-ocid="services.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection variant="fade-up" className="mb-16 text-center">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: "rgba(167,139,250,0.8)" }}
            >
              WHAT WE DO
            </p>
            <SectionHeading
              title="Our Core"
              highlight="Services"
              subtitle="From viral content to performance-driven ads — we build everything your brand needs to dominate the digital landscape."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, index) => (
              <AnimatedSection
                key={service.title}
                variant={index % 2 === 0 ? "slide-left" : "slide-right"}
                delay={index * 0.07}
              >
                <div
                  className="group glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4 h-full"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  data-ocid={`services.item.${index + 1}`}
                >
                  {/* Gradient accent line top */}
                  <div
                    className="h-[2px] w-12 rounded-full mb-1"
                    style={{
                      background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                    }}
                  />
                  <h3 className="font-display font-bold text-white text-base leading-snug tracking-tight">
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-sm font-semibold flex items-center gap-1 transition-smooth"
                    style={{ color: "#a78bfa" }}
                  >
                    Learn More
                    <span className="opacity-0 group-hover:opacity-100 transition-smooth">
                      →
                    </span>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection
            variant="fade-up"
            delay={0.2}
            className="text-center mt-14"
          >
            <Link to="/services" data-ocid="services.link">
              <GradientButton variant="outline" size="md">
                Explore All Services →
              </GradientButton>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.05) 0%, rgba(6,182,212,0.03) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        aria-label="About section"
        data-ocid="about.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: text */}
            <AnimatedSection variant="slide-left">
              <p
                className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
                style={{ color: "rgba(167,139,250,0.8)" }}
              >
                ABOUT US
              </p>
              <h2
                className="font-display font-extrabold text-white mb-6 leading-tight"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                About <span className="gradient-text">Maverick Digitals</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Founded in 2024 in Mumbai, Maverick Digitals is built on one
                belief: every brand deserves to grow. We combine AI-powered
                strategy, authentic UGC content, and precision performance
                marketing to help ambitious brands crack the algorithm and scale
                fast.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                With 10M+ views generated and 35+ brands scaled, our data-driven
                approach consistently delivers results that matter — from
                Instagram domination to high-ROAS ad campaigns.
              </p>
              <Link to="/about" data-ocid="about.link">
                <GradientButton variant="outline" size="md">
                  Meet the Team →
                </GradientButton>
              </Link>
            </AnimatedSection>

            {/* Right: dark glass card */}
            <AnimatedSection variant="slide-right">
              <div
                className="glass-card rounded-2xl p-8 flex flex-col gap-6"
                style={{ border: "1px solid rgba(124,58,237,0.2)" }}
              >
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: "#a78bfa" }}
                >
                  Company at a Glance
                </div>
                {[
                  { label: "Founded", value: "2024" },
                  { label: "Location", value: "Mumbai, India" },
                  { label: "Brands Scaled", value: "35+" },
                  { label: "Total Views", value: "10M+" },
                  {
                    label: "Speciality",
                    value: "AI-Powered Digital Marketing",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
                <p
                  className="text-sm leading-relaxed italic mt-2"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  "Helping brands crack the Instagram algorithm, dominate
                  LinkedIn growth, and run high-converting performance ads."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: "#0a0a0a" }}
        aria-label="Client testimonials"
        data-ocid="testimonials.section"
      >
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection variant="fade-up" className="mb-14 text-center">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: "rgba(167,139,250,0.8)" }}
            >
              TRUSTED BY BRANDS
            </p>
            <SectionHeading
              title="What Our Clients"
              highlight="Say"
              subtitle="Real results. Real brands. Real transformations from Mumbai's fastest-growing companies."
            />
          </AnimatedSection>

          <div data-ocid="testimonials.carousel" className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeTestimonial * 100}%)`,
                }}
              >
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={t.name}
                    className="w-full flex-shrink-0 px-2"
                    aria-hidden={i !== activeTestimonial}
                  >
                    <div className="max-w-2xl mx-auto">
                      <GlassCard
                        variant="glow"
                        className="p-8 sm:p-10 flex flex-col gap-5"
                      >
                        <div
                          className="font-display font-black leading-none select-none gradient-text"
                          style={{ fontSize: "4rem", lineHeight: 0.85 }}
                        >
                          "
                        </div>
                        <p
                          className="text-base sm:text-lg leading-relaxed -mt-2"
                          style={{ color: "rgba(255,255,255,0.85)" }}
                        >
                          {t.quote}
                        </p>
                        <div
                          className="flex items-center gap-4 pt-5 mt-2"
                          style={{
                            borderTop: "1px solid rgba(255,255,255,0.07)",
                          }}
                        >
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0"
                            style={{
                              background:
                                "linear-gradient(135deg, #7c3aed, #06b6d4)",
                            }}
                          >
                            {t.initials}
                          </div>
                          <div>
                            <p className="font-display font-bold text-white text-sm">
                              {t.name}
                            </p>
                            <p
                              className="text-xs mt-0.5"
                              style={{ color: "rgba(255,255,255,0.45)" }}
                            >
                              {t.title}
                            </p>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((n) => (
                              <span
                                key={n}
                                style={{ color: "#a78bfa", fontSize: "14px" }}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-smooth font-bold text-xl"
                style={{ border: "1px solid rgba(124,58,237,0.3)" }}
                aria-label="Previous testimonial"
                data-ocid="testimonials.pagination_prev"
              >
                ‹
              </button>
              <div className="flex gap-2 items-center">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    type="button"
                    key={t.name}
                    onClick={() => goToTestimonial(i)}
                    className="rounded-full transition-smooth"
                    style={{
                      width: i === activeTestimonial ? "2rem" : "0.625rem",
                      height: "0.625rem",
                      background:
                        i === activeTestimonial
                          ? "linear-gradient(90deg, #7c3aed, #06b6d4)"
                          : "rgba(255,255,255,0.2)",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    data-ocid={`testimonials.tab.${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-smooth font-bold text-xl"
                style={{ border: "1px solid rgba(124,58,237,0.3)" }}
                aria-label="Next testimonial"
                data-ocid="testimonials.pagination_next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section
        className="py-28 relative"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,182,212,0.04) 0%, rgba(0,0,0,0) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
        aria-label="Latest blog posts"
        data-ocid="blog.section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <AnimatedSection variant="slide-left">
              <p
                className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
                style={{ color: "rgba(167,139,250,0.8)" }}
              >
                LATEST INSIGHTS
              </p>
              <h2
                className="font-display font-extrabold text-white"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                From the <span className="gradient-text">Blog</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection variant="slide-right">
              <Link to="/blog" data-ocid="blog.link">
                <GradientButton variant="outline" size="sm">
                  View All Posts →
                </GradientButton>
              </Link>
            </AnimatedSection>
          </div>

          <div ref={blogRef} className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {FALLBACK_POSTS.map((post, index) => (
              <AnimatedSection
                key={post.id}
                variant="scale-up"
                delay={index * 0.1}
              >
                <Link
                  to="/blog/$id"
                  params={{ id: post.id }}
                  data-ocid={`blog.item.${index + 1}`}
                  className="group block h-full"
                >
                  <div
                    className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateY(-6px)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "0 16px 48px rgba(124,58,237,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateY(0)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "none";
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative overflow-hidden"
                      style={{ height: "200px", flexShrink: 0 }}
                    >
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "/assets/images/placeholder.svg";
                        }}
                      />
                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(17,17,17,0.6) 0%, transparent 60%)",
                        }}
                      />
                      {/* Category pill */}
                      <span
                        className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1.5 rounded-full"
                        style={{
                          background: "rgba(124,58,237,0.85)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <h3
                        className="font-display font-bold text-base leading-snug line-clamp-2 tracking-tight"
                        style={{
                          color: "rgba(255,255,255,0.95)",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {post.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed line-clamp-2 flex-1"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {post.excerpt}
                      </p>
                      <div
                        className="flex items-center justify-between mt-auto pt-3"
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span
                          className="text-xs font-medium"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          {post.date} · {post.author}
                        </span>
                        <span
                          className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                          style={{ color: "#a78bfa" }}
                        >
                          Read More <span className="text-xs">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="relative py-32 overflow-hidden"
        aria-label="Call to action"
        data-ocid="cta.section"
      >
        {/* Aurora background */}
        <div
          className="absolute inset-0 aurora-bg opacity-90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hero-grid opacity-10"
          aria-hidden="true"
        />
        {/* Radial glow overlay */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection variant="fade-up">
            <div
              className="inline-flex items-center gap-2.5 mb-7 px-5 py-2.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-white text-sm font-semibold tracking-wide">
                Limited Spots Available
              </span>
            </div>

            <h2
              className="font-display font-black mb-6 leading-[1.05] text-shimmer"
              style={{
                fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                letterSpacing: "-0.025em",
              }}
            >
              Ready to Scale Your Brand?
            </h2>

            <p
              className="text-lg sm:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Let's build your digital presence together. Book a free strategy
              call and engineer your brand's breakthrough.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" data-ocid="cta.primary_button">
                <button
                  type="button"
                  className="btn-ripple inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-display font-bold rounded-xl text-primary transition-smooth min-w-[220px]"
                  style={{
                    background: "rgba(255,255,255,0.96)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  Get in Touch
                </button>
              </Link>
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://wa.me/919022406920?text=Hi%20Maverick%20Digitals%2C%20I'd%20like%20to%20grow%20my%20brand!",
                    "_blank",
                  )
                }
                className="btn-ripple inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-display font-semibold rounded-xl border-2 border-white text-white hover:bg-white/10 transition-smooth min-w-[220px]"
                data-ocid="cta.secondary_button"
              >
                Chat on WhatsApp
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
