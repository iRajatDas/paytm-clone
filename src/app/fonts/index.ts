import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  weight: ["400", "500", "600", "700", ],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
