import { Code2, Database, Layers3, ServerCog } from "lucide-react";

import { Container } from "../../ui/Container";
import { SectionTitle } from "../../ui/SectionTitle";

const highlights = [
  {
    icon: ServerCog,
    title: "Backend y APIs",
    description:
      "Desarrollo de servicios y APIs con Java, C#, PHP y Python, buscando soluciones mantenibles y escalables.",
  },
  {
    icon: Layers3,
    title: "Full Stack",
    description:
      "Experiencia construyendo aplicaciones completas, integrando frontend, backend, bases de datos y despliegue.",
  },
  {
    icon: Database,
    title: "Datos e integración",
    description:
      "Trabajo con bases de datos relacionales y NoSQL, integraciones entre sistemas y procesamiento de información.",
  },
  {
    icon: Code2,
    title: "Modernización",
    description:
      "Participación en migraciones tecnológicas, actualización de aplicaciones existentes y mejora de arquitecturas.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionTitle>Sobre mí</SectionTitle>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              Soy desarrollador Full Stack con más de 10 años de experiencia
              construyendo y manteniendo soluciones de software para distintos
              entornos empresariales.
            </p>

            <p className="mt-6 leading-7 text-muted-foreground">
              Mi experiencia se concentra principalmente en el desarrollo
              backend con tecnologías como Java, C#, PHP y Python, además de
              trabajar con React y Flutter para construir interfaces web y
              aplicaciones móviles.
            </p>

            <p className="mt-6 leading-7 text-muted-foreground">
              He participado tanto en el desarrollo de productos desde cero como
              en la evolución de sistemas existentes, incluyendo migraciones
              tecnológicas, integración de servicios, bases de datos,
              despliegues y mantenimiento de aplicaciones en producción.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/40
                  "
                >
                  <div
                    className="
                      mb-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-500/10
                      text-blue-500
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}