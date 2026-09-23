import { Portfolio } from "@/components/portfolio";
import { StructuredData } from "@/components/structured-data";
import { portfolioMetadata } from "@/content/metadata";

export const metadata = portfolioMetadata("en");

export default function EnglishHome() {
  return (
    <>
      <StructuredData locale="en" />
      <Portfolio locale="en" />
    </>
  );
}
