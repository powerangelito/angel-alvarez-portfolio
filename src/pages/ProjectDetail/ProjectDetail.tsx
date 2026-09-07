import { ArrowLeft } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { getCaseStudyBySlug } from '@/app/config/caseStudies';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

import { ArchitectureDiagram } from '@/components/case-study/ArchitectureDiagram';

export function ProjectDetail() {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="border-b border-border py-20">
        <Container>
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-muted-foreground
              transition-colors
              hover:text-foreground
            "
          >
            <ArrowLeft size={16} />
            Volver al portafolio
          </Link>

          <div className="mt-10 max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              Case Study
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>

            <p className="mt-4 text-xl text-muted-foreground">
              {caseStudy.subtitle}
            </p>

            <p className="mt-8 max-w-3xl leading-8 text-muted-foreground">
              {caseStudy.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {caseStudy.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>

            <div className="mt-8 border-l-2 border-blue-500 pl-4">
              <p className="text-sm text-muted-foreground">Estado actual</p>

              <p className="mt-1 font-medium">{caseStudy.status}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
                El reto
              </p>

              <h2 className="mt-3 text-3xl font-bold">El problema</h2>
            </div>

            <div className="space-y-4">
              {caseStudy.problems.map((problem) => (
                <p key={problem} className="leading-7 text-muted-foreground">
                  {problem}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card/30 py-20">
        <Container>
          <h2 className="text-3xl font-bold">Funcionalidades principales</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudy.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
                Participación
              </p>

              <h2 className="mt-3 text-3xl font-bold">Mi responsabilidad</h2>
            </div>

            <ul className="space-y-4">
              {caseStudy.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="flex gap-4 leading-7 text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                  />

                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card/30 py-20">
        <Container>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
              Arquitectura
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Cómo está construida la solución
            </h2>
          </div>
          
          <ArchitectureDiagram />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {caseStudy.architecture.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">
                Infraestructura y despliegue
              </h2>

              <ul className="mt-6 space-y-4">
                {caseStudy.deployment.map((item) => (
                  <li key={item} className="leading-7 text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Resultado</h2>

              <ul className="mt-6 space-y-4">
                {caseStudy.result.map((item) => (
                  <li key={item} className="leading-7 text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
