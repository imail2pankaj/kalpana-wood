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
  
  return {
    title: `Kalpana Wood – Premium Custom Furniture`,
    description: t.tagline,
    keywords: "custom furniture Morbi, wooden furniture Gujarat, handcrafted furniture, teak furniture, Kalpana Wood",
    openGraph: {
      title: "Kalpana Wood – Premium Custom Furniture",
      description: t.tagline,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'hi' }, { lang: 'gu' }];
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${playfair.variable} ${inter.variable} ${gujarati.variable} ${devanagari.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider lang={lang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
