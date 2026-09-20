'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import PresentModeToggle from '@/components/present/PresentModeToggle';
import { Suspense } from 'react';

export default function MinimalNav() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="glass glass-pill flex items-center gap-1 px-2 py-1.5 pointer-events-auto max-w-full">
        {/* Name */}
        <Link 
          href="/" 
          className="px-3 py-1.5 text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Ben Ko
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-0.5">
          <Link
            href="#work"
            className="px-3 py-1.5 text-[13px] font-medium text-fg-secondary hover:text-foreground transition-colors rounded-full hover:bg-[var(--glass-bg)]"
          >
            Work
          </Link>
          <Link
            href="#process"
            className="px-3 py-1.5 text-[13px] font-medium text-fg-secondary hover:text-foreground transition-colors rounded-full hover:bg-[var(--glass-bg)]"
          >
            Process
          </Link>
          <Link
            href="#webmcp"
            className="px-3 py-1.5 text-[13px] font-medium text-fg-secondary hover:text-foreground transition-colors rounded-full hover:bg-[var(--glass-bg)]"
          >
            WebMCP
          </Link>
          <Link
            href="#contact"
            className="px-3 py-1.5 text-[13px] font-medium text-fg-secondary hover:text-foreground transition-colors rounded-full hover:bg-[var(--glass-bg)]"
          >
            Contact
          </Link>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 ml-2 pl-2 border-l border-hairline">
          <ThemeToggle />
          <Suspense fallback={<div className="w-9 h-9" />}>
            <PresentModeToggle />
          </Suspense>
        </div>
      </nav>
    </div>
  );
}
