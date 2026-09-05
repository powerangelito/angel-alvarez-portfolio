import { Badge } from "../Badge";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export function ExperienceCard({
  company,
  role,
  period,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <article
      className="
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
        sm:p-7
      "
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {company}
          </h3>

          <p className="mt-1 font-medium text-blue-500">
            {role}
          </p>
        </div>

        <span
          className="
            w-fit
            rounded-full
            border
            border-border
            bg-zinc-900/50
            px-3
            py-1
            text-xs
            font-medium
            text-muted-foreground
          "
        >
          {period}
        </span>
      </div>

      <p className="mt-6 max-w-3xl leading-7 text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <Badge key={technology}>
            {technology}
          </Badge>
        ))}
      </div>
    </article>
  );
}