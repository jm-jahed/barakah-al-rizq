'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_BRAND_INFO } from '@/data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [date, setDate] = useState<string>('2026-08-31');
  const [timeSlot, setTimeSlot] = useState<string>('19:30');
  const [guests, setGuests] = useState<number>(2);
  const [seatingArea, setSeatingArea] = useState<string>('DIFC Skyline Terrace');
  const [guestName, setGuestName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const lunchSlots = ['12:00', '12:30', '13:00', '13:30', '14:00'];
  const dinnerSlots = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppReservation = () => {
    const text = `Hello Al-Majlis Restaurant,\nI am requesting a table reservation:\nGuest: ${guestName} (${phone})\nDate: ${date}\nTime: ${timeSlot}\nGuests: ${guests} People\nSeating: ${seatingArea}\nNotes: ${specialRequest}`;
    window.open(`https://wa.me/971500000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0E131A] border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl my-auto p-6 sm:p-8 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-gray-300 hover:text-white z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 pb-6 border-b border-white/10 shrink-0">
            <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                TABLE RESERVATION PORTAL
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-serif">Reserve Your Dining Experience</h3>
            </div>
          </div>

          {/* Body */}
          <div className="py-6 space-y-6 overflow-y-auto flex-1 pr-1">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#161D27] border border-emerald-500/40 text-center space-y-4 shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-white font-serif">Demo Reservation Request Sent</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto font-sans">
                  Demo Reservation Request — No real table reservation has been created. Thank you for testing our agency portfolio showcase!
                </p>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-left text-xs font-mono space-y-1 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Guest Name:</span>
                    <span className="text-white font-bold">{guestName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date & Time:</span>
                    <span className="text-amber-300 font-bold">{date} @ {timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Guests & Seating:</span>
                    <span className="text-emerald-400 font-bold">{guests} Guests ({seatingArea})</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/15"
                  >
                    Done & Close
                  </button>

                  <button
                    onClick={handleWhatsAppReservation}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" /> Send Request to WhatsApp
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Step 1: Date & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1">01. Select Date</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#161D26] border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1">02. Number of Guests</label>
                    <div className="grid grid-cols-5 gap-1.5">
                      {[1, 2, 4, 6, 8].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGuests(g)}
                          className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                            guests === g
                              ? 'bg-amber-500 text-black border-amber-400'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 2: Time Slots */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 font-bold uppercase">
                    03. Select Time Slot (Sample Availability)
                  </label>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-amber-400 block font-bold">LUNCH SLOTS:</span>
                    <div className="flex flex-wrap gap-2">
                      {lunchSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                            timeSlot === slot
                              ? 'bg-amber-500 text-black border-amber-400'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>

                    <span className="text-[10px] font-mono text-amber-400 block font-bold pt-1">DINNER SLOTS:</span>
                    <div className="flex flex-wrap gap-2">
                      {dinnerSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                            timeSlot === slot
                              ? 'bg-amber-500 text-black border-amber-400'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 3: Seating Area */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5 font-bold uppercase">
                    04. Preferred Seating Area
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Indoor Dining Hall', 'DIFC Skyline Terrace', 'Window Table', 'Royal Majlis Suite'].map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => setSeatingArea(area)}
                        className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                          seatingArea === area
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Contact Details */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Al-Mansoor"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">WhatsApp Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 000 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.ae"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1">Special Requests / Birthday Setup</label>
                    <input
                      type="text"
                      placeholder="e.g. Anniversary dinner setup, high chair needed..."
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                      className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20"
                >
                  Submit Concept Reservation Request →
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
