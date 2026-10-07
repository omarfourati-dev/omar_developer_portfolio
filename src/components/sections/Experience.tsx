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
  const t = useTranslations("experience");
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
        style={{
          background: isCurrent
            ? "linear-gradient(to bottom, #C9A84C80, #2A2218)"
            : "#2A2218",
        }}
      />

      {/* Timeline dot */}
      <div
        className={`absolute left-[-6px] top-2 w-3 h-3 rounded-full ${isCurrent ? "dot-pulse" : ""}`}
        style={{
          backgroundColor: isCurrent ? "#C9A84C" : "#1A1510",
          border: `2px solid ${isCurrent ? "#C9A84C" : "#938572"}`,
        }}
      />

      {/* Content */}
      <div
        className="p-5 rounded-xl overflow-hidden"
        style={{
          backgroundColor: "#131008",
          border: `1px solid ${isCurrent ? "rgba(201,168,76,0.25)" : "#2A2218"}`,
          boxShadow: isCurrent ? "-3px 0 0 0 #C9A84C" : "none",
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
                color: "#938572",
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
                ● {t("current")}
              </span>
            )}
          </div>
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#A89B84" }}>
          {description}
        </p>
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded"
                style={{
                  backgroundColor: "#1A1510",
                  color: "#938572",
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
    <section id="experience" className="relative py-32 sm:py-40 px-[5%] overflow-hidden">
      <span className="section-number">04</span>

      <div className="relative z-10">
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
          <h2 className="text-section-title text-center" style={{ color: "#F0E8D5" }}>
            {t("title")}
          </h2>
        </ScrollReveal>

        {/* Work Experience */}
        <ScrollReveal className="mb-12">
          <h3
            className="text-xs tracking-[0.25em] uppercase mb-8"
            style={{ fontFamily: "var(--font-space-mono)", color: "#938572" }}
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
            style={{ fontFamily: "var(--font-space-mono)", color: "#938572" }}
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
            style={{ fontFamily: "var(--font-space-mono)", color: "#938572" }}
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
                className="p-5 rounded-xl"
                style={{ backgroundColor: "#131008", border: "1px solid #2A2218" }}
              >
                <p
                  className="text-base font-bold mb-1.5"
                  style={{ fontFamily: "var(--font-syne)", color: "#F0E8D5" }}
                >
                  {cert.role[locale as keyof typeof cert.role] ?? cert.role.de}
                </p>
                <p className="text-sm mb-2" style={{ color: "#A89B84" }}>
                  {cert.company}
                </p>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-space-mono)", color: "#938572" }}
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
