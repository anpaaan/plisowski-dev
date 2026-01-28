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

      <div className="flex flex-col md:flex-row gap-4">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-[var(--background-light)]">
          {experience.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 font-mono text-sm whitespace-nowrap text-left transition-all hover:bg-[var(--accent-hover)] hover:text-[var(--accent)] ${
                activeTab === index
                  ? "text-[var(--accent)] bg-[var(--accent-hover)] md:border-l-2 md:border-[var(--accent)] md:-ml-px"
                  : "text-[var(--foreground-muted)]"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-2 md:pl-6 min-h-[320px]">
          {experience.map((job, index) => (
            <div
              key={job.company}
              className={`${activeTab === index ? "block" : "hidden"}`}
            >
              <h3 className="text-xl font-medium text-[var(--foreground)]">
                {job.title}{" "}
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  @ {job.company}
                </a>
              </h3>

              <p className="font-mono text-sm text-[var(--foreground-muted)] mt-1">
                {job.period}
              </p>

              <p className="text-sm text-[var(--foreground-muted)] mt-1">
                {job.type} · {job.location}
              </p>

              {job.clients && (
                <p className="text-sm text-[var(--foreground-muted)] mt-1">
                  Clients:{" "}
                  <span className="text-[var(--accent)]">
                    {job.clients.join(", ")}
                  </span>
                </p>
              )}

              <ul className="mt-5 space-y-3">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[var(--accent)] mt-1.5 flex-shrink-0">
                      ▹
                    </span>
                    <span className="text-[var(--foreground-muted)] leading-relaxed">
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
