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
    <header data-motion-hero className={styles.hero}>
      <h1 className={styles.name}>
        <span data-entry="first">{firstName}</span>{" "}
        <span data-entry="last">{surname.join(" ")}</span>
      </h1>
      <p data-entry="role" className={styles.role}>
        <span>{copy.experiences.data.role}</span>
        <span>
          {visual.at} <strong>{organizations[current.employer]}</strong>
        </span>
      </p>
      <figure data-entry="portrait" className={styles.portrait}>
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
      <p data-entry="description" className={styles.description}>
        {copy.hero.description}
      </p>
      <dl data-entry="metadata" className={styles.metadata}>
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
      <div data-entry="endnote" className={styles.endnote}>
        <a data-motion-link className={styles.next} href="#current-work">
          <span aria-hidden="true">01 /</span> {copy.currentWork.label}
          <span data-motion-arrow="down" aria-hidden="true">
            ↓
          </span>
        </a>
        <a
          data-motion-link="permanent"
          className={styles.action}
          href="#experience"
        >
          {copy.hero.cta}
          <span data-motion-arrow="down-right" aria-hidden="true">
            ↘
          </span>
        </a>
      </div>
    </header>
  );
}
