"use client";

import { personalInfo } from "@/data/content";
import { useTranslation } from "@/lib/i18n";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

export function SocialLinks() {
  const { t } = useTranslation();

  return (
    <div className="fixed left-10 bottom-0 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-[var(--foreground-muted)] z-50">
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all"
        aria-label={t("social.githubLabel")}
      >
        <GitHubIcon />
      </a>
      <a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all"
        aria-label={t("social.linkedinLabel")}
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export function EmailLink() {
  const { t } = useTranslation();

  return (
    <div className="fixed right-10 bottom-0 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-[var(--foreground-muted)] z-50">
      <a
        href="#contact"
        className="text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all font-mono text-sm [writing-mode:vertical-rl]"
      >
        {t("social.getInTouch")}
      </a>
    </div>
  );
}
