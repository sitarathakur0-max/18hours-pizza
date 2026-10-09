import React from "react";
import { MessageCircle, Phone, Sparkles, Check, ArrowRight } from "lucide-react";
import { RESTAURANT_INFO, IMAGES, getWhatsAppUrl } from "../data/restaurantData";

interface PastaPageProps {
  onNavigate: (page: string) => void;
}

export const PastaPage: React.FC<PastaPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* HERO SECTION */}
      <div className="relative rounded-3xl overflow-hidden bg-[#18191E] border border-white/10 p-8 sm:p-14 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              Savory Comfort Food
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Comfort in Every Bite — <br className="hidden sm:inline" />
              Special Pasta & More
            </h1>
            <p className="text-base sm:text-lg text-[#FAF8F5]/80 leading-relaxed">
              Steaming hot pasta prepared fresh on order to bring comforting, rich savory flavors to your table. Highlighted repeatedly by local Khanewal customers for pure satisfaction.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl(RESTAURANT_INFO.pastaWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask About Pasta</span>
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
              src={IMAGES.creamyPasta}
              alt="Steaming bowl of gourmet savory pasta"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* HIGHLIGHT: SPECIAL PASTA */}
      <section className="bg-gradient-to-b from-[#18191E] to-[#121316] border border-[#F59E0B]/30 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Customer-Favorite Highlight</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
              The 18 Hours Special Pasta
            </h2>
          </div>
          <span className="text-xs text-[#FAF8F5]/60 font-medium">
            Explicitly mentioned in local reviews
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 order-2 lg:order-1">
            <p className="text-base text-[#FAF8F5]/85 leading-relaxed">
              Customers in Khanewal frequently order our <strong>Special Pasta</strong> alongside their pizza. Crafted with careful attention to warmth, texture, and flavor, this dish has earned distinct appreciation in customer feedback.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-[#FAF8F5]/80">
                <Check className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                <span>Customer Usman Rashid specifically highlighted the Special Pasta experience along with courteous staff service.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#FAF8F5]/80">
                <Check className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                <span>Customer Ajoo Khan commended our pasta for super quality and friendly pricing.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#FAF8F5]/80">
                <Check className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
                <span>Prepared hot to order for both dine-in moments and swift takeaway pickup.</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, I would like to inquire about today's Special Pasta options and availability.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Special Pasta on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/15 shadow-xl order-1 lg:order-2">
            <img
              src={IMAGES.creamyPasta}
              alt="Close-up of rich steaming pasta"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY OUR PASTA HITS THE SPOT */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FAF8F5]/50">
            Culinary Craft
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
            The Pasta Craft at 18 Hours
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/70">
            Wholesome, satisfying comfort food cooked when you order it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#18191E] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center font-display font-black text-lg">
              01
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Prepared to Order
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
              Every bowl is simmered fresh upon your order so it reaches you piping hot and full of aroma.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#18191E] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center font-display font-black text-lg">
              02
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Rich & Comforting
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
              Satisfying textures, generous sauce coating, and authentic seasoning that warms up late nights.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#18191E] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center font-display font-black text-lg">
              03
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              The Perfect Companion
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed">
              Pairs seamlessly with our hot pizzas for a complete meal for friends, families, or solo late dinners.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#18191E] border border-white/15 text-center space-y-5">
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
          Ready for Comforting Pasta Tonight?
        </h3>
        <p className="text-sm text-[#FAF8F5]/80 max-w-xl mx-auto">
          Contact 18 Hours Pizza & Cafe for today's active pasta varieties, availability, and takeaway readiness.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={getWhatsAppUrl(RESTAURANT_INFO.pastaWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>"Hello 18 Hours, I would like to ask about pasta"</span>
          </a>
          <button
            onClick={() => onNavigate("order")}
            className="px-5 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors cursor-pointer"
          >
            Send Order Inquiry
          </button>
        </div>
      </div>

    </div>
  );
};
