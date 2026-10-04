'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, ArrowRight, Shield } from 'lucide-react';
import { LUXSHIELD_BRAND } from '@/data/luxshieldData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackageId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedPackageId }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    makeModel: '',
    packageInterested: 'signature',
    preferredDate: '',
    notes: ''
  });

  useEffect(() => {
    if (selectedPackageId) {
      setFormData(prev => ({ ...prev, packageInterested: selectedPackageId }));
    }
  }, [selectedPackageId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-xl w-full rounded-3xl bg-[#14161A] border border-blue-500/30 p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden font-sans"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                LUXSHIELD DETAILING APPOINTMENT
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2">Book Your Detailing Appointment</h3>
            <p className="text-xs text-gray-300 mb-6 font-light">
              Fill out your vehicle details to reserve your climate-controlled studio slot in Dubai or Abu Dhabi.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rashid Al Nuaimi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">UAE Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-300 mb-1">Vehicle Make, Model &amp; Year *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2023 Porsche 911 GT3 / Range Rover Vogue"
                  value={formData.makeModel}
                  onChange={(e) => setFormData({ ...formData, makeModel: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">Package Interested In</label>
                  <select
                    value={formData.packageInterested}
                    onChange={(e) => setFormData({ ...formData, packageInterested: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                  >
                    <option value="essential" className="bg-[#14161A]">Essential (From AED 1,200 — 2-Yr)</option>
                    <option value="signature" className="bg-[#14161A]">Signature (From AED 2,800 — 5-Yr)</option>
                    <option value="ultimate" className="bg-[#14161A]">Ultimate (From AED 7,500 — 7-Yr)</option>
                    <option value="custom" className="bg-[#14161A]">Custom Detailing &amp; PPF Query</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-2"
              >
                <span>BOOK MY DETAILING APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-3 text-center">
                <span className="text-[11px] text-gray-400 block mb-2 font-light">Prefer instant answers?</span>
                <a
                  href={LUXSHIELD_BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Studio Concierge Directly Instead</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Appointment Request Received!</h3>
            <p className="text-sm text-gray-300 font-light max-w-sm mx-auto">
              Thank you. A LUXSHIELD studio concierge will contact you shortly to confirm your booking and package requirements.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-mono text-xs font-bold hover:bg-white/20 transition-all"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};