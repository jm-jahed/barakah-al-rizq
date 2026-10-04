'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, CheckCircle2, ArrowRight, ArrowLeft, Shield, ShieldCheck } from 'lucide-react';
import { VELORA_RITUALS, WellnessRitual } from '@/data/veloraData';

interface VeloraReservationModalProps {
  isOpen: boolean;
  initialRitualId?: string;
  onClose: () => void;
}

export const VeloraReservationModal: React.FC<VeloraReservationModalProps> = ({
  isOpen,
  initialRitualId,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedRitualId, setSelectedRitualId] = useState<string>(
    initialRitualId || VELORA_RITUALS[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-18');
  const [selectedTime, setSelectedTime] = useState<string>('15:00');
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  React.useEffect(() => {
    if (initialRitualId) {
      setSelectedRitualId(initialRitualId);
    }
  }, [initialRitualId]);

  if (!isOpen) return null;

  const selectedRitual =
    VELORA_RITUALS.find((r) => r.id === selectedRitualId) || VELORA_RITUALS[0];

  const timeSlots = ['10:00', '12:30', '15:00', '17:30', '19:30'];

  const dates = [
    { label: 'Today', date: '2026-09-06' },
    { label: 'Tomorrow', date: '2026-09-07' },
    { label: 'Friday', date: '2026-09-11' },
    { label: 'Saturday', date: '2026-09-12' },
    { label: 'Thursday', date: '2026-09-18' },
    { label: 'Next Weekend', date: '2026-09-25' },
  ];

  const handleNext = () => {
    if (step === 4) {
      // Generate booking reference
      const randomRef = `VEL-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(randomRef);
      setStep(5);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#111613] border border-[#25332a] text-[#f5f2eb] shadow-2xl overflow-hidden my-8"
        >
          {/* Top Bar */}
          <div className="p-6 bg-gradient-to-r from-[#17211b] via-[#121714] to-[#0d100e] border-b border-[#202b24] flex items-center justify-between">
            <div>
              <span className="text-[10px] text-[#c5a059] uppercase tracking-[0.25em] font-medium block">
                STEP 0{step} OF 05
              </span>
              <h3 className="text-xl font-serif text-[#fdfbf7]">
                {step === 1 && 'Choose Experience'}
                {step === 2 && 'Choose Date'}
                {step === 3 && 'Choose Time'}
                {step === 4 && 'Guest Details'}
                {step === 5 && 'Reservation Confirmed'}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#1c2420] hover:bg-[#27342d] text-[#8e897e] hover:text-[#fdfbf7] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress Indicator */}
          <div className="flex h-1 bg-[#18201b]">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`flex-1 transition-all duration-300 ${
                  s <= step ? 'bg-[#c5a059]' : 'bg-transparent'
                }`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#242f28]">
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-xs text-[#9e988c] font-light">
                  Select your desired restorative wellness ritual from the sanctuary menu:
                </p>
                <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                  {VELORA_RITUALS.map((ritual) => {
                    const isSelected = ritual.id === selectedRitualId;
                    return (
                      <button
                        key={ritual.id}
                        onClick={() => setSelectedRitualId(ritual.id)}
                        className={`w-full p-4 rounded-xl text-left border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#1a251f] border-[#c5a059] text-[#fdfbf7]'
                            : 'bg-[#151b18] border-[#222c26] text-[#8e897e] hover:bg-[#18201c] hover:text-[#ded9ce]'
                        }`}
                      >
                        <div>
                          <div className={`text-sm font-serif ${isSelected ? 'text-[#c5a059]' : 'text-[#ded9ce]'}`}>
                            {ritual.name}
                          </div>
                          <div className="text-[11px] text-[#716c62] mt-0.5">
                            {ritual.durationLabel} · {ritual.category}
                          </div>
                        </div>
                        <span className="text-xs font-serif text-[#ded9ce]">
                          AED {ritual.priceAED.toLocaleString()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p className="text-xs text-[#9e988c] font-light">
                  Select your preferred sanctuary date (Simulated availability):
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {dates.map((d) => {
                    const isSelected = selectedDate === d.date;
                    return (
                      <button
                        key={d.date}
                        onClick={() => setSelectedDate(d.date)}
                        className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#1a251f] border-[#c5a059] text-[#fdfbf7]'
                            : 'bg-[#151b18] border-[#222c26] text-[#8e897e] hover:bg-[#18201c] hover:text-[#ded9ce]'
                        }`}
                      >
                        <div className="text-xs uppercase tracking-wider text-[#c5a059] font-medium">{d.label}</div>
                        <div className="text-sm font-mono text-[#ded9ce] mt-1">{d.date}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p className="text-xs text-[#9e988c] font-light">
                  Select your reserved appointment window (GST Dubai Time):
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((t) => {
                    const isSelected = selectedTime === t;
                    return (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`p-4 rounded-xl text-center border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#1a251f] border-[#c5a059] text-[#fdfbf7]'
                            : 'bg-[#151b18] border-[#222c26] text-[#8e897e] hover:bg-[#18201c] hover:text-[#ded9ce]'
                        }`}
                      >
                        <Clock className={`w-4 h-4 mx-auto mb-1 ${isSelected ? 'text-[#c5a059]' : 'text-[#6e695f]'}`} />
                        <div className="text-base font-serif font-medium">{t} GST</div>
                        <div className="text-[10px] text-[#716c62] mt-0.5">Available</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <p className="text-xs text-[#9e988c] font-light">
                  Provide guest contact details for sovereign reservation verification:
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-[#161e19] border border-[#26342b] text-xs text-[#f5f2eb] placeholder-[#6e685e] focus:outline-none focus:border-[#c5a059]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone / WhatsApp (+971 50 ...) *"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-[#161e19] border border-[#26342b] text-xs text-[#f5f2eb] placeholder-[#6e685e] focus:outline-none focus:border-[#c5a059]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-[#161e19] border border-[#26342b] text-xs text-[#f5f2eb] placeholder-[#6e685e] focus:outline-none focus:border-[#c5a059]"
                  />
                  <textarea
                    rows={2}
                    placeholder="Special requests or medical contraindications (optional)..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-[#161e19] border border-[#26342b] text-xs text-[#f5f2eb] placeholder-[#6e685e] focus:outline-none focus:border-[#c5a059] resize-none"
                  />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#c5a059] mx-auto animate-pulse" />
                <div>
                  <span className="text-[10px] text-[#c5a059] uppercase tracking-widest font-mono">
                    CONFIRMATION CODE
                  </span>
                  <h4 className="text-2xl font-serif text-[#fdfbf7]">{bookingRef}</h4>
                </div>

                <div className="p-4 rounded-2xl bg-[#151d18] border border-[#243329] text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between text-[#8e897e]">
                    <span>Ritual:</span>
                    <strong className="text-[#ded9ce] font-normal">{selectedRitual.name}</strong>
                  </div>
                  <div className="flex justify-between text-[#8e897e]">
                    <span>Date & Time:</span>
                    <strong className="text-[#ded9ce] font-normal">{selectedDate} at {selectedTime} GST</strong>
                  </div>
                  <div className="flex justify-between text-[#8e897e]">
                    <span>Guest:</span>
                    <strong className="text-[#ded9ce] font-normal">{guestName || 'Valued Guest'}</strong>
                  </div>
                  <div className="flex justify-between text-[#8e897e] pt-2 border-t border-[#222e26]">
                    <span>Total Investment:</span>
                    <strong className="text-[#c5a059] font-medium">AED {selectedRitual.priceAED.toLocaleString()}</strong>
                  </div>
                </div>

                <p className="text-[11px] text-[#787367] italic max-w-sm mx-auto">
                  Simulated booking confirmation. A personal concierge confirmation message has been queued.
                </p>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="p-6 bg-[#0e1210] border-t border-[#1f2823] flex items-center justify-between">
            {step < 5 ? (
              <>
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className="px-5 py-2.5 rounded-full bg-[#18201b] hover:bg-[#222c26] disabled:opacity-30 text-xs uppercase tracking-wider text-[#ded9ce] border border-[#27342c] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 shadow-lg"
                >
                  <span>{step === 4 ? 'Confirm Reservation' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={onClose}
                className="w-full py-3 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
              >
                Return to Sanctuary
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
