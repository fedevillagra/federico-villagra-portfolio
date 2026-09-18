import { Portfolio } from "@/components/portfolio";
import { portfolioMetadata } from "@/content/metadata";

export const metadata = portfolioMetadata("es");

export default function SpanishHome() {
  return <Portfolio locale="es" />;
}
