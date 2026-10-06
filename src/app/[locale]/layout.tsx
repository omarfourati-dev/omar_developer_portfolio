import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Space_Mono, Noto_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Script from "next/script";
import MotionProvider from "@/components/ui/MotionProvider";
import { ADSENSE_META } from "@/lib/seo";
import "../globals.css";

// Reichweitenmessung: selbst gehostetes Umami (Teil 2 der Analyse-Spec), cookie-frei. SRI-Hash zur festgelegten
// Umami-Version (3.4.0) von analytics.omarfourati.de/s.js; bei einem Versionswechsel neu berechnen.
const UMAMI_SCRIPT_SRC = "https://analytics.omarfourati.de/s.js";
const UMAMI_SCRIPT_INTEGRITY = "sha384-Q7LWJ0d79x9/eb2UnZhltUIhfCeHTL11GIX5RfQt0vpmPNfpEhfUDURwgKBLYmg7";
const UMAMI_WEBSITE_ID = "e1020630-355a-4920-8df0-9c792bef05b1";

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
      "Full-Stack Developer aus Gummersbach: Python, FastAPI, Vue 3, TypeScript, Java/Spring Boot und KI-Integrationen mit OpenAI und Claude. Offen für eine neue Festanstellung – remote oder in München.",
    keywords: [
      "Full-Stack Developer",
      "Full-Stack Entwickler Remote",
      "Python FastAPI Entwickler",
      "Vue 3 TypeScript Entwickler",
      "Java Spring Boot Entwickler",
      "KI Integration Entwickler",
      "LLM Integration Developer",
      "Agentic Coding",
      "Softwareentwickler NRW",
      "Softwareentwickler München",
      "Backend Entwickler Python",
      "Omar Fourati",
    ],
  },
  en: {
    title: "Omar Fourati — Full-Stack Developer | Gummersbach, Germany",
    description:
      "Full-Stack Developer in Germany: Python, FastAPI, Vue 3, TypeScript, Java/Spring Boot and LLM integrations with OpenAI and Claude. Open to a new full-time role – remote or in Munich.",
    keywords: [
      "Full-Stack Developer Germany",
      "Remote Full-Stack Developer",
      "Python FastAPI Developer",
      "Vue TypeScript Developer",
      "Java Spring Boot Developer",
      "AI Integration Developer",
      "LLM Developer Germany",
      "Agentic Coding",
      "Backend Developer Python",
      "Software Engineer Munich",
      "Omar Fourati",
    ],
  },
  fr: {
    title: "Omar Fourati — Développeur Full-Stack | Gummersbach, Allemagne",
    description:
      "Développeur Full-Stack en Allemagne : Python, FastAPI, Vue 3, TypeScript, Java/Spring Boot et intégrations LLM avec OpenAI et Claude. Ouvert à un nouveau poste en CDI – à distance ou à Munich.",
    keywords: [
      "Développeur Full-Stack Allemagne",
      "Développeur Full-Stack à distance",
      "Développeur Python FastAPI",
      "Développeur Vue TypeScript",
      "Développeur Java Spring Boot",
      "Intégration IA LLM",
      "Omar Fourati",
    ],
  },
  ar: {
    title: "Omar Fourati — Full-Stack Developer | Gummersbach",
    description:
      "Full-Stack Developer in Germany: Python, FastAPI, Vue 3, TypeScript, Java/Spring Boot and LLM integrations. Open to a new full-time role – remote or in Munich.",
    keywords: [
      "Full-Stack Developer Germany",
      "Python FastAPI Developer",
      "Vue TypeScript Developer",
      "Java Spring Boot Developer",
      "AI Integration LLM",
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
    other: ADSENSE_META,
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
      ? "Full-Stack Developer aus Gummersbach. Python, FastAPI, Vue 3, TypeScript, Java/Spring Boot, KI-Integration. Offen für eine neue Festanstellung."
      : "Full-Stack Developer from Gummersbach, Germany. Python, FastAPI, Vue 3, TypeScript, Java/Spring Boot, AI integration. Open to a new full-time role.",
    address: { "@type": "PostalAddress", addressLocality: "Gummersbach", addressRegion: "NRW", addressCountry: "DE" },
    email: "info@omarfourati.de",
    sameAs: ["https://github.com/omarfourati-dev", "https://www.linkedin.com/in/omarfourati/", BASE_URL],
    knowsAbout: ["Python","FastAPI","Vue 3","TypeScript","Java","Spring Boot","Spring AI","React","Next.js","C#",".NET","OpenAI API","Claude API","LLM Integration","Agentic Coding","LangChain","PostgreSQL","Docker","GitHub Actions","WebSockets","Tailwind CSS","Testcontainers","Playwright"],
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
        <Script
          src={UMAMI_SCRIPT_SRC}
          strategy="afterInteractive"
          integrity={UMAMI_SCRIPT_INTEGRITY}
          crossOrigin="anonymous"
          data-website-id={UMAMI_WEBSITE_ID}
          data-domains="omarfourati.de,www.omarfourati.de"
          data-do-not-track="true"
        />
      </body>
    </html>
  );
}
