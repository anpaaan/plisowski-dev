import { Header } from "@/components/layout/Header";
import { SocialLinks, EmailLink } from "@/components/layout/SocialLinks";
import { DotGrid } from "@/components/ui/DotGrid";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Studio } from "@/components/sections/Studio";
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
        <Studio />
        <Contact />
      </main>
    </>
  );
}
