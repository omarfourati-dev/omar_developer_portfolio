"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  level: "expert" | "advanced" | "intermediate";
  color: string;
  index?: number;
}

const levelOpacity = {
  expert: 1,
  advanced: 0.85,
  intermediate: 0.65,
};

export default function SkillBadge({ name, level, color, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: levelOpacity[level], scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.08, opacity: 1 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border cursor-default"
      style={{
        borderColor: `${color}40`,
        backgroundColor: `${color}12`,
        color: color,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      {name}
    </motion.div>
  );
}
