import { r as reactExports, j as jsxRuntimeExports } from "./index-jpOSPqTZ.js";
import { s as submitContactInquiry } from "./backend-B0hqVQPu.js";
import { m as motion } from "./proxy-B5rRmvmM.js";
import { A as AnimatePresence } from "./index-DfHBeuxA.js";
const SERVICES_OPTIONS = [
  "Social Media Management",
  "Performance Marketing",
  "UGC Content Creation",
  "AI-Powered Strategy",
  "Web & App Development",
  "Brand Management",
  "Custom Software Development"
];
const FAQS = [
  {
    q: "What services does Maverick Digitals offer?",
    a: "We offer social media management, performance marketing (Meta & Google Ads), UGC content creation, AI-powered strategy, web & app development, brand management, and custom software development."
  },
  {
    q: "How quickly can you get started?",
    a: "We typically onboard new clients within 3–5 business days after the initial strategy call."
  },
  {
    q: "Do you work with brands outside India?",
    a: "Yes, we work with brands globally. Our core team is based in Mumbai but we operate across multiple markets."
  },
  {
    q: "What is your minimum engagement?",
    a: "Our minimum engagement is 3 months, as digital marketing results compound over time."
  },
  {
    q: "How do you measure campaign success?",
    a: "We track ROAS, CPM, CTR, follower growth, engagement rate, and custom KPIs specific to each client's goals."
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
          style: {
            background: open ? "#1a1a1a" : "#111111",
            border: `1px solid ${open ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: "12px",
            overflow: "hidden",
            transition: "border-color 0.2s ease, background 0.2s ease"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpen((v) => !v),
                "aria-expanded": open,
                "data-ocid": `faq-item-${index + 1}`,
                style: {
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "20px 24px",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  zIndex: 1,
                  pointerEvents: "auto"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        fontWeight: 700,
                        fontSize: "15px",
                        color: open ? "#a78bfa" : "#ffffff",
                        transition: "color 0.2s ease",
                        lineHeight: 1.4
                      },
                      children: q
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        background: open ? "linear-gradient(135deg, #7c3aed, #06b6d4)" : "rgba(255,255,255,0.08)",
                        color: "white",
                        transition: "transform 0.3s ease, background 0.2s ease",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: 2.5,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 9l6 6 6-6" })
                        }
                      )
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
                style: { overflow: "hidden" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      padding: "0 24px 20px",
                      borderTop: "1px solid rgba(255,255,255,0.06)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "14px",
                          lineHeight: 1.7,
                          marginTop: "16px"
                        },
                        children: a
                      }
                    )
                  }
                )
              },
              "answer"
            ) })
          ]
        }
      )
    }
  );
}
const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "15px",
  fontFamily: "Inter, sans-serif",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  position: "relative",
  zIndex: 10,
  pointerEvents: "auto",
  cursor: "text",
  boxSizing: "border-box"
};
const inputErrorStyle = {
  ...inputStyle,
  border: "1px solid rgba(239,68,68,0.7)"
};
function Contact() {
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const [errors, setErrors] = reactExports.useState({});
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState("");
  const [focusedField, setFocusedField] = reactExports.useState(null);
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
  const getFocusStyle = (field) => ({
    borderColor: focusedField === field ? "rgba(124,58,237,0.6)" : void 0,
    boxShadow: focusedField === field ? "0 0 0 3px rgba(124,58,237,0.15)" : void 0
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: { minHeight: "100vh", background: "#0a0a0a", color: "#ffffff" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            style: {
              position: "relative",
              paddingTop: "120px",
              paddingBottom: "64px",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    pointerEvents: "none",
                    opacity: 0.6
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "10%",
                    left: "25%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "rgba(124,58,237,0.08)",
                    filter: "blur(120px)",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: "0",
                    right: "20%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "rgba(6,182,212,0.06)",
                    filter: "blur(100px)",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    maxWidth: "960px",
                    margin: "0 auto",
                    padding: "0 24px",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginBottom: "20px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              display: "inline-block",
                              padding: "6px 16px",
                              borderRadius: "100px",
                              border: "1px solid rgba(124,58,237,0.3)",
                              background: "rgba(124,58,237,0.1)",
                              fontSize: "11px",
                              fontWeight: 700,
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: "#a78bfa"
                            },
                            children: "Contact"
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "h1",
                          {
                            style: {
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 900,
                              fontSize: "clamp(48px, 7vw, 84px)",
                              lineHeight: 1,
                              letterSpacing: "-0.02em",
                              marginBottom: "24px"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#ffffff" }, children: "Let's " }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                  },
                                  children: "Work Together"
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            style: {
                              color: "rgba(255,255,255,0.6)",
                              fontSize: "18px",
                              maxWidth: "560px",
                              margin: "0 auto",
                              lineHeight: 1.7
                            },
                            children: "Ready to scale your brand? Drop us a message and we'll be in touch within 24 hours."
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { padding: "48px 0 80px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0 24px",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "40px",
              alignItems: "start"
            },
            className: "contact-grid",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -24 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                  style: { display: "flex", flexDirection: "column", gap: "16px" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          background: "#111",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "16px",
                          padding: "24px"
                        },
                        "data-ocid": "contact-whatsapp-card",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "12px"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    style: {
                                      width: "36px",
                                      height: "36px",
                                      borderRadius: "50%",
                                      background: "linear-gradient(135deg, #22c55e, #16a34a)",
                                      flexShrink: 0
                                    }
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "h3",
                                  {
                                    style: {
                                      fontWeight: 700,
                                      fontSize: "15px",
                                      color: "#ffffff",
                                      margin: 0
                                    },
                                    children: "WhatsApp Us"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                color: "rgba(255,255,255,0.6)",
                                fontSize: "14px",
                                marginBottom: "4px"
                              },
                              children: "+91 87797 99255"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                color: "rgba(255,255,255,0.6)",
                                fontSize: "14px",
                                marginBottom: "16px"
                              },
                              children: "+91 96198 18332"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: "https://wa.me/918779799255?text=Hi! I'm interested in Maverick Digitals' services.",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              "data-ocid": "contact-wa-cta",
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#4ade80",
                                textDecoration: "none",
                                transition: "opacity 0.2s ease"
                              },
                              children: "Send Message →"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          background: "#111",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "16px",
                          padding: "24px"
                        },
                        "data-ocid": "contact-email-card",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              style: {
                                fontWeight: 700,
                                fontSize: "15px",
                                color: "#ffffff",
                                marginBottom: "8px"
                              },
                              children: "Email Us"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              style: {
                                color: "rgba(255,255,255,0.6)",
                                fontSize: "14px",
                                marginBottom: "12px"
                              },
                              children: "maverickdigitals18@gmail.com"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: "mailto:maverickdigitals18@gmail.com",
                              "data-ocid": "contact-email-link",
                              style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#a78bfa",
                                textDecoration: "none"
                              },
                              children: "Send Email →"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          background: "#111",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "16px",
                          padding: "24px"
                        },
                        "data-ocid": "contact-location-card",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              style: {
                                fontWeight: 700,
                                fontSize: "15px",
                                color: "#ffffff",
                                marginBottom: "8px"
                              },
                              children: "Location"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "rgba(255,255,255,0.6)", fontSize: "14px" }, children: "Mumbai, Maharashtra, India" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        style: {
                          background: "#111",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "16px",
                          padding: "24px"
                        },
                        "data-ocid": "contact-social-card",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              style: {
                                fontWeight: 700,
                                fontSize: "15px",
                                color: "#ffffff",
                                marginBottom: "16px"
                              },
                              children: "Follow Us"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "a",
                                  {
                                    href: "https://www.instagram.com/maverickdigitalsagency/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "data-ocid": "social-instagram",
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      padding: "10px 14px",
                                      borderRadius: "10px",
                                      background: "rgba(255,255,255,0.04)",
                                      border: "1px solid rgba(255,255,255,0.06)",
                                      textDecoration: "none",
                                      transition: "border-color 0.2s ease"
                                    },
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "div",
                                          {
                                            style: {
                                              fontWeight: 600,
                                              fontSize: "13px",
                                              color: "#ffffff"
                                            },
                                            children: "Instagram"
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "div",
                                          {
                                            style: {
                                              fontSize: "12px",
                                              color: "rgba(255,255,255,0.5)",
                                              marginTop: "2px"
                                            },
                                            children: "@maverickdigitalsagency"
                                          }
                                        )
                                      ] }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "svg",
                                        {
                                          width: "14",
                                          height: "14",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          stroke: "rgba(255,255,255,0.4)",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          "aria-hidden": "true",
                                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 17L17 7M17 7H7M17 7v10" })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "a",
                                  {
                                    href: "https://www.linkedin.com/company/maverick-digitals/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "data-ocid": "social-linkedin",
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      padding: "10px 14px",
                                      borderRadius: "10px",
                                      background: "rgba(255,255,255,0.04)",
                                      border: "1px solid rgba(255,255,255,0.06)",
                                      textDecoration: "none",
                                      transition: "border-color 0.2s ease"
                                    },
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "div",
                                          {
                                            style: {
                                              fontWeight: 600,
                                              fontSize: "13px",
                                              color: "#ffffff"
                                            },
                                            children: "LinkedIn"
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "div",
                                          {
                                            style: {
                                              fontSize: "12px",
                                              color: "rgba(255,255,255,0.5)",
                                              marginTop: "2px"
                                            },
                                            children: "Maverick Digitals"
                                          }
                                        )
                                      ] }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "svg",
                                        {
                                          width: "14",
                                          height: "14",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          stroke: "rgba(255,255,255,0.4)",
                                          strokeWidth: 2,
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          "aria-hidden": "true",
                                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 17L17 7M17 7H7M17 7v10" })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 24 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.97 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.97 },
                      transition: { duration: 0.35 },
                      style: {
                        background: "#111",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                        padding: "64px 40px",
                        textAlign: "center"
                      },
                      "data-ocid": "contact-success-state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              width: "72px",
                              height: "72px",
                              borderRadius: "50%",
                              background: "linear-gradient(135deg, #4ade80, #06b6d4)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: "0 auto 24px",
                              boxShadow: "0 0 32px rgba(74,222,128,0.25)"
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "svg",
                              {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "white",
                                strokeWidth: 2.5,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" })
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            style: {
                              fontWeight: 800,
                              fontSize: "28px",
                              marginBottom: "12px",
                              background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                              WebkitBackgroundClip: "text",
                              backgroundClip: "text",
                              WebkitTextFillColor: "transparent"
                            },
                            children: "Message Sent!"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            style: {
                              color: "rgba(255,255,255,0.6)",
                              fontSize: "15px",
                              lineHeight: 1.7,
                              maxWidth: "360px",
                              margin: "0 auto 32px"
                            },
                            children: [
                              "Our team will get back to you within",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#ffffff" }, children: "24 hours" }),
                              ". Can't wait? Chat with us on WhatsApp."
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              gap: "12px",
                              justifyContent: "center",
                              flexWrap: "wrap"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => setIsSubmitted(false),
                                  "data-ocid": "contact-send-another",
                                  style: {
                                    padding: "12px 24px",
                                    borderRadius: "8px",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    background: "transparent",
                                    color: "#ffffff",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "border-color 0.2s ease",
                                    pointerEvents: "auto",
                                    position: "relative",
                                    zIndex: 1
                                  },
                                  children: "Send Another Message"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "a",
                                {
                                  href: "https://wa.me/918779799255",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  "data-ocid": "contact-success-whatsapp",
                                  style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "12px 24px",
                                    borderRadius: "8px",
                                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                                    color: "#ffffff",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    pointerEvents: "auto"
                                  },
                                  children: "WhatsApp Us"
                                }
                              )
                            ]
                          }
                        )
                      ]
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
                          style: {
                            background: "#111",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "16px",
                            padding: "40px"
                          },
                          "data-ocid": "contact-form-card",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "32px" }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "h2",
                                {
                                  style: {
                                    fontWeight: 700,
                                    fontSize: "24px",
                                    color: "#ffffff",
                                    marginBottom: "8px"
                                  },
                                  children: "Send Us a Message"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  style: {
                                    color: "rgba(255,255,255,0.5)",
                                    fontSize: "14px"
                                  },
                                  children: "Fill in the form below and we'll be in touch shortly."
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  style: {
                                    marginTop: "20px",
                                    height: "1px",
                                    background: "linear-gradient(90deg, rgba(124,58,237,0.3), rgba(6,182,212,0.3), transparent)"
                                  }
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "form",
                              {
                                onSubmit: handleSubmit,
                                noValidate: true,
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "20px"
                                },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "16px"
                                      },
                                      className: "form-row",
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            style: {
                                              display: "flex",
                                              flexDirection: "column",
                                              gap: "8px"
                                            },
                                            children: [
                                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                                "label",
                                                {
                                                  htmlFor: "name",
                                                  style: {
                                                    fontSize: "12px",
                                                    fontWeight: 700,
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase",
                                                    color: "rgba(255,255,255,0.5)"
                                                  },
                                                  children: [
                                                    "Full Name",
                                                    " ",
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f87171" }, children: "*" })
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                "input",
                                                {
                                                  id: "name",
                                                  name: "name",
                                                  type: "text",
                                                  value: form.name,
                                                  onChange: handleChange,
                                                  onFocus: () => setFocusedField("name"),
                                                  onBlur: () => setFocusedField(null),
                                                  placeholder: "Your full name",
                                                  autoComplete: "name",
                                                  "data-ocid": "contact-name",
                                                  style: {
                                                    ...errors.name ? inputErrorStyle : inputStyle,
                                                    ...getFocusStyle("name")
                                                  }
                                                }
                                              ),
                                              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                "span",
                                                {
                                                  "data-ocid": "name-field-error",
                                                  style: {
                                                    color: "#f87171",
                                                    fontSize: "12px",
                                                    fontWeight: 500
                                                  },
                                                  children: errors.name
                                                }
                                              )
                                            ]
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            style: {
                                              display: "flex",
                                              flexDirection: "column",
                                              gap: "8px"
                                            },
                                            children: [
                                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                                "label",
                                                {
                                                  htmlFor: "email",
                                                  style: {
                                                    fontSize: "12px",
                                                    fontWeight: 700,
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase",
                                                    color: "rgba(255,255,255,0.5)"
                                                  },
                                                  children: [
                                                    "Email Address",
                                                    " ",
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f87171" }, children: "*" })
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                "input",
                                                {
                                                  id: "email",
                                                  name: "email",
                                                  type: "email",
                                                  value: form.email,
                                                  onChange: handleChange,
                                                  onFocus: () => setFocusedField("email"),
                                                  onBlur: () => setFocusedField(null),
                                                  placeholder: "your@email.com",
                                                  autoComplete: "email",
                                                  "data-ocid": "contact-email",
                                                  style: {
                                                    ...errors.email ? inputErrorStyle : inputStyle,
                                                    ...getFocusStyle("email")
                                                  }
                                                }
                                              ),
                                              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                "span",
                                                {
                                                  "data-ocid": "email-field-error",
                                                  style: {
                                                    color: "#f87171",
                                                    fontSize: "12px",
                                                    fontWeight: 500
                                                  },
                                                  children: errors.email
                                                }
                                              )
                                            ]
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "16px"
                                      },
                                      className: "form-row",
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            style: {
                                              display: "flex",
                                              flexDirection: "column",
                                              gap: "8px"
                                            },
                                            children: [
                                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                "label",
                                                {
                                                  htmlFor: "phone",
                                                  style: {
                                                    fontSize: "12px",
                                                    fontWeight: 700,
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase",
                                                    color: "rgba(255,255,255,0.5)"
                                                  },
                                                  children: "Phone Number"
                                                }
                                              ),
                                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                "input",
                                                {
                                                  id: "phone",
                                                  name: "phone",
                                                  type: "tel",
                                                  value: form.phone,
                                                  onChange: handleChange,
                                                  onFocus: () => setFocusedField("phone"),
                                                  onBlur: () => setFocusedField(null),
                                                  placeholder: "+91 XXXXXXXXXX",
                                                  autoComplete: "tel",
                                                  "data-ocid": "contact-phone",
                                                  style: { ...inputStyle, ...getFocusStyle("phone") }
                                                }
                                              )
                                            ]
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            style: {
                                              display: "flex",
                                              flexDirection: "column",
                                              gap: "8px"
                                            },
                                            children: [
                                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                                "label",
                                                {
                                                  htmlFor: "company",
                                                  style: {
                                                    fontSize: "12px",
                                                    fontWeight: 700,
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase",
                                                    color: "rgba(255,255,255,0.5)"
                                                  },
                                                  children: [
                                                    "Company",
                                                    " ",
                                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        style: {
                                                          color: "rgba(255,255,255,0.3)",
                                                          fontWeight: 400
                                                        },
                                                        children: "(optional)"
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                "input",
                                                {
                                                  id: "company",
                                                  name: "company",
                                                  type: "text",
                                                  value: form.company,
                                                  onChange: handleChange,
                                                  onFocus: () => setFocusedField("company"),
                                                  onBlur: () => setFocusedField(null),
                                                  placeholder: "Your company name",
                                                  autoComplete: "organization",
                                                  "data-ocid": "contact-company",
                                                  style: {
                                                    ...inputStyle,
                                                    ...getFocusStyle("company")
                                                  }
                                                }
                                              )
                                            ]
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px"
                                      },
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "label",
                                          {
                                            htmlFor: "service",
                                            style: {
                                              fontSize: "12px",
                                              fontWeight: 700,
                                              letterSpacing: "0.1em",
                                              textTransform: "uppercase",
                                              color: "rgba(255,255,255,0.5)"
                                            },
                                            children: "Service Interested In"
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
                                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                            "select",
                                            {
                                              id: "service",
                                              name: "service",
                                              value: form.service,
                                              onChange: handleChange,
                                              onFocus: () => setFocusedField("service"),
                                              onBlur: () => setFocusedField(null),
                                              "data-ocid": "contact-service",
                                              style: {
                                                ...inputStyle,
                                                cursor: "pointer",
                                                paddingRight: "40px",
                                                appearance: "none",
                                                WebkitAppearance: "none",
                                                ...getFocusStyle("service")
                                              },
                                              children: [
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", style: { background: "#1a1a1a" }, children: "— Select a service —" }),
                                                SERVICES_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                  "option",
                                                  {
                                                    value: s,
                                                    style: { background: "#1a1a1a" },
                                                    children: s
                                                  },
                                                  s
                                                ))
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                                            "div",
                                            {
                                              style: {
                                                position: "absolute",
                                                right: "12px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                pointerEvents: "none",
                                                color: "rgba(255,255,255,0.4)"
                                              },
                                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                                "svg",
                                                {
                                                  width: "16",
                                                  height: "16",
                                                  viewBox: "0 0 24 24",
                                                  fill: "none",
                                                  stroke: "currentColor",
                                                  strokeWidth: 2,
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  "aria-hidden": "true",
                                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 9l6 6 6-6" })
                                                }
                                              )
                                            }
                                          )
                                        ] })
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px"
                                      },
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                          "label",
                                          {
                                            htmlFor: "message",
                                            style: {
                                              fontSize: "12px",
                                              fontWeight: 700,
                                              letterSpacing: "0.1em",
                                              textTransform: "uppercase",
                                              color: "rgba(255,255,255,0.5)"
                                            },
                                            children: [
                                              "Message ",
                                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f87171" }, children: "*" })
                                            ]
                                          }
                                        ),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "textarea",
                                          {
                                            id: "message",
                                            name: "message",
                                            rows: 5,
                                            value: form.message,
                                            onChange: handleChange,
                                            onFocus: () => setFocusedField("message"),
                                            onBlur: () => setFocusedField(null),
                                            placeholder: "Tell us about your project...",
                                            "data-ocid": "contact-message",
                                            style: {
                                              ...errors.message ? inputErrorStyle : inputStyle,
                                              ...getFocusStyle("message"),
                                              resize: "none",
                                              cursor: "text"
                                            }
                                          }
                                        ),
                                        errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "span",
                                          {
                                            "data-ocid": "message-field-error",
                                            style: {
                                              color: "#f87171",
                                              fontSize: "12px",
                                              fontWeight: 500
                                            },
                                            children: errors.message
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: submitError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    motion.div,
                                    {
                                      initial: { opacity: 0, y: -6 },
                                      animate: { opacity: 1, y: 0 },
                                      exit: { opacity: 0, y: -6 },
                                      "data-ocid": "contact-error-state",
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        padding: "14px 16px",
                                        borderRadius: "8px",
                                        background: "rgba(239,68,68,0.08)",
                                        border: "1px solid rgba(239,68,68,0.25)",
                                        color: "#f87171",
                                        fontSize: "14px",
                                        fontWeight: 500
                                      },
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                          "svg",
                                          {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            "aria-hidden": "true",
                                            children: [
                                              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                                              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                                              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
                                            ]
                                          }
                                        ),
                                        submitError
                                      ]
                                    }
                                  ) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "button",
                                    {
                                      type: "submit",
                                      disabled: isSubmitting,
                                      "data-ocid": "contact-submit",
                                      style: {
                                        width: "100%",
                                        padding: "14px",
                                        borderRadius: "8px",
                                        border: "none",
                                        background: isSubmitting ? "rgba(124,58,237,0.5)" : "linear-gradient(135deg, #7c3aed, #06b6d4)",
                                        color: "#ffffff",
                                        fontSize: "16px",
                                        fontWeight: 700,
                                        cursor: isSubmitting ? "not-allowed" : "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "10px",
                                        transition: "opacity 0.2s ease, box-shadow 0.2s ease",
                                        position: "relative",
                                        zIndex: 1,
                                        pointerEvents: "auto"
                                      },
                                      onMouseEnter: (e) => {
                                        if (!isSubmitting)
                                          e.currentTarget.style.boxShadow = "0 0 32px rgba(124,58,237,0.45)";
                                      },
                                      onMouseLeave: (e) => {
                                        e.currentTarget.style.boxShadow = "none";
                                      },
                                      children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                                          "svg",
                                          {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            "aria-hidden": "true",
                                            style: { animation: "spin 1s linear infinite" },
                                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 12a9 9 0 11-6.219-8.56" })
                                          }
                                        ),
                                        "Sending Message…"
                                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                        "Send Message",
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                          "svg",
                                          {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            "aria-hidden": "true",
                                            children: [
                                              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
                                              /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
                                            ]
                                          }
                                        )
                                      ] })
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "p",
                                    {
                                      style: {
                                        textAlign: "center",
                                        color: "rgba(255,255,255,0.35)",
                                        fontSize: "12px",
                                        marginTop: "4px"
                                      },
                                      children: "By submitting, you agree to our privacy policy. We never share your data."
                                    }
                                  )
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
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            style: {
              padding: "80px 0",
              borderTop: "1px solid rgba(255,255,255,0.06)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "720px", margin: "0 auto", padding: "0 24px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
                  style: { textAlign: "center", marginBottom: "48px" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          display: "inline-block",
                          padding: "5px 14px",
                          borderRadius: "100px",
                          border: "1px solid rgba(124,58,237,0.3)",
                          background: "rgba(124,58,237,0.08)",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "#a78bfa",
                          marginBottom: "16px"
                        },
                        children: "FAQ"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "h2",
                      {
                        style: {
                          fontWeight: 800,
                          fontSize: "clamp(28px, 4vw, 40px)",
                          color: "#ffffff",
                          letterSpacing: "-0.02em"
                        },
                        children: [
                          "Frequently Asked",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              style: {
                                background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                              },
                              children: "Questions"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: { display: "flex", flexDirection: "column", gap: "10px" },
                  "data-ocid": "faq-list",
                  children: FAQS.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { q: faq.q, a: faq.a, index: i }, faq.q))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: 0.4, duration: 0.45 },
                  style: { textAlign: "center", marginTop: "48px" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        style: {
                          color: "rgba(255,255,255,0.5)",
                          fontSize: "14px",
                          marginBottom: "16px"
                        },
                        children: "Still have questions?"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://wa.me/918779799255?text=Hi! I have a question about Maverick Digitals.",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-ocid": "faq-whatsapp-cta",
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "12px 28px",
                          borderRadius: "8px",
                          border: "1px solid rgba(124,58,237,0.35)",
                          background: "rgba(124,58,237,0.08)",
                          color: "#a78bfa",
                          fontSize: "14px",
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "border-color 0.2s ease, background 0.2s ease",
                          pointerEvents: "auto"
                        },
                        children: "Ask on WhatsApp"
                      }
                    )
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      ` })
      ]
    }
  );
}
export {
  Contact as default
};
