'use client';

import React, { useState } from 'react';
import { ArrowRight, DollarSign, ShieldCheck, TrendingUp, Calculator, Plane, Info } from 'lucide-react';
import { SKYVAULT_AIRCRAFT, SKYVAULT_BRAND } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

interface ManagementProgramProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const AircraftManagementProgram: React.FC<ManagementProgramProps> = ({ onOpenContactModal }) => {
  const { lang, isRtl, t, formatPrice, toArabicDigits, formatNumber, formatPercent } = useSkyvaultLanguage();
  const [selectedAircraftId, setSelectedAircraftId] = useState('g650er');
  const [charterHours, setCharterHours] = useState(250);
  const [currencyMode, setCurrencyMode] = useState<'AED' | 'USD'>('AED');

  const selectedAircraft = SKYVAULT_AIRCRAFT.find(a => a.id === selectedAircraftId) || SKYVAULT_AIRCRAFT[2];

  // Calculations
  const hourlyRate = currencyMode === 'AED' ? selectedAircraft.hourlyCharterYieldAED : selectedAircraft.hourlyCharterYieldUSD;
  const fixedAnnualCost = currencyMode === 'AED' ? selectedAircraft.fixedAnnualCostAED : selectedAircraft.fixedAnnualCostUSD;

  const totalGrossRevenue = charterHours * hourlyRate;
  const ownerNetOffset = Math.round(totalGrossRevenue * 0.65); // 65% net back to owner
  const netAnnualCost = Math.max(0, fixedAnnualCost - ownerNetOffset);
  const costReductionPercent = Math.min(100, Math.round((ownerNetOffset / fixedAnnualCost) * 100));

  const formatAmount = (val: number) => {
    if (currencyMode === 'AED') {
      return formatPrice(val);
    }
    const formatted = new Intl.NumberFormat('en-US').format(val);
    return lang === 'ar' ? `$${toArabicDigits(formatted)}` : `$${formatted} USD`;
  };

  return (
    <section id="program" className="py-24 bg-[#0D1118] text-white relative border-t border-white/5 font-sans overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#E5C378]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t('calc.tag')}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            {t('calc.title')}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            {t('calc.subtitle')}
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#07090E] border border-[#E5C378]/30 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-bold text-[#E5C378] font-mono uppercase tracking-wider">
                {t('calc.section1')}
              </h3>
              
              {/* Currency Toggle */}
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={() => setCurrencyMode('AED')}
                  className={`px-2.5 py-1 rounded text-[10px] font-bold font-mono transition-all ${
                    currencyMode === 'AED' ? 'bg-[#E5C378] text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AED (د.إ)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrencyMode('USD')}
                  className={`px-2.5 py-1 rounded text-[10px] font-bold font-mono transition-all ${
                    currencyMode === 'USD' ? 'bg-[#E5C378] text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Aircraft Select */}
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2 uppercase">
                {t('calc.selectModel')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SKYVAULT_AIRCRAFT.map((ac) => (
                  <button
                    key={ac.id}
                    type="button"
                    onClick={() => setSelectedAircraftId(ac.id)}
                    className={`p-3.5 rounded-2xl font-bold text-xs text-left transition-all font-mono leading-tight flex items-center justify-between border ${
                      selectedAircraftId === ac.id
                        ? 'bg-[#E5C378] text-black border-[#E5C378] shadow-lg shadow-[#E5C378]/20'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 border-white/10'
                    }`}
                  >
                    <div>
                      <span className="block font-bold">{lang === 'ar' ? ac.nameAr : ac.name}</span>
                      <span className={`text-[10px] block mt-0.5 ${selectedAircraftId === ac.id ? 'text-black/70' : 'text-slate-400'}`}>
                        {lang === 'ar' ? ac.categoryAr : ac.category}
                      </span>
                    </div>
                    <Plane className={`w-4 h-4 shrink-0 ${selectedAircraftId === ac.id ? 'text-black' : 'text-[#E5C378]'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Aircraft Quick Specs Strip */}
            <div className="p-3.5 rounded-2xl bg-[#0D1118] border border-white/5 grid grid-cols-4 gap-2 text-center text-xs font-mono">
              <div>
                <span className="text-[10px] text-slate-500 block">{lang === 'ar' ? 'الركاب' : 'Pax'}</span>
                <span className="font-bold text-white">{lang === 'ar' ? toArabicDigits(selectedAircraft.specs.passengers) : selectedAircraft.specs.passengers}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">{lang === 'ar' ? 'المدى' : 'Range'}</span>
                <span className="font-bold text-white">{lang === 'ar' ? toArabicDigits(selectedAircraft.specs.rangeKm) : selectedAircraft.specs.rangeKm} km</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">{lang === 'ar' ? 'السرعة' : 'Speed'}</span>
                <span className="font-bold text-white">{lang === 'ar' ? toArabicDigits(selectedAircraft.specs.cruiseSpeedKm) : selectedAircraft.specs.cruiseSpeedKm} km/h</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">{lang === 'ar' ? 'ارتفاع المقصورة' : 'Height'}</span>
                <span className="font-bold text-white">{lang === 'ar' ? toArabicDigits(selectedAircraft.specs.cabinHeightFt) : selectedAircraft.specs.cabinHeightFt} ft</span>
              </div>
            </div>

            {/* Annual Charter Hours Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 uppercase">{t('calc.annualHours')}</span>
                <span className="text-[#E5C378] font-black text-sm">
                  {lang === 'ar' ? toArabicDigits(charterHours) : charterHours} {t('calc.hoursLabel')}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max={selectedAircraft.maxCharterHours}
                step="10"
                value={charterHours}
                onChange={(e) => setCharterHours(parseInt(e.target.value, 10))}
                className="w-full accent-[#E5C378] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>50 {lang === 'ar' ? 'ساعة' : 'hrs'}</span>
                <span>{lang === 'ar' ? toArabicDigits(selectedAircraft.maxCharterHours) : selectedAircraft.maxCharterHours} {lang === 'ar' ? 'ساعة كحد أقصى' : 'hrs max'}</span>
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-[#11161F] p-6 sm:p-8 rounded-2xl border border-[#E5C378]/30 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#E5C378] uppercase tracking-widest block">
                {t('calc.projection')}
              </span>

              <div>
                <span className="text-[11px] text-slate-400 font-mono block uppercase">
                  {t('calc.netOffset')}
                </span>
                <div className="text-3xl font-black text-[#E5C378] font-mono mt-1 tracking-tight">
                  {formatAmount(ownerNetOffset)}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#07090E] border border-white/10 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{t('calc.fixedBudget')}</span>
                  <span className="text-white font-bold">{formatAmount(fixedAnnualCost)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{t('calc.reduction')}</span>
                  <span className="text-emerald-400 font-bold">
                    -{formatPercent(costReductionPercent)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-2 font-bold">
                  <span className="text-slate-300">{t('calc.remainingCost')}</span>
                  <span className="text-amber-200">{formatAmount(netAnnualCost)}</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-500 font-mono leading-relaxed">
                {t('calc.disclaimer')}
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenContactModal(`Yield Strategy: ${selectedAircraft.name}`)}
                className="w-full py-4 rounded-xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs tracking-wider uppercase font-mono shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>{t('calc.cta')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};