import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Omar Fourati — Developer Portfolio",
    short_name: "Omar Fourati",
    description:
      "Full-Stack Developer & AI Specialist based in Cologne. React, Next.js, FastAPI, Python and LLM integrations. Available for freelance.",
    start_url: "/de",
    scope: "/",
    display: "standalone",
    background_color: "#0B0907",
    theme_color: "#0B0907",
    lang: "de",
    dir: "ltr",
    categories: ["portfolio", "technology", "developer"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
