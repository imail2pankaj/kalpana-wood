"use client";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function LightboxGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Using the images provided by the user. 
  // We assume they will be saved as 1.webp through 10.webp in public/gallery/
  const images = [
    { src: "/gallery/1.webp", alt: "Bedroom interior" },
    { src: "/gallery/2.webp", alt: "Bedroom wall decor" },
    { src: "/gallery/3.webp", alt: "Bathroom vanity" },
    { src: "/gallery/4.webp", alt: "Study desk and mirror" },
    { src: "/gallery/5.webp", alt: "Custom bed frame with wooden backdrop" },
    { src: "/gallery/6.webp", alt: "Wooden wardrobe with carved lines" },
    { src: "/gallery/7.webp", alt: "Wardrobe with teal accent panels" },
    { src: "/gallery/8.webp", alt: "Wardrobe with artistic leaf patterns" },
    { src: "/gallery/9.webp", alt: "Upholstered bed with grid wall paneling" },
    { src: "/gallery/10.webp", alt: "Modern four-poster canopy bed" },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when open
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLightbox, goToNext, goToPrev]);

  return (
    <div className="w-full">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="group relative overflow-hidden rounded-2xl bg-[#1a0f08] cursor-pointer aspect-[3/4] sm:aspect-square"
            onClick={() => openLightbox(i)}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#c97d20]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 shadow-lg">
              <ZoomIn className="w-5 h-5 text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0604]/95 backdrop-blur-md">
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white hover:bg-white/10 transition-colors z-50 bg-black/20 p-2 md:p-3 rounded-full"
            aria-label="Close"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Prev Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-2 md:left-6 text-white/70 hover:text-white hover:bg-white/10 transition-colors z-50 bg-black/20 p-3 md:p-4 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Next Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-2 md:right-6 text-white/70 hover:text-white hover:bg-white/10 transition-colors z-50 bg-black/20 p-3 md:p-4 rounded-full"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 font-inter tracking-widest text-sm bg-black/40 px-5 py-2 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
