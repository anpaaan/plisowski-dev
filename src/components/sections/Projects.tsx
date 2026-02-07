"use client";

import Link from "next/link";
import { projects, getProjectDescription } from "@/data/content";
import { useTranslation } from "@/lib/i18n";
import { GitHubIcon, ExternalLinkIcon, FolderIcon } from "@/components/ui/Icons";
import { ProjectImage } from "@/components/ui/ProjectImage";

export function Projects() {
  const { locale, t } = useTranslation();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6">
      <h2 className="section-heading before:content-['03.']">
        {t("projects.heading")}
      </h2>

      {/* Featured Projects */}
      <div className="space-y-12 sm:space-y-16 md:space-y-24">
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.title}
            project={project}
            description={getProjectDescription(locale, project.title)}
            isEven={index % 2 === 0}
            featuredLabel={t("projects.featured")}
            liveLabel={t("projects.live")}
            comingSoonLabel={t("projects.comingSoon")}
          />
        ))}
      </div>

      {/* TODO: Restore "Other Noteworthy Projects" section and "View Full Project Archive" link when more projects are ready */}
      {otherProjects.length > 0 && (
        <div className="mt-16 sm:mt-24 md:mt-32">
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] text-center mb-8 sm:mb-12">
            {t("projects.otherHeading")}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {otherProjects.map((project) => (
              <OtherProject
                key={project.title}
                project={project}
                description={getProjectDescription(locale, project.title)}
              />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              href="/projects"
              className="inline-block border border-[var(--accent)] text-[var(--accent)] px-6 py-2.5 sm:py-3 rounded font-mono text-xs sm:text-sm hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t("projects.viewArchive")}
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

interface ProjectData {
  title: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
  status?: "live" | "coming-soon";
}

function FeaturedProject({
  project,
  description,
  isEven,
  featuredLabel,
  liveLabel,
  comingSoonLabel,
}: {
  project: ProjectData;
  description: string;
  isEven: boolean;
  featuredLabel: string;
  liveLabel: string;
  comingSoonLabel: string;
}) {
  return (
    <div className="relative">
      {/* Mobile layout: stacked, Desktop: overlapping grid */}
      <div className="relative grid md:grid-cols-12 items-center gap-4">
        {/* Project Image */}
        <div
          className={`md:col-span-7 ${isEven ? "md:col-start-1" : "md:col-start-6"} md:row-start-1`}
        >
          <a
            href={project.external || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <div className="aspect-video bg-[var(--background-light)] rounded-lg overflow-hidden">
              {project.image ? (
                <ProjectImage
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 flex items-center justify-center">
                  <span className="text-2xl sm:text-4xl font-bold text-[var(--accent)]/50">
                    {project.title.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-[var(--accent)]/20 group-hover:bg-transparent transition-colors duration-300 rounded-lg" />
          </a>
        </div>

        {/* Content - stacked on mobile, overlapping on desktop */}
        <div
          className={`md:col-span-6 ${isEven ? "md:col-start-6 md:text-right" : "md:col-start-1 md:text-left"} md:row-start-1 relative z-10`}
        >
          <p className="font-mono text-xs sm:text-sm text-[var(--accent)] mb-1">
            {featuredLabel}
          </p>
          <h3 className="text-lg sm:text-2xl font-semibold text-[var(--foreground)] mb-3 sm:mb-4">
            <a
              href={project.external || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              {project.title}
            </a>
            {project.status === "live" && (
              <span className="text-[10px] sm:text-xs bg-green-500/20 text-green-400 px-1.5 sm:px-2 py-0.5 rounded font-mono font-normal align-middle ml-2">
                {liveLabel}
              </span>
            )}
            {project.status === "coming-soon" && (
              <span className="text-[10px] sm:text-xs bg-[var(--accent)]/20 text-[var(--accent)] px-1.5 sm:px-2 py-0.5 rounded font-mono font-normal align-middle ml-2">
                {comingSoonLabel}
              </span>
            )}
          </h3>

          <div className="bg-[var(--background-light)] p-4 sm:p-6 rounded-lg shadow-xl">
            <p className="text-[var(--foreground-muted)] leading-relaxed text-sm sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Tech stack and links */}
      <div className={`mt-3 sm:mt-4 ${isEven ? "md:text-right" : "md:text-left"}`}>
        <ul
          className={`flex flex-wrap gap-1.5 sm:gap-2 font-mono mb-3 sm:mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}
        >
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="bg-[var(--background-light)] text-[var(--foreground-muted)] px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div
          className={`flex gap-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors p-1"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors p-1"
              aria-label="External Link"
            >
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function OtherProject({ project, description }: { project: ProjectData; description: string }) {
  return (
    <div className="bg-[var(--background-light)] p-4 sm:p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <FolderIcon className="text-[var(--accent)] w-8 h-8 sm:w-10 sm:h-10" />
        <div className="flex gap-3 sm:gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors p-1"
              aria-label="GitHub"
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
              aria-label="External Link"
            >
              <ExternalLinkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
        </div>
      </div>

      <h4 className="text-base sm:text-lg font-semibold text-[var(--foreground)] mb-2 hover:text-[var(--accent)] transition-colors">
        <a
          href={project.external || project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </a>
      </h4>

      <p className="text-[var(--foreground-muted)] text-xs sm:text-sm leading-relaxed flex-grow mb-3 sm:mb-4">
        {description}
      </p>

      <ul className="flex flex-wrap gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs text-[var(--foreground-muted)]">
        {project.tech.slice(0, 4).map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
