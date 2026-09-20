import type { ReactNode } from "react";
import { editorial, sans } from "../fonts";
import "../globals.css";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${editorial.variable} ${sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
