import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Ugochukwu Kenechukwu David | Full-Stack Developer & AI Data Specialist",
  description:
    "Portfolio of Ugochukwu Kenechukwu David - Full-Stack Web Developer and AI Training Professional specializing in Next.js, TypeScript, and machine learning data optimization frameworks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-slate-900 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
