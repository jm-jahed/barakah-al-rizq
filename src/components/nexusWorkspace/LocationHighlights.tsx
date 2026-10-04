'use client';

import React, { useState } from 'react';
import { NEXUS_LOCATIONS, BusinessCenterLocation } from '@/data/nexusWorkspaceData';

export default function LocationHighlights() {
  const [activeLocationId, setActiveLocationId] = useState<string>(NEXUS_LOCATIONS[0].id);

  const activeLocation = NEXUS_LOCATIONS.find((l) => l.id === activeLocationId) || NEXUS_LOCATIONS[0];

  return (
    <section id="locations" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>5 Strategic UAE Addresses</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Flagship Business Centers Across Dubai & Abu Dhabi
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Position your enterprise in the UAE’s most prestigious commercial landmarks with seamless metro connectivity, executive dining, and direct government registry proximity.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {NEXUS_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocationId(loc.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition flex items-center gap-2.5 whitespace-nowrap ${
                activeLocationId === loc.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{loc.name}</span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  activeLocationId === loc.id ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-emerald-400'
                }`}
              >
                {loc.availableSuites} Free
              </span>
            </button>
          ))}
        </div>

        {/* Active Location Showcase Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Visual Column (6 Cols) */}
          <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-[500px]">
            <img
              src={activeLocation.image}
              alt={activeLocation.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:hidden" />
            
            {/* Overlay City / District Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="bg-slate-950/90 backdrop-blur text-amber-400 text-xs font-mono font-bold px-3 py-1.5 rounded-xl border border-amber-500/30 shadow-lg">
                {activeLocation.city} • {activeLocation.district}
              </span>
            </div>

            {/* Bottom Telemetry Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Scale</span>
                <span className="font-bold text-white">{activeLocation.totalFloors}</span>
              </div>
              <div className="w-px h-6 bg-slate-800" />
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Total Capacity</span>
                <span className="font-bold text-amber-400">{activeLocation.totalSuites} Suites</span>
              </div>
              <div className="w-px h-6 bg-slate-800" />
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Occupancy</span>
                <span className="font-bold text-emerald-400">{activeLocation.occupancyPercentage}%</span>
              </div>
            </div>
          </div>

          {/* Details Column (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
                  {activeLocation.tower}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeLocation.coordinates}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeLocation.name}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeLocation.description}
              </p>

              {/* Transit & Parking Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 text-xs space-y-1">
                  <span className="text-slate-400 block font-mono text-[10px] uppercase">🚇 Metro & Transit</span>
                  <span className="text-slate-200 font-semibold">{activeLocation.metroProximity}</span>
                </div>
                <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 text-xs space-y-1">
                  <span className="text-slate-400 block font-mono text-[10px] uppercase">🅿️ VIP Parking</span>
                  <span className="text-slate-200 font-semibold">{activeLocation.parkingSpecs}</span>
                </div>
              </div>

              {/* Location Highlights List */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                  Location Advantages & Lifestyle
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeLocation.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Contacts & CTAs */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-300 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <a href={`tel:${activeLocation.phone.replace(/\s+/g, '')}`} className="hover:text-amber-400 transition font-bold">
                    {activeLocation.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span>📍</span>
                  <span className="text-slate-400 text-[11px] truncate max-w-[200px]">{activeLocation.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${activeLocation.googleMapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition flex items-center gap-1.5"
                >
                  <span>🗺️</span>
                  <span>View Map</span>
                </a>
                <a
                  href="#tour"
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black rounded-xl transition shadow-lg shadow-amber-500/20"
                >
                  Book Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
