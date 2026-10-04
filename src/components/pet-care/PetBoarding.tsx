'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  Camera, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  ArrowRight,
  Wifi,
  Waves,
  Utensils
} from 'lucide-react';
import { BOARDING_SUITES_DATA, BoardingSuite } from '@/data/petCareData';

interface PetBoardingProps {
  onOpenBooking?: (serviceId?: string) => void;
}

const ADDON_SERVICES = [
  { id: 'cctv', label: '24/7 4K HD Private Webcam App Access', pricePerNight: 35, icon: Camera },
  { id: 'hydro', label: 'Daily 30-min Private Hydrotherapy Splash Session', pricePerNight: 65, icon: Waves },
  { id: 'gourmet', label: 'Organic Chef-Prepared Raw/Kibble Gourmet Meals', pricePerNight: 40, icon: Utensils },
  { id: 'bedtime', label: 'Extended 30-min Evening Story & Cuddle Session', pricePerNight: 25, icon: Sparkles },
];

export const PetBoarding: React.FC<PetBoardingProps> = ({ onOpenBooking }) => {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>(BOARDING_SUITES_DATA[0].id);
  const [nights, setNights] = useState<number>(3);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['cctv', 'gourmet']);
  const shouldReduceMotion = useReducedMotion();

  const activeSuite = useMemo(() => {
    return BOARDING_SUITES_DATA.find((s) => s.id === selectedSuiteId) || BOARDING_SUITES_DATA[0];
  }, [selectedSuiteId]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addonsTotalPerNight = useMemo(() => {
    return selectedAddons.reduce((sum, id) => {
      const addon = ADDON_SERVICES.find((a) => a.id === id);
      return sum + (addon ? addon.pricePerNight : 0);
    }, 0);
  }, [selectedAddons]);

  const totalEstimate = useMemo(() => {
    return (activeSuite.pricePerNight + addonsTotalPerNight) * nights;
  }, [activeSuite, addonsTotalPerNight, nights]);

  return (
    <section id="boarding" className="py-24 sm:py-32 bg-[#090F16] text-white relative overflow-hidden border-b border-emerald-500/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/5 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
              <Crown className="w-3.5 h-3.5" />
              <span>5-STAR LUXURY RESORT & CLIMATE-CONTROLLED BOARDING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Presidential Pet Suites & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Resort Sanctuary.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Private soundproofed suites, 24/7 veterinary supervision, Tempur-Pedic orthopedic bedding, and live 4K webcam streaming direct to your phone.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-[#0E1720] border border-emerald-500/30 text-right">
              <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-wider">CARE STANDARD</span>
              <span className="text-xs font-bold font-mono text-emerald-300 flex items-center gap-1.5 justify-end mt-0.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                24/7 Vet Supervised
              </span>
            </div>
          </div>
        </div>

        {/* 3-Suite Grid Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BOARDING_SUITES_DATA.map((suite, idx) => {
            const isSelected = selectedSuiteId === suite.id;

            return (
              <motion.div
                key={suite.id}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                onClick={() => setSelectedSuiteId(suite.id)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-5 relative overflow-hidden backdrop-blur-md ${
                  isSelected
                    ? 'bg-[#111C27] border-2 border-emerald-400 shadow-2xl shadow-emerald-500/15'
                    : 'bg-[#0E1720] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Image */}
                <div className="relative h-44 rounded-2xl overflow-hidden">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1720] via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-300">
                    {suite.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-sans">
                    {suite.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-2">
                    {suite.tagline}
                  </p>
                </div>

                {/* Features Pill */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px] font-mono">
                  {suite.features.map((f, i) => (
                    <div key={i} className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-slate-400 block text-[9px]">{f.label}</span>
                      <span className="text-white font-bold">{f.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">PER NIGHT</span>
                    <span className="text-base font-black text-emerald-400 font-mono block">
                      AED {suite.pricePerNight}
                    </span>
                  </div>

                  <span className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold ${
                    isSelected ? 'bg-emerald-400 text-slate-950' : 'bg-white/5 text-slate-300'
                  }`}>
                    {isSelected ? 'Selected' : 'Select Suite'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Stay Calculator & Addon Customizer Deck */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#0D151F] border border-emerald-500/30 shadow-2xl space-y-8 backdrop-blur-xl">
          <div className="border-b border-white/10 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold block mb-1">
                LIVE RESERVATION ESTIMATOR
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Customize Stay for: {activeSuite.name}
              </h3>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">ESTIMATED TOTAL STAY</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                AED {totalEstimate.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Duration Slider & Included Amenities */}
            <div className="lg:col-span-6 space-y-6">
              {/* Nights Duration Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300 font-bold uppercase">Stay Duration:</span>
                  <span className="text-emerald-300 font-bold text-sm">{nights} Nights Stay</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>1 Night</span>
                  <span>7 Nights (1 Wk)</span>
                  <span>14 Nights (2 Wks)</span>
                  <span>30 Nights (1 Mo)</span>
                </div>
              </div>

              {/* Suite Standard Amenities */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
                  Included Standard Suite Privileges:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSuite.amenities.map((am, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-xs font-mono text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{am}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: VIP Addon Services */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
                Enhance Stay with VIP Resort Addons:
              </span>

              <div className="space-y-2.5">
                {ADDON_SERVICES.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const Icon = addon.icon;

                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'bg-emerald-500/15 border-emerald-400 text-white font-bold'
                          : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl ${isChecked ? 'bg-emerald-400 text-slate-950' : 'bg-white/5 text-slate-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono">{addon.label}</span>
                      </div>

                      <span className="text-xs font-mono font-bold text-emerald-300 shrink-0">
                        +AED {addon.pricePerNight}/night
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Direct Booking Button */}
              <button
                type="button"
                onClick={() => onOpenBooking ? onOpenBooking(activeSuite.id) : window.location.assign('#booking')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-extrabold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/25 transition-all cursor-pointer group"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve {activeSuite.name} ({nights} Nights • AED {totalEstimate.toLocaleString()})</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PetBoarding;
