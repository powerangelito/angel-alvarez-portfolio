import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'delice',
    title: 'Délice',
    description:
      'Aplicación móvil e-commerce desarrollada para una panadería, orientada a la gestión del catálogo, pedidos, clientes y entregas.',
    technologies: [
      'Flutter',
      'C#',
      '.NET',
      'Supabase',
      'Railway',
      'GitHub Actions',
    ],
    status: 'development',
    featured: true,
  },
  {
    slug: 'pharmacy-system',
    title: 'Sistema para farmacia',
    description:
      'Aplicación web para la administración de consultas y la gestión del punto de venta de medicamentos, incluyendo el control de entradas y salidas.',
    technologies: ['React', 'C#', 'ASP.NET Core', 'Supabase'],
    status: 'development',
    featured: true,
  },
];
