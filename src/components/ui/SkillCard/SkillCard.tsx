import { Badge } from "../Badge";

interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
}

export function SkillCard({
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <article
      className="
        h-full
        rounded-2xl
        border
        border-border
        bg-card
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
      "
    >
      <h3 className="text-lg font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </article>
  );
}