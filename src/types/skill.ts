export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}
