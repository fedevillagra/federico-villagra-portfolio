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
  "additional",
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
  skills: Record<SkillGroupId, { title: string; description: string }>;
  education: Record<EducationId, { title: string; description: string }>;
  additional: { evolution: string; collaboration: string };
};
