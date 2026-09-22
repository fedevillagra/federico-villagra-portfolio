import Image from "next/image";
import { content } from "@/content";
import {
  type ExperienceId,
  experiences,
  organizations,
  type Period,
  type TechnologyId,
  technologies,
} from "@/content/facts";
import type { Locale } from "@/i18n/locales";
import styles from "./experience.module.css";

function ArchiveDate({ period, locale }: { period: Period; locale: Locale }) {
  const startYear = period.start.slice(0, 4);
  const endYear = period.end?.slice(0, 4);
  const format = (date: string) =>
    new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${date}-01T00:00:00Z`));
  return (
    <div className={styles.date}>
      <span className={styles.year} aria-hidden="true">
        {startYear}
        {endYear && endYear !== startYear && <span>—{endYear.slice(2)}</span>}
      </span>
      <p className={styles.period}>
        <time dateTime={period.start}>{format(period.start)}</time>
        <span aria-hidden="true"> — </span>
        {period.end ? (
          <time dateTime={period.end}>{format(period.end)}</time>
        ) : (
          content[locale].labels.present
        )}
      </p>
    </div>
  );
}

function TechLine({
  ids,
  locale,
}: {
  ids: readonly TechnologyId[];
  locale: Locale;
}) {
  return (
    <>
      {new Intl.ListFormat(locale, {
        style: "long",
        type: "conjunction",
      }).format(ids.map((id) => technologies[id]))}
    </>
  );
}

export function Experience({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const archive = copy.experienceArchive;
  return (
    <section
      id="experience"
      className={styles.section}
      aria-labelledby="experience-heading"
    >
      <header className={styles.opening}>
        <p className={styles.label}>
          <span aria-hidden="true">02 /</span> {archive.label}
        </p>
        <div className={styles.intro}>
          <h2 id="experience-heading">{copy.headings.experience}</h2>
          <p>{archive.note}</p>
        </div>
      </header>
      <div className={styles.records}>
        {(Object.keys(experiences) as ExperienceId[]).map((id) => {
          const fact = experiences[id];
          const text = copy.experiences[id];
          return (
            <article
              key={id}
              className={styles.record}
              data-role={id}
              aria-labelledby={`experience-${id}`}
            >
              <ArchiveDate period={fact.period} locale={locale} />
              <header className={styles.role}>
                {id === "data" && (
                  <p className={styles.current}>{archive.current}</p>
                )}
                <h3
                  id={`experience-${id}`}
                  lang={id === "data" || id === "automation" ? "en" : undefined}
                >
                  {text.role}
                </h3>
                <dl className={styles.organizations}>
                  {fact.employer && (
                    <div>
                      <dt>{copy.labels.employer}</dt>
                      <dd>{organizations[fact.employer]}</dd>
                    </div>
                  )}
                  {fact.project && (
                    <div>
                      <dt>{copy.labels.project}</dt>
                      <dd>{organizations[fact.project]}</dd>
                    </div>
                  )}
                </dl>
                {id === "data" && (
                  <p className={styles.area}>{copy.hero.area}</p>
                )}
                {id === "automation" && (
                  <figure className={styles.industrialFigure}>
                    <Image
                      src="/images/indumix-industrial-control.webp"
                      width={1360}
                      height={765}
                      alt={archive.industrialImage.alt}
                      loading="lazy"
                      quality={75}
                      sizes="(min-width: 1400px) 448px, (min-width: 1024px) 32vw, (min-width: 768px) 448px, (min-width: 600px) 92vw, calc(100vw - 48px)"
                    />
                    <figcaption>{archive.industrialImage.caption}</figcaption>
                  </figure>
                )}
              </header>
              <div className={styles.details}>
                <p className={styles.summary}>{text.summary}</p>
                <ul className={styles.responsibilities}>
                  {text.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {id === "data" && (
                  <div className={styles.image}>
                    <Image
                      src="/images/experience-telecom-infrastructure.png"
                      width={1672}
                      height={941}
                      alt=""
                      loading="lazy"
                      quality={75}
                      sizes="(min-width: 1305px) 404px, (min-width: 1024px) 30vw, (min-width: 768px) calc(92vw - 192px), (min-width: 600px) 92vw, calc(100vw - 48px)"
                    />
                  </div>
                )}
              </div>
              <div className={styles.technical}>
                <p>
                  <span className={styles.metaLabel}>
                    {copy.labels.technologies}
                  </span>
                  <TechLine ids={fact.technologies} locale={locale} />
                </p>
                {fact.contextTechnologies.length > 0 && (
                  <p className={styles.productContext}>
                    <span className={styles.metaLabel}>
                      {copy.labels.context}
                    </span>
                    <TechLine ids={fact.contextTechnologies} locale={locale} />
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
