import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        // White premium palette
        "brand-blue": "#2563EB",
        "brand-sky": "#3B82F6",
        "brand-navy": "#1a2332",
        "brand-light": "#EFF6FF",
        // Light backgrounds
        "light-bg": "#FFFFFF",
        "light-secondary": "#F8FAFC",
        "light-card": "#F1F5F9",
        "light-card-hover": "#E2E8F0",
        "light-border": "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        "shadow-subtle": "0 1px 3px oklch(0 0 0 / 0.08)",
        "elevation-sm": "0 2px 8px oklch(0 0 0 / 0.12)",
        "elevation-md": "0 4px 16px oklch(0 0 0 / 0.15)",
        "elevation-lg": "0 8px 32px oklch(0 0 0 / 0.2)",
        "elevation-xl": "0 12px 48px oklch(0 0 0 / 0.25)",
        "glow-cyan": "0 0 24px oklch(0.51 0.21 264 / 0.2), 0 0 48px oklch(0.51 0.21 264 / 0.08)",
        "glow-blue": "0 0 24px oklch(0.51 0.21 264 / 0.28), 0 0 48px oklch(0.51 0.21 264 / 0.12)",
        "glow-violet": "0 0 24px oklch(0.58 0.08 170 / 0.3)",
        "glow-rose": "0 0 24px #f43f5e99",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(16px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          from: { transform: "translateY(-16px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        "aurora": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float-slow": {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(1.5deg)" },
          "100%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        "glow-breathe": {
          "0%, 100%": {
            boxShadow: "0 0 16px oklch(0.32 0.09 250 / 0.2), 0 0 32px oklch(0.32 0.09 250 / 0.08)",
            opacity: "0.9",
          },
          "50%": {
            boxShadow: "0 0 32px oklch(0.32 0.09 250 / 0.5), 0 0 64px oklch(0.32 0.09 250 / 0.25)",
            opacity: "1",
          },
        },
        "slide-up-reveal": {
          "0%": { opacity: "0", transform: "translateY(32px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "shimmer-text": {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "lift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-4px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "counter-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-breathe-opacity": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
        "reveal-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 8s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "reveal-up": "reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "marquee-scroll": "marquee-scroll 40s linear infinite",
        "counter-up": "counter-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "glow-breathe-opacity": "glow-breathe-opacity 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        // New animations
        "aurora": "aurora 12s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite alternate",
        "glow-breathe": "glow-breathe 3s ease-in-out infinite",
        "slide-up-reveal": "slide-up-reveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "shimmer-text": "shimmer-text 4s linear infinite",
        "scale-in": "scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "lift": "lift 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
