import type { ReactNode } from "react";
import { editorial, sans } from "../fonts";
import "../globals.css";

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${editorial.variable} ${sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
