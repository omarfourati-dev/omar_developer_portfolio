export interface ExperienceEntry {
  id: string;
  company: string;
  role: { de: string; en: string; fr: string; ar: string };
  period: string;
  type: "work" | "education" | "certificate";
  description: { de: string; en: string; fr: string; ar: string };
  tags?: string[];
  current?: boolean;
}

export const experiences: ExperienceEntry[] = [
  {
    id: "keravonos-fulltime",
    company: "KERAVONOS GmbH",
    role: {
      de: "Software Developer (Vollzeit)",
      en: "Software Developer (Full-time)",
      fr: "Développeur Logiciel (Temps plein)",
      ar: "مطور برمجيات (دوام كامل)",
    },
    period: "Oktober 2025 – heute",
    type: "work",
    current: true,
    description: {
      de: "Entwicklung moderner Web-Applikationen und KI-Plattformen: unternehmensinterner Echtzeit-Chat, Pronto (B2B Sales AI) sowie laufende Kundenprojekte für ABUS Kransysteme.",
      en: "Building modern web applications and AI platforms: an internal real-time chat platform, Pronto (B2B sales AI), and ongoing client work for ABUS Kransysteme.",
      fr: "Développement d'applications web modernes et de plateformes IA : chat interne en temps réel, Pronto (sales AI B2B) et missions client pour ABUS Kransysteme.",
      ar: "تطوير تطبيقات ويب حديثة ومنصات ذكاء اصطناعي: منصة دردشة فورية داخلية و Pronto (مبيعات B2B) ومشاريع عميل ABUS Kransysteme.",
    },
    tags: ["Vue 3", "FastAPI", "TypeScript", "PostgreSQL", "OpenAI"],
  },
  {
    id: "keravonos-werkstudent",
    company: "KERAVONOS GmbH",
    role: {
      de: "Werkstudent Softwareentwicklung",
      en: "Working Student, Software Development",
      fr: "Étudiant Salarié, Développement Logiciel",
      ar: "طالب عامل، تطوير البرمجيات",
    },
    period: "März 2023 – September 2025",
    type: "work",
    description: {
      de: "Neben dem Studium: Entwicklung eines unternehmensinternen Echtzeit-Chats und der B2B-Plattform Pronto, Mitarbeit an rentgate (Vermietungssoftware) sowie Kundenprojekte für ABUS Kransysteme.",
      en: "While studying: built an internal real-time chat platform and the B2B platform Pronto, contributed to rentgate (rental software), alongside client projects for ABUS Kransysteme.",
      fr: "Pendant les études : développement d'un chat interne en temps réel et de la plateforme B2B Pronto, contribution à rentgate (logiciel de location), ainsi que des projets clients pour ABUS Kransysteme.",
      ar: "بجانب الدراسة: تطوير منصة دردشة فورية داخلية ومنصة Pronto والمساهمة في rentgate (برنامج تأجير) ومشاريع عميل ABUS Kransysteme.",
    },
    tags: ["Vue 3", "FastAPI", "WebSockets", "OAuth 2.0", "MariaDB", "JavaScript"],
  },
];

export const education: ExperienceEntry[] = [
  {
    id: "bachelor-thkoeln",
    company: "TH Köln, Campus Gummersbach",
    role: {
      de: "B.Sc. Informatik",
      en: "B.Sc. Computer Science",
      fr: "Licence Informatique",
      ar: "بكالوريوس علوم الحاسب",
    },
    period: "2020 – September 2025",
    type: "education",
    description: {
      de: "Bachelorstudium der Informatik mit Schwerpunkt Softwareentwicklung, Algorithmen und KI-Systeme.",
      en: "Bachelor's in Computer Science with focus on software engineering, algorithms and AI systems.",
      fr: "Licence Informatique axée sur le génie logiciel, les algorithmes et les systèmes IA.",
      ar: "بكالوريوس علوم الحاسب مع التركيز على هندسة البرمجيات والخوارزميات وأنظمة الذكاء الاصطناعي.",
    },
    tags: ["Softwareentwicklung", "Algorithmen", "KI", "Datenbanken"],
  },
  {
    id: "dsh-heidelberg",
    company: "F+U Academy Heidelberg / TH Köln",
    role: {
      de: "DSH-Prüfung, Note 2",
      en: "DSH German Language Exam, Grade 2",
      fr: "Examen DSH Allemand, Note 2",
      ar: "اختبار اللغة الألمانية DSH، درجة 2",
    },
    period: "2018 – 2020",
    type: "education",
    description: {
      de: "Deutsche Sprachprüfung für den Hochschulzugang (DSH) erfolgreich mit Note 2 bestanden.",
      en: "Passed the German language proficiency exam for university admission with grade 2.",
      fr: "Réussi l'examen d'allemand pour l'accès aux études supérieures avec la note 2.",
      ar: "اجتياز امتحان اللغة الألمانية للقبول الجامعي بدرجة 2.",
    },
  },
];

export const certificates: ExperienceEntry[] = [
  {
    id: "cert-react-ecommerce",
    company: "Udemy",
    role: {
      de: "Build a Custom E-Commerce Site in React + JavaScript Basics",
      en: "Build a Custom E-Commerce Site in React + JavaScript Basics",
      fr: "Build a Custom E-Commerce Site in React + JavaScript Basics",
      ar: "Build a Custom E-Commerce Site in React + JavaScript Basics",
    },
    period: "2026",
    type: "certificate",
    description: {
      de: "Entwicklung einer individuellen E-Commerce-Website mit React und JavaScript.",
      en: "Building a custom e-commerce website with React and JavaScript.",
      fr: "Création d'un site e-commerce sur mesure avec React et JavaScript.",
      ar: "بناء موقع تجارة إلكترونية مخصص باستخدام React و JavaScript.",
    },
    tags: ["React", "JavaScript", "E-Commerce"],
  },
  {
    id: "cert-java-ai",
    company: "Udemy",
    role: {
      de: "Learn Java and Artificial Intelligence Programming Tools",
      en: "Learn Java and Artificial Intelligence Programming Tools",
      fr: "Learn Java and Artificial Intelligence Programming Tools",
      ar: "Learn Java and Artificial Intelligence Programming Tools",
    },
    period: "2026",
    type: "certificate",
    description: {
      de: "Java-Programmierung in Kombination mit KI-gestützten Entwicklungswerkzeugen.",
      en: "Java programming combined with AI-assisted development tools.",
      fr: "Programmation Java combinée à des outils de développement assistés par IA.",
      ar: "برمجة Java مع أدوات تطوير مدعومة بالذكاء الاصطناعي.",
    },
    tags: ["Java", "AI", "Programming Tools"],
  },
  {
    id: "cert-django",
    company: "Udemy",
    role: {
      de: "Build a Backend REST API with Python & Django",
      en: "Build a Backend REST API with Python & Django",
      fr: "Build a Backend REST API with Python & Django",
      ar: "Build a Backend REST API with Python & Django",
    },
    period: "2023",
    type: "certificate",
    description: {
      de: "Aufbau einer produktionsnahen REST-API mit Python, Django und dem Django REST Framework.",
      en: "Building a production-style REST API with Python, Django and the Django REST Framework.",
      fr: "Création d'une API REST avec Python, Django et le Django REST Framework.",
      ar: "بناء واجهة برمجة تطبيقات REST باستخدام Python و Django و Django REST Framework.",
    },
    tags: ["Python", "Django", "REST API"],
  },
  {
    id: "cert-js",
    company: "Udemy",
    role: {
      de: "JavaScript: From Zero to Expert",
      en: "JavaScript: From Zero to Expert",
      fr: "JavaScript: From Zero to Expert",
      ar: "JavaScript: من الصفر إلى الخبير",
    },
    period: "2023",
    type: "certificate",
    description: {
      de: "Umfassendes JavaScript-Zertifikat, von Grundlagen bis zu fortgeschrittenen Konzepten.",
      en: "Comprehensive JavaScript certification from basics to advanced concepts.",
      fr: "Certification JavaScript complète de Udemy.",
      ar: "شهادة JavaScript شاملة من Udemy.",
    },
    tags: ["JavaScript", "ES6+"],
  },
  {
    id: "cert-testing",
    company: "German Testing Board / TH Köln",
    role: {
      de: "Software Qualitätssicherung",
      en: "Software Quality Assurance",
      fr: "Assurance Qualité Logicielle",
      ar: "ضمان جودة البرمجيات",
    },
    period: "2022 – 2023",
    type: "certificate",
    description: {
      de: "Zertifizierung in Software-Qualitätssicherung vom German Testing Board.",
      en: "Software quality assurance certification from German Testing Board.",
      fr: "Certification en assurance qualité logicielle du German Testing Board.",
      ar: "شهادة ضمان جودة البرمجيات من مجلس الاختبار الألماني.",
    },
    tags: ["QA", "Testing", "Software-Qualität"],
  },
  {
    id: "cert-python",
    company: "Udemy",
    role: {
      de: "Python: Complete Pro Bootcamp",
      en: "Python: Complete Pro Bootcamp",
      fr: "Python: Complete Pro Bootcamp",
      ar: "Python: برنامج التدريب الاحترافي الكامل",
    },
    period: "2021 – 2023",
    type: "certificate",
    description: {
      de: "Professionelles Python-Bootcamp mit Django, REST APIs und Data Science.",
      en: "Professional Python bootcamp including Django, REST APIs and Data Science.",
      fr: "Bootcamp Python professionnel incluant Django et Data Science.",
      ar: "بوتكامب Python احترافي يشمل Django وواجهات برمجة التطبيقات.",
    },
    tags: ["Python", "Django", "Data Science"],
  },
];
