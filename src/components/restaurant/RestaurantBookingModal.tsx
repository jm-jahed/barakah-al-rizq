'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Utensils, MessageSquare, CheckCircle2, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTAURANT_BRAND_INFO as RESTAURANT_INFO } from '@/data/restaurantData';

interface RestaurantBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    date?: string;
    time?: string;
    guests?: string;
    diningType?: string;
  };
}

export const RestaurantBookingModal: React.FC<RestaurantBookingModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState({
    date: initialData?.date || '2026-09-02',
    time: initialData?.time || '20:00',
    guests: initialData?.guests || '2 Guests',
    preference: initialData?.diningType || 'Main Dining Room',
    name: '',
    phone: '',
    email: '',
    specialRequest: '',
  });

  useEffect(() => {
    if (initialData) {
      setBookingData((prev) => ({
        ...prev,
        date: initialData.date || prev.date,
        time: initialData.time || prev.time,
        guests: initialData.guests || prev.guests,
        preference: initialData.diningType || prev.preference,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch (err) {}
  };

  const whatsappMessage = encodeURIComponent(
    `Hello L'Étoile Atelier Concierge,\n\nI would like to confirm a table reservation:\n\n• Date: ${bookingData.date}\n• Time: ${bookingData.time}\n• Party Size: ${bookingData.guests}\n• Seating Area: ${bookingData.preference}\n• Name: ${bookingData.name || 'Guest'}\n• Phone: ${bookingData.phone || 'N/A'}\n• Special Request: ${bookingData.specialRequest || 'None'}\n\nPlease confirm availability.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#14100C] border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  Table Reservation Wizard
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2 font-serif">
                Reserve Your Dining Experience
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Step 0{step} of 05 — Customize your dining details.
              </p>

              {/* Progress Bar */}
              <div className="flex gap-1.5 mb-8">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      s <= step ? 'bg-amber-400' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Choose Date */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <label className="block text-xs font-bold text-gray-300 mb-2">
                      Step 01: Choose Preferred Date
                    </label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium text-sm focus:border-amber-400 outline-none cursor-pointer"
                    />
                    <span className="text-[11px] font-mono text-gray-400 block">
                      Advance booking recommended for weekend dinner seatings.
                    </span>
                  </motion.div>
                )}

                {/* Step 2: Choose Time */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <label className="block text-xs font-bold text-gray-300 mb-2">
                      Step 02: Choose Seating Time Slot
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, time: t })}
                          className={`p-3.5 rounded-xl border text-xs font-bold font-mono transition-all ${
                            bookingData.time === t
                              ? 'bg-amber-500 text-black border-amber-400'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-amber-500/40'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Guests */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <label className="block text-xs font-bold text-gray-300 mb-2">
                      Step 03: Select Number of Guests
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {['1 Guest', '2 Guests', '3 Guests', '4 Guests', '6 Guests', '8+ Guests'].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, guests: g })}
                          className={`p-3.5 rounded-xl border text-xs font-bold transition-all ${
                            bookingData.guests === g
                              ? 'bg-amber-500 text-black border-amber-400'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-amber-500/40'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Dining Preference */}
                {step === 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <label className="block text-xs font-bold text-gray-300 mb-2">
                      Step 04: Select Dining Atmosphere / Preference
                    </label>
                    <div className="space-y-2.5">
                      {[
                        { id: 'Main Dining Room', desc: 'Velvet seating & acoustic piano ambient lounge' },
                        { id: 'Sunset Terrace', desc: 'Al fresco rooftop pergola with panoramic skyline views' },
                        { id: 'Chef’s Table Counter', desc: 'Front-row live kitchen counter seating' },
                        { id: 'Private Glasshouse Pavilion', desc: 'Exclusive climate-controlled VIP dome' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, preference: item.id })}
                          className={`w-full p-4 rounded-2xl border text-left transition-all ${
                            bookingData.preference === item.id
                              ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:border-amber-500/30'
                          }`}
                        >
                          <span className="text-xs font-bold block">{item.id}</span>
                          <span className="text-[11px] text-gray-400 block mt-0.5">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Customer Details */}
                {step === 5 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <label className="block text-xs font-bold text-gray-300">
                      Step 05: Guest Contact Information
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-gray-400 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={bookingData.name}
                          onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                          placeholder="Lord / Lady Harrison"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-amber-400 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-gray-400 mb-1">WhatsApp / Phone *</label>
                        <input
                          type="text"
                          required
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                          placeholder="+971 50 000 0000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-amber-400 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        placeholder="guest@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-amber-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-400 mb-1">Special Requests / Allergies</label>
                      <textarea
                        rows={2}
                        value={bookingData.specialRequest}
                        onChange={(e) => setBookingData({ ...bookingData, specialRequest: e.target.value })}
                        placeholder="Anniversary cake inscription, quiet booth, allergies..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:border-amber-400 outline-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Footer Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-4 py-2 rounded-xl bg-white/5 text-xs text-gray-400 hover:text-white"
                    >
                      ← Previous
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20"
                    >
                      Next Step →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20"
                    >
                      Confirm Reservation Request →
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            /* Success Screen */
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-extrabold text-white mb-2 font-serif">
                  Reservation Request Received
                </h4>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Thank you, <span className="text-amber-300 font-bold">{bookingData.name || 'Guest'}</span>. Your reservation request for <span className="text-amber-300 font-bold">{bookingData.date}</span> at <span className="text-amber-300 font-bold">{bookingData.time}</span> ({bookingData.guests}) has been logged.
                </p>
              </div>

              {/* Demo Notice Disclaimer */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                <span className="font-bold block mb-1">Demo Reservation — No real booking has been created.</span>
                This is a sample front-end interactive reservation flow built for the agency portfolio project showcase.
              </div>

              {/* Continue on WhatsApp CTA */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/971500000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Continue Reservation on WhatsApp →</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-xl bg-white/5 text-xs text-gray-400 hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
