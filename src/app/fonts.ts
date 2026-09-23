import { Newsreader, Source_Sans_3 } from "next/font/google";

export const editorial = Newsreader({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  variable: "--font-editorial",
});

export const sans = Source_Sans_3({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  variable: "--font-body",
});
