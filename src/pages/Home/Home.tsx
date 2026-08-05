import { Navbar } from '../../components/layout/Navbar';
import { Hero } from '../../components/section/Hero';
import { Footer } from '../../components/layout/Footer';

export function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
      </main>

      <Footer />
    </>
  );
}
