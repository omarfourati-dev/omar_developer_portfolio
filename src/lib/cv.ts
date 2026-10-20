const CVS: Record<string, string> = {
  de: "/Lebenslauf.pdf",
  en: "/Omar-Fourati_CV_EN.pdf",
  fr: "/Omar-Fourati_CV_FR.pdf",
  ar: "/Omar-Fourati_CV_AR.pdf",
};

/** CV in the page's own language (sources: public/lebenslauf*.html; the English one lives in the application folder). */
export function cvHref(locale: string): string {
  return CVS[locale] ?? CVS.en;
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
