import React from "react";
import { MessageCircle, Phone, Sparkles, Heart, UtensilsCrossed } from "lucide-react";
import { RESTAURANT_INFO, IMAGES, getWhatsAppUrl } from "../data/restaurantData";

interface OurFoodPageProps {
  onNavigate: (page: string) => void;
}

export const OurFoodPage: React.FC<OurFoodPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Culinary Focus
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Our Food Philosophy
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
          At 18 Hours Pizza & Cafe, our cooking philosophy is simple: hot, flavorful, and comforting food prepared with care for our Khanewal community.
        </p>
      </div>

      {/* Editorial Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Pillar 1: Flavor & Comfort */}
        <div className="bg-[#18191E] border border-white/10 rounded-3xl p-8 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="font-display font-black text-2xl text-white">
            Flavor & Pure Comfort
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/75 leading-relaxed">
            We believe food should feel satisfying and inviting. Our pizza sauces, savory toppings, and melted cheese work together to produce bold, memorable bites that bring warmth to any evening.
          </p>
        </div>

        {/* Pillar 2: Fresh Preparation */}
        <div className="bg-[#18191E] border border-white/10 rounded-3xl p-8 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <h2 className="font-display font-black text-2xl text-white">
            Freshly Prepared to Order
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/75 leading-relaxed">
            We prepare your pizza and pasta when you order it. This ensures hot bubbling cheese, aromatic crusts, and steaming pasta straight from the oven and pans to your plate or takeaway box.
          </p>
        </div>
      </div>

      {/* Visual Showcase: Pizza & Pasta Focus */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#18191E] border border-white/10 rounded-3xl p-8 sm:p-12">
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
            Customer Favorites
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
            Special Pizza & Pasta Recipes
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed">
            Customer reviews frequently point to our Special Pizza and Special Pasta as the highlight of their visits. We pay careful attention to food presentation, generous toppings, and satisfying portion feel.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("specialties")}
              className="px-5 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md cursor-pointer"
            >
              Explore House Specialties
            </button>
            <button
              onClick={() => onNavigate("menu")}
              className="px-5 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors cursor-pointer"
            >
              View Full Menu Discovery
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-xl overflow-hidden border border-white/15">
            <img
              src={IMAGES.specialSlice}
              alt="Special pizza melted cheese slice"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden border border-white/15">
            <img
              src={IMAGES.creamyPasta}
              alt="Creamy warm pasta bowl"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Customer Satisfaction Focus */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#141519] border border-white/10 text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="font-display font-bold text-xl text-white">
          Dedicated to Customer Satisfaction
        </h3>
        <p className="text-sm text-[#FAF8F5]/70 leading-relaxed">
          From kitchen transparency noted by customer Usman Rashid to swift takeaway readiness praised by customer Ajoo Khan, our priority is always delivering an enjoyable dining and ordering experience.
        </p>
        <div className="pt-2">
          <a
            href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect with Us on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
};
