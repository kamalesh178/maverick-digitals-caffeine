import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-Cj8-jWY_.js";
import { T as TextReveal, A as AnimatedSection } from "./TextReveal-BmkunpgX.js";
import { s as submitContactInquiry } from "./backend-DX86TjI-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const SERVICES_OPTIONS = [
  "Digital Marketing",
  "Social Media Management",
  "Performance Marketing",
  "Website Design & Development",
  "Custom Software Development",
  "Brand Management",
  "AI-Powered Solutions"
];
const INFO_CARDS = [
  {
    label: "WhatsApp",
    sublabel: "Reach us directly on WhatsApp",
    lines: ["+91-8779799255", "+91-9619818332"],
    links: [
      "https://wa.me/918779799255?text=Hi! I'm interested in Maverick Digitals' services.",
      "https://wa.me/919619818332?text=Hi! I'm interested in Maverick Digitals' services."
    ]
  },
  {
    label: "Location",
    sublabel: "Our home base",
    lines: ["Mumbai, Maharashtra", "India"],
    links: []
  },
  {
    label: "Office Hours",
    sublabel: "Our working hours",
    lines: ["Mon – Sat", "9:00 AM – 7:00 PM IST"],
    links: []
  }
];
const SOCIALS = [
  {
    label: "Instagram",
    sublabel: "@maverickdigitalsagency",
    href: "https://www.instagram.com/maverickdigitalsagency/"
  },
  {
    label: "LinkedIn",
    sublabel: "Maverick Digitals",
    href: "https://www.linkedin.com/company/maverick-digitals/"
  }
];
const FAQS = [
  {
    q: "What services does Maverick Digitals offer?",
    a: "We provide a comprehensive suite of seven core services: Digital Marketing, Social Media Management, Performance Marketing, Website Design & Development, Custom Software Development, Brand Management, and AI-Powered Solutions. Each is built to deliver measurable business outcomes — not just activity."
  },
  {
    q: "How soon can I expect to see results?",
    a: "Most clients begin seeing meaningful traction within the first 30 to 60 days. Full campaign momentum typically develops over 90 days as we gather data, refine targeting, and optimise creative. We establish clear benchmarks at the outset so you always know what progress looks like."
  },
  {
    q: "How is your pricing structured?",
    a: "Every engagement is scoped around your specific objectives and budget. We work with bootstrapped founders and enterprise teams alike. Book a complimentary strategy session and we will recommend the right service configuration with full transparency on investment from day one."
  },
  {
    q: "Do you work with small and early-stage businesses?",
    a: "Absolutely. Some of our strongest results come from founders who started lean and scaled aggressively with the right strategy. If you are serious about growth, we are serious about you. The size of your business today does not define what it can become with the right partner."
  },
  {
    q: "What is the best way to get started?",
    a: "Complete the enquiry form on this page or reach us via WhatsApp for the fastest response. We will schedule a free 30-minute strategy session to understand your brand, your goals, and map out an initial growth roadmap. There is no obligation — just genuine insight and a clear next step."
  }
];
const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: ""
};
const inputBase = "w-full bg-white border text-[#1E3A8A] placeholder:text-[#9CA3AF] text-sm rounded-md px-4 py-3 focus:outline-none transition-colors duration-200 appearance-none";
const inputNormal = "border-[#E2E8F0] focus:border-[#2563EB] focus:ring-2 focus:ring-[rgba(37,99,235,0.1)]";
const inputError = "border-red-400 focus:border-red-500 placeholder:text-red-300";
function FieldWrapper({
  id,
  label,
  required,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        htmlFor: id,
        className: "text-[#374151] text-xs font-semibold uppercase tracking-wider",
        children: [
          label,
          required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 ml-1", children: "*" })
        ]
      }
    ),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.p,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "flex items-center gap-1.5 text-red-500 text-xs mt-1",
        "data-ocid": `${id}-field-error`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3.5 h-3.5 shrink-0" }),
          error
        ]
      }
    ) })
  ] });
}
function FaqItem({ q, a, index }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: {
        delay: index * 0.07,
        duration: 0.45,
        ease: [0.4, 0, 0.2, 1]
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: [
            "rounded-xl border overflow-hidden transition-all duration-300",
            open ? "bg-[#EFF6FF] border-[rgba(37,99,235,0.3)]" : "bg-white border-[#E2E8F0] hover:border-[rgba(37,99,235,0.25)]"
          ].join(" "),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpen((v) => !v),
                className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left",
                "aria-expanded": open,
                "data-ocid": `faq-item-${index + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `font-semibold text-base transition-colors duration-200 ${open ? "text-[#2563EB]" : "text-[#1E3A8A]"}`,
                      children: q
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "bg-[#EFF6FF] text-[#2563EB] rotate-180 border border-[rgba(37,99,235,0.2)]" : "bg-[#F1F5F9] text-[#6B7280] border border-[#E2E8F0]"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6 pt-0 border-t border-[#E2E8F0]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] text-sm leading-relaxed pt-4", children: a }) })
              },
              "answer"
            ) })
          ]
        }
      )
    }
  );
}
function Contact() {
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const [errors, setErrors] = reactExports.useState({});
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  };
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) errs.message = "Tell us about your project";
    return errs;
  };
  const handleSubmit = async (e) => {
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
        service: form.service
      });
      if (result.success) {
        setIsSubmitted(true);
        setForm(INITIAL_FORM);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or reach out via WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { background: "#FFFFFF", color: "#374151" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "relative pt-28 pb-20 overflow-hidden",
            style: { background: "#FFFFFF" },
            children: [
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none",
                  style: {
                    background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)"
                  },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-5xl px-4 text-center relative z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] uppercase text-[#2563EB] mb-6", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-[#2563EB]/30" }),
                        "Get In Touch",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-[#2563EB]/30" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        TextReveal,
                        {
                          text: "Let's Build Something Exceptional.",
                          as: "h1",
                          className: "font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-[#1E3A8A]",
                          staggerMs: 50
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[#374151] text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed", children: [
                        "Ready to build something remarkable?",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1E3A8A] font-semibold", children: "Let's connect." }),
                        " ",
                        "Schedule a complimentary session — clear thinking, zero fluff."
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.3, duration: 0.55 },
                    className: "flex flex-wrap justify-center gap-10 mt-14",
                    children: [
                      { value: "48h", label: "Response Time" },
                      { value: "35+", label: "Brands Scaled" },
                      { value: "10M+", label: "Views Generated" }
                    ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "font-black text-3xl text-[#2563EB]",
                          style: { animationDelay: `${i * 0.1}s` },
                          children: stat.value
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#9CA3AF] text-xs font-semibold tracking-widest uppercase mt-1", children: stat.label })
                    ] }, stat.label))
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-12", style: { background: "#F8FAFC" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-5xl px-4 pt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: INFO_CARDS.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnimatedSection,
          {
            variant: "scale-up",
            delay: i * 0.1,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-xl border border-[#E2E8F0] bg-white p-6 flex flex-col gap-2 transition-all duration-300 hover:border-[rgba(37,99,235,0.3)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.08)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold tracking-[0.18em] uppercase text-[#2563EB]", children: card.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[#9CA3AF]", children: card.sublabel })
              ] }),
              card.links.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: card.lines.map((line, li) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: card.links[li] ?? "#",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-[#1E3A8A] font-bold text-base hover:text-[#2563EB] transition-colors duration-200 underline-offset-2 hover:underline",
                  "data-ocid": `contact-wa-${li + 1}`,
                  children: line
                },
                line
              )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-0.5", children: card.lines.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[#1E3A8A] font-bold text-base",
                  children: line
                },
                line
              )) })
            ] })
          },
          card.label
        )) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-16 border-t border-[#E2E8F0] relative overflow-hidden",
            style: { background: "#FFFFFF" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-5xl px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                AnimatedSection,
                {
                  variant: "slide-left",
                  className: "lg:col-span-2 flex flex-col gap-7",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-[#1E3A8A] text-xl mb-1", children: "Find Us Online" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] text-sm leading-relaxed mb-5", children: "Follow us for daily strategy insights, behind-the-scenes content, and growth inspiration." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: SOCIALS.map(({ label, sublabel, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[rgba(37,99,235,0.3)] hover:bg-[#EFF6FF] transition-all duration-200 group",
                          "data-ocid": `social-${label.toLowerCase()}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm text-[#1E3A8A] group-hover:text-[#2563EB] transition-colors duration-200", children: label }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#9CA3AF] mt-0.5", children: sublabel })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "svg",
                              {
                                className: "w-4 h-4 text-[#9CA3AF] group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all duration-200",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 17L17 7M17 7H7M17 7v10" })
                              }
                            )
                          ]
                        },
                        label
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E2E8F0] bg-white p-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[#1E3A8A] text-base mb-1", children: "Prefer a Direct Conversation?" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] text-sm mb-4 leading-relaxed", children: "Message us and we respond within minutes. Available Monday to Saturday, 9AM–7PM IST." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: "https://wa.me/918779799255?text=Hi! I want to grow my brand with Maverick Digitals.",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "data-ocid": "contact-whatsapp-cta",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              className: "w-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors rounded-md px-8 py-3 text-sm",
                              children: "Message Us on WhatsApp"
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex rounded-xl border border-[rgba(37,99,235,0.15)] bg-[#EFF6FF] overflow-hidden relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0 pointer-events-none",
                          style: {
                            background: "radial-gradient(ellipse at center, rgba(37,99,235,0.06) 0%, transparent 70%)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center justify-center text-center p-7 w-full gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-5xl text-[#2563EB] leading-none mb-1", children: "Free" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[#1E3A8A] text-sm", children: "Free Strategy Session" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#9CA3AF] text-xs mt-0.5", children: "Zero obligation. Just clear strategy." })
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AnimatedSection,
                {
                  variant: "slide-right",
                  delay: 0.1,
                  className: "lg:col-span-3",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.97 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.97 },
                      transition: { duration: 0.35 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-xl border border-[#E2E8F0] bg-white p-12 text-center",
                          "data-ocid": "contact-success-state",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                initial: { scale: 0 },
                                animate: { scale: 1 },
                                transition: {
                                  delay: 0.15,
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 15
                                },
                                className: "w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_24px_rgba(52,211,153,0.25)]",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-10 h-10 text-white" })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-3xl text-[#1E3A8A] mb-3", children: "Your Message Is With Us!" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[#374151] text-base leading-relaxed mb-8 max-w-sm mx-auto", children: [
                              "Our team reviews every enquiry personally and responds within",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1E3A8A] font-semibold", children: "24–48 hours." }),
                              " ",
                              "Want a quicker response? Reach us directly on WhatsApp."
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => setIsSubmitted(false),
                                  className: "border border-[#E2E8F0] text-[#1E3A8A] hover:border-[rgba(37,99,235,0.3)] hover:text-[#2563EB] transition-colors rounded-md px-6 py-2.5 text-sm font-semibold",
                                  "data-ocid": "contact-send-another",
                                  children: "Submit Another Enquiry"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "a",
                                {
                                  href: "https://wa.me/918779799255",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      className: "bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors rounded-md px-6 py-2.5 text-sm",
                                      children: "Chat on WhatsApp"
                                    }
                                  )
                                }
                              )
                            ] })
                          ]
                        }
                      )
                    },
                    "success"
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-xl border border-[#E2E8F0] bg-white p-8 sm:p-10 shadow-[0_4px_24px_rgba(37,99,235,0.06)]",
                          "data-ocid": "contact-form-card",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-[#1E3A8A] text-2xl mb-1.5", children: "Start the Conversation" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] text-sm", children: "Complete the form and our team will follow up shortly." }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-px bg-gradient-to-r from-[#2563EB]/30 via-[#3B82F6]/20 to-transparent" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "form",
                              {
                                onSubmit: handleSubmit,
                                className: "space-y-5",
                                noValidate: true,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      FieldWrapper,
                                      {
                                        id: "name",
                                        label: "Full Name",
                                        required: true,
                                        error: errors.name,
                                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "input",
                                          {
                                            id: "name",
                                            name: "name",
                                            type: "text",
                                            value: form.name,
                                            onChange: handleChange,
                                            placeholder: "Rahul Sharma",
                                            className: `${inputBase} ${errors.name ? inputError : inputNormal}`,
                                            "data-ocid": "contact-name",
                                            autoComplete: "name"
                                          }
                                        )
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      FieldWrapper,
                                      {
                                        id: "email",
                                        label: "Email Address",
                                        required: true,
                                        error: errors.email,
                                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "input",
                                          {
                                            id: "email",
                                            name: "email",
                                            type: "email",
                                            value: form.email,
                                            onChange: handleChange,
                                            placeholder: "rahul@brand.com",
                                            className: `${inputBase} ${errors.email ? inputError : inputNormal}`,
                                            "data-ocid": "contact-email",
                                            autoComplete: "email"
                                          }
                                        )
                                      }
                                    )
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldWrapper, { id: "phone", label: "Phone Number", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "input",
                                      {
                                        id: "phone",
                                        name: "phone",
                                        type: "tel",
                                        value: form.phone,
                                        onChange: handleChange,
                                        placeholder: "+91 98765 43210",
                                        className: `${inputBase} ${inputNormal}`,
                                        "data-ocid": "contact-phone",
                                        autoComplete: "tel"
                                      }
                                    ) }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(FieldWrapper, { id: "company", label: "Company / Brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "input",
                                      {
                                        id: "company",
                                        name: "company",
                                        type: "text",
                                        value: form.company,
                                        onChange: handleChange,
                                        placeholder: "Your Company Name",
                                        className: `${inputBase} ${inputNormal}`,
                                        "data-ocid": "contact-company",
                                        autoComplete: "organization"
                                      }
                                    ) })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    FieldWrapper,
                                    {
                                      id: "service",
                                      label: "Service Interested In",
                                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                          "select",
                                          {
                                            id: "service",
                                            name: "service",
                                            value: form.service,
                                            onChange: handleChange,
                                            className: `${inputBase} ${inputNormal} pr-10 cursor-pointer`,
                                            "data-ocid": "contact-service",
                                            children: [
                                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                "option",
                                                {
                                                  value: "",
                                                  className: "bg-white text-[#9CA3AF]",
                                                  children: "— Select a service —"
                                                }
                                              ),
                                              SERVICES_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                "option",
                                                {
                                                  value: s,
                                                  className: "bg-white text-[#1E3A8A]",
                                                  children: s
                                                },
                                                s
                                              ))
                                            ]
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" }) })
                                      ] })
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    FieldWrapper,
                                    {
                                      id: "message",
                                      label: "Message",
                                      required: true,
                                      error: errors.message,
                                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "textarea",
                                        {
                                          id: "message",
                                          name: "message",
                                          rows: 5,
                                          value: form.message,
                                          onChange: handleChange,
                                          placeholder: "Describe your brand goals, current challenges, and what success means to you. The more detail, the better.",
                                          className: `${inputBase} ${errors.message ? inputError : inputNormal} resize-none`,
                                          "data-ocid": "contact-message"
                                        }
                                      )
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: submitError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    motion.div,
                                    {
                                      initial: { opacity: 0, y: -6 },
                                      animate: { opacity: 1, y: 0 },
                                      exit: { opacity: 0, y: -6 },
                                      className: "flex items-center gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium",
                                      "data-ocid": "contact-error-state",
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0" }),
                                        submitError
                                      ]
                                    }
                                  ) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "button",
                                    {
                                      type: "submit",
                                      disabled: isSubmitting,
                                      className: "w-full flex items-center justify-center gap-2 bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors rounded-md px-8 py-3 shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)]",
                                      "data-ocid": "contact-submit",
                                      children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }),
                                        "Sending Message…"
                                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                        "Send Message",
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
                                      ] })
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[#9CA3AF] text-xs pt-1", children: [
                                    "By sending this enquiry, you agree to our",
                                    " ",
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6B7280] cursor-pointer hover:text-[#2563EB] transition-colors", children: "privacy policy." }),
                                    " ",
                                    "Your information is handled with complete confidentiality."
                                  ] })
                                ]
                              }
                            )
                          ]
                        }
                      )
                    },
                    "form"
                  ) })
                }
              )
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "py-24 border-t border-[#E2E8F0] relative overflow-hidden",
            style: { background: "#F8FAFC" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-3xl px-4 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { variant: "fade-up", className: "mb-14 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] uppercase text-[#2563EB] mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-[#2563EB]/30" }),
                  "FAQ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-[#2563EB]/30" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextReveal,
                  {
                    text: "Common Questions",
                    as: "h2",
                    className: "font-black text-4xl sm:text-5xl text-[#1E3A8A] mb-4",
                    staggerMs: 60
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#374151] text-lg max-w-xl mx-auto", children: "Answers to the questions we hear most from brands considering working with us." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "faq-list", children: FAQS.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { q: faq.q, a: faq.a, index: i }, faq.q)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.4, duration: 0.45 },
                  className: "text-center mt-12",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B7280] text-sm mb-4", children: "Didn't find the answer you needed?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://wa.me/918779799255?text=Hi! I have a question about Maverick Digitals.",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-ocid": "faq-whatsapp-cta",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            className: "border border-[#E2E8F0] text-[#1E3A8A] hover:border-[rgba(37,99,235,0.3)] hover:text-[#2563EB] transition-colors rounded-md px-8 py-3 text-sm font-semibold bg-white",
                            children: "Reach Us on WhatsApp"
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
export {
  Contact as default
};
