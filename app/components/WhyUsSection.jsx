"use client";
import { Sparkles, Layers, CircleDollarSign, Clock, Award, MapPin, Star } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function WhyUsSection() {
  const { t } = useLang();
  
  const reasons = [
    {
      id: "custom-design",
      icon: Sparkles,
      title: t.whyReasons.custom.title,
      description: t.whyReasons.custom.desc,
    },
    {
      id: "premium-wood",
      icon: Layers,
      title: t.whyReasons.wood.title,
      description: t.whyReasons.wood.desc,
    },
    {
      id: "fair-pricing",
      icon: CircleDollarSign,
      title: t.whyReasons.price.title,
      description: t.whyReasons.price.desc,
    },
    {
      id: "timely-delivery",
      icon: Clock,
      title: t.whyReasons.delivery.title,
      description: t.whyReasons.delivery.desc,
    },
    {
      id: "experienced-craftsmen",
      icon: Award,
      title: t.whyReasons.craftsmen.title,
      description: t.whyReasons.craftsmen.desc,
    },
    {
      id: "local-trust",
      icon: MapPin,
      title: t.whyReasons.trust.title,
      description: t.whyReasons.trust.desc,
    },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#fdf8f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="wood-divider" />
            <span className="text-[#c97d20] text-xs font-inter font-semibold tracking-[0.18em] uppercase">
              {t.whyLabel}
            </span>
            <div className="wood-divider" />
          </div>
          <h2
            className="font-playfair font-bold text-[#351706] mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            {t.whyHeading1}{" "}
            <span className="text-[#c97d20] italic">{t.whyHeading2}</span>
          </h2>
          <p className="text-[#5e3115]/70 font-inter max-w-2xl mx-auto leading-relaxed">
            {t.whySub}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              id={`why-${id}`}
              className="reveal group bg-white rounded-2xl p-7 border border-[#e8bb6e]/20 shadow-sm hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c97d20]/15 to-[#c97d20]/5 text-[#c97d20] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-playfair font-semibold text-[#351706] text-lg mb-3">{title}</h3>
              <p className="text-[#5e3115]/65 font-inter text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 reveal bg-gradient-to-r from-[#351706] via-[#5e3115] to-[#351706] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #c97d20 0%, transparent 50%), radial-gradient(circle at 80% 50%, #e8bb6e 0%, transparent 50%)",
            }}
          />

          {/* Large decorative quote */}
          <div className="text-[#c97d20]/40 text-[6rem] font-playfair leading-none mb-2 relative z-10 select-none">
            &ldquo;
          </div>

          <p className="font-playfair italic text-white text-xl sm:text-2xl leading-relaxed mb-6 relative z-10 max-w-3xl mx-auto -mt-10">
            {t.testiQuote}
          </p>

          <div className="flex items-center justify-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-[#c97d20] flex items-center justify-center font-playfair font-bold text-white">
              R
            </div>
            <div className="text-left">
              <div className="text-[#e8bb6e] font-inter font-semibold text-sm">{t.testiName}</div>
              <div className="text-white/50 font-inter text-xs">{t.testiDesc}</div>
            </div>
            <div className="flex gap-1 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#e8bb6e] fill-[#e8bb6e]" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
