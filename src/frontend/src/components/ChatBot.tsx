import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  id: number;
  role: "user" | "bot";
  text: string;
}

const WELCOME: Message = {
  id: 0,
  role: "bot",
  text: "Hi! I'm the Maverick Digitals assistant. Ask me anything about our services, the team, or digital marketing!",
};

// ─── Local knowledge base & rule-based engine ─────────────────────────────────

type Rule = { patterns: RegExp[]; response: string };

const RULES: Rule[] = [
  {
    patterns: [
      /\bwhat.*maverick\b/i,
      /\babout.*maverick\b/i,
      /\bwho.*you\b/i,
      /\bwhat.*company\b/i,
      /\btell me about\b/i,
      /\bintroduce\b/i,
    ],
    response:
      "Maverick Digitals is a full-service digital marketing agency founded in 2024, based in Mumbai, India. We help brands crack the Instagram algorithm, dominate LinkedIn growth, and run high-converting performance ads \u2014 powered by AI, UGC content, and data-driven strategies. We've driven 10M+ views and scaled 35+ brands.",
  },
  {
    patterns: [
      /\bservice/i,
      /\bwhat.*offer/i,
      /\bwhat.*do.*you.*do/i,
      /\bspeciali/i,
    ],
    response:
      "We offer 7 core services:\n1. Social Media Management \u2014 strategy, content calendar & engagement\n2. Performance Marketing \u2014 Facebook, Instagram, LinkedIn & Google Ads\n3. Website Design & Development \u2014 custom sites & landing pages\n4. Custom Software Development \u2014 mobile apps & custom tools\n5. Brand Management \u2014 identity, positioning & visual consistency\n6. AI-Powered Marketing Tools \u2014 AI tools built for founders & D2C brands\n7. UGC Content Creation \u2014 user-generated content strategy\n\nWant details on any specific service?",
  },
  {
    patterns: [
      /\bsocial media\b/i,
      /\binstagram manag/i,
      /\blinkedin manag/i,
      /\bcontent.*calendar/i,
      /\bpost.*manag/i,
    ],
    response:
      "Our Social Media Management service covers everything from building a custom content strategy and content calendar to daily posting, community engagement, hashtag research, and monthly performance reporting. We specialise in Instagram and LinkedIn growth that drives real business results.",
  },
  {
    patterns: [
      /\bperformance.*market/i,
      /\bads\b/i,
      /\bfacebook.*ad/i,
      /\bgoogle.*ad/i,
      /\bpaid.*ad/i,
      /\bppc\b/i,
      /\broas\b/i,
    ],
    response:
      "Our Performance Marketing team runs high-converting ad campaigns across Facebook, Instagram, LinkedIn, and Google. We handle audience research, creative strategy, A/B testing, budget optimisation, and detailed ROI reporting \u2014 all aimed at maximising your ROAS.",
  },
  {
    patterns: [
      /\bwebsite\b/i,
      /\bweb.*design\b/i,
      /\bweb.*dev/i,
      /\blanding.*page/i,
      /\bweb.*build/i,
    ],
    response:
      "We build custom websites and high-converting landing pages tailored to your brand. Our web team handles UI/UX design, development, mobile responsiveness, SEO-readiness, and performance optimisation \u2014 all delivered with a fast turnaround.",
  },
  {
    patterns: [
      /\bsoftware\b/i,
      /\bmobile.*app\b/i,
      /\bapp.*dev/i,
      /\bcustom.*tool/i,
      /\bsaas\b/i,
    ],
    response:
      "Our Custom Software Development service covers mobile app development (iOS & Android), custom SaaS tools, internal dashboards, and automation workflows. We build scalable, clean-code solutions tailored to your business processes.",
  },
  {
    patterns: [
      /\bbrand.*manag/i,
      /\bbrand.*identity/i,
      /\bvisual.*identity/i,
      /\blogo/i,
      /\bbranding\b/i,
      /\bposition/i,
    ],
    response:
      "Our Brand Management service helps you build and maintain a consistent, memorable brand identity \u2014 from logo design and colour palettes to tone of voice, brand guidelines, and visual consistency across all touchpoints.",
  },
  {
    patterns: [
      /\bai.*tool/i,
      /\bartificial.*intel/i,
      /\bai.*market/i,
      /\bmachine.*learn/i,
      /\bautomation\b/i,
    ],
    response:
      "We're building an AI-powered vertical with tools specifically for founders, agency owners, and D2C brands. These tools leverage AI to streamline content creation, audience targeting, campaign optimisation, and growth analytics \u2014 giving you an unfair advantage.",
  },
  {
    patterns: [
      /\bugc\b/i,
      /\buser.*generat/i,
      /\bcreator.*content/i,
      /\binfluencer/i,
    ],
    response:
      "Our UGC Content Creation service helps brands leverage authentic user-generated content to build trust and drive conversions. We manage creator sourcing, brief creation, content review, and distribution strategy \u2014 so your brand story is told by real people.",
  },
  {
    patterns: [
      /\bmuskan\b/i,
      /\bceo\b/i,
      /\bfounder.*muskan/i,
      /\bmuskan.*rathod/i,
    ],
    response:
      "Muskan Rathod is the Co-Founder & CEO of Maverick Digitals. She specialises in scaling brands through data-driven digital marketing and has delivered 10M+ views and scaled 35+ brands. She's also building an AI-powered vertical for founders and D2C brands, and has grown her own LinkedIn following by 26K in under 8 months.",
  },
  {
    patterns: [/\bdhaval\b/i, /\bdhaval.*shah/i, /\bshah\b/i],
    response:
      "Dhaval Shah is the Co-Founder of Maverick Digitals. Together with Muskan, he drives the agency's vision of helping brands grow through smart digital strategies, performance marketing, and cutting-edge technology.",
  },
  {
    patterns: [
      /\bteam\b/i,
      /\bfounder/i,
      /\bwho.*behind/i,
      /\bwho.*runs/i,
      /\bstaff\b/i,
      /\bpeople\b/i,
    ],
    response:
      "Maverick Digitals was founded by two passionate entrepreneurs:\n\n\u2022 Muskan Rathod \u2014 Co-Founder & CEO, data-driven marketing strategist, 10M+ views, 35+ brands scaled\n\u2022 Dhaval Shah \u2014 Co-Founder, technology and growth strategist\n\nBoth are based in Mumbai and deeply invested in helping brands grow.",
  },
  {
    patterns: [
      /\bpric/i,
      /\bcost\b/i,
      /\bhow.*much/i,
      /\bpackage/i,
      /\bplan\b.*price/i,
      /\bquote\b/i,
      /\bbud/i,
    ],
    response:
      "Pricing depends on your goals, business size, and the services you need. We offer customised packages tailored to each client. For a personalised quote, reach out to us at maverickdigitals18@gmail.com or send us a message on Instagram. We'd love to chat!",
  },
  {
    patterns: [
      /\bcontact\b/i,
      /\breach.*out/i,
      /\bget.*touch/i,
      /\bemail\b/i,
      /\bhow.*contact/i,
      /\bwhatsapp\b/i,
      /\bcall\b/i,
    ],
    response:
      "You can reach Maverick Digitals through:\n\n\ud83d\udce7 Email: maverickdigitals18@gmail.com\n\ud83d\udcf8 Instagram: @maverickdigitalsagency\n\ud83d\udcbc LinkedIn: linkedin.com/company/maverick-digitals\n\nWe typically respond within 24 hours. Feel free to drop us a message!",
  },
  {
    patterns: [
      /\binstagram\b/i,
      /\bsocial.*link/i,
      /\b@maverick/i,
      /\bfollow\b/i,
    ],
    response:
      "You can find us on Instagram at @maverickdigitalsagency \u2014 follow us for digital marketing tips, behind-the-scenes content, and brand growth insights!",
  },
  {
    patterns: [/\blinkedin\b/i, /\blinked.*in\b/i],
    response:
      "Find us on LinkedIn at linkedin.com/company/maverick-digitals \u2014 connect with us to stay updated on our latest insights, team news, and industry trends.",
  },
  {
    patterns: [
      /\bwhere.*located\b/i,
      /\bcity\b/i,
      /\bmumbai\b/i,
      /\blocation\b/i,
      /\boffice\b/i,
      /\bindia\b/i,
    ],
    response:
      "Maverick Digitals is headquartered in Mumbai, Maharashtra, India. We work with brands across India and internationally, primarily operating remotely so we can partner with clients anywhere.",
  },
  {
    patterns: [
      /\bfounded\b/i,
      /\bstart.*when\b/i,
      /\bwhen.*start/i,
      /\bhow.*old\b/i,
      /\bhistory\b/i,
      /\b2024\b/i,
    ],
    response:
      "Maverick Digitals was founded in 2024 by Muskan Rathod and Dhaval Shah in Mumbai. In a short time, we've already driven 10M+ views and scaled 35+ brands \u2014 and we're just getting started!",
  },
  {
    patterns: [
      /\bresult\b/i,
      /\bachiev/i,
      /\bstat/i,
      /\bsuccess/i,
      /\b10m\b/i,
      /\b35.*brand/i,
      /\btrack.*record/i,
    ],
    response:
      "Our results speak for themselves:\n\n\ud83d\udcc8 10M+ Views generated for clients\n\ud83c\udfc6 35+ Brands scaled\n\ud83d\udcc5 Founded in 2024\n\ud83c\udfd9\ufe0f Based in Mumbai, India\n\nWe're a young but fast-moving agency with a proven track record.",
  },
  {
    patterns: [
      /\bdigital.*market.*tip/i,
      /\badvice\b/i,
      /\bhow.*grow/i,
      /\bgrow.*instagram/i,
      /\bgrow.*social/i,
      /\bgrow.*brand/i,
    ],
    response:
      "Here are 3 top digital marketing tips:\n\n1\ufe0f\u20e3 Consistency beats virality \u2014 post regularly with a clear content strategy\n2\ufe0f\u20e3 Data drives decisions \u2014 track your metrics and optimise weekly\n3\ufe0f\u20e3 Authentic content wins \u2014 UGC and real stories convert better than polished ads\n\nWant us to help you implement these for your brand? Get in touch!",
  },
  {
    patterns: [
      /\bget.*start/i,
      /\bhow.*work/i,
      /\bprocess\b/i,
      /\bnext.*step/i,
      /\bwork.*together/i,
      /\bhire/i,
      /\bonboard/i,
    ],
    response:
      "Getting started with Maverick Digitals is simple:\n\n1. Reach out at maverickdigitals18@gmail.com or via our Contact page\n2. We'll schedule a discovery call to understand your goals\n3. We'll propose a tailored strategy and package\n4. Once aligned, we kick off within days\n\nWe'd love to help scale your brand!",
  },
  {
    patterns: [
      /^hi$/i,
      /^hello$/i,
      /^hey$/i,
      /\bhi\b/i,
      /\bhello\b/i,
      /\bhey\b/i,
      /\bhowdy\b/i,
      /\bgreet/i,
    ],
    response:
      "Hey there! \ud83d\udc4b Welcome to Maverick Digitals. I'm here to help you learn about our services, the team, or anything digital marketing related. What would you like to know?",
  },
  {
    patterns: [
      /\bthank/i,
      /\bthanks/i,
      /\bthx/i,
      /\bappreciat/i,
      /\bawesome/i,
      /\bgreat\b/i,
      /\bperfect\b/i,
      /\bwonderful/i,
    ],
    response:
      "You're welcome! \ud83d\ude0a Is there anything else I can help you with? Feel free to ask about our services, team, or how to get started.",
  },
  {
    patterns: [/\bbye\b/i, /\bgoodbye\b/i, /\bsee.*later/i, /\btake.*care/i],
    response:
      "Goodbye! \ud83d\udc4b Don't hesitate to come back if you have more questions. You can also reach us at maverickdigitals18@gmail.com anytime. Have a great day!",
  },
];

const FALLBACK =
  "That's a great question! For the most accurate answer, I'd recommend reaching out directly to our team at maverickdigitals18@gmail.com or messaging us on Instagram @maverickdigitalsagency. We're happy to help!";

function getLocalResponse(userText: string): string {
  const text = userText.trim();
  for (const rule of RULES) {
    for (const pattern of rule.patterns) {
      if (pattern.test(text)) {
        return rule.response;
      }
    }
  }
  return FALLBACK;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChatBubbleIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

// ─── TypingIndicator ──────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5 mb-3">
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "#2563EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: 13,
            color: "#FFFFFF",
            fontWeight: 800,
          }}
        >
          M
        </span>
      </div>
      <div
        style={{
          background: "#F0F4FF",
          border: "1px solid #E2E8F0",
          borderRadius: "18px 18px 18px 4px",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
        data-ocid="chatbot.loading_state"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "rgba(37,99,235,0.55)",
              display: "inline-block",
              animation: "chatbot-dot-bounce 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.18}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── ChatBot ──────────────────────────────────────────────────────────────────

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  // Scroll to bottom when messages or typing state changes
  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [open]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = { id: nextId.current++, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay (600-900ms) for a natural feel
    const delay = 600 + Math.random() * 300;
    setTimeout(() => {
      const responseText = getLocalResponse(text);
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, role: "bot", text: responseText },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Keyframe injection */}
      <style>{`
        @keyframes chatbot-dot-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            data-ocid="chatbot.dialog"
            style={{
              position: "fixed",
              bottom: "calc(56px + 24px + 16px)",
              right: 24,
              width: "min(350px, 90vw)",
              height: 450,
              borderRadius: 20,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              zIndex: 9999,
              pointerEvents: "all",
              boxShadow:
                "0 8px 40px rgba(37,99,235,0.15), 0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px #E2E8F0",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "#2563EB",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontFamily: "var(--font-display)",
                    flexShrink: 0,
                  }}
                >
                  M
                </div>
                <div>
                  <div
                    style={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 14,
                      fontFamily: "var(--font-display)",
                      lineHeight: 1.2,
                    }}
                  >
                    Maverick Digitals
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      marginTop: 2,
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#86EFAC",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: 11,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Always here to help
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                data-ocid="chatbot.close_button"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  background: "rgba(255,255,255,0.15)",
                  border: "none",
                  borderRadius: "50%",
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.15s",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.28)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.15)";
                }}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages area */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px 14px 8px",
                background: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
              }}
              data-ocid="chatbot.panel"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    display: "flex",
                    flexDirection: msg.role === "user" ? "row-reverse" : "row",
                    alignItems: "flex-end",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  {msg.role === "bot" && (
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "#2563EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#FFFFFF",
                        fontFamily: "var(--font-display)",
                        flexShrink: 0,
                      }}
                    >
                      M
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: "76%",
                      padding: "9px 13px",
                      borderRadius:
                        msg.role === "user"
                          ? "18px 18px 4px 18px"
                          : "18px 18px 18px 4px",
                      background:
                        msg.role === "user"
                          ? "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)"
                          : "#F0F4FF",
                      color: msg.role === "user" ? "#FFFFFF" : "#374151",
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      fontFamily: "var(--font-body)",
                      border: msg.role === "bot" ? "1px solid #E2E8F0" : "none",
                      boxShadow:
                        msg.role === "user"
                          ? "0 2px 8px rgba(37,99,235,0.20)"
                          : "0 1px 4px rgba(0,0,0,0.05)",
                      wordBreak: "break-word",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div
              style={{
                padding: "10px 12px",
                background: "#FFFFFF",
                borderTop: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything about Maverick Digitals\u2026"
                disabled={isTyping}
                data-ocid="chatbot.input"
                aria-label="Chat message input"
                style={{
                  flex: 1,
                  padding: "9px 13px",
                  borderRadius: 12,
                  border: "1.5px solid #E2E8F0",
                  background: "#F8FAFC",
                  color: "#374151",
                  fontSize: 13.5,
                  fontFamily: "var(--font-body)",
                  outline: "none",
                  transition: "border-color 0.15s, box-shadow 0.15s",
                  position: "relative",
                  zIndex: 1,
                  pointerEvents: "all",
                  minWidth: 0,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2563EB";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(37,99,235,0.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={isTyping || !input.trim()}
                data-ocid="chatbot.submit_button"
                aria-label="Send message"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background:
                    isTyping || !input.trim()
                      ? "#E2E8F0"
                      : "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  border: "none",
                  color: isTyping || !input.trim() ? "#9CA3AF" : "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: isTyping || !input.trim() ? "not-allowed" : "pointer",
                  flexShrink: 0,
                  transition: "background 0.15s, transform 0.1s",
                  position: "relative",
                  zIndex: 1,
                  pointerEvents: "all",
                }}
                onMouseEnter={(e) => {
                  if (!isTyping && input.trim()) {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "scale(1.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "scale(1)";
                }}
              >
                <SendIcon />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open Maverick Digitals chat"}
        data-ocid="chatbot.open_modal_button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: open
            ? "#1D4ED8"
            : "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
          border: "none",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow:
            "0 4px 20px rgba(37,99,235,0.30), 0 2px 8px rgba(0,0,0,0.10)",
          pointerEvents: "all",
          outline: "none",
          transition: "background 0.2s",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.16 }}
              style={{ display: "flex" }}
            >
              <CloseIcon />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.16 }}
              style={{ display: "flex" }}
            >
              <ChatBubbleIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
