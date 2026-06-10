"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function FAQSection() {
  const { t } = useLang();
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));
  
  const faqs = [
    {
      id: "timeline",
      question: t.faqs.timeline.q,
      answer: t.faqs.timeline.a,
    },
    {
      id: "wood-types",
      question: t.faqs.wood.q,
      answer: t.faqs.wood.a,
    },
    {
      id: "installation",
      question: t.faqs.installation.q,
      answer: t.faqs.installation.a,
    },
    {
      id: "outside-morbi",
      question: t.faqs.outside.q,
      answer: t.faqs.outside.a,
    },
    {
      id: "custom-design",
      question: t.faqs.custom.q,
      answer: t.faqs.custom.a,
    },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="wood-divider" />
            <span className="text-[#c97d20] text-xs font-inter font-semibold tracking-[0.18em] uppercase">
              {t.faqLabel}
            </span>
            <div className="wood-divider" />
          </div>
          <h2
            className="font-playfair font-bold text-[#351706] mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            {t.faqHeading1}{" "}
            <span className="text-[#c97d20] italic">{t.faqHeading2}</span>
          </h2>
          <p className="text-[#5e3115]/70 font-inter max-w-xl mx-auto leading-relaxed">
            {t.faqSub}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 reveal">
          {faqs.map(({ id, question, answer }) => {
            const isOpen = openId === id;
            return (
              <div
                key={id}
                id={`faq-${id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#c97d20]/50 shadow-lg shadow-amber-900/10"
                    : "border-[#e8bb6e]/30 shadow-sm hover:border-[#c97d20]/30"
                }`}
              >
                <button
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${id}`}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left bg-[#fdf8f0] hover:bg-[#fdf3e3] transition-colors duration-200"
                >
                  <span className="font-playfair font-semibold text-[#351706] text-base sm:text-lg leading-snug">
                    {question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#c97d20] text-white rotate-0"
                        : "bg-[#c97d20]/10 text-[#c97d20]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${id}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-inter text-[#5e3115]/75 leading-relaxed px-7 py-5 border-t border-[#e8bb6e]/30 bg-white text-sm sm:text-base">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA nudge */}
        <div className="mt-14 text-center reveal">
          <p className="font-inter text-[#5e3115]/60 text-sm">
            {t.faqCta}{" "}
            <a
              href="#contact"
              className="text-[#c97d20] font-semibold hover:underline underline-offset-2 transition-colors"
            >
              {t.faqCtaLink}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
