import React from "react";
import { Phone, MessageCircle, MapPin, Clock, Star, Navigation } from "lucide-react";
import { RESTAURANT_INFO, getWhatsAppUrl } from "../data/restaurantData";

export const ContactPage: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "18 Hours Pizza & Cafe Jamia Annatia Road Haier Store City Electronics Khanewal Pakistan"
  )}`;

  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Direct Communication
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Contact 18 Hours Pizza & Cafe
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed max-w-2xl mx-auto">
          Reach out directly to place orders, confirm kitchen hours, ask about today's pizza and pasta specials, or get directions to our Khanewal location.
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="bg-[#18191E] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
        
        {/* Identity & Rating */}
        <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              18 Hours Pizza & Cafe
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/60 mt-1">
              Pizza Restaurant / Cafe in Khanewal, Pakistan
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-[#F59E0B]">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-display font-bold text-lg text-white tabular-nums">
                {RESTAURANT_INFO.rating} / 5
              </span>
            </div>
            <span className="text-xs text-[#FAF8F5]/50">
              ({RESTAURANT_INFO.reviewCount} Reviews)
            </span>
          </div>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Address */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#F59E0B]">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Address</span>
            </div>
            <p className="text-sm font-semibold text-white">
              {RESTAURANT_INFO.road}, Khanewal, Pakistan
            </p>
            <p className="text-xs text-[#FAF8F5]/70">
              {RESTAURANT_INFO.landmark}
            </p>
            <p className="text-[11px] text-[#FAF8F5]/50 font-mono">
              Location reference: {RESTAURANT_INFO.locationCode}
            </p>
          </div>

          {/* Operating Hours */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#EA580C]">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Listed Hours</span>
            </div>
            <p className="text-sm font-semibold text-white">
              Open · Closes 3 AM
            </p>
            <p className="text-xs text-[#FAF8F5]/70">
              Currently listed until 3 AM for late-night food cravings.
            </p>
            <p className="text-[11px] text-[#FAF8F5]/50 italic">
              Please call or message to confirm on special occasions.
            </p>
          </div>

          {/* Phone */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-[#E11D48]">
              <Phone className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Direct Phone</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white font-mono">
              {RESTAURANT_INFO.phone}
            </p>
            <p className="text-xs text-[#FAF8F5]/70">
              For direct orders, inquiries, and takeaway coordination.
            </p>
          </div>

          {/* WhatsApp */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">WhatsApp</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white font-mono">
              {RESTAURANT_INFO.phone}
            </p>
            <p className="text-xs text-[#FAF8F5]/70">
              Fastest way to get today's active menu and current prices.
            </p>
          </div>

        </div>

        {/* Primary Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="flex-1 min-w-[140px] py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#F59E0B]" />
            <span>Call Now</span>
          </a>

          <a
            href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1B22] hover:bg-[#20222B] border border-white/20 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4 text-[#F59E0B]" />
            <span>Get Directions</span>
          </a>
        </div>

      </div>

    </div>
  );
};
