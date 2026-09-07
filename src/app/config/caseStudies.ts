import type { CaseStudy } from '@/types/case-study';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'delice',

    title: 'Délice',

    subtitle: 'Aplicación móvil e-commerce para una panadería y repostería.',

    summary:
      'Solución móvil desarrollada para digitalizar el canal de ventas de una panadería, permitiendo administrar pedidos, clientes, direcciones de entrega, catálogo de productos e historial de compras.',

    status:
      'Entrega, pruebas de lanzamiento y configuración en Google Play Console',

    technologies: [
      'Flutter',
      'C#',
      '.NET',
      'REST API',
      'Supabase',
      'PostgreSQL',
      'Supabase Auth',
      'Supabase Storage',
      'Railway',
      'GitHub Actions',
    ],

    problems: [
      'Digitalizar el canal de ventas de la panadería mediante una solución e-commerce directa al consumidor.',
      'Reducir la dependencia de plataformas de terceros y sus comisiones.',
      'Mejorar el levantamiento y procesamiento de pedidos a domicilio.',
      'Centralizar información de clientes, direcciones de entrega e historial de compras.',
    ],

    features: [
      {
        title: 'Autenticación',
        description:
          'Registro e inicio de sesión de usuarios mediante Supabase Auth.',
      },
      {
        title: 'Catálogo de productos',
        description:
          'Navegación por categorías como pan dulce, pan salado y repostería, incluyendo precios y descripciones.',
      },
      {
        title: 'Carrito y checkout',
        description:
          'Selección de productos y generación de pedidos para entrega a domicilio o pago contra entrega.',
      },
      {
        title: 'Historial de compras',
        description:
          'Consulta de órdenes anteriores y seguimiento del estado de los pedidos.',
      },
      {
        title: 'Gestión de perfil',
        description:
          'Administración de datos personales y direcciones de envío.',
      },
    ],

    responsibilities: [
      'Desarrollo completo de la aplicación móvil utilizando Flutter.',
      'Desarrollo de la API REST utilizando C# / .NET.',
      'Diseño de la arquitectura de la base de datos y sus relaciones.',
      'Integración de PostgreSQL, Supabase Auth y Supabase Storage.',
      'Configuración del entorno de producción de la API en Railway.',
      'Configuración del flujo de integración mediante GitHub Actions.',
      'Preparación de documentación y ficha técnica para la liberación mediante Google Play Console.',
    ],

    architecture: [
      {
        title: 'Aplicación móvil',
        description:
          'Frontend desarrollado en Flutter encargado de la experiencia del usuario, navegación, catálogo, carrito, checkout y gestión de perfil.',
        technologies: ['Flutter'],
      },
      {
        title: 'Backend',
        description:
          'API REST desarrollada en C# / .NET encargada de procesar la lógica de negocio, administrar los endpoints, atender las peticiones de la aplicación Flutter y orquestar la comunicación con Supabase y PostgreSQL.',
        technologies: ['C#', '.NET', 'REST API'],
      },
      {
        title: 'Datos y autenticación',
        description:
          'Supabase proporciona persistencia con PostgreSQL, autenticación de usuarios y almacenamiento de recursos multimedia.',
        technologies: [
          'Supabase',
          'PostgreSQL',
          'Supabase Auth',
          'Supabase Storage',
        ],
      },
      {
        title: 'Infraestructura',
        description:
          'La API REST desarrollada en C# / .NET se encuentra desplegada en Railway y el proyecto utiliza automatización mediante GitHub Actions.',
        technologies: ['Railway', 'GitHub Actions'],
      },
    ],

    deployment: [
      'Backend desplegado en Railway.',
      'Persistencia y servicios gestionados mediante Supabase.',
      'Preparación del proceso de publicación mediante Google Play Console.',
      'Aplicación actualmente en fase de pruebas de lanzamiento y configuración previa a producción.',
    ],

    result: [
      'La solución permite gestionar el ciclo completo de compra desde una aplicación móvil.',
      'La panadería dispone de un canal digital propio para la recepción de pedidos.',
      'Los usuarios pueden administrar su información, direcciones y consultar su historial de compras.',
      'La aplicación se encuentra preparada para su etapa de lanzamiento en Google Play.',
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
