'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ExoticVehicle } from '@/data/carRentalCatalogData';
import { X, Calendar, Clock, Car, CheckCircle2, ShieldCheck, User, PhoneCall, Mail, MapPin, Zap } from 'lucide-react';

interface ExoticBookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVehicle?: ExoticVehicle | null;
}

export const ExoticBookingDrawer: React.FC<ExoticBookingDrawerProps> = ({
  isOpen,
  onClose,
  selectedVehicle
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Dubai Airport VIP Terminal 3');
  const [startDate, setStartDate] = useState('');
  const [durationDays, setDurationDays] = useState('3');
  const [paymentPreference, setPaymentPreference] = useState<'Credit Card (0% Deposit)' | 'Cryptocurrency (USDT/BTC)' | 'Corporate Invoice'>('Credit Card (0% Deposit)');
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
      colors: ['#F59E0B', '#F43F5E', '#D97706', '#FFFFFF']
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
            <Zap className="w-5 h-5 text-amber-400 fill-current" />
            <h2 className="text-xl font-serif font-bold text-white">
              Instant Supercar Reservation
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
                Supercar Reservation Confirmed
              </h3>
              <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                Your reservation for{' '}
                <span className="text-amber-400 font-semibold">{selectedVehicle?.title || 'APEX Exotic Supercar'}</span>{' '}
                has been received by our DIFC Fleet Operations Command.
                Your dedicated VIP Fleet Manager will WhatsApp you (+971) within 10 minutes with your flatbed transporter live tracking link.
              </p>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 max-w-sm mx-auto space-y-1">
                <div>Delivery Date: <span className="text-white">{startDate || 'Immediate (Within 30 Mins)'}</span></div>
                <div>Duration: <span className="text-white">{durationDays} Days</span></div>
                <div>Location: <span className="text-amber-400">{deliveryLocation}</span></div>
                <div>Payment Method: <span className="text-emerald-400">{paymentPreference}</span></div>
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
              {selectedVehicle && (
                <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3.5">
                  <img
                    src={selectedVehicle.heroImage}
                    alt={selectedVehicle.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <div className="text-[10px] font-mono text-amber-400">Selected Supercar:</div>
                    <div className="text-xs font-bold text-white line-clamp-1">{selectedVehicle.title}</div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      AED {selectedVehicle.dailyPriceAED.toLocaleString()}/day • {selectedVehicle.horsepower} HP • {selectedVehicle.acceleration0100}
                    </div>
                  </div>
                </div>
              )}

              {/* Client Info */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  1. Principal Driver Details
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Legal Name (as in Passport/ID) *"
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
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-amber-500/60 focus:outline-none"
                  />
                </div>
              </div>

              {/* Delivery Location & Schedule */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  2. Delivery & Duration
                </div>
                <div>
                  <select
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-amber-500/60 focus:outline-none cursor-pointer"
                  >
                    <option value="Dubai Airport VIP Terminal 3">Dubai Airport (DXB) VIP Terminal 3 Tarmac</option>
                    <option value="Al Maktoum Airport (DWC VIP)">Al Maktoum Airport (DWC) Private Aviation</option>
                    <option value="Palm Jumeirah & Atlantis The Royal">Palm Jumeirah & Atlantis The Royal Valet</option>
                    <option value="Downtown Dubai & Burj Khalifa">Downtown Dubai & Burj Khalifa Boulevard</option>
                    <option value="DIFC Gate Precinct 4">DIFC Gate Precinct 4</option>
                    <option value="Abu Dhabi Yas Marina / Saadiyat">Abu Dhabi Yas Marina / Saadiyat Island</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white focus:border-amber-500/60 focus:outline-none"
                  />
                  <select
                    value={durationDays}
                    onChange={(e) => setDurationDays(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-amber-500/60 focus:outline-none"
                  >
                    <option value="1">1 Day</option>
                    <option value="3">3 Days (Weekend Pass)</option>
                    <option value="7">7 Days (-20% Weekly Rate)</option>
                    <option value="14">14 Days</option>
                    <option value="30">30 Days (-40% Monthly Corporate)</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  3. Zero-Deposit Settlement Preference
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['Credit Card (0% Deposit)', 'Cryptocurrency (USDT/BTC)', 'Corporate Invoice'] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentPreference(method)}
                      className={`p-2.5 rounded-xl border text-[11px] font-mono text-center transition-all ${
                        paymentPreference === method
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 font-bold'
                          : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <textarea
                  rows={2}
                  placeholder="Flight number for tarmac meet, child seat, or hotel concierge instructions..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-amber-500/60 focus:outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 hover:from-amber-400 hover:to-rose-400 text-zinc-950 font-bold uppercase tracking-wider text-xs shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Confirm Supercar Dispatch</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800/80 pt-4 text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>RTA Licensed Luxury Fleet #84920 • 0% Security Deposit Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
