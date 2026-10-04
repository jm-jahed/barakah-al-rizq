'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  Star, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Crown
} from 'lucide-react';
import { LuxuryHotel } from '@/data/travelData';

interface HotelDetailModalProps {
  hotel: LuxuryHotel | null;
  onClose: () => void;
  onOpenInquiry: (hotelContext?: string) => void;
}

export const HotelDetailModal: React.FC<HotelDetailModalProps> = ({
  hotel,
  onClose,
  onOpenInquiry,
}) => {
  if (!hotel) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0C1018] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-slate-200"
        >
          {/* Header Banner */}
          <div className="relative aspect-[21/9] w-full bg-slate-950 overflow-hidden">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1018] via-[#0C1018]/60 to-transparent" />

            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Close Hotel Details"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="absolute bottom-4 inset-x-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-mono text-xs font-black">
                  AED {hotel.pricePerNightAED.toLocaleString()} / night
                </span>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/80 text-amber-400 text-xs font-mono font-bold">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>{hotel.rating}</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {hotel.name}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                {hotel.roomType}
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {hotel.signatureExperience}
              </p>
            </div>

            {/* Exclusive Perks */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Aurelia Exclusive Perks:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {hotel.exclusivePerks.map((perk, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Suite Amenities:
              </h4>
              <div className="flex flex-wrap gap-2">
                {hotel.amenities.map((a, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-300 text-xs font-mono">
                    {a}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-6 bg-[#090C12] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              <span className="text-white font-bold">AED {hotel.pricePerNightAED.toLocaleString()}</span> / night (Taxes included)
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenInquiry(`Suite Reservation: ${hotel.name} - ${hotel.roomType} (AED ${hotel.pricePerNightAED.toLocaleString()}/night)`);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <span>Book Suite with VIP Perks</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
