import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pawel Lisowski | Senior Software Engineer",
  description:
    "Senior Software Engineer with 8+ years of experience building scalable full-stack web applications. Specializing in React, TypeScript, Java, and Python.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Python",
    "Next.js",
  ],
  authors: [{ name: "Pawel Lisowski" }],
  openGraph: {
    title: "Pawel Lisowski | Senior Software Engineer",
    description:
      "Senior Software Engineer with 8+ years of experience building scalable full-stack web applications.",
    url: "https://plisowski.dev",
    siteName: "Pawel Lisowski",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
