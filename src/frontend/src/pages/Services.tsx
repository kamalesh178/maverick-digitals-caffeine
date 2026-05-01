import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "@tanstack/react-router";

// ─── Data ────────────────────────────────────────────────────────────────────

interface ServiceItem {
  num: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    num: "01",
    name: "Social Media Management",
    description:
      "We manage your Instagram, LinkedIn, and social channels with AI-assisted scheduling, content strategy, and community management. Consistent posting, maximum reach.",
  },
  {
    num: "02",
    name: "Performance Marketing",
    description:
      "High-ROAS ad campaigns on Facebook, Instagram, LinkedIn, and Google Ads. From audience targeting to creative testing — we run ads that convert.",
  },
  {
    num: "03",
    name: "UGC Content Creation",
    description:
      "Authentic user-generated content that converts 3x better than branded video. We source, brief, and produce UGC creators for your brand campaigns.",
  },
  {
    num: "04",
    name: "AI-Powered Strategy",
    description:
      "We leverage AI tools for content ideation, audience insights, competitive analysis, and campaign optimization — giving your brand an unfair advantage.",
  },
  {
    num: "05",
    name: "Web & App Development",
    description:
      "Custom websites and mobile-ready web apps built for performance, conversion, and brand impact. From landing pages to full SaaS platforms.",
  },
  {
    num: "06",
    name: "Brand Management",
    description:
      "Complete brand identity: strategy, visual design, messaging, and positioning. We build brands that stand out and scale.",
  },
  {
    num: "07",
    name: "Custom Software Development",
    description:
      "Tailored software solutions — automation tools, marketing platforms, AI integrations, and custom dashboards to power your business operations.",
  },
];

interface ProcessStepItem {
  num: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStepItem[] = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We audit your brand, competitors, and audience to define strategy.",
  },
  {
    num: "02",
    title: "Strategy",
    description:
      "Custom roadmap built around your goals, budget, and timeline.",
  },
  {
    num: "03",
    title: "Execution",
    description:
      "Our team executes campaigns with speed, precision, and creativity.",
  },
  {
    num: "04",
    title: "Optimize",
    description:
      "Continuous A/B testing and data analysis to maximize performance.",
  },
];

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div
      className="service-card group"
      data-ocid={`service.card.${service.num}`}
    >
      {/* Number */}
      <span className="service-card__num gradient-text">{service.num}</span>
      {/* Name */}
      <h3 className="service-card__name">{service.name}</h3>
      {/* Divider */}
      <div className="service-card__divider" aria-hidden="true" />
      {/* Description */}
      <p className="service-card__desc">{service.description}</p>
      {/* Footer */}
      <Link
        to="/contact"
        className="service-card__cta gradient-text"
        data-ocid={`service.learn_more.${service.num}`}
      >
        Learn More →
      </Link>
    </div>
  );
}

// ─── Process Step ─────────────────────────────────────────────────────────────

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: ProcessStepItem;
  index: number;
  isLast: boolean;
}) {
  return (
    <AnimatedSection variant="fade-up" delay={index * 0.1}>
      <div className="process-step" data-ocid={`process.step.${index + 1}`}>
        {/* Connector (desktop only, between steps) */}
        {!isLast && (
          <div className="process-step__connector" aria-hidden="true" />
        )}
        {/* Number bubble */}
        <div className="process-step__bubble">
          <span className="gradient-text font-black text-xl">{step.num}</span>
        </div>
        {/* Text */}
        <h3 className="process-step__title">{step.title}</h3>
        <p className="process-step__desc">{step.description}</p>
      </div>
    </AnimatedSection>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]" data-ocid="services.page">
      {/* ── Hero ── */}
      <section className="services-hero" data-ocid="services.hero">
        {/* Ambient glow */}
        <div className="services-hero__glow" aria-hidden="true" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection
            variant="fade-up"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            {/* Badge */}
            <span
              className="services-hero__badge"
              data-ocid="services.hero.badge"
            >
              SERVICES
            </span>

            {/* Heading */}
            <h1 className="services-hero__heading">
              Everything You Need to{" "}
              <span className="gradient-text">Scale</span>
            </h1>

            {/* Subheading */}
            <p className="services-hero__sub">
              From social media to performance ads to custom software — we cover
              the full stack of modern digital growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Link to="/contact" data-ocid="services.hero.primary_cta">
                <button type="button" className="btn-gradient">
                  Start Your Growth
                </button>
              </Link>
              <a href="#services-grid" data-ocid="services.hero.secondary_cta">
                <button type="button" className="btn-outline">
                  Explore Services
                </button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section
        id="services-grid"
        className="py-24 bg-[#0a0a0a]"
        data-ocid="services.grid.section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <AnimatedSection
            variant="fade-up"
            className="flex flex-col items-center mb-14"
          >
            <p className="section-eyebrow">WHAT WE OFFER</p>
            <h2 className="section-heading text-center">
              Seven Ways We Drive{" "}
              <span className="gradient-text">Your Growth</span>
            </h2>
          </AnimatedSection>

          {/* Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services.grid.list"
          >
            {SERVICES.map((service, i) => (
              <AnimatedSection
                key={service.num}
                variant="fade-up"
                delay={i * 0.06}
              >
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      {/* ── Process Section ── */}
      <section
        className="py-24 bg-[#0a0a0a]"
        data-ocid="services.process.section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection
            variant="fade-up"
            className="flex flex-col items-center text-center mb-16"
          >
            <p className="section-eyebrow">HOW WE WORK</p>
            <h2 className="section-heading">
              Our <span className="gradient-text">Process</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessStep
                key={step.num}
                step={step}
                index={i}
                isLast={i === PROCESS_STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider mx-auto max-w-5xl" aria-hidden="true" />

      {/* ── CTA Section ── */}
      <section className="services-cta" data-ocid="services.cta.section">
        {/* Glow blob */}
        <div className="services-cta__glow" aria-hidden="true" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fade-up">
            <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
              <h2 className="section-heading">
                Ready to <span className="gradient-text">Get Started?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Let's build your digital strategy together.
              </p>
              <Link to="/contact" data-ocid="services.cta.primary_button">
                <button type="button" className="btn-gradient btn-gradient--lg">
                  Book a Free Strategy Call
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Page-scoped styles ── */}
      <style>{`
        /* ─ Hero ─ */
        .services-hero {
          position: relative;
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 0 6rem;
          overflow: hidden;
          background: #0a0a0a;
        }
        .services-hero__glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.06) 50%, transparent 75%);
          pointer-events: none;
          animation: ambient-pulse 5s ease-in-out infinite;
        }
        .services-hero__badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 20px;
          border-radius: 100px;
          background: rgba(124,58,237,0.1);
          border: 1px solid rgba(124,58,237,0.3);
          color: #a78bfa;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          font-family: var(--font-display);
        }
        .services-hero__heading {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #fff;
          font-family: var(--font-display);
        }
        .services-hero__sub {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.55);
          max-width: 38rem;
        }

        /* ─ Buttons ─ */
        .btn-gradient {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
          color: #fff;
          font-weight: 700;
          font-family: var(--font-display);
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-gradient:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(124,58,237,0.35);
        }
        .btn-gradient--lg {
          padding: 16px 40px;
          font-size: 1rem;
        }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 10px;
          background: transparent;
          color: rgba(255,255,255,0.8);
          font-weight: 600;
          font-family: var(--font-display);
          font-size: 0.95rem;
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }
        .btn-outline:hover {
          border-color: rgba(124,58,237,0.5);
          color: #fff;
          background: rgba(124,58,237,0.06);
        }

        /* ─ Section labels / headings ─ */
        .section-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 12px;
          font-family: var(--font-display);
        }
        .section-heading {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #fff;
          font-family: var(--font-display);
          margin: 0;
        }

        /* ─ Service Cards ─ */
        .service-card {
          background: #111111;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: radial-gradient(circle at 0% 0%, rgba(124,58,237,0.04) 0%, transparent 60%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .service-card:hover {
          border-color: rgba(255,255,255,0.15);
          transform: scale(1.01);
          box-shadow: 0 0 0 1px rgba(124,58,237,0.2), 0 12px 40px rgba(124,58,237,0.15);
        }
        .service-card:hover::before {
          opacity: 1;
        }
        .service-card__num {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
          font-family: var(--font-display);
          letter-spacing: -0.03em;
        }
        .service-card__name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          font-family: var(--font-display);
          margin: 0;
        }
        .service-card__divider {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, rgba(124,58,237,0.6), transparent);
        }
        .service-card__desc {
          font-size: 0.875rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.55);
          margin: 0;
          flex: 1;
        }
        .service-card__cta {
          font-size: 0.82rem;
          font-weight: 700;
          font-family: var(--font-display);
          text-decoration: none;
          transition: letter-spacing 0.2s ease;
          margin-top: 4px;
          display: inline-block;
        }
        .service-card__cta:hover {
          letter-spacing: 0.02em;
        }

        /* ─ Process Steps ─ */
        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          position: relative;
        }
        .process-step__connector {
          display: none;
        }
        @media (min-width: 1024px) {
          .process-step__connector {
            display: block;
            position: absolute;
            top: 32px;
            left: calc(50% + 38px);
            right: calc(-50% + 38px);
            height: 1px;
            border-top: 1px dashed rgba(124,58,237,0.25);
            pointer-events: none;
          }
        }
        .process-step__bubble {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #111;
          border: 1px solid rgba(124,58,237,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(124,58,237,0.15);
          flex-shrink: 0;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .process-step:hover .process-step__bubble {
          border-color: rgba(124,58,237,0.6);
          box-shadow: 0 0 32px rgba(124,58,237,0.3);
        }
        .process-step__title {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          font-family: var(--font-display);
          margin: 0;
        }
        .process-step__desc {
          font-size: 0.84rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.5);
          margin: 0;
          max-width: 200px;
        }

        /* ─ CTA Section ─ */
        .services-cta {
          position: relative;
          overflow: hidden;
          padding: 7rem 0;
          background: #0a0a0a;
        }
        .services-cta__glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, rgba(6,182,212,0.05) 50%, transparent 75%);
          pointer-events: none;
        }

        /* ─ Gradient text ─ */
        .gradient-text {
          background: linear-gradient(135deg, #a78bfa, #67e8f9);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ─ Section divider ─ */
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.3) 20%, rgba(6,182,212,0.3) 80%, transparent 100%);
          border: none;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
