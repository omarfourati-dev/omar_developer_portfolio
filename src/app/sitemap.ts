import { MetadataRoute } from "next";

const BASE_URL = "https://omarfourati.de";
const locales = ["de", "en", "fr", "ar"];

function languageAlternates() {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${BASE_URL}/${locale}`;
  }
  languages["x-default"] = `${BASE_URL}/de`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const languages = languageAlternates();

  // Only final URLs: the root redirects to /de, and redirecting URLs do not belong in a sitemap
  // One entry per locale
  const localeEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: locale === "de" ? 1.0 : 0.9,
    alternates: { languages },
  }));

  return localeEntries;
}
