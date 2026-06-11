import { Playfair_Display, Inter, Noto_Sans_Gujarati, Noto_Sans_Devanagari } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { translations } from "../../lib/translations";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const gujarati = Noto_Sans_Gujarati({
  variable: "--font-gujarati",
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});


export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;
  
  const siteUrl = "https://kalpana-wood.vercel.app"; // Default site URL

  return {
    title: `Kalpana Wood – Premium Custom Furniture`,
    description: t.tagline,
    keywords: "custom furniture Morbi, wooden furniture Gujarat, handcrafted furniture, teak furniture, Kalpana Wood",
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
    openGraph: {
      title: "Kalpana Wood – Premium Custom Furniture",
      description: t.tagline,
      url: siteUrl,
      siteName: "Kalpana Wood",
      images: [
        {
          url: "/gallery/1.jpg",
          width: 1200,
          height: 630,
          alt: "Kalpana Wood Custom Furniture",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Kalpana Wood – Premium Custom Furniture",
      description: t.tagline,
      images: ["/gallery/1.jpg"],
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'hi' }, { lang: 'gu' }];
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kalpana Wood",
    image: "https://kalpana-wood.vercel.app/logo.png",
    "@id": "https://kalpana-wood.vercel.app",
    url: "https://kalpana-wood.vercel.app",
    telephone: "+919879254882",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Between Street 4–5, Lati Plot Main Rd",
      addressLocality: "Morbi",
      addressRegion: "Gujarat",
      postalCode: "363641",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.812,
      longitude: 70.823
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00"
      }
    ]
  };

  return (
    <html
      lang={lang}
      className={`${playfair.variable} ${inter.variable} ${gujarati.variable} ${devanagari.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider lang={lang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
