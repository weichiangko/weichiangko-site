"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  words: string[];
  className?: string;
  duration?: number;
}

export default function RotatingText({ 
  words, 
  className = "", 
  duration = 2500 
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 whitespace-nowrap"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible text to maintain layout space */}
      <span className="invisible whitespace-nowrap">
        {words.reduce((longest, word) => 
          word.length > longest.length ? word : longest, ""
        )}
      </span>
    </span>
  );
}