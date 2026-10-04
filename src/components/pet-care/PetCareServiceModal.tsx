'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, ShieldCheck, ArrowRight, Calendar, AlertCircle } from 'lucide-react';
import { VetService } from '@/data/petCareData';

interface PetCareServiceModalProps {
  item: VetService | null;
  onClose: () => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const PetCareServiceModal: React.FC<PetCareServiceModalProps> = ({
  item,
  onClose,
  onOpenBooking,
}) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#0E1720] border border-emerald-500/30 shadow-2xl p-6 sm:p-8 space-y-6 text-white my-8 overflow-hidden backdrop-blur-xl"
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold uppercase">
                {item.category} SPECIALTY
              </span>
              <span className="text-xs font-mono text-slate-400">
                Duration: {item.duration}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Inclusions */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <span className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider block">
              What Is Included In This Procedure:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.included.map((inc, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prep & Aftercare */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1">
              <span className="text-amber-300 font-bold block text-[10px] uppercase">Pre-Visit Preparation:</span>
              <p className="text-slate-300 font-sans text-xs leading-relaxed">{item.preparation}</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
              <span className="text-emerald-300 font-bold block text-[10px] uppercase">Post-Care Protocol:</span>
              <p className="text-slate-300 font-sans text-xs leading-relaxed">{item.aftercare}</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">FEE STANDARD</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">
                AED {item.price}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking(item.id);
              }}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PetCareServiceModal;
