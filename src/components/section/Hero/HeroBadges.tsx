import { Badge } from "../../ui/Badge";

const technologies = [
    "Java",
    "Spring Boot",
    "React",
    "Flutter",
    "ASP.NET Core",
    "Docker",
    "PostgreSQL",
];

export function HeroBadges() {
    return (
        <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
                <Badge key={tech}>
                    {tech}
                </Badge>
            ))}
        </div>
    );
}