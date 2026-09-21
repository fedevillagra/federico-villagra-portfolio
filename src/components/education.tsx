import { content } from "@/content";
import { education, organizations, type Period } from "@/content/facts";
import type { Locale } from "@/i18n/locales";
import styles from "./education.module.css";

function PeriodText({ period, locale }: { period: Period; locale: Locale }) {
  const format = (value: string) =>
    value.length === 4
      ? value
      : new Intl.DateTimeFormat(locale, {
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        }).format(new Date(`${value}-01T00:00:00Z`));
  return (
    <p className={styles.period}>
      <time dateTime={period.start}>{format(period.start)}</time>
      {" — "}
      {period.end ? (
        <time dateTime={period.end}>{format(period.end)}</time>
      ) : (
        content[locale].labels.present
      )}
    </p>
  );
}

export function Education({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const map = copy.learningMap;
  const university = education.university;
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className={styles.section}
    >
      <header className={styles.opening}>
        <p className={styles.label}>
          <span aria-hidden="true">04 /</span> {map.label}
        </p>
        <h2 id="education-heading">{map.headline}</h2>
      </header>
      <article
        className={styles.university}
        aria-labelledby="education-university"
      >
        <header className={styles.degree}>
          <p className={styles.institution}>
            {organizations[university.organization]}
          </p>
          <h3 id="education-university">{copy.education.university.title}</h3>
        </header>
        <div className={styles.universityPeriod}>
          <p className={styles.year}>
            <time dateTime={university.period.start}>
              {university.period.start}
            </time>
            <span aria-hidden="true">—</span>
          </p>
          <p className={styles.present}>{copy.labels.present}</p>
          <p className={styles.status}>{copy.labels[university.status]}</p>
        </div>
        <dl className={styles.foundations}>
          {map.foundations.map((item, index) => (
            <div key={item.title}>
              <dt>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
              </dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </article>
      <div className={styles.complementary}>
        <header className={styles.secondaryOpening}>
          <h3>{map.complementary}</h3>
          <p>{map.complementaryNote}</p>
        </header>
        <div className={styles.programs}>
          {(["devops", "coderhouse", "utn"] as const).map((id) => {
            const fact = education[id];
            const text = copy.education[id];
            return (
              <article
                key={id}
                className={styles.program}
                data-program={id}
                aria-labelledby={`education-${id}`}
              >
                <header>
                  <p className={styles.programInstitution}>
                    {organizations[fact.organization]}
                  </p>
                  <h4 id={`education-${id}`}>{text.title}</h4>
                  {fact.period && (
                    <PeriodText period={fact.period} locale={locale} />
                  )}
                  {fact.status !== "unspecified" && (
                    <p className={styles.programStatus}>
                      {copy.labels[fact.status]}
                    </p>
                  )}
                </header>
                <div className={styles.programDetail}>
                  <p className={styles.emphasis}>{map.emphasis[id]}</p>
                  <p>{text.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
