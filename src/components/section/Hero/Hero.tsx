import { Container } from '../../ui/Container';
import { HeroActions } from './HeroActions';
import { HeroBadges } from './HeroBadges';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';
import { portfolio } from '@/app/config/portfolio';

export function Hero() {
  return (
    <section id="home" className="py-24 lg:py-36">
      <Container>
        <HeroContent
          name={portfolio.personal.name}
          title={portfolio.personal.title}
          description={portfolio.hero.description}
        />

        <HeroBadges />

        <HeroActions />

        <HeroImage />
      </Container>
    </section>
  );
}
