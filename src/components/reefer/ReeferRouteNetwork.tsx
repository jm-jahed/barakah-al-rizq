'use client';

import React, { useState } from 'react';
import { 
  Navigation, 
  ArrowRight, 
  ShieldCheck, 
  Radio, 
  CheckCircle2 
} from 'lucide-react';
import { REEFER_ROUTES, RouteDestination } from '@/data/reeferData';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferRouteNetworkProps {
  onOpenQuote: (defaultValues?: Record<string, string>) => void;
}

export default function ReeferRouteNetwork({ onOpenQuote }: ReeferRouteNetworkProps) {
  const [selectedRoute, setSelectedRoute] = useState<RouteDestination>(REEFER_ROUTES[0]);
  const { isDark } = useReeferTheme();

  return (
    <section id="routes" className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-bold ${
              isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-[#F8FAFC] border-slate-200 text-amber-700'
            }`}>
              <Radio className="w-4 h-4 animate-pulse text-amber-500" />
              <span>OVERLAND COLD CORRIDOR NETWORK</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              Dubai → GCC Route Network
            </h2>
            <p className={`max-w-2xl text-base sm:text-lg font-normal ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
              Direct refrigerated line-haul departures originating from Dubai’s twin logistics epicenters:{' '}
              <span className={`font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>Al Aweer Fruit & Veg Complex</span> and{' '}
              <span className={`font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>JAFZA South Gateway</span>.
            </p>
          </div>

          <div className={`flex items-center gap-3 border px-5 py-3 rounded-2xl font-mono text-sm shadow-xs ${
            isDark ? 'bg-slate-900 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-[#4B5563]'
          }`}>
            <span className="font-semibold">Origin Hub:</span>
            <span className={`flex items-center gap-2 font-black text-base ${isDark ? 'text-white' : 'text-[#111111]'}`}>
              <span>🇦🇪</span> DUBAI, UAE
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
          </div>
        </div>

        {/* Main Route Interactive Canvas & Route Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Route Destination Selector Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400 pb-1 flex items-center justify-between font-bold">
              <span>Cross-Border Corridors</span>
              <span className="text-amber-500">6 Active Destinations</span>
            </div>

            {REEFER_ROUTES.map((route) => {
              const isSelected = selectedRoute.id === route.id;
              return (
                <div
                  key={route.id}
                  onClick={() => setSelectedRoute(route)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden group ${
                    isSelected
                      ? isDark 
                        ? 'bg-slate-800/90 border-amber-500 shadow-lg' 
                        : 'bg-amber-50/80 border-amber-500 shadow-sm'
                      : isDark
                        ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  {/* Active left indicator strip */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-500" />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <span className="text-3xl select-none">{route.flag}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-black text-base sm:text-lg transition-colors ${
                            isDark 
                              ? isSelected ? 'text-amber-400' : 'text-white group-hover:text-amber-400'
                              : isSelected ? 'text-[#111111]' : 'text-[#111111] group-hover:text-amber-600'
                          }`}>
                            DUBAI → {route.country.toUpperCase()}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm font-mono text-sky-500 font-bold">
                          Cross-Border Reefer • {route.distanceKm} km
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`inline-block text-xs font-mono px-3 py-1 rounded-full border font-bold ${
                          route.availability === 'Available Daily'
                            ? isDark ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400' : 'bg-emerald-50 border-emerald-300 text-emerald-800'
                            : isDark ? 'bg-amber-950/40 border-amber-500/40 text-amber-400' : 'bg-amber-50 border-amber-300 text-amber-800'
                        }`}
                      >
                        {route.availability}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Destination Route Telemetry & Map Card */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden space-y-6 ${
              isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#111111]'
            }`}>
              
              {/* Visual GPS Route Animation HUD */}
              <div className={`p-5 sm:p-6 rounded-2xl border space-y-5 ${
                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
              }`}>
                <div className={`flex items-center justify-between text-xs sm:text-sm font-mono border-b pb-3 font-bold ${
                  isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-[#4B5563]'
                }`}>
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-sky-500 animate-spin" style={{ animationDuration: '6s' }} />
                    <span className={isDark ? 'text-white tracking-wider' : 'text-[#111111] tracking-wider'}>LIVE ROUTE RADAR</span>
                  </div>
                  <span className="text-emerald-500 font-bold">STATUS: ACTIVE CORRIDOR</span>
                </div>

                {/* Animated Origin to Destination Graphic */}
                <div className="py-4 sm:py-5 relative">
                  <div className="flex items-center justify-between relative z-10 gap-2 sm:gap-4">
                    
                    {/* Origin Hub */}
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl border-2 border-emerald-500 flex items-center justify-center text-xl sm:text-2xl shadow-xs ${
                        isDark ? 'bg-slate-800' : 'bg-white'
                      }`}>
                        🇦🇪
                      </div>
                      <span className={`text-xs sm:text-sm font-mono font-bold mt-2 ${isDark ? 'text-white' : 'text-[#111111]'}`}>DUBAI, UAE</span>
                      <span className="text-[10px] sm:text-xs font-mono text-slate-400 font-medium">Al Aweer / JAFZA</span>
                    </div>

                    {/* Midpoint Border Post */}
                    <div className="flex flex-col items-center text-center px-1 sm:px-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-amber-500 flex items-center justify-center shadow-xs ${
                        isDark ? 'bg-slate-800' : 'bg-white'
                      }`}>
                        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono text-amber-500 font-bold mt-1.5 whitespace-nowrap">BORDER POST</span>
                      <span className="text-[10px] sm:text-xs font-mono text-slate-400 font-medium max-w-[120px] sm:max-w-[160px] truncate">{selectedRoute.borderPost}</span>
                    </div>

                    {/* Destination Hub */}
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl border-2 border-sky-500 flex items-center justify-center text-xl sm:text-2xl shadow-xs ${
                        isDark ? 'bg-slate-800' : 'bg-white'
                      }`}>
                        {selectedRoute.flag}
                      </div>
                      <span className={`text-xs sm:text-sm font-mono font-bold mt-2 ${isDark ? 'text-white' : 'text-[#111111]'}`}>{selectedRoute.country.toUpperCase()}</span>
                      <span className="text-[10px] sm:text-xs font-mono text-sky-400 font-bold">{selectedRoute.majorHubs[0]}</span>
                    </div>

                  </div>

                  {/* Route line */}
                  <div className={`absolute top-6 sm:top-7 left-10 right-10 sm:left-14 sm:right-14 h-1.5 z-0 ${
                    isDark ? 'bg-slate-800' : 'bg-slate-200'
                  }`}>
                    <div className="h-full bg-amber-500 w-full relative overflow-hidden">
                      <div className="absolute top-0 bottom-0 w-20 bg-white blur-2xs animate-[moveRight_2.5s_infinite]" />
                    </div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border text-xs sm:text-sm font-mono flex items-center justify-between shadow-2xs ${
                  isDark ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-[#374151]'
                }`}>
                  <span>Transit Permits: <strong className={isDark ? 'text-white' : 'text-[#111111]'}>{selectedRoute.transitPermits}</strong></span>
                  <span className="text-amber-500 font-bold">25-Ton Reefer Fleet</span>
                </div>
              </div>

              {/* Detailed Operational Specs for Selected Route */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black flex items-center gap-2.5">
                    <span className="text-2xl sm:text-3xl">{selectedRoute.flag}</span>
                    <span>Dubai to {selectedRoute.country} Reefer Line</span>
                  </h3>
                  <p className={`text-sm sm:text-base mt-1.5 leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#374151]'}`}>
                    {selectedRoute.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-mono">
                  <div className={`p-4 rounded-2xl border space-y-2 ${
                    isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
                  }`}>
                    <span className="text-slate-400 uppercase font-bold text-xs">Primary Discharge Terminals</span>
                    <ul className="space-y-1.5 pt-1 font-sans">
                      {selectedRoute.majorHubs.map((hub, i) => (
                        <li key={i} className={`flex items-center gap-2 text-sm font-medium ${isDark ? 'text-slate-200' : 'text-[#111111]'}`}>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{hub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-4 rounded-2xl border space-y-3 ${
                    isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
                  }`}>
                    <div>
                      <span className="text-slate-400 uppercase font-bold text-xs">Thermal Specification</span>
                      <p className="text-sky-400 font-bold text-sm sm:text-base pt-0.5">{selectedRoute.tempRequirements}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 uppercase font-bold text-xs">Typical Freight Scopes</span>
                      <p className={`font-sans text-sm pt-0.5 font-medium ${isDark ? 'text-slate-300' : 'text-[#374151]'}`}>
                        {selectedRoute.typicalCargo.join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instant Quote CTA with Preselected Route */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                  <button
                    onClick={() => onOpenQuote({ destination: selectedRoute.country, route: selectedRoute.id })}
                    className="w-full sm:w-auto flex-1 py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>REQUEST QUOTE FOR DUBAI → {selectedRoute.country.toUpperCase()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/971508924471?text=Hello,%20I%20need%20a%2025-ton%20reefer%20truck%20for%20Dubai%20to%20GCC."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto py-4 px-6 rounded-xl text-xs sm:text-sm font-mono font-bold border-2 text-center shadow-2xs ${
                      isDark ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-700' : 'bg-white hover:bg-slate-50 text-[#111111] border-slate-300'
                    }`}
                  >
                    Direct Border Dispatch
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
