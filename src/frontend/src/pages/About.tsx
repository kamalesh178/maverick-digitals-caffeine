import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "@tanstack/react-router";

// ─── Data ──────────────────────────────────────────────────────────────────────

const values = [
  {
    num: "01",
    title: "AI-Powered Strategy",
    desc: "We harness artificial intelligence to identify patterns, predict trends, and build campaigns that outperform the competition before the first rupee is spent.",
  },
  {
    num: "02",
    title: "Authentic UGC Content",
    desc: "Real voices convert better than polished ads. We build UGC ecosystems that generate trust, community, and sustained organic growth for your brand.",
  },
  {
    num: "03",
    title: "Data-Driven Results",
    desc: "Every decision is backed by numbers. We track what matters, cut what doesn't, and double down on what moves the needle for your bottom line.",
  },
];

const stats = [
  { value: "10M+", label: "Views Generated" },
  { value: "35+", label: "Brands Scaled" },
  { value: "2024", label: "Founded" },
  { value: "Mumbai", label: "Headquartered" },
];

const muskanSkills = [
  "Social Media Strategy",
  "Performance Ads",
  "AI Marketing",
  "UGC Content",
];
const dhavalSkills = [
  "Web Development",
  "Brand Design",
  "Software Development",
  "Product Strategy",
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function PageBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
      style={{
        background: "rgba(124,58,237,0.10)",
        border: "1px solid rgba(124,58,237,0.28)",
        color: "#a78bfa",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full dot-badge-pulse"
        style={{ background: "#7c3aed" }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

function GradientPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex px-3 py-1 rounded-full text-xs font-semibold"
      style={{
        background: "rgba(124,58,237,0.08)",
        border: "1px solid rgba(124,58,237,0.22)",
        color: "#a78bfa",
      }}
    >
      {label}
    </span>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className="min-h-screen bg-background" data-ocid="about.page">
      {/* ══════════════════════════════════════════════════
          1 · PAGE HERO — compact, ~55vh
         ══════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          minHeight: "56vh",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        {/* Radial purple glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Grid overlay */}
        <div
          className="hero-grid absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection variant="fade-up">
            <PageBadge label="About Us" />
            <h1
              className="font-display font-black leading-[0.93] tracking-tight text-foreground mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              We Help Brands{" "}
              <span
                className="gradient-text"
                style={{ display: "inline-block" }}
              >
                Scale
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection variant="fade-in" delay={0.2}>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Founded in Mumbai in 2024, Maverick Digitals was built to help
              ambitious brands break through the noise — using AI, UGC content,
              and data-driven strategies that actually move the needle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2 · MISSION / VALUES — 3 dark glass cards
         ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-background" data-ocid="about.values_section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <AnimatedSection variant="fade-up" className="text-center mb-14">
            <PageBadge label="What Drives Us" />
            <h2
              className="font-display font-black text-foreground leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Built On Three
              <span className="gradient-text"> Unshakeable Pillars</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} variant="fade-up" delay={i * 0.1}>
                <div
                  className="glass-card glass-card-hover card-hover h-full p-8 flex flex-col group relative overflow-hidden"
                  data-ocid={`about.value_card.${i + 1}`}
                >
                  {/* Top gradient accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-smooth"
                    style={{
                      background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
                    }}
                    aria-hidden="true"
                  />
                  {/* Number circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-black tracking-widest mb-6 shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(124,58,237,0.2),rgba(6,182,212,0.1))",
                      border: "1px solid rgba(124,58,237,0.25)",
                      color: "#a78bfa",
                    }}
                  >
                    {v.num}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-3 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3 · STATS BAR — full-width dark strip
         ══════════════════════════════════════════════════ */}
      <section
        className="py-0 overflow-hidden"
        data-ocid="about.stats_section"
        style={{
          background: "#0f0f0f",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} variant="fade-up" delay={i * 0.08}>
                <div
                  className="py-12 px-6 text-center relative"
                  data-ocid={`about.stat.${i + 1}`}
                  style={{
                    borderRight:
                      i < stats.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                  }}
                >
                  <div className="font-display font-black text-4xl sm:text-5xl leading-none mb-2 gradient-text">
                    {s.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium tracking-wide uppercase text-xs">
                    {s.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4 · TEAM SECTION — Muskan + Dhaval
         ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-background" data-ocid="about.team_section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <AnimatedSection variant="fade-up" className="text-center mb-16">
            <PageBadge label="The Team" />
            <h2
              className="font-display font-black text-foreground leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              The People Behind
              <span className="gradient-text"> Maverick Digitals</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ── Muskan Rathod ── */}
            <AnimatedSection variant="slide-left" delay={0.1}>
              <div
                className="glass-card h-full flex flex-col group relative overflow-hidden transition-smooth"
                style={{ borderRadius: "16px" }}
                data-ocid="about.team_card.1"
              >
                {/* Hover gradient border overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(124,58,237,0.06),rgba(6,182,212,0.03))",
                    border: "1px solid rgba(124,58,237,0.35)",
                  }}
                  aria-hidden="true"
                />

                {/* Photo */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: "280px", borderRadius: "12px 12px 0 0" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=faces"
                    alt="Muskan Rathod — Co-Founder & CEO, Maverick Digitals"
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.92) saturate(0.9)" }}
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent) {
                        parent.style.background =
                          "linear-gradient(135deg,rgba(124,58,237,0.25),rgba(6,182,212,0.12))";
                        parent.innerHTML =
                          '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;font-weight:900;color:rgba(167,139,250,0.6);letter-spacing:-0.02em;">MR</div>';
                      }
                    }}
                  />
                  {/* Gradient overlay at bottom of photo */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, #111111)",
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1 relative z-10">
                  <div className="mb-4">
                    <h3 className="font-display font-black text-xl text-foreground tracking-tight mb-0.5">
                      Muskan Rathod
                    </h3>
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: "#a78bfa" }}
                    >
                      Co-Founder &amp; CEO
                    </span>
                  </div>
                  <p
                    className="text-muted-foreground text-sm leading-relaxed mb-5"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical" as const,
                      overflow: "hidden",
                    }}
                  >
                    Muskan Rathod is a digital marketing strategist with a
                    passion for scaling brands through AI-powered content and
                    performance advertising. She grew her LinkedIn following to
                    26K in just 8 months and has generated over 10M organic
                    views for clients. She leads Maverick Digitals' strategy,
                    UGC content division, and the upcoming AI-powered marketing
                    tools vertical.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {muskanSkills.map((s) => (
                      <GradientPill key={s} label={s} />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* ── Dhaval Shah ── */}
            <AnimatedSection variant="slide-right" delay={0.18}>
              <div
                className="glass-card h-full flex flex-col group relative overflow-hidden transition-smooth"
                style={{ borderRadius: "16px" }}
                data-ocid="about.team_card.2"
              >
                {/* Hover gradient border overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(6,182,212,0.05),rgba(124,58,237,0.03))",
                    border: "1px solid rgba(6,182,212,0.3)",
                  }}
                  aria-hidden="true"
                />

                {/* Photo */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: "280px", borderRadius: "12px 12px 0 0" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces"
                    alt="Dhaval Shah — Co-Founder, Maverick Digitals"
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.92) saturate(0.9)" }}
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent) {
                        parent.style.background =
                          "linear-gradient(135deg,rgba(6,182,212,0.2),rgba(124,58,237,0.12))";
                        parent.innerHTML =
                          '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;font-weight:900;color:rgba(103,232,249,0.6);letter-spacing:-0.02em;">DS</div>';
                      }
                    }}
                  />
                  {/* Gradient overlay at bottom of photo */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, #111111)",
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1 relative z-10">
                  <div className="mb-4">
                    <h3 className="font-display font-black text-xl text-foreground tracking-tight mb-0.5">
                      Dhaval Shah
                    </h3>
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: "#67e8f9" }}
                    >
                      Co-Founder
                    </span>
                  </div>
                  <p
                    className="text-muted-foreground text-sm leading-relaxed mb-5"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical" as const,
                      overflow: "hidden",
                    }}
                  >
                    Dhaval Shah leads the technical and product development at
                    Maverick Digitals — overseeing website design, custom
                    software, and digital infrastructure for client brands. His
                    expertise spans web development, brand identity design, and
                    building scalable digital products.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {dhavalSkills.map((s) => (
                      <span
                        key={s}
                        className="inline-flex px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: "rgba(6,182,212,0.07)",
                          border: "1px solid rgba(6,182,212,0.2)",
                          color: "#67e8f9",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5 · CTA SECTION
         ══════════════════════════════════════════════════ */}
      <section
        className="py-28 relative overflow-hidden"
        data-ocid="about.cta_section"
        style={{ background: "#0a0a0a" }}
      >
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(124,58,237,0.14) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="hero-grid absolute inset-0 opacity-40 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <AnimatedSection variant="fade-up">
            <PageBadge label="Let's Collaborate" />
            <h2
              className="font-display font-black text-foreground leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)" }}
            >
              Ready to <span className="gradient-text">Work With Us?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Whether you're launching a new brand or scaling an existing one,
              we bring the strategy, content, and execution to make it happen —
              fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <button
                  type="button"
                  className="gradient-btn btn-ripple inline-flex items-center gap-2 px-8 py-4 text-base font-display font-semibold rounded-xl glow-on-hover transition-smooth"
                  data-ocid="about.cta_primary"
                >
                  Start a Project
                </button>
              </Link>
              <Link to="/services">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-display font-semibold rounded-xl transition-smooth"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                  data-ocid="about.cta_services"
                >
                  View Services
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
