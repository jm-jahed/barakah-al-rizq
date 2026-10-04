'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Star, MapPin, CheckCircle2, ShieldCheck, Palmtree, ArrowRight } from 'lucide-react';
import { OasiraResort } from '@/data/oasiraData';

interface ResortDetailProps {
  resort: OasiraResort | null;
  onClose: () => void;
  onBookResort: (resort: OasiraResort) => void;
}

export const ResortDetail: React.FC<ResortDetailProps> = ({
  resort,
  onClose,
  onBookResort,
}) => {
  if (!resort) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0F382C] border border-stone-700 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative font-sans text-stone-100 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-2xl bg-[#0A2920] border border-stone-700 text-stone-300 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Image */}
        <div className="relative h-72 rounded-2xl overflow-hidden bg-[#0A2920] mb-6">
          <img src={resort.image} alt={resort.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C] via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-[#0A2920]/90 backdrop-blur-md text-[#D4B382] font-bold border border-[#D4B382]/40">
              {resort.emirate} • {resort.type} Resort
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0A2920]/90 backdrop-blur-md text-white font-bold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#D4B382] text-[#D4B382]" />
              <span>{resort.rating} ({resort.reviewsCount} reviews)</span>
            </span>
          </div>
        </div>

        {/* Header Info */}
        <div className="space-y-4 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest block mb-1">
              PROPERTIES SPECIFICATION
            </span>
            <h3 className="text-3xl font-serif font-bold text-[#FAF6EE]">{resort.name}</h3>
            <p className="text-xs text-stone-300 font-mono mt-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4B382]" />
              <span>{resort.locationDetail}</span>
            </p>
          </div>

          <p className="text-sm text-stone-300 font-light leading-relaxed">
            {resort.description}
          </p>
        </div>

        {/* Amenities List */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest mb-3">
            RESORT FEATURES & HOSPITALITY AMENITIES
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs">
            {resort.amenities.map((amenity) => (
              <div key={amenity} className="p-3 rounded-xl bg-[#0A2920] border border-stone-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4B382]" />
                <span className="text-stone-200">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Footer */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div>
            <span className="text-[10px] text-stone-400 block uppercase">STARTING RATE</span>
            <span className="text-2xl font-bold text-[#D4B382]">AED {resort.startingPriceAED} <span className="text-xs text-stone-400 font-normal">/ night</span></span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookResort(resort);
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4B382] via-[#C59B63] to-[#D4AF37] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
          >
            <span>Proceed to Reservation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
