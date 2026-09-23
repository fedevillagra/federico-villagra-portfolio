import Image from "next/image";
import { content } from "@/content";
import { certifications } from "@/content/certifications";
import { organizations } from "@/content/facts";
import type { Locale } from "@/i18n/locales";
import styles from "./certifications.module.css";

const issuerLogos = {
  openai: { src: "openai.svg", width: 24, height: 24 },
  epam: { src: "epam-systems.svg", width: 226, height: 80 },
  utn: { src: "utn.svg", width: 595, height: 699 },
  unc: { src: "unc.svg", width: 100, height: 138 },
  coderhouse: { src: "coderhouse.svg", width: 354, height: 369 },
} as const;

export function Certifications({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const index = copy.credentialIndex;
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className={styles.section}
    >
      <header data-reveal="heading" className={styles.opening}>
        <p className={styles.label}>
          <span data-motion-number aria-hidden="true">
            05 /
          </span>{" "}
          {copy.headings.certifications}
        </p>
        <h2 id="certifications-heading">{index.headline}</h2>
        <p className={styles.introduction}>{index.introduction}</p>
      </header>
      <div className={styles.composition}>
        <div data-reveal="image" className={styles.scene}>
          <Image
            src="/images/certifications-editorial-workspace.png"
            width={1122}
            height={1402}
            alt=""
            loading="lazy"
            quality={75}
            sizes="(min-width: 1305px) 552px, (min-width: 1024px) 42vw, (min-width: 768px) 92vw, calc(100vw - 48px)"
          />
        </div>
        <div className={styles.index}>
          {certifications.map((credential, position) => {
            const logo = issuerLogos[credential.issuer];
            return (
              <article
                key={credential.id}
                data-motion-credential
                className={styles.record}
                aria-labelledby={`certification-${credential.id}`}
              >
                <header className={styles.issuer}>
                  <span className={styles.number} aria-hidden="true">
                    {String(position + 1).padStart(2, "0")}
                  </span>
                  <h3 id={`certification-${credential.id}`}>
                    {organizations[credential.issuer]}
                  </h3>
                  <Image
                    className={styles.logo}
                    data-issuer={credential.issuer}
                    src={`/logos/${logo.src}`}
                    width={logo.width}
                    height={logo.height}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </header>
                {credential.kind === "group" && (
                  <p className={styles.groupNote}>
                    {copy.labels.credentialGroup}
                  </p>
                )}
                <ul className={styles.documents}>
                  {credential.documents.map((document) => (
                    <li key={document.id}>
                      <a
                        data-motion-link
                        href={document.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={styles.visuallyHidden}>
                          {copy.labels.certificate}
                          {": "}
                        </span>
                        <span lang={credential.nameLanguage}>
                          {document.name ?? credential.name}
                        </span>
                        <span
                          data-motion-arrow="out"
                          className={styles.arrow}
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                        <span
                          className={styles.visuallyHidden}
                        >{` (${copy.labels.newTab})`}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
