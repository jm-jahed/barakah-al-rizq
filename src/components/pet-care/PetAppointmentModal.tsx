'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, MapPin, User, Sparkles } from 'lucide-react';
import { VET_SERVICES_DATA, VETERINARIANS_DATA, CLINIC_LOCATIONS } from '@/data/petCareData';

interface PetAppointmentModalProps {
  isOpen: boolean;
  initialVetId?: string;
  onClose: () => void;
}

export const PetAppointmentModal: React.FC<PetAppointmentModalProps> = ({
  isOpen,
  initialVetId,
  onClose,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [branch, setBranch] = useState(CLINIC_LOCATIONS[0].id);
  const [serviceId, setServiceId] = useState(VET_SERVICES_DATA[0].id);
  const [vetId, setVetId] = useState(initialVetId || VETERINARIANS_DATA[0].id);
  const [petName, setPetName] = useState('');
  const [species, setSpecies] = useState('Dog');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const selectedVet = VETERINARIANS_DATA.find((v) => v.id === vetId) || VETERINARIANS_DATA[0];
  const selectedService = VET_SERVICES_DATA.find((s) => s.id === serviceId) || VET_SERVICES_DATA[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#0E1720] border border-emerald-500/30 shadow-2xl p-6 sm:p-8 space-y-6 text-white my-8 backdrop-blur-xl"
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider block mb-1">
                  OFFICIAL APPOINTMENT RESERVATION
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
                  Book Veterinary Consultation
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Instant Confirmation & Dubai Municipality Record Sync
                </span>
              </div>

              {/* Branch & Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 mb-1 font-bold uppercase">Hospital Center:</label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#090F16] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                  >
                    {CLINIC_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.id} className="bg-[#0E1720]">
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-bold uppercase">Clinical Service:</label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#090F16] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                  >
                    {VET_SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.id} className="bg-[#0E1720]">
                        {srv.name} (AED {srv.price})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Specialist Selection */}
              <div className="space-y-1 text-xs font-mono">
                <label className="block text-slate-400 font-bold uppercase">Attending Specialist / Surgeon:</label>
                <select
                  value={vetId}
                  onChange={(e) => setVetId(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#090F16] border border-white/10 text-white focus:outline-none focus:border-emerald-400 font-bold"
                >
                  {VETERINARIANS_DATA.map((v) => (
                    <option key={v.id} value={v.id} className="bg-[#0E1720]">
                      {v.name} — {v.specialty} (AED {v.consultationFee})
                    </option>
                  ))}
                </select>
              </div>

              {/* Pet & Parent Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 mb-1">Companion Name & Breed:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bella (Maltese, 3 yrs)"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Parent Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al-Hashimi"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              {/* Date & Time & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 mb-1">Preferred Date:</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#090F16] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Time Slot:</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#090F16] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">UAE Phone (+971):</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-extrabold text-xs uppercase tracking-wider font-mono shadow-xl shadow-emerald-500/25 hover:scale-102 transition-all cursor-pointer"
              >
                Confirm Priority Appointment (AED {selectedService.price})
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4 font-mono">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white font-sans">
                Appointment Confirmed!
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto font-sans leading-relaxed">
                Thank you, {parentName}. {petName} is booked with {selectedVet.name} for {selectedService.name} on {date || 'upcoming scheduled date'} at {timeSlot}.
              </p>
              <div className="p-4 rounded-2xl bg-[#090F16] border border-white/10 text-xs text-emerald-300 text-left space-y-1">
                <span className="block font-bold">Booking Ref: #VET-DXB-{Math.floor(100000 + Math.random() * 900000)}</span>
                <span className="text-slate-400 text-[11px] block">Location: Jumeirah 2 Flagship Hospital • Valet parking complimentary.</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
              >
                Close & Sync Calendar
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PetAppointmentModal;
