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
    { value: "4", label: "Sprachen" },
    { value: "2", label: "Unternehmen" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
    >
      {/* Section number backdrop */}
      <span className="section-number">01</span>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "#C9A84C",
              }}
            >
              01 / about
            </span>
            <hr className="gold-rule flex-1" />
          </div>
          <h2 className="text-section-title" style={{ color: "#F0E8D5" }}>
            {t("title")}
          </h2>
        </ScrollReveal>

        {/* Stats bar — 2x2 on mobile, 4 columns on desktop */}
        <ScrollReveal delay={0.1} className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl text-center"
                style={{
                  backgroundColor: "#131008",
                  border: "1px solid #2A2218",
                }}
              >
                <p
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-syne)",
                    color: "#C9A84C",
                  }}
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

        {/* Main content: photo + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Photo — left column on desktop, top on mobile */}
          <ScrollReveal className="lg:col-span-2" direction="left">
            <div
              className="relative aspect-[4/5] max-w-xs mx-auto lg:mx-0 rounded-2xl overflow-hidden"
              style={{ border: "1px solid #2A2218" }}
            >
              {!imgError ? (
                <Image
                  src="/images/omar.jpg"
                  alt="Omar Fourati"
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Stylized fallback with OF monogram */
                <div
                  className="absolute inset-0 geometric-bg flex flex-col items-center justify-center gap-4"
                  style={{ backgroundColor: "#131008" }}
                >
                  <span
                    className="text-7xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-syne)",
                      color: "#C9A84C",
                    }}
                  >
                    OF
                  </span>
                  <span
                    className="text-xs tracking-[0.3em] uppercase"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      color: "#6B6054",
                    }}
                  >
                    Omar Fourati
                  </span>
                </div>
              )}
              {/* Gold bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{
                  background:
                    "linear-gradient(90deg, #C9A84C, transparent)",
                }}
              />
            </div>

            {/* Location tag */}
            <div className="flex items-center gap-2 mt-4 justify-center lg:justify-start">
              <span style={{ color: "#C9A84C" }}>📍</span>
              <span className="text-sm" style={{ color: "#A89B84" }}>
                Köln, Deutschland
              </span>
            </div>
          </ScrollReveal>

          {/* Bio — right column */}
          <div className="lg:col-span-3 space-y-8">
            <ScrollReveal delay={0.1}>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "#A89B84" }}
              >
                {t("bio")}
              </p>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal delay={0.2}>
              <h3
                className="text-sm tracking-[0.2em] uppercase mb-4"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: "#C9A84C",
                }}
              >
                Sprachen
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{
                      backgroundColor: "#131008",
                      border: "1px solid #2A2218",
                    }}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#F0E8D5" }}
                      >
                        {lang.name}
                      </p>
                      <p
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-space-mono)",
                          color: "#6B6054",
                        }}
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
                className="text-sm tracking-[0.2em] uppercase mb-4"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: "#C9A84C",
                }}
              >
                Interessen
              </h3>
              <div className="flex flex-wrap gap-2">
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
