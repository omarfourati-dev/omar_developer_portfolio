/** Cookies in which Google's consent message (CMP) stores the visitor's ad-consent decision. */
export const CONSENT_COOKIES = ["FCCDCF", "FCNEC"];

/**
 * Withdraws the ad consent: forgets the stored decision (on this host and its parent domains) and reloads, so Google
 * asks again like on a first visit. Google's own googlefc.showRevocationMessage() did not reliably bring the message
 * back. Without the cookie Google treats the visitor as "no consent" until they decide again.
 */
export function resetAdConsent(): void {
  const parts = location.hostname.split(".");
  const domains = [""];
  for (let k = 0; k < parts.length - 1; k++) domains.push(`; domain=.${parts.slice(k).join(".")}`);
  for (const name of CONSENT_COOKIES) for (const d of domains) document.cookie = `${name}=; Max-Age=0; path=/${d}`;
  location.reload();
}

/** Is a consent decision stored in this browser? */
export function hasStoredConsentDecision(): boolean {
  return document.cookie.split(";").some((c) => c.trim().startsWith("FCCDCF="));
}
