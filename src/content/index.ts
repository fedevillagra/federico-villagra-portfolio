import type { Locale } from "@/i18n/locales";
import { en } from "./en";
import { es } from "./es";
import type { PortfolioContent } from "./types";

export const content: Record<Locale, PortfolioContent> = { en, es };
