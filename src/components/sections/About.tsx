"use client";

import Image from "next/image";
import { skills } from "@/data/content";
import { useTranslation } from "@/lib/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  const { t, messages } = useTranslation();

  return (
    <section id="about" className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <h2 className="section-heading before:content-['01.']">{t("about.heading")}</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-2 space-y-4 order-2 md:order-1">
          {messages.about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[var(--foreground-muted)] leading-relaxed text-sm sm:text-base"
            >
              {paragraph}
            </p>
          ))}

          <p className="text-[var(--foreground-muted)] leading-relaxed pt-2 text-sm sm:text-base">
            {t("about.techIntro")}
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
            {[...skills.frontend.slice(0, 3), ...skills.backend.slice(0, 3)].map(
              (skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span className="text-[var(--accent)] text-xs sm:text-sm">▹</span>
                  <span className="font-mono text-xs sm:text-sm text-[var(--foreground-muted)]">
                    {skill}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <ScrollReveal direction="right" delay={200}>
          <div className="flex justify-center md:justify-start order-1 md:order-2 mb-6 md:mb-0">
            <div className="relative group w-fit max-w-[200px] sm:max-w-[250px]">
              <Image
                src="/images/profile-optimized.webp"
                alt="Pawel Lisowski - Senior Software Engineer in Gdynia, Poland"
                width={250}
                height={337}
                className="relative z-10 rounded-lg block transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(100,255,218,0.3)] w-full h-auto"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDBAURAAYSIQcTMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhQf/aAAwDAQACEQMRAD8AmW3No0FfYLfX1V3uMU9RTxzyIscJVWZQSAef4Ca+xrRb6WhpaSluFwkipokhjaSOMsyqoAJI+k4GuNIvI5FfROZT/9k="
                priority
              />
              <div
                className="absolute border-2 border-[var(--accent)] rounded-lg -z-10 transition-transform duration-300 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:translate-y-2 inset-0"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Skills Section */}
      <div className="mt-10 sm:mt-16">
        <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)] mb-4 sm:mb-6">
          {t("about.skillsHeading")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <SkillCategory title="Frontend" items={skills.frontend} />
          <SkillCategory title="Backend" items={skills.backend} />
          <SkillCategory title="Data" items={skills.data} />
          <SkillCategory title="DevOps" items={skills.devops} />
          <SkillCategory title="Testing" items={skills.testing} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[var(--background-light)] p-3 sm:p-5 rounded-lg hover:glow transition-all duration-300 hover:-translate-y-1">
      <h4 className="text-[var(--accent)] font-mono text-xs sm:text-sm mb-2 sm:mb-3">{title}</h4>
      <div className="flex flex-wrap gap-1 sm:gap-2 stagger-children">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs sm:text-sm text-[var(--foreground-muted)] bg-[var(--background)] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded hover:text-[var(--accent)] transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
