'use client';

import React, { useState } from 'react';
import {
  Table,
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Truck,
  ExternalLink
} from 'lucide-react';
import { GCC_ROUTES, GCCRoute } from '@/data/reeferLogisticsData';

interface ReeferRouteMatrixProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferRouteMatrix({ onOpenQuote }: ReeferRouteMatrixProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRouteModal, setSelectedRouteModal] = useState<GCCRoute | null>(null);

  const filteredRoutes = GCC_ROUTES.filter((r) =>
    r.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.destinationHubs.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase())) ||
    r.borderCrossing.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="matrix" className="py-20 sm:py-28 bg-[#090d16] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <Table className="w-3.5 h-3.5" />
            <span>OPERATIONAL ROUTE SCHEDULE & MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            GCC ROUTE MATRIX
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Comprehensive overview of our cross-border reefer corridors linking Dubai to major GCC industrial and consumption hubs.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by country, city or border..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0c1220] border border-white/10 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
            />
          </div>

          <div className="text-xs font-mono text-slate-400 text-right w-full sm:w-auto">
            Showing <span className="text-white font-bold">{filteredRoutes.length}</span> Active Corridors
          </div>
        </div>

        {/* Advanced Interactive Route Table */}
        <div className="rounded-2xl bg-[#0c1220] border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/40 border-b border-white/10 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6">ORIGIN</th>
                  <th className="py-4 px-6">DESTINATION</th>
                  <th className="py-4 px-6">SERVICE</th>
                  <th className="py-4 px-6">BORDER CROSSING</th>
                  <th className="py-4 px-6">TEMP RANGE</th>
                  <th className="py-4 px-6">TRANSIT TIME</th>
                  <th className="py-4 px-6 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs font-mono">
                {filteredRoutes.map((route) => (
                  <tr
                    key={route.id}
                    onClick={() => setSelectedRouteModal(route)}
                    className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                  >
                    {/* Origin */}
                    <td className="py-4 px-6 text-white font-semibold whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span>🇦🇪</span>
                        <span>Dubai (Al Aweer / JAFZA)</span>
                      </div>
                    </td>

                    {/* Destination */}
                    <td className="py-4 px-6 text-white font-bold whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{route.flag}</span>
                        <span className="group-hover:text-sky-300 transition-colors">
                          {route.country}
                        </span>
                      </div>
                    </td>

                    {/* Service */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold">
                        25T Reefer
                      </span>
                    </td>

                    {/* Border Crossing */}
                    <td className="py-4 px-6 text-slate-300 max-w-[200px] truncate" title={route.borderCrossing}>
                      {route.borderCrossing}
                    </td>

                    {/* Temp Range */}
                    <td className="py-4 px-6 text-sky-300 font-bold whitespace-nowrap">
                      {route.tempRangeSupported}
                    </td>

                    {/* Transit Time */}
                    <td className="py-4 px-6 text-slate-300 whitespace-nowrap">
                      {route.transitHoursRange}
                    </td>

                    {/* Action Quote */}
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenQuote({ route: route.id, destination: route.country });
                        }}
                        className="px-3 py-1.5 rounded-lg bg-sky-500/20 border border-sky-500/40 hover:bg-sky-500 hover:text-white text-sky-300 text-xs font-bold transition-all inline-flex items-center gap-1"
                      >
                        <span>Quote</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal / Detail Drawer for Selected Route */}
        {selectedRouteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#0e1628] border border-sky-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl text-left">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedRouteModal.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono">
                      DUBAI ⇄ {selectedRouteModal.country.toUpperCase()}
                    </h3>
                    <span className="text-xs text-sky-400 font-mono">
                      Cross-Border 25-Ton Reefer Corridor
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRouteModal(null)}
                  className="w-8 h-8 rounded-lg bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="my-6 space-y-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <div className="text-slate-400">DESTINATION DELIVERY HUBS:</div>
                  <div className="text-white font-sans text-sm flex flex-wrap gap-2">
                    {selectedRouteModal.destinationHubs.map((hub, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                        📍 {hub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <div className="text-slate-400">CUSTOMS & BORDER GATE:</div>
                    <div className="text-white font-bold mt-1 truncate">{selectedRouteModal.borderCrossing}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                    <div className="text-slate-400">DISTANCE & TRANSIT:</div>
                    <div className="text-sky-300 font-bold mt-1">~{selectedRouteModal.standardDistanceKm} KM ({selectedRouteModal.transitHoursRange})</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/20 text-slate-300 font-sans leading-relaxed">
                  <span className="font-mono text-sky-400 font-bold block mb-1">CORRIDOR OVERVIEW:</span>
                  {selectedRouteModal.routeHighlights}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedRouteModal(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.05] text-slate-300 hover:text-white font-mono text-xs"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    const r = selectedRouteModal;
                    setSelectedRouteModal(null);
                    onOpenQuote({ route: r.id, destination: r.country });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-lg shadow-sky-500/30"
                >
                  <span>REQUEST QUOTE FOR {selectedRouteModal.country.toUpperCase()}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
