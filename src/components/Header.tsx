import React, { useState, useEffect } from "react";
import NgoLogo from "./NgoLogo";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", labelHindi: "होम", labelEn: "Home" },
    { id: "about", labelHindi: "हमारे बारे में", labelEn: "About Us" },
    { id: "pillars", labelHindi: "हमारे स्तंभ", labelEn: "Our Pillars" },
    { id: "campaigns", labelHindi: "अभियान", labelEn: "Campaigns" },
    { id: "news", labelHindi: "समाचार", labelEn: "News" },
    { id: "join", labelHindi: "जुड़ें", labelEn: "Join Us" },
    { id: "donate", labelHindi: "सहयोग करें", labelEn: "Donate" },
    { id: "contact", labelHindi: "संपर्क करें", labelEn: "Contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#efe7d6] shadow-md py-1 border-b border-ngo-forest/20"
          : "bg-[#f5f1e8]/95 backdrop-blur-sm py-2 border-b border-zinc-250"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo & Brand Details */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-ngo-forest rounded-lg p-1">
            <NgoLogo className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-hindi text-lg sm:text-2xl font-bold text-ngo-dark tracking-wide leading-none">
                पश्चिमांचल विकास परिषद <span className="text-sm font-semibold text-ngo-forest">(भारत)</span>
              </span>
              <span className="text-xs sm:text-sm text-ngo-forest flex items-center gap-1 font-hindi opacity-90 mt-1">
                🪴 प्रकृति से संस्कृति की ओर 🪴
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3 py-2 text-sm font-hindi font-semibold rounded-lg transition-all duration-200 outline-none
                    ${
                      isActive
                        ? "bg-ngo-dark text-[#f5f1e8] shadow-inner"
                        : "text-stone-800 hover:text-ngo-forest hover:bg-ngo-beige"
                    }
                    focus:ring-2 focus:ring-ngo-forest
                  `}
                >
                  <div className="flex flex-col items-center">
                    <span>{item.labelHindi}</span>
                    <span className="text-[10px] font-sans opacity-70 leading-none tracking-tight font-normal uppercase">
                      {item.labelEn}
                    </span>
                  </div>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-800 hover:text-ngo-forest hover:bg-ngo-beige focus:outline-none focus:ring-2 focus:ring-ngo-forest"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`h-6 w-6 transition-transform ${isMenuOpen ? "rotate-90 hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`h-6 w-6 transition-transform ${isMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100 border-t border-stone-200" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-[#efe7d6] shadow-inner font-hindi text-base">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-md text-base font-semibold border-l-4 transition-all duration-200
                  ${
                    isActive
                      ? "bg-ngo-dark/10 border-ngo-dark text-ngo-dark"
                      : "border-transparent text-stone-800 hover:bg-ngo-beige hover:text-ngo-forest"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.labelHindi}</span>
                  <span className="text-xs font-sans font-normal opacity-70 uppercase">
                    {item.labelEn}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
