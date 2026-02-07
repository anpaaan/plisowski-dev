"use client";

import { useState, useEffect } from "react";
import { getNavigation } from "@/data/content";
import { useTranslation } from "@/lib/i18n";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";

// Pre-computed min-widths (in ch units) to prevent layout shift when switching languages.
// Each value accommodates the wider label between EN and PL for that nav position.
const NAV_MIN_WIDTHS = [
  "min-w-[11ch]", // max("01. About", "01. O mnie") = 10ch + buffer
  "min-w-[18ch]", // max("02. Experience", "02. Doświadczenie") = 17ch + buffer
  "min-w-[13ch]", // max("03. Projects", "03. Projekty") = 12ch + buffer
  "min-w-[12ch]", // max("04. Contact", "04. Kontakt") = 11ch + buffer
];

function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center font-mono text-sm gap-1">
      <button
        onClick={() => setLocale("en")}
        className={`cursor-pointer px-1.5 py-0.5 rounded transition-colors ${
          locale === "en"
            ? "text-[var(--accent)]"
            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
        }`}
      >
        EN
      </button>
      <span className="text-[var(--foreground-muted)]">|</span>
      <button
        onClick={() => setLocale("pl")}
        className={`cursor-pointer px-1.5 py-0.5 rounded transition-colors ${
          locale === "pl"
            ? "text-[var(--accent)]"
            : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
        }`}
      >
        PL
      </button>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, t } = useTranslation();
  const nav = getNavigation(locale);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--background)]/90 backdrop-blur-md shadow-lg py-3 sm:py-4"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="group relative font-mono text-base sm:text-lg font-semibold z-50"
          >
            <span className="text-[var(--foreground)]">plisowski</span>
            <span className="text-[var(--accent)]">.dev</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/50 group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {nav.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors font-mono text-sm inline-block ${NAV_MIN_WIDTHS[index] ?? ""}`}
                >
                  <span className="text-[var(--accent)]">0{index + 1}.</span>{" "}
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <LanguageToggle />
            </li>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--accent)] text-[var(--accent)] px-4 py-2 rounded font-mono text-sm hover:bg-[var(--accent-hover)] transition-colors min-w-[6rem] text-center inline-block"
              >
                {t("nav.resume")}
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[var(--accent)] p-2 -mr-2 touch-manipulation z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation - outside header to avoid fixed positioning issues */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[var(--background)]/85 backdrop-blur-sm">
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {nav.map((item, index) => (
              <li
                key={item.href}
                className="opacity-0 animate-[fadeInUp_0.4s_ease_forwards]"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex flex-col items-center text-[var(--foreground)] hover:text-[var(--accent)] transition-all duration-300 font-mono"
                >
                  <span className="text-[var(--accent)] text-sm mb-2 group-hover:scale-110 transition-transform">
                    0{index + 1}.
                  </span>
                  <span className="text-2xl font-medium tracking-wide">{item.name}</span>
                </a>
              </li>
            ))}
            <li
              className="opacity-0 animate-[fadeInUp_0.4s_ease_forwards]"
              style={{ animationDelay: `${nav.length * 75}ms` }}
            >
              <LanguageToggle />
            </li>
            <li
              className="opacity-0 animate-[fadeInUp_0.4s_ease_forwards] mt-4"
              style={{ animationDelay: `${(nav.length + 1) * 75}ms` }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--accent)] text-[var(--accent)] px-10 py-3 rounded font-mono text-lg hover:bg-[var(--accent)]/10 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300 min-w-[10rem] text-center inline-block"
              >
                {t("nav.resume")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
