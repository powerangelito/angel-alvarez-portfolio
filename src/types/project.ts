export type ProjectStatus =
  | "production"
  | "development"
  | "completed";

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  featured?: boolean;
  repositoryUrl?: string;
  demoUrl?: string;
}