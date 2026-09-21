import Image from "next/image";
import { content } from "@/content";
import {
  experiences,
  organizations,
  pipelineStages,
  skillGroups,
  technologies,
} from "@/content/facts";
import type { Locale } from "@/i18n/locales";
import styles from "./current-work.module.css";

export function CurrentWork({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const work = copy.currentWork;
  const current = experiences.data;

  return (
    <section
      id="current-work"
      className={styles.section}
      aria-labelledby="current-work-heading"
    >
      <header className={styles.opening}>
        <p className={styles.index}>
          <span aria-hidden="true">01</span>
          {work.label}
        </p>
        <div>
          <p className={styles.eyebrow}>{copy.hero.area}</p>
          <h2 id="current-work-heading" className={styles.headline}>
            {work.headline}
            <span>{work.headlineEnd}</span>
          </h2>
        </div>
      </header>

      <div className={styles.scene}>
        <figure className={styles.image}>
          <Image
            src="/images/data-engineering-workflow.png"
            width={1672}
            height={941}
            alt=""
            loading="lazy"
            quality={75}
            sizes="(min-width: 1305px) 896px, (min-width: 1024px) calc(92vw - 304px), (min-width: 768px) 92vw, 100vw"
          />
          <figcaption>{work.imageCaption}</figcaption>
        </figure>
        <div className={styles.context}>
          <dl className={styles.identity}>
            <div>
              <dt>{copy.labels.employer}</dt>
              <dd>{organizations[current.employer]}</dd>
            </div>
            <div>
              <dt>{copy.labels.project}</dt>
              <dd>{organizations[current.project]}</dd>
            </div>
          </dl>
          <p className={styles.introduction}>{work.introduction}</p>
        </div>
      </div>

      <div className={styles.pipeline}>
        <div className={styles.pipelineHeading}>
          <h3 id="pipeline-heading">{work.pipelineLabel}</h3>
          <p>{work.pipelineNote}</p>
        </div>
        <ol className={styles.stages} aria-labelledby="pipeline-heading">
          {pipelineStages.map((stage, index) => (
            <li key={stage}>
              <div className={styles.stageTitle}>
                <span className={styles.step} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span lang="en">{stage}</span>
                {index < pipelineStages.length - 1 && (
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                )}
              </div>
              <p>{work.stages[stage]}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.tooling}>
        <p className={styles.eyebrow}>{copy.labels.technologies}</p>
        <ul>
          {skillGroups.data.map((id) => (
            <li key={id}>{technologies[id]}</li>
          ))}
        </ul>
      </div>

      <div className={styles.responsibilities}>
        <h3>{work.responsibilitiesLabel}</h3>
        <dl className={styles.domains}>
          {work.responsibilities.map((item, index) => (
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
      </div>
    </section>
  );
}
