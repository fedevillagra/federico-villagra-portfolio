import { Portfolio } from "@/components/portfolio";
import { portfolioMetadata } from "@/content/metadata";

export const metadata = portfolioMetadata("en");

export default function EnglishHome() {
  return <Portfolio locale="en" />;
}
