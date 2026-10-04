'use client';

import React, { useState, useMemo } from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import {
  ESTIMATOR_DISCIPLINES,
  ESTIMATOR_SETTINGS,
  ESTIMATOR_DURATIONS,
  ESTIMATOR_ADDONS,
} from '@/data/framehausData';
import {
  Sliders,
  Check,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Calculator,
  Camera,
  MapPin,
  Clock,
  PlusCircle,
} from 'lucide-react';

export const PackageBuilder: React.FC = () => {
  const { language, isRtl, formatPrice } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  // Estimator State
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('commercial');
  const [selectedSetting, setSelectedSetting] = useState<string>('studio-dubai');
  const [selectedDuration, setSelectedDuration] = useState<string>('full');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'rush-proofs',
    'high-end-retouch',
  ]);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const resetEstimator = () => {
    setSelectedDiscipline('commercial');
    setSelectedSetting('studio-dubai');
    setSelectedDuration('full');
    setSelectedAddons(['rush-proofs']);
  };

  // Calculation logic
  const calculation = useMemo(() => {
    const discipline = ESTIMATOR_DISCIPLINES.find((d) => d.id === selectedDiscipline) || ESTIMATOR_DISCIPLINES[0];
    const setting = ESTIMATOR_SETTINGS.find((s) => s.id === selectedSetting) || ESTIMATOR_SETTINGS[0];
    const duration = ESTIMATOR_DURATIONS.find((d) => d.id === selectedDuration) || ESTIMATOR_DURATIONS[1];

    // Base rate adjusted for duration
    const baseCalculated = Math.round(discipline.basePrice * duration.multiplier);

    // Studio / location surcharge adjusted for setting multiplier
    const studioCost = Math.round(setting.surcharge + baseCalculated * (setting.priceMultiplier - 1.0));

    // Addons sum
    const addonsCost = selectedAddons.reduce((acc, addonId) => {
      const addon = ESTIMATOR_ADDONS.find((a) => a.id === addonId);
      return acc + (addon ? addon.price : 0);
    }, 0);

    const total = baseCalculated + studioCost + addonsCost;

    return {
      discipline,
      setting,
      duration,
      baseCalculated,
      studioCost,
      addonsCost,
      total,
    };
  }, [selectedDiscipline, selectedSetting, selectedDuration, selectedAddons]);

  return (
    <section id="estimator" className="py-24 bg-[#07070A] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Calculator className="w-3.5 h-3.5" />
              <span>{t.estimator.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
              {t.estimator.title}
            </h2>
            <p className="text-base text-zinc-400 font-light">
              {t.estimator.subtitle}
            </p>
          </div>

          <button
            onClick={resetEstimator}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 px-3 py-2 rounded border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.estimator.reset}</span>
          </button>
        </div>

        {/* 2-Column Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Options (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Shoot Discipline */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>{t.estimator.step1}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ESTIMATOR_DISCIPLINES.map((disc) => (
                  <button
                    key={disc.id}
                    onClick={() => setSelectedDiscipline(disc.id)}
                    className={`p-4 rounded-xl text-start transition-all border flex flex-col justify-between ${
                      selectedDiscipline === disc.id
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg shadow-amber-500/5'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">{disc.label[language]}</span>
                        {selectedDiscipline === disc.id && (
                          <div className="w-4 h-4 rounded-full bg-amber-400 text-black flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">{disc.subtitle[language]}</p>
                    </div>
                    <span className="text-xs font-mono text-amber-400 font-bold mt-2 pt-2 border-t border-zinc-900">
                      Base {formatPrice(disc.basePrice)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Setting / Studio */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{t.estimator.step2}</span>
              </label>
              <div className="space-y-2.5">
                {ESTIMATOR_SETTINGS.map((setting) => (
                  <button
                    key={setting.id}
                    onClick={() => setSelectedSetting(setting.id)}
                    className={`w-full p-4 rounded-xl text-start transition-all border flex items-center justify-between gap-4 ${
                      selectedSetting === setting.id
                        ? 'bg-amber-500/10 border-amber-500 text-white'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-sm text-white">{setting.label[language]}</div>
                      <div className="text-[11px] text-zinc-400">{setting.subtitle[language]}</div>
                    </div>
                    <div className="text-end shrink-0">
                      {setting.surcharge > 0 ? (
                        <span className="text-xs font-mono text-amber-400 font-bold">
                          +{formatPrice(setting.surcharge)}
                        </span>
                      ) : (
                        <span className="text-xs font-mono text-emerald-400 font-bold">Included</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Duration */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t.estimator.step3}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ESTIMATOR_DURATIONS.map((dur) => (
                  <button
                    key={dur.id}
                    onClick={() => setSelectedDuration(dur.id)}
                    className={`p-3.5 rounded-xl text-center transition-all border ${
                      selectedDuration === dur.id
                        ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-500/20 border-amber-400'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <span className="text-xs font-mono">{dur.label[language]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-Ons */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <PlusCircle className="w-4 h-4" />
                <span>{t.estimator.step4}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ESTIMATOR_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg text-start transition-all border flex items-center justify-between gap-2 ${
                        isChecked
                          ? 'bg-amber-500/10 border-amber-500/80 text-white'
                          : 'bg-zinc-950 border-zinc-800/80 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center text-black text-xs ${
                            isChecked ? 'bg-amber-400' : 'border border-zinc-700 bg-zinc-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs leading-snug">{addon.label[language]}</span>
                      </div>
                      <span className="text-xs font-mono text-amber-400 font-bold shrink-0">
                        +{formatPrice(addon.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Itemized Summary Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-[#111116] to-[#0A0A0E] border-2 border-amber-500/50 p-6 sm:p-8 space-y-6 shadow-2xl shadow-amber-500/10">
              {/* Summary Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                    Itemized Production Quote
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white">
                    {t.estimator.summaryTitle}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Itemized Line Items */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-400">{calculation.discipline.label[language]} ({calculation.duration.label[language]}):</span>
                  <span className="font-bold text-white">{formatPrice(calculation.baseCalculated)}</span>
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-400">{calculation.setting.label[language]}:</span>
                  <span className="font-bold text-white">{formatPrice(calculation.studioCost)}</span>
                </div>

                {selectedAddons.length > 0 && (
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="text-zinc-400">Add-On Enhancements ({selectedAddons.length}):</span>
                    <span className="font-bold text-amber-400">+{formatPrice(calculation.addonsCost)}</span>
                  </div>
                )}
              </div>

              {/* Total Box */}
              <div className="p-4 rounded-xl bg-black/60 border border-amber-500/40 space-y-1">
                <div className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                  {t.estimator.totalEstimated}
                </div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  {formatPrice(calculation.total)}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 pt-1">
                  {t.estimator.taxIncluded}
                </div>
              </div>

              {/* Commercial Rights Included Note */}
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-2.5 text-xs text-emerald-300 font-sans">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{t.estimator.instantQuoteNote}</span>
              </div>

              {/* Action Button: Book Estimate */}
              <div className="space-y-3">
                <a
                  href="#inquiry"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-mono text-xs font-bold uppercase tracking-wider text-center shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
                >
                  <span>{t.estimator.ctaApply}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </a>

                <div className="text-center">
                  <a
                    href={`https://wa.me/971506009200?text=${encodeURIComponent(
                      `Hello FRAMEHAUS, I built an estimate for ${calculation.discipline.label.en} (${formatPrice(
                        calculation.total
                      )}). I'd like to check shoot date availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 underline"
                  >
                    Quick-Send this Estimate via WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
