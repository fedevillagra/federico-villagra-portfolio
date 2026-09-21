import { content } from "@/content";
import { certifications } from "@/content/certifications";
import {
  type EducationId,
  education,
  organizations,
  type Period,
  profile,
} from "@/content/facts";
import type { Locale } from "@/i18n/locales";
import { CurrentWork } from "./current-work";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { Knowledge } from "./knowledge";
import { SiteHeader } from "./site-header";

function PeriodText({ period, locale }: { period: Period; locale: Locale }) {
  const format = (value: string) =>
    value.length === 4
      ? value
      : new Intl.DateTimeFormat(locale, {
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        }).format(new Date(`${value}-01T00:00:00Z`));
  return (
    <p>
      <time dateTime={period.start}>{format(period.start)}</time>
      {" – "}
      {period.end ? (
        <time dateTime={period.end}>{format(period.end)}</time>
      ) : (
        content[locale].labels.present
      )}
    </p>
  );
}

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

        <section id="education" aria-labelledby="education-heading">
          <h2 id="education-heading">{copy.headings.education}</h2>
          {(Object.keys(education) as EducationId[]).map((id) => {
            const fact = education[id];
            const text = copy.education[id];
            return (
              <article key={id} aria-labelledby={`education-${id}`}>
                <h3 id={`education-${id}`}>{text.title}</h3>
                <p>{organizations[fact.organization]}</p>
                {fact.status !== "unspecified" && (
                  <p>
                    <strong>{copy.labels[fact.status]}</strong>
                  </p>
                )}
                {fact.period && (
                  <PeriodText period={fact.period} locale={locale} />
                )}
                <p>{text.description}</p>
              </article>
            );
          })}
        </section>

        <section id="certifications" aria-labelledby="certifications-heading">
          <h2 id="certifications-heading">{copy.headings.certifications}</h2>
          {certifications.map((credential) => (
            <article
              key={credential.id}
              aria-labelledby={`certification-${credential.id}`}
            >
              <h3
                id={`certification-${credential.id}`}
                lang={credential.nameLanguage}
              >
                {credential.name}
              </h3>
              <p>{organizations[credential.issuer]}</p>
              {credential.kind === "group" && (
                <p>{copy.labels.credentialGroup}</p>
              )}
              <ul>
                {credential.documents.map((document, index) => (
                  <li key={document.id}>
                    <a
                      href={document.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy.labels.certificate}
                      {credential.kind === "group" ? ` ${index + 1}` : ""}
                      {": "}
                      <span lang={credential.nameLanguage}>
                        {document.name ?? credential.name}
                      </span>
                      {` (${copy.labels.newTab})`}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

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
