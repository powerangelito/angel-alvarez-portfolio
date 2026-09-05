import { Container } from '../../ui/Container';
import { SectionTitle } from '../../ui/SectionTitle';
import { ExperienceCard } from '../../ui/ExperienceCard';
import { experience } from '@/app/config/experience';
// import { experience } from 'src/config/experience';

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        {/* <SectionTitle
                    // eyebrow="Experiencia"
                    // title="Experiencia profesional"
                    // description="Una trayectoria desarrollando soluciones de software para diferentes necesidades y entornos empresariales."
                /> */}
        <SectionTitle>Experiencia profesional</SectionTitle>

        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <ExperienceCard
              key={`${item.company}-${item.period}`}
              company={item.company}
              role={item.role}
              period={item.period}
              description={item.description}
              technologies={item.technologies}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
