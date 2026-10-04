'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, Users, Home, Award, Send, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { HOTEL_ROOMS, RoomType, VELORA_BRAND } from '@/data/hotelData';

interface BookingExperienceProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: RoomType | null;
}

export const BookingExperience: React.FC<BookingExperienceProps> = ({
  isOpen,
  onClose,
  initialRoom,
}) => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<RoomType>(initialRoom || HOTEL_ROOMS[0]);
  const [checkIn, setCheckIn] = useState('2026-09-15');
  const [checkOut, setCheckOut] = useState('2026-09-19');
  const [guestsCount, setGuestsCount] = useState(2);
  const [needTransfer, setNeedTransfer] = useState(true);
  const [needSpa, setNeedSpa] = useState(false);
  const [needYacht, setNeedYacht] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const nights = 4;
  const roomCostAED = selectedRoom.pricePerNightAED * nights;
  const transferCostAED = needTransfer ? 750 : 0; // Rolls-Royce Ghost Chauffeur
  const spaCostAED = needSpa ? 1450 : 0; // 24K Gold Royal Hammam Ritual
  const yachtCostAED = needYacht ? 6500 : 0; // 85ft Superyacht Sunset Charter
  const subtotalAED = roomCostAED + transferCostAED + spaCostAED + yachtCostAED;
  const municipalityFeeAED = Math.round(subtotalAED * 0.07); // 7% UAE Municipality / Tourism dirham
  const vatAED = Math.round(subtotalAED * 0.05); // 5% UAE VAT
  const totalAED = subtotalAED + municipalityFeeAED + vatAED;

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#29221D] border border-stone-800 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto font-sans text-stone-100"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {isConfirmed ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 flex items-center justify-center mx-auto shadow-lg shadow-[#C5A059]/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest block mb-1">
                ROYAL VIP RESERVATION CONFIRMED
              </span>
              <h3 className="text-3xl font-serif text-[#F7F4EE]">Marhaban, {guestName}!</h3>
            </div>
            
            <p className="text-xs font-mono text-stone-300 leading-relaxed max-w-md mx-auto">
              Your palace reservation reference is <strong className="text-[#C5A059]">VP-DXB-9982</strong> for <strong className="text-white">{selectedRoom.name}</strong> ({nights} Nights). Our Royal Butler Concierge has sent the confirmation voucher to <strong className="text-white">{guestEmail}</strong> and WhatsApp <strong className="text-white">{guestPhone}</strong>.
            </p>

            <div className="p-5 rounded-2xl bg-[#1C1917] border border-stone-800 text-left font-mono text-xs space-y-2.5">
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Sanctuary Suite:</span>
                <span className="text-white font-bold">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Stay Duration:</span>
                <span className="text-stone-200">{checkIn} to {checkOut} ({nights} Nights)</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span className="text-stone-400">Guests & Location:</span>
                <span className="text-stone-200">{guestsCount} Guests • Jumeirah Bay Island</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-stone-400">Total Confirmed Rate:</span>
                <span className="text-[#C5A059] font-bold text-sm">AED {totalAED.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-stone-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Complimentary VIP Chauffeur on standby at DXB / DWC</span>
            </div>

            <button
              onClick={onClose}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.01] transition-transform"
            >
              Return to Velora Palace
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                ONLINE PALACE RESERVATION FLOW • AED
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE] mb-6">
              Reserve Your Stay at Velora Palace Dubai
            </h3>

            {/* Steps Navigation Bar */}
            <div className="flex items-center justify-between font-mono text-[10px] pb-6 border-b border-stone-800 mb-6 text-stone-400">
              <span className={step >= 1 ? 'text-[#C5A059] font-bold' : ''}>01 DATES</span>
              <span>➔</span>
              <span className={step >= 2 ? 'text-[#C5A059] font-bold' : ''}>02 PALACE SUITE</span>
              <span>➔</span>
              <span className={step >= 3 ? 'text-[#C5A059] font-bold' : ''}>03 VIP EXTRAS</span>
              <span>➔</span>
              <span className={step >= 4 ? 'text-[#C5A059] font-bold' : ''}>04 CONFIRM</span>
            </div>

            {/* Step 1: Dates & Guests */}
            {step === 1 && (
              <div className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px]">CHECK-IN DATE</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px]">CHECK-OUT DATE</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-stone-400 block mb-1 uppercase text-[10px]">GUESTS COUNT</label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 text-white focus:outline-none font-sans"
                  >
                    <option value={1} className="bg-[#1C1917]">1 VIP Guest</option>
                    <option value={2} className="bg-[#1C1917]">2 Guests (Couple)</option>
                    <option value={3} className="bg-[#1C1917]">3 Guests (Family)</option>
                    <option value={4} className="bg-[#1C1917]">4+ Guests / Private Pool Villa</option>
                  </select>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1C1917]/70 border border-stone-800 text-[11px] text-stone-300">
                  ⚡ <strong>Direct Booking Guarantee:</strong> Complimentary Rolls-Royce DXB Airport Meet & Greet + daily artisan breakfast for 2 included.
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#b38e47] text-black font-bold text-xs flex items-center justify-center gap-2 mt-4 transition-transform hover:scale-[1.01]"
                >
                  <span>Select Palace Suite</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Select Room */}
            {step === 2 && (
              <div className="space-y-3 font-mono text-xs">
                <label className="text-stone-400 block uppercase text-[10px] mb-2">CHOOSE PALACE RESIDENCE</label>
                {HOTEL_ROOMS.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => setSelectedRoom(r)}
                    className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      selectedRoom.id === r.id
                        ? 'bg-[#1C1917] border-[#C5A059] text-white shadow-lg shadow-[#C5A059]/10'
                        : 'bg-[#1C1917]/50 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
                    }`}
                  >
                    <div>
                      <span className="font-serif font-bold text-sm block text-[#F7F4EE]">{r.name}</span>
                      <span className="text-[10px] text-stone-400">{r.sizeSqM} m² • {r.view}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#C5A059] font-bold block">AED {r.pricePerNightAED.toLocaleString()}</span>
                      <span className="text-[9px] text-stone-500">per night</span>
                    </div>
                  </div>
                ))}

                <div className="flex gap-2 pt-3">
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 rounded-xl bg-white/5 text-stone-300 text-xs font-serif"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="w-2/3 py-3 rounded-xl bg-[#C5A059] text-black font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <span>Select VIP Extras</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Add-on Extras */}
            {step === 3 && (
              <div className="space-y-3 font-mono text-xs">
                <label className="text-stone-400 block uppercase text-[10px] mb-2">CURATED UAE VIP EXPERIENCES & EXTRAS</label>

                <div
                  onClick={() => setNeedTransfer(!needTransfer)}
                  className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    needTransfer ? 'bg-[#1C1917] border-[#C5A059] text-white' : 'bg-[#1C1917]/50 border-stone-800 text-stone-400'
                  }`}
                >
                  <div>
                    <span className="block font-sans text-xs font-semibold text-stone-200">Rolls-Royce Ghost VIP Airport Transfer (DXB/DWC)</span>
                    <span className="text-[10px] text-stone-400">Personal chauffeur, chilled towels & Arabian dates</span>
                  </div>
                  <span className="text-[#C5A059] font-bold">+ AED 750</span>
                </div>

                <div
                  onClick={() => setNeedSpa(!needSpa)}
                  className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    needSpa ? 'bg-[#1C1917] border-[#C5A059] text-white' : 'bg-[#1C1917]/50 border-stone-800 text-stone-400'
                  }`}
                >
                  <div>
                    <span className="block font-sans text-xs font-semibold text-stone-200">24K Gold Royal Hammam Ritual (90 Min)</span>
                    <span className="text-[10px] text-stone-400">Amber scrub, gold leaf infusion & eucalyptus steam</span>
                  </div>
                  <span className="text-[#C5A059] font-bold">+ AED 1,450</span>
                </div>

                <div
                  onClick={() => setNeedYacht(!needYacht)}
                  className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    needYacht ? 'bg-[#1C1917] border-[#C5A059] text-white' : 'bg-[#1C1917]/50 border-stone-800 text-stone-400'
                  }`}
                >
                  <div>
                    <span className="block font-sans text-xs font-semibold text-stone-200">Private 85ft Superyacht Sunset Cruise (3 Hours)</span>
                    <span className="text-[10px] text-stone-400">Canapés, champagne & private captain around Palm Jumeirah</span>
                  </div>
                  <span className="text-[#C5A059] font-bold">+ AED 6,500</span>
                </div>

                <div className="flex gap-2 pt-3">
                  <button
                    onClick={() => setStep(2)}
                    className="w-1/3 py-3 rounded-xl bg-white/5 text-stone-300 text-xs font-serif"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="w-2/3 py-3 rounded-xl bg-[#C5A059] text-black font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <span>Guest Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Guest Form & Confirmation */}
            {step === 4 && (
              <form onSubmit={handleConfirmReservation} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="text-stone-400 block mb-1 uppercase text-[10px]">PRIMARY GUEST FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Sheikh Mansoor / Dr. Evelyn Vance"
                    className="w-full p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
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
                      placeholder="evelyn@vip.ae"
                      className="w-full p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="text-stone-400 block mb-1 uppercase text-[10px]">UAE PHONE / WHATSAPP</label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+971 50 000 0000"
                      className="w-full p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-stone-400 block mb-1 uppercase text-[10px]">SPECIAL CONCIERGE REQUESTS (OPTIONAL)</label>
                  <input
                    type="text"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Helipad landing slot, private chef dietary preferences, extra pillows"
                    className="w-full p-3 rounded-xl bg-[#1C1917] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059] text-[11px]"
                  />
                </div>

                {/* Pricing Summary */}
                <div className="p-4 rounded-xl bg-[#1C1917] border border-[#C5A059]/30 space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-stone-300">
                    <span>{selectedRoom.name} ({nights} Nights):</span>
                    <span>AED {roomCostAED.toLocaleString()}</span>
                  </div>
                  {needTransfer && (
                    <div className="flex justify-between text-stone-400">
                      <span>Rolls-Royce Chauffeur:</span>
                      <span>AED {transferCostAED.toLocaleString()}</span>
                    </div>
                  )}
                  {needSpa && (
                    <div className="flex justify-between text-stone-400">
                      <span>24K Gold Hammam:</span>
                      <span>AED {spaCostAED.toLocaleString()}</span>
                    </div>
                  )}
                  {needYacht && (
                    <div className="flex justify-between text-stone-400">
                      <span>85ft Superyacht Charter:</span>
                      <span>AED {yachtCostAED.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-stone-400 border-t border-stone-800 pt-1.5">
                    <span>UAE Municipality & Tourism Dirham (7%):</span>
                    <span>AED {municipalityFeeAED.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>UAE Federal VAT (5%):</span>
                    <span>AED {vatAED.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-stone-800">
                    <span>TOTAL CONFIRMED PALACE RATE:</span>
                    <span className="text-[#C5A059]">AED {totalAED.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-1/3 py-3.5 rounded-xl bg-white/5 text-stone-300 text-xs font-serif"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform"
                  >
                    <span>Confirm Palace Reservation</span>
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
