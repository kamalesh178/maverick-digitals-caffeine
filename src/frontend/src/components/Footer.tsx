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
    hoverStyle:
      "hover:bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/maverick-digitals/",
    icon: Linkedin,
    hoverStyle: "hover:bg-[#0A66C2]",
  },
];

const WHATSAPP_NUMBERS = [
  { label: "+91-8779799255", number: "918779799255" },
  { label: "+91-9619818332", number: "919619818332" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Gradient top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.5) 30%, rgba(6,182,212,0.5) 70%, transparent 100%)",
        }}
      />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

      {/* ─── CTA Banner ────────────────────────────── */}
      <div className="relative py-20 px-4">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative container mx-auto max-w-4xl text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "rgba(167,139,250,0.8)" }}
          >
            Let's grow together
          </p>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-[1.1]">
            Ready to Scale Your <span className="gradient-text">Brand?</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
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
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: "1px solid rgba(124,58,237,0.3)",
                  color: "#a78bfa",
                  background: "rgba(124,58,237,0.06)",
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
      <div className="relative container mx-auto max-w-7xl px-5 pt-12 pb-14">
        <div
          className="w-full h-px mb-12"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link
              to="/"
              className="inline-block"
              aria-label="Maverick Digitals home"
            >
              <span className="font-bold text-xl text-white">
                Maverick <span className="gradient-text">Digitals</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Mumbai's leading digital marketing agency. We engineer viral
              growth for brands that refuse to be ordinary.
            </p>
            <div className="flex items-start gap-2 text-white/50 text-sm">
              <MapPin
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{ color: "#a78bfa" }}
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
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  aria-label={label}
                  data-ocid={`footer-social-${label.toLowerCase()}`}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(124,58,237,0.2)";
                    el.style.borderColor = "rgba(124,58,237,0.4)";
                    el.style.color = "#a78bfa";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white/90 text-xs uppercase tracking-[0.15em] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-0 text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    data-ocid={`footer-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#a78bfa";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    <span
                      className="inline-block w-0 group-hover:w-3 overflow-hidden transition-all duration-200 shrink-0"
                      style={{ color: "#a78bfa" }}
                    >
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white/90 text-xs uppercase tracking-[0.15em] mb-6">
              Services
            </h3>
            <ul className="space-y-3.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-0 text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    data-ocid={`footer-service-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#a78bfa";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    <span
                      className="inline-block w-0 group-hover:w-3 overflow-hidden transition-all duration-200 shrink-0"
                      style={{ color: "#a78bfa" }}
                    >
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white/90 text-xs uppercase tracking-[0.15em] mb-6">
              Contact
            </h3>
            <ul className="space-y-3.5">
              {WHATSAPP_NUMBERS.map(({ label, number }) => (
                <li key={number}>
                  <a
                    href={`https://wa.me/${number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#a78bfa";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
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
                  className="text-sm transition-colors duration-200 break-all"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#a78bfa";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  maverickdigitals18@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─────────────────────────── */}
      <div
        className="relative"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="container mx-auto max-w-7xl px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          <span>© {year} Maverick Digitals. All rights reserved.</span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white/60"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
