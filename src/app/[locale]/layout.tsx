import type { Metadata } from "next";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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

export const metadata: Metadata = {
  title: "Omar Fourati — Developer Portfolio",
  description: "Full-Stack Developer & AI Builder | Next.js, Python, AI/ML",
  keywords: ["Developer", "Portfolio", "React", "Next.js", "AI", "Full-Stack"],
  authors: [{ name: "Omar Fourati" }],
  openGraph: {
    title: "Omar Fourati — Developer Portfolio",
    description: "Full-Stack Developer & AI Builder",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${dmSans.variable} ${syne.variable} ${spaceMono.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
