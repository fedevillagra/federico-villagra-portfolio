export const profile = {
  name: "Federico Villagra",
  currentRole: "Junior Data Engineer",
  location: "Córdoba, Argentina",
  englishLevel: "B2",
  siteUrl: "https://federicovillagra.com",
} as const;

// Contact details confirmed by Federico; shared by presentation and future SEO.
export const contactDetails = {
  email: "fedevillagra8@gmail.com",
  linkedin: "https://linkedin.com/in/federicovillagra",
  github: "https://github.com/fedevillagra",
  cv: {
    en: "/cv/federico-villagra-cv-en.pdf",
    es: "/cv/federico-villagra-cv-es.pdf",
  },
} as const;

export const organizations = {
  openai: "OpenAI",
  epam: "EPAM Systems",
  claro: "CLARO",
  indumix: "INDUMIX",
  aerobics: "Aerobics Center",
  unc: "Universidad Nacional de Córdoba",
  siglo21: "Universidad Siglo 21",
  mundos: "Mundos E",
  coderhouse: "Coderhouse",
  utn: "Universidad Tecnológica Nacional",
} as const;

export const technologies = {
  java: "Java",
  python: "Python",
  oracle: "Oracle / PL/SQL",
  kafka: "Apache Kafka",
  linux: "Linux",
  shell: "Shell scripting",
  git: "Git",
  selenium: "Selenium WebDriver",
  junit: "JUnit",
  cucumber: "Cucumber",
  maven: "Maven",
  wordpress: "WordPress",
  woocommerce: "WooCommerce",
  elementor: "Elementor",
  php: "PHP",
  react: "React",
  typescript: "TypeScript",
  fastapi: "FastAPI",
  postgres: "PostgreSQL",
  cpp: "C++",
  mqtt: "MQTT",
  javascript: "JavaScript",
  node: "Node.js",
  express: "Express",
  mongodb: "MongoDB",
  mysql: "MySQL",
  jenkins: "Jenkins",
  actions: "GitHub Actions",
  docker: "Docker",
  kubernetes: "Kubernetes",
  aws: "AWS",
  terraform: "Terraform",
  elk: "Elastic Stack",
} as const;

export type TechnologyId = keyof typeof technologies;
type OrganizationId = keyof typeof organizations;
export type Period = { start: string; end: string | null };
type ExperienceFact = {
  employer: OrganizationId | null;
  project: OrganizationId | null;
  period: Period;
  technologies: readonly TechnologyId[];
  contextTechnologies: readonly TechnologyId[];
};

// Order is shared by both languages. A missing employer is not inferred.
export const experiences = {
  data: {
    employer: "epam",
    project: "claro",
    period: { start: "2026-01", end: null },
    technologies: [
      "java",
      "python",
      "oracle",
      "kafka",
      "linux",
      "shell",
      "git",
    ],
    contextTechnologies: [],
  },
  automation: {
    employer: "epam",
    project: "indumix",
    period: { start: "2025-07", end: "2025-12" },
    technologies: ["java", "selenium", "junit", "maven"],
    contextTechnologies: [
      "react",
      "typescript",
      "python",
      "fastapi",
      "postgres",
      "cpp",
      "mqtt",
    ],
  },
  internship: {
    employer: "epam",
    project: null,
    period: { start: "2025-02", end: "2025-06" },
    technologies: ["java", "selenium", "cucumber", "junit", "maven", "git"],
    contextTechnologies: [],
  },
  web: {
    employer: "aerobics",
    project: null,
    period: { start: "2023-12", end: "2024-12" },
    technologies: ["wordpress", "woocommerce", "elementor", "php"],
    contextTechnologies: [],
  },
} as const satisfies Record<string, ExperienceFact>;
export type ExperienceId = keyof typeof experiences;

export const heroTechnologies = ["java", "python", "oracle", "kafka"] as const;
export const skillGroups = {
  data: ["java", "python", "oracle", "kafka"],
  operations: ["linux", "shell", "git"],
  testing: ["java", "selenium", "junit", "cucumber", "maven"],
  web: ["wordpress", "woocommerce", "elementor", "php"],
  devops: [
    "jenkins",
    "actions",
    "docker",
    "kubernetes",
    "aws",
    "terraform",
    "elk",
  ],
  training: [
    "javascript",
    "react",
    "node",
    "express",
    "mongodb",
    "mysql",
    "cpp",
  ],
} as const satisfies Record<string, readonly TechnologyId[]>;
export type SkillGroupId = keyof typeof skillGroups;

type EducationFact = {
  organization: OrganizationId;
  period: Period | null;
  status: "inProgress" | "previousStudies" | "completed" | "unspecified";
  expectedGraduation?: string;
};
export const education = {
  computerEngineering: {
    organization: "unc",
    period: { start: "2018", end: "2026" },
    status: "previousStudies",
  },
  softwareEngineering: {
    organization: "siglo21",
    period: { start: "2026", end: "2027" },
    status: "inProgress",
    expectedGraduation: "2027-12",
  },
  devops: {
    organization: "mundos",
    // The source's end date contradicts its "currently studying" wording.
    period: null,
    status: "unspecified",
  },
  coderhouse: {
    organization: "coderhouse",
    period: { start: "2022-01", end: "2023-12" },
    status: "completed",
  },
  utn: {
    organization: "utn",
    period: { start: "2021-08", end: "2022-04" },
    status: "completed",
  },
} as const satisfies Record<string, EducationFact>;
export type EducationId = keyof typeof education;

export const pipelineStages = ["Extractor", "Parser", "Loader"] as const;
