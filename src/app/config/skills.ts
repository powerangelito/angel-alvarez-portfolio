import type { SkillCategory } from '@/types/skill';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    description: 'Desarrollo de APIs, servicios y aplicaciones empresariales.',
    skills: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'C#' },
      { name: 'ASP.NET Core' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'CodeIgniter' },
      { name: 'Python' },
      { name: 'Django' },
      { name: 'FastAPI' },
      { name: 'Node.js' },
      { name: 'Express' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    description: 'Construcción de interfaces web y aplicaciones móviles.',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Flutter' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Bases de datos',
    description:
      'Diseño, consulta e integración con diferentes motores de datos.',
    skills: [
      { name: 'SQL Server' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Supabase' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    description: 'Construcción, despliegue y automatización de aplicaciones.',
    skills: [
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'Railway' },
      { name: 'CI/CD' },
    ],
  },
  {
    title: 'Herramientas',
    description:
      'Herramientas utilizadas durante el desarrollo y mantenimiento.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Maven' },
      { name: 'npm' },
      { name: 'Vite' },
    ],
  },
];
