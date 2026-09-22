import { content } from "@/content";
import { profile } from "@/content/facts";
import { visualContent } from "@/content/visual";
import { type Locale, locales } from "@/i18n/locales";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <header id="top" tabIndex={-1} className="site-header page-width">
      <a className="skip-link" href="#main-content">
        {copy.labels.skip}
      </a>
      <a className="site-identity" href={locales[locale].path}>
        {profile.name}
      </a>
      <nav className="primary-navigation" aria-label={copy.labels.navigation}>
        <ul>
          {Object.entries(visualContent[locale].navigation).map(
            ([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ),
          )}
        </ul>
      </nav>
      <nav className="language-navigation" aria-label={copy.labels.language}>
        <ul>
          {Object.entries(locales).map(([code, language]) => (
            <li key={code}>
              <a
                href={language.path}
                lang={code}
                hrefLang={code}
                aria-current={code === locale ? "page" : undefined}
              >
                {language.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
