import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 border-b" : "py-5 border-b border-transparent",
      )}
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.95)"
          : "rgba(10, 10, 10, 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.08)" : "transparent",
      }}
    >
      <div className="container mx-auto px-5 flex items-center justify-between max-w-7xl">
        {/* Logo — left */}
        <Link
          to="/"
          className="flex items-center shrink-0"
          aria-label="Maverick Digitals Home"
          data-ocid="header-logo"
        >
          <img
            src="/assets/images/logo.webp"
            alt="Maverick Digitals"
            className="h-9 w-auto object-contain"
            onError={(e) => {
              const img = e.currentTarget;
              img.style.display = "none";
              const fallback = img.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "block";
            }}
          />
          <span
            className="font-bold text-xl hidden"
            style={{
              display: "none",
              background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Maverick Digitals
          </span>
        </Link>

        {/* Desktop Nav — center */}
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
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive ? "text-white" : "text-white/60 hover:text-white",
                )}
                aria-current={isActive ? "page" : undefined}
                data-ocid={`nav-link-${link.label.toLowerCase()}`}
                style={
                  isActive ? { background: "rgba(124,58,237,0.12)" } : undefined
                }
              >
                <span className="relative z-10">{link.label}</span>
                {/* Active underline */}
                <span
                  className={cn(
                    "absolute bottom-[4px] left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300",
                    isActive
                      ? "w-[60%] opacity-100"
                      : "w-0 opacity-0 group-hover:w-[60%] group-hover:opacity-80",
                  )}
                  style={{
                    background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                  }}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA — right */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={goToContact}
            data-ocid="header-cta"
            className="btn-ripple px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-glow-purple hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          data-ocid="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            className="md:hidden fixed inset-0 z-40 w-full h-full cursor-default"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            tabIndex={-1}
          />

          {/* Panel */}
          <div
            className="md:hidden fixed top-0 left-0 right-0 z-50 flex flex-col border-b"
            style={{
              background: "rgba(10,10,10,0.98)",
              backdropFilter: "blur(24px)",
              borderBottomColor: "rgba(255,255,255,0.08)",
            }}
          >
            {/* Panel header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderBottomColor: "rgba(255,255,255,0.06)" }}
            >
              <Link to="/" onClick={() => setIsOpen(false)} aria-label="Home">
                <img
                  src="/assets/images/logo.webp"
                  alt="Maverick Digitals"
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                  }}
                />
              </Link>
              <button
                type="button"
                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                data-ocid="mobile-menu-close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-4 py-3">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-3.5 rounded-xl font-semibold text-lg transition-colors duration-200",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white hover:bg-white/[0.03]",
                    )}
                    style={
                      isActive
                        ? { background: "rgba(124,58,237,0.1)" }
                        : undefined
                    }
                    onClick={() => setIsOpen(false)}
                    data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #7c3aed, #06b6d4)",
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile CTA */}
            <div className="px-5 pb-6 pt-2">
              <button
                type="button"
                className="w-full btn-ripple py-3.5 rounded-full font-semibold text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                }}
                onClick={() => {
                  setIsOpen(false);
                  goToContact();
                }}
                data-ocid="mobile-cta"
              >
                Get Started
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
