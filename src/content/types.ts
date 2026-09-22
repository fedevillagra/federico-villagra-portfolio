import type {
  EducationId,
  ExperienceId,
  pipelineStages,
  SkillGroupId,
} from "./facts";

export const sectionIds = [
  "current-work",
  "experience",
  "skills",
  "education",
  "certifications",
  "about",
] as const;
export type SectionId = (typeof sectionIds)[number];

export type PortfolioContent = {
  metadata: { title: string; description: string };
  hero: {
    description: string;
    area: string;
    technologies: string;
    cta: string;
  };
  headings: Record<SectionId, string>;
  labels: {
    language: string;
    navigation: string;
    skip: string;
    employer: string;
    project: string;
    area: string;
    location: string;
    present: string;
    technologies: string;
    context: string;
    certificate: string;
    newTab: string;
    credentialGroup: string;
    inProgress: string;
    completed: string;
    english: string;
    englishDescription: string;
  };
  currentWork: {
    label: string;
    headline: string;
    headlineEnd: string;
    introduction: string;
    imageCaption: string;
    pipelineLabel: string;
    pipelineNote: string;
    stages: Record<(typeof pipelineStages)[number], string>;
    responsibilitiesLabel: string;
    responsibilities: readonly { title: string; description: string }[];
  };
  experienceArchive: {
    industrialImage: { alt: string; caption: string };
    label: string;
    note: string;
    current: string;
    imageCaption: string;
  };
  experiences: Record<
    ExperienceId,
    {
      role: string;
      summary: string;
      responsibilities: readonly string[];
    }
  >;
  knowledge: {
    dataUses: Record<"java" | "python" | "oracle" | "kafka", string>;
    label: string;
    headline: string;
    introduction: string;
    imageCaption: string;
    current: string;
    previous: string;
    coursework: string;
    dataTitle: string;
    testingTitle: string;
    webTitle: string;
    foundationsTitle: string;
    testingNote: string;
    trainingNote: string;
    foundationsNote: string;
  };
  skills: Record<SkillGroupId, { title: string; description: string }>;
  learningMap: {
    label: string;
    headline: string;
    complementary: string;
    complementaryNote: string;
    foundations: readonly { title: string; description: string }[];
    emphasis: Record<Exclude<EducationId, "university">, string>;
  };
  education: Record<EducationId, { title: string; description: string }>;
  credentialIndex: {
    headline: string;
    introduction: string;
    imageCaption: string;
  };
  about: {
    headline: string;
    personal: string;
    interests: readonly string[];
    football: string;
    workHeading: string;
    collaboration: string;
    agile: string;
    englishPurpose: string;
    portraitAlt: string;
    mateAlt: string;
  };
};
