"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { X } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  size?: "small" | "medium" | "large" | "full";
  position?: "left" | "center" | "right";
}

export default function ProjectImage({
  src,
  alt,
  caption,
  className,
  size = "full",
  position = "center",
}: ProjectImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
    full: "w-full",
  };

  const positionClasses = {
    left: "justify-start",
    center: "justify-center", 
    right: "justify-end",
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <figure className="my-8">
        <div className={cn("flex", positionClasses[position])}>
          <div
            className={cn(
              "rounded-xl overflow-hidden bg-white shadow-sm cursor-pointer transition-transform hover:scale-[1.02]",
              sizeClasses[size],
              className
            )}
            onClick={openModal}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {caption && (
          <figcaption className="text-center text-sm text-gray-600 mt-3">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Image Preview Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/80 flex items-center justify-center z-[9999]"
          onClick={closeModal}
          style={{ position: 'fixed', inset: 0 }}
        >
          {/* Close button positioned relative to viewport */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-sm cursor-pointer"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Image container */}
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] p-4 flex items-center justify-center">
            <Image
              src={src}
              alt={alt}
              width={2400}
              height={1350}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}