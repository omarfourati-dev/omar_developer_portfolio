import { MetadataRoute } from "next";

const BASE_URL = "https://omarfourati.de";
const locales = ["de", "en", "fr", "ar"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Root redirect
  const root: MetadataRoute.Sitemap[0] = {
    url: BASE_URL,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
  };

  // One entry per locale
  const localeEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: locale === "de" ? 1.0 : 0.9,
  }));

  return [root, ...localeEntries];
}
