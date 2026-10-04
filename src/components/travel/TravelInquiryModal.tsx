'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  Calendar, 
  Plane, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall, 
  Sparkles,
  Users,
  Compass
} from 'lucide-react';

interface TravelInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const TravelInquiryModal: React.FC<TravelInquiryModalProps> = ({
  isOpen,
  onClose,
  initialContext = '',
}) => {
  const [destinationPreference, setDestinationPreference] = useState<string>('Maldives Overwater Sanctuaries');
  const [flightCabin, setFlightCabin] = useState<string>('Emirates / Etihad First Class');
  const [budgetAED, setBudgetAED] = useState<string>('AED 50,000 – AED 100,000');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [travelDates, setTravelDates] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialContext) {
      setNotes(`Inquiry Context: ${initialContext}`);
    }
  }, [initialContext]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0C1018] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-slate-200"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#121722] to-[#0C1018]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
                  BESPOKE LUXURY CONSULTATION
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Plan Your Private Journey
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Consultation Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">
                    Consultation Request Assigned
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-mono">
                    A Senior Luxury Travel Director has received your specifications. You will receive a personalized day-by-day proposal with flight options within 2 hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 max-w-sm mx-auto text-xs font-mono text-slate-400 text-left space-y-1">
                  <div><span className="text-slate-500">Reference:</span> AUR-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div><span className="text-slate-500">Assigned Desk:</span> Dubai Downtown Flagship</div>
                  <div><span className="text-slate-500">Chauffeur Service:</span> Included DXB/AUH</div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Preferred Destination */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                    Preferred Destination / Sanctuary:
                  </label>
                  <select
                    value={destinationPreference}
                    onChange={(e) => setDestinationPreference(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="Maldives Overwater Sanctuaries" className="bg-[#0C1018] text-white">Maldives Private Atolls & Overwater Reserves</option>
                    <option value="Swiss Alpine Luxury & Glacier Express" className="bg-[#0C1018] text-white">Swiss Alpine Chalets & Glacier Express (St. Moritz & Zermatt)</option>
                    <option value="Amalfi Coast & Capri Yacht Charter" className="bg-[#0C1018] text-white">Amalfi Coast, Capri & Tuscan Private Estates</option>
                    <option value="Tokyo Penthouse & Kyoto Ryokan" className="bg-[#0C1018] text-white">Kyoto Ryokans, Tokyo Penthouse & Fuji Helitours</option>
                    <option value="Serengeti Private Safari Camp" className="bg-[#0C1018] text-white">Serengeti & Ngorongoro Private Tented Safari</option>
                    <option value="French Riviera & Monaco Superyacht" className="bg-[#0C1018] text-white">French Riviera, Monaco & Superyacht Charter</option>
                    <option value="Multi-Destination Bespoke Journey" className="bg-[#0C1018] text-white">Multi-Destination Global Grand Tour</option>
                  </select>
                </div>

                {/* Cabin Class & Budget in AED */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                      Preferred Aviation Tier:
                    </label>
                    <select
                      value={flightCabin}
                      onChange={(e) => setFlightCabin(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                    >
                      <option value="Emirates / Etihad First Class" className="bg-[#0C1018] text-white">Emirates / Etihad First Class Suites</option>
                      <option value="Business Class Lie-Flat" className="bg-[#0C1018] text-white">Business Class Lie-Flat</option>
                      <option value="Private Jet Charter (Midsize/Heavy)" className="bg-[#0C1018] text-white">Private Jet Charter (Direct DWC/AUH)</option>
                      <option value="Hotel Only (Client Arranging Flights)" className="bg-[#0C1018] text-white">Hotel & Concierge Only</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                      Estimated Budget (AED):
                    </label>
                    <select
                      value={budgetAED}
                      onChange={(e) => setBudgetAED(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                    >
                      <option value="AED 30,000 – AED 50,000" className="bg-[#0C1018] text-white">AED 30,000 – AED 50,000</option>
                      <option value="AED 50,000 – AED 100,000" className="bg-[#0C1018] text-white">AED 50,000 – AED 100,000</option>
                      <option value="AED 100,000 – AED 250,000" className="bg-[#0C1018] text-white">AED 100,000 – AED 250,000</option>
                      <option value="AED 250,000+" className="bg-[#0C1018] text-white">AED 250,000+ (Ultra-Luxe / Private Jet)</option>
                    </select>
                  </div>
                </div>

                {/* Name & Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                      Full Name: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="H.E. / Mr. / Ms. Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                      Target Travel Dates / Window:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Eid Al-Fitr / Next Month"
                      value={travelDates}
                      onChange={(e) => setTravelDates(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                      Email Address: *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@luxury.ae"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                      WhatsApp / Phone: *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                    Special Requests (Dietary, Villa Specs, Butler, Yacht):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your party size, anniversary celebrations, preferred hotel brands..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400 leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Assigning Travel Director...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Bespoke Journey Inquiry in AED</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
