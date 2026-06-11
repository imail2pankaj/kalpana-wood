import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import LightboxGallery from "../../components/LightboxGallery";
import { translations } from "../../../lib/translations";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;
  
  return {
    title: `${t.galleryLabel || "Gallery"} | Kalpana Wood`,
    description: t.gallerySub || "Explore our latest projects in detail.",
  };
}

export default async function GalleryPage({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[#2c1a0e] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="wood-divider" />
              <span className="text-[#c97d20] text-xs font-inter font-semibold tracking-[0.18em] uppercase">
                {t.galleryLabel || "Our Work"}
              </span>
              <div className="wood-divider" />
            </div>
            <h1
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
            >
              {t.galleryHeading1 || "Crafted With"}{" "}
              <span className="shimmer-text italic">{t.galleryHeading2 || "Passion"}</span>
            </h1>
            <p className="text-white/55 font-inter max-w-xl mx-auto mb-10">
              Explore our latest projects in detail. Click on any image to view it in full size.
            </p>
          </div>

          {/* Lightbox Component */}
          <LightboxGallery />
          
          {/* Back Home CTA */}
          <div className="mt-16 text-center">
            <a 
              href={`/${lang}`}
              className="inline-flex items-center gap-2 text-[#e8bb6e] hover:text-white font-inter text-sm transition-colors border-b border-[#c97d20]/50 hover:border-[#c97d20] pb-1"
            >
              &larr; Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
