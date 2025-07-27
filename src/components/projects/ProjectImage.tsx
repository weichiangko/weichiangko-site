import Image from "next/image";
import { cn } from "@/lib/utils";

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
  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
    full: "w-full",
  };

  const positionClasses = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  return (
    <figure className={cn("my-8", positionClasses[position])}>
      <div
        className={cn(
          "rounded-xl overflow-hidden bg-white shadow-sm",
          sizeClasses[size],
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-600 mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}