import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const BRAND = "MAVERICK DIGITALS";
const LETTERS = BRAND.split("");

export function PageIntro() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("maverick_intro_seen");
    if (seen) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    setVisible(true);

    const exitTimer = setTimeout(() => setExiting(true), 2500);
    const doneTimer = setTimeout(() => {
      sessionStorage.setItem("maverick_intro_seen", "1");
      document.body.style.overflow = "";
      setDone(true);
    }, 3100);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;
  if (!visible) return null;

  return (
    <AnimatePresence>
      {!done && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            pointerEvents: "all",
          }}
        >
          {/* TOP PANEL */}
          <motion.div
            initial={{ y: 0 }}
            animate={exiting ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: "50%",
              background: "#FFFFFF",
              zIndex: 9999,
            }}
          />

          {/* BOTTOM PANEL */}
          <motion.div
            initial={{ y: 0 }}
            animate={exiting ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0 }}
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              bottom: 0,
              background: "#FFFFFF",
              zIndex: 9999,
            }}
          />

          {/* CENTER CONTENT */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={exiting ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              pointerEvents: "none",
            }}
          >
            {/* Ring with amber glow */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  right: "calc(50% + 68px)",
                  height: "1px",
                  width: "120px",
                  background: "rgba(37,99,235,0.45)",
                  transformOrigin: "right center",
                }}
              />
              {/* Right line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  left: "calc(50% + 68px)",
                  height: "1px",
                  width: "120px",
                  background: "rgba(37,99,235,0.45)",
                  transformOrigin: "left center",
                }}
              />

              {/* Outer ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.9,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(37,99,235,0.6)",
                  boxShadow:
                    "0 0 28px rgba(37,99,235,0.25), 0 0 56px rgba(37,99,235,0.10), inset 0 0 20px rgba(37,99,235,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Inner ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    border: "1px solid rgba(37,99,235,0.25)",
                  }}
                />
              </motion.div>
            </div>

            {/* BRAND NAME — staggered letters */}
            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 0,
                overflow: "hidden",
                lineHeight: 1,
              }}
            >
              {LETTERS.map((char, i) => (
                <motion.span
                  // biome-ignore lint/suspicious/noArrayIndexKey: letter position is the identity
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.6 + i * 0.045,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: "inline-block",
                    fontSize: "clamp(26px, 4.5vw, 58px)",
                    fontWeight: 700,
                    fontFamily:
                      "var(--font-display, 'Space Grotesk', sans-serif)",
                    letterSpacing: char === " " ? "0.6em" : "0.06em",
                    color: char === "M" && i === 0 ? "#2563EB" : "#1E3A8A",
                    textTransform: "uppercase" as const,
                    whiteSpace: "pre" as const,
                    lineHeight: 1,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.55, ease: "easeOut" }}
              style={{
                marginTop: 12,
                fontSize: "clamp(11px, 1.6vw, 15px)",
                fontFamily: "var(--font-body, 'Space Grotesk', sans-serif)",
                color: "#374151",
                letterSpacing: "0.28em",
                textTransform: "uppercase" as const,
                fontWeight: 400,
              }}
            >
              Digital Marketing Agency
            </motion.p>

            {/* Amber progress bar */}
            <motion.div
              style={{
                position: "absolute",
                bottom: 48,
                left: "50%",
                translateX: "-50%",
                width: "clamp(180px, 30vw, 320px)",
                height: 2,
                borderRadius: 2,
                background: "rgba(37,99,235,0.10)",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.75, ease: "easeInOut" }}
                style={{
                  height: "100%",
                  background: "#2563EB",
                  transformOrigin: "left center",
                  boxShadow: "0 0 10px rgba(37,99,235,0.50)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
