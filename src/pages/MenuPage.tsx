import React, { useState } from "react";
import { MessageCircle, Phone, Sparkles, Utensils, HelpCircle, ArrowRight } from "lucide-react";
import { RESTAURANT_INFO, IMAGES, getWhatsAppUrl } from "../data/restaurantData";

interface MenuPageProps {
  onNavigate: (page: string) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Items" },
    { id: "pizza", label: "Pizza" },
    { id: "special-pizza", label: "Special Pizza" },
    { id: "pasta", label: "Pasta" },
    { id: "cafe", label: "Other Food & Cafe" },
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Fresh From Our Khanewal Kitchen
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Explore The Menu
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
          Discover our freshly prepared pizza, comforting pasta, and cafe selections. We craft food to order for hot takeaway and late-night cravings.
        </p>

        {/* Pricing notice card */}
        <div className="mt-6 p-4 rounded-xl bg-[#1A1B20] border border-white/10 text-xs sm:text-sm text-[#FAF8F5]/75 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-left">
            <HelpCircle className="w-5 h-5 text-[#F59E0B] shrink-0" />
            <span>
              Daily menu selections and current prices are updated directly with the kitchen. Tap below to receive today's full menu on WhatsApp.
            </span>
          </div>
          <a
            href={getWhatsAppUrl(RESTAURANT_INFO.menuWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-lg hover:opacity-95 transition-all flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask About Today's Menu</span>
          </a>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 p-1.5 bg-[#18191E] rounded-xl border border-white/10 max-w-2xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === cat.id
                ? "bg-[#E11D48] text-white shadow-md"
                : "text-[#FAF8F5]/70 hover:text-white hover:bg-white/5"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Sections Grid */}
      <div className="space-y-12">
        
        {/* Category: SPECIAL PIZZA (Highlight) */}
        {(activeCategory === "all" || activeCategory === "special-pizza") && (
          <div className="bg-[#18191E] border border-[#F59E0B]/30 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Customer Favorite</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Special Pizza
                </h2>
              </div>
              <a
                href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, I would like to inquire about today's Special Pizza options and prices.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#E11D48] hover:bg-[#E11D48]/90 rounded-lg transition-colors shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Special Pizza Prices</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="aspect-4/3 rounded-xl overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={IMAGES.specialSlice}
                  alt="18 Hours Special Pizza with stretching cheese"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed">
                  The signature pizza repeatedly commended by customers in Khanewal. Baked with high quality melted cheese, savory toppings, and golden crust.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#FAF8F5]/70 space-y-2">
                  <p className="font-semibold text-white">Customer Feedback Highlights:</p>
                  <p className="italic">"Super quality and economical pricing... special pizza was great." — Ajoo Khan</p>
                  <p className="italic">"Special pizza was really good, and takeaway was ready quickly." — Usman Rashid</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => onNavigate("pizza")}
                    className="text-xs font-bold text-[#F59E0B] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Dedicated Pizza Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category: PIZZA */}
        {(activeCategory === "all" || activeCategory === "pizza") && (
          <div className="bg-[#18191E] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FAF8F5]/50">
                  Primary Specialty
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Freshly Baked Pizzas
                </h2>
              </div>
              <a
                href={getWhatsAppUrl(RESTAURANT_INFO.pizzaWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition-colors shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#F59E0B]" />
                <span>Ask About Pizza Options & Sizes</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="aspect-4/3 rounded-xl overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={IMAGES.heroPizza}
                  alt="Freshly baked artisan pizza"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed">
                  Hot oven-baked pizzas prepared fresh for your table or takeaway. Features hot melted mozzarella, aromatic crusts, and rich sauces.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#FAF8F5]/70 space-y-1">
                  <p className="font-semibold text-white">Current Flavors & Sizes:</p>
                  <p>
                    Sizes and topping selections are prepared fresh daily. Please message us on WhatsApp or call our counter to see today's active options and rates.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate("pizza")}
                    className="text-xs font-bold text-[#F59E0B] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read More About Pizza Options</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category: PASTA & SPECIAL PASTA */}
        {(activeCategory === "all" || activeCategory === "pasta") && (
          <div className="bg-[#18191E] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FAF8F5]/50">
                  Comfort Food
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Pasta & Special Pasta
                </h2>
              </div>
              <a
                href={getWhatsAppUrl(RESTAURANT_INFO.pastaWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition-colors shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#F59E0B]" />
                <span>Ask About Pasta Options</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="aspect-4/3 rounded-xl overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={IMAGES.creamyPasta}
                  alt="Creamy warm pasta bowl"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed">
                  Steaming hot, comforting pasta cooked to order with rich sauces and seasoning. Both regular and Special Pasta are loved by our late-night customers.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#FAF8F5]/70 space-y-1">
                  <p className="font-semibold text-white">Customer Reviews on Pasta:</p>
                  <p className="italic">
                    Customers Usman Rashid and Ajoo Khan both specifically highlighted the pasta for quality and satisfaction.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate("pasta")}
                    className="text-xs font-bold text-[#F59E0B] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read More on Pasta</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category: OTHER FOOD & CAFE */}
        {(activeCategory === "all" || activeCategory === "cafe") && (
          <div className="bg-[#18191E] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FAF8F5]/50">
                  Evening & Late Night
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Other Food & Cafe Items
                </h2>
              </div>
              <a
                href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, what cafe items and beverages are available today?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition-colors shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#F59E0B]" />
                <span>Ask About Cafe Options</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="aspect-4/3 rounded-xl overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={IMAGES.cafeAmbience}
                  alt="Cafe atmosphere and food items"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed">
                  Complement your pizza and pasta meals with our casual cafe selections. Ideal for relaxing evenings and late-night food meetups in Khanewal.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#FAF8F5]/70">
                  <p>
                    Ask our team directly on WhatsApp or phone for today's active cafe pairings and beverages.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate("cafe-experience")}
                    className="text-xs font-bold text-[#F59E0B] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read More About Cafe Experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Conversion Strip */}
      <div className="text-center p-8 bg-[#18191E] rounded-2xl border border-white/10 space-y-4">
        <h3 className="font-display font-bold text-xl text-white">
          Ready To Place a Takeaway Order?
        </h3>
        <p className="text-sm text-[#FAF8F5]/70 max-w-xl mx-auto">
          Call or WhatsApp us ahead of time so your order is hot and ready the moment you reach Jamia Annatia Road.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-lg shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (+92 327 4414466)</span>
          </a>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="px-6 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#F59E0B]" />
            <span>Call {RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>

    </div>
  );
};
