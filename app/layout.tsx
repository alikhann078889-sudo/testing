import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maya Chen — Senior Product Engineer",
  description:
    "Portfolio of Maya Chen, a Berlin-based senior product engineer building fast, humane software for data-heavy products. Projects, experience and contact.",
  keywords: ["product engineer", "frontend", "Next.js", "TypeScript", "portfolio", "Berlin"],
  openGraph: {
    title: "Maya Chen — Senior Product Engineer",
    description: "Fast, humane software for data-heavy products. Projects, experience and contact.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
