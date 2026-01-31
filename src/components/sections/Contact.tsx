import { personalInfo } from "@/data/content";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

export function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 text-center py-12 sm:py-24">
      <p className="font-mono text-xs sm:text-sm text-[var(--accent)] mb-3 sm:mb-4">04. What&apos;s Next?</p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4 sm:mb-6">
        Get In Touch
      </h2>

      <p className="text-[var(--foreground-muted)] leading-relaxed mb-8 sm:mb-12 text-sm sm:text-base">
        I&apos;m currently open to new opportunities and always interested in
        hearing about exciting projects. Whether you have a question, want to
        collaborate, or just want to say hi, feel free to reach out!
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[var(--accent)] text-[var(--accent)] px-5 sm:px-7 py-3 sm:py-4 rounded font-mono text-sm sm:text-base hover:bg-[var(--accent-hover)] transition-colors w-full sm:w-auto justify-center"
        >
          <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          Connect on LinkedIn
        </a>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors font-mono text-sm sm:text-base py-2"
        >
          <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          View GitHub
        </a>
      </div>

      <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-[var(--background-light)]">
        <p className="text-[var(--foreground-muted)] text-xs sm:text-sm mb-2">
          Based in {personalInfo.location}
        </p>
        <p className="font-mono text-xs sm:text-sm text-[var(--foreground-muted)]">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
}
