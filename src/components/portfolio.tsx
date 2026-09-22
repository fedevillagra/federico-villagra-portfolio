import type { Locale } from "@/i18n/locales";
import { About } from "./about";
import { Certifications } from "./certifications";
import { Contact, SiteFooter } from "./contact";
import { CurrentWork } from "./current-work";
import { Education } from "./education";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { Knowledge } from "./knowledge";
import { SiteHeader } from "./site-header";

export function Portfolio({ locale }: { locale: Locale }) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content" className="page-width" tabIndex={-1}>
        <Hero locale={locale} />

        <CurrentWork locale={locale} />

        <Experience locale={locale} />

        <Knowledge locale={locale} />

        <Education locale={locale} />

        <Certifications locale={locale} />

        <About locale={locale} />

        <Contact locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
