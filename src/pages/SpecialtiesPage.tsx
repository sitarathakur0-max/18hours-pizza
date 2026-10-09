import React from "react";
import { MessageCircle, Phone, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { RESTAURANT_INFO, IMAGES, getWhatsAppUrl } from "../data/restaurantData";

interface SpecialtiesPageProps {
  onNavigate: (page: string) => void;
}

export const SpecialtiesPage: React.FC<SpecialtiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Frequently Mentioned by Customers
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          House Specialties
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
          The culinary highlights that earn consistent praise from Khanewal food lovers. Grounded in actual customer experiences, baked fresh to satisfy late-night appetites.
        </p>
      </div>

      {/* FEATURE 1: SPECIAL PIZZA */}
      <section className="bg-[#18191E] border border-[#F59E0B]/30 rounded-3xl p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src={IMAGES.specialSlice}
              alt="Special Pizza with rich toppings and golden melted mozzarella"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Frequently mentioned by customers</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Special Pizza
            </h2>

            <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
              When Khanewal locals order from 18 Hours, the Special Pizza is the clear crowd favorite. Crafted with generous cheese, robust sauce, and rich savory toppings, it represents our passion for comfort food done right.
            </p>

            {/* Customer Review Grounding */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs sm:text-sm text-[#FAF8F5]/80">
              <div className="flex items-center gap-2 text-[#F59E0B] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Customer Review Insights:</span>
              </div>
              <p className="italic">
                "Super quality, delivery time, economical pricing... special pizza was great." — Ajoo Khan
              </p>
              <p className="italic">
                "Special pizza was really good, and takeaway order was ready upon arrival." — Usman Rashid
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, I would like to order or ask about the Special Pizza.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order / Inquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="px-5 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: SPECIAL PASTA */}
      <section className="bg-[#18191E] border border-white/15 rounded-3xl p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Frequently mentioned by customers</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Special Pasta
            </h2>

            <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
              Steaming, rich, and comforting, our Special Pasta is simmered upon order with flavorful seasonings and velvety texture. It offers a warm culinary experience that elevates any lunch or midnight feast.
            </p>

            {/* Customer Review Grounding */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs sm:text-sm text-[#FAF8F5]/80">
              <div className="flex items-center gap-2 text-[#EA580C] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Customer Review Insights:</span>
              </div>
              <p className="italic">
                "Special pasta and special pizza were both praised by customers for great flavor and hospitality." — Google Reviews
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, I would like to order or ask about the Special Pasta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order / Inquire on WhatsApp</span>
              </a>

              <button
                onClick={() => onNavigate("order")}
                className="px-5 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors cursor-pointer"
              >
                Prepare Order Inquiry
              </button>
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/15 shadow-2xl order-1 lg:order-2">
            <img
              src={IMAGES.creamyPasta}
              alt="Special Pasta served hot with aromatic herbs"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TAKEAWAY CONVENIENCE */}
      <section className="bg-gradient-to-r from-[#18191E] via-[#1A1B22] to-[#18191E] border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-display font-bold text-xl text-white">
            Fast Takeaway Readiness
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/70">
            Call or message us before you arrive at Jamia Annatia Road so your hot special pizza and pasta are boxed and ready without waiting.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs font-bold text-white bg-[#E11D48] rounded-xl hover:opacity-95 shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order On WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
};
