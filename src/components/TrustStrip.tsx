import React from "react";
import { Star, MapPin, Clock, MessageSquareQuote } from "lucide-react";
import { RESTAURANT_INFO } from "../data/restaurantData";

interface TrustStripProps {
  onReviewsClick?: () => void;
  onVisitClick?: () => void;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ onReviewsClick, onVisitClick }) => {
  return (
    <section className="bg-[#18191E] border-y border-white/10 py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Item 1: Rating */}
          <div
            onClick={onReviewsClick}
            className={`flex items-center gap-3.5 pt-4 first:pt-0 md:pt-0 md:px-4 ${
              onReviewsClick ? "cursor-pointer group" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-[#F59E0B] fill-current" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-2xl text-white tracking-tight tabular-nums">
                  {RESTAURANT_INFO.rating}
                </span>
                <span className="text-xs text-[#FAF8F5]/60">/ 5</span>
              </div>
              <p className="text-xs text-[#FAF8F5]/60 group-hover:text-white transition-colors">
                Google Rating
              </p>
            </div>
          </div>

          {/* Item 2: Reviews */}
          <div
            onClick={onReviewsClick}
            className={`flex items-center gap-3.5 pt-4 md:pt-0 md:px-4 ${
              onReviewsClick ? "cursor-pointer group" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#E11D48]/10 border border-[#E11D48]/20 flex items-center justify-center shrink-0">
              <MessageSquareQuote className="w-5 h-5 text-[#E11D48]" />
            </div>
            <div>
              <div className="font-display font-black text-2xl text-white tracking-tight tabular-nums">
                {RESTAURANT_INFO.reviewCount}
              </div>
              <p className="text-xs text-[#FAF8F5]/60 group-hover:text-white transition-colors">
                Google Reviews
              </p>
            </div>
          </div>

          {/* Item 3: Khanewal Location */}
          <div
            onClick={onVisitClick}
            className={`flex items-center gap-3.5 pt-4 md:pt-0 md:px-4 ${
              onVisitClick ? "cursor-pointer group" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white tracking-tight">
                Khanewal
              </div>
              <p className="text-xs text-[#FAF8F5]/60 group-hover:text-white transition-colors">
                Jamia Annatia Road
              </p>
            </div>
          </div>

          {/* Item 4: Listed Hours */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:px-4">
            <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 border border-[#EA580C]/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#EA580C]" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white tracking-tight flex items-center gap-2">
                <span>Open Late</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <p className="text-xs text-[#FAF8F5]/60">
                Currently listed until 3 AM
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
