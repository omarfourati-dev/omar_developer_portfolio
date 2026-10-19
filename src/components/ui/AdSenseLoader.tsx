"use client";

import { useEffect } from "react";
import { ADSENSE_SCRIPT_SRC } from "@/lib/seo";

/**
 * Loads Google AdSense (auto ads + Google's consent message) once, after hydration, as a plain <script>.
 * Not next/script: AdSense warns that its head tag doesn't support next/script's data-nscript attribute.
 * Not in <head> at render time: AdSense inserts its own scripts there, which would break React's head hydration.
 */
export default function AdSenseLoader() {
  useEffect(() => {
    if (document.querySelector(`script[src="${ADSENSE_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = ADSENSE_SCRIPT_SRC;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);
  return null;
}
