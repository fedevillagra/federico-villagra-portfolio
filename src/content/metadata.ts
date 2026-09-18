import type { Metadata } from "next";
import { type Locale, locales } from "@/i18n/locales";
import { profile } from "./facts";
import { content } from "./index";

export function portfolioMetadata(locale: Locale): Metadata {
  const { title, description } = content[locale].metadata;
  const current = locales[locale];
  return {
    metadataBase: new URL(profile.siteUrl),
    title,
    description,
    alternates: {
      canonical: current.path,
      languages: {
        en: locales.en.path,
        es: locales.es.path,
        "x-default": locales.en.path,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: current.path,
      siteName: profile.name,
      locale: current.ogLocale,
      alternateLocale:
        locale === "en" ? locales.es.ogLocale : locales.en.ogLocale,
    },
  };
}
