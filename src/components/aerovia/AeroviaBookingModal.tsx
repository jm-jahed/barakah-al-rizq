'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Plane, 
  Building2, 
  Calendar, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { FlightResult, HotelProperty, AEROVIA_ORIGIN_AIRPORTS, AEROVIA_DESTINATION_AIRPORTS } from '@/data/aeroviaData';

interface AeroviaBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFlight?: FlightResult | null;
  selectedHotel?: HotelProperty | null;
}

export const AeroviaBookingModal: React.FC<AeroviaBookingModalProps> = ({
  isOpen,
  onClose,
  selectedFlight,
  selectedHotel
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    originCity: 'DXB — Dubai International, UAE',
    destinationCity: 'HND — Tokyo Haneda, Japan',
    dates: '12 Nov — 17 Nov 2026',
    cabinClass: 'Business Suite',
    travelers: '2 Adults',
    specialRequests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-[#0a1524] to-[#040810] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4 w-fit">
                <Plane className="w-3.5 h-3.5" />
                Global Journey Reservation Request
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Compose & Lock Your Luxury Journey
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Connect with our Dubai travel concierge to secure direct multi-GDS flight suites, 5-star palace rooms, and bespoke itineraries in AED across 20 global departure hubs and 20 curated destinations.
              </p>

              {/* Selected Flight or Hotel Banner */}
              {(selectedFlight || selectedHotel) && (
                <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 mb-6 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-amber-400 font-bold block mb-0.5">Selected Itinerary Component:</span>
                    <span className="text-white font-bold">
                      {selectedFlight ? `${selectedFlight.airline} (${selectedFlight.flightNumber})` : selectedHotel?.name}
                    </span>
                  </div>
                  <span className="text-amber-300 font-bold text-sm">
                    {selectedFlight ? `AED ${selectedFlight.priceAED.toLocaleString()}` : `AED ${selectedHotel?.pricePerNightAED.toLocaleString()} / night`}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Lead Traveler Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        required
                        type="text"
                        placeholder="Tariq Al-Nuaimi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Contact Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        required
                        type="email"
                        placeholder="tariq@emiratesgroup.ae"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Contact Phone (UAE / +971)</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        required
                        type="text"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Origin Departure (20 Hubs)</label>
                    <div className="relative">
                      <select
                        value={formData.originCity}
                        onChange={(e) => setFormData({ ...formData, originCity: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-500 text-xs font-mono text-white focus:outline-none"
                      >
                        {AEROVIA_ORIGIN_AIRPORTS.map((o) => (
                          <option key={o.id} value={`${o.code} — ${o.city}, ${o.country}`}>
                            {o.code} — {o.city} ({o.country})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Destination Arrival (20 Dest)</label>
                    <div className="relative">
                      <select
                        value={formData.destinationCity}
                        onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-cyan-800/80 focus:border-cyan-500 text-xs font-mono text-cyan-300 focus:outline-none"
                      >
                        {AEROVIA_DESTINATION_AIRPORTS.map((d) => (
                          <option key={d.id} value={`${d.code} — ${d.city}, ${d.country}`}>
                            {d.code} — {d.city} ({d.country})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Dates of Travel</label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="12 Nov — 17 Nov 2026"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-500 text-sm text-white placeholder-slate-600 focus:outline-none font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Cabin Class & Travelers</label>
                    <select
                      value={formData.cabinClass}
                      onChange={(e) => setFormData({ ...formData, cabinClass: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-500 text-sm text-white focus:outline-none font-mono text-xs"
                    >
                      <option value="First Class Suite">First Class Suite (2 Adults)</option>
                      <option value="Business Suite">Business Class Suite (2 Adults)</option>
                      <option value="Premium Economy">Premium Economy (2 Adults)</option>
                      <option value="Private Jet Charter">Private Jet Charter (4-8 Guests)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Bespoke Concierge Requests (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="E.g. Michelin dining reservations, Maybach chauffeur transfer, high-floor suite..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-500 text-sm text-white placeholder-slate-600 focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] hover:from-[#c5a028] hover:to-[#d4af37] text-black font-extrabold text-sm transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 font-mono"
                  >
                    Confirm & Lock 72-Hour Rate <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[10px] font-mono text-center text-slate-500 pt-1">
                  Travel Platform Simulation • No Payment Charged • 72-Hour Zero-Risk Fare Lock
                </p>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Journey Locked for 72 Hours</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your luxury journey proposal for <strong className="text-amber-300">{formData.destinationCity}</strong> has been created with reference <strong className="text-white">#AER-TYO-8820</strong>. A complete digital itinerary has been formatted.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
