import { organizations as org, profile, technologies as tech } from "./facts";
import type { PortfolioContent } from "./types";

export const es = {
  metadata: {
    title: `${profile.name} | ${profile.currentRole}`,
    description: `${profile.currentRole} en ${org.epam}. Trabajo en pipelines de telecomunicaciones con ${tech.java}, ${tech.python}, ${tech.oracle} y ${tech.kafka}.`,
  },
  hero: {
    description: `Trabajo en ${org.epam} como ${profile.currentRole}, desarrollando y manteniendo pipelines de datos en un proyecto de telecomunicaciones para ${org.claro}.`,
    area: "Ingeniería de datos / Telecomunicaciones",
    technologies: "Mis tecnologías principales",
    cta: "Conocé mi experiencia profesional",
  },
  headings: {
    "current-work": "Mi trabajo en ingeniería de datos",
    experience: "Experiencia profesional",
    skills: "Conocimientos técnicos",
    education: "Formación",
    certifications: "Certificaciones",
    about: "Sobre mí",
  },
  labels: {
    language: "Idioma",
    navigation: "Secciones de la página",
    skip: "Saltar al contenido principal",
    employer: "Empleador",
    project: "Proyecto / cliente",
    area: "Área",
    location: "Ubicación",
    present: "Actualidad",
    technologies: "Tecnologías utilizadas",
    context:
      "Contexto tecnológico del producto — no implica autoría de su desarrollo",
    certificate: "Ver certificado",
    newTab: "se abre en una pestaña nueva",
    credentialGroup: "Certificados del programa de desarrollo web MERN.",
    inProgress: "Estudios en curso",
    completed: "Formación completada",
    english: "Inglés",
    englishDescription: "Intermedio alto",
  },
  currentWork: {
    label: "Trabajo actual",
    headline: "Datos que tienen que funcionar",
    headlineEnd: "en producción.",
    introduction:
      "Desarrollo y mantengo pipelines ETL productivos para datos de telecomunicaciones, desde la integración de fuentes hasta el soporte de los procesos que los mantienen en funcionamiento.",
    imageCaption:
      "Una ilustración de integración de datos y telecomunicaciones.",
    pipelineLabel: "El flujo sobre el que trabajo",
    pipelineNote: "Una vista simplificada de las etapas de procesamiento.",
    stages: {
      Extractor: "Ingesta de datos de proveedores y plataformas de red.",
      Parser: "Análisis, validación y transformación de los datos recibidos.",
      Loader: `Persistencia en ${tech.oracle} para su consumo analítico.`,
    },
    responsibilitiesLabel: "De la implementación a la operación",
    responsibilities: [
      {
        title: "Integración de fuentes",
        description:
          "Integro nuevas fuentes, equipos, contadores y KPIs a flujos de datos existentes.",
      },
      {
        title: "Procesamiento y persistencia",
        description: `Desarrollo y mantengo componentes en ${tech.java} y ${tech.python}, optimizo packages, procedures y functions en ${tech.oracle} y conecto componentes mediante ${tech.kafka}.`,
      },
      {
        title: "Soporte productivo",
        description:
          "Investigo incidentes mediante SQL y logs, y ejecuto backfills y reprocesamientos históricos para recuperar datos.",
      },
      {
        title: "Calidad de datos",
        description:
          "Desarrollo controles automáticos de detección y recuperación ante fallas, y valido la calidad de datos después de las implementaciones.",
      },
    ],
  },
  experienceArchive: {
    industrialImage: {
      alt: "Tablero de control industrial abierto, con componentes eléctricos y cableado.",
      caption: `Hardware de control industrial del entorno de producto ${org.indumix}.`,
    },
    label: "Experiencia",
    note: "Desarrollo web, automatización de pruebas e ingeniería de datos. Distintas responsabilidades, conectadas por la calidad del software.",
    current: "Rol actual",
    imageCaption:
      "Ilustración conceptual de infraestructura de software, datos y telecomunicaciones.",
  },
  experiences: {
    data: {
      role: profile.currentRole,
      summary:
        "Desarrollo, mantenimiento y soporte productivo de procesos ETL para datos de telecomunicaciones.",
      responsibilities: [
        "Mantengo flujos de datos desde la extracción hasta su transformación, persistencia y consumo analítico.",
        "Colaboro con analistas funcionales, infraestructura y otros equipos técnicos en requerimientos e incidentes.",
      ],
    },
    automation: {
      role: "Junior Software Test Automation Engineer",
      summary:
        "QA y automatización de pruebas para un producto multifuncional de plantas de hormigón que integra interfaz web, servicios, base de datos y comunicación con PLC.",
      responsibilities: [
        "Derivé casos de prueba de los requisitos, ejecuté pruebas funcionales y técnicas manuales y registré informes con trazabilidad en Jira.",
        "Desarrollé automatización de interfaz con el modelo Page Object y ejecuté pruebas de regresión después de las correcciones.",
        "Apoyé las pruebas del lado del PLC mediante la investigación de simuladores y la validación de temas MQTT, secuencias y sincronización de datos.",
      ],
    },
    internship: {
      role: "Pasante de QA automatizado (Java)",
      summary:
        "Programa de formación profesional en pruebas automatizadas de software con orientación de mentores senior.",
      responsibilities: [
        "Desarrollé y ejecuté pruebas automatizadas con una arquitectura de pruebas en capas.",
        "Apliqué buenas prácticas de código, diseño modular y pruebas mantenibles, con formación adicional en PL/SQL y habilidades interpersonales.",
      ],
    },
    web: {
      role: "Desarrollador web",
      summary:
        "Desarrollo a tiempo parcial para una plataforma de comercio electrónico dedicada a capacitaciones y certificaciones para instructores de fitness y danza.",
      responsibilities: [
        "Creé y actualicé contenido del sitio y desarrollé plugins y scripts personalizados.",
        "Mejoré flujos de gestión de productos, implementé diseños adaptables y estructuras orientadas a SEO, y colaboré con equipos no técnicos.",
      ],
    },
  },
  knowledge: {
    dataUses: {
      java: "Componentes ETL",
      python: "Desarrollo ETL",
      oracle: "Persistencia y SQL",
      kafka: "Integración de componentes",
    },
    label: "Conocimientos",
    headline: "Herramientas con contexto.",
    introduction:
      "Un índice técnico construido desde la ingeniería de datos, las pruebas de software y el desarrollo web, con un espacio propio para la formación.",
    imageCaption:
      "Ilustración conceptual de un espacio de trabajo de software e ingeniería.",
    current: "Uso profesional actual",
    previous: "Experiencia profesional previa",
    coursework: "Formación y proyectos educativos",
    dataTitle: "Ingeniería de datos y pipelines",
    testingTitle: "Calidad y automatización",
    webTitle: "Desarrollo web",
    foundationsTitle: "Infraestructura y fundamentos de ingeniería",
    testingNote:
      "Automatización con Java en el entorno de producto INDUMIX y en la pasantía de EPAM. Cucumber formó parte de la pasantía.",
    trainingNote:
      "Formación y proyectos de desarrollo web, diferenciados del trabajo profesional con WordPress y PHP.",
    foundationsNote:
      "Trabajo universitario en C++, junto con algoritmos, estructuras de datos, arquitectura de software, concurrencia y sistemas operativos.",
  },
  skills: {
    data: {
      title: "Pipelines e integración de datos",
      description: "Herramientas principales de mi trabajo actual en ETL.",
    },
    operations: {
      title: "Operación y resolución de incidentes",
      description:
        "Investigación en producción, scripting y control de versiones.",
    },
    testing: {
      title: "Experiencia previa en automatización de pruebas",
      description:
        "Pruebas funcionales de interfaz, regresión y suites mantenibles.",
    },
    web: {
      title: "Experiencia previa en desarrollo web",
      description:
        "Gestión de contenido, comercio electrónico y funcionalidades personalizadas.",
    },
    devops: {
      title: "Formación en DevOps",
      description:
        "Herramientas de formación en CI/CD, contenedores, infraestructura en la nube y monitoreo; no se presentan como especialidad laboral.",
    },
    training: {
      title: "Formación web y universitaria",
      description:
        "Tecnologías estudiadas o utilizadas en proyectos educativos, diferenciadas de la experiencia productiva.",
    },
  },
  learningMap: {
    label: "Educación",
    headline: "Las bases detrás de la práctica.",
    complementary: "Formación complementaria",
    complementaryNote:
      "Programas específicos de entrega de software, desarrollo web y proyectos prácticos.",
    foundations: [
      {
        title: "Software",
        description:
          "Arquitectura y patrones de diseño. Algoritmos y estructuras de datos como base del desarrollo.",
      },
      {
        title: "Sistemas",
        description:
          "Concurrencia y sistemas operativos: estudiar cómo se ejecuta el software y cómo coordina su trabajo.",
      },
      {
        title: "Práctica",
        description: `Proyectos de hardware y software en equipo, utilizando ${tech.cpp} y ${tech.java} en el trabajo de software.`,
      },
    ],
    emphasis: {
      devops: "Entregas · Infraestructura · Operación",
      coderhouse: `${tech.javascript} / ${tech.react} / Backend`,
      utn: `Frontend / ${tech.php} / ${tech.mysql}`,
    },
  },
  education: {
    university: {
      title: "Ingeniería en Computación",
      description:
        "Estudios universitarios en arquitectura de software, patrones de diseño, algoritmos, estructuras de datos, concurrencia y sistemas operativos, con proyectos de hardware y software en equipo.",
    },
    devops: {
      title: "Formación en DevOps",
      description:
        "Formación en automatización de entregas, contenedores, infraestructura como código, servicios en la nube, administración de Linux y monitoreo, con un proyecto final en equipo.",
    },
    coderhouse: {
      title: "Programa de Desarrollo Web",
      description:
        "Formación completada en JavaScript, React y desarrollo backend, con entregas semanales, mentorías y proyectos finales evaluados.",
    },
    utn: {
      title: "Diplomatura en Desarrollo Web Full-Stack",
      description:
        "Formación completada en interfaces adaptables, desarrollo backend y bases de datos relacionales, con tres proyectos individuales.",
    },
  },
  credentialIndex: {
    headline: "Aprendizaje con respaldo.",
    introduction:
      "Credenciales individuales que acompañan una formación técnica continua. Cada enlace lleva a su certificado.",
    imageCaption:
      "Imagen editorial conceptual. Los documentos representados no son mis certificados reales.",
  },
  about: {
    headline: "Personas, lugares y tiempo compartido.",
    personal:
      "Fuera del trabajo disfruto pasar tiempo con mi familia, mi pareja y mis amigos. Compartir lo cotidiano con ellos es importante para mí.",
    interests: ["Viajar", "Fútbol", "Pádel"],
    football:
      "También me gusta ir a la cancha. Soy muy fanático de Belgrano de Córdoba.",
    workHeading: "Cómo trabajo",
    collaboration:
      "En el trabajo también valoro esa cercanía: un equipo que se comunique, colabore y tenga buenas relaciones. Me gusta tomar la iniciativa, adaptarme cuando las cosas cambian y trabajar con compañeros de perfiles técnicos y no técnicos.",
    agile:
      "Los entornos Agile, con Scrum y Kanban, forman parte de mi manera de trabajar con otros.",
    englishPurpose:
      "El inglés es una herramienta importante para comunicarme, aprender y colaborar con equipos internacionales.",
    portraitAlt: `Retrato de ${profile.name} al aire libre, con chaqueta verde y un paisaje de fondo.`,
    mateAlt: "Una mano sosteniendo un mate junto a un portátil.",
  },
} satisfies PortfolioContent;
