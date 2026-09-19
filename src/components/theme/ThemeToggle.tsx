'use client';

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 hover:bg-accent-soft rounded-md transition-all duration-150 relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Moon 
          className={`w-5 h-5 absolute inset-0 transition-all duration-200 ${
            theme === 'light' 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-75'
          }`} 
        />
        <Sun 
          className={`w-5 h-5 absolute inset-0 transition-all duration-200 ${
            theme === 'dark' 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-75'
          }`} 
        />
      </div>
    </button>
  );
}
