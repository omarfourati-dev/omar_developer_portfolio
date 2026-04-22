"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  locale: string;
  translations: {
    view_github: string;
    view_demo: string;
  };
}

const categoryColors: Record<string, string> = {
  ai: "#06B6D4",
  fullstack: "#A855F7",
  security: "#EF4444",
  ml: "#F59E0B",
  saas: "#10B981",
};

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ProjectCard({ project, locale, translations }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const description =
    project.description[locale as keyof typeof project.description] ||
    project.description.en;
  const accentColor = categoryColors[project.category] || "#C9A84C";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        backgroundColor: "#111111",
        borderColor: "#1F1F1F",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border p-6 group cursor-default select-none"
    >
      {/* Accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full"
        style={{ backgroundColor: accentColor, opacity: 0.6 }}
      />

      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-xs font-mono px-2 py-1 rounded uppercase tracking-wider"
          style={{
            color: accentColor,
            backgroundColor: `${accentColor}18`,
          }}
        >
          {project.category}
        </span>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg transition-colors hover:text-white"
              style={{ color: "#6B7280" }}
              aria-label={translations.view_github}
            >
              <GitHubIcon size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold mb-3 group-hover:text-white transition-colors"
        style={{
          fontFamily: "var(--font-syne)",
          color: "#F2F2F0",
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: "#9CA3AF" }}>
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded font-mono"
            style={{
              backgroundColor: "#1F1F1F",
              color: "#9CA3AF",
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span
            className="text-xs px-2 py-0.5 rounded font-mono"
            style={{ color: "#6B7280" }}
          >
            +{project.tags.length - 5}
          </span>
        )}
      </div>
    </motion.div>
  );
}
