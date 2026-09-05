import { Navbar } from '../../components/layout/Navbar';
import { Hero } from '../../components/section/Hero';
import { Footer } from '../../components/layout/Footer';
import { Experience } from '../../components/section/Experience';

export function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <Experience />
      </main>

      <Footer />
    </>
  );
}
