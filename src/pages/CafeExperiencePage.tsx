import React from "react";
import { MessageCircle, Phone, Clock, Users, Utensils, HeartHandshake } from "lucide-react";
import { RESTAURANT_INFO, IMAGES, getWhatsAppUrl } from "../data/restaurantData";

interface CafeExperiencePageProps {
  onNavigate: (page: string) => void;
}

export const CafeExperiencePage: React.FC<CafeExperiencePageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Gathering Over Great Food
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Cafe & Food Experience
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
          More than just a meal: 18 Hours Pizza & Cafe is a destination for casual dining, relaxing evening meetups, and late-night comfort food in Khanewal.
        </p>
      </div>

      {/* Atmospheric Visual Hero */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video sm:aspect-21/9 shadow-2xl">
        <img
          src={IMAGES.cafeAmbience}
          alt="Warm cafe dining ambience with pizza and pasta"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-white space-y-2 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
            Late-Night Moments in Khanewal
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl">
            Comfort Food for Friends & Family
          </h2>
        </div>
      </div>

      {/* Experience Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Pillar 1: Late-Night Occasions */}
        <div className="bg-[#18191E] border border-white/10 rounded-2xl p-7 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl text-white">
            Late-Night Food Occasions
          </h3>
          <p className="text-sm text-[#FAF8F5]/70 leading-relaxed">
            With operating hours currently listed until 3 AM, we are here for midnight hunger, late work shifts, post-gathering chats, and late-night cravings.
          </p>
        </div>

        {/* Pillar 2: Casual Meals & Takeaway */}
        <div className="bg-[#18191E] border border-white/10 rounded-2xl p-7 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center">
            <Utensils className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl text-white">
            Casual Meals & Takeaway
          </h3>
          <p className="text-sm text-[#FAF8F5]/70 leading-relaxed">
            Whether taking hot boxes home to your family or dropping in for a quick bite with friends, our food is served fresh to ensure pure comfort and satisfaction.
          </p>
        </div>

        {/* Pillar 3: Welcoming & Helpful Staff */}
        <div className="bg-[#18191E] border border-white/10 rounded-2xl p-7 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl text-white">
            Helpful & Attentive Team
          </h3>
          <p className="text-sm text-[#FAF8F5]/70 leading-relaxed">
            As noted in reviews by customers like Usman Rashid, our staff takes pride in friendly hospitality, prompt order prep, and a transparent kitchen mindset.
          </p>
        </div>

      </section>

      {/* Takeaway Showcase */}
      <div className="bg-[#18191E] border border-white/10 rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              Convenient Ordering
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
              Prepared Fresh For Your Pickup
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed">
              Skip waiting around. Reach out via WhatsApp or phone with your choice of pizza or pasta, and our kitchen will fire it up so it's steaming hot and ready when you pull up to Jamia Annatia Road.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, I'd like to prepare a takeaway order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Takeaway Order</span>
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

          <div className="aspect-4/3 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
            <img
              src={IMAGES.takeawayBox}
              alt="Freshly packed pizza ready for takeaway"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
};
