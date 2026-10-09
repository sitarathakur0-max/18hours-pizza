import React from "react";
import { MapPin, Clock, Star, MessageCircle, Phone } from "lucide-react";
import { RESTAURANT_INFO, IMAGES, getWhatsAppUrl } from "../data/restaurantData";

interface AboutUsPageProps {
  onNavigate: (page: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Authentic Khanewal Food Brand
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          About 18 Hours Pizza & Cafe
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
          Located on Jamia Annatia Road in Khanewal, Pakistan, 18 Hours Pizza & Cafe focuses on artisan pizza, comforting pasta, and casual cafe-style food experiences.
        </p>
      </div>

      {/* Story & Essence */}
      <div className="bg-[#18191E] border border-white/10 rounded-3xl p-8 sm:p-14 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              Good Food, Late-Night Cravings
            </h2>
            <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
              18 Hours Pizza & Cafe was built around a straightforward goal: delivering hot, cheesy, savory food when you crave it most. Whether it is an evening gathering with friends or late-night cravings into the early morning, our kitchen is dedicated to providing satisfying comfort food in Khanewal.
            </p>
            <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
              Our specialty pizza and pasta have earned warm recognition from customers who appreciate generous flavor, value pricing, and hospitable service.
            </p>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-[#FAF8F5]/50 uppercase font-semibold">Location</p>
                <p className="text-white font-medium mt-1">
                  Jamia Annatia Road, Khanewal (inside Haier Store / City Electronics)
                </p>
              </div>
              <div>
                <p className="text-[#FAF8F5]/50 uppercase font-semibold">Current Hours</p>
                <p className="text-white font-medium mt-1">
                  Open · Currently listed until 3 AM
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src={IMAGES.heroPizza}
              alt="Artisan pizza fresh from the oven"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* The Brand Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 rounded-2xl bg-[#18191E] border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-[#F59E0B]">
            <MapPin className="w-5 h-5" />
            <h3 className="font-display font-bold text-lg text-white">Central Khanewal</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
            Conveniently situated on Jamia Annatia Road inside the Haier Store (City Electronics), making it easily accessible for dine-in and fast takeaway pickups.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#18191E] border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-[#E11D48]">
            <Clock className="w-5 h-5" />
            <h3 className="font-display font-bold text-lg text-white">Late-Night Food</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
            Listed until 3 AM to ensure Khanewal residents always have a dependable source for hot pizza and hearty pasta late into the night.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#18191E] border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-[#EA580C]">
            <Star className="w-5 h-5 fill-current" />
            <h3 className="font-display font-bold text-lg text-white">Community Trust</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
            Backed by a 4.6/5 Google rating across 85 reviews, highlighting our flavorful special pizza, comforting pasta, and helpful team.
          </p>
        </div>
      </div>

      {/* Action Strip */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#18191E] border border-white/10 text-center space-y-4">
        <h3 className="font-display font-bold text-2xl text-white">
          Connect With 18 Hours Pizza & Cafe
        </h3>
        <p className="text-sm text-[#FAF8F5]/70 max-w-xl mx-auto">
          We welcome your inquiries, feedback, and takeaway orders. Reach out directly via WhatsApp or phone.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us (+92 327 4414466)</span>
          </a>
          <button
            onClick={() => onNavigate("visit-us")}
            className="px-6 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors cursor-pointer"
          >
            View Location Details
          </button>
        </div>
      </div>

    </div>
  );
};
