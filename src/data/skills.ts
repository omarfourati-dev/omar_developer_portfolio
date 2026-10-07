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

// Levels: expert = tägliche Arbeit bei KERAVONOS / mehrere Produktivprojekte,
// advanced = produktiv eingesetzt, intermediate = in einem Projekt oder Kurs eingesetzt.
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
      { name: "Vue 3", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "React", level: "advanced" },
      { name: "Next.js", level: "advanced" },
      { name: "Vite", level: "advanced" },
      { name: "Angular", level: "intermediate" },
      { name: "WebGL2", level: "intermediate" },
      { name: "Framer Motion", level: "intermediate" },
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
      { name: "REST APIs", level: "expert" },
      { name: "WebSockets", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "Java / Spring Boot", level: "intermediate" },
      { name: "C# / .NET", level: "intermediate" },
      { name: "Go", level: "intermediate" },
      { name: "Server-Sent Events", level: "intermediate" },
    ],
  },
  {
    id: "ai",
    label: {
      de: "KI & Agentic Coding",
      en: "AI & Agentic Coding",
      fr: "IA & Agentic Coding",
      ar: "الذكاء الاصطناعي والبرمجة الوكيلية",
    },
    color: "#F59E0B",
    skills: [
      { name: "LLM Integration", level: "expert" },
      { name: "OpenAI API", level: "expert" },
      { name: "Claude API", level: "expert" },
      { name: "Agentic Coding (Claude Code)", level: "expert" },
      { name: "Prompt Engineering", level: "expert" },
      { name: "Gemini API", level: "advanced" },
      { name: "Spring AI", level: "intermediate" },
      { name: "LangChain", level: "intermediate" },
      { name: "TensorFlow / PyTorch", level: "intermediate" },
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
      { name: "Data Modeling", level: "advanced" },
      { name: "Supabase", level: "advanced" },
      { name: "Prisma", level: "advanced" },
      { name: "SQLAlchemy", level: "advanced" },
      { name: "Flyway", level: "intermediate" },
    ],
  },
  {
    id: "devops",
    label: {
      de: "DevOps & Betrieb",
      en: "DevOps & Operations",
      fr: "DevOps & Exploitation",
      ar: "DevOps والتشغيل",
    },
    color: "#8B5CF6",
    skills: [
      { name: "Docker", level: "advanced" },
      { name: "GitHub Actions", level: "advanced" },
      { name: "CI/CD", level: "advanced" },
      { name: "Linux (VPS)", level: "advanced" },
      { name: "Caddy", level: "advanced" },
      { name: "Nginx", level: "intermediate" },
      { name: "Prometheus & Grafana", level: "intermediate" },
    ],
  },
  {
    id: "quality",
    label: {
      de: "Qualität & Sicherheit",
      en: "Quality & Security",
      fr: "Qualité & Sécurité",
      ar: "الجودة والأمان",
    },
    color: "#EC4899",
    skills: [
      { name: "pytest", level: "advanced" },
      { name: "Playwright (E2E)", level: "advanced" },
      { name: "JUnit 5 & Testcontainers", level: "intermediate" },
      { name: "Vitest", level: "intermediate" },
      { name: "OAuth 2.0 & JWT", level: "advanced" },
      { name: "Spring Security", level: "intermediate" },
      { name: "AES-256-GCM / Zero-Knowledge", level: "advanced" },
      { name: "Network Security", level: "intermediate" },
    ],
  },
];
