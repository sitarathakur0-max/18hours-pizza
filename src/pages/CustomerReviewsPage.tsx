import React from "react";
import { Star, MessageSquareQuote, Check, AlertCircle, MessageCircle, Phone } from "lucide-react";
import { RESTAURANT_INFO, REVIEWS, REVIEW_THEMES, getWhatsAppUrl } from "../data/restaurantData";

interface CustomerReviewsPageProps {
  onNavigate: (page: string) => void;
}

export const CustomerReviewsPage: React.FC<CustomerReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header & Overall Score */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Verified Customer Feedback
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Customer Reviews & Experiences
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
          Authentic, unmanipulated feedback from Google reviews reflecting dining, takeaway, and delivery experiences at 18 Hours Pizza & Cafe in Khanewal.
        </p>
      </div>

      {/* Aggregate Score Card */}
      <div className="bg-[#18191E] border border-white/10 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          
          {/* Rating */}
          <div className="text-center sm:text-left sm:pr-8 space-y-2">
            <div className="flex items-baseline justify-center sm:justify-start gap-2">
              <span className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight tabular-nums">
                {RESTAURANT_INFO.rating}
              </span>
              <span className="text-lg text-[#FAF8F5]/50">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-1 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-[#FAF8F5]/60">
              Based on {RESTAURANT_INFO.reviewCount} verified Google reviews
            </p>
          </div>

          {/* Location & Listed Hours */}
          <div className="pt-6 sm:pt-0 sm:pl-8 text-center sm:text-left space-y-2">
            <p className="text-sm font-semibold text-white">
              18 Hours Pizza & Cafe — Khanewal
            </p>
            <p className="text-xs text-[#FAF8F5]/70">
              Jamia Annatia Road, inside Haier Store (City Electronics)
            </p>
            <p className="text-xs text-[#E11D48] font-medium">
              Currently listed until 3 AM (Open Late)
            </p>
          </div>

          {/* Quick Action */}
          <div className="pt-6 sm:pt-0 sm:pl-8 text-center sm:text-right shrink-0">
            <a
              href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl shadow-md hover:opacity-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* SECTION: WHAT CUSTOMERS TALK ABOUT */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            What Customers Talk About
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/70">
            Common themes reflected across the supplied customer review records:
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {REVIEW_THEMES.map((theme, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-white"
            >
              {theme}
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED REVIEWS GRID */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <h2 className="font-display font-black text-2xl text-white border-b border-white/10 pb-4">
          Supplied Customer Experiences
        </h2>

        <div className="space-y-6">
          {REVIEWS.map((rev) => {
            const isPositive = rev.sentiment === "positive";
            return (
              <div
                key={rev.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  isPositive
                    ? "bg-[#18191E] border-white/10"
                    : "bg-[#16161B] border-white/10 opacity-90"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {rev.author}
                    </h3>
                    <p className="text-xs text-[#FAF8F5]/50">
                      {rev.source}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating
                            ? "fill-current text-[#F59E0B]"
                            : "text-white/20"
                        }`}
                      />
                    ))}
                    <span className="text-xs font-semibold text-white ml-1.5 tabular-nums">
                      {rev.rating}.0
                    </span>
                  </div>
                </div>

                <p className="text-sm font-medium text-white/90 mb-4 italic">
                  "{rev.highlight}"
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]/50">
                    Reported Details:
                  </p>
                  <ul className="space-y-1.5">
                    {rev.notes.map((note, nIdx) => (
                      <li key={nIdx} className="text-xs sm:text-sm text-[#FAF8F5]/75 flex items-start gap-2">
                        {isPositive ? (
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        )}
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMMITMENT TO TRANSPARENCY & ORDERING TIP */}
      <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#141519] border border-white/10 text-xs sm:text-sm text-[#FAF8F5]/70 space-y-3">
        <p className="font-bold text-white text-base">
          Our Commitment to Transparency & Fresh Takeaway
        </p>
        <p className="leading-relaxed">
          We believe in presenting genuine customer sentiment without manipulation. Third-party delivery delays can sometimes impact food temperature; for the crispest crust and hottest cheese pull, we recommend ordering directly through our WhatsApp or phone for immediate takeaway pickup or direct coordination.
        </p>
      </div>

    </div>
  );
};
