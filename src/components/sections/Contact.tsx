"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

const GITHUB_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LINKEDIN_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const t = useTranslations("contact");
  const tAbout = useTranslations("about");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:info@omarfourati.de?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 sm:py-40 px-[5%] overflow-hidden">
      <span className="section-number">05</span>

      {/* Gold glow at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }}
      />

      <div className="relative z-10">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <hr className="gold-rule flex-1" />
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-space-mono)", color: "#C9A84C" }}
            >
              05 / contact
            </span>
            <hr
              className="flex-1"
              style={{ height: "1px", background: "linear-gradient(270deg, #C9A84C, transparent)", border: "none" }}
            />
          </div>
          <h2 className="text-section-title" style={{ color: "#F0E8D5" }}>
            {t("title")}
          </h2>
          <p className="mt-3 text-base" style={{ color: "#A89B84" }}>
            {t("subtitle")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info — left */}
          <ScrollReveal className="lg:col-span-2 space-y-6" direction="left">
            {/* Email */}
            <a
              href="mailto:info@omarfourati.de"
              className="flex items-center gap-4 p-5 rounded-xl group transition-colors"
              style={{ backgroundColor: "#131008", border: "1px solid #2A2218" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <Mail size={18} style={{ color: "#C9A84C" }} />
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: "#6B6054" }}>{t("email")}</p>
                <p
                  className="text-sm font-medium group-hover:text-[#C9A84C] transition-colors"
                  style={{ color: "#F0E8D5" }}
                >
                  info@omarfourati.de
                </p>
              </div>
            </a>

            {/* Location */}
            <div
              className="flex items-center gap-4 p-5 rounded-xl"
              style={{ backgroundColor: "#131008", border: "1px solid #2A2218" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <MapPin size={18} style={{ color: "#C9A84C" }} />
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: "#6B6054" }}>{t("location")}</p>
                <p className="text-sm font-medium" style={{ color: "#F0E8D5" }}>
                  {tAbout("location")}
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/omarfourati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-medium transition-all hover:border-[rgba(201,168,76,0.4)]"
                style={{
                  backgroundColor: "#131008",
                  border: "1px solid #2A2218",
                  color: "#A89B84",
                }}
              >
                <span style={{ color: "#C9A84C" }}>{LINKEDIN_SVG}</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/omarfourati-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-medium transition-all hover:border-[rgba(201,168,76,0.4)]"
                style={{
                  backgroundColor: "#131008",
                  border: "1px solid #2A2218",
                  color: "#A89B84",
                }}
              >
                <span style={{ color: "#C9A84C" }}>{GITHUB_SVG}</span>
                GitHub
              </a>
            </div>
          </ScrollReveal>

          {/* Contact form — right */}
          <ScrollReveal className="lg:col-span-3" direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl space-y-5"
              style={{ backgroundColor: "#131008", border: "1px solid #2A2218" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm tracking-[0.12em] uppercase mb-2.5"
                    style={{ fontFamily: "var(--font-space-mono)", color: "#6B6054" }}
                  >
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg text-base outline-none transition-all portfolio-input"
                    style={{
                      backgroundColor: "#0B0907",
                      border: "1px solid #2A2218",
                      color: "#F0E8D5",
                    }}
                    placeholder={t("name_placeholder")}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm tracking-[0.12em] uppercase mb-2.5"
                    style={{ fontFamily: "var(--font-space-mono)", color: "#6B6054" }}
                  >
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg text-base outline-none transition-all portfolio-input"
                    style={{
                      backgroundColor: "#0B0907",
                      border: "1px solid #2A2218",
                      color: "#F0E8D5",
                    }}
                    placeholder={t("email_placeholder")}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm tracking-[0.12em] uppercase mb-2.5"
                  style={{ fontFamily: "var(--font-space-mono)", color: "#6B6054" }}
                >
                  {t("message")}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg text-base outline-none transition-all resize-none portfolio-input"
                  style={{
                    backgroundColor: "#0B0907",
                    border: "1px solid #2A2218",
                    color: "#F0E8D5",
                  }}
                  placeholder={t("message_placeholder")}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-lg text-base font-semibold tracking-wide transition-all"
                style={{
                  backgroundColor: sent ? "#2A2218" : "#C9A84C",
                  color: sent ? "#6B6054" : "#0B0907",
                  fontFamily: "var(--font-syne)",
                }}
              >
                {sent ? `✓ ${t("sent")}` : t("send")}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
