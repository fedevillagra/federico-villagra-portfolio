import Image from "next/image";
import { content } from "@/content";
import { profile } from "@/content/facts";
import type { Locale } from "@/i18n/locales";
import styles from "./about.module.css";

export function About({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const about = copy.about;
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <header data-reveal="quiet" className={styles.opening}>
        <p className={styles.label}>
          <span data-motion-number aria-hidden="true">
            06 /
          </span>{" "}
          {copy.headings.about}
        </p>
        <h2 id="about-heading">{about.headline}</h2>
      </header>
      <div className={styles.photographs}>
        <Image
          data-reveal="image"
          className={styles.portrait}
          src="/images/federico-villagra-outdoors.webp"
          width={3024}
          height={4032}
          alt={about.portraitAlt}
          sizes="(min-width: 1305px) 480px, (min-width: 1024px) 37vw, (min-width: 768px) 45vw, calc(100vw - 72px)"
          loading="lazy"
          quality={75}
        />
        <Image
          data-reveal="aside"
          data-motion-desktop
          className={styles.mate}
          src="/images/mate-workday.jpeg"
          width={899}
          height={1599}
          alt={about.mateAlt}
          sizes="(min-width: 768px) 160px, 112px"
          loading="lazy"
          quality={75}
        />
      </div>
      <div className={styles.personal}>
        <p className={styles.introduction}>{about.personal}</p>
        <ul className={styles.interests}>
          {about.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className={styles.work}>
        <h3>{about.workHeading}</h3>
        <p>{about.collaboration}</p>
        <p className={styles.agile}>{about.agile}</p>
      </div>
      <div
        data-reveal="quiet"
        data-motion-rule
        data-motion-desktop
        className={styles.language}
      >
        <h3>{copy.labels.english}</h3>
        <p className={styles.level}>
          <span>{profile.englishLevel}</span>
          <span>{copy.labels.englishDescription}</span>
        </p>
        <p className={styles.languageNote}>{about.englishPurpose}</p>
      </div>
    </section>
  );
}
