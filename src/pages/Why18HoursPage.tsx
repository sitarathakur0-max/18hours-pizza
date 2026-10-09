import React from "react";
import { Star, Clock, MapPin, Sparkles, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { RESTAURANT_INFO, IMAGES, getWhatsAppUrl } from "../data/restaurantData";

interface Why18HoursPageProps {
  onNavigate: (page: string) => void;
}

export const Why18HoursPage: React.FC<Why18HoursPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Grounded In Facts & Customer Reviews
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Why 18 Hours Pizza & Cafe
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
          The four defining pillars that make 18 Hours Pizza & Cafe a preferred food spot for pizza, pasta, and late-night cravings in Khanewal.
        </p>
      </div>

      {/* The 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pillar 1: Highly Rated */}
        <div className="bg-[#18191E] border border-white/10 hover:border-[#F59E0B]/50 transition-colors rounded-3xl p-8 sm:p-10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="font-display font-black text-2xl text-white">
              Highly Rated: 4.6 / 5
            </h2>
          </div>
          <p className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wider">
            From 85 Google Reviews
          </p>
          <p className="text-sm text-[#FAF8F5]/75 leading-relaxed">
            Khanewal customers have shared their positive feedback on Google, praising our super food quality, economical prices, transparent kitchen, and friendly staff.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate("reviews")}
              className="text-xs font-bold text-[#F59E0B] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Read Customer Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pillar 2: Customer-Favorite Categories */}
        <div className="bg-[#18191E] border border-white/10 hover:border-[#E11D48]/50 transition-colors rounded-3xl p-8 sm:p-10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="font-display font-black text-2xl text-white">
            Customer-Favorite Categories
          </h2>
          <p className="text-xs font-semibold text-[#E11D48] uppercase tracking-wider">
            Special Pizza & Pasta Highlighted
          </p>
          <p className="text-sm text-[#FAF8F5]/75 leading-relaxed">
            Our Special Pizza and Special Pasta are repeatedly celebrated by customers for generous flavors, melted cheese pulls, and satisfying portions.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate("specialties")}
              className="text-xs font-bold text-[#F59E0B] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Specialties</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pillar 3: Late-Night Positioning */}
        <div className="bg-[#18191E] border border-white/10 hover:border-[#EA580C]/50 transition-colors rounded-3xl p-8 sm:p-10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <h2 className="font-display font-black text-2xl text-white">
            Late-Night Food Positioning
          </h2>
          <p className="text-xs font-semibold text-[#EA580C] uppercase tracking-wider">
            Currently listed until 3 AM
          </p>
          <p className="text-sm text-[#FAF8F5]/75 leading-relaxed">
            Hungry late into the evening? Our listing currently shows doors open until 3 AM, providing a reliable answer for late meals and midnight cravings.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, are you open right now for orders?")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#F59E0B] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Confirm Current Night Hours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Pillar 4: Local Khanewal Location */}
        <div className="bg-[#18191E] border border-white/10 hover:border-white/30 transition-colors rounded-3xl p-8 sm:p-10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
            <MapPin className="w-6 h-6 text-[#F59E0B]" />
          </div>
          <h2 className="font-display font-black text-2xl text-white">
            Local Khanewal Location
          </h2>
          <p className="text-xs font-semibold text-[#FAF8F5]/70 uppercase tracking-wider">
            Jamia Annatia Road (Haier Store)
          </p>
          <p className="text-sm text-[#FAF8F5]/75 leading-relaxed">
            Conveniently situated inside Haier Store (City Electronics) on Jamia Annatia Road. Easy to reach for dine-in and speedy takeaway pickup.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate("visit-us")}
              className="text-xs font-bold text-[#F59E0B] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Location & Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Visual & Conversion Card */}
      <div className="bg-[#18191E] border border-white/10 rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="aspect-4/3 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
            <img
              src={IMAGES.takeawayBox}
              alt="Takeaway pizza box ready on counter"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Experience 18 Hours Pizza & Cafe Tonight
            </h3>
            <p className="text-sm sm:text-base text-[#FAF8F5]/75 leading-relaxed">
              Order in advance so your hot pizza and pasta are boxed and waiting the moment you arrive. Direct WhatsApp and phone connections make ordering simple.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
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
                className="px-5 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
