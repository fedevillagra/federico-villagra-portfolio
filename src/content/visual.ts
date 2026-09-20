import type { Locale } from "@/i18n/locales";
import { profile } from "./facts";

// Presentation labels only; professional facts remain in facts.ts.
export const visualContent = {
  en: {
    at: "at",
    portraitAlt: `Portrait of ${profile.name}, smiling in a white shirt.`,
    navigation: {
      experience: "Experience",
      skills: "Knowledge",
      education: "Education",
      certifications: "Certifications",
    },
  },
  es: {
    at: "en",
    portraitAlt: `Retrato de ${profile.name}, sonriendo con camisa blanca.`,
    navigation: {
      experience: "Experiencia",
      skills: "Conocimientos",
      education: "Formación",
      certifications: "Certificaciones",
    },
  },
} satisfies Record<
  Locale,
  {
    at: string;
    portraitAlt: string;
    navigation: Record<
      "experience" | "skills" | "education" | "certifications",
      string
    >;
  }
>;
