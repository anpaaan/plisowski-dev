import { Header } from "@/components/layout/Header";
import { SocialLinks, EmailLink } from "@/components/layout/SocialLinks";
import { DotGrid } from "@/components/ui/DotGrid";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <DotGrid />
      <Header />
      <SocialLinks />
      <EmailLink />

      <main className="relative z-10 w-full lg:px-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
