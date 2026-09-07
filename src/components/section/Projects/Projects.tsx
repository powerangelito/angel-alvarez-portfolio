import { projects } from "@/app/config/projects";

import { Container } from "../../ui/Container";
import { ProjectCard } from "../../ui/ProjectCard";
import { SectionTitle } from "../../ui/SectionTitle";

export function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionTitle>
          Proyectos destacados
        </SectionTitle>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              status={project.status}
              repositoryUrl={project.repositoryUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}