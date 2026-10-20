/** German page → German CV; every other language (EN, FR, AR) → English CV. */
export function cvHref(locale: string): string {
  return locale === "de" ? "/Lebenslauf.pdf" : "/Omar-Fourati_CV_EN.pdf";
}
