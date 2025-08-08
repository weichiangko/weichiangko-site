"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { X, Play } from "lucide-react";

interface ProjectVideoProps {
  src: string;
  caption?: string;
  className?: string;
  size?: "small" | "medium" | "large" | "full";
  position?: "left" | "center" | "right";
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function ProjectVideo({
  src,
  caption,
  className,
  size = "full",
  position = "center",
  autoPlay = true,
  loop = true,
  muted = true,
}: ProjectVideoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for future video controls
  // const [isPlaying, setIsPlaying] = useState(autoPlay);

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

  // Function for future play/pause functionality
  // const togglePlayPause = (videoElement: HTMLVideoElement) => {
  //   if (isPlaying) {
  //     videoElement.pause();
  //   } else {
  //     videoElement.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <>
      <figure className="my-8">
        <div className={cn("flex", positionClasses[position])}>
          <div
            className={cn(
              "rounded-xl overflow-hidden bg-white shadow-sm cursor-pointer transition-transform hover:scale-[1.02] relative group",
              sizeClasses[size],
              className
            )}
            onClick={openModal}
          >
            <video
              className="w-full h-auto object-cover"
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              playsInline
              style={{
                aspectRatio: '16/9',
                objectFit: 'cover'
              }}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play/Pause overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white/90 rounded-full p-3">
                <Play className="w-6 h-6 text-gray-800" />
              </div>
            </div>
          </div>
        </div>
        {caption && (
          <figcaption className="text-center text-sm text-gray-600 mt-3">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Video Preview Modal */}
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
            aria-label="Close video preview"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Video container */}
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] p-4 flex items-center justify-center">
            <video
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
              controls
              autoPlay
              loop={loop}
              muted={muted}
              playsInline
              onClick={(e) => e.stopPropagation()}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
