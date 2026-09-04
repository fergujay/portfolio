import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniil Kovtun — Software Developer",
  description:
    "Software Developer with 9 years of experience. Specialising in React, TypeScript, and modern front-end architecture.",
  keywords: [
    "Software Developer",
    "React",
    "TypeScript",
    "Front-end",
    "Belgrade",
  ],
  authors: [{ name: "Daniil Kovtun" }],
  openGraph: {
    title: "Daniil Kovtun — Software Developer",
    description:
      "Software Developer with 9 years of experience. Specialising in React, TypeScript, and modern front-end architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
