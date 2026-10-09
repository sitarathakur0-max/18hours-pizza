import React, { useState } from "react";
import { MessageCircle, Phone, Send, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { RESTAURANT_INFO, getWhatsAppUrl } from "../data/restaurantData";

export const OrderInquiryPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "Special Pizza",
    details: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [preparedText, setPreparedText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formatted = `Hello 18 Hours Pizza & Cafe!
My Name: ${formData.name || "Customer"}
Phone: ${formData.phone || "Not provided"}
Interested In: ${formData.category}
Order / Inquiry Details: ${formData.details || "General inquiry"}
Additional Note: ${formData.message || "Please confirm availability and prices."}`;

    setPreparedText(formatted);
    setSubmitted(true);
  };

  const handleLaunchWhatsApp = () => {
    const url = getWhatsAppUrl(preparedText);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">
          Fast & Convenient Ordering
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          Hungry? Let's Get Your Order Started.
        </h1>
        <p className="text-base text-[#FAF8F5]/80 leading-relaxed max-w-2xl mx-auto">
          Contact 18 Hours Pizza & Cafe in Khanewal directly. Inquire about today's pizza options, pasta, or schedule a fresh takeaway pickup.
        </p>
      </div>

      {/* Two Direct Quick Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* WhatsApp Card */}
        <div className="bg-[#18191E] border border-[#E11D48]/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-4 shadow-xl">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h2 className="font-display font-bold text-xl text-white">
              WhatsApp Order / Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70">
              Message us directly for the fastest response on menu availability, sizes, and pickup timing.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(RESTAURANT_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+92 327 4414466)</span>
          </a>
        </div>

        {/* Phone Card */}
        <div className="bg-[#18191E] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-4 shadow-xl">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h2 className="font-display font-bold text-xl text-white">
              Call The Restaurant
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70">
              Speak directly with our team at the counter to confirm your order and get your food freshly prepped.
            </p>
          </div>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="w-full py-3.5 px-4 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#F59E0B]" />
            <span>Call {RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Structured Order / Inquiry Form */}
      <div className="bg-[#18191E] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div className="mb-8 space-y-2">
          <h2 className="font-display font-black text-2xl text-white">
            Prepare Your Order Inquiry
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/70">
            Fill out the details below to structure your inquiry for our kitchen staff.
          </p>
        </div>

        {submitted ? (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 space-y-3">
              <div className="flex items-center gap-2 font-bold text-base text-emerald-400">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Inquiry Prepared Successfully!</span>
              </div>
              <p className="text-sm leading-relaxed text-emerald-100/90 font-medium">
                Your inquiry has been prepared. Please contact the restaurant through WhatsApp or phone to confirm availability and order details.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2 font-mono text-xs text-[#FAF8F5]/80 whitespace-pre-line">
              {preparedText}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleLaunchWhatsApp}
                className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] rounded-xl hover:opacity-95 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send This Inquiry on WhatsApp Now</span>
              </button>

              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 rounded-xl transition-colors cursor-pointer"
              >
                Edit Inquiry Form
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]/70">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Usman / Sarah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#E11D48] focus:outline-none text-white text-sm"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]/70">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#E11D48] focus:outline-none text-white text-sm"
                />
              </div>
            </div>

            {/* Food Category */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]/70">
                Food Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#121316] border border-white/10 focus:border-[#E11D48] focus:outline-none text-white text-sm cursor-pointer"
              >
                <option value="Special Pizza">Special Pizza (Customer Highlight)</option>
                <option value="Fresh Pizza">Pizza Options & Sizes</option>
                <option value="Special Pasta">Special Pasta (Customer Highlight)</option>
                <option value="Pasta">Pasta Options</option>
                <option value="Cafe Items">Cafe & Other Food Selections</option>
                <option value="General Inquiry">General Question / Opening Hours</option>
              </select>
            </div>

            {/* Order / Inquiry Details */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]/70">
                Order / Inquiry Details
              </label>
              <input
                type="text"
                placeholder="e.g. Asking about Special Pizza takeaway for 3 people"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#E11D48] focus:outline-none text-white text-sm"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]/70">
                Additional Message / Notes
              </label>
              <textarea
                rows={3}
                placeholder="Any questions about timing, spice level, or takeaway pickup..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#E11D48] focus:outline-none text-white text-sm"
              ></textarea>
            </div>

            {/* Notice regarding order confirmation */}
            <div className="flex items-start gap-2.5 p-4 rounded-xl bg-white/5 text-xs text-[#FAF8F5]/70">
              <AlertCircle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
              <span>
                Please note: Submitting this form prepares your inquiry message. To confirm active stock, preparation time, and finalize your order, connect directly via WhatsApp or phone.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#E11D48] to-[#EA580C] hover:opacity-95 shadow-lg shadow-red-950/40 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Prepare Inquiry & Review</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
};
