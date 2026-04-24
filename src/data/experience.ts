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
    company: "Keravonos GmbH",
    role: {
      de: "Software Developer — Vollzeit",
      en: "Software Developer — Full-time",
      fr: "Développeur Logiciel — Temps plein",
      ar: "مطور برمجيات — دوام كامل",
    },
    period: "Oktober 2025 — heute",
    type: "work",
    current: true,
    description: {
      de: "Entwicklung moderner Web-Applikationen und KI-Plattformen. Projekte: KerChat, Pronto (B2B Sales AI), RentGate (Vermietungssoftware) sowie laufende Kundenprojekte für ABUS Kransysteme.",
      en: "Building modern web applications and AI platforms. Projects: KerChat, Pronto (B2B sales AI), RentGate (rental software), and ongoing client work for ABUS Kransysteme.",
      fr: "Développement d'applications web modernes et de plateformes IA. Projets : KerChat, Pronto, RentGate (logiciel de location) et missions client pour ABUS Kransysteme.",
      ar: "تطوير تطبيقات ويب حديثة ومنصات ذكاء اصطناعي. مشاريع: KerChat و Pronto و RentGate (برنامج تأجير) ومشاريع عميل ABUS Kransysteme.",
    },
    tags: ["Vue 3", "FastAPI", "TypeScript", "PostgreSQL", "OpenAI"],
  },
  {
    id: "keravonos-werkstudent",
    company: "Keravonos GmbH",
    role: {
      de: "Werkstudent — Softwareentwicklung",
      en: "Working Student — Software Development",
      fr: "Étudiant Salarié — Développement Logiciel",
      ar: "طالب عامل — تطوير البرمجيات",
    },
    period: "März 2023 — September 2025",
    type: "work",
    description: {
      de: "Neben dem Studium: Entwicklung von KerChat, Pronto und RentGate sowie Kundenprojekte für ABUS Kransysteme.",
      en: "While studying: built KerChat, Pronto, and RentGate, alongside client projects for ABUS Kransysteme.",
      fr: "Pendant les études : développement de KerChat, Pronto et RentGate, ainsi que des projets clients pour ABUS Kransysteme.",
      ar: "بجانب الدراسة: تطوير KerChat و Pronto و RentGate ومشاريع عميل ABUS Kransysteme.",
    },
    tags: ["Vue 3", "FastAPI", "WebSockets", "OAuth 2.0", "MariaDB", "JavaScript"],
  },
];

export const education: ExperienceEntry[] = [
  {
    id: "bachelor-thkoeln",
    company: "TH Köln — Campus Gummersbach",
    role: {
      de: "B.Sc. Informatik",
      en: "B.Sc. Computer Science",
      fr: "Licence Informatique",
      ar: "بكالوريوس علوم الحاسب",
    },
    period: "2020 — September 2025",
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
      de: "DSH-Prüfung — Note 2",
      en: "DSH German Language Exam — Grade 2",
      fr: "Examen DSH Allemand — Note 2",
      ar: "اختبار اللغة الألمانية DSH — درجة 2",
    },
    period: "2018 — 2020",
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
      de: "Umfassendes JavaScript-Zertifikat — von Grundlagen bis zu fortgeschrittenen Konzepten.",
      en: "Comprehensive JavaScript certification from basics to advanced concepts.",
      fr: "Certification JavaScript complète de Udemy.",
      ar: "شهادة JavaScript شاملة من Udemy.",
    },
    tags: ["JavaScript", "ES6+"],
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
    period: "2021 — 2023",
    type: "certificate",
    description: {
      de: "Professionelles Python-Bootcamp mit Django, REST APIs und Data Science.",
      en: "Professional Python bootcamp including Django, REST APIs and Data Science.",
      fr: "Bootcamp Python professionnel incluant Django et Data Science.",
      ar: "بوتكامب Python احترافي يشمل Django وواجهات برمجة التطبيقات.",
    },
    tags: ["Python", "Django", "Data Science"],
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
    period: "2022 — 2023",
    type: "certificate",
    description: {
      de: "Zertifizierung in Software-Qualitätssicherung vom German Testing Board.",
      en: "Software quality assurance certification from German Testing Board.",
      fr: "Certification en assurance qualité logicielle du German Testing Board.",
      ar: "شهادة ضمان جودة البرمجيات من مجلس الاختبار الألماني.",
    },
    tags: ["QA", "Testing", "Software-Qualität"],
  },
];
