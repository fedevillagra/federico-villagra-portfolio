import type { EducationId, ExperienceId, SkillGroupId } from "./facts";

export const sectionIds = [
  "current-work",
  "experience",
  "skills",
  "education",
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
    credentials: string;
    inProgress: string;
    completed: string;
    english: string;
    englishDescription: string;
  };
  currentWork: { introduction: string; responsibilities: readonly string[] };
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
