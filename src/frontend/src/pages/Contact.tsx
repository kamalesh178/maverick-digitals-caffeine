import { AnimatedSection } from "@/components/AnimatedSection";
import { submitContactInquiry } from "@/lib/backend";
import {
  AlertCircle,
  CheckCircle,
  ChevronDown,
  Loader2,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type FormEvent, useState } from "react";
import TextReveal from "../components/TextReveal";

// ─── Constants ─────────────────────────────────────────────────────────────────────

const SERVICES_OPTIONS = [
  "Digital Marketing",
  "Social Media Management",
  "Performance Marketing",
  "Website Design & Development",
  "Custom Software Development",
  "Brand Management",
  "AI-Powered Solutions",
];

const INFO_CARDS = [
  {
    label: "WhatsApp",
    sublabel: "Reach us directly on WhatsApp",
    lines: ["+91-8779799255", "+91-9619818332"],
    links: [
      "https://wa.me/918779799255?text=Hi! I'm interested in Maverick Digitals' services.",
      "https://wa.me/919619818332?text=Hi! I'm interested in Maverick Digitals' services.",
    ],
  },
  {
    label: "Location",
    sublabel: "Our home base",
    lines: ["Mumbai, Maharashtra", "India"],
    links: [],
  },
  {
    label: "Office Hours",
    sublabel: "Our working hours",
    lines: ["Mon – Sat", "9:00 AM – 7:00 PM IST"],
    links: [],
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    sublabel: "@maverickdigitalsagency",
    href: "https://www.instagram.com/maverickdigitalsagency/",
  },
  {
    label: "LinkedIn",
    sublabel: "Maverick Digitals",
    href: "https://www.linkedin.com/company/maverick-digitals/",
  },
];

const FAQS = [
  {
    q: "What services does Maverick Digitals offer?",
    a: "We provide a comprehensive suite of seven core services: Digital Marketing, Social Media Management, Performance Marketing, Website Design & Development, Custom Software Development, Brand Management, and AI-Powered Solutions. Each is built to deliver measurable business outcomes — not just activity.",
  },
  {
    q: "How soon can I expect to see results?",
    a: "Most clients begin seeing meaningful traction within the first 30 to 60 days. Full campaign momentum typically develops over 90 days as we gather data, refine targeting, and optimise creative. We establish clear benchmarks at the outset so you always know what progress looks like.",
  },
  {
    q: "How is your pricing structured?",
    a: "Every engagement is scoped around your specific objectives and budget. We work with bootstrapped founders and enterprise teams alike. Book a complimentary strategy session and we will recommend the right service configuration with full transparency on investment from day one.",
  },
  {
    q: "Do you work with small and early-stage businesses?",
    a: "Absolutely. Some of our strongest results come from founders who started lean and scaled aggressively with the right strategy. If you are serious about growth, we are serious about you. The size of your business today does not define what it can become with the right partner.",
  },
  {
    q: "What is the best way to get started?",
    a: "Complete the enquiry form on this page or reach us via WhatsApp for the fastest response. We will schedule a free 30-minute strategy session to understand your brand, your goals, and map out an initial growth roadmap. There is no obligation — just genuine insight and a clear next step.",
  },
];

// ─── Types ──────────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

// ─── Input class constants (white theme) ─────────────────────────────────────────────

const inputBase =
  "w-full bg-white border text-[#1E3A8A] placeholder:text-[#9CA3AF] text-sm rounded-md px-4 py-3 focus:outline-none transition-colors duration-200 appearance-none";
const inputNormal =
  "border-[#E2E8F0] focus:border-[#2563EB] focus:ring-2 focus:ring-[rgba(37,99,235,0.1)]";
const inputError =
  "border-red-400 focus:border-red-500 placeholder:text-red-300";

// ─── Sub-components ───────────────────────────────────────────────────────────────────

function FieldWrapper({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[#374151] text-xs font-semibold uppercase tracking-wider"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-1.5 text-red-500 text-xs mt-1"
            data-ocid={`${id}-field-error`}
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.07,
        duration: 0.45,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div
        className={[
          "rounded-xl border overflow-hidden transition-all duration-300",
          open
            ? "bg-[#EFF6FF] border-[rgba(37,99,235,0.3)]"
            : "bg-white border-[#E2E8F0] hover:border-[rgba(37,99,235,0.25)]",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          aria-expanded={open}
          data-ocid={`faq-item-${index + 1}`}
        >
          <span
            className={`font-semibold text-base transition-colors duration-200 ${
              open ? "text-[#2563EB]" : "text-[#1E3A8A]"
            }`}
          >
            {q}
          </span>
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              open
                ? "bg-[#EFF6FF] text-[#2563EB] rotate-180 border border-[rgba(37,99,235,0.2)]"
                : "bg-[#F1F5F9] text-[#6B7280] border border-[#E2E8F0]"
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-0 border-t border-[#E2E8F0]">
                <p className="text-[#374151] text-sm leading-relaxed pt-4">
                  {a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) errs.message = "Tell us about your project";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);
    try {
      const result = await submitContactInquiry({
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.company,
        message: form.message,
        service: form.service,
      });
      if (result.success) {
        setIsSubmitted(true);
        setForm(INITIAL_FORM);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or reach out via WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "#FFFFFF", color: "#374151" }}
    >
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: "#FFFFFF" }}
      >
        {/* Fine grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        {/* Radial top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto max-w-5xl px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] uppercase text-[#2563EB] mb-6">
              <span className="w-10 h-px bg-[#2563EB]/30" />
              Get In Touch
              <span className="w-10 h-px bg-[#2563EB]/30" />
            </span>

            <TextReveal
              text="Let's Build Something Exceptional."
              as="h1"
              className="font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-[#1E3A8A]"
              staggerMs={50}
            />

            <p className="text-[#374151] text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed">
              Ready to build something remarkable?{" "}
              <span className="text-[#1E3A8A] font-semibold">
                Let's connect.
              </span>{" "}
              Schedule a complimentary session — clear thinking, zero fluff.
            </p>
          </motion.div>

          {/* Quick stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="flex flex-wrap justify-center gap-10 mt-14"
          >
            {[
              { value: "48h", label: "Response Time" },
              { value: "35+", label: "Brands Scaled" },
              { value: "10M+", label: "Views Generated" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-black text-3xl text-[#2563EB]"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {stat.value}
                </div>
                <div className="text-[#9CA3AF] text-xs font-semibold tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Info Cards ──────────────────────────────────────────────── */}
      <section className="pb-12" style={{ background: "#F8FAFC" }}>
        <div className="container mx-auto max-w-5xl px-4 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {INFO_CARDS.map((card, i) => (
              <AnimatedSection
                key={card.label}
                variant="scale-up"
                delay={i * 0.1}
              >
                <div className="h-full rounded-xl border border-[#E2E8F0] bg-white p-6 flex flex-col gap-2 transition-all duration-300 hover:border-[rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)]">
                  <div className="flex flex-col gap-0.5 mb-1">
                    <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#2563EB]">
                      {card.label}
                    </span>
                    <span className="text-xs text-[#9CA3AF]">
                      {card.sublabel}
                    </span>
                  </div>
                  {card.links.length > 0 ? (
                    <div className="flex flex-col gap-1">
                      {card.lines.map((line, li) => (
                        <a
                          key={line}
                          href={card.links[li] ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1E3A8A] font-bold text-base hover:text-[#2563EB] transition-colors duration-200 underline-offset-2 hover:underline"
                          data-ocid={`contact-wa-${li + 1}`}
                        >
                          {line}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-0.5">
                      {card.lines.map((line) => (
                        <span
                          key={line}
                          className="text-[#1E3A8A] font-bold text-base"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Social ────────────────────────────────────────────── */}
      <section
        className="py-16 border-t border-[#E2E8F0] relative overflow-hidden"
        style={{ background: "#FFFFFF" }}
      >
        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: social + whatsapp cta */}
            <AnimatedSection
              variant="slide-left"
              className="lg:col-span-2 flex flex-col gap-7"
            >
              {/* Social links */}
              <div>
                <h2 className="font-bold text-[#1E3A8A] text-xl mb-1">
                  Find Us Online
                </h2>
                <p className="text-[#374151] text-sm leading-relaxed mb-5">
                  Follow us for daily strategy insights, behind-the-scenes
                  content, and growth inspiration.
                </p>
                <div className="flex flex-col gap-3">
                  {SOCIALS.map(({ label, sublabel, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[rgba(37,99,235,0.3)] hover:bg-[#EFF6FF] transition-all duration-200 group"
                      data-ocid={`social-${label.toLowerCase()}`}
                    >
                      <div>
                        <div className="font-bold text-sm text-[#1E3A8A] group-hover:text-[#2563EB] transition-colors duration-200">
                          {label}
                        </div>
                        <div className="text-xs text-[#9CA3AF] mt-0.5">
                          {sublabel}
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all duration-200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA card — keep green as brand color */}
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-6">
                <div className="font-bold text-[#1E3A8A] text-base mb-1">
                  Prefer a Direct Conversation?
                </div>
                <p className="text-[#374151] text-sm mb-4 leading-relaxed">
                  Message us and we respond within minutes. Available Monday to
                  Saturday, 9AM–7PM IST.
                </p>
                <a
                  href="https://wa.me/918779799255?text=Hi! I want to grow my brand with Maverick Digitals."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact-whatsapp-cta"
                >
                  <button
                    type="button"
                    className="w-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors rounded-md px-8 py-3 text-sm"
                  >
                    Message Us on WhatsApp
                  </button>
                </a>
              </div>

              {/* Strategy session callout */}
              <div className="hidden lg:flex rounded-xl border border-[rgba(37,99,235,0.15)] bg-[#EFF6FF] overflow-hidden relative">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(37,99,235,0.06) 0%, transparent 70%)",
                  }}
                />
                <div className="relative flex flex-col items-center justify-center text-center p-7 w-full gap-1">
                  <div className="font-black text-5xl text-[#2563EB] leading-none mb-1">
                    Free
                  </div>
                  <div className="font-bold text-[#1E3A8A] text-sm">
                    Free Strategy Session
                  </div>
                  <div className="text-[#9CA3AF] text-xs mt-0.5">
                    Zero obligation. Just clear strategy.
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: form */}
            <AnimatedSection
              variant="slide-right"
              delay={0.1}
              className="lg:col-span-3"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div
                      className="rounded-xl border border-[#E2E8F0] bg-white p-12 text-center"
                      data-ocid="contact-success-state"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.15,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_24px_rgba(52,211,153,0.25)]"
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="font-black text-3xl text-[#1E3A8A] mb-3">
                        Your Message Is With Us!
                      </h3>
                      <p className="text-[#374151] text-base leading-relaxed mb-8 max-w-sm mx-auto">
                        Our team reviews every enquiry personally and responds
                        within{" "}
                        <span className="text-[#1E3A8A] font-semibold">
                          24–48 hours.
                        </span>{" "}
                        Want a quicker response? Reach us directly on WhatsApp.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                          type="button"
                          onClick={() => setIsSubmitted(false)}
                          className="border border-[#E2E8F0] text-[#1E3A8A] hover:border-[rgba(37,99,235,0.3)] hover:text-[#2563EB] transition-colors rounded-md px-6 py-2.5 text-sm font-semibold"
                          data-ocid="contact-send-another"
                        >
                          Submit Another Enquiry
                        </button>
                        <a
                          href="https://wa.me/918779799255"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            type="button"
                            className="bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors rounded-md px-6 py-2.5 text-sm"
                          >
                            Chat on WhatsApp
                          </button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div
                      className="rounded-xl border border-[#E2E8F0] bg-white p-8 sm:p-10 shadow-[0_4px_24px_rgba(37,99,235,0.06)]"
                      data-ocid="contact-form-card"
                    >
                      {/* Form header */}
                      <div className="mb-8">
                        <h2 className="font-bold text-[#1E3A8A] text-2xl mb-1.5">
                          Start the Conversation
                        </h2>
                        <p className="text-[#374151] text-sm">
                          Complete the form and our team will follow up shortly.
                        </p>
                        <div className="mt-4 h-px bg-gradient-to-r from-[#2563EB]/30 via-[#3B82F6]/20 to-transparent" />
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                        noValidate
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <FieldWrapper
                            id="name"
                            label="Full Name"
                            required
                            error={errors.name}
                          >
                            <input
                              id="name"
                              name="name"
                              type="text"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Rahul Sharma"
                              className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                              data-ocid="contact-name"
                              autoComplete="name"
                            />
                          </FieldWrapper>

                          <FieldWrapper
                            id="email"
                            label="Email Address"
                            required
                            error={errors.email}
                          >
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="rahul@brand.com"
                              className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                              data-ocid="contact-email"
                              autoComplete="email"
                            />
                          </FieldWrapper>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <FieldWrapper id="phone" label="Phone Number">
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className={`${inputBase} ${inputNormal}`}
                              data-ocid="contact-phone"
                              autoComplete="tel"
                            />
                          </FieldWrapper>

                          <FieldWrapper id="company" label="Company / Brand">
                            <input
                              id="company"
                              name="company"
                              type="text"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Your Company Name"
                              className={`${inputBase} ${inputNormal}`}
                              data-ocid="contact-company"
                              autoComplete="organization"
                            />
                          </FieldWrapper>
                        </div>

                        <FieldWrapper
                          id="service"
                          label="Service Interested In"
                        >
                          <div className="relative">
                            <select
                              id="service"
                              name="service"
                              value={form.service}
                              onChange={handleChange}
                              className={`${inputBase} ${inputNormal} pr-10 cursor-pointer`}
                              data-ocid="contact-service"
                            >
                              <option
                                value=""
                                className="bg-white text-[#9CA3AF]"
                              >
                                — Select a service —
                              </option>
                              {SERVICES_OPTIONS.map((s) => (
                                <option
                                  key={s}
                                  value={s}
                                  className="bg-white text-[#1E3A8A]"
                                >
                                  {s}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                        </FieldWrapper>

                        <FieldWrapper
                          id="message"
                          label="Message"
                          required
                          error={errors.message}
                        >
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Describe your brand goals, current challenges, and what success means to you. The more detail, the better."
                            className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none`}
                            data-ocid="contact-message"
                          />
                        </FieldWrapper>

                        <AnimatePresence>
                          {submitError && (
                            <motion.div
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              className="flex items-center gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium"
                              data-ocid="contact-error-state"
                            >
                              <AlertCircle className="w-4 h-4 shrink-0" />
                              {submitError}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors rounded-md px-8 py-3 shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)]"
                          data-ocid="contact-submit"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Sending Message…
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>

                        <p className="text-center text-[#9CA3AF] text-xs pt-1">
                          By sending this enquiry, you agree to our{" "}
                          <span className="text-[#6B7280] cursor-pointer hover:text-[#2563EB] transition-colors">
                            privacy policy.
                          </span>{" "}
                          Your information is handled with complete
                          confidentiality.
                        </p>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 border-t border-[#E2E8F0] relative overflow-hidden"
        style={{ background: "#F8FAFC" }}
      >
        <div className="container mx-auto max-w-3xl px-4 relative z-10">
          <AnimatedSection variant="fade-up" className="mb-14 text-center">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] uppercase text-[#2563EB] mb-4">
              <span className="w-8 h-px bg-[#2563EB]/30" />
              FAQ
              <span className="w-8 h-px bg-[#2563EB]/30" />
            </span>
            <TextReveal
              text="Common Questions"
              as="h2"
              className="font-black text-4xl sm:text-5xl text-[#1E3A8A] mb-4"
              staggerMs={60}
            />
            <p className="text-[#374151] text-lg max-w-xl mx-auto">
              Answers to the questions we hear most from brands considering
              working with us.
            </p>
          </AnimatedSection>

          <div className="space-y-3" data-ocid="faq-list">
            {FAQS.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.45 }}
            className="text-center mt-12"
          >
            <p className="text-[#6B7280] text-sm mb-4">
              Didn't find the answer you needed?
            </p>
            <a
              href="https://wa.me/918779799255?text=Hi! I have a question about Maverick Digitals."
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="faq-whatsapp-cta"
            >
              <button
                type="button"
                className="border border-[#E2E8F0] text-[#1E3A8A] hover:border-[rgba(37,99,235,0.3)] hover:text-[#2563EB] transition-colors rounded-md px-8 py-3 text-sm font-semibold bg-white"
              >
                Reach Us on WhatsApp
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
