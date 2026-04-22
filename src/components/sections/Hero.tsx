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

function LetterByLetter({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
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
      className="geometric-bg relative min-h-screen flex flex-col justify-center items-center text-center px-5 sm:px-8 pt-20 pb-12 overflow-hidden"
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
        className="absolute top-24 left-8 w-12 h-12 pointer-events-none"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.3)",
          borderLeft: "1px solid rgba(201,168,76,0.3)",
        }}
      />
      {/* Corner decorative lines — top right */}
      <div
        className="absolute top-24 right-8 w-12 h-12 pointer-events-none"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.3)",
          borderRight: "1px solid rgba(201,168,76,0.3)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
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
            Developer Portfolio
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
          <LetterByLetter text="FOURATI" className="relative" />
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
          className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#A89B84" }}
        >
          {t("description")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#C9A84C",
              color: "#0B0907",
              fontFamily: "var(--font-syne)",
            }}
          >
            {t("cta")}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[rgba(201,168,76,0.1)]"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#C9A84C",
              fontFamily: "var(--font-syne)",
            }}
          >
            {tNav("contact")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{
            fontFamily: "var(--font-space-mono)",
            color: "#6B6054",
          }}
        >
          scroll
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
