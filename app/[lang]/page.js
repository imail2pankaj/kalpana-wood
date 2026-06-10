import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyUsSection from "../components/WhyUsSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ScrollReveal from "../components/ScrollReveal";
import { translations } from "../../lib/translations";

export default async function Home({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t.faqs.timeline.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faqs.timeline.a,
        },
      },
      {
        "@type": "Question",
        name: t.faqs.wood.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faqs.wood.a,
        },
      },
      {
        "@type": "Question",
        name: t.faqs.installation.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faqs.installation.a,
        },
      },
      {
        "@type": "Question",
        name: t.faqs.outside.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faqs.outside.a,
        },
      },
      {
        "@type": "Question",
        name: t.faqs.custom.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.faqs.custom.a,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollReveal />
    </>
  );
}
