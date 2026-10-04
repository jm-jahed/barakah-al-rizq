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
  MessageSquare 
} from 'lucide-react';
import { SHOWROOM_ATELIERS } from '@/data/furnitureData';

interface FormaShowroomsProps {
  isOpenBooking?: boolean;
  onCloseBooking?: () => void;
  onOpenBooking?: () => void;
}

export const FormaShowrooms: React.FC<FormaShowroomsProps> = ({
  isOpenBooking: controlledIsOpen,
  onCloseBooking: controlledOnClose,
  onOpenBooking: controlledOnOpen
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const handleOpen = controlledOnOpen || (() => setInternalIsOpen(true));
  const handleClose = controlledOnClose || (() => setInternalIsOpen(false));

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    showroom: 'd3-dubai',
    date: '',
    consultationType: 'Villa Living Room Architectural Scheme'
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <section id="showrooms" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#151412] border-t border-b border-[#2C2926] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Brand Philosophy Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1E1B18] via-[#171513] to-[#100F0D] border border-[#3A352F] p-8 sm:p-14 overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-6 z-10 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6AF73]/10 border border-[#E6AF73]/20 text-[#E6AF73] text-xs font-mono tracking-widest uppercase">
              <Crown className="w-3.5 h-3.5" />
              <span>Quiet Luxury • Architectural Living</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F2EB] tracking-tight leading-tight font-serif">
              Quiet Luxury. Architectural. <br />
              <span className="italic text-[#E6AF73]">
                Tactile. Timeless.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#C5BDB5] leading-relaxed font-light">
              We shape furniture around the natural rhythms of life. Every piece is constructed to serve as an architectural anchor — elevating residential and hospitality spaces through proportion, honest materials, and uncompromised European joinery across the United Arab Emirates.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={handleOpen}
                className="px-6 py-3.5 rounded-2xl bg-[#F3EFEA] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#E6AF73] transition-all shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Reserve Private Atelier Consultation</span>
              </button>

              <a
                href="https://wa.me/971523394001?text=Hello%20FORMA%20ATELIER,%20I%20would%20like%20to%20discuss%20an%20interior%20project."
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

        {/* 3 UAE Showrooms Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F2EB] font-serif">
              Flagship UAE Ateliers & Material Libraries
            </h3>
            <span className="text-xs font-mono text-[#A8A096] hidden sm:inline">
              Dubai Design District, Al Quoz & Saadiyat Island
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SHOWROOM_ATELIERS.map((loc) => (
              <div
                key={loc.id}
                className="rounded-3xl bg-[#1A1815] border border-[#2F2B26] p-6 flex flex-col justify-between shadow-xl space-y-6 hover:border-[#E6AF73]/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#E6AF73] font-bold uppercase tracking-widest">
                      {loc.city}, UAE
                    </span>
                    <h4 className="text-lg font-bold text-[#F5F2EB] mt-1 font-serif">
                      {loc.name}
                    </h4>
                    <p className="text-xs text-[#A8A096] mt-1 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E6AF73] shrink-0 mt-0.5" />
                      <span>{loc.location}</span>
                    </p>
                  </div>

                  <div className="text-xs text-[#A8A096] font-mono space-y-1 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#7A746C]" />
                      <span>{loc.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#7A746C]" />
                      <span>{loc.phone}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    {loc.features.map((feat, i) => (
                      <div key={i} className="text-[11px] text-[#C5BDB5] flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#E6AF73] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setBookingForm({ ...bookingForm, showroom: loc.id });
                    handleOpen();
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-[#E6AF73] hover:text-black border border-white/10 hover:border-[#E6AF73] text-white text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Book Consultation Here →
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Booking Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={handleClose} />

          <div className="relative w-full max-w-xl bg-[#171513] border border-[#3A352F] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#2C2926]">
              <div className="flex items-center gap-2 text-white font-bold text-lg font-serif">
                <Calendar className="w-5 h-5 text-[#E6AF73]" />
                <span>Reserve VIP Interior Consultation</span>
              </div>
              <button onClick={handleClose} className="p-2 rounded-xl bg-white/5 text-[#A8A096]">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!bookingConfirmed ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#A8A096]">Client Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sheikha Fatima Al-Qasimi"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full bg-black/50 border border-[#2C2926] rounded-xl p-3 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-[#A8A096]">UAE Mobile (+971)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 234 5678"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full bg-black/50 border border-[#2C2926] rounded-xl p-3 text-xs text-white font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-[#A8A096]">Preferred Atelier</label>
                    <select
                      value={bookingForm.showroom}
                      onChange={(e) => setBookingForm({ ...bookingForm, showroom: e.target.value })}
                      className="w-full bg-black/50 border border-[#2C2926] rounded-xl p-3 text-xs text-white font-mono"
                    >
                      <option value="d3-dubai">Dubai Design District (d3)</option>
                      <option value="al-quoz-atelier">Al Quoz Craft Studio</option>
                      <option value="saadiyat-abu-dhabi">Saadiyat Island Abu Dhabi</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-[#A8A096]">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                      className="w-full bg-black/50 border border-[#2C2926] rounded-xl p-3 text-xs text-white font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-[#A8A096]">Consultation Focus</label>
                    <select
                      value={bookingForm.consultationType}
                      onChange={(e) => setBookingForm({ ...bookingForm, consultationType: e.target.value })}
                      className="w-full bg-black/50 border border-[#2C2926] rounded-xl p-3 text-xs text-white"
                    >
                      <option value="Villa Living Room Architectural Scheme">Villa Living Room Architectural Scheme</option>
                      <option value="Bespoke Travertine & Dining Table Commission">Bespoke Travertine & Dining Table Commission</option>
                      <option value="Full Villa Furniture Curatorial Package">Full Villa Furniture Curatorial Package</option>
                      <option value="Penthouse Master Suite Furniture Scheme">Penthouse Master Suite Furniture Scheme</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#E6AF73] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#D89F60] transition-all shadow-lg"
                >
                  Confirm Atelier Appointment
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#E6AF73]/20 text-[#E6AF73] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white font-serif">VIP Fitting Reserved</h4>
                <p className="text-xs text-[#C5BDB5] max-w-sm mx-auto">
                  Thank you, {bookingForm.name}. Our Senior Interior Architect will contact you via WhatsApp at {bookingForm.phone} with your private consultation itinerary.
                </p>
                <button
                  onClick={() => {
                    setBookingConfirmed(false);
                    handleClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold uppercase"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
