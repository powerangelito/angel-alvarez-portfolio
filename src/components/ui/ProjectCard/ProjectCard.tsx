import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import { Badge } from '../Badge';

import { Link } from 'react-router-dom';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'production' | 'development' | 'completed';
  repositoryUrl?: string;
  demoUrl?: string;
}

const statusLabels = {
  production: 'En producción',
  development: 'En desarrollo',
  completed: 'Completado',
};

export function ProjectCard({
  slug,
  title,
  description,
  technologies,
  status,
  repositoryUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <article
      className="
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-border
        bg-card
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-lg
        hover:shadow-blue-950/10
      "
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>

        <span
          className="
            shrink-0
            rounded-full
            border
            border-border
            px-3
            py-1
            text-xs
            font-medium
            text-muted-foreground
          "
        >
          {statusLabels[status]}
        </span>
      </div>

      <p className="mt-4 flex-1 leading-7 text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>

      {slug === 'delice' && (
        <Link
          to={`/projects/${slug}`}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-blue-500
            transition-colors
            hover:text-blue-400
            "
        >
          Ver caso de estudio
          <ArrowUpRight size={16} />
        </Link>
      )}
      {(repositoryUrl || demoUrl) && (
        <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5">
          {repositoryUrl && (
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
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
              <FaGithub size={16} />
              Código
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-blue-500
                transition-colors
                hover:text-blue-400
              "
            >
              Ver proyecto
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
