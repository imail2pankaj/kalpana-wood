import { Playfair_Display, Inter, Noto_Sans_Gujarati, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

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


export const metadata = {
  title: "Kalpana Wood – Premium Custom Furniture in Morbi, Gujarat",
  description:
    "Kalpana Wood crafts premium custom wooden furniture in Morbi, Gujarat. Handcrafted beds, wardrobes, dining sets, and more. Contact us on +91 9879254882 or WhatsApp to bring your vision to life.",
  keywords:
    "custom furniture Morbi, wooden furniture Gujarat, handcrafted furniture, teak furniture, Kalpana Wood",
  openGraph: {
    title: "Kalpana Wood – Premium Custom Furniture",
    description:
      "Handcrafted custom wooden furniture from Morbi, Gujarat. Quality craftsmanship, timeless designs.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${gujarati.variable} ${devanagari.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
