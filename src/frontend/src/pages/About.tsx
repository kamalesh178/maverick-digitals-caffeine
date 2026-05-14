import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "@tanstack/react-router";
import AmbientGlow from "../components/AmbientGlow";
import CounterAnimation from "../components/CounterAnimation";
import Marquee from "../components/Marquee";
import TextReveal from "../components/TextReveal";

// ─── Palette shortcuts ──────────────────────────────────────────────────────
const BG = "#FFFFFF";
const BG_ALT = "#F8FAFC";
const BG_CARD = "#FFFFFF";
const ACCENT = "#2563EB";
const ACCENT2 = "#3B82F6";
const TEXT = "#1E3A8A";
const MUTED = "#6B7280";
const BORDER = "#E2E8F0";

// ─── Data ──────────────────────────────────────────────────────────────────────

const timelineEvents = [
  {
    year: "Early 2024",
    label: "Founded",
    desc: "Maverick Digitals launched in the heart of Mumbai — born from a belief that Indian brands deserve sharper, bolder, and more strategic digital partners.",
  },
  {
    year: "Mid 2024",
    label: "First Wins",
    desc: "Delivered measurable results for our founding clients within weeks, establishing proof-of-concept and earning trust through performance, not promises.",
  },
  {
    year: "Late 2024",
    label: "10M+ Views",
    desc: "Surpassed 10 million organic content impressions across client platforms — zero ad spend, pure strategy and execution.",
  },
  {
    year: "2024–25",
    label: "35+ Brands",
    desc: "Scaled partnerships to 35+ brands spanning Mumbai and Pan-India markets, delivering social growth, ad performance, and platform builds.",
  },
  {
    year: "Today",
    label: "Unstoppable",
    desc: "Pioneering an AI-powered growth vertical with proprietary tools built for founders, agencies, and D2C brands ready to scale without limits.",
  },
];

const coreValues = [
  {
    number: "01",
    title: "Innovation First",
    desc: "Trends are for followers. We build the strategies that others end up chasing — every campaign starts with a blank page and a creative challenge.",
  },
  {
    number: "02",
    title: "Outcomes Over Optics",
    desc: "Impressions don't pay salaries. We engineer every strategy around real business outcomes — revenue, leads, growth — not vanity metrics.",
  },
  {
    number: "03",
    title: "Deep Client Partnership",
    desc: "We don't just manage accounts. We immerse ourselves in your brand, your market, and your audience to become an extension of your team.",
  },
  {
    number: "04",
    title: "Relentless Execution",
    desc: "Vision without action is fiction. We move decisively, iterate without hesitation, and hold ourselves accountable to the results we promise.",
  },
];

const statsData = [
  { end: 10, suffix: "M+", label: "Views Generated" },
  { end: 35, suffix: "+", label: "Brands Partnered" },
  { end: 200, suffix: "%", label: "Average ROI" },
  { end: 150, suffix: "K+", label: "Followers Grown" },
];

const muskanSkills = [
  "Brand Strategy",
  "Performance Marketing",
  "Growth Architecture",
  "Content & UGC",
];
const dhavalSkills = [
  "Full-Stack Development",
  "Mobile Applications",
  "MERN Stack",
  "Digital Infrastructure",
];

const marqueeValues = [
  "Authenticity",
  "Data-Driven Results",
  "AI-Powered Growth",
  "Client Success",
  "Innovation",
  "Transparency",
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function BluePill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
      style={{
        background: "rgba(37,99,235,0.07)",
        border: "1px solid rgba(37,99,235,0.2)",
        color: ACCENT,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}88` }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

function SkillBadge({
  label,
  accent = false,
}: { label: string; accent?: boolean }) {
  return (
    <span
      className="px-3 py-1 rounded-full border text-xs font-semibold"
      style={{
        background: accent ? "rgba(37,99,235,0.08)" : "#F8FAFC",
        borderColor: accent ? "rgba(37,99,235,0.3)" : BORDER,
        color: accent ? ACCENT : MUTED,
      }}
    >
      {label}
    </span>
  );
}

function TimelineItem({
  event,
  index,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
}) {
  const isLast = index === timelineEvents.length - 1;
  return (
    <AnimatedSection
      variant={index % 2 === 0 ? "slide-right" : "slide-left"}
      delay={index * 0.09}
      className="relative mb-6 last:mb-0"
    >
      {!isLast && (
        <div
          className="absolute left-[-25px] top-5 bottom-[-24px] w-px"
          style={{
            background:
              "linear-gradient(180deg, rgba(37,99,235,0.4) 0%, rgba(37,99,235,0) 100%)",
          }}
          aria-hidden="true"
        />
      )}
      <div
        className="absolute -left-[31px] top-3.5 w-[14px] h-[14px] rounded-full"
        style={{
          background: isLast
            ? `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT2} 100%)`
            : "rgba(37,99,235,0.85)",
          boxShadow:
            "0 0 0 3px rgba(37,99,235,0.12), 0 0 12px rgba(37,99,235,0.2)",
        }}
        aria-hidden="true"
      />
      <div
        className="p-5 ml-2 rounded-xl"
        style={{
          background: BG_CARD,
          border: `1px solid ${isLast ? "rgba(37,99,235,0.25)" : BORDER}`,
          boxShadow: isLast
            ? "0 4px 24px rgba(37,99,235,0.08)"
            : "0 1px 4px rgba(37,99,235,0.04)",
        }}
      >
        <div className="flex items-center gap-3 mb-1.5">
          <span
            className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded"
            style={{
              background: "rgba(37,99,235,0.08)",
              color: ACCENT,
            }}
          >
            {event.year}
          </span>
          <span className="font-bold text-sm" style={{ color: TEXT }}>
            {event.label}
          </span>
          {isLast && (
            <span
              className="ml-auto text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(37,99,235,0.1)",
                color: ACCENT,
                border: "1px solid rgba(37,99,235,0.25)",
              }}
            >
              Current
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
          {event.desc}
        </p>
      </div>
    </AnimatedSection>
  );
}

function CoreValueCard({
  value,
  index,
}: {
  value: (typeof coreValues)[0];
  index: number;
}) {
  return (
    <AnimatedSection variant="fade-up" delay={index * 0.07}>
      <div
        className="p-6 h-full flex flex-col relative overflow-hidden rounded-xl group"
        style={{
          background: BG_CARD,
          border: `1px solid ${BORDER}`,
          boxShadow: "0 2px 8px rgba(37,99,235,0.05)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(37,99,235,0.3)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 8px 32px rgba(37,99,235,0.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = BORDER;
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 2px 8px rgba(37,99,235,0.05)";
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, ${ACCENT} 0%, ${ACCENT2} 100%)`,
            transition: "opacity 0.3s ease",
          }}
          aria-hidden="true"
        />
        <span
          className="font-black text-4xl leading-none mb-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(59,130,246,0.08) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {value.number}
        </span>
        <h3 className="font-bold text-base mb-2" style={{ color: TEXT }}>
          {value.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: MUTED }}>
          {value.desc}
        </p>
      </div>
    </AnimatedSection>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div
      className="min-h-screen"
      style={{ background: BG, color: "#374151" }}
      data-ocid="about.page"
    >
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-36 pb-28"
        style={{ background: BG }}
      >
        <AmbientGlow variant="hero" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <AnimatedSection variant="fade-up">
            <BluePill label="Our Story" />
          </AnimatedSection>

          <TextReveal
            text="We Are Maverick Digitals"
            as="h1"
            delay={100}
            staggerMs={60}
            className="font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-7"
            style={{ color: TEXT } as React.CSSProperties}
          />

          <AnimatedSection variant="fade-in" delay={0.45}>
            <p
              className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ color: MUTED }}
            >
              A new kind of digital agency. We partner with India&apos;s most
              ambitious brands to engineer growth that is visible, measurable,
              and built to compound — powered by AI, authentic content, and
              data-driven strategy.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-in" delay={0.6} className="mt-12">
            <div
              className="h-px max-w-xs mx-auto"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
              }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <Marquee items={marqueeValues} speed={35} />

      {/* ── Story + Timeline ── */}
      <section className="py-28" style={{ background: BG_ALT }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection variant="slide-left">
              <BluePill label="Our Journey" />
              <TextReveal
                text="From a Mumbai Idea to India's Rising Agency"
                as="h2"
                delay={80}
                staggerMs={45}
                className="font-black text-4xl sm:text-5xl leading-tight tracking-tight mb-6"
                style={{ color: TEXT } as React.CSSProperties}
              />
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: MUTED }}
              >
                Founded in Mumbai in 2024, Maverick Digitals was built on one
                conviction: too many great brands were being held back by
                generic strategy and average execution.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: MUTED }}
              >
                What started as a focused mission to help brands cut through the
                digital noise has grown into a full-service growth powerhouse.
                We&apos;ve partnered with 35+ brands, generating millions of
                organic views, building loyal communities, and delivering ROI
                that genuinely shifts the bottom line.
              </p>
              <p className="text-base leading-relaxed" style={{ color: MUTED }}>
                Today, we&apos;re developing an AI-powered growth vertical —
                proprietary tools built for founders, agencies, and D2C
                operators ready to scale fast.
              </p>
            </AnimatedSection>

            <div
              className="relative pl-8"
              style={{ borderLeft: "1px solid rgba(37,99,235,0.2)" }}
            >
              {timelineEvents.map((event, i) => (
                <TimelineItem key={event.label} event={event} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-24" style={{ background: BG }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-up" className="mb-4 text-center">
            <BluePill label="Proof, Not Promises" />
          </AnimatedSection>
          <AnimatedSection variant="fade-up" className="mb-14 text-center">
            <TextReveal
              text="Milestones That Validate the Work"
              as="h2"
              delay={80}
              staggerMs={40}
              className="font-black text-4xl sm:text-5xl tracking-tight"
              style={{ color: TEXT } as React.CSSProperties}
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {statsData.map((stat, i) => (
              <AnimatedSection
                key={stat.label}
                variant="fade-up"
                delay={i * 0.1}
              >
                <div
                  className="p-8 rounded-xl text-center transition-all duration-300"
                  style={{
                    background: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    boxShadow: "0 2px 8px rgba(37,99,235,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(37,99,235,0.3)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 32px rgba(37,99,235,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      BORDER;
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 2px 8px rgba(37,99,235,0.06)";
                  }}
                  data-ocid={`about.stat.${i + 1}`}
                >
                  <div
                    className="text-4xl font-black mb-2 tabular-nums"
                    style={{ color: i % 2 === 0 ? ACCENT : ACCENT2 }}
                  >
                    <CounterAnimation
                      end={stat.end}
                      suffix={stat.suffix}
                      duration={2200}
                    />
                  </div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: MUTED }}
                  >
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: BG_ALT }}
      >
        <AmbientGlow variant="section" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-up" className="mb-4 text-center">
            <BluePill label="What Drives Us" />
          </AnimatedSection>
          <AnimatedSection variant="fade-up" className="mb-14 text-center">
            <TextReveal
              text="Mission & Vision"
              as="h2"
              delay={80}
              staggerMs={50}
              className="font-black text-4xl sm:text-5xl tracking-tight mb-4"
              style={{ color: TEXT } as React.CSSProperties}
            />
            <p className="text-base max-w-xl mx-auto" style={{ color: MUTED }}>
              The two principles that guide every decision, every campaign, and
              every outcome we deliver.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection variant="slide-left" delay={0.08}>
              <div
                className="p-8 h-full relative overflow-hidden rounded-xl"
                style={{
                  background: BG_CARD,
                  border: "1px solid rgba(37,99,235,0.18)",
                  boxShadow: "0 4px 32px rgba(37,99,235,0.07)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT} 0%, ${ACCENT2} 100%)`,
                  }}
                  aria-hidden="true"
                />
                <p
                  className="font-black text-6xl leading-none mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(59,130,246,0.08) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  aria-hidden="true"
                >
                  M
                </p>
                <h3 className="font-bold text-xl mb-3" style={{ color: TEXT }}>
                  Our Mission
                </h3>
                <p
                  className="leading-relaxed text-[0.9375rem]"
                  style={{ color: MUTED }}
                >
                  We exist to give every brand the tools, strategy, and creative
                  firepower to capture attention, build real authority, and
                  convert that attention into sustainable, compounding revenue.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="slide-right" delay={0.14}>
              <div
                className="p-8 h-full relative overflow-hidden rounded-xl"
                style={{
                  background: BG_CARD,
                  border: "1px solid rgba(59,130,246,0.18)",
                  boxShadow: "0 4px 32px rgba(59,130,246,0.07)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT2} 0%, ${ACCENT} 100%)`,
                  }}
                  aria-hidden="true"
                />
                <p
                  className="font-black text-6xl leading-none mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(37,99,235,0.1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  aria-hidden="true"
                >
                  V
                </p>
                <h3 className="font-bold text-xl mb-3" style={{ color: TEXT }}>
                  Our Vision
                </h3>
                <p
                  className="leading-relaxed text-[0.9375rem]"
                  style={{ color: MUTED }}
                >
                  To become the growth partner that every ambitious Indian brand
                  turns to — the agency you call when you&apos;re done playing
                  it safe and ready to build something that endures.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Marquee strip 2 ── */}
      <Marquee items={marqueeValues} speed={50} separator="—" />

      {/* ── Founder Section ── */}
      <section className="py-28" style={{ background: BG }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-up" className="mb-16 text-center">
            <BluePill label="Meet the Founder" />
            <TextReveal
              text="The Mind Behind Maverick Digitals"
              as="h2"
              delay={80}
              staggerMs={45}
              className="font-black text-4xl sm:text-5xl tracking-tight"
              style={{ color: TEXT } as React.CSSProperties}
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection variant="scale-up" delay={0.08}>
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  background: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  boxShadow: "0 8px 48px rgba(37,99,235,0.08)",
                }}
                data-ocid="about.founder_card"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT} 0%, ${ACCENT2} 50%, ${ACCENT} 100%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="p-8 sm:p-12">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                    <div className="shrink-0 relative">
                      <div
                        className="absolute inset-0 rounded-3xl -m-1.5"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(59,130,246,0.15) 100%)",
                        }}
                        aria-hidden="true"
                      />
                      <img
                        src="/assets/images/muskan.webp"
                        alt="Muskan Rathod, Founder & CEO of Maverick Digitals"
                        className="relative w-28 h-28 rounded-3xl object-cover"
                        style={{
                          boxShadow: "0 12px 40px rgba(37,99,235,0.18)",
                        }}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3
                        className="font-black text-2xl tracking-tight mb-1"
                        style={{ color: TEXT }}
                      >
                        Muskan Rathod
                      </h3>
                      <span
                        className="text-xs font-bold tracking-widest uppercase block mb-5"
                        style={{ color: ACCENT }}
                      >
                        Founder &amp; CEO
                      </span>
                      <p
                        className="leading-relaxed mb-3 text-[0.9375rem]"
                        style={{ color: MUTED }}
                      >
                        Muskan built Maverick Digitals from scratch with a
                        singular belief: Indian brands deserve world-class
                        strategy, not templated campaigns. Combining a
                        data-first mindset with a genuine passion for
                        storytelling, she has guided 35+ brands to results they
                        couldn&apos;t achieve elsewhere.
                      </p>
                      <p
                        className="leading-relaxed mb-6 text-[0.9375rem] italic"
                        style={{ color: MUTED }}
                      >
                        &ldquo;Great digital marketing isn&apos;t about being
                        everywhere — it&apos;s about being impossible to ignore
                        in the places that matter. That&apos;s the bar we hold
                        ourselves to, every single time.&rdquo;
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {muskanSkills.map((s, i) => (
                          <SkillBadge key={s} label={s} accent={i === 0} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="py-28" style={{ background: BG_ALT }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-up" className="mb-16 text-center">
            <BluePill label="The Dream Team" />
            <TextReveal
              text="The Team That Makes Brands Impossible to Ignore"
              as="h2"
              delay={80}
              staggerMs={40}
              className="font-black text-4xl sm:text-5xl tracking-tight mb-4"
              style={{ color: TEXT } as React.CSSProperties}
            />
            <p className="text-base max-w-xl mx-auto" style={{ color: MUTED }}>
              A lean, multi-disciplined team of strategists, developers, and
              creatives united by one goal: your brand&apos;s growth.
            </p>
          </AnimatedSection>

          <div className="flex justify-center">
            <AnimatedSection
              variant="scale-up"
              delay={0.08}
              className="w-full max-w-md"
            >
              <div
                className="relative overflow-hidden rounded-xl"
                style={{
                  background: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  boxShadow: "0 2px 12px rgba(37,99,235,0.06)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                data-ocid="about.team_card.1"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(37,99,235,0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 40px rgba(37,99,235,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    BORDER;
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 12px rgba(37,99,235,0.06)";
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${ACCENT2}, ${ACCENT}, transparent)`,
                  }}
                  aria-hidden="true"
                />
                <div className="p-8 text-center">
                  <div className="relative inline-block mb-5">
                    <div
                      className="absolute inset-0 rounded-3xl -m-1"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.15) 100%)",
                      }}
                      aria-hidden="true"
                    />
                    <img
                      src="/assets/images/dhaval.webp"
                      alt="Dhaval Shah, Co-Founder of Maverick Digitals"
                      className="relative w-24 h-24 rounded-3xl object-cover"
                      style={{
                        boxShadow: "0 8px 32px rgba(37,99,235,0.15)",
                      }}
                    />
                  </div>
                  <h3
                    className="font-black text-xl tracking-tight mb-1"
                    style={{ color: TEXT }}
                  >
                    Dhaval Shah
                  </h3>
                  <span
                    className="text-xs font-bold tracking-widest uppercase block mb-4"
                    style={{ color: ACCENT2 }}
                  >
                    Co-Founder
                  </span>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: MUTED }}
                  >
                    Dhaval brings 5+ years of expertise building
                    high-performance digital products. He architects the
                    platforms and tools that power Maverick&apos;s clients from
                    the infrastructure up.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {dhavalSkills.map((s) => (
                      <SkillBadge key={s} label={s} />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-28" style={{ background: BG }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-up" className="mb-4 text-center">
            <BluePill label="What We Stand For" />
          </AnimatedSection>
          <AnimatedSection variant="fade-up" className="mb-14 text-center">
            <TextReveal
              text="Core Values That Set Us Apart"
              as="h2"
              delay={80}
              staggerMs={45}
              className="font-black text-4xl sm:text-5xl tracking-tight mb-4"
              style={{ color: TEXT } as React.CSSProperties}
            />
            <p className="text-base max-w-xl mx-auto" style={{ color: MUTED }}>
              These are the principles we hire by, build by, and are held
              accountable to — every single day.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((value, i) => (
              <CoreValueCard key={value.title} value={value} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ background: "#EFF6FF" }}
      >
        <AmbientGlow variant="footer" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: ACCENT }}
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <AnimatedSection variant="fade-up">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
              style={{
                background: "rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.2)",
                color: ACCENT,
              }}
            >
              Partner With 35+ Brands
            </span>

            <TextReveal
              text="Ready to Break Through?"
              as="h2"
              delay={100}
              staggerMs={60}
              className="font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6"
              style={{ color: TEXT } as React.CSSProperties}
            />

            <p
              className="text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
              style={{ color: MUTED }}
            >
              Your growth story hasn&apos;t been written yet. Let&apos;s build
              the chapter that changes everything — with strategy, creativity,
              and zero compromise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT2} 100%)`,
                    color: "#FFFFFF",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 8px 30px rgba(37,99,235,0.4)";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "none";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "none";
                  }}
                  data-ocid="about.cta_primary"
                >
                  Begin Your Growth Journey
                </button>
              </Link>
              <Link to="/services">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl"
                  style={{
                    border: "1px solid rgba(37,99,235,0.3)",
                    color: ACCENT,
                    background: "transparent",
                    transition:
                      "border-color 0.3s ease, color 0.3s ease, background 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(37,99,235,0.5)";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(37,99,235,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(37,99,235,0.3)";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "transparent";
                  }}
                  data-ocid="about.cta_services"
                >
                  View Our Services
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
