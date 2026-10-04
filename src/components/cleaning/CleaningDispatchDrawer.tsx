'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CleaningService } from '@/data/cleaningCatalogData';
import { X, Calendar, Clock, Car, CheckCircle2, ShieldCheck, User, PhoneCall, Mail, MapPin } from 'lucide-react';

interface CleaningDispatchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: CleaningService | null;
}

export const CleaningDispatchDrawer: React.FC<CleaningDispatchDrawerProps> = ({
  isOpen,
  onClose,
  selectedService
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Palm Jumeirah');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:00 AM - Morning VIP Priority');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10B981', '#6EE7B7', '#059669', '#FDE68A']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-zinc-950 border-l border-emerald-500/30 h-full flex flex-col justify-between overflow-y-auto shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-serif font-bold text-white">
              VIP Fleet Dispatch Booking
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
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Dispatch Order Confirmed
              </h3>
              <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                Your dispatch request for{' '}
                <span className="text-emerald-400 font-semibold">{selectedService?.title || 'UAE Villa Deep Cleaning Operation'}</span>{' '}
                has been routed to our Central Fleet Control Desk.
                Our operations supervisor will WhatsApp you (+971) within 15 minutes to confirm GPS arrival.
              </p>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 max-w-sm mx-auto space-y-1">
                <div>Scheduled Date: <span className="text-white">{date || 'Immediate Dispatch'}</span></div>
                <div>Time Slot: <span className="text-white">{timeSlot}</span></div>
                <div>Location Hub: <span className="text-emerald-400">{location}</span></div>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 px-8 py-3 rounded-xl bg-emerald-500 text-zinc-950 font-bold uppercase tracking-wider text-xs font-mono"
              >
                Return to Showcase
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {selectedService && (
                <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3.5">
                  <img
                    src={selectedService.heroImage}
                    alt={selectedService.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <div className="text-[10px] font-mono text-emerald-400">Selected Protocol:</div>
                    <div className="text-xs font-bold text-white line-clamp-1">{selectedService.title}</div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      AED {selectedService.priceAED.toLocaleString()} • {selectedService.durationHours} Hours • {selectedService.crewSize} Staff
                    </div>
                  </div>
                </div>
              )}

              {/* Client Details */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  1. Client & Property Details
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name / Representative *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-emerald-500/60 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp (+971...) *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-emerald-500/60 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-emerald-500/60 focus:outline-none"
                  />
                </div>

                <div>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-emerald-500/60 focus:outline-none cursor-pointer"
                  >
                    <option value="Palm Jumeirah">Palm Jumeirah</option>
                    <option value="Emirates Hills">Emirates Hills</option>
                    <option value="Downtown Dubai & DIFC">Downtown Dubai & DIFC</option>
                    <option value="Dubai Hills Estate">Dubai Hills Estate</option>
                    <option value="Jumeirah Bay Island">Jumeirah Bay Island</option>
                    <option value="Saadiyat Island (Abu Dhabi)">Saadiyat Island (Abu Dhabi)</option>
                    <option value="Al Barari">Al Barari</option>
                    <option value="Bluewaters Island">Bluewaters Island</option>
                  </select>
                </div>
              </div>

              {/* Timing */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  2. Schedule Dispatch Slot
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white focus:border-emerald-500/60 focus:outline-none"
                  />
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-emerald-500/60 focus:outline-none"
                  >
                    <option value="08:30 AM - Morning VIP Priority">08:30 AM - Morning VIP Priority</option>
                    <option value="01:30 PM - Afternoon Slot">01:30 PM - Afternoon Slot</option>
                    <option value="06:00 PM - Evening Express Slot">06:00 PM - Evening Express Slot</option>
                    <option value="10:00 PM - After-Hours Corporate Slot">10:00 PM - After-Hours Corporate Slot</option>
                  </select>
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <textarea
                  rows={2}
                  placeholder="Gate security code, pet in residence, special marble or silk notes..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-emerald-500/60 focus:outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 hover:from-emerald-400 hover:to-teal-300 text-zinc-950 font-bold uppercase tracking-wider text-xs shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <Car className="w-4 h-4" />
                <span>Confirm Fleet Dispatch</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800/80 pt-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dubai Municipality Permit #94821 • 100% Insured</span>
          </div>
        </div>
      </div>
    </div>
  );
};
