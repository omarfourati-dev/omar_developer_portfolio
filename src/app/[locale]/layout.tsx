import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Space_Mono, Noto_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import MotionProvider from "@/components/ui/MotionProvider";
import "../globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://omarfourati.de";

const metaByLocale: Record<string, { title: string; description: string; keywords: string[] }> = {
  de: {
    title: "Omar Fourati — Full-Stack Developer | Gummersbach",
    description:
      "Full-Stack Developer aus Gummersbach. Spezialisiert auf Python, FastAPI, Vue 3, TypeScript und KI-Integrationen. Verfügbar für Freelance-Projekte, SaaS-Entwicklung und Web-Apps.",
    keywords: [
      "Full-Stack Developer Gummersbach",
      "Freelance Webentwickler Deutschland",
      "Python FastAPI Entwickler",
      "Vue Entwickler NRW",
      "Next.js Entwickler",
      "KI Integration Freelancer",
      "LLM Integration Developer",
      "OpenAI GPT Entwickler",
      "SaaS Entwicklung NRW",
      "TypeScript Entwickler",
      "Webentwicklung Gummersbach NRW",
      "AI Developer Germany",
      "Omar Fourati",
      "Freelance Developer NRW",
      "Machine Learning Entwickler",
      "Softwareentwickler Gummersbach",
    ],
  },
  en: {
    title: "Omar Fourati — Full-Stack Developer | Gummersbach, Germany",
    description:
      "Full-Stack Developer based in Gummersbach, Germany. Expert in Python, FastAPI, Vue 3, TypeScript and LLM integrations. Available for freelance projects and SaaS development.",
    keywords: [
      "Full-Stack Developer Germany",
      "Freelance Web Developer Gummersbach",
      "Python FastAPI Developer",
      "Vue Developer Germany",
      "React Next.js Developer",
      "AI Integration Freelancer",
      "LLM Developer Germany",
      "OpenAI GPT Developer",
      "SaaS Development Germany",
      "TypeScript Developer",
      "Omar Fourati",
      "AI Developer Germany",
      "Machine Learning Developer",
      "Remote Developer Germany",
    ],
  },
  fr: {
    title: "Omar Fourati — Développeur Full-Stack | Gummersbach, Allemagne",
    description:
      "Développeur Full-Stack basé à Gummersbach, Allemagne. Expert en Python, FastAPI, Vue 3, TypeScript et intégrations LLM. Disponible pour projets freelance et développement SaaS.",
    keywords: [
      "Développeur Full-Stack Allemagne",
      "Freelance Développeur Web Allemagne",
      "Développeur Python FastAPI",
      "Développeur Vue TypeScript",
      "Intégration IA LLM",
      "Intégration OpenAI GPT",
      "Développement SaaS Allemagne",
      "Développeur Machine Learning",
      "Expert Intelligence Artificielle",
      "Développeur Web Freelance Europe",
      "Omar Fourati",
    ],
  },
  ar: {
    title: "Omar Fourati — Full-Stack Developer | Gummersbach",
    description:
      "Full-Stack Developer in Gummersbach, Germany. Specialized in Python, FastAPI, Vue 3, TypeScript and LLM integrations. Available for freelance projects.",
    keywords: [
      "Freelance Developer Germany Arabic",
      "Full-Stack Developer Gummersbach",
      "Python FastAPI Developer",
      "Vue TypeScript Developer",
      "AI Integration LLM",
      "OpenAI GPT Developer",
      "SaaS Development",
      "Machine Learning Germany",
      "Omar Fourati",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0907",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metaByLocale[locale] ?? metaByLocale.de;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    applicationName: "Omar Fourati — Developer Portfolio",
    category: "technology",
    authors: [{ name: "Omar Fourati", url: BASE_URL }],
    creator: "Omar Fourati",
    publisher: "Omar Fourati",
    metadataBase: new URL(BASE_URL),
    appleWebApp: {
      capable: true,
      title: "Omar Fourati",
      statusBarStyle: "black-translucent",
    },
    formatDetection: { telephone: false },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        de: `${BASE_URL}/de`,
        en: `${BASE_URL}/en`,
        fr: `${BASE_URL}/fr`,
        ar: `${BASE_URL}/ar`,
        "x-default": `${BASE_URL}/de`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}/${locale}`,
      siteName: "Omar Fourati — Developer Portfolio",
      type: "website",
      locale: locale === "de" ? "de_DE" : locale === "fr" ? "fr_FR" : locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: ["de_DE", "en_US", "fr_FR", "ar_SA"],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function StructuredData({ locale }: { locale: string }) {
  const isDE = locale === "de";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omar Fourati",
    url: BASE_URL,
    image: `${BASE_URL}/images/omar.JPG`,
    jobTitle: "Full-Stack Developer",
    description: isDE
      ? "Full-Stack Developer aus Gummersbach. 4+ Jahre Erfahrung. Python, FastAPI, Vue 3, TypeScript, KI. Freelance verfuegbar."
      : "Full-Stack Developer from Gummersbach. 4+ years experience. Python, FastAPI, Vue 3, TypeScript, AI. Available for freelance.",
    address: { "@type": "PostalAddress", addressLocality: "Gummersbach", addressRegion: "NRW", addressCountry: "DE" },
    email: "info@omarfourati.de",
    sameAs: ["https://github.com/omarfourati-dev", "https://www.linkedin.com/in/omar-fourati-63a9b11ba/", BASE_URL],
    knowsAbout: ["React","Next.js","TypeScript","FastAPI","Python","Vue 3","TensorFlow","PyTorch","OpenAI API","Claude API","LangChain","PostgreSQL","Docker","WebSockets","Tailwind CSS","Machine Learning","LLM Integration"],
    knowsLanguage: [{ "@type": "Language", name: "German" },{ "@type": "Language", name: "English" },{ "@type": "Language", name: "French" },{ "@type": "Language", name: "Arabic" }],
    worksFor: { "@type": "Organization", name: "KERAVONOS GmbH" },
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Omar Fourati — Developer Portfolio",
    url: BASE_URL,
    author: { "@type": "Person", name: "Omar Fourati" },
    inLanguage: ["de", "en", "fr", "ar"],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isDE ? "Freelance Webentwicklung & KI-Integration" : "Freelance Web Development & AI Integration",
    provider: { "@type": "Person", name: "Omar Fourati", url: BASE_URL },
    areaServed: [{ "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Austria" }, { "@type": "Country", name: "Switzerland" }],
    description: isDE
      ? "Full-Stack Entwicklung mit React/Next.js und Python/FastAPI. KI-Integration mit OpenAI, Claude und Gemini. Freelance DACH und remote."
      : "Full-Stack development with React/Next.js and Python/FastAPI. AI integration with OpenAI, Claude and Gemini. Freelance DACH and remote.",
    offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  };
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${BASE_URL}/${locale}`,
    inLanguage: locale,
    mainEntity: { "@type": "Person", name: "Omar Fourati", url: BASE_URL },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
    </>
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "common" });
  const isRTL = locale === "ar";
  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} className={`${dmSans.variable} ${syne.variable} ${spaceMono.variable} ${notoArabic.variable}`}>
      <head>
        <StructuredData locale={locale} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          {t("skip_to_content")}
        </a>
        <NextIntlClientProvider messages={messages}>
          <MotionProvider>{children}</MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
