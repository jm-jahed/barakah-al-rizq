'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Anchor, CheckCircle2, Send, ShieldCheck, Calendar, Users, Utensils, Car, Sparkles } from 'lucide-react';
import { YACHT_FLEET_DATA, NERO_BRAND } from '@/data/neroData';

interface NeroCharterModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedYachtId?: string;
}

export const NeroCharterModal: React.FC<NeroCharterModalProps> = ({
  isOpen,
  onClose,
  preselectedYachtId = 'nero-sovereign'
}) => {
  const [step, setStep] = useState<number>(1);
  const [vesselId, setVesselId] = useState<string>(preselectedYachtId);
  const [dates, setDates] = useState<string>('2026-10-15 to 2026-10-22');
  const [guests, setGuests] = useState<number>(10);
  const [diningStyle, setDiningStyle] = useState<string>('michelin-caviar');
  const [vipTransfer, setVipTransfer] = useState<string>('rolls-royce');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedYachtId) {
      setVesselId(preselectedYachtId);
    }
  }, [preselectedYachtId]);

  if (!isOpen) return null;

  const selectedYacht =
    YACHT_FLEET_DATA.find((y) => y.id === vesselId) || YACHT_FLEET_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#091322] border border-cyan-500/40 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#040914]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Anchor className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-white">
                  VIP Superyacht Charter Reservation
                </h3>
                <p className="text-xs font-mono text-cyan-300">
                  Dubai Harbour Marina Berth A-14 • 24/7 Operations Desk
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Header */}
          {!isSubmitted && (
            <div className="px-6 py-4 bg-[#060D1A] border-b border-white/5 flex items-center justify-between font-mono text-xs">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-cyan-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px]">1</span>
                <span>Vessel & Dates</span>
              </div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-cyan-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px]">2</span>
                <span>Hospitality & Transfers</span>
              </div>
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-cyan-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px]">3</span>
                <span>Principal Contact</span>
              </div>
            </div>
          )}

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Charter Request Transmitted
                </h3>
                <p className="text-xs font-mono text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Our Senior Yacht Broker at Dubai Harbour Marina has reserved your preferred slot for <strong>{selectedYacht.name}</strong> and will contact you via <strong>{phone}</strong> within 15 minutes.
                </p>

                <div className="p-4 rounded-2xl bg-[#040914] border border-cyan-500/20 max-w-md mx-auto font-mono text-xs text-left space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Vessel:</span>
                    <span className="text-white font-bold">{selectedYacht.name} ({selectedYacht.lengthFeet} ft)</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Target Dates:</span>
                    <span className="text-cyan-300 font-bold">{dates}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Guests:</span>
                    <span className="text-white font-bold">{guests} Passengers</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Berth Dispatch:</span>
                    <span className="text-emerald-400 font-bold">Dubai Harbour Berth A-14</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                      onClose();
                    }}
                    className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                  >
                    RETURN TO SHOWCASE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-mono font-bold text-cyan-300 uppercase block mb-1.5">
                        Selected Superyacht Vessel *
                      </label>
                      <select
                        value={vesselId}
                        onChange={(e) => setVesselId(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400"
                      >
                        {YACHT_FLEET_DATA.map((y) => (
                          <option key={y.id} value={y.id} className="bg-[#091322]">
                            {y.name} ({y.lengthFeet} ft) — AED {y.dailyRateAed.toLocaleString()}/day
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-1.5">
                          Target Charter Dates *
                        </label>
                        <input
                          type="text"
                          required
                          value={dates}
                          onChange={(e) => setDates(e.target.value)}
                          placeholder="e.g. 2026-11-20 to 2026-11-27"
                          className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-1.5">
                          Passenger Guest Count *
                        </label>
                        <input
                          type="number"
                          min={2}
                          max={selectedYacht.guestsCruising}
                          value={guests}
                          onChange={(e) => setGuests(Number(e.target.value))}
                          className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#040914] border border-white/10 font-mono text-xs space-y-2">
                      <div className="flex justify-between text-gray-400">
                        <span>Weekly Charter Rate:</span>
                        <span className="text-cyan-400 font-bold">AED {selectedYacht.weeklyRateAed.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Crew Allocation:</span>
                        <span className="text-white font-bold">{selectedYacht.crew} Members Dedicated</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      NEXT: HOSPITALITY & TRANSFERS →
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-mono font-bold text-cyan-300 uppercase block mb-2">
                        Onboard Culinary Style & Chef Tier
                      </label>
                      <div className="space-y-2.5">
                        {[
                          { id: 'michelin-caviar', label: 'Royal Caviar & 3-Star Michelin Seafood Atelier', desc: 'Beluga caviar, Maine lobster, white truffles & grand cru pairings' },
                          { id: 'sunset-bbq', label: 'Mediterranean Sunset Grill & Mixology Bar', desc: 'Wagyu tomahawk, fresh grilled hammour & artisan cocktail bar' },
                          { id: 'emirati-royal', label: 'Emirati Royal Marine Heritage Banquet', desc: 'Traditional local seafood prepared by royal household master chefs' },
                        ].map((item) => (
                          <label
                            key={item.id}
                            className={`flex flex-col p-3.5 rounded-xl border cursor-pointer transition-all ${
                              diningStyle === item.id
                                ? 'bg-cyan-500/15 border-cyan-400 text-white'
                                : 'bg-[#040914] border-white/10 text-gray-400 hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <input
                                type="radio"
                                name="dining"
                                checked={diningStyle === item.id}
                                onChange={() => setDiningStyle(item.id)}
                                className="accent-cyan-400"
                              />
                              <span className="text-xs font-mono font-bold text-white">{item.label}</span>
                            </div>
                            <span className="text-[11px] font-mono text-gray-400 ml-6 mt-1">{item.desc}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono font-bold text-cyan-300 uppercase block mb-2">
                        VIP Marina Transfer Protocol
                      </label>
                      <div className="space-y-2.5">
                        {[
                          { id: 'rolls-royce', label: 'Rolls-Royce Phantom VIII Chauffeur', desc: 'Direct gangway escort to Berth A-14 at Dubai Harbour' },
                          { id: 'helicopter', label: 'Airbus H145 Helicopter Touch-and-Go', desc: 'Direct landing on M/Y Nero Sovereign helipad' },
                          { id: 'tender', label: 'Private Villa Pontoon Tender Pick-up', desc: 'High-speed tender collection from Palm Jumeirah private dock' },
                        ].map((item) => (
                          <label
                            key={item.id}
                            className={`flex flex-col p-3.5 rounded-xl border cursor-pointer transition-all ${
                              vipTransfer === item.id
                                ? 'bg-cyan-500/15 border-cyan-400 text-white'
                                : 'bg-[#040914] border-white/10 text-gray-400 hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <input
                                type="radio"
                                name="transfer"
                                checked={vipTransfer === item.id}
                                onChange={() => setVipTransfer(item.id)}
                                className="accent-cyan-400"
                              />
                              <span className="text-xs font-mono font-bold text-white">{item.label}</span>
                            </div>
                            <span className="text-[11px] font-mono text-gray-400 ml-6 mt-1">{item.desc}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                      >
                        ← BACK
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="w-2/3 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase"
                      >
                        NEXT: GUEST DETAILS →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">
                        Principal Charterer Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sheikh Mansour Al-Nahyan / Lord Sterling"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-gray-300 block mb-1">
                          UAE Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 882 1122"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-gray-300 block mb-1">
                          Confidential Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="principal@familyoffice.ae"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">
                        Special Requests / Security Clearances
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Specify custom vintage champagne preferences, offshore diving requests, or armed escort protocols..."
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs outline-none focus:border-cyan-400 resize-none"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-1/3 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                      >
                        ← BACK
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>TRANSMIT RESERVATION ✓</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
