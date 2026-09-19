import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MinimalNav from "@/components/layout/MinimalNav";
import PresentModeView from "@/components/present/PresentModeView";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Ko - Design Engineer · Product Designer",
  description: "I turn ambiguous product problems into shippable interfaces and systems. iF Design Award 2024 · Sr. UI Engineer @ MiTAC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ fontFamily: 'var(--font-geist-sans)' }}
      >
        <ThemeProvider>
          <MinimalNav />
          <main className="pt-16">
            {children}
          </main>
          <Suspense>
            <PresentModeView />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
