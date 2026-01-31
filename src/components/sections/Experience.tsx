"use client";

import { useState } from "react";
import { experience } from "@/data/content";

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6">
      <h2 className="section-heading before:content-['02.']">
        Where I&apos;ve Worked
      </h2>

      <div className="flex flex-col md:flex-row gap-2 sm:gap-4">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-[var(--background-light)] -mx-6 px-6 sm:mx-0 sm:px-0 md:min-w-[180px] md:w-[180px] flex-shrink-0">
          {experience.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveTab(index)}
              className={`px-3 sm:px-5 py-2.5 sm:py-3 font-mono text-xs sm:text-sm whitespace-nowrap text-left transition-colors hover:bg-[var(--accent-hover)] hover:text-[var(--accent)] md:border-l-2 md:-ml-px ${
                activeTab === index
                  ? "text-[var(--accent)] bg-[var(--accent-hover)] md:border-[var(--accent)]"
                  : "text-[var(--foreground-muted)] md:border-transparent"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-2 md:pl-6 min-h-[280px] sm:min-h-[320px]">
          {experience.map((job, index) => (
            <div
              key={job.company}
              className={`${activeTab === index ? "block" : "hidden"}`}
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
                  Clients:{" "}
                  <span className="text-[var(--accent)]">
                    {job.clients.join(", ")}
                  </span>
                </p>
              )}

              <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                {job.highlights.map((highlight, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
