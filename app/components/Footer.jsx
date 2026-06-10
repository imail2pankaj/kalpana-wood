import { Phone, MessageCircle, MapPin, TreePine } from "lucide-react";

const quickLinks = [
  ["Home",     "#home"],
  ["About",    "#about"],
  ["Services", "#services"],
  ["Gallery",  "#gallery"],
  ["Contact",  "#contact"],
];

const productList = [
  "Bedroom Sets", "Dining Tables", "Wardrobes",
  "Sofa Sets", "Wooden Doors", "Wood Articles",
];

const socials = [
  { id: "footer-phone-btn",    href: "tel:+919879254882",   icon: Phone,         label: "Call us",    external: false },
  { id: "footer-whatsapp-btn", href: "http://wa.me/9879254882?text=I%20want%20to%20make%20custom%20furniture", icon: MessageCircle, label: "WhatsApp", external: true },
  { id: "footer-maps-btn",     href: "https://maps.google.com/?q=Lati+Plot+Main+Rd,+Morbi,+Gujarat+363641", icon: MapPin, label: "Google Maps", external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0f08] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c97d20] to-[#8f4a16] flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-playfair font-bold text-white text-lg">Kalpana Wood</div>
                <div className="text-[10px] text-[#e8bb6e] font-inter font-medium tracking-[0.12em] uppercase">
                  Custom Furniture
                </div>
              </div>
            </div>
            <p className="text-white/50 font-inter text-sm leading-relaxed mb-5 max-w-xs">
              Premium handcrafted furniture and wood-working articles by{" "}
              <span className="text-[#e8bb6e]">Kalpesh M. Makwana</span> from
              Morbi, Gujarat. Every piece, built to last a lifetime.
            </p>
            <div className="flex gap-3">
              {socials.map(({ id, href, icon: Icon, label, external }) => (
                <a
                  key={id}
                  href={href}
                  id={id}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#e8bb6e] hover:border-[#c97d20]/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/50 font-inter text-sm hover:text-[#e8bb6e] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm mb-5">Our Products</h4>
            <ul className="space-y-3">
              {productList.map((item) => (
                <li key={item}>
                  <span className="text-white/50 font-inter text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 font-inter text-xs text-center">
            © {year} Kalpana Wood by Kalpesh M. Makwana. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-white/20 font-inter text-xs">Morbi, Gujarat, India</span>
            <span className="text-white/20">·</span>
            <span className="text-white/20 font-inter text-xs">363641</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
