"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { featuredProjects, otherProjects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();

  const cardTranslations = {
    view_github: t("view_code"),
    view_demo: t("view_project"),
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-5 sm:px-8 xl:px-16 overflow-hidden">
      {/* Section number backdrop */}
      <span className="section-number">03</span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-space-mono)", color: "#C9A84C" }}
            >
              03 / projects
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

        {/* Featured projects grid — 1 col mobile, 2 col tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              index={i}
              translations={cardTranslations}
            />
          ))}
        </div>

        {/* Other projects — compact list */}
        <ScrollReveal delay={0.1}>
          <h3
            className="text-lg font-semibold mb-6"
            style={{ fontFamily: "var(--font-syne)", color: "#F0E8D5" }}
          >
            {t("other")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: "#131008",
                  border: "1px solid #2A2218",
                }}
              >
                <h4
                  className="text-sm font-bold mb-2"
                  style={{ fontFamily: "var(--font-syne)", color: "#F0E8D5" }}
                >
                  {project.title}
                </h4>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "#6B6054" }}>
                  {project.description[locale as keyof typeof project.description] ?? project.description.de}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-1.5 py-0.5 rounded"
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
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
