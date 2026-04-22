"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-5 sm:px-8 xl:px-16 overflow-hidden">
      {/* Section number backdrop */}
      <span className="section-number">02</span>

      {/* Subtle bg gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(201,168,76,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-space-mono)", color: "#C9A84C" }}
            >
              02 / skills
            </span>
            <hr className="gold-rule flex-1" />
          </div>
          <h2 className="text-section-title" style={{ color: "#F0E8D5" }}>
            {t("title")}
          </h2>
          <p className="mt-3 text-base" style={{ color: "#A89B84" }}>
            {t("subtitle")}
          </p>
        </ScrollReveal>

        {/* Skill categories grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.id} delay={catIndex * 0.08}>
              <motion.div
                className="relative p-6 rounded-2xl h-full overflow-hidden group"
                style={{
                  backgroundColor: "#131008",
                  border: "1px solid #2A2218",
                }}
                whileHover={{ borderColor: `${category.color}35` }}
                transition={{ duration: 0.25 }}
              >
                {/* Top gradient accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${category.color}90, ${category.color}20, transparent)`,
                  }}
                />

                {/* Inner hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${category.color}07 0%, transparent 70%)`,
                  }}
                />

                {/* Category label */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-1.5 h-5 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3
                    className="text-sm font-semibold tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-space-mono)", color: category.color }}
                  >
                    {category.label.de}
                  </h3>
                </div>

                {/* Skills badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      index={catIndex * 6 + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
