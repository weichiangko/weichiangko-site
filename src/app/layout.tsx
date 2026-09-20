import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MinimalNav from "@/components/layout/MinimalNav";
import PresentModeView from "@/components/present/PresentModeView";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import LiquidSilkBackground from "@/components/effects/LiquidSilkBackground";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ fontFamily: 'var(--font-geist-sans)' }}
      >
        <ThemeProvider>
          <LiquidSilkBackground />
          <div className="relative z-10">
            <MinimalNav />
            <main>
              {children}
            </main>
          </div>
          <Suspense>
            <PresentModeView />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
