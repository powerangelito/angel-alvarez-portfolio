import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "delice",
    title: "Delice",
    description:
      "Aplicación móvil desarrollada para una panadería, con frontend en Flutter y una API construida en C#. La solución integra servicios de datos y un flujo de integración y despliegue continuo.",
    technologies: [
      "Flutter",
      "C#",
      "ASP.NET Core",
      "Supabase",
      "Railway",
      "GitHub Actions",
    ],
    status: "production",
    featured: true,
  },
  {
    slug: "pharmacy-system",
    title: "Sistema para farmacia",
    description:
      "Aplicación web para la administración de consultas y la gestión del punto de venta de medicamentos, incluyendo el control de entradas y salidas.",
    technologies: [
      "React",
      "C#",
      "ASP.NET Core",
      "Supabase",
    ],
    status: "development",
    featured: true,
  },
];