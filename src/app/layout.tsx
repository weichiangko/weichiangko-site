import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveSidebar from "@/components/layout/ResponsiveSidebar";
import PresentModeToggle from "@/components/present/PresentModeToggle";
import PresentModeView from "@/components/present/PresentModeView";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <div className="flex min-h-screen bg-gray-50">
          <ResponsiveSidebar />
          <main className="flex-1 md:ml-[120px] lg:ml-72 ml-0 pt-16 md:pt-0">
            {children}
          </main>
        </div>
        <Suspense>
          <PresentModeToggle />
          <PresentModeView />
        </Suspense>
      </body>
    </html>
  );
}
