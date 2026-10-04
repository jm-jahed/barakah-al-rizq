'use strict';
import React, { useState, useMemo } from 'react';
import { Crown, Sparkle, ShieldCheck, Check, Calendar, Users, Wine, Car, ArrowRight } from 'lucide-react';
import { SALON_BRAND_INFO } from '@/data/salonData';

interface SalonCustomizerProps {
  onBookPackage: (customPackage: {
    packageName: string;
    guests: number;
    suiteTier: string;
    addons: string[];
    totalAED: number;
  }) => void;
}

interface PackagePreset {
  id: string;
  name: string;
  tagline: string;
  basePriceAED: number;
  durationHours: number;
  includedList: string[];
}

const PACKAGE_PRESETS: PackagePreset[] = [
  {
    id: 'bridal-crown',
    name: 'Sovereign Bridal Imperial Suite',
    tagline: 'Full day private atelier takeover for the Bride & entourage',
    basePriceAED: 8500,
    durationHours: 6,
    includedList: [
      'Bespoke French Balayage / Gloss Glaze',
      'Valmont Cellular Swiss Collagen Facial',
      'Russian Hardware Manicure & Swarovski Couture Art',
      'Royal Moroccan Eucalyptus Black Soap Hammam',
      'Luxury Bridal Hair & Makeup Trial + Wedding Day Execution'
    ]
  },
  {
    id: 'red-carpet-gala',
    name: 'Red Carpet Gala & Film Premiere Package',
    tagline: 'High-definition camera ready glow & styling in 4 hours',
    basePriceAED: 4200,
    durationHours: 4,
    includedList: [
      'Biologique Recherche Red-Carpet Instant Glow Facial',
      'Haute Hollywood Blowout & Diamond Shimmer Mist',
      'Russian Express Gel Manicure',
      'Lash Lift & Brow Architecture Sculpture'
    ]
  },
  {
    id: 'sovereign-wellness',
    name: 'Private Sanctuary Full-Day Rejuvenation',
    tagline: 'Holistic head-to-toe clinical restoration & Hammam bliss',
    basePriceAED: 5800,
    durationHours: 5,
    includedList: [
      '90-min Royal Amber Hammam with Pure Argan Therapy',
      'Kérastase Chronologiste Caviar Scalp Spa',
      '24K Gold Cellular Anti-Aging Hydro-Facial',
      'Full Body Lymphatic Drainage & Contouring'
    ]
  }
];

const SUITE_TIERS = [
  { id: 'standard', name: 'Private VIP Atelier Suite (Complimentary Herbal Infusions)', priceAED: 0 },
  { id: 'champagne', name: 'Laurent-Perrier Champagne & French Macaron Suite', priceAED: 1200 },
  { id: 'caviar-dom', name: 'Dom Pérignon Vintage & Imperial Beluga Caviar Suite', priceAED: 3800 }
];

const ADDONS = [
  { id: 'rolls-royce', name: 'Private Rolls-Royce Chauffeur Transfer (Dubai/Abu Dhabi)', priceAED: 1500, icon: Car },
  { id: 'gold-eye', name: '24K Liquid Gold Nano-Infusion Eye Revival', priceAED: 650, icon: Crown },
  { id: 'scalp-detox', name: 'Moroccan Amber & Rosemary Scalp Detox Treatment', priceAED: 550, icon: Check },
  { id: 'russian-pedi', name: 'Russian Hardware Diamond Cuticle Pedicure', priceAED: 450, icon: Check }
];

export const SalonCustomizer: React.FC<SalonCustomizerProps> = ({ onBookPackage }) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('bridal-crown');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [selectedSuiteTier, setSelectedSuiteTier] = useState<string>('champagne');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['gold-eye']);

  const activePreset = PACKAGE_PRESETS.find((p) => p.id === selectedPresetId) || PACKAGE_PRESETS[0];
  const activeSuite = SUITE_TIERS.find((s) => s.id === selectedSuiteTier) || SUITE_TIERS[0];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedTotalAED = useMemo(() => {
    // Base preset price multiplied by guest scale
    let total = activePreset.basePriceAED * guestCount;
    // Add suite tier
    total += activeSuite.priceAED;
    // Add addon items
    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId);
      if (addon) {
        // chauffeur transfer is flat, individual treatments scale per guest
        if (addonId === 'rolls-royce') {
          total += addon.priceAED;
        } else {
          total += addon.priceAED * guestCount;
        }
      }
    });
    return total;
  }, [activePreset, guestCount, activeSuite, selectedAddons]);

  const handleReserve = () => {
    onBookPackage({
      packageName: activePreset.name,
      guests: guestCount,
      suiteTier: activeSuite.name,
      addons: selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name || id),
      totalAED: calculatedTotalAED
    });
  };

  return (
    <section id="customizer" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
            <Crown className="w-3.5 h-3.5" />
            <span>VIP Bespoke Concierge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Interactive Dubai <span className="italic font-normal text-amber-400">Bridal & VIP Estimator</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Customize your bespoke atelier suite experience, entourage party size, culinary hospitality, and private chauffeur amenities with transparent UAE Dirham calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configuration Controls */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* 1. Select Base Experience Preset */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                1. Select Master Experience Foundation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PACKAGE_PRESETS.map((preset) => {
                  const isSelected = selectedPresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedPresetId(preset.id)}
                      className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500'
                          : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div>
                        <h4 className="text-xs font-bold text-white mb-1">{preset.name}</h4>
                        <p className="text-[10px] text-neutral-400 line-clamp-2 mb-3">{preset.tagline}</p>
                      </div>
                      <div className="pt-2 border-t border-neutral-800 flex items-baseline justify-between">
                        <span className="text-xs font-serif font-bold text-amber-400">
                          AED {preset.basePriceAED.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-neutral-500">{preset.durationHours}h</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Inclusions List for Active Preset */}
              <div className="mt-5 p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                <p className="text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2.5">
                  Included in {activePreset.name}:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePreset.includedList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Entourage & Guest Count */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  2. Entourage & Guest Count
                </h3>
                <span className="text-sm font-serif font-bold text-white px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-lg">
                  {guestCount} {guestCount === 1 ? 'Guest (Solo VIP)' : 'Guests (Entourage)'}
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                aria-label="Entourage and guest count slider"
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-2">
                <span>1 Guest</span>
                <span>4 Guests (Bridal Party)</span>
                <span>8 Guests (Full Atelier Takeover)</span>
              </div>
            </div>

            {/* 3. Private VIP Suite Culinary & Champagne Tier */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                <Wine className="w-4 h-4" />
                3. Private VIP Suite Hospitality Tier
              </h3>

              <div className="flex flex-col gap-2.5">
                {SUITE_TIERS.map((tier) => {
                  const isSelected = selectedSuiteTier === tier.id;
                  return (
                    <label
                      key={tier.id}
                      onClick={() => setSelectedSuiteTier(tier.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-amber-500 bg-amber-500' : 'border-neutral-700'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}
                        </div>
                        <span className="text-xs font-medium">{tier.name}</span>
                      </div>
                      <span className="text-xs font-serif font-semibold text-amber-400">
                        {tier.priceAED === 0 ? 'Complimentary' : `+ AED ${tier.priceAED.toLocaleString()}`}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* 4. Luxury Addon Amenities */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                4. Bespoke Concierge Add-on Enhancements
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  const Icon = addon.icon;
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl text-left border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-neutral-500'}`} />
                        <div>
                          <p className="text-xs font-medium text-neutral-200">{addon.name}</p>
                          <p className="text-[10px] text-amber-400 font-serif">
                            + AED {addon.priceAED.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isSelected ? 'border-amber-500 bg-amber-500' : 'border-neutral-700'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-neutral-950 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary & Booking Console */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-neutral-900/95 border border-amber-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
                    VIP Concierge Estimate
                  </span>
                  <h4 className="text-lg font-serif font-bold text-white">
                    Bespoke Package Summary
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                  Guaranteed Rate
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="py-5 flex flex-col gap-3 text-xs border-b border-neutral-800">
                <div className="flex justify-between text-neutral-300">
                  <span>{activePreset.name} (× {guestCount})</span>
                  <span className="font-serif font-medium text-white">
                    AED {(activePreset.basePriceAED * guestCount).toLocaleString()}
                  </span>
                </div>

                {activeSuite.priceAED > 0 && (
                  <div className="flex justify-between text-neutral-300">
                    <span className="truncate max-w-[200px]">{activeSuite.name}</span>
                    <span className="font-serif font-medium text-white">
                      AED {activeSuite.priceAED.toLocaleString()}
                    </span>
                  </div>
                )}

                {selectedAddons.map((addonId) => {
                  const addon = ADDONS.find((a) => a.id === addonId);
                  if (!addon) return null;
                  const cost = addonId === 'rolls-royce' ? addon.priceAED : addon.priceAED * guestCount;
                  return (
                    <div key={addonId} className="flex justify-between text-neutral-300">
                      <span className="truncate max-w-[200px]">{addon.name}</span>
                      <span className="font-serif font-medium text-white">
                        AED {cost.toLocaleString()}
                      </span>
                    </div>
                  );
                })}

                <div className="flex justify-between text-neutral-500 pt-2 text-[11px]">
                  <span>UAE 5% VAT</span>
                  <span>Included</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="py-5">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Estimated Total Investment (AED)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200">
                    AED {calculatedTotalAED.toLocaleString()}
                  </span>
                </div>
                <p className="text-[10px] text-neutral-400 mt-1">
                  Complimentary 1-on-1 Master Director Consultation Included.
                </p>
              </div>

              {/* Direct Booking Trigger */}
              <button
                onClick={handleReserve}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Custom Package</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* UAE Guarantee Notice */}
              <div className="mt-4 pt-4 border-t border-neutral-800 text-[10px] text-neutral-400 flex items-center justify-center gap-2 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Complimentary rescheduling up to 24h prior. VIP Private Suites in d3.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
