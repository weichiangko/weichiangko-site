'use client';

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[var(--glass-bg)] transition-all duration-180 active:scale-95"
      aria-label="Toggle theme"
    >
      <div className="relative w-4 h-4">
        <Moon 
          className={`w-4 h-4 absolute inset-0 transition-all duration-200 ${
            theme === 'light' 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-75'
          }`} 
          strokeWidth={1.75}
        />
        <Sun 
          className={`w-4 h-4 absolute inset-0 transition-all duration-200 ${
            theme === 'dark' 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-75'
          }`} 
          strokeWidth={1.75}
        />
      </div>
    </button>
  );
}
