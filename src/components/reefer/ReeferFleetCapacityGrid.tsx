'use client';

import React, { useState } from 'react';
import { 
  Truck, 
  Ruler, 
  Weight, 
  Radio, 
  Filter 
} from 'lucide-react';
import { FLEET_TRAILERS, FleetTrailerUnit } from '@/data/reeferData';
import { useReeferTheme } from './ReeferThemeContext';

export default function ReeferFleetCapacityGrid() {
  const [selectedUnit, setSelectedUnit] = useState<FleetTrailerUnit>(FLEET_TRAILERS[0]);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const { isDark } = useReeferTheme();

  const filteredTrailers = statusFilter === 'ALL'
    ? FLEET_TRAILERS
    : FLEET_TRAILERS.filter(t => t.status === statusFilter);

  const getStatusColor = (status: FleetTrailerUnit['status']) => {
    switch (status) {
      case 'In Transit':
        return 'bg-emerald-500 text-emerald-800 border-emerald-300';
      case 'Border Customs':
        return 'bg-amber-500 text-amber-800 border-amber-300';
      case 'Loading JAFZA':
      case 'Loading Al Aweer':
        return 'bg-sky-500 text-sky-800 border-sky-300';
      case 'Pre-Trip Staged':
        return 'bg-slate-400 text-slate-700 border-slate-300';
      default:
        return 'bg-emerald-500 text-emerald-800 border-emerald-300';
    }
  };

  return (
    <section className={`relative py-24 border-b overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-mono font-bold shadow-xs ${
            isDark ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-[#F8FAFC] border-slate-200 text-amber-700'
          }`}>
            <Radio className="w-4 h-4 animate-pulse text-amber-500" />
            <span>REAL-TIME FLEET TELEMETRY MATRIX</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            FLEET CAPACITY VISUALIZATION
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-[#4B5563]'}`}>
            Real-time operational dashboard visualizing our 20 dedicated 25-ton refrigerated trailers across GCC transit routes.
          </p>
        </div>

        {/* Master Metrics Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 sm:p-7 rounded-2xl border flex items-center justify-between shadow-2xs ${
            isDark ? 'bg-[#0F172A] border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
          }`}>
            <div>
              <span className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">FLEET CAPACITY</span>
              <div className={`text-3xl sm:text-4xl font-black font-mono mt-1 ${isDark ? 'text-white' : 'text-[#111111]'}`}>20 UNITS</div>
              <span className="text-xs sm:text-sm font-mono text-amber-500 font-bold">Dedicated Reefer Trailers</span>
            </div>
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-amber-500 shadow-xs ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
            }`}>
              <Truck className="w-7 h-7" />
            </div>
          </div>

          <div className={`p-6 sm:p-7 rounded-2xl border flex items-center justify-between shadow-2xs ${
            isDark ? 'bg-[#0F172A] border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
          }`}>
            <div>
              <span className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">PAYLOAD CAPACITY</span>
              <div className={`text-3xl sm:text-4xl font-black font-mono mt-1 ${isDark ? 'text-white' : 'text-[#111111]'}`}>25 TON / UNIT</div>
              <span className="text-xs sm:text-sm font-mono text-sky-400 font-bold">Heavy Highway Certified</span>
            </div>
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-sky-400 shadow-xs ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
            }`}>
              <Weight className="w-7 h-7" />
            </div>
          </div>

          <div className={`p-6 sm:p-7 rounded-2xl border flex items-center justify-between shadow-2xs ${
            isDark ? 'bg-[#0F172A] border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
          }`}>
            <div>
              <span className="text-xs sm:text-sm font-mono text-slate-400 uppercase font-bold">TRAILER DIMENSIONS</span>
              <div className={`text-3xl sm:text-4xl font-black font-mono mt-1 ${isDark ? 'text-white' : 'text-[#111111]'}`}>15M TRAILER</div>
              <span className="text-xs sm:text-sm font-mono text-emerald-500 font-bold">High-Cube Box Volume</span>
            </div>
            <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-emerald-500 shadow-xs ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
            }`}>
              <Ruler className="w-7 h-7" />
            </div>
          </div>
        </div>

        {/* 20 Units Dashboard Container */}
        <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl space-y-8 ${
          isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#111111]'
        }`}>
          
          {/* Filter Bar & Legend */}
          <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 ${
            isDark ? 'border-slate-800' : 'border-slate-100'
          }`}>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-mono text-slate-400 mr-2 flex items-center gap-1.5 font-bold">
                <Filter className="w-4 h-4" />
                FILTER STATUS:
              </span>
              {['ALL', 'In Transit', 'Border Customs', 'Loading JAFZA', 'Loading Al Aweer', 'Pre-Trip Staged'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono transition-all font-bold cursor-pointer ${
                    statusFilter === status
                      ? 'bg-amber-500 text-slate-950 shadow-2xs'
                      : isDark
                        ? 'bg-slate-900 text-slate-300 border border-slate-700 hover:bg-slate-800'
                        : 'bg-[#F8FAFC] text-[#4B5563] hover:text-[#111111] border border-slate-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Visual Dot Legend */}
            <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-slate-400 font-bold">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                In Transit
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                Border Customs
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                Loading Docks
              </span>
            </div>
          </div>

          {/* 4x5 Visual Units Grid */}
          <div className="space-y-4">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-bold">
              <span>20 STANDARDIZED UNITS DISPATCH MATRIX</span>
              <span className="text-amber-500 font-bold">Click any unit to view live satellite sensor telemetry</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {filteredTrailers.map((trailer) => {
                const isSelected = selectedUnit.id === trailer.id;
                const statusStyles = getStatusColor(trailer.status);
                const dotBg = statusStyles.split(' ')[0];

                return (
                  <div
                    key={trailer.id}
                    onClick={() => setSelectedUnit(trailer)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer relative group ${
                      isSelected
                        ? isDark
                          ? 'bg-slate-800/90 border-amber-500 shadow-md'
                          : 'bg-amber-50/70 border-amber-500 shadow-sm'
                        : isDark
                          ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                          : 'bg-[#F8FAFC] border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-sm font-black transition-colors ${
                        isDark ? 'text-white group-hover:text-amber-400' : 'text-[#111111] group-hover:text-amber-700'
                      }`}>
                        {trailer.unitCode}
                      </span>
                      <span className={`w-2.5 h-2.5 rounded-full ${dotBg} ${trailer.status === 'In Transit' ? 'animate-pulse' : ''}`} />
                    </div>

                    <div className="text-xs sm:text-sm font-mono text-sky-400 font-bold truncate">
                      {trailer.currentRoute}
                    </div>

                    <div className={`flex items-center justify-between text-xs font-mono mt-2 pt-2 border-t font-semibold ${
                      isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-[#6B7280]'
                    }`}>
                      <span className={`font-bold ${isDark ? 'text-slate-200' : 'text-[#111111]'}`}>{trailer.liveTemp}</span>
                      <span className="truncate max-w-[90px] text-right text-slate-400">
                        {trailer.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Unit Dynamic Telemetry Detail Bar */}
          <div className={`p-5 sm:p-6 rounded-2xl border space-y-3 shadow-2xs ${
            isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-[#F8FAFC] border-slate-200'
          }`}>
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2 ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`text-lg sm:text-xl font-black font-mono ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                  {selectedUnit.unitCode}
                </span>
                <span className="text-sm font-mono text-slate-400 font-bold">
                  {selectedUnit.trailerModel}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm font-mono">
                <span className="text-slate-400 font-bold">Chamber Temp:</span>
                <span className={`font-black px-2.5 py-1 rounded-md border text-sm ${
                  isDark ? 'bg-sky-950/50 border-sky-500/30 text-sky-300' : 'bg-sky-50 border-sky-200 text-[#0369A1]'
                }`}>
                  {selectedUnit.liveTemp}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs sm:text-sm font-mono text-slate-400 pt-1">
              <div>
                <span className="text-xs uppercase font-bold">Cooling Compressor</span>
                <div className={`mt-1 text-sm font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>{selectedUnit.coolingUnit}</div>
              </div>
              <div>
                <span className="text-xs uppercase font-bold">Assigned Route</span>
                <div className="text-amber-500 font-bold mt-1 text-sm">{selectedUnit.currentRoute}</div>
              </div>
              <div>
                <span className="text-xs uppercase font-bold">Current GPS Fix</span>
                <div className={`mt-1 text-sm font-bold truncate ${isDark ? 'text-white' : 'text-[#111111]'}`}>{selectedUnit.location}</div>
              </div>
              <div>
                <span className="text-xs uppercase font-bold">Operational Status</span>
                <div className="text-emerald-500 font-black mt-1 text-sm">{selectedUnit.status}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
