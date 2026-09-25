import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import LegalArticle from "@/components/ui/LegalArticle";
import { ADSENSE_META } from "@/lib/seo";

const BASE_URL = "https://omarfourati.de";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Impressum — Omar Fourati",
    description: "Impressum von Omar Fourati, Full-Stack Developer aus Gummersbach, gemäß § 5 DDG.",
    alternates: { canonical: `${BASE_URL}/${locale}/impressum` },
    robots: { index: false, follow: true },
    other: ADSENSE_META,
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <LegalArticle locale={locale} backLabel={t("back")} title="Impressum">
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <address>
          Omar Fourati
          <br />
          Am Sandberg 28
          <br />
          51643 Gummersbach
          <br />
          Deutschland
        </address>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:info@omarfourati.de">info@omarfourati.de</a>
          <br />
          Web: <a href="https://omarfourati.de" rel="noopener">omarfourati.de</a>
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>Omar Fourati, Anschrift wie oben.</p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als
          Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen; rechtswidrige Inhalte
          entferne ich umgehend, sobald ich davon Kenntnis erlange.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Diese Seite enthält Links zu externen Websites Dritter (u. a. GitHub, LinkedIn), auf deren
          Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links
          umgehend entfernen.
        </p>
      </section>
    </LegalArticle>
  );
}
