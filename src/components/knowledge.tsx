import Image from "next/image";
import { content } from "@/content";
import { skillGroups, type TechnologyId, technologies } from "@/content/facts";
import type { Locale } from "@/i18n/locales";
import styles from "./knowledge.module.css";

function Tools({ ids }: { ids: readonly TechnologyId[] }) {
  return (
    <ul className={styles.tools}>
      {ids.map((id) => (
        <li key={id}>{technologies[id]}</li>
      ))}
    </ul>
  );
}

export function Knowledge({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const index = copy.knowledge;
  return (
    <section
      id="skills"
      className={styles.section}
      aria-labelledby="skills-heading"
    >
      <header className={styles.opening}>
        <p className={styles.label}>
          <span aria-hidden="true">03 /</span> {index.label}
        </p>
        <h2 id="skills-heading">{index.headline}</h2>
        <p className={styles.introduction}>{index.introduction}</p>
      </header>
      <div className={styles.focus}>
        <article className={styles.data} aria-labelledby="knowledge-data">
          <p className={styles.context}>{index.current}</p>
          <h3 id="knowledge-data">
            <span aria-hidden="true">01</span>
            {index.dataTitle}
          </h3>
          <p className={styles.description}>{copy.skills.data.description}</p>
          <ul className={styles.primaryTools}>
            {skillGroups.data.map((id) => (
              <li key={id}>
                <span>{technologies[id]}</span>
                <small>{index.dataUses[id]}</small>
              </li>
            ))}
          </ul>
          <div className={styles.operations}>
            <h4>{copy.skills.operations.title}</h4>
            <Tools ids={skillGroups.operations} />
            <p>{copy.skills.operations.description}</p>
          </div>
        </article>
        <div className={styles.image}>
          <Image
            src="/images/knowledge-technical-systems.png"
            width={1448}
            height={1086}
            alt=""
            sizes="(min-width: 1305px) 552px, (min-width: 1024px) 42vw, (min-width: 768px) 92vw, calc(100vw - 48px)"
            loading="lazy"
            quality={75}
          />
        </div>
      </div>
      <div className={styles.previous}>
        <article className={styles.group} aria-labelledby="knowledge-testing">
          <h3 id="knowledge-testing">
            <span aria-hidden="true">02</span>
            {index.testingTitle}
          </h3>
          <p className={styles.context}>{index.previous}</p>
          <p className={styles.description}>
            {copy.skills.testing.description}
          </p>
          <Tools ids={skillGroups.testing} />
          <p className={styles.note}>{index.testingNote}</p>
        </article>
        <article className={styles.group} aria-labelledby="knowledge-web">
          <h3 id="knowledge-web">
            <span aria-hidden="true">03</span>
            {index.webTitle}
          </h3>
          <p className={styles.context}>{index.previous}</p>
          <p className={styles.description}>{copy.skills.web.description}</p>
          <Tools ids={skillGroups.web} />
          <div className={styles.coursework}>
            <h4>{index.coursework}</h4>
            <Tools ids={skillGroups.training.filter((id) => id !== "cpp")} />
            <p className={styles.note}>{index.trainingNote}</p>
          </div>
        </article>
      </div>
      <article
        className={styles.foundations}
        aria-labelledby="knowledge-foundations"
      >
        <header>
          <h3 id="knowledge-foundations">
            <span aria-hidden="true">04</span>
            {index.foundationsTitle}
          </h3>
          <p className={styles.context}>{index.coursework}</p>
        </header>
        <div>
          <h4>{copy.skills.devops.title}</h4>
          <Tools ids={skillGroups.devops} />
          <p className={styles.note}>{copy.skills.devops.description}</p>
          <p className={styles.foundationNote}>{index.foundationsNote}</p>
        </div>
      </article>
    </section>
  );
}
