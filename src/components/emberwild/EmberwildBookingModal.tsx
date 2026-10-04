'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ArrowLeft, Calendar, Users, MapPin, ShieldCheck, Flame } from 'lucide-react';
import { EmberwildStay, EXPERIENCE_ADDONS } from '@/data/emberwildData';
import { EmberwildTripPass } from './EmberwildTripPass';

interface EmberwildBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStay: EmberwildStay | null;
  onBookingComplete?: (passData: any) => void;
}

export const EmberwildBookingModal: React.FC<EmberwildBookingModalProps> = ({
  isOpen,
  onClose,
  selectedStay,
  onBookingComplete
}) => {
  const [step, setStep] = useState<number>(1);
  const [nights, setNights] = useState<number>(2);
  const [guests, setGuests] = useState<number>(2);
  const [checkIn, setCheckIn] = useState('18 Oct 2026');
  const [checkOut, setCheckOut] = useState('20 Oct 2026');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['add-campfire']);
  
  // Guest Details
  const [fullName, setFullName] = useState('Rashid Al Mansoori');
  const [email, setEmail] = useState('rashid.mansoori@emirates.ae');
  const [phone, setPhone] = useState('+971 50 882 7194');
  const [specialRequests, setSpecialRequests] = useState('Arriving by evening around 5pm; please have the fireplace pre-staged.');
  
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('EW-2026-DXB-7882');

  if (!isOpen || !selectedStay) return null;

  const stayTotal = selectedStay.pricePerNightAED * nights;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = EXPERIENCE_ADDONS.find(a => a.id === id);
    return sum + (addon ? addon.priceAED : 0);
  }, 0);
  const totalAED = stayTotal + addonsTotal;

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Confirm Booking
      const ref = `EW-${Math.floor(1000 + Math.random() * 9000)}-DXB`;
      setBookingRef(ref);
      setIsConfirmed(true);
      if (onBookingComplete) {
        onBookingComplete({
          bookingRef: ref,
          stayName: selectedStay.name,
          location: selectedStay.location,
          checkIn,
          checkOut,
          guests,
          guestName: fullName,
          guestEmail: email,
          guestPhone: phone,
          addons: selectedAddons.map(id => EXPERIENCE_ADDONS.find(a => a.id === id)?.name || id),
          totalAED
        });
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-stone-950 border border-stone-800 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-stone-100 p-6 sm:p-8 my-auto relative"
      >
        {/* Header & Steps Indicator */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-800">
          <div>
            <div className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
              DEMO BOOKING ENGINE // STEP 0{step} OF 04
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-stone-100 mt-0.5">
              {step === 1 && 'Confirm Stay & Dates'}
              {step === 2 && 'Wilderness Add-Ons'}
              {step === 3 && 'Guest Credentials'}
              {step === 4 && 'Final Review & Guarantee'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmed Screen: Trip Pass */}
        {isConfirmed ? (
          <div className="py-4">
            <EmberwildTripPass
              passData={{
                bookingRef,
                stayName: selectedStay.name,
                location: selectedStay.location,
                checkIn,
                checkOut,
                guests,
                guestName: fullName,
                guestEmail: email,
                guestPhone: phone,
                addons: selectedAddons.map(id => EXPERIENCE_ADDONS.find(a => a.id === id)?.name || id),
                totalAED
              }}
              onClose={onClose}
            />
          </div>
        ) : (
          <div className="py-6 space-y-6">
            {/* Step 1: Stay & Dates */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-stone-900/70 border border-stone-800 flex items-center gap-4">
                  <img
                    src={selectedStay.image}
                    alt={selectedStay.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <h4 className="text-base font-medium text-stone-100">{selectedStay.name}</h4>
                    <div className="text-xs text-amber-400 font-mono mt-0.5">{selectedStay.location}</div>
                    <div className="text-xs text-stone-400 mt-1">
                      AED {selectedStay.pricePerNightAED} / night · Max {selectedStay.capacity} Guests
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-900/40 border border-stone-800">
                    <label className="block text-[10px] font-mono text-stone-400 uppercase mb-1">Stay Duration</label>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-stone-200">{nights} Nights</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setNights(Math.max(1, nights - 1))}
                          className="w-7 h-7 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
                        >
                          -
                        </button>
                        <button
                          onClick={() => setNights(nights + 1)}
                          className="w-7 h-7 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900/40 border border-stone-800">
                    <label className="block text-[10px] font-mono text-stone-400 uppercase mb-1">Guests</label>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-stone-200">{guests} Guests</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="w-7 h-7 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
                        >
                          -
                        </button>
                        <button
                          onClick={() => setGuests(Math.min(selectedStay.capacity, guests + 1))}
                          className="w-7 h-7 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900/40 border border-stone-800">
                  <div className="text-xs text-stone-400 flex items-center gap-2 font-mono">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Selected Dates: {checkIn} → {checkOut}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Add-Ons */}
            {step === 2 && (
              <div className="space-y-3">
                <p className="text-xs text-stone-400">
                  Select optional outdoor adventures and dining to pair with your retreat:
                </p>
                <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                  {EXPERIENCE_ADDONS.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => {
                          setSelectedAddons(prev =>
                            prev.includes(addon.id) ? prev.filter(i => i !== addon.id) : [...prev, addon.id]
                          );
                        }}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected ? 'bg-stone-900 border-amber-500' : 'bg-stone-950 border-stone-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border text-[11px] ${
                            isSelected ? 'bg-amber-500 border-amber-500 text-stone-950 font-bold' : 'border-stone-700 bg-stone-900'
                          }`}>
                            {isSelected && '✓'}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-stone-200">{addon.name}</div>
                            <div className="text-[10px] text-stone-500">{addon.duration} · {addon.category}</div>
                          </div>
                        </div>
                        <div className="text-xs font-mono font-medium text-amber-400">
                          + AED {addon.priceAED}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Guest Details */}
            {step === 3 && (
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-stone-400 mb-1">Primary Guest Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-400 mb-1">Email (for Digital Trip Pass)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 mb-1">UAE Phone / WhatsApp</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-400 mb-1">Special Requests / Dietary Notes</label>
                  <textarea
                    rows={3}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2 text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Retreat:</span>
                    <span className="text-stone-100 font-medium">{selectedStay.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Duration:</span>
                    <span className="text-stone-100 font-mono">{nights} Nights ({checkIn} – {checkOut})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Guests:</span>
                    <span className="text-stone-100">{fullName} ({guests} Guests)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Add-ons ({selectedAddons.length}):</span>
                    <span className="text-amber-400 font-mono">+ AED {addonsTotal}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-mono text-stone-500">Total Demo Rate</div>
                    <div className="text-2xl font-mono font-medium text-amber-400">
                      AED {totalAED.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-emerald-400 font-mono">
                    Instant Demo Pass Generation
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-4 py-2.5 rounded-xl bg-stone-900 text-stone-300 text-xs flex items-center gap-1.5 hover:bg-stone-800 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs flex items-center gap-2 transition-all shadow-lg shadow-amber-950/40"
              >
                <span>{step === 4 ? 'Confirm & Generate Pass' : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
