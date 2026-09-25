import Footer from "@/components/sections/Footer";

interface LegalArticleProps {
  locale: string;
  backLabel: string;
  title: string;
  updated?: string;
  children: React.ReactNode;
}

/**
 * Shared shell for the German-only legal pages (Impressum, Datenschutz).
 * Content is always German regardless of the active UI locale, so the
 * article body is wrapped in its own lang/dir to stay correct even under
 * the Arabic (RTL) locale.
 */
export default function LegalArticle({ locale, backLabel, title, updated, children }: LegalArticleProps) {
  return (
    <>
      <header className="relative px-[5%] pt-8 pb-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a
            href={`/${locale}`}
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "#A89B84" }}
          >
            <span
              className="text-xl font-extrabold tracking-tighter"
              style={{ fontFamily: "var(--font-syne)", color: "#C9A84C" }}
            >
              OF
            </span>
            <span>{backLabel}</span>
          </a>
        </div>
      </header>

      <main id="main" className="relative px-[5%] pt-10 pb-28 sm:pb-36">
        <div
          lang="de"
          dir="ltr"
          className="max-w-3xl mx-auto"
          style={{ color: "#C9BBA3" }}
        >
          <h1 className="text-section-title mb-2" style={{ color: "#F0E8D5" }}>
            {title}
          </h1>
          {updated && (
            <p className="text-xs mb-10" style={{ fontFamily: "var(--font-space-mono)", color: "#6B6054" }}>
              {updated}
            </p>
          )}
          {!updated && <div className="mb-10" />}

          <div className="legal-content flex flex-col gap-8">{children}</div>
        </div>
      </main>

      <Footer />
    </>
  );
}
