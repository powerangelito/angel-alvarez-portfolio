import type { Experience } from "@/types/experience";

export const experience: Experience[] = [
    {
        company: "Citibanamex",
        role: "Freelance / Consultor Java",
        period: "2026",
        description:
            "Migración y actualización de microservicios Java 17 a Java 21, realizando ajustes de compatibilidad y modernización de los componentes involucrados.",
        technologies: [
            "Java 21",
            "Spring Boot",
            "Microservicios",
            "Maven",
            "Docker",
        ],
    },

    {
        company: "Freelance",
        role: "Full Stack Developer",
        period: "2025 - Actualidad",
        description:
            "Desarrollo de soluciones de software para clientes, incluyendo aplicaciones móviles y sistemas empresariales.",
        technologies: [
            "C#",
            "ASP.NET Core",
            "React",
            "Flutter",
            "Supabase",
            "Railway",
            "GitHub Actions",
        ],

        projects: [
            {
                name: "Delice",
                description:
                    "Desarrollo de una aplicación móvil para una panadería utilizando Flutter y una API desarrollada en C#. La solución utiliza Supabase y Railway, con integración de CI mediante GitHub Actions.",
                technologies: [
                    "Flutter",
                    "C#",
                    "ASP.NET Core",
                    "Supabase",
                    "Railway",
                    "GitHub Actions",
                ],
            },

            {
                name: "Sistema para farmacia",
                description:
                    "Desarrollo de una SPA en React y una API en C# para la administración de consultas y posteriormente la gestión del punto de venta de medicamentos, incluyendo entradas y salidas de medicamentos.",
                technologies: [
                    "React",
                    "C#",
                    "ASP.NET Core",
                    "Supabase",
                ],
            },
        ],
    },

    {
        company: "DocSolutions",
        role: "Full Stack Developer",
        period: "2017 - 2025",
        description:
            "Desarrollo y mantenimiento de soluciones empresariales utilizando diferentes tecnologías backend y frontend.",
        technologies: [
            "PHP",
            "Laravel",
            "CodeIgniter",
            "C#",
            "Java",
            "React",
            "SQL Server",
        ],
    },
];