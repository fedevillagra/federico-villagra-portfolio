export const locales = {
  en: { path: "/", label: "English", ogLocale: "en_US" },
  es: { path: "/es", label: "Español", ogLocale: "es_AR" },
} as const;

export type Locale = keyof typeof locales;
