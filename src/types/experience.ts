export interface ExperienceProject {
    name: string;
    description: string;
    technologies: string[];
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    location?: string;
    description: string;
    technologies: string[];
    projects?: ExperienceProject[];
}