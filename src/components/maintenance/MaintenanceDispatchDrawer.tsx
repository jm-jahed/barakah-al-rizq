'use strict';
import React, { useState } from 'react';
import { MaintenanceScope } from '@/data/maintenanceCatalogData';
import { X, Calendar, Clock, Crown, ShieldCheck, CheckCircle2, User, Phone, Mail, Truck, ArrowRight, MapPin, Wrench } from 'lucide-react';

interface MaintenanceDispatchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedScope?: MaintenanceScope | null;
  customAmcPayload?: {
    propertyType: string;
    acUnitsCount: number;
    amcTier: string;
    addons: string[];
    totalAnnualAED: number;
    monthlyEquivalentAED: number;
  } | null;
}

export const MaintenanceDispatchDrawer: React.FC<MaintenanceDispatchDrawerProps> = ({
  isOpen,
  onClose,
  selectedScope,
  customAmcPayload
}) => {
  const [villaLocation, setVillaLocation] = useState<string>('Palm Jumeirah Frond K, Villa 12');
  const [preferredSlot, setPreferredSlot] = useState<string>('Instant Emergency Dispatch (28 Mins SLA)');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const slots = [
    { label: 'Instant Emergency Dispatch (28 Mins)', value: 'Instant Emergency Dispatch (28 Mins SLA)' },
    { label: 'Today (Next 2 Hours Window)', value: 'Today, 2:00 PM - 4:00 PM' },
    { label: 'Tomorrow Morning (9:00 AM)', value: 'Tomorrow, 9:00 AM - 11:00 AM' },
    { label: 'Scheduled Preventative Slot', value: 'This Weekend, 10:00 AM' }
  ];

  const estimatedValue = customAmcPayload
    ? customAmcPayload.totalAnnualAED
    : selectedScope
    ? selectedScope.priceAED
    : 850;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="w-full max-w-xl h-full bg-neutral-950 border-l border-emerald-500/30 flex flex-col justify-between overflow-y-auto text-neutral-200 shadow-2xl p-6 sm:p-8 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                Mobile Van Dispatch Hub
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white">
              {isSubmitted ? 'Van Dispatched On-Route' : 'Dispatch Mobile Workshop Van'}
            </h3>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex-1 py-6 flex flex-col gap-6">
            {/* Selected Service Card */}
            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-emerald-400 mb-1">
                  Selected Engineering Engagement
                </p>
                <h4 className="text-base font-serif font-bold text-white line-clamp-1">
                  {customAmcPayload
                    ? `${customAmcPayload.propertyType} (${customAmcPayload.amcTier.split('(')[0]})`
                    : selectedScope
                    ? selectedScope.title
                    : 'Precision HVAC, Electrical & Plumbing Overhaul'}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {customAmcPayload
                    ? `AED ${customAmcPayload.totalAnnualAED.toLocaleString()} / year • ${customAmcPayload.acUnitsCount} AC Units`
                    : selectedScope
                    ? `SLA: ${selectedScope.responseTime} • ${selectedScope.communityTarget}`
                    : 'GPS Mobile Workshop Van with OEM Parts'}
                </p>
              </div>

              <div className="text-right shrink-0 pl-3">
                <span className="text-[10px] uppercase text-neutral-500 block">Rate</span>
                <span className="text-base font-serif font-bold text-emerald-400">
                  AED {estimatedValue.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Villa / Apartment Location */}
            <div className="space-y-4">
              <label className="text-xs uppercase font-semibold text-neutral-300 block flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                1. UAE Property Address & Gate Code
              </label>

              <input
                type="text"
                placeholder="e.g. Palm Jumeirah Frond K, Villa 12 / Emirates Hills Sector E"
                required
                value={villaLocation}
                onChange={(e) => setVillaLocation(e.target.value)}
                className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Dispatch Priority Slot */}
            <div>
              <label className="text-xs uppercase font-semibold text-neutral-300 block mb-2.5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                2. Select Arrival SLA Window
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {slots.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPreferredSlot(s.value)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      preferredSlot === s.value
                        ? 'bg-emerald-500/10 border-emerald-500 text-white font-medium'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Contact Details */}
            <div className="space-y-3 pt-2">
              <label className="text-xs uppercase font-semibold text-neutral-300 block flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                3. Resident / Property Manager Contact
              </label>

              <input
                type="text"
                placeholder="Full Name & Title"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-500"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="tel"
                  placeholder="UAE Mobile (+971 50 ...)"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-500"
                />
                <input
                  type="email"
                  placeholder="Email Address for Service Report"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-emerald-500/25 transition-all mt-4 flex items-center justify-center gap-2"
            >
              <Truck className="w-4 h-4" />
              <span>Confirm & Dispatch Van (28-Min SLA)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Confirmation */
          <div className="flex-1 py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2">
              Mobile Van Dispatched
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Master Technicians En-Route
            </h4>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-6 leading-relaxed">
              Mobile Workshop Unit #04 has been dispatched to <strong className="text-white">{villaLocation}</strong> with expected arrival for <strong className="text-white">{preferredSlot}</strong>. Live GPS tracking link and technician credentials have been sent via WhatsApp to <strong className="text-emerald-400">{phone || '+971 50 ...'}</strong>.
            </p>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3.5 rounded-full bg-emerald-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all"
            >
              Done & Return to Maintenance Suite
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-neutral-800 text-center text-[10px] text-neutral-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>DEWA Master License #914280 • Dubai Municipality Permit DM-HEALTH-7721</span>
        </div>
      </div>
    </div>
  );
};
