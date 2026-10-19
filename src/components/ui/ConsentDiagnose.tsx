"use client";

import { useEffect, useState } from "react";
import { hasStoredConsentDecision, resetAdConsent } from "@/lib/consent";

type Row = { label: string; value: string; ok: boolean | null };
type GoogleFc = { getConsentStatus?: () => number };
type TcData = { gdprApplies?: boolean };
type AdWindow = {
  adsbygoogle?: { loaded?: boolean };
  googlefc?: GoogleFc;
  __tcfapi?: (command: string, version: number, callback: (data: TcData, success: boolean) => void) => void;
};

/** googlefc.ConsentStatusEnum */
const DECISION: Record<number, string> = {
  0: "noch keine",
  1: "eingewilligt (personalisierte Anzeigen)",
  2: "eingewilligt (nicht personalisierte Anzeigen)",
  3: "Unterstützer",
  4: "abgelehnt",
  5: "nicht nötig (außerhalb der EU)",
};

/** After this many seconds a missing script counts as blocked. */
const GRACE_SECONDS = 8;

/**
 * Diagnosis for the owner, only with "?diagnose" in the address: shows on any device (also on an iPhone without
 * developer tools) whether AdSense and Google's consent tool load, whether Google applies the GDPR to this visitor
 * and which decision is stored. Normal visitors never see it.
 */
export default function ConsentDiagnose() {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!new URLSearchParams(location.search).has("diagnose")) return;
    const w = window as unknown as AdWindow;
    const started = Date.now();
    let tcf: TcData | null = null;
    let listening = false;

    const check = () => {
      const late = (Date.now() - started) / 1000 > GRACE_SECONDS;
      if (!listening && typeof w.__tcfapi === "function") {
        listening = true;
        w.__tcfapi("addEventListener", 2, (data, success) => {
          if (success) tcf = data;
        });
      }
      const scriptLoaded = w.adsbygoogle?.loaded === true;
      const fc = w.googlefc;
      const fcLoaded = typeof fc?.getConsentStatus === "function";
      const inactive = [...document.querySelectorAll("iframe")].some((f) => f.name === "googlefcInactive");
      const status = fcLoaded ? fc!.getConsentStatus!() : null;
      const slots = [...document.querySelectorAll<HTMLElement>("ins.adsbygoogle")];
      setRows([
        {
          label: "Google-Skript (AdSense)",
          value: scriptLoaded ? "geladen" : late ? "blockiert – Werbeblocker, Tracking-Schutz oder DNS-Filter" : "lädt …",
          ok: scriptLoaded ? true : late ? false : null,
        },
        {
          label: "Google-Einwilligungs-Tool",
          value: fcLoaded
            ? inactive
              ? "geladen – Google zeigt dir gerade kein Fenster"
              : "geladen – Fenster wird angezeigt"
            : late
              ? "nicht geladen"
              : "lädt …",
          ok: fcLoaded ? true : late ? false : null,
        },
        {
          label: "DSGVO laut Google",
          value: tcf ? (tcf.gdprApplies ? "gilt (EU)" : "gilt nicht – Google hält dich für außerhalb der EU") : "unbekannt",
          ok: tcf ? Boolean(tcf.gdprApplies) : null,
        },
        { label: "Deine Entscheidung", value: status === null ? "unbekannt" : (DECISION[status] ?? String(status)), ok: null },
        { label: "Gespeichert (Cookie)", value: hasStoredConsentDecision() ? "ja" : "nein", ok: null },
        {
          label: "Werbeplätze",
          value:
            slots.length === 0
              ? "keine"
              : slots.map((s) => (s.dataset.anchorStatus ? "Anker" : (s.dataset.adStatus ?? "angefragt"))).join(", "),
          ok: null,
        },
      ]);
    };

    check();
    const timer = window.setInterval(check, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (!rows || !open) return null;
  const icon = (ok: boolean | null) => (ok === true ? "✅" : ok === false ? "❌" : "•");
  return (
    <div
      role="status"
      aria-label="Werbe-Diagnose"
      style={{
        position: "fixed",
        left: 8,
        bottom: 8,
        zIndex: 2147483647,
        width: "min(380px, calc(100vw - 16px))",
        padding: "12px 14px",
        borderRadius: 12,
        background: "rgba(11,9,7,0.96)",
        border: "1px solid rgba(201,168,76,0.5)",
        color: "#f0e8d8",
        font: "13px/1.45 system-ui, sans-serif",
        boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
      }}
    >
      <strong style={{ color: "#C9A84C" }}>Werbe-Diagnose</strong>
      <ul style={{ listStyle: "none", margin: "8px 0", padding: 0 }}>
        {rows.map((r) => (
          <li key={r.label} style={{ margin: "4px 0" }}>
            {icon(r.ok)} <span style={{ color: "#938572" }}>{r.label}:</span> {r.value}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={resetAdConsent} style={buttonStyle}>
          Entscheidung zurücksetzen
        </button>
        <button type="button" onClick={() => setOpen(false)} style={buttonStyle}>
          Schließen
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "6px 10px",
  borderRadius: 8,
  border: "1px solid rgba(201,168,76,0.5)",
  background: "transparent",
  color: "#C9A84C",
  font: "inherit",
  cursor: "pointer",
} as const;
