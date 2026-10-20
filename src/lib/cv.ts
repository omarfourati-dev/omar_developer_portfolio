/** German page → German CV; every other language (EN, FR, AR) → English CV. */
export function cvHref(locale: string): string {
  return locale === "de" ? "/Lebenslauf.pdf" : "/Omar-Fourati_CV_EN.pdf";
}

const COVER_LETTERS: Record<string, string> = {
  de: "/Anschreiben.pdf",
  en: "/Omar-Fourati_Cover-Letter_EN.pdf",
  fr: "/Omar-Fourati_Lettre-de-motivation_FR.pdf",
  ar: "/Omar-Fourati_Cover-Letter_AR.pdf",
};

/** Cover letter in the page's own language (sources: public/anschreiben*.html). */
export function coverLetterHref(locale: string): string {
  return COVER_LETTERS[locale] ?? COVER_LETTERS.en;
}
