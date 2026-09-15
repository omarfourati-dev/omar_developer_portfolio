"use client";

import { motion, useMotionValue, useInView, animate } from "framer-motion";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.round(latest) + suffix;
          }
        },
      });
      return controls.stop;
    }
  }, [inView, value, suffix, count]);

  return <span ref={ref}>0{suffix}</span>;
}

const languageList = [
  { flag: "🇩🇪", name: "Deutsch", level: "C1" },
  { flag: "🇬🇧", name: "English", level: "B2" },
  { flag: "🇫🇷", name: "Français", level: "C1" },
  { flag: "🇸🇦", name: "العربية", level: null },
];

export default function About() {
  const t = useTranslations("about");
  const [imgError, setImgError] = useState(false);

  const languages = languageList.map((lang) => ({
    ...lang,
    level: lang.level ?? t("native_level"),
  }));
  const interests = t.raw("interests_list") as string[];

  const highlights = [
    { value: 10, suffix: "+", label: t("highlights.projects") },
    { value: 4,  suffix: "+", label: t("highlights.experience") },
    { value: 4,  suffix: "",  label: t("highlights.languages") },
    { value: 2,  suffix: "",  label: t("highlights.clients") },
  ];

  return (
    <section
      id="about"
      className="relative py-32 sm:py-40 px-[5%] overflow-hidden"
    >
      <span className="section-number">01</span>

      <div className="relative z-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-space-mono)", color: "#C9A84C" }}
            >
              01 / about
            </span>
            <hr className="gold-rule flex-1" />
          </div>
          <h2 className="text-section-title text-center" style={{ color: "#F0E8D5" }}>
            {t("title")}
          </h2>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal delay={0.1} className="mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-7 rounded-xl text-center overflow-hidden"
                style={{ backgroundColor: "#131008", border: "1px solid #2A2218" }}
              >
                <div
                  className="absolute top-0 left-4 right-4 h-[1px]"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)" }}
                />
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-syne)", color: "#C9A84C" }}
                >
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="text-xs" style={{ color: "#A89B84" }}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Centered content */}
        <div className="flex flex-col items-center">

          {/* Photo — centered */}
          <ScrollReveal className="mb-10">
            <div className="relative max-w-[220px] w-full mx-auto">
              {/* Corner brackets */}
              <div className="absolute -top-2 -left-2 w-5 h-5 pointer-events-none z-10"
                style={{ borderTop: "2px solid rgba(201,168,76,0.6)", borderLeft: "2px solid rgba(201,168,76,0.6)" }} />
              <div className="absolute -top-2 -right-2 w-5 h-5 pointer-events-none z-10"
                style={{ borderTop: "2px solid rgba(201,168,76,0.6)", borderRight: "2px solid rgba(201,168,76,0.6)" }} />
              <div className="absolute -bottom-2 -left-2 w-5 h-5 pointer-events-none z-10"
                style={{ borderBottom: "2px solid rgba(201,168,76,0.6)", borderLeft: "2px solid rgba(201,168,76,0.6)" }} />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 pointer-events-none z-10"
                style={{ borderBottom: "2px solid rgba(201,168,76,0.6)", borderRight: "2px solid rgba(201,168,76,0.6)" }} />

              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden"
                style={{ border: "1px solid #2A2218" }}
              >
                {!imgError ? (
                  <Image
                    src="/images/omar.JPG"
                    alt="Omar Fourati"
                    fill
                    sizes="(max-width: 640px) 220px, 220px"
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div
                    className="absolute inset-0 geometric-bg flex flex-col items-center justify-center gap-4"
                    style={{ backgroundColor: "#131008" }}
                  >
                    <span
                      className="text-7xl font-extrabold"
                      style={{ fontFamily: "var(--font-syne)", color: "#C9A84C" }}
                    >
                      OF
                    </span>
                    <span
                      className="text-xs tracking-[0.3em] uppercase"
                      style={{ fontFamily: "var(--font-space-mono)", color: "#6B6054" }}
                    >
                      Omar Fourati
                    </span>
                  </div>
                )}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
                />
              </div>
            </div>

            {/* Location + Status */}
            <div className="flex flex-col items-center gap-2 mt-4">
              <div className="flex items-center gap-2">
                <span style={{ color: "#C9A84C" }}>📍</span>
                <span className="text-sm" style={{ color: "#A89B84" }}>
                  {t("location")}
                </span>
              </div>
              <span
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "#C9A84C",
                  fontFamily: "var(--font-space-mono)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#10B981", boxShadow: "0 0 5px rgba(16,185,129,0.8)" }} />
                @ KERAVONOS GmbH
              </span>
            </div>
          </ScrollReveal>

          {/* Bio + Languages + Interests — centered, max-w-2xl */}
          <div className="w-full max-w-2xl space-y-8">
            <ScrollReveal delay={0.1}>
              <p
                className="text-base sm:text-lg leading-relaxed text-center"
                style={{ color: "#A89B84" }}
              >
                {t("bio")}
              </p>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal delay={0.2}>
              <h3
                className="text-sm tracking-[0.2em] uppercase mb-4 text-center"
                style={{ fontFamily: "var(--font-space-mono)", color: "#C9A84C" }}
              >
                {t("languages_title")}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ backgroundColor: "#131008", border: "1px solid #2A2218" }}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#F0E8D5" }}>
                        {lang.name}
                      </p>
                      <p
                        className="text-xs"
                        style={{ fontFamily: "var(--font-space-mono)", color: "#6B6054" }}
                      >
                        {lang.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Interests */}
            <ScrollReveal delay={0.3}>
              <h3
                className="text-sm tracking-[0.2em] uppercase mb-4 text-center"
                style={{ fontFamily: "var(--font-space-mono)", color: "#C9A84C" }}
              >
                {t("interests_title")}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "#A89B84",
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* CV & Cover Letter Download */}
            <ScrollReveal delay={0.4} className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href="/Lebenslauf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                style={{
                  backgroundColor: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "#C9A84C",
                  fontFamily: "var(--font-syne)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                {t("download_cv")}
              </a>
              <a
                href="/Anschreiben.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                style={{
                  backgroundColor: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "#C9A84C",
                  fontFamily: "var(--font-syne)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                {t("download_cover_letter")}
              </a>
              <a
                href="/Arbeitszeugnis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                style={{
                  backgroundColor: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "#C9A84C",
                  fontFamily: "var(--font-syne)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                {t("download_reference")}
              </a>
              <a
                href="/Zertifikat-Django-REST-API.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                style={{
                  backgroundColor: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "#C9A84C",
                  fontFamily: "var(--font-syne)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                {t("download_certificate")}
              </a>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
