import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";

import { ExperienceTimeline } from "./ExperienceTimeline";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionTitle>
          Experiencia profesional
        </SectionTitle>

        <ExperienceTimeline />
      </Container>
    </section>
  );
}