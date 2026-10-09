import React from "react";
import { MapPin, Navigation, Phone, MessageCircle, Clock, Check } from "lucide-react";
import { RESTAURANT_INFO, getWhatsAppUrl } from "../data/restaurantData";

export const VisitUsPage: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "18 Hours Pizza & Cafe Jamia Annatia Road Haier Store City Electronics Khanewal Pakistan"
  )}`;

  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Location & Takeaway Pickup
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Find 18 Hours Pizza & Cafe
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed max-w-2xl mx-auto">
          Visit us on Jamia Annatia Road in Khanewal for freshly baked pizza, comforting pasta, and late-night food pickups.
        </p>
      </div>

      {/* Main Location Card */}
      <div className="bg-[#18191E] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Khanewal, Pakistan</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Jamia Annatia Road
          </h2>
          <p className="text-base text-[#FAF8F5]/85">
            Located in: <strong>Haier Store (City Electronics)</strong>
          </p>
          <p className="text-sm font-mono text-[#FAF8F5]/60">
            Location reference: <strong>{RESTAURANT_INFO.locationCode}</strong>
          </p>
        </div>

        {/* Essential Visit Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="font-display font-bold text-lg text-white">
              Visiting Schedule
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
              Currently listed until 3 AM (Open Late). If you plan to visit late in the night, we suggest confirming by WhatsApp or phone before setting out.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="font-display font-bold text-lg text-white">
              Call Ahead for Takeaway
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
              To minimize your waiting time, you can call or message your pizza and pasta order in advance. Our team will have it freshly packed upon your arrival.
            </p>
          </div>
        </div>

        {/* Verification Checkpoints */}
        <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-3 text-xs sm:text-sm text-[#FAF8F5]/75">
          <div className="font-bold text-white text-sm">
            Quick Checkpoints:
          </div>
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Located along Jamia Annatia Road in the Haier Store (City Electronics) facility.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Direct phone support at +92 327 4414466 for immediate location guidance.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>Google Rating: 4.6 / 5 based on 85 local customer reviews.</span>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="pt-2 flex flex-wrap gap-4">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px] py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            <span>Open Map Directions Search</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="flex-1 min-w-[140px] py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#F59E0B]" />
            <span>Call for Guidance</span>
          </a>

          <a
            href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, can you share the exact directions to your restaurant?")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Location Help</span>
          </a>
        </div>

      </div>

    </div>
  );
};
