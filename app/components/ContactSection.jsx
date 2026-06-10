"use client";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLang();
  
  const contactDetails = [
    {
      id: "phone",
      icon: Phone,
      label: t.contactPhone,
      value: t.contactPhoneVal,
      href: "tel:+919879254882",
      action: t.contactPhoneAction,
      color: "from-[#c97d20] to-[#8f4a16]",
      external: false,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: t.contactWa,
      value: t.contactWaVal,
      href: "http://wa.me/9879254882?text=I%20want%20to%20make%20custom%20furniture",
      action: t.contactWaAction,
      color: "from-[#25d366] to-[#128c7e]",
      external: true,
    },
    {
      id: "address",
      icon: MapPin,
      label: t.contactMap,
      value: t.contactMapVal,
      href: "https://maps.google.com/?q=Street+4-5,+Lati+Plot+Main+Rd,+Morbi,+Gujarat+363641",
      action: t.contactMapAction,
      color: "from-[#743b16] to-[#351706]",
      external: true,
    },
  ];

  const hours = [
    { day: t.hoursD1, time: t.hoursT1 },
    { day: t.hoursD2, time: t.hoursT2 },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#fdf8f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="wood-divider" />
            <span className="text-[#c97d20] text-xs font-inter font-semibold tracking-[0.18em] uppercase">
              {t.contactLabel}
            </span>
            <div className="wood-divider" />
          </div>
          <h2
            className="font-playfair font-bold text-[#351706] mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            {t.contactHeading1}{" "}
            <span className="text-[#c97d20] italic">{t.contactHeading2}</span>
          </h2>
          <p className="text-[#5e3115]/70 font-inter max-w-xl mx-auto">
            {t.contactSub}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact cards */}
          <div className="space-y-5 reveal-left">
            {contactDetails.map(({ id, icon: Icon, label, value, href, action, color, external }) => (
              <div
                key={id}
                id={`contact-${id}`}
                className="bg-white rounded-2xl p-6 border border-[#e8bb6e]/20 shadow-sm hover:shadow-lg hover:shadow-amber-900/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-5">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[#5e3115]/50 font-inter text-xs font-semibold uppercase tracking-wider mb-1">
                      {label}
                    </div>
                    <div className="text-[#351706] font-inter font-semibold text-sm sm:text-base truncate">
                      {value}
                    </div>
                  </div>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`flex-shrink-0 px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white text-xs font-inter font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 whitespace-nowrap`}
                  >
                    {action}
                  </a>
                </div>
              </div>
            ))}

            {/* Business hours */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8bb6e]/20 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c97d20]/10 text-[#c97d20] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-playfair font-semibold text-[#351706] text-base">
                  {t.hoursHeading}
                </h3>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-[#5e3115]/70 font-inter text-sm">{h.day}</span>
                    <span className="text-[#351706] font-inter font-semibold text-sm">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-700 font-inter text-xs font-medium">
                  {t.openNow}
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/20 h-80 lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.246!2d70.8371!3d22.8175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ5JzAzLjAiTiA3MMKwNTAnMTMuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kalpana Wood location — Lati Plot Main Rd, Morbi, Gujarat"
              />
            </div>

            <div className="mt-4 bg-gradient-to-r from-[#351706] to-[#5e3115] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#c97d20]/30 flex-shrink-0 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#e8bb6e]" />
              </div>
              <div className="flex-1">
                <div className="text-white font-inter font-semibold text-sm">{t.mapWorkshop}</div>
                <div className="text-white/60 font-inter text-xs mt-0.5">
                  {t.mapAddress}
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Lati+Plot+Main+Rd,+Morbi,+Gujarat+363641"
                target="_blank" rel="noopener noreferrer"
                id="contact-directions-btn"
                className="flex-shrink-0 px-4 py-2 rounded-full bg-[#c97d20] text-white text-xs font-inter font-semibold hover:bg-[#e8bb6e] hover:text-[#351706] transition-colors"
              >
                {t.directions}
                <ArrowRight className="w-3 h-3 inline ml-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
