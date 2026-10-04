'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MapPin, 
  Plane, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  Building2, 
  Clock 
} from 'lucide-react';
import { Destination } from '@/data/travelData';

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
  onOpenInquiry: (destContext?: string) => void;
  onToggleWishlist: (destId: string) => void;
  isWishlisted: boolean;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onOpenInquiry,
  onToggleWishlist,
  isWishlisted,
}) => {
  if (!destination) return null;

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
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1018] via-[#0C1018]/50 to-transparent" />

            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() => onToggleWishlist(destination.id)}
                className={`p-2.5 rounded-full backdrop-blur-md border transition-colors ${
                  isWishlisted ? 'bg-rose-500 text-white border-rose-400' : 'bg-black/60 text-slate-300 hover:text-rose-400 border-white/10'
                }`}
                aria-label="Toggle Wishlist"
              >
                <Heart className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2.5 rounded-full bg-black/60 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Close Destination Details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute bottom-4 inset-x-6">
              <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
                From AED {destination.priceFromAED.toLocaleString()}
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white leading-tight mt-1">
                {destination.name}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            
            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Country</span>
                <span className="text-white font-bold">{destination.country}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Flight from DXB</span>
                <span className="text-amber-300 font-bold">{destination.flightTimeFromDXB}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Best Season</span>
                <span className="text-slate-300 font-bold">{destination.bestSeason.split(' ')[0]}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">UAE Visa</span>
                <span className="text-emerald-300 font-bold">{destination.visaForUAEResidents.split(' ')[0]}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {destination.description}
            </p>

            {/* Signature Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                Signature Experiences Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {destination.highlights.map((h, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Luxury Partner Hotels */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Palaces & Ultra-Luxury Partner Resorts:
              </h4>
              <div className="flex flex-wrap gap-2">
                {destination.luxuryHotels.map((h, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-[#121722] border border-amber-500/20 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-[#090C12] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              <span className="text-white font-bold">AED {destination.priceFromAED.toLocaleString()}</span> (Starting package rate per guest)
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenInquiry(`Inquiry for Destination: ${destination.name}`);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <span>Request Custom Proposal in AED</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
