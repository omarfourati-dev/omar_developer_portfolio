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
  demo?: string;
  featured: boolean;
  category: "ai" | "fullstack" | "security" | "ml" | "saas";
}

export const projects: Project[] = [
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
    title: "Echtzeit-Chat",
    description: {
      de: "Internes Projekt der KERAVONOS GmbH: Echtzeit-Chat-Plattform (Slack-Clone) mit OAuth-Authentifizierung, WebSockets, Multi-Channel-Support und Direktnachrichten.",
      en: "Internal project for KERAVONOS GmbH: real-time chat platform (Slack clone) with OAuth authentication, WebSockets, multi-channel support, and direct messaging.",
      fr: "Projet interne de KERAVONOS GmbH : plateforme de chat en temps réel (clone Slack) avec authentification OAuth, WebSockets, support multi-canal et messagerie directe.",
      ar: "مشروع داخلي لشركة KERAVONOS GmbH: منصة دردشة فورية مع مصادقة OAuth ودعم متعدد القنوات والرسائل المباشرة.",
    },
    tags: ["Vue 3", "FastAPI", "WebSockets", "TypeScript", "Tailwind", "Google OAuth", "MariaDB"],
    featured: true,
    category: "fullstack",
  },
  {
    id: "pronto",
    title: "Pronto",
    description: {
      de: "Internes Projekt der KERAVONOS GmbH: B2B Sales Intelligence Platform, die automatisierte Intent-Signale aus öffentlichen Quellen aggregiert und KI-personalisierte Outreach-Nachrichten generiert.",
      en: "Internal project for KERAVONOS GmbH: B2B sales intelligence platform that aggregates automated intent signals from public sources and generates AI-personalized outreach messages.",
      fr: "Projet interne de KERAVONOS GmbH : plateforme de sales intelligence B2B qui agrège des signaux d'intention et génère des messages de prospection personnalisés par IA.",
      ar: "مشروع داخلي لشركة KERAVONOS GmbH: منصة ذكاء مبيعات B2B تجمع إشارات النية وتولد رسائل تواصل مخصصة بالذكاء الاصطناعي.",
    },
    tags: ["Vue 3", "FastAPI", "OpenAI", "TypeScript", "Tailwind", "Playwright", "MariaDB"],
    demo: "https://pronto.keravonos.com/",
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
      de: "Aktuelles Projekt: KI-gestützte Fußballprognosen mit mehreren LLM-Modellen und Konsens-System für Ligaspiele.",
      en: "Current project: AI-powered football predictions using multiple LLM models with a consensus system for league matches.",
      fr: "Projet actuel : prédictions football alimentées par IA avec plusieurs modèles LLM.",
      ar: "مشروع حالي: توقعات كرة القدم بالذكاء الاصطناعي مع نظام إجماع متعدد النماذج.",
    },
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    demo: "https://ki-fussball-prognosen.de/",
    featured: true,
    category: "ai",
  },
  {
    id: "plan-your-idea",
    title: "DayFlow",
    description: {
      de: "Aktuelles Projekt: Produktivitäts-App mit täglicher/wöchentlicher Aufgabenplanung, Ideen-Board (Masonry-Layout) und Link-Sammlung mit Open-Graph-Vorschauen.",
      en: "Current project: productivity app with daily/weekly task planning, idea board (masonry layout), and link collection with Open Graph previews.",
      fr: "Projet actuel : application de productivité avec planification, tableau d'idées et collection de liens avec aperçus Open Graph.",
      ar: "مشروع حالي: تطبيق إنتاجية مع تخطيط المهام ولوحة أفكار وجمع الروابط.",
    },
    tags: ["Next.js", "Supabase", "TypeScript", "Zustand", "dnd-kit", "Playwright"],
    demo: "https://tnt.sg-digital.de/",
    featured: true,
    category: "fullstack",
  },
  {
    id: "ai-children-books",
    title: "LiguaKids",
    description: {
      de: "In Bearbeitung: KI-Plattform zur Generierung interaktiver Kinderbücher mit mehrsprachigen Lernfunktionen und Stripe-Zahlungsintegration.",
      en: "In progress: AI platform for generating interactive children's books with multilingual learning features and Stripe payment integration.",
      fr: "En cours : plateforme IA pour générer des livres interactifs pour enfants avec apprentissage multilingue et paiement Stripe.",
      ar: "قيد التطوير: منصة ذكاء اصطناعي لإنشاء كتب أطفال تفاعلية متعددة اللغات.",
    },
    tags: ["Next.js 14", "Claude API", "OpenAI", "Stripe", "Supabase", "Radix UI"],
    featured: false,
    category: "ai",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
