import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/content";
import { GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";
import { DotGrid } from "@/components/ui/DotGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of projects by Pawel Lisowski, Senior Software Engineer in Gdynia, Poland. AI-powered apps, developer tools, microservices platforms built with React, TypeScript, Java, and Python.",
  openGraph: {
    title: "Projects | Pawel Lisowski",
    description:
      "Portfolio of projects by Pawel Lisowski - AI-powered apps, developer tools, and microservices platforms.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-20 sm:pt-24 pb-12 sm:pb-16 px-6 relative">
      <DotGrid />
      <div className="max-w-5xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--accent)] font-mono text-xs sm:text-sm mb-8 sm:mb-12 hover:underline"
        >
          <span>←</span> Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-3 sm:mb-4">
          All Projects
        </h1>

        <p className="text-[var(--foreground-muted)] text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl">
          A collection of projects I&apos;ve built over the years. Some are
          production applications, others are experiments and learning
          projects.
        </p>

        <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[320px]">
            <thead>
              <tr className="border-b border-[var(--background-light)]">
                <th className="text-left py-3 sm:py-4 px-1 sm:px-2 font-mono text-xs sm:text-sm text-[var(--foreground-muted)]">
                  Year
                </th>
                <th className="text-left py-3 sm:py-4 px-1 sm:px-2 font-mono text-xs sm:text-sm text-[var(--foreground-muted)]">
                  Project
                </th>
                <th className="text-left py-3 sm:py-4 px-1 sm:px-2 font-mono text-xs sm:text-sm text-[var(--foreground-muted)] hidden md:table-cell">
                  Built with
                </th>
                <th className="text-left py-3 sm:py-4 px-1 sm:px-2 font-mono text-xs sm:text-sm text-[var(--foreground-muted)]">
                  Links
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={project.title}
                  className="border-b border-[var(--background-light)] hover:bg-[var(--background-light)]/50 transition-colors"
                >
                  <td className="py-3 sm:py-4 px-1 sm:px-2 font-mono text-xs sm:text-sm text-[var(--accent)] align-top">
                    {2024 - index}
                  </td>
                  <td className="py-3 sm:py-4 px-1 sm:px-2 align-top">
                    <div>
                      <span className="text-[var(--foreground)] font-medium text-sm sm:text-base">
                        {project.title}
                      </span>
                      {project.featured && (
                        <span className="ml-1.5 sm:ml-2 text-[10px] sm:text-xs bg-[var(--accent)]/20 text-[var(--accent)] px-1.5 sm:px-2 py-0.5 rounded font-mono">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-[var(--foreground-muted)] text-xs sm:text-sm mt-1 max-w-md line-clamp-2">
                      {project.description.length > 80
                        ? `${project.description.substring(0, 80)}...`
                        : project.description}
                    </p>
                  </td>
                  <td className="py-3 sm:py-4 px-1 sm:px-2 hidden md:table-cell align-top">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-[var(--foreground-muted)] font-mono"
                        >
                          {tech}
                          {project.tech.indexOf(tech) < 2 &&
                            project.tech.indexOf(tech) < project.tech.length - 1 &&
                            " · "}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-1 sm:px-2 align-top">
                    <div className="flex gap-2 sm:gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors p-1"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors p-1"
                          aria-label={`Live demo of ${project.title}`}
                        >
                          <ExternalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed project cards */}
        <section className="mt-12 sm:mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-6 sm:mb-8">
            Project Details
          </h2>

          <div className="space-y-4 sm:space-y-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-[var(--background-light)] p-4 sm:p-6 rounded-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-[var(--accent)] hover:underline font-mono"
                      >
                        <GitHubIcon className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-[var(--accent)] hover:underline font-mono"
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[var(--foreground-muted)] leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-xs bg-[var(--background)] text-[var(--foreground-muted)] px-2 sm:px-3 py-0.5 sm:py-1 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
