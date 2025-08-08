'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackToTopProps {
  showAfterScroll?: number; // Show button after scrolling this many pixels
}

export default function BackToTop({ showAfterScroll = 600 }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfterScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [showAfterScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="sm"
      className={`
        fixed bottom-8 right-8 z-50 
        h-12 w-12 rounded-full p-0 
        bg-gray-900 hover:bg-gray-800 
        text-white shadow-lg hover:shadow-xl
        transition-all duration-500 ease-in-out
        transform hover:scale-110 cursor-pointer
        border-2 border-gray-800 hover:border-gray-700
        ${isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }
      `}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
