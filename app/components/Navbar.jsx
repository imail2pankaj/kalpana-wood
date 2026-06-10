"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, TreePine } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeSection, setActive]  = useState("home");
  const { t } = useLang();

  const navLinks = [
    { label: t.navHome,    href: "#home" },
    { label: t.navAbout,   href: "#about" },
    { label: t.navServices,href: "#services" },
    { label: t.navWhyUs,  href: "#why-us" },
    { label: t.navGallery, href: "#gallery" },
    { label: t.navContact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (e, href) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a0f08]/95 backdrop-blur-md shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <a href="#home" onClick={(e) => scroll(e, "#home")} id="nav-logo"
            className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c97d20] to-[#8f4a16] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <TreePine className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-playfair font-bold text-white text-lg sm:text-xl leading-tight">
                Kalpana Wood
              </div>
              <div className="text-[10px] text-[#e8bb6e] font-inter font-medium tracking-[0.12em] uppercase leading-none">
                Custom Furniture
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scroll(e, link.href)}
                id={`nav-${link.label.toLowerCase().replace(" ", "-")}`}
                className={`nav-link px-4 py-2 text-sm font-inter font-medium transition-colors duration-200 rounded-lg ${
                  activeSection === link.href.slice(1)
                    ? "text-[#e8bb6e] active"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            <a
              href="http://wa.me/9879254882?text=I%20want%20to%20make%20custom%20furniture"
              target="_blank" rel="noopener noreferrer"
              id="nav-whatsapp-cta"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-inter font-semibold text-white bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:shadow-lg hover:shadow-green-500/30 transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              {t.navWhatsapp}
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              id="nav-hamburger"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <X className="w-5 h-5 text-white" />
                : <Menu className="w-5 h-5 text-white" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="bg-[#1a0f08]/98 backdrop-blur-md border-t border-white/10 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scroll(e, link.href)}
              className={`block px-4 py-3 text-sm font-inter font-medium rounded-lg mb-1 transition-colors ${
                activeSection === link.href.slice(1)
                  ? "bg-[#c97d20]/20 text-[#e8bb6e]"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 mb-2">
            <LanguageSwitcher isMobile={true} />
          </div>
          <a
            href="http://wa.me/9879254882?text=I%20want%20to%20make%20custom%20furniture"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#25d366] to-[#128c7e]"
          >
            <MessageCircle className="w-4 h-4" />
            {t.navChatWhatsapp}
          </a>
        </div>
      </div>
    </header>
  );
}
