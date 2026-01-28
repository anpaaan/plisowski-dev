import { personalInfo } from "@/data/content";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <div className="fade-in-up opacity-0">
        <p className="text-[var(--accent)] font-mono mb-5">Hi, my name is</p>
      </div>

      <div className="fade-in-up opacity-0 delay-100">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 gradient-text">
          {personalInfo.name}.
        </h1>
      </div>

      <div className="fade-in-up opacity-0 delay-200">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground-muted)] mb-6">
          I build things for the web.
        </h2>
      </div>

      <div className="fade-in-up opacity-0 delay-300">
        <p className="text-[var(--foreground-muted)] max-w-xl text-lg leading-relaxed mb-12">
          {personalInfo.summary} Currently at{" "}
          <a
            href="https://www.novartis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline text-glow"
          >
            Novartis
          </a>
          , architecting financial analytics dashboards.
        </p>
      </div>

      <div className="fade-in-up opacity-0 delay-400">
        <a
          href="#projects"
          className="inline-block border border-[var(--accent)] text-[var(--accent)] px-7 py-4 rounded font-mono hover:bg-[var(--accent-hover)] transition-all glow"
        >
          Check out my work
        </a>
      </div>
    </section>
  );
}
