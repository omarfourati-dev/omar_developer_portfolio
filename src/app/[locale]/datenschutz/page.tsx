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
      "Datenschutzerklärung der Website omarfourati.de: Verantwortlicher, Hosting, Server-Logs, Reichweitenmessung, Google AdSense mit Einwilligung, die Lern-App Redefluss und Betroffenenrechte.",
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
      updated="Stand: 23. Oktober 2026"
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
            Für die Reichweitenmessung nutze ich das selbst gehostete, cookie-freie Umami (Abschnitt 5) –
            dafür ist keine Einwilligung nötig.
          </li>
          <li>
            Diese Website finanziert sich teilweise über <strong>Werbeanzeigen von Google AdSense</strong>{" "}
            (Abschnitt 6). Cookies oder vergleichbare Technologien für Werbung werden{" "}
            <strong>nur mit deiner Einwilligung</strong> eingesetzt, die du über ein Einwilligungsfenster
            gibst und jederzeit über „Datenschutzeinstellungen“ unten auf jeder Seite ändern kannst.
          </li>
          <li>
            Schriftarten sind über next/font lokal eingebunden, Bilder und Dateien liegen auf meinem eigenen
            Server. Von Dritten wird nur der Code von Google AdSense geladen.
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
        <h2>5. Reichweitenmessung mit Umami</h2>
        <p>
          Um zu sehen, wie diese Website genutzt wird (z. B. Seitenaufrufe und Klicks auf Projekte oder
          Kontaktmöglichkeiten), setze ich <strong>Umami</strong> ein – eine Open-Source-Analyse-Software,
          die ich <strong>selbst auf meinem eigenen Server in Deutschland</strong> betreibe. Es fließen
          keine Daten an Umami als Unternehmen oder an sonstige Dritte.
        </p>
        <p>
          Umami arbeitet <strong>cookie-frei</strong>: Es setzt keinerlei Cookies und speichert nichts auf
          deinem Gerät. Deine IP-Adresse wird <strong>nicht gespeichert</strong>; sie wird nur kurz
          herangezogen, um zusammen mit einem täglich wechselnden Zufallswert (Salt) einen Hash-Wert zu
          bilden, mit dem wiederkehrende Besuche eines Tages erkannt werden, ohne die IP-Adresse selbst
          abzulegen – so arbeitet Umami standardmäßig. Aus diesem Hash lässt sich die IP-Adresse nicht
          zurückrechnen.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO – mein berechtigtes Interesse an einer
          datensparsamen Reichweitenmessung. Da nichts auf deinem Gerät gespeichert und nichts von deinem
          Gerät ausgelesen wird, ist § 25 TDDDG hier nicht anwendbar und es ist keine Einwilligung nötig.
        </p>
        <p>
          Du kannst der Messung jederzeit widersprechen (Art. 21 DSGVO), indem du einen Werbe- oder
          Tracking-Blocker nutzt oder „Nicht verfolgen“ (Do Not Track) in deinem Browser aktivierst – das
          Einbindungs-Skript ist mit <code>data-do-not-track=&quot;true&quot;</code> versehen und beachtet
          diese Einstellung.
        </p>
      </section>

      <section>
        <h2>6. Werbung mit Google AdSense</h2>
        <p>
          Auf dieser Website sowie auf den öffentlichen Startseiten meiner Projekte{" "}
          <code>belegfluss.omarfourati.de</code> und <code>briefklar.omarfourati.de</code> (nicht in den
          Anwendungen selbst unter <code>/app/</code>) sowie in meiner Lern-App{" "}
          <code>redefluss.omarfourati.de</code> und auf der Website meiner Kinderbuch-App{" "}
          <code>kibuka.omarfourati.de</code> blende ich Werbeanzeigen über{" "}
          <strong>Google AdSense</strong> ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow
          Street, Dublin 4, Irland („Google“).
        </p>
        <p>
          <strong>Kibuka:</strong> Da sich Kibuka an Kinder richtet, fordere ich dort ausschließlich{" "}
          <strong>nicht personalisierte Anzeigen</strong> an – unabhängig von der Einwilligung. In den
          Android- und iOS-Apps von Kibuka sowie im Login- und Verwaltungsbereich wird keine Werbung
          geladen. Die „Datenschutzeinstellungen“ findest du in Kibuka unter „Profil“.
        </p>
        <p>
          <strong>Einwilligung:</strong> Beim ersten Besuch zeigt Google in meinem Auftrag ein
          Einwilligungsfenster (eine von Google zertifizierte Consent-Management-Plattform nach dem IAB
          Transparency &amp; Consent Framework). Erst wenn du dort einwilligst, setzt Google Cookies bzw.
          liest Informationen auf deinem Gerät aus und zeigt dir personalisierte Werbung. Ohne Einwilligung
          werden – soweit Google sie anbietet – nur eingeschränkte, nicht personalisierte Anzeigen ohne
          Werbe-Cookies ausgespielt. Deine Entscheidung kannst du jederzeit über den Link{" "}
          <strong>„Datenschutzeinstellungen“</strong> unten auf jeder Seite ändern oder widerrufen; der
          Widerruf gilt für die Zukunft.
        </p>
        <p>
          <strong>Verarbeitete Daten:</strong> Um Anzeigen auszuliefern und Betrug zu erkennen, verarbeitet
          Google unter anderem deine IP-Adresse, Browser- und Geräteinformationen, die aufgerufene Seite, den
          Zeitpunkt sowie – bei Einwilligung – Cookie-Kennungen und Informationen zu Interaktionen mit
          Anzeigen. Google kann diese Daten auch in den USA verarbeiten; Google LLC ist nach dem EU-US Data
          Privacy Framework zertifiziert (Angemessenheitsbeschluss der EU-Kommission vom 10. Juli 2023).
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Für das Speichern und Auslesen von Informationen auf deinem
          Gerät deine Einwilligung (§ 25 Abs. 1 TDDDG), für die weitere Verarbeitung zu Werbezwecken Art. 6
          Abs. 1 lit. a DSGVO. Für die technisch notwendige Auslieferung nicht personalisierter Anzeigen
          ohne Zugriff auf dein Gerät und für die Betrugserkennung mein berechtigtes Interesse an der
          Finanzierung dieser Website (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          Weitere Informationen:{" "}
          <a href="https://policies.google.com/technologies/ads?hl=de" target="_blank" rel="noopener noreferrer">
            So verwendet Google Daten für Werbung
          </a>{" "}
          und die{" "}
          <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">
            Datenschutzerklärung von Google
          </a>
          . Personalisierte Werbung kannst du außerdem unter{" "}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            adssettings.google.com
          </a>{" "}
          abschalten. Zur Verifizierung des AdSense-Kontos stelle ich zusätzlich ein Meta-Tag und eine Datei{" "}
          <code>ads.txt</code> bereit.
        </p>
      </section>

      <section>
        <h2>7. Lern-App Redefluss (nur auf Einladung)</h2>
        <p>
          <code>redefluss.omarfourati.de</code> ist mein Deutsch-Sprechtrainer. Es gibt keine offene
          Registrierung: Ich lade einzelne Personen ein, indem ich für ihre E-Mail-Adresse einen Link erstelle
          und ihn selbst weitergebe – Redefluss verschickt keine E-Mails. Der Link ist 7 Tage gültig und nur
          einmal nutzbar.
        </p>
        <p>
          <strong>Gespeicherte Daten:</strong> zu jedem Konto die E-Mail-Adresse, das Passwort nur als
          bcrypt-Hash, die Rolle und das Anlagedatum; zu einer Einladung die E-Mail-Adresse, ein Hash des
          Einladungs-Tokens (nie das Token selbst) sowie Erstellungs-, Ablauf- und Nutzungszeitpunkt. Beim
          Üben speichert Redefluss pro Konto die erkannten Fehler mit Beispielsatz, Thema und Zeitpunkt der
          Übungen, die Wortschatz-Karten mit Lernstand, Tageszähler für die Limits und nach einem
          Vorstellungsgespräch die Zusammenfassung des Berichts (von einer Stellenanzeige nur die erste Zeile
          als Thema). Jedes Konto sieht ausschließlich seine eigenen Daten. <strong>Aufnahmen werden nie
          gespeichert</strong>, weder auf dem Server noch in der Datenbank. Im Browser legt Redefluss nur
          die Anmeldung (Token, E-Mail-Adresse, Rolle) im lokalen Speicher ab; das ist für die Anmeldung
          technisch notwendig (§ 25 Abs. 2 Nr. 2 TDDDG).
        </p>
        <p>
          <strong>Dienstleister:</strong> Für Spracherkennung, Korrektur, Sprachausgabe und das
          Live-Vorstellungsgespräch sende ich deine Aufnahme bzw. deinen Text an <strong>OpenAI</strong>{" "}
          (OpenAI Ireland Ltd., Dublin, Irland); beim Live-Gespräch läuft der Ton direkt zwischen deinem
          Browser und OpenAI. OpenAI kann die Daten auch in den USA verarbeiten; Grundlage sind die
          EU-Standardvertragsklauseln im Auftragsverarbeitungsvertrag von OpenAI. Nach eigenen Angaben nutzt
          OpenAI Daten aus der API nicht zum Training und speichert sie höchstens 30 Tage zur
          Missbrauchserkennung. Für die Aussprache-Bewertung geht die Aufnahme an{" "}
          <strong>Microsoft Azure Speech</strong> (Microsoft Ireland Operations Ltd., Dublin, Irland) mit
          Verarbeitung in einem Rechenzentrum in Deutschland. Beide sind als Auftragsverarbeiter tätig
          (Art. 28 DSGVO).
        </p>
        <p>
          <strong>Rechtsgrundlage und Löschung:</strong> Die Nutzung erfolgt auf Grundlage des
          Nutzungsverhältnisses (Art. 6 Abs. 1 lit. b DSGVO), die Speicherung einer noch nicht angenommenen
          Einladung auf Grundlage meines berechtigten Interesses, dich wie vorher abgesprochen einzuladen
          (Art. 6 Abs. 1 lit. f DSGVO). Möchtest du dein Konto nicht mehr nutzen, schreib mir eine E-Mail:
          Ich lösche es dann mit allen Übungsdaten vollständig. Nicht angenommene Einladungen lösche ich,
          sobald sie nicht mehr gebraucht werden.
        </p>
      </section>

      <section>
        <h2>8. Kontaktaufnahme</h2>
        <p>
          Bei einer Kontaktaufnahme per E-Mail an{" "}
          <a href="mailto:info@omarfourati.de">info@omarfourati.de</a> verarbeite ich die von dir
          mitgeteilten Daten (z. B. Absenderadresse, Name, Inhalt der Nachricht) ausschließlich zur
          Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
        </p>
      </section>

      <section>
        <h2>9. Deine Rechte</h2>
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
        <h2>10. Keine automatisierte Entscheidungsfindung</h2>
        <p>Auf dieser Website findet keine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO statt.</p>
      </section>
    </LegalArticle>
  );
}
