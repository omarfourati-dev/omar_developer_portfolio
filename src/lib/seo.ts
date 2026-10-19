// Shared SEO/verification constants used across layouts and pages.

/** Google AdSense publisher ID, used for the account-verification meta tag and ads.txt. Public by design. */
export const ADSENSE_ACCOUNT = "ca-pub-4072840905222883";

/** AdSense loader (auto ads). Google's own consent message (CMP from "Privacy & messaging") is served through it. */
export const ADSENSE_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ACCOUNT}`;

/** Meta tag payload for Next.js Metadata `other` field. */
export const ADSENSE_META = { "google-adsense-account": ADSENSE_ACCOUNT } as const;
