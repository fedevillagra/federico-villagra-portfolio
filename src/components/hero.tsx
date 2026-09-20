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

export function Hero({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const visual = visualContent[locale];
  const current = experiences.data;
  const stack = new Intl.ListFormat(locale, {
    style: "long",
    type: "conjunction",
  }).format(heroTechnologies.map((id) => technologies[id]));

  return (
    <header className="hero">
      <div className="hero-copy">
        <h1>{profile.name}</h1>
        <p className="hero-role">
          <span lang="en">{profile.currentRole}</span> {visual.at}{" "}
          <strong>{organizations[current.employer]}</strong>
        </p>
        <p className="hero-description">{copy.hero.description}</p>
        <dl className="hero-context">
          <div>
            <dt>{copy.labels.project}</dt>
            <dd>{organizations[current.project]}</dd>
          </div>
          <div>
            <dt>{copy.labels.area}</dt>
            <dd>{copy.hero.area}</dd>
          </div>
        </dl>
        <p className="hero-technologies">
          <span>{copy.hero.technologies}</span>
          {stack}.
        </p>
        <a className="hero-action" href="#experience">
          {copy.hero.cta}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <figure className="hero-portrait">
        <Image
          src="/images/federico-villagra-portrait.webp"
          alt={visual.portraitAlt}
          width={2777}
          height={3982}
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 35vw, (min-width: 368px) 320px, calc(100vw - 48px)"
          loading="eager"
          fetchPriority="high"
        />
        <figcaption>{profile.location}</figcaption>
      </figure>
    </header>
  );
}
