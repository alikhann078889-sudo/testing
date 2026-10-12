import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maya Chen — Design Engineer & Full-Stack Developer",
  description:
    "Portfolio of Maya Chen, a San Francisco-based design engineer building fast, thoughtful web products with React, Next.js and TypeScript.",
  keywords: ["design engineer", "frontend engineer", "Next.js", "React", "portfolio", "Maya Chen"],
  openGraph: {
    title: "Maya Chen — Design Engineer & Full-Stack Developer",
    description: "I build fast, thoughtful products where engineering meets design.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="page-glow font-sans">{children}</body>
    </html>
  );
}
