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
    id: "paint-ball-game",
    title: "Paint-Ball Game",
    description: {
      de: "Aktuelles Projekt: Online-Multiplayer-Paintball direkt im Browser – server-autoritativer C#/.NET-Gameserver über WSS, eigener WebGL2-Client mit Client-Side-Prediction, Bots, Matchmaking (MMR), mehreren Spielmodi und Progression.",
      en: "Current project: online multiplayer paintball right in the browser – server-authoritative C#/.NET game server over WSS, custom WebGL2 client with client-side prediction, bots, matchmaking (MMR), multiple game modes, and progression.",
      fr: "Projet actuel : paintball multijoueur en ligne directement dans le navigateur – serveur de jeu C#/.NET autoritaire via WSS, client WebGL2 maison avec prédiction côté client, bots, matchmaking (MMR), plusieurs modes de jeu et progression.",
      ar: "مشروع حالي: لعبة بينت بول جماعية عبر الإنترنت مباشرة في المتصفح – خادم ألعاب C#/.NET موثوق عبر WSS وعميل WebGL2 مخصص مع التنبؤ من جانب العميل وروبوتات ونظام مطابقة (MMR) وأوضاع لعب متعددة ونظام تقدّم.",
    },
    tags: ["C#", ".NET 10", "ASP.NET Core", "WebSockets", "WebGL2", "JavaScript", "Unity", "Docker", "GitHub Actions"],
    github: "https://github.com/omarfourati-dev/paint-ball-game",
    demo: "https://paint-ball-game.omarfourati.de/",
    featured: true,
    category: "fullstack",
  },
  {
    id: "belegfluss",
    title: "Belegfluss",
    description: {
      de: "KI-Rechnungseingang für kleine Firmen: Ein LLM liest PDF-Rechnungen per Spring AI direkt in typisierte Java-Records aus, automatische Prüfungen erkennen Dubletten, Rechenfehler und geänderte IBANs. Freigabe nach dem Vier-Augen-Prinzip (Spring Security, JWT, Rollen), Audit-Trail, DATEV-CSV-Export und Vue-3-Oberfläche mit Live-Status.",
      en: "AI invoice inbox for small businesses: an LLM extracts PDF invoices into typed Java records via Spring AI, automatic checks catch duplicates, calculation errors and changed IBANs. Four-eyes approval (Spring Security, JWT, roles), audit trail, DATEV-style CSV export and a Vue 3 UI with live status.",
      fr: "Boîte de réception de factures avec IA : un LLM extrait les factures PDF en records Java typés via Spring AI, des contrôles automatiques détectent doublons, erreurs de calcul et IBAN modifiés. Validation selon le principe des quatre yeux (Spring Security, JWT, rôles), piste d'audit, export CSV type DATEV et interface Vue 3 avec statut en direct.",
      ar: "صندوق وارد للفواتير بالذكاء الاصطناعي للشركات الصغيرة: يستخرج نموذج لغوي فواتير PDF إلى Java Records عبر Spring AI، وتكتشف الفحوصات التلقائية الفواتير المكررة وأخطاء الحساب وتغيّر الـ IBAN. موافقة بمبدأ العيون الأربع (Spring Security وJWT والأدوار) وسجل تدقيق وتصدير CSV بأسلوب DATEV وواجهة Vue 3 بحالة مباشرة.",
    },
    tags: ["Java 21", "Spring Boot", "Spring AI", "Spring Security", "PostgreSQL", "Vue 3", "TypeScript", "Testcontainers", "Docker"],
    github: "https://github.com/omarfourati-dev/belegfluss",
    demo: "https://belegfluss.omarfourati.de/",
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
    tags: ["Python", "TensorFlow", "PyTorch", "XGBoost", "MetaTrader5", "Dash", "PostgreSQL", "LangChain", "Telegram"],
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
    id: "rentgate",
    title: "rentgate",
    description: {
      de: "Projekt der KERAVONOS GmbH: digitale Vermietungs- und Buchungssoftware für Verleiher, mit der sich Mietobjekte, Verfügbarkeiten und Buchungen zentral verwalten und automatisieren lassen.",
      en: "KERAVONOS GmbH project: digital rental and booking software for landlords that centralizes and automates the management of rental units, availability, and bookings.",
      fr: "Projet de KERAVONOS GmbH : logiciel de location et de réservation numérique pour les loueurs, qui centralise et automatise la gestion des biens, des disponibilités et des réservations.",
      ar: "مشروع لشركة KERAVONOS GmbH: برنامج تأجير وحجز رقمي للمؤجرين يوحّد ويؤتمت إدارة الوحدات المؤجّرة والتوافر والحجوزات.",
    },
    tags: ["Vue 3", "FastAPI", "TypeScript", "Tailwind", "MariaDB"],
    demo: "https://rentgate.de/",
    featured: true,
    category: "fullstack",
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
    github: "https://github.com/omarfourati-dev/private-key-and-account-manager",
    demo: "https://securevault.omarfourati.de/",
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
