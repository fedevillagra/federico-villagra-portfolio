import { portfolioStructuredData } from "@/content/structured-data";
import type { Locale } from "@/i18n/locales";

export function StructuredData({ locale }: { locale: Locale }) {
  const json = JSON.stringify(portfolioStructuredData(locale)).replace(
    /</g,
    "\\u003c",
  );
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Server JSON-LD; escaping < prevents closing the script element, per Next.js guidance.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
