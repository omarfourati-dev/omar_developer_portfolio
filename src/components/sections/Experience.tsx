"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiences, education, certificates } from "@/data/experience";
import { motion } from "framer-motion";

interface TimelineItemProps {
  entry: typeof experiences[0];
  locale: string;
  index: number;
  isCurrent?: boolean;
}

function TimelineItem({ entry, locale, index, isCurrent }: TimelineItemProps) {
  const loc = locale as keyof typeof entry.role;
  const role = entry.role[loc] ?? entry.role.de;
  const description = entry.description[loc] ?? entry.description.de;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 sm:pl-12 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div
        className="absolute left-0 top-2 bottom-0 w-px"
        style={{ backgroundColor: "#2A2218" }}
      />

      {/* Timeline dot */}
      <div
        className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full"
        style={{
          backgroundColor: isCurrent ? "#C9A84C" : "#2A2218",
          border: "2px solid",
          borderColor: isCurrent ? "#C9A84C" : "#6B6054",
          boxShadow: isCurrent ? "0 0 12px rgba(201,168,76,0.5)" : "none",
        }}
      />

      {/* Content */}
      <div
        className="p-5 rounded-xl"
        style={{
          backgroundColor: "#131008",
          border: "1px solid #2A2218",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h4
              className="text-base font-bold"
              style={{ fontFamily: "var(--font-syne)", color: "#F0E8D5" }}
            >
              {entry.company}
            </h4>
            <p className="text-sm mt-0.5" style={{ color: "#C9A84C" }}>
              {role}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span
              className="text-xs px-2 py-1 rounded"
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "#6B6054",
                backgroundColor: "#1A1510",
              }}
            >
              {entry.period}
            </span>
            {isCurrent && (
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "rgba(201,168,76,0.15)",
                  color: "#C9A84C",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                ● Aktuell
              </span>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "#A89B84" }}>
          {description}
        </p>
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  backgroundColor: "#1A1510",
                  color: "#6B6054",
                  fontFamily: "var(--font-space-mono)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale();

  return (
    <section id="experience" className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
      <span className="section-number">04</span>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-space-mono)", color: "#C9A84C" }}
            >
              04 / experience
            </span>
            <hr className="gold-rule flex-1" />
          </div>
          <h2 className="text-section-title" style={{ color: "#F0E8D5" }}>
            {t("title")}
          </h2>
        </ScrollReveal>

        {/* Work Experience */}
        <ScrollReveal className="mb-12">
          <h3
            className="text-xs tracking-[0.25em] uppercase mb-8"
            style={{ fontFamily: "var(--font-space-mono)", color: "#6B6054" }}
          >
            {t("work")}
          </h3>
          <div>
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.id}
                entry={exp}
                locale={locale}
                index={i}
                isCurrent={exp.current}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal className="mb-12">
          <h3
            className="text-xs tracking-[0.25em] uppercase mb-8"
            style={{ fontFamily: "var(--font-space-mono)", color: "#6B6054" }}
          >
            {t("education")}
          </h3>
          <div>
            {education.map((edu, i) => (
              <TimelineItem key={edu.id} entry={edu} locale={locale} index={i} />
            ))}
          </div>
        </ScrollReveal>

        {/* Certificates */}
        <ScrollReveal>
          <h3
            className="text-xs tracking-[0.25em] uppercase mb-6"
            style={{ fontFamily: "var(--font-space-mono)", color: "#6B6054" }}
          >
            {t("certificates")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl"
                style={{ backgroundColor: "#131008", border: "1px solid #2A2218" }}
              >
                <p
                  className="text-sm font-bold mb-1"
                  style={{ fontFamily: "var(--font-syne)", color: "#F0E8D5" }}
                >
                  {cert.role.de}
                </p>
                <p className="text-xs mb-2" style={{ color: "#A89B84" }}>
                  {cert.company}
                </p>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-space-mono)", color: "#6B6054" }}
                >
                  {cert.period}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
