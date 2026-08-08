import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
