import type { MetadataRoute } from "next";
import { profile } from "@/content/facts";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", profile.siteUrl).href,
    host: profile.siteUrl,
  };
}
