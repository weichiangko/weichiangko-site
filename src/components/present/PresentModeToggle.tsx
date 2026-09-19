'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSiteStore } from '@/lib/siteStore';
import { LayoutGrid, Presentation } from 'lucide-react';

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
    
    // Update URL
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
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors shadow-lg"
      aria-label={mode === 'public' ? 'Switch to present mode' : 'Switch to public mode'}
    >
      {mode === 'public' ? (
        <>
          <Presentation className="w-4 h-4" />
          <span className="hidden sm:inline">Present</span>
        </>
      ) : (
        <>
          <LayoutGrid className="w-4 h-4" />
          <span className="hidden sm:inline">Public</span>
        </>
      )}
    </button>
  );
}
