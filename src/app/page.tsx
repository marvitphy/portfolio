import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Principles } from "@/components/principles";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1600px]">
        <Hero />
        <About />
        {/* PROJETOS é o eixo central: lovetickets (com métricas), Twin, ByteTribe */}
        <Projects />
        <Stack />
        <Principles />
        <Contact />
      </main>
    </>
  );
}
