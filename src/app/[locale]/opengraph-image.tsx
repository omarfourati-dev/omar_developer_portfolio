import { ImageResponse } from "next/og";

export const alt = "Omar Fourati — Full-Stack Developer & AI Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const copy: Record<string, { role: string; tag: string }> = {
  de: { role: "Full-Stack Developer & KI-Spezialist", tag: "Köln · Freelance verfügbar" },
  en: { role: "Full-Stack Developer & AI Specialist", tag: "Cologne · Available for freelance" },
  fr: { role: "Développeur Full-Stack & Spécialiste IA", tag: "Cologne · Disponible en freelance" },
  ar: { role: "Full-Stack Developer & AI Specialist", tag: "Cologne · Available for freelance" },
};

const tech = ["React", "Next.js", "TypeScript", "FastAPI", "Python", "OpenAI", "Docker"];

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { role, tag } = copy[locale] ?? copy.de;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0907",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          padding: 64,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* inset gold frame */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: "1px solid rgba(201,168,76,0.30)",
            borderRadius: 18,
            display: "flex",
          }}
        />

        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 14,
                border: "1px solid rgba(201,168,76,0.45)",
                color: "#C9A84C",
                fontSize: 32,
                fontWeight: 800,
              }}
            >
              OF
            </div>
            <div
              style={{
                color: "#C9A84C",
                fontSize: 20,
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              Developer Portfolio
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: "#10B981",
                display: "flex",
              }}
            />
            <div style={{ color: "#10B981", fontSize: 20 }}>{tag}</div>
          </div>
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#F0E8D5", fontSize: 130, fontWeight: 800, lineHeight: 1 }}>
            OMAR
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 130,
              fontWeight: 800,
              lineHeight: 1,
              color: "transparent",
              backgroundImage: "linear-gradient(135deg, #E8C96A, #C9A84C, #C4783E)",
              backgroundClip: "text",
            }}
          >
            FOURATI
          </div>
          <div style={{ display: "flex", marginTop: 24, color: "#A89B84", fontSize: 34 }}>{role}</div>
        </div>

        {/* Tech row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {tech.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                color: "#C9A84C",
                fontSize: 22,
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(201,168,76,0.25)",
                backgroundColor: "rgba(201,168,76,0.06)",
              }}
            >
              {t}
            </div>
          ))}
          <div style={{ display: "flex", marginLeft: "auto", color: "#6B6054", fontSize: 24 }}>
            omarfourati.de
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
