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

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className={styles.section}
    >
      <header data-reveal="quiet" className={styles.opening}>
        <h2 id="education-heading" className={styles.label}>
          <span data-motion-number aria-hidden="true">
            04 /
          </span>{" "}
          {map.label}
        </h2>
      </header>
      <div className={styles.academicPath}>
        {(["computerEngineering", "softwareEngineering"] as const).map((id) => {
          const fact = education[id];
          return (
            <article
              key={id}
              data-reveal="quiet"
              data-stage={fact.status === "inProgress" ? "current" : "previous"}
              className={styles.academicRecord}
              aria-labelledby={`education-${id}`}
            >
              <p className={styles.stage}>{copy.labels[fact.status]}</p>
              <header className={styles.degree}>
                <p className={styles.institution}>
                  {organizations[fact.organization]}
                </p>
                <h3 id={`education-${id}`}>{copy.education[id].title}</h3>
              </header>
              <p className={styles.year}>
                <time dateTime={fact.period.start}>{fact.period.start}</time>
                <span>—</span>
                <time dateTime={fact.period.end}>{fact.period.end}</time>
              </p>
              {"expectedGraduation" in fact && (
                <p className={styles.expected}>
                  {map.expectedGraduation} ·{" "}
                  <time dateTime={fact.expectedGraduation}>
                    {new Intl.DateTimeFormat(locale, {
                      month: "short",
                      year: "numeric",
                      timeZone: "UTC",
                    })
                      .format(
                        new Date(`${fact.expectedGraduation}-01T00:00:00Z`),
                      )
                      .replace(/^./, (letter) => letter.toUpperCase())}
                  </time>
                </p>
              )}
            </article>
          );
        })}
      </div>
      <dl
        data-reveal="group"
        data-motion-desktop
        className={styles.foundations}
      >
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
      <div data-reveal="line" data-motion-rule className={styles.complementary}>
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
