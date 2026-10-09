import React from "react";
import { Phone, MessageCircle, UtensilsCrossed } from "lucide-react";
import { RESTAURANT_INFO, getWhatsAppUrl } from "../data/restaurantData";

interface MobileStickyBarProps {
  onNavigate: (page: string) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0F1012]/95 backdrop-blur-md border-t border-white/15 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-white/5 active:bg-white/15 text-white transition-colors"
          aria-label="Call 18 Hours Pizza and Cafe"
        >
          <Phone className="w-4 h-4 text-[#F59E0B] mb-0.5" />
          <span className="text-[11px] font-bold tracking-wider uppercase">Call</span>
        </a>

        {/* WhatsApp Button (Dominant action) */}
        <a
          href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-gradient-to-r from-[#E11D48] to-[#EA580C] text-white shadow-md active:opacity-90 transition-transform active:scale-95"
          aria-label="Order or inquire via WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 text-white" />
          <span className="text-[11px] font-extrabold tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* Menu Button */}
        <button
          onClick={() => {
            onNavigate("menu");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-white/5 active:bg-white/15 text-white transition-colors cursor-pointer"
          aria-label="View menu"
        >
          <UtensilsCrossed className="w-4 h-4 text-[#EA580C] mb-0.5" />
          <span className="text-[11px] font-bold tracking-wider uppercase">Menu</span>
        </button>
      </div>
    </div>
  );
};
