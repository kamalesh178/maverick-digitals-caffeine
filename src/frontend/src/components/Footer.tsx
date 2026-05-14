import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MapPin, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SERVICES_LINKS = [
  { label: "Content Strategy", href: "/services" },
  { label: "Paid Advertising", href: "/services" },
  { label: "Social Media Management", href: "/services" },
  { label: "Viral Campaigns", href: "/services" },
  { label: "SEO & Growth", href: "/services" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/maverickdigitalsagency/",
    icon: Instagram,
    hoverBg:
      "hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
    hoverText: "hover:text-white",
    hoverBorder: "hover:border-transparent",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/maverick-digitals/",
    icon: Linkedin,
    hoverBg: "hover:bg-[#0A66C2]",
    hoverText: "hover:text-white",
    hoverBorder: "hover:border-transparent",
  },
];

const WHATSAPP_NUMBERS = [
  { label: "+91-8779799255", number: "918779799255" },
  { label: "+91-9619818332", number: "919619818332" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = window.location.hostname;
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gradient rule */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.35) 30%, rgba(59,130,246,0.35) 70%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ─── CTA Banner ─────────────────────────────── */}
      <div className="relative py-24 px-4">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(37,99,235,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="relative container mx-auto max-w-3xl text-center">
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase" as const,
              color: "#2563EB",
              marginBottom: "16px",
              fontWeight: 500,
            }}
          >
            Let's grow together
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 6vw, 60px)",
              fontWeight: 700,
              color: "#1a2332",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Ready to Go <span style={{ color: "#2563EB" }}>Viral?</span>
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: "16px",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}
          >
            Stop waiting while your competitors dominate. Let's build your viral
            growth strategy — starting today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {WHATSAPP_NUMBERS.map(({ label, number }) => (
              <a
                key={number}
                href={`https://wa.me/${number}?text=Hi! I'm interested in Maverick Digitals' services.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "1px solid rgba(37,99,235,0.3)",
                  color: "#2563EB",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "background 0.25s ease, border-color 0.25s ease",
                  background: "rgba(37,99,235,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(37,99,235,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(37,99,235,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(37,99,235,0.05)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(37,99,235,0.3)";
                }}
                data-ocid="footer-whatsapp"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Footer Grid ──────────────────────────── */}
      <div className="relative container mx-auto max-w-7xl px-6 pt-12 pb-14">
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#E2E8F0",
            marginBottom: "48px",
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link
              to="/"
              className="inline-block"
              aria-label="Maverick Digitals home"
            >
              <span
                className="font-display"
                style={{ fontSize: "18px", fontWeight: 700, color: "#1a2332" }}
              >
                Maverick <span style={{ color: "#2563EB" }}>Digitals</span>
              </span>
            </Link>
            <p
              style={{
                color: "#64748B",
                fontSize: "14px",
                lineHeight: 1.7,
              }}
            >
              Mumbai's leading digital marketing agency. We engineer viral
              growth for brands that refuse to be ordinary.
            </p>
            <div
              className="flex items-start gap-2"
              style={{ color: "#64748B", fontSize: "14px" }}
            >
              <MapPin
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{ color: "#2563EB" }}
              />
              <span>Mumbai, Maharashtra, India</span>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(37,99,235,0.05)",
                    border: "1px solid rgba(37,99,235,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6B7280",
                    transition:
                      "background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(37,99,235,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#2563EB";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(37,99,235,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(37,99,235,0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#6B7280";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(37,99,235,0.15)";
                  }}
                  aria-label={label}
                  data-ocid={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: "#1a2332",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#2563EB";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#6B7280";
                    }}
                    data-ocid={`footer-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: "#1a2332",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Services
            </h3>
            <ul className="space-y-3.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#2563EB";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#6B7280";
                    }}
                    data-ocid={`footer-service-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: "#1a2332",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Contact
            </h3>
            <ul className="space-y-3.5">
              {WHATSAPP_NUMBERS.map(({ label, number }) => (
                <li key={number}>
                  <a
                    href={`https://wa.me/${number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      color: "#6B7280",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#2563EB";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#6B7280";
                    }}
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:maverickdigitals18@gmail.com"
                  style={{
                    fontSize: "14px",
                    color: "#6B7280",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    wordBreak: "break-all" as const,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#2563EB";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#6B7280";
                  }}
                >
                  maverickdigitals18@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ───────────────────────────── */}
      <div style={{ borderTop: "1px solid #E2E8F0" }}>
        <div
          className="container mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ fontSize: "12px", color: "#94A3B8" }}
        >
          <span>© {year} Maverick Digitals. All rights reserved.</span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#94A3B8",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#2563EB";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8";
            }}
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
