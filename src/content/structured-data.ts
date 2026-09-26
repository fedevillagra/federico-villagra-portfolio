import type { Locale } from "@/i18n/locales";
import { certifications } from "./certifications";
import { contactDetails, experiences, organizations, profile } from "./facts";
import { content } from "./index";
import { canonicalUrls } from "./metadata";

export function portfolioStructuredData(locale: Locale) {
  const { title, description } = content[locale].metadata;
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${canonicalUrls[locale]}#profile`,
    url: canonicalUrls[locale],
    name: title,
    description,
    inLanguage: locale,
    mainEntity: {
      "@type": "Person",
      "@id": `${canonicalUrls.en}#person`,
      name: profile.name,
      url: canonicalUrls.en,
      jobTitle: content[locale].experiences.data.role,
      description,
      image: new URL("/images/federico-villagra-portrait.webp", profile.siteUrl)
        .href,
      email: `mailto:${contactDetails.email}`,
      sameAs: [contactDetails.linkedin, contactDetails.github],
      worksFor: {
        "@type": "Organization",
        name: organizations[experiences.data.employer],
      },
      hasCredential: certifications.flatMap((credential) =>
        credential.documents.map((document) => ({
          "@type": "EducationalOccupationalCredential",
          name: document.name ?? credential.name,
          url: document.url,
        })),
      ),
    },
  };
}
