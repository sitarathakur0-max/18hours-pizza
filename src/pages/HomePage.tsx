import React from "react";
import { ArrowRight, MessageCircle, Phone, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { RESTAURANT_INFO, getWhatsAppUrl, REVIEWS } from "../data/restaurantData";
import { TrustStrip } from "../components/TrustStrip";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

// ===== Direct Image URLs =====
const IMG_HERO_PIZZA     = "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop";
const IMG_SPECIAL_SLICE  = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop";
const IMG_CREAMY_PASTA   = "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop";
const IMG_CAFE_AMBIENCE  = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop";
const IMG_TAKEAWAY_BOX   = "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1400&auto=format&fit=crop";

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#121316]">
        <div className="absolute inset-0 z-0">
          <img
            src={IMG_HERO_PIZZA}
            alt="Freshly baked gourmet pizza at 18 Hours Pizza & Cafe Khanewal"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse motion-safe:duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/75 to-[#121316]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316]/90 via-[#121316]/60 to-transparent" />
        </div>

        <div
          aria-hidden="true"
          className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none font-display font-black text-[180px] sm:text-[280px] md:text-[380px] lg:text-[460px] text-white/[0.04] leading-none z-0"
        >
          18
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#FAF8F5]/80">
              <span className="flex items-center gap-1.5 text-[#F59E0B]">
                <MapPin className="w-4 h-4" />
                <span>Jamia Annatia Road, Khanewal</span>
              </span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="text-[#FAF8F5]/70">Pizza • Pasta • Cafe</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="text-emerald-400 font-semibold">Open Late (Until 3 AM)</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] text-balance">
              Late-Night Cravings <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-white via-[#FAF8F5] to-[#F59E0B] bg-clip-text text-transparent">
                Start Here.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#FAF8F5]/85 leading-relaxed max-w-2xl">
              Pizza, pasta and satisfying food moments from 18 Hours Pizza & Cafe in Khanewal. Made hot and fresh for late gatherings, family treats, and quick takeaway cravings.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate("menu")}
                className="px-7 py-4 text-sm font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] hover:opacity-95 shadow-xl shadow-red-950/50 rounded-xl transition-all transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate("order")}
                className="px-6 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all backdrop-blur-sm flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#F59E0B]" />
                <span>Order / Inquire</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="px-5 py-4 text-sm font-semibold text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#EA580C]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs text-[#FAF8F5]/60">
              <span>Haier Store (City Electronics)</span>
              <span aria-hidden="true">/</span>
              <span>Pickup & Takeaway Ready</span>
              <span aria-hidden="true">/</span>
              <span className="text-[#F59E0B] font-medium">4.6★ on Google (85 reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip
        onReviewsClick={() => onNavigate("reviews")}
        onVisitClick={() => onNavigate("visit-us")}
      />

      {/* FOOD CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-2">
            Freshly Prepared In Khanewal
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Crafted for Big Appetite & Late Hours
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/70 mt-3">
            Explore the culinary categories that define 18 Hours Pizza & Cafe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category 1: PIZZA */}
          <div className="group relative bg-[#18191E] border border-white/10 hover:border-[#E11D48]/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between">
            <div className="aspect-4/3 relative overflow-hidden bg-black/40">
              <img
                src={IMG_HERO_PIZZA}
                alt="Piping hot pizza with bubbling cheese"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18191E] via-transparent to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-black text-2xl text-white tracking-tight">
                  Pizza
                </h3>
                <p className="text-sm text-[#FAF8F5]/70 mt-2 leading-relaxed">
                  Rich, cheesy pizza moments with bubbling crusts baked hot for late-night food cravings.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onNavigate("pizza")}
                  className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Pizza</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Category 2: SPECIAL PIZZA */}
          <div className="group relative bg-[#18191E] border border-[#F59E0B]/40 hover:border-[#F59E0B] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between">
            <div className="aspect-4/3 relative overflow-hidden bg-black/40">
              <img
                src={IMG_SPECIAL_SLICE}
                alt="Customer favorite special pizza slice"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18191E] via-transparent to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F59E0B] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Customer Favorite</span>
                </div>
                <h3 className="font-display font-black text-2xl text-white tracking-tight">
                  Special Pizza
                </h3>
                <p className="text-sm text-[#FAF8F5]/70 mt-2 leading-relaxed">
                  Repeatedly highlighted across Google reviews for its generous toppings and mouthwatering taste.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onNavigate("specialties")}
                  className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Specialties</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Category 3: PASTA */}
          <div className="group relative bg-[#18191E] border border-white/10 hover:border-[#EA580C]/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between">
            <div className="aspect-4/3 relative overflow-hidden bg-black/40">
              <img
                src={IMG_CREAMY_PASTA}
                alt="Creamy hot pasta bowl"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18191E] via-transparent to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-black text-2xl text-white tracking-tight">
                  Pasta
                </h3>
                <p className="text-sm text-[#FAF8F5]/70 mt-2 leading-relaxed">
                  Comforting pasta choices cooked fresh to order. Rich texture, savory seasoning, and warm goodness.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onNavigate("pasta")}
                  className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Pasta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Category 4: CAFE */}
          <div className="group relative bg-[#18191E] border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between">
            <div className="aspect-4/3 relative overflow-hidden bg-black/40">
              <img
                src={IMG_CAFE_AMBIENCE}
                alt="Cafe moments with pizza and pasta"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18191E] via-transparent to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-black text-2xl text-white tracking-tight">
                  Cafe
                </h3>
                <p className="text-sm text-[#FAF8F5]/70 mt-2 leading-relaxed">
                  A casual food experience for evening get-togethers, friends, and late-night cravings in Khanewal.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onNavigate("cafe-experience")}
                  className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Cafe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="bg-[#18191E] border-y border-white/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src={IMG_TAKEAWAY_BOX}
                  alt="Freshly baked hot pizza takeaway box ready for pickup"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-4/3"
                />
              </div>

              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#121316]/95 border border-white/20 p-5 rounded-xl shadow-2xl max-w-xs backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Customer Experience</span>
                </div>
                <p className="text-xs text-[#FAF8F5]/90 italic">
                  "Takeaway order was hot and ready upon arrival... special pizza & pasta quality praised."
                </p>
                <p className="text-[11px] text-[#FAF8F5]/50 mt-1">
                  — From verified Google reviews
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
                What Customers Love Most
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Special Pizza & Special Pasta
              </h2>
              <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
                When customers talk about 18 Hours Pizza & Cafe, two items come up time and time again: our signature <strong>Special Pizza</strong> and our comforting <strong>Special Pasta</strong>. Prepared hot on order with generous seasoning and satisfying quality.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-[#FAF8F5]/90">
                  <div className="w-5 h-5 rounded-full bg-[#E11D48]/20 text-[#E11D48] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Praised by customer Ajoo Khan for super quality, timely preparation, and economical pricing.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#FAF8F5]/90">
                  <div className="w-5 h-5 rounded-full bg-[#E11D48]/20 text-[#E11D48] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Commended by customer Usman Rashid for helpful staff, fast takeaway readiness, and kitchen transparency.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#FAF8F5]/90">
                  <div className="w-5 h-5 rounded-full bg-[#E11D48]/20 text-[#E11D48] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Open late into the night for late-night cravings in Khanewal.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, I would like to inquire about your Special Pizza and Special Pasta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 transition-all shadow-lg flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire About Specials on WhatsApp</span>
                </a>

                <button
                  onClick={() => onNavigate("specialties")}
                  className="px-6 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors cursor-pointer"
                >
                  View Specialties Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1E1F26] via-[#1A1B22] to-[#16171D] border border-white/15 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              Ready To Order or Inquire?
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              Get Hot Pizza & Pasta Ready For Takeaway
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F5]/75">
              Contact our team directly on WhatsApp or phone to check today's fresh menu options, current prices, and pickup times.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (+92 327 4414466)</span>
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="px-6 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => onNavigate("order")}
                className="px-6 py-3.5 text-xs font-semibold text-[#FAF8F5]/80 hover:text-white transition-colors cursor-pointer"
              >
                Use Inquiry Form →
              </button>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 bg-radial from-[#E11D48] to-transparent pointer-events-none"
          />
        </div>
      </section>
    </div>
  );
};