import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Hanken_Grotesk, Space_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-head",
});

export const metadata: Metadata = {
  title: "SN Construction & Traders | Madurai",
  description: "Ready-built homes, turnkey construction, and building materials in Madurai.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}