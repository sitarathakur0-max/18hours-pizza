import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Phone, HelpCircle } from "lucide-react";
import { FAQS, RESTAURANT_INFO, getWhatsAppUrl } from "../data/restaurantData";

export const FAQPage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-location");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
          Helpful Answers
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed max-w-2xl mx-auto">
          Common inquiries about our location, operating hours, pizza, pasta, takeaway pickup, and ordering through WhatsApp.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-[#1A1B22] border-[#F59E0B]/40 shadow-lg"
                  : "bg-[#18191E] border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-display font-bold text-base sm:text-lg text-white">
                  {faq.question}
                </span>
                <span className="text-[#F59E0B] shrink-0 p-1 rounded-lg bg-white/5">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed border-t border-white/5">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact Box if Question Not Answered */}
      <div className="p-8 rounded-3xl bg-[#18191E] border border-white/10 text-center space-y-4">
        <div className="w-10 h-10 rounded-full bg-[#E11D48]/10 text-[#E11D48] mx-auto flex items-center justify-center">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h3 className="font-display font-bold text-xl text-white">
          Still Have a Question?
        </h3>
        <p className="text-sm text-[#FAF8F5]/70 max-w-md mx-auto">
          Our team is available on WhatsApp and phone to assist you with special requests, today's menu, and directions.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={getWhatsAppUrl("Hello 18 Hours Pizza & Cafe, I have a question about...")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+92 327 4414466)</span>
          </a>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="px-5 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#F59E0B]" />
            <span>Call {RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>

    </div>
  );
};
