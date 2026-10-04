'use client';

import React, { useState } from 'react';
import { 
  Crown, 
  MapPin, 
  Clock, 
  Phone, 
  Check, 
  X, 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { SHOWROOM_LOCATIONS } from '@/data/consumerElectronicsData';

interface AetheraShowroomsProps {
  isOpenBooking: boolean;
  onCloseBooking: () => void;
  onOpenBooking: () => void;
}

export const AetheraShowrooms: React.FC<AetheraShowroomsProps> = ({
  isOpenBooking,
  onCloseBooking,
  onOpenBooking
}) => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    showroom: 'dubai-mall',
    date: '',
    timeSlot: '14:00 - 15:30 (Afternoon Private)',
    interest: 'Acoustic Listening & Ergonomics'
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <section id="showrooms" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C10] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Brand Philosophy Hero Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#12141A] via-[#0E1015] to-[#090A0C] border border-white/10 p-8 sm:p-14 overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-6 z-10 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase">
              <Crown className="w-3.5 h-3.5" />
              <span>Brand Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              More Than Gadgets. <br />
              <span className="font-serif italic text-amber-300">
                Technology should disappear into the experience.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              We reject the plastic disposability of mainstream consumer electronics. At AETHERA, hardware is designed as an enduring architectural instrument — machined from aerospace metals, precision-tuned for acoustic and computational absolute, and delivered with white-glove respect across the United Arab Emirates.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Book Private Atelier Appointment</span>
              </button>

              <a
                href="https://wa.me/971523394001?text=Hello%20AETHERA,%20I%20would%20like%20to%20reserve%20a%20private%20fitting."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-medium text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp VIP Concierge</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 UAE Flagship Ateliers */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Flagship UAE Ateliers & Sound Sanctuaries
            </h3>
            <span className="text-xs font-mono text-white/50 hidden sm:inline">
              3 Showrooms across Dubai & Abu Dhabi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SHOWROOM_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="rounded-3xl bg-[#0E1015] border border-white/10 p-6 flex flex-col justify-between shadow-xl space-y-6 hover:border-amber-400/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest">
                      {loc.city}, UAE
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      {loc.name}
                    </h4>
                    <p className="text-xs text-white/60 mt-1 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{loc.zone}</span>
                    </p>
                  </div>

                  <div className="text-xs text-white/50 font-mono space-y-1 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-white/40" />
                      <span>{loc.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-white/40" />
                      <span>{loc.phone}</span>
                    </div>
                  </div>

                  {/* Atelier Features */}
                  <div className="space-y-1.5 pt-2">
                    {loc.features.map((feat, i) => (
                      <div key={i} className="text-[11px] text-white/75 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setBookingForm({ ...bookingForm, showroom: loc.id });
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 hover:border-amber-400 text-white text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Reserve Fitting Here →
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Booking Modal */}
      {isOpenBooking && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={onCloseBooking} />

          <div className="relative w-full max-w-xl bg-[#0E1015] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>Reserve VIP Atelier Consultation</span>
              </div>
              <button onClick={onCloseBooking} className="p-2 rounded-xl bg-white/5 text-white/70">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!bookingConfirmed ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-white/50">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sheikh Saeed Al-Nahyan"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-white/50">UAE Mobile (+971)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-white/50">Preferred Atelier</label>
                    <select
                      value={bookingForm.showroom}
                      onChange={(e) => setBookingForm({ ...bookingForm, showroom: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white font-mono"
                    >
                      <option value="dubai-mall">Dubai Mall Fashion Avenue</option>
                      <option value="difc-gate">DIFC Gate Avenue</option>
                      <option value="abu-dhabi-galleria">The Galleria Abu Dhabi</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-white/50">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-white/50">Consultation Focus</label>
                    <select
                      value={bookingForm.interest}
                      onChange={(e) => setBookingForm({ ...bookingForm, interest: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white"
                    >
                      <option value="Acoustic Listening & Ergonomics">Private Sound Sanctuary Session</option>
                      <option value="Custom Mechanical Keyboard Bar">3D Custom Keyboard Assembly Bar</option>
                      <option value="Spatial AR/VR Calibration">Spatial AR/VR Calibration</option>
                      <option value="Executive Desk Suite Fitting">Executive Desk Suite Ergonomics</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-lg"
                >
                  Confirm Atelier Reservation
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">VIP Appointment Confirmed</h4>
                <p className="text-xs text-white/70 max-w-sm mx-auto">
                  Thank you, {bookingForm.name}. Our Senior Hardware Concierge will reach out via WhatsApp at {bookingForm.phone} with your private entrance pass.
                </p>
                <button
                  onClick={() => {
                    setBookingConfirmed(false);
                    onCloseBooking();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold uppercase"
                >
                  Close Confirmation
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
