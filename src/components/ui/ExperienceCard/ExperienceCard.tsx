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
        <article className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h3 className="text-xl font-semibold">
                        {company}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                        {role}
                    </p>
                </div>

                <span className="text-sm text-muted-foreground">
                    {period}
                </span>
            </div>

            <p className="mt-6 leading-7 text-muted-foreground">
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