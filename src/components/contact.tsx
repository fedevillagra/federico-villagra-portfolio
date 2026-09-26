import { content } from "@/content";
import { contactDetails, profile } from "@/content/facts";
import type { Locale } from "@/i18n/locales";
import styles from "./contact.module.css";

export function Contact({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const [mailbox, domain] = contactDetails.email.split("@");
  const links = [
    { label: "LinkedIn", href: contactDetails.linkedin },
    { label: "GitHub", href: contactDetails.github },
    { label: copy.contact.cv, href: contactDetails.cv },
  ];
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <header data-reveal="heading" className={styles.opening}>
        <p className={styles.index}>
          <span data-motion-number aria-hidden="true">
            07
          </span>
          {copy.headings.contact}
        </p>
        <div className={styles.invitation}>
          <h2 id="contact-heading">{copy.contact.headline}</h2>
          <p>{copy.contact.introduction}</p>
        </div>
      </header>
      <a
        data-reveal="quiet"
        data-motion-link
        data-motion-email
        className={styles.email}
        href={`mailto:${contactDetails.email}`}
      >
        {mailbox}
        <wbr />@{domain}
      </a>
      <div data-reveal="line" className={styles.connections}>
        <p className={styles.location}>{profile.location}</p>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a
                data-motion-link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
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
      </div>
    </section>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className={styles.footer}>
      <div className={`page-width ${styles.signature}`}>
        <p>
          {profile.name}
          <span>{content[locale].experiences.data.role}</span>
        </p>
        <a data-motion-link data-motion-top href="#top">
          {content[locale].contact.backToTop}
          <span data-motion-arrow="up" aria-hidden="true">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}
