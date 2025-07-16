import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveSidebar from "@/components/layout/ResponsiveSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Ko - UX/UI Designer & Frontend Developer",
  description: "Passionate designer bridging creativity and development to solve real problems with user-first thinking.",
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
          <main className="flex-1 md:ml-[120px] lg:ml-80 ml-0 md:mr-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
