export type Locale = "en" | "pl";

export interface Messages {
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
    resume: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    summary: string;
    currentRole: string;
    cta: string;
  };
  about: {
    heading: string;
    techIntro: string;
    skillsHeading: string;
    paragraphs: string[];
  };
  experience: {
    heading: string;
    clientsLabel: string;
    highlights: Record<string, string[]>;
  };
  projects: {
    heading: string;
    featured: string;
    live: string;
    comingSoon: string;
    otherHeading: string;
    viewArchive: string;
    descriptions: Record<string, string>;
  };
  contact: {
    preHeading: string;
    heading: string;
    body: string;
    linkedin: string;
    github: string;
    location: string;
    credit: string;
  };
  projectsPage: {
    back: string;
    heading: string;
    description: string;
    year: string;
    project: string;
    builtWith: string;
    links: string;
    detailsHeading: string;
    code: string;
    liveLinkLabel: string;
  };
  social: {
    githubLabel: string;
    linkedinLabel: string;
    getInTouch: string;
  };
}
