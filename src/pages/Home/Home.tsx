import { Navbar } from '@/components/layout/Navbar';
import { About } from '@/components/section/About';
import { Hero } from '@/components/section/Hero';
import { Footer } from '@/components/layout/Footer';
import { Experience } from '@/components/section/Experience';
import { Skills } from "@/components/section/Skills";

export function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>

      <Footer />
    </>
  );
}
