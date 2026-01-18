import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Technologies from "@/components/Technologies";
import { certificates } from "@/data/certificates.data";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <main>
      <Hero />
      <Technologies />
      <Projects />
      <About />
      <Certificates images={certificates} />
      <Contact />
    </main>
  );
}
