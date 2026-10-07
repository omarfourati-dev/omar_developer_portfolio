"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  locale: string;
  index?: number;
  translations: {
    view_github: string;
    view_demo: string;
  };
}

const categoryColors: Record<string, string> = {
  ai:         "#06B6D4",
  fullstack:  "#A855F7",
  security:   "#EF4444",
  ml:         "#F59E0B",
  saas:       "#10B981",
};

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ProjectCard({ project, locale, index = 0, translations }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const description =
    project.description[locale as keyof typeof project.description] ||
    project.description.en;
  const accentColor = categoryColors[project.category] ?? "#C9A84C";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl group cursor-default select-none overflow-hidden"
    >
      {/* Outer glow border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
        style={{
          background: `linear-gradient(135deg, ${accentColor}25 0%, transparent 50%, ${accentColor}10 100%)`,
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      />

      <div
        className="relative z-10 h-full p-6 rounded-2xl"
        style={{
          backgroundColor: "#131008",
          border: "1px solid #2A2218",
          boxShadow: "inset 0 1px 0 rgba(201,168,76,0.04)",
        }}
      >
        {/* Top accent gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, ${accentColor}90, ${accentColor}20, transparent)`,
          }}
        />

        {/* Project number watermark */}
        <div
          className="absolute bottom-4 right-5 text-[4rem] font-extrabold leading-none select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-syne)",
            color: accentColor,
            opacity: 0.04,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Radial inner glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${accentColor}0A 0%, transparent 70%)`,
          }}
        />

        {/* Category + action buttons row */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-xs px-3 py-1.5 rounded-full tracking-[0.12em] uppercase"
            style={{
              color: accentColor,
              backgroundColor: `${accentColor}18`,
              fontFamily: "var(--font-space-mono)",
            }}
          >
            {project.category}
          </span>

          <div className="flex items-center gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                style={{
                  color: accentColor,
                  backgroundColor: `${accentColor}12`,
                  border: `1px solid ${accentColor}35`,
                  fontFamily: "var(--font-space-mono)",
                }}
                aria-label={translations.view_demo}
                data-umami-event="project_demo_click"
                data-umami-event-project={project.title}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                style={{
                  color: "#A89B84",
                  backgroundColor: "#1A1510",
                  border: "1px solid #2A2218",
                  fontFamily: "var(--font-space-mono)",
                }}
                aria-label={translations.view_github}
                data-umami-event="project_github_click"
                data-umami-event-project={project.title}
              >
                <GitHubIcon size={13} />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#E8C96A]"
          style={{ fontFamily: "var(--font-syne)", color: "#F0E8D5" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base leading-relaxed mb-6" style={{ color: "#A89B84" }}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded"
              style={{
                backgroundColor: "#1A1510",
                border: "1px solid #2A2218",
                color: "#938572",
                fontFamily: "var(--font-space-mono)",
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span
              className="text-xs px-2.5 py-1 rounded"
              style={{ color: "#938572", fontFamily: "var(--font-space-mono)" }}
            >
              +{project.tags.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
