import React from "react";
import { Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import { RESTAURANT_INFO, getWhatsAppUrl } from "../data/restaurantData";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D0E11] text-[#FAF8F5]/80 border-t border-white/10 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-white">
                18<span className="text-[#E11D48]">HOURS</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-[#FAF8F5]/60 border-l border-white/20 pl-2">
                Pizza & Cafe
              </span>
            </div>
            
            <p className="text-sm text-[#FAF8F5]/70 leading-relaxed">
              Late-night food, artisan pizza, comforting pasta, and cafe moments from Khanewal. Satisfying your late cravings with freshly prepared recipes.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#FAF8F5]/60">
              <div className="flex items-center gap-2 text-[#F59E0B]">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold text-white">{RESTAURANT_INFO.rating} / 5</span>
                <span>({RESTAURANT_INFO.reviewCount} Google Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>Currently listed until 3 AM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("menu")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Menu Discovery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("pizza")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pizza
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("pasta")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pasta
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("specialties")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("cafe-experience")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cafe & Food Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("our-food")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Food Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("why-18-hours")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Why 18 Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Info */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Customer Info
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav("reviews")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Customer Reviews ({RESTAURANT_INFO.reviewCount})
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("gallery")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Food Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("faq")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("about")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About 18 Hours Pizza & Cafe
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("visit-us")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Visit Us in Khanewal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Order / Inquiries */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Direct Inquiries
            </h3>
            
            <p className="text-xs text-[#FAF8F5]/70">
              Connect directly with our team for today's menu availability, prices, and fast takeaway readiness.
            </p>

            <div className="space-y-2.5">
              <a
                href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-[#E11D48]/20 hover:bg-[#E11D48]/30 border border-[#E11D48]/40 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#F59E0B]" />
                <span>WhatsApp: {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#EA580C]" />
                <span>Call: {RESTAURANT_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleNav("order")}
                className="w-full text-left flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                <span>Send Structured Order Inquiry</span>
              </button>
            </div>

            <div className="pt-2 text-xs text-[#FAF8F5]/60 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
              <span>
                {RESTAURANT_INFO.road}, Khanewal ({RESTAURANT_INFO.landmark})
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F5]/50 gap-4">
          <p>
            © 2026 18 Hours Pizza & Cafe. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Jamia Annatia Road, Khanewal, Pakistan · Reference: {RESTAURANT_INFO.locationCode}
          </p>
        </div>
      </div>
    </footer>
  );
};
