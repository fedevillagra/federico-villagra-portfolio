import Image from "next/image";
import { content } from "@/content";
import {
  experiences,
  heroTechnologies,
  organizations,
  profile,
  technologies,
} from "@/content/facts";
import { visualContent } from "@/content/visual";
import type { Locale } from "@/i18n/locales";
import styles from "./hero.module.css";

export function Hero({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const visual = visualContent[locale];
  const current = experiences.data;
  const [firstName, ...surname] = profile.name.split(" ");
  return (
    <header className={styles.hero}>
      <h1 className={styles.name}>
        <span>{firstName}</span> <span>{surname.join(" ")}</span>
      </h1>
      <p className={styles.role}>
        <span lang="en">{profile.currentRole}</span>
        <span>
          {visual.at} <strong>{organizations[current.employer]}</strong>
        </span>
      </p>
      <figure className={styles.portrait}>
        <Image
          src="/images/federico-villagra-portrait.webp"
          alt={visual.portraitAlt}
          width={2777}
          height={3982}
          sizes="(min-width: 1305px) 426px, (min-width: 768px) 34vw, (min-width: 600px) 60vw, calc(100vw - 72px)"
          loading="eager"
          fetchPriority="high"
        />
        <figcaption>
          <span>{copy.labels.location}</span>
          {profile.location}
        </figcaption>
      </figure>
      <p className={styles.description}>{copy.hero.description}</p>
      <dl className={styles.metadata}>
        <div className={styles.project}>
          <dt>{copy.labels.project}</dt>
          <dd>{organizations[current.project]}</dd>
        </div>
        <div className={styles.area}>
          <dt>{copy.labels.area}</dt>
          <dd>{copy.hero.area}</dd>
        </div>
        <div className={styles.stack}>
          <dt>{copy.hero.technologies}</dt>
          <dd>
            <ul>
              {heroTechnologies.map((id) => (
                <li key={id}>{technologies[id]}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
      <div className={styles.endnote}>
        <a className={styles.next} href="#current-work">
          <span aria-hidden="true">01 /</span> {copy.currentWork.label}
          <span aria-hidden="true">↓</span>
        </a>
        <a className={styles.action} href="#experience">
          {copy.hero.cta}
          <span aria-hidden="true">↘</span>
        </a>
      </div>
    </header>
  );
}
