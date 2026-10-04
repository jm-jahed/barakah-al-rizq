'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Truck,
  CheckCircle2,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Phone,
  Building,
  User,
  Mail
} from 'lucide-react';
import { LOGISTICS_BRAND_INFO } from '@/data/logisticsData';

interface BookingRFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: any;
}

export const BookingRFQModal: React.FC<BookingRFQModalProps> = ({
  isOpen,
  onClose,
  prefillData
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceType: prefillData?.packageType || prefillData?.serviceClass || 'Express Same-Day Delivery',
    origin: prefillData?.origin || 'Dubai South Logistics District, UAE',
    destination: prefillData?.destination || 'Abu Dhabi ADGM Al Maryah Island, UAE',
    pickupDate: 'Tomorrow Morning (09:00 - 12:00)',
    cargoDetails: prefillData?.weight ? `Weight: ${prefillData.weight}, Dims: ${prefillData.dimensions || 'Standard'}` : '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#0A0E1A] border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white">Booking Request Dispatched</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your RFQ has been logged into the Velox Command Center (Ref: <strong>VLX-RFQ-{Math.floor(100000 + Math.random() * 900000)}</strong>). Our dedicated dispatch officer will contact you within 15 minutes.
              </p>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-xs font-mono text-slate-400 space-y-1">
                <div>Service: <strong className="text-white">{formData.serviceType}</strong></div>
                <div>Route: <strong className="text-cyan-300">{formData.origin} ➔ {formData.destination}</strong></div>
              </div>

              <div className="pt-4 flex items-center justify-center gap-4">
                <a
                  href={`${LOGISTICS_BRAND_INFO.whatsapp}%20I%20just%20submitted%20booking%20request%20for%20${encodeURIComponent(formData.serviceType)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Follow-up</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-slate-800 text-slate-200 text-xs font-bold hover:bg-slate-700"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="space-y-2 pr-10 mb-6">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  OFFICIAL COMMERCIAL RFQ
                </span>
                <h3 className="text-2xl font-black text-white">
                  Schedule Pickup & Request Binding Quote
                </h3>
                <p className="text-xs text-slate-400">
                  Guaranteed sub-15 minute response from Velox UAE operations desk.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Contact Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-mono font-bold uppercase">Contact Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Mansoori"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-mono font-bold uppercase">Company Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Al Futtaim Group / Private"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-mono font-bold uppercase">UAE Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-mono font-bold uppercase">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="tariq@company.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Service & Route */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-mono font-bold uppercase">Service Selection</label>
                    <input
                      type="text"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-mono font-bold uppercase">Preferred Pickup Window</label>
                    <input
                      type="text"
                      value={formData.pickupDate}
                      onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>
                </div>

                {/* Origin & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-mono font-bold uppercase">Pickup Origin Address</label>
                    <input
                      type="text"
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-mono font-bold uppercase">Delivery Destination Address</label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-slate-400 font-mono font-bold uppercase">Cargo Description & Special Handling Instructions</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 2 pallets of fragile optical lenses, requires tail-lift and GDP temperature certificate..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 flex items-center gap-1.5 font-mono">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Strict Confidentiality Guaranteed</span>
                  </span>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs flex items-center gap-2 shadow-lg shadow-cyan-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Confirm & Dispatch RFQ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
