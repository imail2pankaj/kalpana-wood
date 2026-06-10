"use client";
import Image from "next/image";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLang();
  const stats = [
    { value: "15+",  label: t.statYears },
    { value: "2000+",label: t.statClients },
    { value: "50+",  label: t.statTypes },
    { value: "100%", label: t.statCustom },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wood_hero.png"
          alt="Kalpana Wood luxury furniture showroom"
          fill priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f08]/90 via-[#1a0f08]/75 to-[#1a0f08]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c97d20]/40 bg-[#c97d20]/10 backdrop-blur-sm mb-8 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#c97d20] animate-pulse" />
            <span className="text-[#e8bb6e] text-xs font-inter font-semibold tracking-[0.15em] uppercase">
              {t.heroBadge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-playfair font-bold text-white leading-[1.1] mb-6 animate-fadeInUp"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            {t.heroHeading1}{" "}
            <span className="shimmer-text italic">{t.heroHeading2}</span>
            <br />
            <span className="text-white">{t.heroHeading3}</span>
          </h1>

          {/* Sub-heading */}
          <p className="text-white/75 text-lg sm:text-xl font-inter font-light leading-relaxed mb-10 max-w-xl animate-fadeInUp delay-200">
            {t.heroSubhead}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fadeInUp delay-300">
            <a
              href="http://wa.me/9879254882?text=I%20want%20to%20make%20custom%20furniture"
              target="_blank" rel="noopener noreferrer"
              id="hero-whatsapp-cta"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-inter font-semibold text-white bg-gradient-to-r from-[#25d366] to-[#128c7e] shadow-lg shadow-green-900/40 hover:shadow-xl hover:shadow-green-700/50 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t.heroOrder}
            </a>

            <a
              href="#services"
              id="hero-services-cta"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-inter font-semibold text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              {t.heroExplore}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fadeInUp delay-400">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left glass rounded-xl p-4">
                <div className="font-playfair font-bold text-3xl text-[#e8bb6e] leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-xs font-inter font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fadeIn delay-600">
        <span className="text-white/40 text-xs font-inter tracking-widest uppercase">{t.scroll}</span>
        <ChevronDown className="w-6 h-6 text-[#c97d20] scroll-indicator" />
      </div>
    </section>
  );
}
