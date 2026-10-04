'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, ArrowRight, Sun } from 'lucide-react';
import { DUNECRAFT_BRAND } from '@/data/dunecraftData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedExpId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedExpId }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    safariPackage: 'Red Dune Sunset Safari & Bedouin Camp',
    guestCount: '2',
    pickupHotel: '',
    preferredDate: '',
    notes: ''
  });

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
        className="max-w-xl w-full rounded-3xl bg-[#2A1405] border border-amber-500/30 p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden font-sans"
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
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-black">
                <Sun className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                DUNECRAFT RESERVATION DESK
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2 font-sans">Book Your Desert Safari</h3>
            <p className="text-xs text-gray-300 mb-6 font-light">
              Submit your trip details below for instant pickup confirmation and package voucher.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marco Rossi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
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
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">Safari Experience</label>
                  <select
                    value={formData.safariPackage}
                    onChange={(e) => setFormData({ ...formData, safariPackage: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                  >
                    <option value="Red Dune Sunset Safari & Bedouin Camp" className="bg-[#2A1405]">Red Dune Sunset Safari (AED 320)</option>
                    <option value="Private VIP Royal Desert Safari" className="bg-[#2A1405]">Private VIP Royal Safari (AED 1,450)</option>
                    <option value="Overnight Glamping Safari" className="bg-[#2A1405]">Overnight Glamping Safari (AED 750)</option>
                    <option value="Extreme Dune Quad Biking" className="bg-[#2A1405]">Extreme Dune Quad Biking (AED 450)</option>
                    <option value="Sunrise Camel Trek" className="bg-[#2A1405]">Sunrise Oasis Camel Trek (AED 280)</option>
                    <option value="Corporate Desert Event" className="bg-[#2A1405]">Corporate Event &amp; Camp Buyout</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">Preferred Safari Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-300 mb-1">Hotel Pickup Address / Special Requests</label>
                <input
                  type="text"
                  placeholder="e.g. Atlantis The Palm Hotel / Dubai Marina / 4 guests"
                  value={formData.pickupHotel}
                  onChange={(e) => setFormData({ ...formData, pickupHotel: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-medium focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-2"
              >
                <span>CONFIRM SAFARI RESERVATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-3 text-center">
                <span className="text-[11px] text-gray-400 block mb-2 font-light">Need instant booking confirmation?</span>
                <a
                  href={DUNECRAFT_BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Safari Concierge Directly</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-sans">Safari Booking Received!</h3>
            <p className="text-sm text-gray-300 font-light max-w-sm mx-auto">
              Thank you. Our safari dispatch desk will send your 4x4 Land Cruiser driver pickup details via WhatsApp shortly.
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