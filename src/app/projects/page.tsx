import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/content";
import { GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Projects | Pawel Lisowski",
  description:
    "A collection of projects I've worked on, from AI-powered apps to developer tools and microservices platforms.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--accent)] font-mono text-sm mb-12 hover:underline"
        >
          <span>←</span> Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
          All Projects
        </h1>

        <p className="text-[var(--foreground-muted)] text-lg mb-12 max-w-2xl">
          A collection of projects I&apos;ve built over the years. Some are
          production applications, others are experiments and learning
          projects.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--background-light)]">
                <th className="text-left py-4 px-2 font-mono text-sm text-[var(--foreground-muted)]">
                  Year
                </th>
                <th className="text-left py-4 px-2 font-mono text-sm text-[var(--foreground-muted)]">
                  Project
                </th>
                <th className="text-left py-4 px-2 font-mono text-sm text-[var(--foreground-muted)] hidden sm:table-cell">
                  Built with
                </th>
                <th className="text-left py-4 px-2 font-mono text-sm text-[var(--foreground-muted)]">
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
                  <td className="py-4 px-2 font-mono text-sm text-[var(--accent)]">
                    {2024 - index}
                  </td>
                  <td className="py-4 px-2">
                    <div>
                      <span className="text-[var(--foreground)] font-medium">
                        {project.title}
                      </span>
                      {project.featured && (
                        <span className="ml-2 text-xs bg-[var(--accent)]/20 text-[var(--accent)] px-2 py-0.5 rounded font-mono">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-[var(--foreground-muted)] text-sm mt-1 max-w-md">
                      {project.description.length > 100
                        ? `${project.description.substring(0, 100)}...`
                        : project.description}
                    </p>
                  </td>
                  <td className="py-4 px-2 hidden sm:table-cell">
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
                  <td className="py-4 px-2">
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <GitHubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                          aria-label={`Live demo of ${project.title}`}
                        >
                          <ExternalLinkIcon className="w-5 h-5" />
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
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
            Project Details
          </h2>

          <div className="space-y-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-[var(--background-light)] p-6 rounded-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline font-mono"
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
                        className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline font-mono"
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-[var(--background)] text-[var(--foreground-muted)] px-3 py-1 rounded font-mono"
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
