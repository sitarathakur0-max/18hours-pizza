import React from "react";
import { MessageCircle, Phone, Sparkles, Check, ArrowRight } from "lucide-react";
import { RESTAURANT_INFO, IMAGES, getWhatsAppUrl } from "../data/restaurantData";

interface PizzaPageProps {
  onNavigate: (page: string) => void;
}

export const PizzaPage: React.FC<PizzaPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* HERO SECTION */}
      <div className="relative rounded-3xl overflow-hidden bg-[#18191E] border border-white/10 p-8 sm:p-14 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
              Artisan Crust & Melted Cheese
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Pizza Worth <br className="hidden sm:inline" />
              Coming Back For
            </h1>
            <p className="text-base sm:text-lg text-[#FAF8F5]/80 leading-relaxed">
              Baked hot in Khanewal with bubbling mozzarella, rich sauce, and savory toppings. Whether you're dining in or calling in for a late-night takeaway, every pizza is made fresh to satisfy your cravings.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl(RESTAURANT_INFO.pizzaWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask About Pizza Options</span>
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

          <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-white/15">
            <img
              src={IMAGES.heroPizza}
              alt="Artisan freshly baked pizza with rich cheese and toppings"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* HIGHLIGHT: SPECIAL PIZZA */}
      <section className="bg-gradient-to-b from-[#18191E] to-[#121316] border border-[#F59E0B]/30 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Customer-Favorite Highlight</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
              The 18 Hours Special Pizza
            </h2>
          </div>
          <span className="text-xs text-[#FAF8F5]/60 font-medium">
            Frequently mentioned in Google reviews
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
            <img
              src={IMAGES.specialSlice}
              alt="Special Pizza slice pull with melted mozzarella"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-5">
            <p className="text-base text-[#FAF8F5]/85 leading-relaxed">
              Our <strong>Special Pizza</strong> is the centerpiece of 18 Hours Pizza & Cafe. Praised by recurring Khanewal customers for its generous layering, balanced savory flavor, and hot crust, it is crafted specifically for late-night food lovers.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-[#FAF8F5]/80">
                <Check className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                <span>Customer Ajoo Khan commended its "super quality" alongside economical pricing and fast takeaway.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#FAF8F5]/80">
                <Check className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                <span>Customer Usman Rashid praised the Special Pizza experience, timely kitchen preparation, and friendly staff.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#FAF8F5]/80">
                <Check className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                <span>Prepared to order to guarantee hot, stringy melted cheese right when you open the box.</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, I would like to order or ask about the Special Pizza options and prices.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask About Special Pizza on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE PIZZA EXPERIENCE SECTION */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FAF8F5]/50">
            Fresh Preparation
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
            The 18 Hours Pizza Experience
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/70">
            We focus on satisfying taste, hot delivery or takeaway pickup, and comfort food when you crave it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#18191E] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center font-display font-black text-lg">
              01
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Golden Blistered Crust
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
              Basked in high heat so the outer crust is crispy while remaining fluffy and satisfying inside.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#18191E] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center font-display font-black text-lg">
              02
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Rich Melted Cheese
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
              Generous mozzarella cheese melted to golden perfection with unmistakable stringy pull.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#18191E] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center font-display font-black text-lg">
              03
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Late-Night Convenience
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
              Open late (currently listed until 3 AM), so you never have to sleep on empty cravings in Khanewal.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#18191E] border border-white/15 text-center space-y-5">
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
          Craving Pizza Tonight in Khanewal?
        </h3>
        <p className="text-sm text-[#FAF8F5]/80 max-w-xl mx-auto">
          Contact us now to check today's freshly available pizza varieties, crust options, and prices.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={getWhatsAppUrl(RESTAURANT_INFO.pizzaWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>"Hello 18 Hours, I'd like to know today's pizza options"</span>
          </a>
          <button
            onClick={() => onNavigate("order")}
            className="px-5 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors cursor-pointer"
          >
            Use Order / Inquiry Form
          </button>
        </div>
      </div>

    </div>
  );
};
