"use client";

import { personalInfo } from "@/data/content";
import { useTranslation } from "@/lib/i18n";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <div className="fade-in-up opacity-0">
        <p className="text-[var(--accent)] font-mono text-sm sm:text-base mb-3 sm:mb-5">{t("hero.greeting")}</p>
      </div>

      <div className="fade-in-up opacity-0 delay-100">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 gradient-text">
          {personalInfo.name}.
        </h1>
      </div>

      <div className="fade-in-up opacity-0 delay-200">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground-muted)] mb-4 sm:mb-6">
          {t("hero.tagline")}
        </h2>
      </div>

      <div className="fade-in-up opacity-0 delay-300">
        <p className="text-[var(--foreground-muted)] max-w-xl text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
          {t("hero.summary")} {t("hero.currentRole")}{" "}
          <a
            href="https://www.novartis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline text-glow"
          >
            Novartis
          </a>
          .
        </p>
      </div>

      <div className="fade-in-up opacity-0 delay-400">
        <a
          href="#projects"
          className="inline-block border border-[var(--accent)] text-[var(--accent)] px-5 sm:px-7 py-3 sm:py-4 rounded font-mono text-sm sm:text-base hover:bg-[var(--accent-hover)] transition-all glow"
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
}
