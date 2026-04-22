"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { useState } from "react";

const languages = [
  { flag: "🇩🇪", name: "Deutsch", level: "C1" },
  { flag: "🇬🇧", name: "English", level: "B2" },
  { flag: "🇫🇷", name: "Français", level: "C1" },
  { flag: "🇸🇦", name: "العربية", level: "Muttersprache" },
];

const interests = [
  "Sport",
  "Reisen",
  "Filme",
  "Kochen",
  "Videogames",
  "Karten",
];

export default function About() {
  const t = useTranslations("about");
  const [imgError, setImgError] = useState(false);

  const highlights = [
    { value: "10+", label: t("highlights.projects") },
    { value: "4+", label: t("highlights.experience") },
    { value: "4", label: t("highlights.languages") },
    { value: "2", label: t("highlights.clients") },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-5 sm:px-8 xl:px-16 overflow-hidden"
    >
      <span className="section-number">01</span>

      <div className="max-w-7xl mx-auto relative z-10">
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
          <h2 className="text-section-title" style={{ color: "#F0E8D5" }}>
            {t("title")}
          </h2>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal delay={0.1} className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-5 rounded-xl text-center overflow-hidden"
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
                  {item.value}
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

            {/* Location */}
            <div className="flex items-center gap-2 mt-4 justify-center">
              <span style={{ color: "#C9A84C" }}>📍</span>
              <span className="text-sm" style={{ color: "#A89B84" }}>
                Köln, Deutschland
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
                Sprachen
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
                Interessen
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
          </div>

        </div>
      </div>
    </section>
  );
}
