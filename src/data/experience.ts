export interface ExperienceEntry {
  id: string;
  company: string;
  role: {
    de: string;
    en: string;
    fr: string;
    ar: string;
  };
  period: string;
  type: "work" | "education" | "certificate";
  description: {
    de: string;
    en: string;
    fr: string;
    ar: string;
  };
  tags?: string[];
  current?: boolean;
}

export const experiences: ExperienceEntry[] = [
  {
    id: "freelance-fullstack",
    company: "Freelance",
    role: {
      de: "Fullstack Entwickler",
      en: "Fullstack Developer",
      fr: "Développeur Fullstack",
      ar: "مطور Fullstack",
    },
    period: "2022 - Present",
    type: "work",
    description: {
      de: "Entwicklung von KI-gestützten Anwendungen und B2B-SaaS-Plattformen. Spezialisiert auf Next.js, React, FastAPI und Machine Learning Integrationen.",
      en: "Building AI-powered applications and B2B SaaS platforms. Specialized in Next.js, React, FastAPI, and ML integrations.",
      fr: "Création d'applications alimentées par l'IA et de plateformes SaaS B2B. Spécialisé dans Next.js, React, FastAPI et les intégrations ML.",
      ar: "بناء التطبيقات المدعومة بالذكاء الاصطناعي ومنصات SaaS للشركات. متخصص في Next.js و React و FastAPI وتكاملات ML.",
    },
    tags: ["Next.js", "React", "FastAPI", "Python", "TypeScript", "PostgreSQL"],
    current: true,
  },
  {
    id: "ai-engineer",
    company: "AI Startup",
    role: {
      de: "KI-Ingenieur",
      en: "AI Engineer",
      fr: "Ingénieur IA",
      ar: "مهندس ذكاء اصطناعي",
    },
    period: "2021 - 2022",
    type: "work",
    description: {
      de: "Entwicklung von Machine Learning Modellen und KI-Konsens-Systemen. Implementierung von LLM-Integrationen mit OpenAI, Anthropic und Google APIs.",
      en: "Built ML models and AI consensus systems. Implemented LLM integrations with OpenAI, Anthropic, and Google APIs.",
      fr: "Création de modèles ML et de systèmes de consensus IA. Intégration d'API LLM avec OpenAI, Anthropic et Google.",
      ar: "بناء نماذج ML وأنظمة إجماع الذكاء الاصطناعي. تكامل APIs LLM مع OpenAI و Anthropic و Google.",
    },
    tags: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Claude", "Gemini"],
    current: false,
  },
];

export const education: ExperienceEntry[] = [
  {
    id: "degree-computer-science",
    company: "University of Applied Sciences",
    role: {
      de: "Bachelor in Informatik",
      en: "Bachelor in Computer Science",
      fr: "Licence en Informatique",
      ar: "بكالوريوس علوم الحاسوب",
    },
    period: "2018 - 2021",
    type: "education",
    description: {
      de: "Abschluss mit Fokus auf Softwareentwicklung, Algorithmen und Web-Technologien. Durchschnittsnote: 1.8",
      en: "Graduated with focus on software development, algorithms, and web technologies. GPA: 1.8/4.0",
      fr: "Diplômé avec spécialisation en développement logiciel et technologie web. Moyenne: 1.8",
      ar: "تخرج مع التركيز على تطوير البرمجيات والخوارزميات وتقنيات الويب. المعدل التراكمي: 1.8",
    },
    tags: ["Computer Science", "Web Development", "Algorithms"],
    current: false,
  },
  {
    id: "bootcamp-ai",
    company: "AI Academy Online",
    role: {
      de: "Spezialisierung: Künstliche Intelligenz & Machine Learning",
      en: "Specialization: AI & Machine Learning",
      fr: "Spécialisation: IA et Machine Learning",
      ar: "تخصص: الذكاء الاصطناعي والتعلم الآلي",
    },
    period: "2021 - 2022",
    type: "education",
    description: {
      de: "Intensive Schulung in Deep Learning, Natural Language Processing und Large Language Models. 400+ Stunden praktisches Lernen.",
      en: "Intensive training in Deep Learning, NLP, and LLMs. 400+ hours of hands-on learning.",
      fr: "Formation intensive en Deep Learning, NLP et LLMs. 400+ heures d'apprentissage pratique.",
      ar: "تدريب مكثف في Deep Learning و NLP و LLMs. أكثر من 400 ساعة من التعلم العملي.",
    },
    tags: ["AI", "ML", "Deep Learning", "NLP", "LLM"],
    current: false,
  },
];

export const certificates: ExperienceEntry[] = [
  {
    id: "cert-aws",
    company: "Amazon Web Services",
    role: {
      de: "AWS Certified Solutions Architect",
      en: "AWS Certified Solutions Architect",
      fr: "AWS Certified Solutions Architect",
      ar: "معماري الحلول المعتمد من AWS",
    },
    period: "2023",
    type: "certificate",
    description: {
      de: "Zertifizierung für Cloud-Architektur und AWS-Services. Validiert Expertise in Skalierbarkeit, Sicherheit und Kostenoptimierung.",
      en: "Certification for cloud architecture and AWS services. Validates expertise in scalability, security, and cost optimization.",
      fr: "Certification en architecture cloud et services AWS. Valide l'expertise en scalabilité, sécurité et optimisation des coûts.",
      ar: "شهادة في بنية السحابة وخدمات AWS. توثيق الخبرة في القابلية للتوسع والأمان وتحسين التكاليف.",
    },
    tags: ["AWS", "Cloud", "Architecture"],
    current: false,
  },
  {
    id: "cert-gcp",
    company: "Google Cloud",
    role: {
      de: "Google Cloud Professional Cloud Architect",
      en: "Google Cloud Professional Cloud Architect",
      fr: "Google Cloud Professional Cloud Architect",
      ar: "معماري السحابة المهني من Google",
    },
    period: "2024",
    type: "certificate",
    description: {
      de: "Professionelle Zertifizierung für Google Cloud Platform. Expertise in Datenverwaltung, Machine Learning und produktiven Deployments.",
      en: "Professional certification for Google Cloud Platform. Expertise in data management, ML, and production deployments.",
      fr: "Certification professionnelle pour Google Cloud Platform. Expertise en gestion des données, ML et déploiements en production.",
      ar: "شهادة احترافية لمنصة Google Cloud. خبرة في إدارة البيانات و ML والنشر في الإنتاج.",
    },
    tags: ["Google Cloud", "GCP", "ML", "Data"],
    current: false,
  },
  {
    id: "cert-tensorflow",
    company: "DeepLearning.AI",
    role: {
      de: "TensorFlow Spezialist",
      en: "TensorFlow Specialist",
      fr: "Spécialiste TensorFlow",
      ar: "متخصص TensorFlow",
    },
    period: "2023",
    type: "certificate",
    description: {
      de: "Spezialisierungszertifikat für TensorFlow und Deep Learning. Praktische Expertise in Modellentwicklung und Optimierung.",
      en: "Specialization certificate for TensorFlow and Deep Learning. Practical expertise in model development and optimization.",
      fr: "Certificat de spécialisation pour TensorFlow et Deep Learning. Expertise pratique en développement et optimisation de modèles.",
      ar: "شهادة تخصص في TensorFlow والتعلم العميق. خبرة عملية في تطوير النماذج والتحسين.",
    },
    tags: ["TensorFlow", "Deep Learning", "ML"],
    current: false,
  },
];
