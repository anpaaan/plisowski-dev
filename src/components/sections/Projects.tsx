import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/content";
import { GitHubIcon, ExternalLinkIcon, FolderIcon } from "@/components/ui/Icons";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6">
      <h2 className="section-heading before:content-['03.']">
        Some Things I&apos;ve Built
      </h2>

      {/* Featured Projects */}
      <div className="space-y-24">
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.title}
            project={project}
            isEven={index % 2 === 0}
          />
        ))}
      </div>

      {/* Other Projects */}
      <div className="mt-32">
        <h3 className="text-2xl font-semibold text-[var(--foreground)] text-center mb-12">
          Other Noteworthy Projects
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <OtherProject key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block border border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded font-mono text-sm hover:bg-[var(--accent-hover)] transition-colors"
          >
            View Full Project Archive
          </Link>
        </div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
}

function FeaturedProject({
  project,
  isEven,
}: {
  project: Project;
  isEven: boolean;
}) {
  return (
    <div className="relative">
      {/* Grid for overlapping image and description */}
      <div className="relative grid md:grid-cols-12 items-center gap-4">
        {/* Project Image */}
        <div
          className={`md:col-span-7 ${isEven ? "md:col-start-1" : "md:col-start-6"} row-start-1`}
        >
          <a
            href={project.external || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <div className="aspect-video bg-[var(--background-light)] rounded-lg overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIxAAAgEDAwQDAAAAAAAAAAAAAQIDBAURAAYhEhMxQVFhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECAxEhMf/aAAwDAQACEQMRAD8AZbW2zar5t+3XCe53SGaeIOYoJI1SMk8qMp5Az8HWk/xC1/btv/trfqrdv7qr0yxrLKCqLwuFA9AefOdM9uyBNq2kBxkUUQP30NJN5pzU7ouTSMWYzycn96LfI3DVlZ//2Q=="
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[var(--accent)]/50">
                    {project.title.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-[var(--accent)]/20 group-hover:bg-transparent transition-colors duration-300 rounded-lg" />
          </a>
        </div>

        {/* Overlapping Content (title + description only) */}
        <div
          className={`md:col-span-6 ${isEven ? "md:col-start-6 md:text-right" : "md:col-start-1 md:text-left"} row-start-1 relative z-10`}
        >
          <p className="font-mono text-sm text-[var(--accent)] mb-1">
            Featured Project
          </p>
          <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
            <a
              href={project.external || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              {project.title}
            </a>
          </h3>

          <div className="bg-[var(--background-light)] p-6 rounded-lg shadow-xl">
            <p className="text-[var(--foreground-muted)] leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Tech stack and links - below the image, not overlapping */}
      <div className={`mt-4 ${isEven ? "md:text-right" : "md:text-left"}`}>
        <ul
          className={`flex flex-wrap gap-2 font-mono mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}
        >
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="bg-[var(--background-light)] text-[var(--foreground-muted)] px-3 py-1 rounded text-xs"
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
              className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
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
              className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
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

function OtherProject({ project }: { project: Project }) {
  return (
    <div className="bg-[var(--background-light)] p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <FolderIcon className="text-[var(--accent)]" />
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
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
              className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="External Link"
            >
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2 hover:text-[var(--accent)] transition-colors">
        <a
          href={project.external || project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </a>
      </h4>

      <p className="text-[var(--foreground-muted)] text-sm leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2 font-mono text-xs text-[var(--foreground-muted)]">
        {project.tech.slice(0, 4).map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
