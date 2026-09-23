import { Portfolio } from "@/components/portfolio";
import { StructuredData } from "@/components/structured-data";
import { portfolioMetadata } from "@/content/metadata";

export const metadata = portfolioMetadata("es");

export default function SpanishHome() {
  return (
    <>
      <StructuredData locale="es" />
      <Portfolio locale="es" />
    </>
  );
}
