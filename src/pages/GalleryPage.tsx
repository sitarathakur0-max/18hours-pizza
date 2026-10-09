import React, { useState } from "react";
import { Maximize2, MessageCircle } from "lucide-react";
import { GALLERY_ITEMS, GalleryImage, getWhatsAppUrl, RESTAURANT_INFO } from "../data/restaurantData";
import { Lightbox } from "../components/Lightbox";

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "pizza", label: "Pizza" },
    { id: "pasta", label: "Pasta" },
    { id: "food", label: "Food & Takeaway" },
    { id: "cafe", label: "Cafe Atmosphere" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Visual Feast
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Food & Atmosphere Gallery
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed">
          Take a look at our freshly baked pizzas, steaming pasta bowls, takeaway packaging, and warm cafe moments at 18 Hours Pizza & Cafe in Khanewal.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center justify-center flex-wrap gap-2 p-1.5 bg-[#18191E] rounded-xl border border-white/10 max-w-xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat.id
                ? "bg-[#E11D48] text-white shadow-md"
                : "text-[#FAF8F5]/70 hover:text-white hover:bg-white/5"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative bg-[#18191E] border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300"
          >
            <div className="aspect-4/3 relative overflow-hidden bg-black/40">
              <img
                src={item.src}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-display font-bold text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-[#FAF8F5]/80 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom WhatsApp Order CTA */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#18191E] border border-white/10 text-center space-y-4">
        <h3 className="font-display font-bold text-xl text-white">
          Craving What You See?
        </h3>
        <p className="text-sm text-[#FAF8F5]/70 max-w-md mx-auto">
          Send us a message on WhatsApp to inquire about today's fresh pizza and pasta options in Khanewal.
        </p>
        <a
          href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask on WhatsApp (+92 327 4414466)</span>
        </a>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <Lightbox
          isOpen={!!activeImage}
          onClose={() => setActiveImage(null)}
          imageUrl={activeImage.src}
          title={activeImage.title}
          caption={activeImage.caption}
        />
      )}

    </div>
  );
};
