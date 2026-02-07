"use client";

import { useState } from "react";
import { experience, getExperienceHighlights } from "@/data/content";
import { useTranslation } from "@/lib/i18n";

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const { locale, t } = useTranslation();

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6">
      <h2 className="section-heading before:content-['02.']">
        {t("experience.heading")}
      </h2>

      <div className="flex flex-col md:flex-row gap-2 sm:gap-4">
        {/* Tab List — wrapping pills on mobile, vertical sidebar on desktop */}
        <div className="flex flex-wrap gap-2 mb-2 md:mb-0 md:flex-col md:flex-nowrap md:gap-0 md:border-l border-[var(--background-light)] md:min-w-[180px] md:w-[180px] flex-shrink-0">
          {experience.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-1.5 md:px-5 md:py-3 font-mono text-xs sm:text-sm whitespace-nowrap transition-colors rounded-full md:rounded-none md:text-left md:border-l-2 md:-ml-px hover:text-[var(--accent)] ${
                activeTab === index
                  ? "text-[var(--accent)] bg-[var(--accent-hover)] md:border-[var(--accent)]"
                  : "text-[var(--foreground-muted)] bg-[var(--background-light)] md:bg-transparent md:border-transparent"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Content — grid overlay so the container height matches the tallest tab */}
        <div className="py-2 md:pl-6 grid">
          {experience.map((job, index) => {
            const highlights = getExperienceHighlights(locale, job.company);
            return (
              <div
                key={job.company}
                className={`col-start-1 row-start-1 ${activeTab === index ? "visible" : "invisible"}`}
              >
                <h3 className="text-base sm:text-xl font-medium text-[var(--foreground)]">
                  <span className="block sm:inline">{job.title}</span>{" "}
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline"
                  >
                    @ {job.company}
                  </a>
                </h3>

                <p className="font-mono text-xs sm:text-sm text-[var(--foreground-muted)] mt-1">
                  {job.period}
                </p>

                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] mt-1">
                  {job.type} · {job.location}
                </p>

                {job.clients && (
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] mt-1">
                    {t("experience.clientsLabel")}{" "}
                    <span className="text-[var(--accent)]">
                      {job.clients.join(", ")}
                    </span>
                  </p>
                )}

                <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                  {highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 sm:gap-3">
                      <span className="text-[var(--accent)] mt-1 sm:mt-1.5 flex-shrink-0 text-sm">
                        ▹
                      </span>
                      <span className="text-[var(--foreground-muted)] leading-relaxed text-sm sm:text-base">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
