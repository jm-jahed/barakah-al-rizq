'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { LuxuryProperty } from '@/data/realEstateData';
import { X, Calendar, Clock, Car, Compass, CheckCircle2, ShieldCheck, User, PhoneCall, Mail } from 'lucide-react';

interface RealEstateViewingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: LuxuryProperty | null;
}

export const RealEstateViewingDrawer: React.FC<RealEstateViewingDrawerProps> = ({
  isOpen,
  onClose,
  selectedProperty
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - Morning Light');
  const [transportMode, setTransportMode] = useState<'Rolls-Royce Chauffeur' | 'Helicopter Transfer' | 'Self-Drive with VIP Valet'>('Rolls-Royce Chauffeur');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#FDE68A', '#D97706', '#FFFFFF']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-zinc-950 border-l border-amber-500/30 h-full flex flex-col justify-between overflow-y-auto shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-serif font-bold text-white">
              VIP Private Viewing Concierge
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="my-auto py-6">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Viewing Reservation Confirmed
              </h3>
              <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                Your dedicated Private Client Partner has received your reservation request for{' '}
                <span className="text-amber-400 font-semibold">{selectedProperty?.title || 'UAE Private Estate Showcase'}</span>.
                Our concierge desk will contact you via WhatsApp (+971) within 30 minutes to coordinate chauffeur pickup.
              </p>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 max-w-sm mx-auto space-y-1">
                <div>Preferred Date: <span className="text-white">{date || 'Next Available'}</span></div>
                <div>Time Slot: <span className="text-white">{timeSlot}</span></div>
                <div>Chauffeur Service: <span className="text-amber-400">{transportMode}</span></div>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 px-8 py-3 rounded-xl bg-amber-500 text-zinc-950 font-bold uppercase tracking-wider text-xs font-mono"
              >
                Return to Showcase
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {selectedProperty && (
                <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3.5">
                  <img
                    src={selectedProperty.heroImage}
                    alt={selectedProperty.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <div className="text-[10px] font-mono text-amber-400">Selected Estate:</div>
                    <div className="text-xs font-bold text-white line-clamp-1">{selectedProperty.title}</div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      AED {selectedProperty.priceAED.toLocaleString()} • {selectedProperty.communityName}
                    </div>
                  </div>
                </div>
              )}

              {/* Guest Information */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  1. Principal Client Details
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name / Family Office Representative *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-amber-500/60 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp (+971...) *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-amber-500/60 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Official Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-amber-500/60 focus:outline-none"
                  />
                </div>
              </div>

              {/* Timing */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  2. Scheduling Preferences
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white focus:border-amber-500/60 focus:outline-none"
                  />
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-amber-500/60 focus:outline-none"
                  >
                    <option value="10:00 AM - Morning Sunlight">10:00 AM - Morning Sunlight</option>
                    <option value="02:00 PM - Afternoon Light">02:00 PM - Afternoon Light</option>
                    <option value="05:30 PM - Golden Hour Sunset">05:30 PM - Golden Hour Sunset</option>
                    <option value="08:00 PM - Evening Illumination">08:00 PM - Evening Illumination</option>
                  </select>
                </div>
              </div>

              {/* Chauffeur Service Option */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  3. Chauffeur & VIP Transit
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['Rolls-Royce Chauffeur', 'Helicopter Transfer', 'Self-Drive with VIP Valet'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setTransportMode(mode)}
                      className={`p-3 rounded-xl border text-xs font-mono text-center transition-all ${
                        transportMode === mode
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 font-bold'
                          : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <textarea
                  rows={2}
                  placeholder="Special NDA requests, security clearance, or family office notes..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-amber-500/60 focus:outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold uppercase tracking-wider text-xs shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm VIP Private Viewing</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer Guarantee */}
        <div className="border-t border-zinc-800/80 pt-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Confidentiality Guaranteed Under UAE Privacy Standards</span>
          </div>
        </div>
      </div>
    </div>
  );
};
