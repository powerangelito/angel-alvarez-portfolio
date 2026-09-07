import { skillCategories } from "@/app/config/skills";

import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";
import { SkillCard } from "../../ui/SkillCard";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionTitle>
          Tecnologías y habilidades
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              description={category.description}
              skills={category.skills.map((skill: { name: string }) => skill.name)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}