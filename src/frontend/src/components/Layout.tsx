import { ChatBot } from "@/components/ChatBot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{ background: "#FFFFFF" }}
    >
      {/* Subtle noise texture — gives depth without weight */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
          opacity: 0.4,
        }}
      />
      <Header />
      <main className="relative z-10 flex-1 pt-16">{children}</main>
      <Footer />
      <ChatBot />
    </div>
  );
}
