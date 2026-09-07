export interface CaseStudySection {
  title: string;
  content: string[];
}

export interface CaseStudyFeature {
  title: string;
  description: string;
}

export interface CaseStudyArchitectureItem {
  title: string;
  description: string;
  technologies: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;

  status: string;

  technologies: string[];

  problems: string[];

  features: CaseStudyFeature[];

  responsibilities: string[];

  architecture: CaseStudyArchitectureItem[];

  deployment: string[];

  result: string[];

  screenshots?: string[];
}
