import type { Metadata } from "next";
import { ADSENSE_META } from "@/lib/seo";

// This root layout renders no <html>/<body> — the actual document shell lives
// in src/app/[locale]/layout.tsx, the only place with real pages today. This
// metadata acts as the base default for every route (including special files
// like sitemap.ts/robots.ts/manifest.ts), so the AdSense verification tag is
// present even if a future route outside [locale] forgets to set it.
export const metadata: Metadata = {
  other: ADSENSE_META,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
