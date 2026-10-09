import React, { useState } from "react";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { RESTAURANT_INFO, getWhatsAppUrl } from "../data/restaurantData";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const primaryNav = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "pizza", label: "Pizza" },
    { id: "pasta", label: "Pasta" },
    { id: "specialties", label: "Specialties" },
    { id: "reviews", label: "Reviews" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const moreNav = [
    { id: "cafe-experience", label: "Cafe & Experience" },
    { id: "our-food", label: "Our Food" },
    { id: "why-18-hours", label: "Why 18 Hours" },
    { id: "faq", label: "FAQ" },
    { id: "visit-us", label: "Visit Us" },
    { id: "order", label: "Order / Inquiry" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#121316]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <button
            onClick={() => handleNavClick("home")}
            className="text-left group flex items-center gap-2 cursor-pointer focus:outline-none"
            aria-label="18 Hours Pizza and Cafe Homepage"
          >
            <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white group-hover:text-[#F59E0B] transition-colors">
              18<span className="text-[#E11D48]">HOURS</span>
            </span>
            <span className="text-xs uppercase tracking-widest text-[#FAF8F5]/60 hidden sm:inline-block border-l border-white/20 pl-2">
              Pizza & Cafe
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryNav.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-sm font-medium tracking-wide transition-colors whitespace-nowrap cursor-pointer rounded-md ${
                    isActive
                      ? "text-[#F59E0B] font-semibold"
                      : "text-[#FAF8F5]/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-[#FAF8F5]/80 hover:text-white transition-colors cursor-pointer rounded-md"
                aria-expanded={moreDropdownOpen}
              >
                <span>More</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#1A1B20] border border-white/15 rounded-lg shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {moreNav.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer ${
                        currentPage === item.id
                          ? "bg-white/10 text-[#F59E0B] font-medium"
                          : "text-[#FAF8F5]/80 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition-colors whitespace-nowrap"
              aria-label="Call 18 Hours Pizza and Cafe"
            >
              <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="hidden xl:inline">{RESTAURANT_INFO.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            <a
              href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] hover:opacity-95 shadow-lg shadow-red-950/40 rounded-lg transition-all transform active:scale-95 whitespace-nowrap"
              aria-label="Order or inquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order / Inquire</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center p-2 rounded-lg bg-[#E11D48] text-white"
              aria-label="WhatsApp quick link"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF8F5]/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#18191E] border-b border-white/15 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1 py-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#FAF8F5]/40 px-3 py-1">
              Main Pages
            </div>
            {primaryNav.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? "bg-[#E11D48]/20 text-[#F59E0B] font-semibold"
                    : "text-[#FAF8F5]/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#FAF8F5]/40 px-3 pt-3 py-1">
              More Information
            </div>
            {moreNav.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? "bg-[#E11D48]/20 text-[#F59E0B] font-semibold"
                    : "text-[#FAF8F5]/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Drawer Action Buttons */}
          <div className="pt-4 mt-3 border-t border-white/10 grid grid-cols-2 gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F59E0B]" />
              <span>Call Now</span>
            </a>
            <a
              href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-3 text-center text-xs text-[#FAF8F5]/60">
            {RESTAURANT_INFO.road}, Khanewal · {RESTAURANT_INFO.currentHoursNote}
          </div>
        </div>
      )}
    </header>
  );
};
