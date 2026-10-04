'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Award, 
  Globe2, 
  Calendar, 
  ShieldCheck, 
  Star, 
  Clock, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Veterinarian } from '@/data/petCareData';

interface VeterinarianProfileModalProps {
  vet: Veterinarian | null;
  onClose: () => void;
  onOpenBooking: (vetId?: string) => void;
}

export const VeterinarianProfileModal: React.FC<VeterinarianProfileModalProps> = ({
  vet,
  onClose,
  onOpenBooking,
}) => {
  if (!vet) return null;

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
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Row: Doctor Info & Portrait */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-white/10 pb-6">
            <img
              src={vet.image}
              alt={vet.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-2 border-emerald-400/40 shadow-xl shrink-0"
            />
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                {vet.specialty}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                {vet.name}
              </h3>
              <p className="text-xs text-slate-300 font-mono">
                {vet.title}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-3 pt-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <strong>{vet.rating}</strong> ({vet.reviewsCount} verified reviews)
                </span>
                <span>•</span>
                <span className="text-emerald-300 font-bold">{vet.experience}</span>
              </div>
            </div>
          </div>

          {/* Bio Description */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
              Clinical Biography & Practice:
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {vet.bio}
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
              Board Accreditations & Licenses:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {vet.certifications.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Hospital Availability */}
          <div className="p-4 rounded-2xl bg-[#090F15] border border-white/10 space-y-2 text-xs font-mono">
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span className="text-slate-400">Spoken Languages:</span>
              <span className="text-white font-bold">{vet.languages.join(', ')}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span className="text-slate-400">Hospital Rotation:</span>
              <span className="text-emerald-300 font-bold">{vet.availability}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-slate-400">Consultation Standard Fee:</span>
              <span className="text-emerald-400 font-black text-sm">AED {vet.consultationFee}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking(vet.id);
              }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-extrabold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment with {vet.name.split(' ')[1]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VeterinarianProfileModal;
