import type { MetadataRoute } from "next";
import { canonicalUrls, languageAlternates } from "@/content/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(canonicalUrls).map((url) => ({
    url,
    alternates: { languages: languageAlternates },
  }));
}
