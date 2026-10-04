'use client';

import React, { useState } from 'react';
import { 
  Table, 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react';
import { REEFER_ROUTES, RouteDestination } from '@/data/reeferData';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferRouteMatrixProps {
  onOpenQuote: (defaultValues?: Record<string, string>) => void;
}

export default function ReeferRouteMatrix({ onOpenQuote }: ReeferRouteMatrixProps) {
  const [selectedDestination, setSelectedDestination] = useState<RouteDestination>(REEFER_ROUTES[0]);
  const { isDark } = useReeferTheme();

  return (
    <section id="matrix" className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-mono font-bold shadow-xs ${
            isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-[#F8FAFC] border-slate-200 text-amber-700'
          }`}>
            <Table className="w-4 h-4 text-amber-500" />
            <span>INTERACTIVE CORRIDOR SCHEDULE</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            GCC ROUTE MATRIX
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            Select any destination below to inspect specific reefer trailer specifications, typical cargo compliance scopes, and cross-border transit parameters.
          </p>
        </div>

        {/* Master Route Table Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Table: Origin | Destination | Service */}
          <div className={`lg:col-span-7 overflow-x-auto rounded-3xl border shadow-xl ${
            isDark ? 'bg-[#0F172A] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`border-b text-xs sm:text-sm font-mono uppercase tracking-wider font-bold ${
                  isDark ? 'border-slate-800 bg-slate-900 text-slate-400' : 'border-slate-200 bg-[#F8FAFC] text-[#4B5563]'
                }`}>
                  <th className="py-4 sm:py-5 px-6">ORIGIN</th>
                  <th className="py-4 sm:py-5 px-6">DESTINATION</th>
                  <th className="py-4 sm:py-5 px-6">SERVICE</th>
                  <th className="py-4 sm:py-5 px-6 text-right">DETAILS</th>
                </tr>
              </thead>
              <tbody className={`divide-y text-sm sm:text-base font-mono ${
                isDark ? 'divide-slate-800' : 'divide-slate-100'
              }`}>
                {REEFER_ROUTES.map((route) => {
                  const isSelected = selectedDestination.id === route.id;
                  return (
                    <tr
                      key={route.id}
                      onClick={() => setSelectedDestination(route)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? isDark 
                            ? 'bg-slate-800/90 text-white' 
                            : 'bg-amber-50/80 text-[#111111]'
                          : isDark
                            ? 'hover:bg-slate-800/50 text-slate-300'
                            : 'hover:bg-slate-50 text-[#374151]'
                      }`}
                    >
                      {/* Origin */}
                      <td className={`py-4 sm:py-5 px-6 font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🇦🇪</span>
                          <span>Dubai</span>
                        </div>
                      </td>

                      {/* Destination */}
                      <td className="py-4 sm:py-5 px-6 font-black">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl">{route.flag}</span>
                          <span className={isSelected ? 'text-amber-500 font-black' : isDark ? 'text-white' : 'text-[#111111]'}>
                            {route.country}
                          </span>
                        </div>
                      </td>

                      {/* Service */}
                      <td className="py-4 sm:py-5 px-6">
                        <span className={`px-3 py-1 rounded-lg border font-bold text-xs sm:text-sm ${
                          isDark ? 'bg-slate-900 text-sky-400 border-slate-700' : 'bg-slate-100 text-[#0369A1] border-slate-200'
                        }`}>
                          25-Ton Reefer
                        </span>
                      </td>

                      {/* Select Action */}
                      <td className="py-4 sm:py-5 px-6 text-right">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-black ${
                            isSelected ? 'text-amber-500' : 'text-slate-400 hover:text-slate-300'
                          }`}
                        >
                          <span>{isSelected ? 'ACTIVE' : 'INSPECT'}</span>
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Right Inspection Panel (Selected Destination Details) */}
          <div className="lg:col-span-5">
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl space-y-7 ${
              isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#111111]'
            }`}>
              
              {/* Header */}
              <div className={`border-b pb-5 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400 font-bold">
                    ROUTE SPECIFICATION
                  </span>
                  <span className={`text-xs sm:text-sm font-mono px-3 py-1 rounded-lg border font-bold ${
                    isDark ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30' : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  }`}>
                    {selectedDestination.availability}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mt-2 flex items-center gap-2.5">
                  <span className="text-3xl">{selectedDestination.flag}</span>
                  <span>Dubai → {selectedDestination.country}</span>
                </h3>
                <p className={`text-sm sm:text-base mt-1.5 font-sans font-normal leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-[#374151]'
                }`}>
                  {selectedDestination.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="space-y-4 text-sm font-mono">
                
                <div className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
                }`}>
                  <span className="text-xs text-slate-400 uppercase font-bold">Typical Cargo Types</span>
                  <div className={`font-sans text-sm sm:text-base mt-1 font-bold ${
                    isDark ? 'text-white' : 'text-[#111111]'
                  }`}>
                    {selectedDestination.typicalCargo.join(' • ')}
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
                }`}>
                  <span className="text-xs text-slate-400 uppercase font-bold">Reefer Requirement</span>
                  <div className="text-sky-400 font-bold text-base mt-0.5">
                    {selectedDestination.tempRequirements}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-sans mt-0.5 font-medium">
                    15-Meter High-Cube box with Carrier Transicold engine
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border space-y-2 ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
                }`}>
                  <span className="text-xs text-slate-400 uppercase font-bold">Estimated Route Information</span>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-slate-400">Corridor Distance:</span>
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>{selectedDestination.distanceKm} KM Approx.</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-slate-400">Primary Border Post:</span>
                    <span className="text-amber-500 font-bold">{selectedDestination.borderPost}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-slate-400">Transit Permits:</span>
                    <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-[#111111]'}`}>{selectedDestination.transitPermits}</span>
                  </div>
                </div>

              </div>

              {/* Quote CTA Button */}
              <div>
                <button
                  onClick={() => onOpenQuote({ destination: selectedDestination.country, route: selectedDestination.id })}
                  className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>REQUEST QUOTE FOR {selectedDestination.country.toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs font-mono text-slate-400 text-center mt-2.5 font-medium">
                  Quote based on route + cargo + requirements (No fabricated pricing)
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
