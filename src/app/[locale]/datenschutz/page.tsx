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
    title: "Datenschutzerklärung — Omar Fourati",
    description:
      "Datenschutzerklärung der Website omarfourati.de: Verantwortlicher, Hosting, Server-Logs, Cookies und Betroffenenrechte.",
    alternates: { canonical: `${BASE_URL}/${locale}/datenschutz` },
    robots: { index: false, follow: true },
    other: ADSENSE_META,
  };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <LegalArticle
      locale={locale}
      backLabel={t("back")}
      title="Datenschutzerklärung"
      updated="Stand: 25. September 2026"
    >
      <section>
        <h2>1. Verantwortlicher</h2>
        <address>
          Omar Fourati, Am Sandberg 28, 51643 Gummersbach, Deutschland
          <br />
          E-Mail: <a href="mailto:info@omarfourati.de">info@omarfourati.de</a>
        </address>
      </section>

      <section>
        <h2>2. Das Wichtigste in Kürze</h2>
        <ul>
          <li>
            Diese Website setzt <strong>keine Cookies</strong> und <strong>kein Tracking</strong> ein –
            es kommen keine Analyse- oder Werbe-Tools zum Einsatz.
          </li>
          <li>
            Es werden keine Inhalte von Drittanbietern nachgeladen: Schriftarten sind über next/font
            lokal eingebunden, Bilder und Dateien liegen auf meinem eigenen Server.
          </li>
          <li>
            Diese Website ist mit einem Google-AdSense-Konto zur Verifizierung verknüpft (siehe Abschnitt 6);
            aktuell werden <strong>keine Werbeanzeigen</strong> ausgespielt und <strong>kein AdSense-Skript</strong>{" "}
            geladen.
          </li>
          <li>Kontakt ist ausschließlich per E-Mail möglich.</li>
        </ul>
      </section>

      <section>
        <h2>3. Hosting</h2>
        <p>
          Diese Website läuft auf einem eigenen, bei der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur,
          angemieteten Server (VPS) in Deutschland. IONOS verarbeitet dabei ggf. anfallende Daten als
          Auftragsverarbeiter im Sinne von Art. 28 DSGVO. Die Verbindung ist per TLS verschlüsselt; die
          Zertifikate stellt Let&apos;s Encrypt (Internet Security Research Group, USA) aus. Dabei übermittelt
          der Server nur den Domainnamen an Let&apos;s Encrypt, keine Daten der Besucher.
        </p>
      </section>

      <section>
        <h2>4. Server-Logdateien (Zugriffsprotokolle)</h2>
        <p>
          Beim Aufruf dieser Website verarbeitet der eingesetzte Webserver (Caddy) technisch notwendig
          deine IP-Adresse, den Zeitpunkt und die angefragte Adresse, um die Seite auszuliefern. Die
          IP-Adresse wird dabei sofort gekürzt gespeichert (IPv4 auf /24, IPv6 auf /48) und ist damit
          nicht mehr einer einzelnen Person zuordenbar. Diese gekürzten Zugriffsprotokolle werden für
          maximal 90 Tage gespeichert und danach automatisch gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. f DSGVO – mein berechtigtes Interesse an einem sicheren und funktionsfähigen Betrieb der
          Website.
        </p>
      </section>

      <section>
        <h2>5. Cookies und Tracking</h2>
        <p>
          Diese Website verwendet keine Cookies und kein Tracking. Es kommen keine Analyse-Tools (z. B.
          Google Analytics) und keine Werbenetzwerke zum Einsatz. Sollte künftig ein datenschutzkonformes
          Analyse-Tool eingesetzt werden, wird diese Erklärung vorab entsprechend ergänzt.
        </p>
      </section>

      <section>
        <h2>6. Google AdSense (Verifizierung)</h2>
        <p>
          Diese Website ist mit einem Google-AdSense-Konto verknüpft, um die Inhaber-Verifizierung
          gegenüber der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, abzuschließen.
          Dazu werden lediglich ein Meta-Tag (<code>google-adsense-account</code>) im Quelltext und eine
          Datei <code>ads.txt</code> bereitgestellt. Es werden aktuell{" "}
          <strong>keine Werbeanzeigen eingeblendet</strong> und <strong>kein AdSense-Skript oder sonstiger
          Code von Google geladen</strong>; es findet daher keine Datenverarbeitung durch Google über diese
          Website statt. Sobald Werbung eingebunden wird, wird diese Datenschutzerklärung vorab entsprechend
          aktualisiert.
        </p>
      </section>

      <section>
        <h2>7. Kontaktaufnahme</h2>
        <p>
          Bei einer Kontaktaufnahme per E-Mail an{" "}
          <a href="mailto:info@omarfourati.de">info@omarfourati.de</a> verarbeite ich die von dir
          mitgeteilten Daten (z. B. Absenderadresse, Name, Inhalt der Nachricht) ausschließlich zur
          Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
        </p>
      </section>

      <section>
        <h2>8. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21).
          Wende dich dazu einfach per E-Mail an{" "}
          <a href="mailto:info@omarfourati.de">info@omarfourati.de</a>.
        </p>
        <p>
          Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, zum
          Beispiel bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen,
          Kavalleriestr. 2–4, 40213 Düsseldorf.
        </p>
      </section>

      <section>
        <h2>9. Keine automatisierte Entscheidungsfindung</h2>
        <p>Auf dieser Website findet keine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO statt.</p>
      </section>
    </LegalArticle>
  );
}
