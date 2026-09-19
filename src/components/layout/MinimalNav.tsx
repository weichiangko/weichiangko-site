'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import PresentModeToggle from '@/components/present/PresentModeToggle';
import { Suspense } from 'react';

export default function MinimalNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Name */}
        <Link href="/" className="text-lg font-semibold hover:text-fg-muted transition-colors">
          Ben Ko
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#work"
            className="text-sm hover:text-foreground transition-colors text-fg-muted"
          >
            Work
          </Link>
          <Link
            href="#process"
            className="text-sm hover:text-foreground transition-colors text-fg-muted"
          >
            Process
          </Link>
          <Link
            href="#webmcp"
            className="text-sm hover:text-foreground transition-colors text-fg-muted"
          >
            WebMCP
          </Link>
          <Link
            href="#contact"
            className="text-sm hover:text-foreground transition-colors text-fg-muted"
          >
            Contact
          </Link>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Suspense fallback={<div className="w-9 h-9" />}>
            <PresentModeToggle />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
