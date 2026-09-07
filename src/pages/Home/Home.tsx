import { About } from '@/components/section/About';
import { Hero } from '@/components/section/Hero';
import { Experience } from '@/components/section/Experience';
import { Skills } from '@/components/section/Skills';
import { Projects } from '@/components/section/Projects';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}
