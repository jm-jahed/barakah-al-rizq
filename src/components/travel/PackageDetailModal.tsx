'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Plane, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Crown, 
  Clock, 
  Utensils 
} from 'lucide-react';
import { TravelPackage } from '@/data/travelData';

interface PackageDetailModalProps {
  packageData: TravelPackage | null;
  onClose: () => void;
  onOpenInquiry: (packageContext?: string) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  packageData,
  onClose,
  onOpenInquiry,
}) => {
  if (!packageData) return null;

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
              src={packageData.image}
              alt={packageData.title}
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1018] via-[#0C1018]/60 to-transparent" />

            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Close Package Details"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="absolute bottom-4 inset-x-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-mono text-xs font-black">
                  AED {packageData.priceFromAED.toLocaleString()}
                </span>
                <span className="px-2.5 py-0.5 rounded-lg bg-black/80 border border-white/10 text-xs font-mono text-slate-300">
                  {packageData.durationNights} Nights
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {packageData.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            
            {/* Flight & Hotel Overview Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Aviation Cabin</span>
                <span className="text-amber-300 font-bold">{packageData.flightClass}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Resort / Palace Category</span>
                <span className="text-white font-bold">{packageData.hotelCategory}</span>
              </div>
            </div>

            {/* Day by Day Itinerary */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                Day-by-Day Curated Itinerary:
              </h3>

              <div className="space-y-3">
                {packageData.itinerary.map((day) => (
                  <div key={day.day} className="p-4 rounded-2xl bg-[#0F141E] border border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                          {day.day}
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          {day.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        {day.meals}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed pl-8">
                      {day.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Complete Sovereign Inclusions:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {packageData.included.map((inc, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-6 bg-[#090C12] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              <span className="text-white font-bold">AED {packageData.priceFromAED.toLocaleString()}</span> Total all-inclusive package
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenInquiry(`Package Booking Request: ${packageData.title} (AED ${packageData.priceFromAED.toLocaleString()})`);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <span>Reserve Itinerary in AED</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
