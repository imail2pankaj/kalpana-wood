"use client";
import { ZoomIn, MessageCircle, ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function GallerySection() {
  const { t } = useLang();
  
  const galleryItems = [
    { base: "product_bedroom",       alt: "Custom bedroom furniture set",     label: t.galleryItems.bedroom,   tall: true },
    { base: "product_dining",        alt: "Handcrafted teak dining table",    label: t.galleryItems.dining },
    { base: "wood_hero",             alt: "Kalpana Wood showroom interior",   label: t.galleryItems.showroom },
    { base: "product_wardrobe",      alt: "Custom wooden wardrobe almirah",   label: t.galleryItems.wardrobe },
    { base: "about_workshop",        alt: "Woodworking craftsmanship workshop",label: t.galleryItems.workshop },
    { base: "product_sofa",          alt: "Handcrafted wooden sofa set",      label: t.galleryItems.sofa },
    { base: "product_door",          alt: "Ornate carved solid wood door",    label: t.galleryItems.door },
    { base: "furniture_collection",  alt: "Complete furniture collection",    label: t.galleryItems.collection },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#2c1a0e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="wood-divider" />
            <span className="text-[#c97d20] text-xs font-inter font-semibold tracking-[0.18em] uppercase">
              {t.galleryLabel}
            </span>
            <div className="wood-divider" />
          </div>
          <h2
            className="font-playfair font-bold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            {t.galleryHeading1}{" "}
            <span className="shimmer-text italic">{t.galleryHeading2}</span>
          </h2>
          <p className="text-white/55 font-inter max-w-xl mx-auto">
            {t.gallerySub}
          </p>
        </div>

        {/* Gallery grid — <picture> with avif + webp + png fallback */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.base}
              id={`gallery-item-${i + 1}`}
              className={`reveal group relative overflow-hidden rounded-2xl bg-[#1a0f08] cursor-pointer ${
                i === 0 ? "row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "3/4" : "4/3" }}
            >
              {/* Normal image with avif → webp → png fallback */}
              <picture className="gallery-picture absolute inset-0">
                <source srcSet={`/${item.base}.avif`} type="image/avif" />
                <source srcSet={`/${item.base}.webp`} type="image/webp" />
                <img
                  src={`/${item.base}.png`}
                  alt={item.alt}
                  className="transition-transform duration-500 group-hover:scale-110"
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  width={600}
                  height={i === 0 ? 800 : 450}
                />
              </picture>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-inter font-semibold text-sm">{item.label}</span>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#c97d20]/0 group-hover:bg-[#c97d20]/80 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 reveal">
          <p className="text-white/50 font-inter text-sm mb-5">
            {t.galleryCtaText}
          </p>
          <a
            href="http://wa.me/9879254882?text=I%20want%20to%20make%20custom%20furniture"
            target="_blank" rel="noopener noreferrer"
            id="gallery-whatsapp-cta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#c97d20] text-[#e8bb6e] font-inter font-semibold hover:bg-[#c97d20] hover:text-white transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            {t.galleryCtaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
