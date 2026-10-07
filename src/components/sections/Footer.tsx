"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const GITHUB_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LINKEDIN_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ARROW_UP_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer.links");
  const { scrollYProgress } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowBackToTop(v > 0.2);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className="relative py-10 px-5 sm:px-8"
        style={{ borderTop: "1px solid #2A2218" }}
      >
        {/* Top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)" }}
        />

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <span
              className="text-xl font-extrabold tracking-tighter"
              style={{ fontFamily: "var(--font-syne)", color: "#C9A84C" }}
            >
              OF
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-space-mono)", color: "#938572" }}
            >
              © {new Date().getFullYear()} Omar Fourati
            </span>
          </div>

          {/* Built with */}
          <p className="text-xs text-center order-3 sm:order-2" style={{ color: "#8A7D68" }}>
            <span style={{ color: "#8A7D68" }}>Built with </span>
            <span style={{ color: "#C9A84C" }}>Next.js</span>
            <span style={{ color: "#8A7D68" }}> + </span>
            <span style={{ color: "#C9A84C" }}>Framer Motion</span>
            <span style={{ color: "#8A7D68" }}> + </span>
            <span style={{ color: "#C9A84C" }}>Tailwind CSS</span>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3 order-2 sm:order-3">
            <a
              href="https://github.com/omarfourati-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.12)",
                color: "#938572",
              }}
              aria-label="GitHub"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#938572")}
              data-umami-event="footer_github_click"
            >
              {GITHUB_SVG}
            </a>
            <a
              href="https://www.linkedin.com/in/omarfourati/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.12)",
                color: "#938572",
              }}
              aria-label="LinkedIn"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#938572")}
              data-umami-event="footer_linkedin_click"
            >
              {LINKEDIN_SVG}
            </a>
            <a
              href="mailto:info@omarfourati.de"
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.12)",
                color: "#938572",
              }}
              aria-label="Email"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#938572")}
              data-umami-event="footer_email_click"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Legal links */}
        <div className="max-w-7xl mx-auto mt-6 pt-6 flex items-center justify-center gap-4 text-xs" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
          <a
            href={`/${locale}/impressum`}
            className="transition-colors duration-200"
            style={{ fontFamily: "var(--font-space-mono)", color: "#938572" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#938572")}
          >
            {t("imprint")}
          </a>
          <span aria-hidden="true" style={{ color: "#2A2218" }}>•</span>
          <a
            href={`/${locale}/datenschutz`}
            className="transition-colors duration-200"
            style={{ fontFamily: "var(--font-space-mono)", color: "#938572" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#938572")}
          >
            {t("privacy")}
          </a>
        </div>
      </footer>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.8 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
        style={{
          backgroundColor: "rgba(11,9,7,0.9)",
          border: "1px solid rgba(201,168,76,0.35)",
          color: "#C9A84C",
          backdropFilter: "blur(12px)",
          pointerEvents: showBackToTop ? "auto" : "none",
        }}
        whileHover={{ scale: 1.1, borderColor: "rgba(201,168,76,0.7)" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
      >
        {ARROW_UP_SVG}
      </motion.button>
    </>
  );
}
