'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Users, MapPin, Check, Flame, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { EmberwildStay } from '@/data/emberwildData';

interface EmberwildStayModalProps {
  stay: EmberwildStay | null;
  onClose: () => void;
  onReserve: (stay: EmberwildStay) => void;
}

export const EmberwildStayModal: React.FC<EmberwildStayModalProps> = ({
  stay,
  onClose,
  onReserve
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!stay) return null;

  const galleryImages = stay.gallery.length > 0 ? stay.gallery : [stay.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-stone-950 border border-stone-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-stone-100 my-auto relative"
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900/90 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Hero Section */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-stone-900 overflow-hidden">
          <img
            src={galleryImages[activeImageIdx]}
            alt={stay.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30" />

          {/* Badges on Gallery */}
          <div className="absolute bottom-4 left-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-stone-950/85 backdrop-blur-md text-amber-400 font-mono text-xs border border-stone-800">
              {stay.destinationType}
            </span>
            <span className="px-3 py-1 rounded-full bg-stone-950/85 backdrop-blur-md text-stone-200 font-mono text-xs border border-stone-800">
              {stay.stayType}
            </span>
            <span className="px-3 py-1 rounded-full bg-stone-950/85 backdrop-blur-md text-emerald-400 font-mono text-xs border border-stone-800">
              {stay.elevation}
            </span>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {galleryImages.length > 1 && (
          <div className="flex items-center gap-2 p-4 bg-stone-900/40 border-b border-stone-800/80 overflow-x-auto">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  activeImageIdx === idx ? 'border-amber-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Main Details Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Header & Pricing */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>{stay.location}</span>
                <span className="text-stone-600">•</span>
                <span>{stay.coordinates}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-stone-100">{stay.name}</h2>
              <div className="flex items-center gap-2 mt-2 text-xs text-stone-400">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-mono font-bold ml-1 text-stone-200">{stay.rating}</span>
                </div>
                <span>({stay.reviewsCount} verified guest reviews)</span>
                <span>•</span>
                <span>Max {stay.capacity} Guests</span>
                <span>•</span>
                <span>{stay.bedrooms} Bedroom · {stay.bathrooms} Bath</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-right shrink-0">
              <div className="text-stone-500 text-[10px] uppercase font-mono">Nightly Rate</div>
              <div className="text-3xl font-mono font-medium text-amber-400">
                AED {stay.pricePerNightAED.toLocaleString()}
              </div>
              <div className="text-[11px] text-stone-400 mt-0.5">Includes taxes & demo fees</div>
            </div>
          </div>

          {/* Long Description */}
          <div className="space-y-4 text-stone-300 text-sm leading-relaxed font-light">
            <p>{stay.longDescription}</p>
          </div>

          {/* Panoramic View Feature Callout */}
          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-stone-400 uppercase font-mono">Vantage Horizon</div>
                <div className="text-stone-100 font-medium text-sm">{stay.features.panoramicView}</div>
              </div>
            </div>
            <div className="text-xs font-mono text-emerald-400 hidden sm:block">
              100% Acoustic Privacy
            </div>
          </div>

          {/* Amenities Grid */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-widest text-amber-400 mb-4">
              Included Retreat Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stay.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/80 flex items-center gap-3 text-xs text-stone-300"
                >
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rules & Good to know */}
          <div className="p-5 rounded-2xl bg-stone-900/30 border border-stone-800/60 text-xs text-stone-400 space-y-2">
            <div className="font-mono text-stone-300 uppercase">Wilderness Guidelines</div>
            <p>• Check-in: 3:00 PM · Check-out: 11:00 AM (Early luggage drop available)</p>
            <p>• Quiet hours: 10:00 PM – 7:00 AM to preserve acoustic wildlife tranquility.</p>
            <p>• Firepit safety: Only firewood provided by EMBERWILD is permitted to protect desert flora.</p>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-500 font-mono">
              Demo Reservation · No real payment collected
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-medium transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onReserve(stay);
                }}
                className="w-1/2 sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-950/40"
              >
                <span>Reserve This Stay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
