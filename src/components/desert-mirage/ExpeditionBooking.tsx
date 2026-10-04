'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Car, ShieldCheck, CheckCircle2, ArrowRight, Share2, Clock, Compass } from 'lucide-react';
import { EXPEDITIONS, ADDON_OPTIONS, DESERT_MIRAGE_BRAND } from '@/data/desertMirageData';

interface ExpeditionBookingProps {
  onOpenModal: (customBooking?: string) => void;
}

export const ExpeditionBooking: React.FC<ExpeditionBookingProps> = ({ onOpenModal }) => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPEDITIONS[0].id);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [isPrivateCharter, setIsPrivateCharter] = useState<boolean>(true);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [expeditionDate, setExpeditionDate] = useState<string>('2026-10-15');
  const [step, setStep] = useState<number>(1);

  const activeExp = EXPEDITIONS.find(e => e.id === selectedExpId) || EXPEDITIONS[0];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Pricing Calculations in AED
  const basePricePerPerson = isPrivateCharter ? activeExp.privatePriceAED / 2 : activeExp.basePriceAED;
  const baseCost = isPrivateCharter ? activeExp.privatePriceAED : activeExp.basePriceAED * guestCount;
  
  const addonsCost = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDON_OPTIONS.find(a => a.id === addonId);
    return sum + (addon ? addon.priceAED : 0);
  }, 0);

  const totalCostAED = baseCost + addonsCost;

  const handleWhatsAppDispatch = () => {
    const selectedAddonNames = selectedAddons
      .map(id => ADDON_OPTIONS.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = encodeURIComponent(
      `Hello Desert Mirage Concierge,\n` +
      `I am designing an Expedition on WebStudio AE:\n` +
      `• Expedition: ${activeExp.title}\n` +
      `• Date: ${expeditionDate}\n` +
      `• Party Size: ${guestCount} Guests\n` +
      `• Type: ${isPrivateCharter ? 'Private VIP Charter' : 'Shared Luxury'}\n` +
      `• Upgrades: ${selectedAddonNames || 'None Selected'}\n` +
      `• Estimated Investment: AED ${totalCostAED.toLocaleString()}\n` +
      `Please confirm availability and dispatch booking dossier.`
    );
    window.open(`https://wa.me/${DESERT_MIRAGE_BRAND.whatsappDirect}?text=${text}`, '_blank');
  };

  return (
    <section id="booking" className="relative py-24 bg-[#0B0907] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>BESPOKE EXPEDITION CONFIGURATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Design Your Expedition
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Customize your party size, private vehicle charter, stargazing sessions, and subterranean pit gastronomy with live AED pricing.
          </p>
        </div>

        {/* Master Configurator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Steps */}
          <div className="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1A1410] via-[#120E0B] to-[#090706] border border-[#C9A265]/30">
            {/* Step 1: Select Expedition */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-[#C9A265] uppercase tracking-wider font-bold">
                01. Select Desert Voyage
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {EXPEDITIONS.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExpId(exp.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedExpId === exp.id
                        ? 'bg-[#241B14] border-[#C9A265] text-[#E8D7B8] font-bold shadow-md shadow-[#C9A265]/20'
                        : 'bg-[#120E0B] border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-serif truncate">{exp.title}</div>
                    <div className="text-[10px] font-mono text-stone-500">From AED {exp.basePriceAED}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Guest Sizing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-stone-800">
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#C9A265] uppercase tracking-wider font-bold">
                  02. Preferred Date
                </label>
                <input
                  type="date"
                  value={expeditionDate}
                  onChange={(e) => setExpeditionDate(e.target.value)}
                  className="w-full bg-[#090706] border border-stone-800 text-stone-200 px-3.5 py-2.5 rounded-xl text-xs font-mono focus:outline-none focus:border-[#C9A265]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-[#C9A265] uppercase tracking-wider font-bold">
                  03. Guests: {guestCount} Persons
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 4, 6, 8].map((num) => (
                    <button
                      key={num}
                      onClick={() => setGuestCount(num)}
                      className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                        guestCount === num
                          ? 'bg-[#C9A265] text-[#090706]'
                          : 'bg-[#090706] border border-stone-800 text-stone-400 hover:text-white'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Private vs Shared */}
            <div className="space-y-3 pt-3 border-t border-stone-800">
              <label className="text-xs font-mono text-[#C9A265] uppercase tracking-wider font-bold">
                04. Charter Exclusivity
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setIsPrivateCharter(true)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isPrivateCharter
                      ? 'bg-[#241B14] border-[#C9A265] text-[#E8D7B8] font-bold shadow-md shadow-[#C9A265]/20'
                      : 'bg-[#090706] border-stone-800 text-stone-400'
                  }`}
                >
                  <div className="text-xs font-serif">Private VIP Vehicle Charter</div>
                  <div className="text-[10px] font-mono text-stone-500">100% Dedicated Vehicle & Guide</div>
                </button>

                <button
                  onClick={() => setIsPrivateCharter(false)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    !isPrivateCharter
                      ? 'bg-[#241B14] border-[#C9A265] text-[#E8D7B8] font-bold shadow-md shadow-[#C9A265]/20'
                      : 'bg-[#090706] border-stone-800 text-stone-400'
                  }`}
                >
                  <div className="text-xs font-serif">Shared Luxury Tier</div>
                  <div className="text-[10px] font-mono text-stone-500">Small Group (Max 4 / 4x4)</div>
                </button>
              </div>
            </div>

            {/* Step 4: Add-On Experiences */}
            <div className="space-y-3 pt-3 border-t border-stone-800">
              <label className="text-xs font-mono text-[#C9A265] uppercase tracking-wider font-bold">
                05. Bespoke Curated Upgrades
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ADDON_OPTIONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);

                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-start justify-between transition-all ${
                        isChecked
                          ? 'bg-[#241B14] border-[#C9A265] text-[#E8D7B8]'
                          : 'bg-[#090706] border-stone-800 text-stone-400 hover:text-white'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-serif text-white">{addon.name}</div>
                        <div className="text-[10px] font-mono text-[#C9A265]">+AED {addon.priceAED.toLocaleString()}</div>
                      </div>
                      <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] font-bold border shrink-0 ${
                        isChecked ? 'bg-[#C9A265] text-[#090706] border-[#C9A265]' : 'border-stone-700'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic AED Price Engine */}
          <div className="lg:col-span-5 space-y-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1A1410] via-[#120E0B] to-[#090706] border border-[#C9A265]/40 shadow-2xl">
            <div className="pb-4 border-b border-stone-800 flex items-center justify-between">
              <span className="text-xs font-mono text-[#C9A265] uppercase tracking-widest font-bold">
                ESTIMATED INVESTMENT
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                INSTANT AVAILABILITY
              </span>
            </div>

            {/* Total Price Card */}
            <div className="p-5 rounded-xl bg-[#090706] border border-stone-800 space-y-2">
              <div className="text-xs font-mono text-stone-400 uppercase">Total Expedition Rate (AED):</div>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-[#E8D7B8] tracking-tight">
                AED {totalCostAED.toLocaleString()}
              </div>
              <div className="text-[11px] font-mono text-stone-500">
                Inclusive of 5% UAE VAT, protected wildlife sanctuary permits, and door-to-door VIP chauffeur.
              </div>
            </div>

            {/* Itemized Breakdown */}
            <div className="space-y-2 text-xs font-mono text-stone-300 pt-1">
              <div className="flex justify-between">
                <span className="text-stone-400">{activeExp.title} ({isPrivateCharter ? 'Private' : `${guestCount} Guests`}):</span>
                <span className="font-bold">AED {baseCost.toLocaleString()}</span>
              </div>
              {addonsCost > 0 && (
                <div className="flex justify-between">
                  <span className="text-stone-400">Curated Upgrades ({selectedAddons.length}):</span>
                  <span className="font-bold text-[#C9A265]">+AED {addonsCost.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-stone-800 text-stone-400">
                <span>Expedition Date:</span>
                <span className="text-white">{expeditionDate}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-2.5">
              <button
                onClick={() => onOpenModal(`Configured: ${activeExp.title} (${guestCount} Guests, AED ${totalCostAED.toLocaleString()})`)}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#C9A265] via-[#D8B478] to-[#A87B38] text-[#090706] font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C9A265]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Confirmed Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppDispatch}
                className="w-full py-3 px-4 rounded-xl bg-[#090706] hover:bg-[#140F0C] border border-stone-800 text-stone-300 hover:text-white text-xs font-mono transition-all flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Dispatch to Concierge</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
