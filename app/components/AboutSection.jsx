import Image from "next/image";
import { CheckCircle2, Layers, MapPin, Hammer, ArrowRight } from "lucide-react";

const highlights = [
  { icon: CheckCircle2, text: "100% custom-built to your exact specifications" },
  { icon: Layers,       text: "Premium teak, sheesham & hardwood materials" },
  { icon: MapPin,       text: "Serving Morbi & all of Gujarat since 2008" },
  { icon: Hammer,       text: "Expert craftsmanship with lifetime durability" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#fdf8f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/20 aspect-[4/3]">
              <Image
                src="/about_workshop.png"
                alt="Kalpana Wood workshop — Kalpesh M. Makwana's craftsmanship studio in Morbi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#351706]/50 to-transparent" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-4 bg-gradient-to-br from-[#c97d20] to-[#8f4a16] rounded-2xl p-5 shadow-xl shadow-amber-900/30 text-white">
              <div className="font-playfair font-bold text-4xl leading-none">15+</div>
              <div className="text-xs font-inter font-medium text-amber-200 mt-1 uppercase tracking-wide">
                Years of<br />Craftsmanship
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-[#e8bb6e]/30 hidden lg:block" />
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-[#c97d20]/20 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="reveal-right">
            <div className="flex items-center gap-3 mb-5">
              <div className="wood-divider" />
              <span className="text-[#c97d20] text-xs font-inter font-semibold tracking-[0.18em] uppercase">
                Our Story
              </span>
            </div>

            <h2
              className="font-playfair font-bold text-[#351706] leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
            >
              Meet{" "}
              <span className="text-[#c97d20] italic">Kalpesh M. Makwana</span>
              <br />& Kalpana Wood
            </h2>

            <p className="text-[#5e3115]/80 font-inter text-lg leading-relaxed mb-4">
              Founded with a deep love for wood and craftsmanship, Kalpana Wood
              has been delivering premium, custom-built furniture from the heart
              of Morbi, Gujarat for over 15 years.
            </p>
            <p className="text-[#5e3115]/70 font-inter leading-relaxed mb-8">
              Every piece we create is a testament to traditional Indian
              woodworking heritage fused with modern design sensibilities.
              From intricate wood-working articles to complete home furniture
              solutions — we build what you imagine.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#c97d20]/10 text-[#c97d20] flex items-center justify-center mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[#5e3115]/80 font-inter text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <a
              href="http://wa.me/9879254882?text=I%20want%20to%20make%20custom%20furniture"
              target="_blank" rel="noopener noreferrer"
              id="about-whatsapp-cta"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#c97d20] to-[#8f4a16] text-white font-inter font-semibold shadow-lg shadow-amber-900/30 hover:shadow-xl hover:shadow-amber-800/40 hover:scale-105 transition-all duration-300"
            >
              Talk to Kalpesh
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
