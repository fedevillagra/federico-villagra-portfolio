import type { Metadata } from "next";
import { type Locale, locales } from "@/i18n/locales";
import { profile } from "./facts";
import { content } from "./index";

export const canonicalUrls = {
  en: new URL(locales.en.path, profile.siteUrl).href,
  es: new URL(locales.es.path, profile.siteUrl).href,
};
export const languageAlternates = {
  ...canonicalUrls,
  "x-default": canonicalUrls.en,
};
export const socialImage = {
  url: new URL("/opengraph-image", profile.siteUrl).href,
  width: 1200,
  height: 630,
  alt: `${profile.name} | ${profile.currentRole}`,
};

export function portfolioMetadata(locale: Locale): Metadata {
  const { title, description } = content[locale].metadata;
  const current = locales[locale];
  const localizedSocialImage = {
    ...socialImage,
    alt: `${profile.name} | ${content[locale].experiences.data.role}`,
  };
  return {
    metadataBase: new URL(profile.siteUrl),
    title,
    description,
    authors: [{ name: profile.name, url: canonicalUrls.en }],
    creator: profile.name,
    alternates: {
      canonical: canonicalUrls[locale],
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      images: [localizedSocialImage],
      title,
      description,
      url: canonicalUrls[locale],
      siteName: profile.name,
      locale: current.ogLocale,
      alternateLocale:
        locale === "en" ? locales.es.ogLocale : locales.en.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [localizedSocialImage],
    },
  };
}
