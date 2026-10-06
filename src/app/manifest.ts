import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Omar Fourati — Developer Portfolio",
    short_name: "Omar Fourati",
    description:
      "Full-Stack Developer based in Gummersbach. Python, FastAPI, Vue 3, TypeScript and LLM integrations. Open to a new full-time role.",
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
