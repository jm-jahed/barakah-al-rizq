'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, Calendar, Users, CreditCard, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { OASIRA_ROOMS, OasiraRoom, OASIRA_BRAND, OasiraResort, OASIRA_RESORTS } from '@/data/oasiraData';

interface BookingFlowProps {
  isOpen: boolean;
  onClose: () => void;
  initialResort?: OasiraResort | null;
  initialRoom?: OasiraRoom | null;
  customTotalPrice?: number | null;
  customSummaryText?: string | null;
}

export const BookingFlow: React.FC<BookingFlowProps> = ({
  isOpen,
  onClose,
  initialResort,
  initialRoom,
  customTotalPrice,
  customSummaryText,
}) => {
  const [step, setStep] = useState(1);
  const [selectedResort, setSelectedResort] = useState<OasiraResort>(initialResort || OASIRA_RESORTS[0]);
  const [selectedRoom, setSelectedRoom] = useState<OasiraRoom>(initialRoom || OASIRA_ROOMS[1]);
  const [checkIn, setCheckIn] = useState('2026-09-18');
  const [checkOut, setCheckOut] = useState('2026-09-21');
  const [guestsCount, setGuestsCount] = useState(2);
  const [needTransfer, setNeedTransfer] = useState(true);
  const [needSpa, setNeedSpa] = useState(true);

  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const nights = 3;
  const roomCost = customTotalPrice ? customTotalPrice : selectedRoom.pricePerNightAED * nights;
  const transferCost = needTransfer ? 350 : 0;
  const spaCost = needSpa ? 550 : 0;
  const subtotal = roomCost + transferCost + spaCost;
  const vatTax = Math.round(subtotal * 0.05);
  const serviceCharge = Math.round(subtotal * 0.10);
  const tourismFee = nights * 20;
  const totalAED = subtotal + vatTax + serviceCharge + tourismFee;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0F382C] border border-stone-700 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto font-sans text-stone-100"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#0A2920] border border-stone-700 text-stone-400 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isConfirmed ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#D4B382]/20 text-[#D4B382] border border-[#D4B382]/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono text-[#D4B382] font-bold block uppercase">RESERVATION CONFIRMED</span>
            <h3 className="text-3xl font-serif font-bold text-[#FAF6EE]">Your Staycation is Ready!</h3>

            <p className="text-xs font-mono text-stone-300 leading-relaxed max-w-md mx-auto">
              Thank you {guestName}. Booking reference <strong className="text-[#D4B382]">#OSA-48291</strong> has been confirmed for {selectedResort.name} ({nights} Nights). A copy of your stay confirmation has been sent to {guestEmail}.
            </p>

            <div className="p-4 rounded-2xl bg-[#0A2920] border border-stone-800 font-mono text-xs text-left space-y-1">
              <div className="flex justify-between">
                <span className="text-stone-400">Resort & Location:</span>
                <span className="text-white font-bold">{selectedResort.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Room Category:</span>
                <span className="text-stone-200">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Total Confirmed Amount:</span>
                <span className="text-[#D4B382] font-bold">AED {totalAED}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <a
                href={OASIRA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact WhatsApp Concierge</span>
              </a>

              <button
                onClick={onClose}
                className="flex-1 py-3.5 rounded-xl bg-[#D4B382] text-black font-serif font-bold text-xs uppercase"
              >
                Return to OASIRA
              </button>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest block mb-1">
              ONLINE RESERVATION WIZARD
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF6EE] mb-6">
              Book Stay at {selectedResort.name}
            </h3>

            {/* Steps Nav */}
            <div className="flex items-center justify-between font-mono text-[10px] pb-4 border-b border-stone-800 mb-6 text-stone-400">
              <span className={step >= 1 ? 'text-[#D4B382] font-bold' : ''}>01 DATES</span>
              <span>➔</span>
              <span className={step >= 2 ? 'text-[#D4B382] font-bold' : ''}>02 ROOM</span>
              <span>➔</span>
              <span className={step >= 3 ? 'text-[#D4B382] font-bold' : ''}>03 EXTRAS</span>
              <span>➔</span>
              <span className={step >= 4 ? 'text-[#D4B382] font-bold' : ''}>04 CONFIRM</span>
            </div>

            {/* Step 1: Dates */}
            {step === 1 && (
              <div className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px]">CHECK-IN DATE</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#0A2920] border border-stone-800 text-white focus:outline-none focus:border-[#D4B382]"
                    />
                  </div>
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px]">CHECK-OUT DATE</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#0A2920] border border-stone-800 text-white focus:outline-none focus:border-[#D4B382]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-stone-400 block mb-1 uppercase text-[10px]">GUESTS COUNT</label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full p-3 rounded-xl bg-[#0A2920] border border-stone-800 text-white font-serif"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={4}>4 Guests (Family Stay)</option>
                    <option value={6}>6+ Guests (Private Villa)</option>
                  </select>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 rounded-xl bg-[#D4B382] text-black font-serif font-bold text-xs uppercase flex items-center justify-center gap-2 mt-4"
                >
                  <span>Select Accommodations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Room */}
            {step === 2 && (
              <div className="space-y-3 font-mono text-xs">
                <label className="text-stone-400 block uppercase text-[10px] mb-2">CHOOSE SUITE CATEGORY</label>
                {OASIRA_ROOMS.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => setSelectedRoom(r)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      selectedRoom.id === r.id
                        ? 'bg-[#0A2920] border-[#D4B382] text-white shadow-md'
                        : 'bg-[#0A2920]/40 border-stone-800 text-stone-400'
                    }`}
                  >
                    <div>
                      <span className="font-serif font-bold text-sm block text-white">{r.name}</span>
                      <span className="text-[10px] text-stone-400">{r.sizeSqM} m² • {r.view}</span>
                    </div>
                    <span className="text-[#D4B382] font-bold">AED {r.pricePerNightAED} / night</span>
                  </div>
                ))}

                <div className="flex gap-2 pt-2">
                  <button onClick={() => setStep(1)} className="w-1/3 py-3 rounded-xl bg-white/5 text-stone-300 text-xs font-mono">Back</button>
                  <button onClick={() => setStep(3)} className="w-2/3 py-3 rounded-xl bg-[#D4B382] text-black font-serif font-bold text-xs uppercase flex items-center justify-center gap-2">
                    <span>Select Extras</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Extras */}
            {step === 3 && (
              <div className="space-y-3 font-mono text-xs">
                <label className="text-stone-400 block uppercase text-[10px] mb-2">ADD STAYCATION EXTRAS</label>

                <div
                  onClick={() => setNeedTransfer(!needTransfer)}
                  className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between ${
                    needTransfer ? 'bg-[#0A2920] border-[#D4B382] text-white' : 'bg-[#0A2920]/40 border-stone-800 text-stone-400'
                  }`}
                >
                  <span>Mercedes S-Class Private Airport Transfer</span>
                  <span className="text-[#D4B382] font-bold">+ AED 350</span>
                </div>

                <div
                  onClick={() => setNeedSpa(!needSpa)}
                  className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between ${
                    needSpa ? 'bg-[#0A2920] border-[#D4B382] text-white' : 'bg-[#0A2920]/40 border-stone-800 text-stone-400'
                  }`}
                >
                  <span>Private Hammam & Sommelier Detox Spa</span>
                  <span className="text-[#D4B382] font-bold">+ AED 550</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <button onClick={() => setStep(2)} className="w-1/3 py-3 rounded-xl bg-white/5 text-stone-300 text-xs font-mono">Back</button>
                  <button onClick={() => setStep(4)} className="w-2/3 py-3 rounded-xl bg-[#D4B382] text-black font-serif font-bold text-xs uppercase flex items-center justify-center gap-2">
                    <span>Guest Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Guest Details & Submit */}
            {step === 4 && (
              <form onSubmit={handleConfirmBooking} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="text-stone-400 block mb-1 uppercase text-[10px]">FULL GUEST NAME</label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Sultan Al-Amri"
                    className="w-full p-3 rounded-xl bg-[#0A2920] border border-stone-800 text-white focus:outline-none focus:border-[#D4B382]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px]">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="sultan@example.ae"
                      className="w-full p-3 rounded-xl bg-[#0A2920] border border-stone-800 text-white focus:outline-none focus:border-[#D4B382]"
                    />
                  </div>
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px]">UAE MOBILE / WHATSAPP</label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+971 50 000 0000"
                      className="w-full p-3 rounded-xl bg-[#0A2920] border border-stone-800 text-white focus:outline-none focus:border-[#D4B382]"
                    />
                  </div>
                </div>

                {/* Total Summary */}
                <div className="p-4 rounded-xl bg-[#0A2920] border border-[#D4B382]/30 space-y-1 font-mono text-xs">
                  <div className="flex justify-between text-stone-300">
                    <span>{selectedRoom.name} ({nights} Nights):</span>
                    <span>AED {roomCost}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Taxes & Service Charge:</span>
                    <span>AED {vatTax + serviceCharge + tourismFee}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-stone-800">
                    <span>TOTAL CONFIRMED STAY:</span>
                    <span className="text-[#D4B382]">AED {totalAED}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button type="button" onClick={() => setStep(3)} className="w-1/3 py-3 rounded-xl bg-white/5 text-stone-300 text-xs font-mono">Back</button>
                  <button
                    type="submit"
                    className="w-2/3 py-3.5 rounded-xl bg-gradient-to-r from-[#D4B382] via-[#C59B63] to-[#D4AF37] text-black font-serif font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Confirm Reservation</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>
        )}
      </motion.div>
    </div>
  );
};
