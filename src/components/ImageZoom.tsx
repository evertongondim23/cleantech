import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ImageZoomProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function ImageZoom({ images, currentIndex, isOpen, onClose, productName }: ImageZoomProps) {
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Main Image */}
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        <ImageWithFallback
          src={images[selectedIndex]}
          alt={`${productName} - Imagem ${selectedIndex + 1}`}
          className="w-full h-full object-contain"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelectedIndex(prev => prev > 0 ? prev - 1 : images.length - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-white text-xl">‹</span>
            </button>
            
            <button
              onClick={() => setSelectedIndex(prev => prev < images.length - 1 ? prev + 1 : 0)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-white text-xl">›</span>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                selectedIndex === index
                  ? "border-white"
                  : "border-white/30 hover:border-white/60"
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`${productName} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}