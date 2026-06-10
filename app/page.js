import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyUsSection from "./components/WhyUsSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollReveal from "./components/ScrollReveal";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does custom furniture take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery time depends on the complexity and size of the piece. Most custom furniture is ready within 15–25 working days. Larger projects such as complete bedroom sets or modular wardrobes may take up to 35 days. We give you a clear timeline before work begins and keep you updated throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Which wood do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with premium hardwoods selected for durability and natural beauty — including Teak (Sagwan), Sheesham (Indian Rosewood), Mango Wood, and Plywood with veneer finishes. During your consultation we help you choose the right wood based on your budget, usage, and aesthetic preference.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. Installation is included with every order. Our trained team handles delivery and full in-home installation so you don't have to worry about a thing. We make sure every piece is perfectly fitted and level before we leave.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work outside Morbi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we serve clients across Gujarat including Rajkot, Ahmedabad, Jamnagar, Bhavnagar, and surrounding areas. For locations outside Morbi, transportation charges may apply. Contact us to confirm availability and logistics for your area.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a custom design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely — custom design is what we specialise in. Share your idea, a reference image, or just describe what you have in mind. Our team will work with you to create detailed drawings and a precise quote. Every piece we build is made to your exact dimensions and style.",
      },
    },
  ],
};

export default function Home() {
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
