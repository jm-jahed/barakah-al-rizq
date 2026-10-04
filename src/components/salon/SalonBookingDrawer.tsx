'use strict';
import React, { useState } from 'react';
import { SalonTreatment, SALON_STYLISTS, SALON_BRAND_INFO } from '@/data/salonData';
import { X, Calendar, Clock, Crown, ShieldCheck, CheckCircle2, User, Phone, Mail, Sparkle, ArrowRight } from 'lucide-react';

interface SalonBookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatment?: SalonTreatment | null;
  customPackagePayload?: {
    packageName: string;
    guests: number;
    suiteTier: string;
    addons: string[];
    totalAED: number;
  } | null;
}

export const SalonBookingDrawer: React.FC<SalonBookingDrawerProps> = ({
  isOpen,
  onClose,
  selectedTreatment,
  customPackagePayload
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 2:00 PM');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('14:00 GST');
  const [selectedStylistId, setSelectedStylistId] = useState<string>(SALON_STYLISTS[0]?.id || '');
  const [upgradeSuite, setUpgradeSuite] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const dates = [
    { label: 'Today (Priority Slot)', value: 'Today, 4:30 PM' },
    { label: 'Tomorrow', value: 'Tomorrow, 2:00 PM' },
    { label: 'This Thursday', value: 'Thursday, 11:00 AM' },
    { label: 'This Friday (VIP Weekend)', value: 'Friday, 3:00 PM' },
    { label: 'This Saturday', value: 'Saturday, 1:00 PM' }
  ];

  const timeSlots = [
    '10:00 AM GST',
    '11:30 AM GST',
    '01:00 PM GST',
    '02:30 PM GST',
    '04:00 PM GST',
    '05:30 PM GST',
    '07:00 PM GST',
    '08:30 PM GST'
  ];

  const estimatedAED = customPackagePayload
    ? customPackagePayload.totalAED
    : selectedTreatment
    ? selectedTreatment.priceAED + (upgradeSuite ? 850 : 0)
    : 650;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="w-full max-w-xl h-full bg-neutral-950 border-l border-amber-500/30 flex flex-col justify-between overflow-y-auto text-neutral-200 shadow-2xl p-6 sm:p-8 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                VIP Atelier Reservation
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white">
              {isSubmitted ? 'Reservation Confirmed' : 'Book Your Beauty Experience'}
            </h3>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex-1 py-6 flex flex-col gap-6">
            {/* Treatment or Custom Package Card */}
            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-amber-400 mb-1">
                  Selected Experience
                </p>
                <h4 className="text-base font-serif font-bold text-white">
                  {customPackagePayload
                    ? customPackagePayload.packageName
                    : selectedTreatment
                    ? selectedTreatment.title
                    : 'Bespoke Atelier Consultation & Ritual'}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {customPackagePayload
                    ? `${customPackagePayload.guests} Guest(s) • ${customPackagePayload.suiteTier}`
                    : selectedTreatment
                    ? `${selectedTreatment.durationMinutes} Mins • ${selectedTreatment.brandProduct}`
                    : 'Private d3 Consultation Room'}
                </p>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase text-neutral-500 block">Total Rate</span>
                <span className="text-base font-serif font-bold text-amber-400">
                  AED {estimatedAED.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="text-xs uppercase font-semibold text-neutral-300 block mb-2.5 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                1. Select Preferred Date
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dates.map((d, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDate(d.value)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      selectedDate === d.value
                        ? 'bg-amber-500/10 border-amber-500 text-white font-medium'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="text-xs uppercase font-semibold text-neutral-300 block mb-2.5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                2. Select Preferred Time (GST)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((ts, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedTimeSlot(ts)}
                    className={`py-2 px-1 rounded-xl text-center border text-[11px] transition-all ${
                      selectedTimeSlot === ts
                        ? 'bg-amber-500 text-neutral-950 font-bold border-amber-500'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    {ts.replace(' GST', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Stylist Selector */}
            <div>
              <label className="text-xs uppercase font-semibold text-neutral-300 block mb-2.5 flex items-center gap-2">
                <User className="w-4 h-4 text-amber-400" />
                3. Preferred Master Stylist / Director
              </label>
              <select
                value={selectedStylistId}
                onChange={(e) => setSelectedStylistId(e.target.value)}
                aria-label="Select Master Stylist or Director"
                className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-500"
              >
                <option value="">Any Available Senior Master Artisan</option>
                {SALON_STYLISTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — {s.title} ({s.specialty})
                  </option>
                ))}
              </select>
            </div>

            {/* Private VIP Suite Upgrade Checkbox */}
            {!customPackagePayload && (
              <div
                onClick={() => setUpgradeSuite(!upgradeSuite)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  upgradeSuite
                    ? 'bg-amber-500/10 border-amber-500 text-white'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded border flex items-center justify-center ${
                      upgradeSuite ? 'bg-amber-500 border-amber-500' : 'border-neutral-700'
                    }`}
                  >
                    {upgradeSuite && <CheckCircle2 className="w-4 h-4 text-neutral-950" />}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Crown className="w-3.5 h-3.5 text-amber-400" />
                      Upgrade to Soundproof Private VIP Suite
                    </p>
                    <p className="text-[10px] text-neutral-400">
                      Discreet underground valet entrance, private shower & espresso bar
                    </p>
                  </div>
                </div>
                <span className="text-xs font-serif font-bold text-amber-400">+ AED 850</span>
              </div>
            )}

            {/* Guest Information */}
            <div className="space-y-3 pt-2">
              <label className="text-xs uppercase font-semibold text-neutral-300 block">
                4. Guest Contact Details
              </label>
              <input
                type="text"
                placeholder="Full Name / Title"
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
                  placeholder="Email Address for VIP Confirmation"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Special preferences, hair/skin allergies, refreshments request..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/25 transition-all mt-4 flex items-center justify-center gap-2"
            >
              <span>Confirm Appointment & Lock Slot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Confirmation State */
          <div className="flex-1 py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              Appointment Scheduled
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              We Look Forward to Welcoming You
            </h4>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-6 leading-relaxed">
              Your reservation for <strong className="text-white">{selectedDate}</strong> at{' '}
              <strong className="text-white">{selectedTimeSlot}</strong> has been logged. Our VIP concierge has sent SMS & WhatsApp confirmations to <strong className="text-amber-400">{phone || '+971 50 882 1944'}</strong>.
            </p>

            <div className="w-full bg-neutral-900 p-4 rounded-2xl border border-neutral-800 text-left text-xs space-y-2 mb-8">
              <div className="flex justify-between text-neutral-400">
                <span>Location:</span>
                <span className="text-white font-medium">Building 4, Level 3, d3 Dubai</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Total Amount:</span>
                <span className="text-amber-400 font-bold font-serif">AED {estimatedAED.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Valet Protocol:</span>
                <span className="text-white">Complimentary VIP Valet at Gate 2</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3.5 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all"
            >
              Done & Return to Atelier
            </button>
          </div>
        )}

        {/* Drawer Footer */}
        <div className="pt-4 border-t border-neutral-800 text-center text-[10px] text-neutral-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Dubai Municipality Health Standard #{SALON_BRAND_INFO.municipalityLicense}</span>
        </div>
      </div>
    </div>
  );
};
