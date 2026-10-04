'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-[#12100F] border border-red-500/30 p-8 rounded-3xl max-w-md w-full relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>

          {!submitted ? (
            <div>
              <span className="text-[10px] font-mono text-red-400 uppercase block mb-1">COMPLIMENTARY DAY PASS</span>
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Book Your Free Trial</h3>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <input required type="text" placeholder="Full Name" className="w-full bg-[#090807] border border-red-500/20 rounded-xl p-3 text-xs font-mono text-white" />
                <input required type="email" placeholder="Email Address" className="w-full bg-[#090807] border border-red-500/20 rounded-xl p-3 text-xs font-mono text-white" />
                <input required type="tel" placeholder="UAE Phone / WhatsApp" className="w-full bg-[#090807] border border-red-500/20 rounded-xl p-3 text-xs font-mono text-white" />
                <button type="submit" className="w-full py-3 bg-red-600 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl">
                  Confirm Free Trial Request →
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <span className="text-3xl block mb-2">🏋️</span>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Trial Request Received!</h3>
              <p className="text-xs text-gray-400 font-mono mb-6">Our Dubai desk team will contact you on WhatsApp within 2 hours to confirm your complimentary VIP day pass.</p>
              <button onClick={onClose} className="px-6 py-2.5 bg-red-600 text-white font-mono text-xs font-bold uppercase rounded-xl">Close</button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
