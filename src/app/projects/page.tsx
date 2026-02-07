import { Metadata } from "next";
import { DotGrid } from "@/components/ui/DotGrid";
import { ProjectsPageContent } from "@/components/sections/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of projects by Pawel Lisowski, Senior Software Engineer in Gdynia, Poland. AI-powered apps, developer tools, microservices platforms built with React, TypeScript, Java, and Python.",
  openGraph: {
    title: "Projects | Pawel Lisowski",
    description:
      "Portfolio of projects by Pawel Lisowski - AI-powered apps, developer tools, and microservices platforms.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-20 sm:pt-24 pb-12 sm:pb-16 px-6 relative">
      <DotGrid />
      <ProjectsPageContent />
    </main>
  );
}
