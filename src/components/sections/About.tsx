import Image from "next/image";
import { personalInfo, skills } from "@/data/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6">
      <ScrollReveal>
        <h2 className="section-heading before:content-['01.']">About Me</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4">
          {personalInfo.aboutParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[var(--foreground-muted)] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <p className="text-[var(--foreground-muted)] leading-relaxed pt-2">
            Here are some technologies I&apos;ve been working with:
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
            {[...skills.frontend.slice(0, 3), ...skills.backend.slice(0, 3)].map(
              (skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span className="text-[var(--accent)] text-sm">▹</span>
                  <span className="font-mono text-sm text-[var(--foreground-muted)]">
                    {skill}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <ScrollReveal direction="right" delay={200}>
          <div className="flex justify-center md:justify-start">
            <div className="relative group w-fit">
              <Image
                src="/images/PawelLisowskiProfilePic.png"
                alt="Pawel Lisowski"
                width={250}
                height={337}
                className="relative z-10 rounded-lg block transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(100,255,218,0.3)]"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDBAURAAYSIQcTMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhQf/aAAwDAQACEQMRAD8AmW3No0FfYLfX1V3uMU9RTxzyIscJVWZQSAef4Ca+xrRb6WhpaSluFwkipokhjaSOMsyqoAJI+k4GuNIvI5FfROZT/9k="
              />
              <div
                className="absolute border-2 border-[var(--accent)] rounded-lg -z-10 transition-transform duration-300 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2"
                style={{ top: 0, left: 0, width: 250, height: 337 }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6">
          Technical Skills
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <div className="bg-[var(--background-light)] p-5 rounded-lg hover:glow transition-all duration-300 hover:-translate-y-1">
      <h4 className="text-[var(--accent)] font-mono text-sm mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2 stagger-children">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm text-[var(--foreground-muted)] bg-[var(--background)] px-2 py-1 rounded hover:text-[var(--accent)] transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
