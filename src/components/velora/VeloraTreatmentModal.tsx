'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle, Heart } from 'lucide-react';
import { WellnessRitual } from '@/data/veloraData';

interface VeloraTreatmentModalProps {
  ritual: WellnessRitual | null;
  onClose: () => void;
  onBook: (ritual: WellnessRitual) => void;
}

export const VeloraTreatmentModal: React.FC<VeloraTreatmentModalProps> = ({
  ritual,
  onClose,
  onBook,
}) => {
  if (!ritual) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#111613] border border-[#26332b] text-[#f5f2eb] shadow-2xl overflow-hidden my-8"
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#17201a] via-[#121614] to-[#0d110f] border-b border-[#202b24]">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#1e2722] hover:bg-[#2a3730] text-[#9c9689] hover:text-[#fdfbf7] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 text-xs text-[#c5a059] uppercase tracking-[0.25em] mb-2 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{ritual.category} · {ritual.intention}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#fdfbf7] mb-1">
              {ritual.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8478] italic">
              {ritual.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-xs text-[#ded9ce]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1b2520] border border-[#2c3a32]">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{ritual.durationLabel}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1b2520] border border-[#2c3a32]">
                <span className="text-[#c5a059] font-medium">AED {ritual.priceAED.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1b2520] border border-[#2c3a32]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Private Thermal Access Included</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#232d27]">
            {/* Overview */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium mb-2">
                Ritual Philosophy
              </h3>
              <p className="text-sm text-[#b8b2a5] font-light leading-relaxed">
                {ritual.description}
              </p>
            </div>

            {/* Ideal For */}
            <div className="p-4 rounded-xl bg-[#161d19] border border-[#243029]">
              <h4 className="text-[11px] uppercase tracking-wider text-[#8f8a7d] mb-1 font-medium">
                Ideal For & Indications
              </h4>
              <p className="text-xs sm:text-sm text-[#ded9ce] font-light">
                {ritual.idealFor}
              </p>
            </div>

            {/* What to Expect */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium mb-3">
                What To Expect
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ritual.whatToExpect.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#a9a497] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prep & Aftercare Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0f1311] border border-[#1d2621]">
                <h4 className="text-[11px] uppercase tracking-wider text-[#c5a059] font-medium mb-1">
                  Preparation
                </h4>
                <p className="text-xs text-[#9d978a] font-light leading-relaxed">
                  {ritual.preparation}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0f1311] border border-[#1d2621]">
                <h4 className="text-[11px] uppercase tracking-wider text-[#c5a059] font-medium mb-1">
                  Aftercare & Integration
                </h4>
                <p className="text-xs text-[#9d978a] font-light leading-relaxed">
                  {ritual.aftercare}
                </p>
              </div>
            </div>

            {/* Conceptual Notice */}
            <div className="flex items-start gap-2 p-3 rounded-lg bg-[#141916] border border-[#212b25] text-[11px] text-[#787368]">
              <AlertCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
              <span>
                VELORA experiences are non-clinical restorative and relaxation journeys. Fictional demo portfolio showcase.
              </span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-[#0e1210] border-t border-[#1f2923] flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#787368]">Total Investment</div>
              <div className="text-xl font-serif text-[#fdfbf7]">
                AED {ritual.priceAED.toLocaleString()}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-[#18201c] hover:bg-[#232c27] text-[#ded9ce] text-xs uppercase tracking-wider border border-[#28352e] transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBook(ritual);
                }}
                className="px-6 py-2.5 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 shadow-lg"
              >
                <span>Reserve Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
