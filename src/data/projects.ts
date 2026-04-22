export interface Project {
  id: string;
  title: string;
  description: {
    de: string;
    en: string;
    fr: string;
    ar: string;
  };
  tags: string[];
  github?: string;
  featured: boolean;
  category: "ai" | "fullstack" | "security" | "ml" | "saas";
}

export const projects: Project[] = [
  {
    id: "llm-council",
    title: "LLM-Council",
    description: {
      de: "Dreistufiger KI-Konsens-Engine: Individuelle Modelle antworten, prüfen sich gegenseitig anonym und ein 'Vorsitzender' synthetisiert die finale Antwort.",
      en: "Three-stage AI consensus engine: models respond individually, conduct anonymous peer reviews, and a 'chairman' synthesizes the final answer.",
      fr: "Moteur de consensus IA en trois étapes : réponses individuelles, révision par les pairs anonyme, et un 'président' synthétise la réponse finale.",
      ar: "محرك إجماع الذكاء الاصطناعي ثلاثي المراحل: ردود فردية ومراجعة مجهولة الهوية واصطناعي نهائي.",
    },
    tags: ["React", "FastAPI", "OpenRouter", "Python", "TypeScript"],
    featured: true,
    category: "ai",
  },
  {
    id: "ki-wm-prognosen",
    title: "KI-WM-Prognosen",
    description: {
      de: "KI-Prognosen für die FIFA WM 2026 mit 4 LLM-Modellen (GPT-4o, Gemini, Claude, Grok). Transparente Vorhersagen mit Begründungen in 5 Sprachen.",
      en: "AI predictions for FIFA World Cup 2026 using 4 LLM models (GPT-4o, Gemini, Claude, Grok). Transparent forecasts with reasoning in 5 languages.",
      fr: "Prédictions IA pour la Coupe du Monde FIFA 2026 avec 4 modèles LLM. Prévisions transparentes avec raisonnement en 5 langues.",
      ar: "توقعات الذكاء الاصطناعي لكأس العالم 2026 باستخدام 4 نماذج ذكاء اصطناعي بشفافية كاملة.",
    },
    tags: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Docker", "OpenAI", "Gemini", "Claude"],
    featured: true,
    category: "ai",
  },
  {
    id: "trading-bot",
    title: "Trading-Bot",
    description: {
      de: "Produktionsreifes algorithmisches Handelssystem mit Machine Learning, technischer Analyse, Backtesting und Live-Marktüberwachung via MetaTrader5.",
      en: "Production-grade algorithmic trading system combining ML predictions, technical analysis, backtesting, and live market monitoring via MetaTrader5.",
      fr: "Système de trading algorithmique de production combinant ML, analyse technique, backtesting et surveillance du marché en direct via MetaTrader5.",
      ar: "نظام تداول خوارزمي متكامل يجمع تعلم الآلة والتحليل التقني والاختبار التاريخي ومراقبة السوق المباشرة.",
    },
    tags: ["Python", "TensorFlow", "PyTorch", "XGBoost", "MetaTrader5", "Dash", "PostgreSQL", "Telegram"],
    featured: true,
    category: "ml",
  },
  {
    id: "kerchat",
    title: "KerChat",
    description: {
      de: "Echtzeit-Chat-Plattform (Slack-Clone) mit OAuth-Authentifizierung, WebSockets, Multi-Channel-Support und Direktnachrichten.",
      en: "Real-time chat platform (Slack clone) with OAuth authentication, WebSockets, multi-channel support, and direct messaging.",
      fr: "Plateforme de chat en temps réel (clone Slack) avec authentification OAuth, WebSockets, support multi-canal et messagerie directe.",
      ar: "منصة دردشة فورية مع مصادقة OAuth ودعم متعدد القنوات والرسائل المباشرة.",
    },
    tags: ["Vue 3", "FastAPI", "WebSockets", "TypeScript", "Tailwind", "Google OAuth", "MariaDB"],
    featured: true,
    category: "fullstack",
  },
  {
    id: "pronto",
    title: "Pronto",
    description: {
      de: "B2B Sales Intelligence Platform: Aggregiert automatisierte Intent-Signale aus öffentlichen Quellen und generiert KI-personalisierte Outreach-Nachrichten.",
      en: "B2B sales intelligence platform that aggregates automated intent signals from public sources and generates AI-personalized outreach messages.",
      fr: "Plateforme de sales intelligence B2B qui agrège des signaux d'intention et génère des messages de prospection personnalisés par IA.",
      ar: "منصة ذكاء مبيعات B2B تجمع إشارات النية وتولد رسائل تواصل مخصصة بالذكاء الاصطناعي.",
    },
    tags: ["Vue 3", "FastAPI", "OpenAI", "TypeScript", "Tailwind", "Playwright", "MariaDB"],
    featured: true,
    category: "saas",
  },
  {
    id: "private-key-manager",
    title: "Private-Key-Manager",
    description: {
      de: "Enterprise-PWA für sicheres Passwort-Management mit client-seitiger AES-256-GCM Verschlüsselung, Zero-Knowledge-Architektur und Docker-Deployment.",
      en: "Enterprise PWA for secure credential management with client-side AES-256-GCM encryption, zero-knowledge architecture, and Docker deployment.",
      fr: "PWA entreprise pour la gestion sécurisée des identifiants avec chiffrement AES-256-GCM côté client et architecture zéro-connaissance.",
      ar: "تطبيق PWA لإدارة كلمات المرور مع تشفير AES-256-GCM من جانب العميل وبنية عدم المعرفة.",
    },
    tags: ["React", "Node.js", "AES-256-GCM", "Docker", "Nginx", "PostgreSQL", "JWT"],
    featured: true,
    category: "security",
  },
  {
    id: "ki-sport-prognose",
    title: "KI-Sport-Prognose",
    description: {
      de: "KI-gestützte Fußballprognosen mit mehreren LLM-Modellen und Konsens-System für Ligaspiele.",
      en: "AI-powered football predictions using multiple LLM models with a consensus system for league matches.",
      fr: "Prédictions football alimentées par IA avec plusieurs modèles LLM.",
      ar: "توقعات كرة القدم بالذكاء الاصطناعي مع نظام إجماع متعدد النماذج.",
    },
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    featured: false,
    category: "ai",
  },
  {
    id: "plan-your-idea",
    title: "DayFlow",
    description: {
      de: "Produktivitäts-App mit täglicher/wöchentlicher Aufgabenplanung, Ideen-Board (Masonry-Layout) und Link-Sammlung mit Open-Graph-Vorschauen.",
      en: "Productivity app with daily/weekly task planning, idea board (masonry layout), and link collection with Open Graph previews.",
      fr: "Application de productivité avec planification, tableau d'idées et collection de liens avec aperçus Open Graph.",
      ar: "تطبيق إنتاجية مع تخطيط المهام ولوحة أفكار وجمع الروابط.",
    },
    tags: ["Next.js", "Supabase", "TypeScript", "Zustand", "dnd-kit", "Playwright"],
    featured: false,
    category: "fullstack",
  },
  {
    id: "ai-children-books",
    title: "LinguaKids",
    description: {
      de: "KI-Plattform zur Generierung interaktiver Kinderbücher mit mehrsprachigen Lernfunktionen und Stripe-Zahlungsintegration.",
      en: "AI platform for generating interactive children's books with multilingual learning features and Stripe payment integration.",
      fr: "Plateforme IA pour générer des livres interactifs pour enfants avec apprentissage multilingue et paiement Stripe.",
      ar: "منصة ذكاء اصطناعي لإنشاء كتب أطفال تفاعلية متعددة اللغات.",
    },
    tags: ["Next.js 14", "Claude API", "OpenAI", "Stripe", "Supabase", "Radix UI"],
    featured: false,
    category: "ai",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
