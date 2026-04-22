"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const locales = ["de", "en", "fr", "ar"];

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const t = useTranslations("navigation");
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#experience", label: t("experience") },
    { href: "#contact", label: t("contact") },
  ];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || "/");
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(11,9,7,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo mark */}
          <motion.a
            href="#"
            className="relative flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span
              className="text-2xl font-extrabold tracking-tighter"
              style={{ fontFamily: "var(--font-syne)", color: "#C9A84C" }}
            >
              OF
            </span>
            <span
              className="hidden sm:block text-xs tracking-[0.2em] uppercase"
              style={{ color: "#6B6054" }}
            >
              Portfolio
            </span>
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#C9A84C]"
                style={{ color: "#A89B84" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: language switcher + hamburger */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div
              className="flex items-center gap-0.5 px-2 py-1 rounded-lg"
              style={{ backgroundColor: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.12)" }}
            >
              {locales.map((loc, i) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className="px-1.5 py-0.5 rounded text-xs font-medium transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    color: loc === locale ? "#C9A84C" : "#6B6054",
                    backgroundColor: loc === locale ? "rgba(201,168,76,0.15)" : "transparent",
                    borderRight: i < locales.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none",
                  }}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-lg"
              style={{ backgroundColor: "rgba(201,168,76,0.06)" }}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px"
                style={{ backgroundColor: "#C9A84C", borderRadius: "1px" }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-px"
                style={{ backgroundColor: "#A89B84", borderRadius: "1px" }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px"
                style={{ backgroundColor: "#A89B84", borderRadius: "1px" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-20 px-8"
            style={{ backgroundColor: "#0B0907" }}
          >
            {/* Geometric texture */}
            <div className="absolute inset-0 geometric-bg opacity-50" />

            <nav className="relative z-10 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4 py-4 border-b"
                  style={{ borderColor: "rgba(201,168,76,0.12)" }}
                >
                  <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-space-mono)", color: "#C9A84C" }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-syne)", color: "#F0E8D5" }}
                  >
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
