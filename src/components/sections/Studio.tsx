"use client";

import { studio } from "@/data/content";
import { useTranslation } from "@/lib/i18n";
import { ExternalLinkIcon } from "@/components/ui/Icons";

export function Studio() {
  const { t } = useTranslation();

  return (
    <section id="studio" className="max-w-3xl mx-auto px-6">
      <h2 className="section-heading before:content-['03.']">
        {t("studio.heading")}
      </h2>

      <div className="bg-[var(--background-light)] rounded-2xl p-8 sm:p-12 text-center shadow-xl">
        <p className="font-mono text-xs sm:text-sm text-[var(--accent)] mb-3">
          {t("studio.intro")}
        </p>

        <h3 className="text-3xl sm:text-5xl font-bold text-[var(--foreground)] mb-5 sm:mb-6">
          {studio.name}
        </h3>

        <p className="text-[var(--foreground-muted)] leading-relaxed text-sm sm:text-base max-w-xl mx-auto mb-8">
          {t("studio.body")}
        </p>

        <a
          href={studio.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[var(--accent)] text-[var(--accent)] px-6 sm:px-7 py-3 sm:py-4 rounded font-mono text-sm sm:text-base hover:bg-[var(--accent-hover)] transition-colors"
        >
          {t("studio.cta")}
          <ExternalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>

        <div className="mt-10 pt-8 border-t border-[var(--background)]">
          <p className="font-mono text-xs text-[var(--foreground-muted)] mb-3">
            {t("studio.building")}
          </p>
          <ul className="flex flex-wrap justify-center gap-2 font-mono text-xs sm:text-sm">
            {studio.products.map((product) => (
              <li
                key={product}
                className="bg-[var(--background)] text-[var(--foreground-muted)] px-3 py-1 rounded"
              >
                {product}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
