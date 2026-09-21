import { content } from "@/content";
import { profile } from "@/content/facts";
import type { Locale } from "@/i18n/locales";
import { Certifications } from "./certifications";
import { CurrentWork } from "./current-work";
import { Education } from "./education";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { Knowledge } from "./knowledge";
import { SiteHeader } from "./site-header";

export function Portfolio({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content" className="page-width" tabIndex={-1}>
        <Hero locale={locale} />

        <CurrentWork locale={locale} />

        <Experience locale={locale} />

        <Knowledge locale={locale} />

        <Education locale={locale} />

        <Certifications locale={locale} />

        <section id="additional" aria-labelledby="additional-heading">
          <h2 id="additional-heading">{copy.headings.additional}</h2>
          <p>{copy.additional.evolution}</p>
          <p>{copy.additional.collaboration}</p>
          <p>
            <strong>{copy.labels.english}:</strong> {profile.englishLevel} —{" "}
            {copy.labels.englishDescription}.
          </p>
        </section>
      </main>
    </>
  );
}
