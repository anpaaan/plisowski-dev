import type { Locale, Messages } from "@/types/i18n";
import en from "@/locales/en.json";
import pl from "@/locales/pl.json";

const messages: Record<Locale, Messages> = { en: en as Messages, pl: pl as Messages };

export const personalInfo = {
  name: "Pawel Lisowski",
  title: "Senior Software Engineer",
  location: "Gdynia, Poland",
  linkedin: "https://linkedin.com/in/paweljlisowski",
  github: "https://github.com/anpaaan",
};

export const skills = {
  frontend: ["React", "TypeScript", "Next.js", "Angular", "Redux", "Tailwind CSS"],
  backend: ["Java / Spring Boot", "Python / FastAPI", "Node.js / NestJS", "GraphQL"],
  data: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "MySQL", "Elasticsearch"],
  devops: ["Docker", "Kubernetes", "AWS", "GCP", "Jenkins", "GitHub Actions"],
  testing: ["Jest", "Playwright", "JUnit", "pytest", "React Testing Library"],
};

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "Novartis",
    companyUrl: "https://www.novartis.com",
    type: "Contract",
    location: "Remote, Poland",
    period: "Dec 2023 - Present",
  },
  {
    title: "Senior Software Engineer",
    company: "British Council",
    companyUrl: "https://www.britishcouncil.org",
    type: "Contract",
    location: "Remote, Poland",
    period: "Sep 2022 - Dec 2023",
  },
  {
    title: "Software Engineer",
    company: "Lufthansa Systems",
    companyUrl: "https://www.lhsystems.com",
    type: "Contract",
    location: "Remote, Poland",
    period: "Jan 2021 - Sep 2022",
  },
  {
    title: "Software Engineer",
    company: "Jit Team",
    companyUrl: "https://jit.team",
    type: "Full-time",
    location: "Gdynia, Poland",
    period: "Sep 2017 - Jan 2021",
    clients: ["Danfoss", "Jeppesen", "Signal Ocean"],
  },
  {
    title: "Software Engineer in Test",
    company: "Fenergo",
    companyUrl: "https://www.fenergo.com",
    type: "Full-time",
    location: "Dublin, Ireland",
    period: "Jun 2016 - Sep 2017",
  },
];

export const projects = [
  {
    title: "Skeech",
    tech: ["Next.js 14", "React 18", "TypeScript", "FastAPI", "WebSocket", "Monaco Editor"],
    github: "https://github.com/Lisovate/skeech",
    external: "https://skeech.dev",
    image: "/images/projects/skeech.webp",
    featured: true,
    status: "live" as const,
  },
  {
    title: "Lisium",
    tech: ["Java 21", "Spring Boot", "Next.js", "PostgreSQL", "Redis", "Kafka"],
    external: "https://lisium.io",
    image: "/images/projects/lisium.webp",
    featured: true,
    status: "coming-soon" as const,
  },
  {
    title: "Zorvid",
    tech: ["Next.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "LLM"],
    external: "https://zorvid.io",
    image: "/images/projects/zorvid.webp",
    featured: true,
    status: "coming-soon" as const,
  },
  // TODO: Uncomment and update these projects later — add proper descriptions, links, and images
  // See also: /projects archive page needs updating when these are restored
  // {
  //   title: "Gawra",
  //   tech: ["Next.js 15", "React 19", "TypeScript", "NestJS", "PostgreSQL", "Capacitor"],
  //   github: "https://github.com/anpaaan/gawra",
  //   external: "https://gawra.io",
  //   image: "/images/projects/gawra.webp",
  //   featured: false,
  // },
  // {
  //   title: "Synthwave API",
  //   tech: ["Rust", "Actix-web", "Redis", "Prometheus", "Grafana"],
  //   github: "https://github.com/anpaaan/synthwave-api",
  //   featured: false,
  // },
  // {
  //   title: "DataForge",
  //   tech: ["Python", "Apache Spark", "Airflow", "Delta Lake", "dbt"],
  //   github: "https://github.com/anpaaan/dataforge",
  //   featured: false,
  // },
  // {
  //   title: "Nimbus CLI",
  //   tech: ["Go", "Cobra", "Terraform", "AWS SDK", "GCP SDK"],
  //   github: "https://github.com/anpaaan/nimbus-cli",
  //   featured: false,
  // },
];

export const education = {
  degree: "BSc Software Systems Development",
  school: "Waterford Institute of Technology",
  location: "Ireland",
  year: "2016",
};

export function getNavigation(locale: Locale) {
  const m = messages[locale];
  return [
    { name: m.nav.about, href: "#about" },
    { name: m.nav.experience, href: "#experience" },
    { name: m.nav.projects, href: "#projects" },
    { name: m.nav.contact, href: "#contact" },
  ];
}

export function getExperienceHighlights(locale: Locale, company: string): string[] {
  const m = messages[locale];
  return m.experience.highlights[company] ?? [];
}

export function getProjectDescription(locale: Locale, title: string): string {
  const m = messages[locale];
  return m.projects.descriptions[title] ?? "";
}

// Keep default navigation export for backwards compat with any static usage
export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
