"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "AI Builder",
  "مطور برمجيات",
  "Développeur",
];

const TICKER_ITEMS = [
  "Python", "FastAPI", "Vue 3", "TypeScript", "Java", "Spring Boot",
  "OpenAI API", "Claude API", "Agentic Coding", "PostgreSQL", "Docker",
  "React", "Next.js", "C# / .NET", "GitHub Actions", "Tailwind CSS",
];

const GOLD_GRADIENT = "linear-gradient(90deg, #E8C96A, #C9A84C, #C4783E)";

function LetterByLetter({
  text,
  className,
  gradient = false,
}: {
  text: string;
  className?: string;
  gradient?: boolean;
}) {
  const chars = text.split("");
  return (
    <span className={className} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
            // Each animated letter is its own box, so a gradient on the parent cannot reach it.
            // Give every letter its slice of one wide gradient: the word still reads as one sweep.
            ...(gradient && {
              backgroundImage: GOLD_GRADIENT,
              backgroundSize: `${chars.length * 100}% 100%`,
              backgroundPosition: `${chars.length > 1 ? (i / (chars.length - 1)) * 100 : 0}% 0`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }),
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const t = useTranslations("hero");
  const tNav = useTranslations("navigation");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="geometric-bg relative min-h-screen flex flex-col justify-center items-center text-center px-5 sm:px-8 xl:px-16 pt-20 pb-12 overflow-hidden"
    >
      {/* Radial glow from center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Corner decorative lines — top left */}
      <div
        className="absolute top-24 left-8 w-12 h-12 pointer-events-none hidden sm:block"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.3)",
          borderLeft: "1px solid rgba(201,168,76,0.3)",
        }}
      />
      {/* Corner decorative lines — top right */}
      <div
        className="absolute top-24 right-8 w-12 h-12 pointer-events-none hidden sm:block"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.3)",
          borderRight: "1px solid rgba(201,168,76,0.3)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex justify-center mb-5"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              color: "#10B981",
              fontFamily: "var(--font-space-mono)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "#10B981",
                boxShadow: "0 0 6px rgba(16,185,129,0.8)",
                animation: "pulse 2s infinite",
              }}
            />
            {t("available")}
          </span>
        </motion.div>

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-px w-8" style={{ backgroundColor: "#C9A84C" }} />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "#C9A84C",
            }}
          >
            {t("eyebrow")}
          </span>
          <span className="h-px w-8" style={{ backgroundColor: "#C9A84C" }} />
        </motion.div>

        {/* Main name — always LTR regardless of locale */}
        <h1
          dir="ltr"
          className="text-display mb-3 leading-none"
          style={{ color: "#F0E8D5" }}
        >
          <LetterByLetter text="OMAR" />
          <br />
          <LetterByLetter text="FOURATI" className="relative" gradient />
        </h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="gold-rule my-6 mx-auto"
          style={{ width: "min(320px, 80%)", transformOrigin: "left" }}
        />

        {/* Role cycle */}
        <div className="h-10 flex items-center justify-center overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-2xl font-medium"
              style={{
                fontFamily: "var(--font-syne)",
                color: "#C9A84C",
              }}
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-base sm:text-lg max-w-xl lg:max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#A89B84" }}
        >
          {t("description")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center items-center max-w-4xl mx-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-10 py-4 rounded-lg text-base font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(201,168,76,0.35)]"
            style={{
              backgroundColor: "#C9A84C",
              color: "#0B0907",
              fontFamily: "var(--font-syne)",
            }}
          >
            {t("cta")}
          </a>
          <a
            href="/Lebenslauf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 rounded-lg text-base font-semibold tracking-wide transition-all duration-300 hover:bg-[rgba(201,168,76,0.1)] flex items-center justify-center gap-2"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#C9A84C",
              fontFamily: "var(--font-syne)",
            }}
            data-umami-event="resume_download"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {t("resume")}
          </a>
          <a
            href="/Anschreiben.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 rounded-lg text-base font-semibold tracking-wide transition-all duration-300 hover:bg-[rgba(201,168,76,0.1)] flex items-center justify-center gap-2"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#C9A84C",
              fontFamily: "var(--font-syne)",
            }}
            data-umami-event="cover_letter_download"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {t("cover_letter")}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 rounded-lg text-base font-semibold tracking-wide transition-all duration-300 hover:bg-[rgba(201,168,76,0.08)]"
            style={{
              border: "1px solid rgba(201,168,76,0.2)",
              color: "#A89B84",
              fontFamily: "var(--font-syne)",
            }}
          >
            {tNav("contact")}
          </a>
        </motion.div>
      </div>

      {/* Tech ticker — scrolling strip above scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        // In the normal flow below the buttons: an absolutely positioned strip overlapped them on short screens
        className="relative mt-14 w-screen max-w-[100vw] overflow-hidden pointer-events-none"
      >
        <div
          className="py-3 border-y"
          style={{
            borderColor: "rgba(201,168,76,0.2)",
            backgroundColor: "rgba(201,168,76,0.03)",
          }}
        >
          <div className="ticker-track gap-10 px-4">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="text-[11px] tracking-[0.3em] uppercase whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: "rgba(201,168,76,0.55)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="mt-8 hidden sm:flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{
            fontFamily: "var(--font-space-mono)",
            color: "#938572",
          }}
        >
          {t("scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} style={{ color: "#C9A84C" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
