'use strict';
import React, { useState } from 'react';
import { ConstructionScope } from '@/data/constructionCatalogData';
import { X, Calendar, Clock, Crown, ShieldCheck, CheckCircle2, User, Phone, Mail, Compass, ArrowRight, MapPin, Building } from 'lucide-react';

interface ConstructionSiteSurveyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedScope?: ConstructionScope | null;
  customEstimationPayload?: {
    propertyType: string;
    buaSqFt: number;
    finishTier: string;
    authorityFastTrack: boolean;
    totalAED: number;
    ratePerSqFt: number;
    timelineMonths: number;
  } | null;
}

export const ConstructionSiteSurveyDrawer: React.FC<ConstructionSiteSurveyDrawerProps> = ({
  isOpen,
  onClose,
  selectedScope,
  customEstimationPayload
}) => {
  const [propertyLocation, setPropertyLocation] = useState<string>('Palm Jumeirah Frond N, Villa Plot');
  const [preferredDate, setPreferredDate] = useState<string>('This Thursday, 10:00 AM GST');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [projectStage, setProjectStage] = useState<string>('Plot Purchased / Ready for Ground-Up Design');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const dates = [
    { label: 'Tomorrow (Priority Inspection)', value: 'Tomorrow, 10:00 AM GST' },
    { label: 'This Thursday', value: 'Thursday, 2:00 PM GST' },
    { label: 'This Friday Morning', value: 'Friday, 9:30 AM GST' },
    { label: 'This Saturday', value: 'Saturday, 11:00 AM GST' }
  ];

  const estimatedValue = customEstimationPayload
    ? customEstimationPayload.totalAED
    : selectedScope
    ? selectedScope.priceAED
    : 4500000;

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
        className="w-full max-w-xl h-full bg-neutral-950 border-l border-amber-500/30 flex flex-col justify-between overflow-y-auto text-neutral-200 shadow-2xl p-6 sm:p-8 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Compass className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                Chartered Site Survey Protocol
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white">
              {isSubmitted ? 'Site Survey Dispatched' : 'Book On-Site Engineering Survey'}
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
            {/* Selected Scope Card */}
            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-amber-400 mb-1">
                  Selected Construction Scope
                </p>
                <h4 className="text-base font-serif font-bold text-white line-clamp-1">
                  {customEstimationPayload
                    ? `${customEstimationPayload.propertyType} (${customEstimationPayload.buaSqFt.toLocaleString()} sq ft)`
                    : selectedScope
                    ? selectedScope.title
                    : 'Turnkey Architectural Design & Construction'}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {customEstimationPayload
                    ? `Estimated: AED ${customEstimationPayload.totalAED.toLocaleString()} • ~${customEstimationPayload.timelineMonths} Mos`
                    : selectedScope
                    ? `${selectedScope.buaSqFt.toLocaleString()} sq ft • ${selectedScope.location}`
                    : 'Dubai Municipality Grade-1 Project Director On-Site'}
                </p>
              </div>

              <div className="text-right shrink-0 pl-3">
                <span className="text-[10px] uppercase text-neutral-500 block">Survey Fee</span>
                <span className="text-xs font-semibold text-emerald-400">Complimentary</span>
              </div>
            </div>

            {/* Plot / Site Location */}
            <div className="space-y-4">
              <label className="text-xs uppercase font-semibold text-neutral-300 block flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                1. UAE Site / Property Location
              </label>

              <input
                type="text"
                placeholder="e.g. Palm Jumeirah Frond N, Plot #412 / Emirates Hills Villa 18"
                required
                value={propertyLocation}
                onChange={(e) => setPropertyLocation(e.target.value)}
                className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500"
              />

              <select
                value={projectStage}
                onChange={(e) => setProjectStage(e.target.value)}
                aria-label="Current Project Stage"
                className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-500"
              >
                <option value="Plot Purchased / Ready for Ground-Up Design">Plot Purchased / Ready for Ground-Up Design</option>
                <option value="Existing Villa / Complete Core & Shell Renovation">Existing Villa / Complete Core & Shell Renovation</option>
                <option value="DIFC / Commercial Fitted Office Shell">DIFC / Commercial Fitted Office Shell</option>
                <option value="Architectural Drawings Ready / Seeking Tier-1 Contractor">Architectural Drawings Ready / Seeking Tier-1 Contractor</option>
              </select>
            </div>

            {/* Date Selection */}
            <div>
              <label className="text-xs uppercase font-semibold text-neutral-300 block mb-2.5 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                2. Preferred Site Inspection Date
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dates.map((d, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPreferredDate(d.value)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      preferredDate === d.value
                        ? 'bg-amber-500/10 border-amber-500 text-white font-medium'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Contact Details */}
            <div className="space-y-3 pt-2">
              <label className="text-xs uppercase font-semibold text-neutral-300 block flex items-center gap-2">
                <User className="w-4 h-4 text-amber-400" />
                3. Property Owner / Representative Contact
              </label>

              <input
                type="text"
                placeholder="Full Name & Title (e.g. H.E. / Sheikh / Founder)"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="tel"
                  placeholder="UAE Mobile (+971 50 ...)"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500"
                />
                <input
                  type="email"
                  placeholder="Official Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/25 transition-all mt-4 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Confirm Site Survey & Engineering Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Confirmation */
          <div className="flex-1 py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              Site Inspection Confirmed
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Chartered Engineer Dispatched
            </h4>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-6 leading-relaxed">
              Our Senior Project Director has scheduled your site survey at <strong className="text-white">{propertyLocation}</strong> for <strong className="text-white">{preferredDate}</strong>. Formal appointment coordinates have been dispatched via WhatsApp to <strong className="text-amber-400">{phone || '+971 50 ...'}</strong>.
            </p>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3.5 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all"
            >
              Done & Return to Construction Suite
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-neutral-800 text-center text-[10px] text-neutral-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Dubai Municipality License #698241 • Al Quoz Joinery Facility</span>
        </div>
      </div>
    </div>
  );
};
