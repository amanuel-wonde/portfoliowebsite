"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

interface ImageModalProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}

export function ImageModal({
  src,
  alt,
  children,
  className = "",
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className={`relative group cursor-pointer ${className}`}>
          {children}
          {/* Overlay with zoom icon */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white/90 dark:bg-black/90 rounded-full p-2">
              <ZoomIn className="h-5 w-5 text-gray-800 dark:text-gray-200" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full h-full max-h-[90vh] p-0 bg-transparent border-none">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Full-size image */}
          <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Clickable Image Component for simple use cases
interface ClickableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

export function ClickableImage({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  priority = false,
}: ClickableImageProps) {
  return (
    <ImageModal src={src} alt={alt}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={className}
        priority={priority}
      />
    </ImageModal>
  );
}
