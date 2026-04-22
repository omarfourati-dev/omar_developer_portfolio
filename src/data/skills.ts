export interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate";
}

export interface SkillCategory {
  id: string;
  label: {
    de: string;
    en: string;
    fr: string;
    ar: string;
  };
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: {
      de: "Frontend",
      en: "Frontend",
      fr: "Frontend",
      ar: "الواجهة الأمامية",
    },
    color: "#3B82F6",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Vue 3", level: "advanced" },
      { name: "Framer Motion", level: "advanced" },
      { name: "Zustand", level: "advanced" },
      { name: "Radix UI", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    label: {
      de: "Backend",
      en: "Backend",
      fr: "Backend",
      ar: "الخادم الخلفي",
    },
    color: "#10B981",
    skills: [
      { name: "Python", level: "expert" },
      { name: "FastAPI", level: "expert" },
      { name: "Node.js", level: "advanced" },
      { name: "PostgreSQL", level: "expert" },
      { name: "Prisma", level: "advanced" },
      { name: "Docker", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "WebSockets", level: "advanced" },
    ],
  },
  {
    id: "ai-ml",
    label: {
      de: "KI & ML",
      en: "AI & ML",
      fr: "IA & ML",
      ar: "الذكاء الاصطناعي والتعلم الآلي",
    },
    color: "#F59E0B",
    skills: [
      { name: "TensorFlow", level: "advanced" },
      { name: "PyTorch", level: "advanced" },
      { name: "XGBoost", level: "advanced" },
      { name: "OpenAI API", level: "expert" },
      { name: "Claude API", level: "expert" },
      { name: "Gemini API", level: "advanced" },
      { name: "LLM Integration", level: "expert" },
      { name: "Prompt Engineering", level: "expert" },
    ],
  },
  {
    id: "database",
    label: {
      de: "Datenbanken",
      en: "Databases",
      fr: "Bases de données",
      ar: "قواعد البيانات",
    },
    color: "#EF4444",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "MariaDB", level: "advanced" },
      { name: "Supabase", level: "advanced" },
      { name: "Vercel KV", level: "intermediate" },
      { name: "Data Modeling", level: "expert" },
      { name: "Query Optimization", level: "advanced" },
    ],
  },
  {
    id: "devops",
    label: {
      de: "DevOps",
      en: "DevOps",
      fr: "DevOps",
      ar: "DevOps",
    },
    color: "#8B5CF6",
    skills: [
      { name: "Docker", level: "advanced" },
      { name: "Nginx", level: "advanced" },
      { name: "GitHub Actions", level: "intermediate" },
      { name: "Vercel", level: "advanced" },
      { name: "CI/CD", level: "advanced" },
      { name: "Linux", level: "intermediate" },
    ],
  },
  {
    id: "security",
    label: {
      de: "Sicherheit",
      en: "Security",
      fr: "Sécurité",
      ar: "الأمان",
    },
    color: "#EC4899",
    skills: [
      { name: "AES-256-GCM Encryption", level: "expert" },
      { name: "OAuth 2.0", level: "advanced" },
      { name: "JWT", level: "advanced" },
      { name: "Zero-Knowledge Architecture", level: "advanced" },
      { name: "HTTPS/TLS", level: "intermediate" },
      { name: "Web Security", level: "advanced" },
    ],
  },
];
