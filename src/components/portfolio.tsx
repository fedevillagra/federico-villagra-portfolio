import { content } from "@/content";
import {
  credentials,
  type EducationId,
  type ExperienceId,
  education,
  experiences,
  heroTechnologies,
  organizations,
  type Period,
  profile,
  type SkillGroupId,
  skillGroups,
  type TechnologyId,
  technologies,
} from "@/content/facts";
import { sectionIds } from "@/content/types";
import { type Locale, locales } from "@/i18n/locales";

function technologyList(ids: readonly TechnologyId[], locale: Locale) {
  return new Intl.ListFormat(locale, {
    style: "long",
    type: "conjunction",
  }).format(ids.map((id) => technologies[id]));
}

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
  const current = experiences.data;
  return (
    <>
      <header className="site-header">
        <a href="#main-content">{copy.labels.skip}</a>
        <nav aria-label={copy.labels.language}>
          <ul className="inline-list">
            {Object.entries(locales).map(([code, language]) => (
              <li key={code}>
                <a
                  href={language.path}
                  lang={code}
                  hrefLang={code}
                  aria-current={code === locale ? "page" : undefined}
                >
                  {code === locale ? (
                    <strong>{language.label}</strong>
                  ) : (
                    language.label
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={copy.labels.navigation}>
          <ul className="inline-list">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{copy.headings[id]}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        <header className="introduction">
          <h1>{profile.name}</h1>
          <p lang="en">
            <strong>{profile.currentRole}</strong>
          </p>
          <p>{copy.hero.description}</p>
          <dl>
            <dt>{copy.labels.employer}</dt>
            <dd>{organizations[current.employer]}</dd>
            <dt>{copy.labels.project}</dt>
            <dd>{organizations[current.project]}</dd>
            <dt>{copy.labels.area}</dt>
            <dd>{copy.hero.area}</dd>
            <dt>{copy.labels.location}</dt>
            <dd>{profile.location}</dd>
          </dl>
          <p>
            {copy.hero.technologies}: {technologyList(heroTechnologies, locale)}
            .
          </p>
          <a href="#experience">{copy.hero.cta}</a>
        </header>

        <section id="current-work" aria-labelledby="current-work-heading">
          <h2 id="current-work-heading">{copy.headings["current-work"]}</h2>
          <p>{copy.currentWork.introduction}</p>
          <ul>
            {copy.currentWork.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <h2 id="experience-heading">{copy.headings.experience}</h2>
          {(Object.keys(experiences) as ExperienceId[]).map((id) => {
            const fact = experiences[id];
            const text = copy.experiences[id];
            return (
              <article key={id} aria-labelledby={`experience-${id}`}>
                <h3
                  id={`experience-${id}`}
                  lang={id === "data" || id === "automation" ? "en" : undefined}
                >
                  {text.role}
                </h3>
                <dl>
                  {fact.employer && (
                    <>
                      <dt>{copy.labels.employer}</dt>
                      <dd>{organizations[fact.employer]}</dd>
                    </>
                  )}
                  {fact.project && (
                    <>
                      <dt>{copy.labels.project}</dt>
                      <dd>{organizations[fact.project]}</dd>
                    </>
                  )}
                </dl>
                <PeriodText period={fact.period} locale={locale} />
                <p>{text.summary}</p>
                <ul>
                  {text.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  <strong>{copy.labels.technologies}:</strong>{" "}
                  {technologyList(fact.technologies, locale)}.
                </p>
                {fact.contextTechnologies.length > 0 && (
                  <p>
                    <strong>{copy.labels.context}:</strong>{" "}
                    {technologyList(fact.contextTechnologies, locale)}.
                  </p>
                )}
              </article>
            );
          })}
        </section>

        <section id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading">{copy.headings.skills}</h2>
          {(Object.keys(skillGroups) as SkillGroupId[]).map((id) => (
            <article key={id} aria-labelledby={`skills-${id}`}>
              <h3 id={`skills-${id}`}>{copy.skills[id].title}</h3>
              <p>{copy.skills[id].description}</p>
              <p>{technologyList(skillGroups[id], locale)}.</p>
            </article>
          ))}
        </section>

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
          <h3>{copy.labels.credentials}</h3>
          <ul>
            {credentials.map((credential) => (
              <li key={credential.id}>
                <span lang={credential.lang}>{credential.title}</span>
                {" — "}
                {organizations[credential.issuer]}
              </li>
            ))}
          </ul>
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
