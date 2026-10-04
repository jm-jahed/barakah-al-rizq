'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Box, Thermometer, Calendar, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface FrostvaultStorageRequestModalProps {
  isOpen: boolean;
  initialZoneCode?: string;
  onClose: () => void;
}

export const FrostvaultStorageRequestModal: React.FC<FrostvaultStorageRequestModalProps> = ({
  isOpen,
  initialZoneCode = 'ZONE-A',
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [category, setCategory] = useState<string>('Pharmaceutical');
  const [zoneCode, setZoneCode] = useState<string>(initialZoneCode);
  const [palletCount, setPalletCount] = useState<number>(20);
  const [startDate, setStartDate] = useState<string>('2026-10-01');
  const [duration, setDuration] = useState<string>('Annual Contract');
  const [companyName, setCompanyName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  React.useEffect(() => {
    if (initialZoneCode) {
      setZoneCode(initialZoneCode);
    }
  }, [initialZoneCode]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 3) {
      const ref = `FV-REQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(ref);
      setStep(4);
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
          className="relative w-full max-w-2xl rounded-3xl bg-[#0c1622] border border-[#1b3b5f] text-[#f1f5f9] shadow-2xl overflow-hidden my-8"
        >
          {/* Top Bar */}
          <div className="p-6 bg-[#08111a] border-b border-[#14293f] flex items-center justify-between">
            <div>
              <span className="text-[10px] text-[#38bdf8] uppercase tracking-[0.25em] font-mono block">
                STEP 0{step} OF 04
              </span>
              <h3 className="text-xl font-bold font-mono text-[#f8fafc]">
                {step === 1 && 'Storage Specification'}
                {step === 2 && 'Capacity & Schedule'}
                {step === 3 && 'Enterprise Client Details'}
                {step === 4 && 'Request Transmission Complete'}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#102235] hover:bg-[#18324e] text-[#64748b] hover:text-[#f8fafc] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress Indicator */}
          <div className="flex h-1 bg-[#091522]">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex-1 transition-all duration-300 ${
                  s <= step ? 'bg-[#38bdf8]' : 'bg-transparent'
                }`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto font-mono text-xs">
            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-[#64748b] uppercase text-[10px]">
                  01 · Select Inventory Category
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {['Pharmaceutical & Biologics', 'Frozen Seafood & Meats', 'Dairy & Fresh Produce', 'Confectionery & Ambient'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`p-3 rounded-xl text-left border transition-colors cursor-pointer ${
                        category === cat
                          ? 'bg-[#0e2136] border-[#38bdf8] text-[#38bdf8] font-bold'
                          : 'bg-[#081018] border-[#162c44] text-[#94a3b8]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <label className="block text-[#64748b] uppercase text-[10px] pt-2">
                  02 · Target Storage Chamber
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { code: 'ZONE-A', label: 'Frozen (-25°C)' },
                    { code: 'ZONE-B', label: 'Chilled (+2°C)' },
                    { code: 'ZONE-C', label: 'Controlled (+8°C)' },
                    { code: 'ZONE-D', label: 'Ambient (+18°C)' },
                  ].map((z) => (
                    <button
                      key={z.code}
                      onClick={() => setZoneCode(z.code)}
                      className={`p-2.5 rounded-xl text-center border transition-colors cursor-pointer ${
                        zoneCode === z.code
                          ? 'bg-[#0e2136] border-[#38bdf8] text-[#38bdf8] font-bold'
                          : 'bg-[#081018] border-[#162c44] text-[#94a3b8]'
                      }`}
                    >
                      <div className="font-bold">{z.code}</div>
                      <div className="text-[9px] text-[#64748b]">{z.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[#64748b] uppercase text-[10px] mb-1">
                    Pallet Quantity ({palletCount} Pallets)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={palletCount}
                    onChange={(e) => setPalletCount(parseInt(e.target.value))}
                    className="w-full accent-[#38bdf8] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#64748b] mt-1">
                    <span>5 Pallets</span>
                    <span className="text-[#38bdf8] font-bold">{palletCount} Pallets</span>
                    <span>500+ Pallets</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[#64748b] uppercase text-[10px] mb-1">Required Ingress Date</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#081018] border border-[#162c44] text-[#f1f5f9] focus:outline-none focus:border-[#38bdf8]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#64748b] uppercase text-[10px] mb-1">Storage Duration</label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#081018] border border-[#162c44] text-[#f1f5f9] focus:outline-none focus:border-[#38bdf8]"
                    >
                      <option value="1–3 Months">1–3 Months Buffer</option>
                      <option value="3–6 Months">3–6 Months Seasonal</option>
                      <option value="Annual Contract">Annual Dedicated Agreement</option>
                      <option value="Spot Storage">Spot Market Daily Rate</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enterprise / Trading Entity Name *"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#081018] border border-[#162c44] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8]"
                  required
                />
                <input
                  type="text"
                  placeholder="Contact Person Full Name *"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#081018] border border-[#162c44] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8]"
                  required
                />
                <input
                  type="text"
                  placeholder="Official Phone / WhatsApp (+971) *"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#081018] border border-[#162c44] text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:border-[#38bdf8]"
                  required
                />
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#38bdf8] mx-auto animate-pulse" />
                <div>
                  <span className="text-[10px] text-[#38bdf8] uppercase tracking-widest block">
                    CAPACITY QUOTE REFERENCE
                  </span>
                  <h4 className="text-2xl font-bold text-[#f8fafc]">{bookingRef}</h4>
                </div>

                <div className="p-4 rounded-2xl bg-[#081018] border border-[#162c44] text-left space-y-1.5 max-w-md mx-auto text-xs">
                  <div className="flex justify-between text-[#64748b]">
                    <span>Target Chamber:</span>
                    <strong className="text-[#38bdf8] font-normal">{zoneCode}</strong>
                  </div>
                  <div className="flex justify-between text-[#64748b]">
                    <span>Volume:</span>
                    <strong className="text-[#f8fafc] font-normal">{palletCount} Pallet Slots ({category})</strong>
                  </div>
                  <div className="flex justify-between text-[#64748b]">
                    <span>Start:</span>
                    <strong className="text-[#f8fafc] font-normal">{startDate} ({duration})</strong>
                  </div>
                  <div className="flex justify-between text-[#64748b]">
                    <span>Client:</span>
                    <strong className="text-[#f8fafc] font-normal">{companyName || 'Enterprise Inquirer'}</strong>
                  </div>
                </div>

                <p className="text-[11px] text-[#64748b] italic max-w-sm mx-auto">
                  Simulated storage request. Dedicated cold logistics account manager assigned.
                </p>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="p-6 bg-[#08111a] border-t border-[#14293f] flex items-center justify-between font-mono text-xs">
            {step < 4 ? (
              <>
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className="px-5 py-2.5 rounded-xl bg-[#0e1d2c] hover:bg-[#14283c] disabled:opacity-30 text-[#cbd5e1] border border-[#18314c] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] font-bold uppercase transition-colors cursor-pointer flex items-center gap-2 shadow-lg"
                >
                  <span>{step === 3 ? 'Transmit Capacity Request' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                Return to Command Center
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
