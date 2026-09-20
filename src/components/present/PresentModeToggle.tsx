'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSiteStore } from '@/lib/siteStore';
import { Presentation } from 'lucide-react';

export default function PresentModeToggle() {
  const searchParams = useSearchParams();
  const { mode, setMode } = useSiteStore();

  useEffect(() => {
    const modeParam = searchParams.get('mode');
    if (modeParam === 'present' && mode !== 'present') {
      setMode('present');
    }
  }, [searchParams, mode, setMode]);

  const toggleMode = () => {
    const newMode = mode === 'public' ? 'present' : 'public';
    setMode(newMode);
    
    const url = new URL(window.location.href);
    if (newMode === 'present') {
      url.searchParams.set('mode', 'present');
    } else {
      url.searchParams.delete('mode');
    }
    window.history.pushState({}, '', url.toString());
  };

  return (
    <button
      onClick={toggleMode}
      className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[var(--glass-bg)] transition-all duration-180 active:scale-95 relative"
      aria-label={mode === 'public' ? 'Switch to present mode' : 'Exit present mode'}
    >
      <Presentation className="w-4 h-4" strokeWidth={1.75} />
      {mode === 'present' && (
        <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-accent rounded-full" />
      )}
    </button>
  );
}
