import React from "react";
import { X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#1A1B20] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video sm:aspect-16/10 bg-black flex items-center justify-center overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover sm:object-contain"
          />
        </div>

        <div className="p-4 sm:p-6 bg-[#16171B] border-t border-white/10">
          <h3 className="font-display font-bold text-lg text-white">{title}</h3>
          {caption && <p className="text-sm text-[#FAF8F5]/70 mt-1">{caption}</p>}
        </div>
      </div>
    </div>
  );
};
