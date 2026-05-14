import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 35,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const goToContact = () => void navigate({ to: "/contact" });

  return (
    <header
      data-ocid="header-nav"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent",
        transition:
          "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-[400ms]"
    >
      {/* Blue scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left pointer-events-none z-10"
        style={{ scaleX, background: "#2563EB" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0"
          aria-label="Maverick Digitals Home"
          data-ocid="header-logo"
        >
          <img
            src="/assets/images/logo.webp"
            alt="Maverick Digitals"
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isActive ? "#2563EB" : "#374151",
                  transition: "color 0.2s ease",
                  fontWeight: 400,
                  padding: "6px 16px",
                  position: "relative",
                }}
                className="hover:[color:#2563EB] transition-colors"
                aria-current={isActive ? "page" : undefined}
                data-ocid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "20px",
                      height: "1px",
                      background: "#2563EB",
                      borderRadius: "1px",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={goToContact}
            data-ocid="header-cta"
            style={{
              fontSize: "13px",
              letterSpacing: "0.08em",
              fontWeight: 500,
              padding: "8px 20px",
              borderRadius: "2px",
              border: "1px solid rgba(37,99,235,0.4)",
              color: "#2563EB",
              background: "rgba(37,99,235,0.06)",
              cursor: "pointer",
              transition:
                "background 0.25s ease, border-color 0.25s ease, color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(37,99,235,0.12)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(37,99,235,0.65)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(37,99,235,0.06)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(37,99,235,0.4)";
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          style={{
            color: "#374151",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          data-ocid="mobile-menu-toggle"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                <Menu className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden fixed inset-0 z-40"
              style={{
                background: "rgba(0,0,0,0.25)",
                backdropFilter: "blur(4px)",
              }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key="mobile-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden fixed top-0 left-0 right-0 z-50 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid #E2E8F0",
              }}
              aria-label="Mobile navigation"
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-6 py-5"
                style={{ borderBottom: "1px solid #E2E8F0" }}
              >
                <Link to="/" onClick={() => setIsOpen(false)} aria-label="Home">
                  <img
                    src="/assets/images/logo.webp"
                    alt="Maverick Digitals"
                    className="h-7 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  style={{
                    color: "#64748B",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "6px",
                  }}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  data-ocid="mobile-menu-close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-6 py-6 gap-1">
                {NAV_LINKS.map((link, i) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.04 + i * 0.055,
                        duration: 0.28,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        to={link.href}
                        style={{
                          display: "block",
                          padding: "12px 0",
                          fontSize: "18px",
                          fontWeight: 500,
                          letterSpacing: "0.03em",
                          color: isActive ? "#2563EB" : "#374151",
                          borderBottom: "1px solid #E2E8F0",
                          transition: "color 0.2s ease",
                        }}
                        onClick={() => setIsOpen(false)}
                        data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.34,
                  duration: 0.28,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="px-6 pb-8 pt-2"
              >
                <button
                  type="button"
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    borderRadius: "8px",
                    border: "1px solid rgba(37,99,235,0.35)",
                    color: "#2563EB",
                    background: "rgba(37,99,235,0.06)",
                    fontSize: "14px",
                    letterSpacing: "0.08em",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsOpen(false);
                    goToContact();
                  }}
                  data-ocid="mobile-cta"
                >
                  Get Started
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
