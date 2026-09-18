import { organizations as org, profile, technologies as tech } from "./facts";
import type { PortfolioContent } from "./types";

export const en = {
  metadata: {
    title: `${profile.name} | ${profile.currentRole}`,
    description: `${profile.currentRole} at ${org.epam}, working on telecom data pipelines with ${tech.java}, ${tech.python}, ${tech.oracle} and ${tech.kafka}.`,
  },
  hero: {
    description: `I work at ${org.epam} as a ${profile.currentRole}, developing and maintaining data pipelines for a telecommunications project for ${org.claro}.`,
    area: "Data Engineering / Telecommunications",
    technologies: "My main technologies",
    cta: "Explore my professional experience",
  },
  headings: {
    "current-work": "My work in Data Engineering",
    experience: "Professional experience",
    skills: "Technical knowledge",
    education: "Education and selected credentials",
    additional: "Additional information",
  },
  labels: {
    language: "Language",
    navigation: "Page sections",
    skip: "Skip to main content",
    employer: "Employer",
    project: "Project / client",
    area: "Area",
    location: "Location",
    present: "Present",
    technologies: "Technologies used",
    context:
      "Product technology context — not a claim of development ownership",
    credentials: "Selected credentials",
    inProgress: "Studies in progress",
    completed: "Completed training",
    english: "English",
    englishDescription: "Upper-intermediate",
  },
  currentWork: {
    introduction:
      "I work on production ETL pipelines that integrate data from telecommunications providers and network platforms, from extraction and transformation to persistence and analytical use.",
    responsibilities: [
      `Develop and maintain Extractor, Parser and Loader components using ${tech.java} and ${tech.python}.`,
      `Develop and optimize packages, procedures and functions in ${tech.oracle}, and use ${tech.kafka} for communication between components.`,
      "Integrate new data sources, equipment, counters and KPIs into existing flows.",
      "Investigate production incidents through SQL and logs, trace data end to end, and run backfills and historical reprocessing.",
      "Build automated failure detection and recovery controls, and validate data quality after deployments.",
    ],
  },
  experiences: {
    data: {
      role: profile.currentRole,
      summary:
        "Development, maintenance and production support of ETL processes for telecommunications data.",
      responsibilities: [
        "Maintain data flows from extraction through transformation, persistence and analytical consumption.",
        "Collaborate with functional analysts, infrastructure and other technical teams on requirements and incidents.",
      ],
    },
    automation: {
      role: "Junior Software Test Automation Engineer",
      summary:
        "QA and test automation for a multifunctional product used in concrete plants, integrating a web interface, services, a database and PLC communication.",
      responsibilities: [
        "Derive test cases from requirements, perform manual functional and technical testing, and record traceable reports in Jira.",
        "Build UI automation with the Page Object Model and run regression checks after fixes.",
        "Support PLC-side testing by investigating simulation tools and validating MQTT topics, sequences and data synchronization.",
      ],
    },
    internship: {
      role: "QA Automation Intern (Java)",
      summary:
        "Professional training in automated software testing with guidance from senior mentors.",
      responsibilities: [
        "Develop and run automated tests using a layered test architecture.",
        "Practice clean code, modular design and maintainable tests, with additional PL/SQL and soft-skills training.",
      ],
    },
    web: {
      role: "Web Developer",
      summary:
        "Part-time development for an e-commerce platform offering courses and certifications for fitness and dance instructors.",
      responsibilities: [
        "Create and update website content, and develop custom plugins and scripts.",
        "Improve product management flows, implement responsive layouts and SEO-oriented structures, and collaborate with non-technical teams.",
      ],
    },
  },
  skills: {
    data: {
      title: "Data pipelines and integration",
      description: "Core tools used in my current ETL work.",
    },
    operations: {
      title: "Operation and troubleshooting",
      description: "Production investigation, scripting and version control.",
    },
    testing: {
      title: "Previous experience in test automation",
      description:
        "UI testing, regression checks and maintainable test suites.",
    },
    web: {
      title: "Previous experience in web development",
      description: "Content management, e-commerce and custom functionality.",
    },
    devops: {
      title: "DevOps training",
      description:
        "Tools covered in training on CI/CD, containers, cloud infrastructure and monitoring; not presented as professional specialization.",
    },
    training: {
      title: "Web and university coursework",
      description:
        "Technologies studied or used in educational projects, separate from production experience.",
    },
  },
  education: {
    university: {
      title: "Computer Engineering",
      description:
        "University studies covering software architecture, design patterns, algorithms, data structures, concurrency and operating systems, with team hardware and software projects.",
    },
    devops: {
      title: "DevOps training",
      description:
        "Training covering delivery automation, containers, infrastructure as code, cloud services, Linux administration and monitoring, with a team final project.",
    },
    coderhouse: {
      title: "Web Development Program",
      description:
        "Completed coursework in JavaScript, React and backend development, including weekly assignments, mentoring and evaluated final projects.",
    },
    utn: {
      title: "Full-Stack Web Development Diploma",
      description:
        "Completed training in responsive interfaces, backend development and relational databases, including three individual projects.",
    },
  },
  additional: {
    evolution:
      "My path from web development through test automation to data engineering brings a focus on validation, reliability and software quality to my current work.",
    collaboration:
      "I work in Agile, Scrum and Kanban environments, with proactive communication, collaboration and adaptation across technical and non-technical teams.",
  },
} satisfies PortfolioContent;
