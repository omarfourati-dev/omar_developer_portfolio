export interface ExperienceEntry {
  id: string;
  company: string;
  role: { de: string; en: string; fr: string; ar: string };
  period: string;
  type: "work" | "education" | "certificate" | "volunteer";
  description: { de: string; en: string; fr: string; ar: string };
  tags?: string[];
  current?: boolean;
  /** Public verification page of a certificate (LinkedIn Learning, Udemy). */
  verifyUrl?: string;
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
    period: "Juni 2023 – September 2025",
    type: "work",
    description: {
      de: "Neben dem Studium: Entwicklung eines unternehmensinternen Echtzeit-Chats und der B2B-Plattform Pronto, Mitarbeit an rentgate (Vermietungssoftware) sowie Kundenprojekte für ABUS Kransysteme.",
      en: "While studying: built an internal real-time chat platform and the B2B platform Pronto, contributed to rentgate (rental software), alongside client projects for ABUS Kransysteme.",
      fr: "Pendant les études : développement d'un chat interne en temps réel et de la plateforme B2B Pronto, contribution à rentgate (logiciel de location), ainsi que des projets clients pour ABUS Kransysteme.",
      ar: "بجانب الدراسة: تطوير منصة دردشة فورية داخلية ومنصة Pronto والمساهمة في rentgate (برنامج تأجير) ومشاريع عميل ABUS Kransysteme.",
    },
    tags: ["Vue 3", "FastAPI", "WebSockets", "OAuth 2.0", "MariaDB", "JavaScript"],
  },
  {
    id: "keravonos-praktikum",
    company: "KERAVONOS GmbH",
    role: {
      de: "Freiwilliges Praktikum Softwareentwicklung",
      en: "Voluntary Internship, Software Development",
      fr: "Stage volontaire, Développement Logiciel",
      ar: "تدريب تطوعي، تطوير البرمجيات",
    },
    period: "März 2023 – Mai 2023",
    type: "work",
    description: {
      de: "Einstieg bei KERAVONOS: erste Mitarbeit an internen Web-Applikationen, bevor es als Werkstudent weiterging.",
      en: "Joined KERAVONOS: first contributions to internal web applications before continuing as a working student.",
      fr: "Arrivée chez KERAVONOS : premières contributions aux applications web internes avant de poursuivre comme étudiant salarié.",
      ar: "بداية العمل في KERAVONOS: أولى المساهمات في تطبيقات الويب الداخلية قبل الاستمرار كطالب عامل.",
    },
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
  {
    id: "abitur-sfax",
    company: "Lycée L.A.K.C, Sfax",
    role: {
      de: "Abitur (Schwerpunkt Mathematik)",
      en: "Baccalaureate (Mathematics)",
      fr: "Baccalauréat (section mathématiques)",
      ar: "البكالوريا (شعبة الرياضيات)",
    },
    period: "2013 – 2017",
    type: "education",
    description: {
      de: "Tunesisches Abitur (Baccalauréat) im Zweig Mathematik.",
      en: "Tunisian baccalaureate in the mathematics track.",
      fr: "Baccalauréat tunisien, section mathématiques.",
      ar: "البكالوريا التونسية، شعبة الرياضيات.",
    },
  },
];

export const volunteering: ExperienceEntry[] = [
  {
    id: "nachbarschaftshilfe-heidelberg",
    company: "Ökumenische Nachbarschaftshilfe mit Sozialdienst, Heidelberg",
    role: {
      de: "Freiwillige Nachbarschaftshilfe",
      en: "Volunteer neighbourhood support",
      fr: "Aide bénévole de voisinage",
      ar: "مساعدة تطوعية للجيران",
    },
    period: "2018 – 2020",
    type: "volunteer",
    description: {
      de: "Ehrenamtliche Unterstützung von Menschen in der Nachbarschaft im Alltag.",
      en: "Volunteer support for people in the neighbourhood with everyday tasks.",
      fr: "Soutien bénévole aux personnes du quartier dans leur quotidien.",
      ar: "دعم تطوعي لسكان الحي في شؤون حياتهم اليومية.",
    },
  },
];

export const certificates: ExperienceEntry[] = [
  {
    id: "cert-projektmanagement-planung",
    company: "LinkedIn Learning",
    role: {
      de: "Projektmanagement: Planung und Strukturierung",
      en: "Projektmanagement: Planung und Strukturierung",
      fr: "Projektmanagement: Planung und Strukturierung",
      ar: "Projektmanagement: Planung und Strukturierung",
    },
    period: "2026",
    type: "certificate",
    verifyUrl: "https://www.linkedin.com/learning/certificates/770988d68c1f202b343763bd3e80eba8317bd0d528cfc4b147231138b99600b3/",
    description: {
      de: "Projekte planen, klassisch und agil: von den Anforderungen zum Plan, Ablauf- und Terminplanung mit Netzplan und Gantt-Diagramm, Kosten, Ressourcen und Qualität (1 Std. 11 Min.).",
      en: "Planning projects, classic and agile: from requirements to plan, scheduling with network diagrams and Gantt charts, costs, resources and quality (1 h 11 min).",
      fr: "Planifier un projet, en mode classique et agile : des exigences au plan, ordonnancement avec diagramme de réseau et diagramme de Gantt, coûts, ressources et qualité (1 h 11 min).",
      ar: "تخطيط المشاريع بالطريقة التقليدية والرشيقة: من المتطلبات إلى الخطة، والجدولة بمخطط الشبكة ومخطط غانت، والتكاليف والموارد والجودة (ساعة و11 دقيقة).",
    },
    tags: ["Project Management"],
  },
  {
    id: "cert-projektmanagement-initiierung",
    company: "LinkedIn Learning",
    role: {
      de: "Projektmanagement: Initiierung und Setup",
      en: "Projektmanagement: Initiierung und Setup",
      fr: "Projektmanagement: Initiierung und Setup",
      ar: "Projektmanagement: Initiierung und Setup",
    },
    period: "2026",
    type: "certificate",
    verifyUrl: "https://www.linkedin.com/learning/certificates/27d02659f0e9611f5b1c46a97ac00b7233be3d9095b4e779b4d15942f3ca341b/",
    description: {
      de: "Projekte sauber starten: Initiierung, Auftrag und Setup (53 Min.).",
      en: "Starting projects properly: initiation, project mandate and setup (53 min).",
      fr: "Bien démarrer un projet : initialisation, mandat et mise en place (53 min).",
      ar: "بدء المشاريع بشكل صحيح: الإطلاق والتكليف والإعداد (53 دقيقة).",
    },
    tags: ["Project Management"],
  },
  {
    id: "cert-einfuehrung-projektmanagement",
    company: "LinkedIn Learning",
    role: {
      de: "Einführung ins Projektmanagement",
      en: "Einführung ins Projektmanagement",
      fr: "Einführung ins Projektmanagement",
      ar: "Einführung ins Projektmanagement",
    },
    period: "2026",
    type: "certificate",
    verifyUrl: "https://www.linkedin.com/learning/certificates/937afb155ee3348128cb6e7c4ae2fdd49fb9c92c20eca51fbf1daf5570f9bb37/",
    description: {
      de: "Einführung in Methoden und Ablauf des Projektmanagements (53 Min.).",
      en: "Introduction to project management methods and workflow (53 min).",
      fr: "Introduction aux méthodes et au déroulement de la gestion de projet (53 min).",
      ar: "مقدمة في أساليب إدارة المشاريع ومراحلها (53 دقيقة).",
    },
    tags: ["Project Management"],
  },
  {
    id: "cert-projektmanagement",
    company: "LinkedIn Learning",
    role: {
      de: "Berufsbild: Projektmanagement",
      en: "Berufsbild: Projektmanagement",
      fr: "Berufsbild: Projektmanagement",
      ar: "Berufsbild: Projektmanagement",
    },
    period: "2026",
    type: "certificate",
    verifyUrl: "https://www.linkedin.com/learning/certificates/a477017884da999891bc743e65c1c52164e25997314b624a1f602dbd8d6af576/",
    description: {
      de: "Einführung in Rolle, Aufgaben und Methoden von Projektmanager:innen (24 Min.).",
      en: "Introduction to the role, tasks and methods of a project manager (24 min).",
      fr: "Introduction au rôle, aux missions et aux méthodes du chef de projet (24 min).",
      ar: "مقدمة عن دور مدير المشاريع ومهامه وأساليبه (24 دقيقة).",
    },
    tags: ["Project Management"],
  },
  {
    id: "cert-devops-ai",
    company: "Udemy",
    role: {
      de: "Decoding DevOps – From Basics to Advanced Projects with AI",
      en: "Decoding DevOps – From Basics to Advanced Projects with AI",
      fr: "Decoding DevOps – From Basics to Advanced Projects with AI",
      ar: "Decoding DevOps – From Basics to Advanced Projects with AI",
    },
    period: "2026",
    type: "certificate",
    verifyUrl: "https://www.udemy.com/certificate/UC-9e0b9aa1-0a8f-47b5-aca6-00f8d1be701e/",
    description: {
      de: "DevOps von den Grundlagen bis zu fortgeschrittenen Projekten mit KI (64 Std.).",
      en: "DevOps from the basics to advanced projects with AI (64 hrs).",
      fr: "DevOps, des bases aux projets avancés avec l’IA (64 h).",
      ar: "DevOps من الأساسيات إلى المشاريع المتقدمة مع الذكاء الاصطناعي (64 ساعة).",
    },
    tags: ["DevOps", "CI/CD", "AI"],
  },
  {
    id: "cert-react-complete",
    company: "Udemy",
    role: {
      de: "React – Complete Developer Course with Hands-On Projects",
      en: "React – Complete Developer Course with Hands-On Projects",
      fr: "React – Complete Developer Course with Hands-On Projects",
      ar: "React – Complete Developer Course with Hands-On Projects",
    },
    period: "2026",
    type: "certificate",
    verifyUrl: "https://www.udemy.com/certificate/UC-9d3fe6fb-eebd-489f-900b-3cdd35d43157/",
    description: {
      de: "Umfassender React-Kurs mit praxisnahen Projekten (10,5 Std.).",
      en: "Comprehensive React course with hands-on projects (10.5 hrs).",
      fr: "Cours React complet avec des projets pratiques (10,5 h).",
      ar: "دورة React شاملة مع مشاريع عملية (10.5 ساعة).",
    },
    tags: ["React", "JavaScript"],
  },
  {
    id: "cert-ai-seo",
    company: "Udemy",
    role: {
      de: "Artificial Intelligence in SEO (Extreme Edition)",
      en: "Artificial Intelligence in SEO (Extreme Edition)",
      fr: "Artificial Intelligence in SEO (Extreme Edition)",
      ar: "Artificial Intelligence in SEO (Extreme Edition)",
    },
    period: "2026",
    type: "certificate",
    verifyUrl: "https://www.udemy.com/certificate/UC-14348314-3e3b-466d-8b2a-378d216730f6/",
    description: {
      de: "Einsatz von Künstlicher Intelligenz und KI-Tools in der Suchmaschinenoptimierung (SEO) (1,5 Std.).",
      en: "Using artificial intelligence and AI tools for search engine optimization (SEO) (1.5 hrs).",
      fr: "Utilisation de l'intelligence artificielle et des outils d'IA pour le référencement (SEO) (1,5 h).",
      ar: "استخدام الذكاء الاصطناعي وأدواته في تحسين محركات البحث (SEO) (1.5 ساعة).",
    },
    tags: ["KI", "SEO"],
  },
  {
    id: "cert-unity-physics",
    company: "Udemy",
    role: {
      de: "Physics For Unity 6.2 & C#",
      en: "Physics For Unity 6.2 & C#",
      fr: "Physics For Unity 6.2 & C#",
      ar: "Physics For Unity 6.2 & C#",
    },
    period: "2026",
    type: "certificate",
    verifyUrl: "https://www.udemy.com/certificate/UC-feb15b63-d0cf-49dc-9393-d52cb21f77ae/",
    description: {
      de: "Physik-Simulation in Unity 6.2 mit C#: Rigidbodies, Kollisionen und Kräfte für Spiele (3,5 Std.).",
      en: "Physics simulation in Unity 6.2 with C#: rigidbodies, collisions and forces for games (3.5 hrs).",
      fr: "Simulation physique dans Unity 6.2 avec C# : rigidbodies, collisions et forces pour les jeux (3,5 h).",
      ar: "محاكاة الفيزياء في Unity 6.2 باستخدام C#: الأجسام الصلبة والتصادمات والقوى للألعاب (3.5 ساعة).",
    },
    tags: ["Unity", "C#", "Game Physics"],
  },
  {
    id: "cert-cyber-security",
    company: "Udemy",
    role: {
      de: "The Complete Cyber Security Course: Network Security!",
      en: "The Complete Cyber Security Course: Network Security!",
      fr: "The Complete Cyber Security Course: Network Security!",
      ar: "The Complete Cyber Security Course: Network Security!",
    },
    period: "2026",
    type: "certificate",
    verifyUrl: "https://www.udemy.com/certificate/UC-5f3c968a-8021-4663-a70a-4ddc016e79ce/",
    description: {
      de: "Netzwerksicherheit: Firewalls, sichere Netzwerkarchitektur, WLAN-Sicherheit und Netzwerk-Monitoring (12,5 Std.).",
      en: "Network security: firewalls, secure network architecture, Wi-Fi security and network monitoring (12.5 hrs).",
      fr: "Sécurité réseau : pare-feu, architecture réseau sécurisée, sécurité Wi-Fi et surveillance réseau (12,5 h).",
      ar: "أمن الشبكات: الجدران النارية وبنية الشبكات الآمنة وأمن الواي فاي ومراقبة الشبكات (12.5 ساعة).",
    },
    tags: ["Netzwerksicherheit", "Firewalls", "Cyber Security"],
  },
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
    verifyUrl: "https://www.udemy.com/certificate/UC-be7e4fb9-6c56-48e4-8c43-65ceceba7fb6/",
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
    verifyUrl: "https://www.udemy.com/certificate/UC-126c98de-5c7c-43c2-8281-0dba44cc10c6/",
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
    verifyUrl: "https://www.udemy.com/certificate/UC-31a93f86-03c4-4531-9f0b-6cfb6bb2e3d5/",
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
      de: "Software-Qualitätssicherung",
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
    id: "cert-stressmanagement",
    company: "TH Köln",
    role: {
      de: "Stressmanagement & Persönlichkeitsentwicklung",
      en: "Stress Management & Personal Development",
      fr: "Gestion du stress et développement personnel",
      ar: "إدارة الضغوط وتطوير الذات",
    },
    period: "2022 – 2023",
    type: "certificate",
    description: {
      de: "Wahlfach im Wintersemester 2022/23: Achtsamkeit, Zeitmanagement und Coaching-Methoden (48 Unterrichtsstunden, 5 CP).",
      en: "Elective in winter semester 2022/23: mindfulness, time management and coaching methods (48 hours, 5 ECTS).",
      fr: "Module optionnel, semestre d'hiver 2022/23 : pleine conscience, gestion du temps et méthodes de coaching (48 heures, 5 ECTS).",
      ar: "مادة اختيارية في الفصل الشتوي 2022/23: اليقظة الذهنية وإدارة الوقت وأساليب التدريب (48 ساعة، 5 نقاط ECTS).",
    },
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
