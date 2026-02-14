import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Skills from "@/components/sections/Skills";
import MarqueeSection from "@/components/ui/MarqueeSection";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <MarqueeSection title="About" direction="left" />
      <About />

      <MarqueeSection title="Education" direction="right" />
      <Education />

      <MarqueeSection title="Experience" direction="left" />
      <Experience />

      <MarqueeSection title="Certifications" direction="right" />
      <Certifications />

      <MarqueeSection title="Skills" direction="left" />
      <Skills />

      <MarqueeSection title="Projects" direction="right" />
      <Projects />

      <MarqueeSection title="Contact" direction="left" />
      <Contact />
    </>
  );
}
