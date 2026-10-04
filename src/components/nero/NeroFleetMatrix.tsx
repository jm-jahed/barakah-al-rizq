'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Users, Compass, Shield, Award, Sparkles, ChevronRight, Layers, Eye, Check, X, SlidersHorizontal, ArrowRight, LifeBuoy } from 'lucide-react';
import { YACHT_FLEET_DATA, YachtVessel } from '@/data/neroData';

interface NeroFleetMatrixProps {
  onOpenBooking: (yachtId?: string) => void;
  onOpenDeckTour: (yacht: YachtVessel) => void;
  onSelectForCalculator: (yachtId: string) => void;
}

export const NeroFleetMatrix: React.FC<NeroFleetMatrixProps> = ({
  onOpenBooking,
  onOpenDeckTour,
  onSelectForCalculator
}) => {
  const [filterSize, setFilterSize] = useState<'all' | 'mega' | 'luxury' | 'sport'>('all');
  const [requireHelipad, setRequireHelipad] = useState<boolean>(false);
  const [selectedYacht, setSelectedYacht] = useState<YachtVessel>(YACHT_FLEET_DATA[0]);
  const [compareIds, setCompareIds] = useState<string[]>(['nero-sovereign', 'majesty-regalia']);
  const [activeDeckTab, setActiveDeckTab] = useState<number>(0);

  const filteredFleet = YACHT_FLEET_DATA.filter((y) => {
    if (requireHelipad && !y.helipad) return false;
    if (filterSize === 'mega') return y.lengthFeet >= 180;
    if (filterSize === 'luxury') return y.lengthFeet >= 120 && y.lengthFeet < 180;
    if (filterSize === 'sport') return y.lengthFeet < 120;
    return true;
  });

  const toggleCompare = (id: string) => {
    if (compareIds.includes(id)) {
      if (compareIds.length > 1) {
        setCompareIds(compareIds.filter((i) => i !== id));
      }
    } else {
      if (compareIds.length < 3) {
        setCompareIds([...compareIds, id]);
      }
    }
  };

  return (
    <section id="fleet-matrix" className="py-24 bg-[#030712] border-b border-cyan-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Anchor className="w-3.5 h-3.5" />
            <span>INTERACTIVE FLEET MATRIX & TECHNICAL SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            The Sovereign Superyacht Fleet
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Explore our curated portfolio of Italian, Dutch, and UAE-built mega-yachts with full deck plan schematics, stateroom configurations, and water toy lockers.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-3xl bg-[#091322] border border-cyan-500/30 mb-12 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Fleet (6 Yachts)' },
              { id: 'mega', label: 'Mega-Yachts (180ft+)' },
              { id: 'luxury', label: 'Luxury Cruisers (120–180ft)' },
              { id: 'sport', label: 'High-Speed Sport (<120ft)' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilterSize(f.id as any)}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                  filterSize === f.id
                    ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 cursor-pointer hover:bg-white/10 transition-colors">
            <input
              type="checkbox"
              checked={requireHelipad}
              onChange={(e) => setRequireHelipad(e.target.checked)}
              className="accent-cyan-400 w-4 h-4 cursor-pointer"
            />
            <span className="font-bold">Helipad Certified Only</span>
          </label>
        </div>

        {/* Master Vessel Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Vessel Selection List */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider block px-1">
              Select Vessel to Inspect ({filteredFleet.length})
            </span>

            <div className="space-y-3">
              {filteredFleet.map((yacht) => {
                const isSelected = selectedYacht.id === yacht.id;
                return (
                  <div
                    key={yacht.id}
                    onClick={() => {
                      setSelectedYacht(yacht);
                      setActiveDeckTab(0);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-950/70 to-[#0F1E38] border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                        : 'bg-[#091322] border-white/10 hover:border-cyan-500/40 hover:bg-[#0E1A2E]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
                        <img src={yacht.images.hero} alt={yacht.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-serif text-white">{yacht.name}</h4>
                        <p className="text-[11px] font-mono text-cyan-300">{yacht.lengthFeet} FT • {yacht.builder}</p>
                        <p className="text-[10px] font-mono text-gray-400">AED {yacht.dailyRateAed.toLocaleString()} / day</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      {isSelected ? (
                        <span className="px-2 py-1 rounded bg-cyan-500 text-black font-mono text-[10px] font-bold">
                          ACTIVE
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep Technical Inspector for Selected Yacht */}
          <div className="lg:col-span-8 bg-[#091322] rounded-3xl border border-cyan-500/30 p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Top Vessel Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-black">
              <img
                src={selectedYacht.images.hero}
                alt={selectedYacht.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091322] via-transparent to-black/40" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-black/80 border border-cyan-400 text-cyan-300 font-mono text-xs font-bold backdrop-blur-md">
                  {selectedYacht.lengthFeet} FT ({selectedYacht.lengthMeters}m) • {selectedYacht.builder}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenDeckTour(selectedYacht)}
                    className="px-3.5 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>360° DECK TOUR</span>
                  </button>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">{selectedYacht.name}</h3>
                  <p className="text-xs font-mono text-cyan-300">{selectedYacht.tagline}</p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs font-mono text-gray-300 block">Weekly Charter Rate</span>
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-cyan-400">
                    AED {selectedYacht.weeklyRateAed.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Specs Metric Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#040914] border border-white/5 font-mono text-xs">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">Sleeping Guests</span>
                <span className="text-white font-bold text-sm">{selectedYacht.guestsSleep} ({selectedYacht.cabins} Cabins)</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">Dedicated Crew</span>
                <span className="text-cyan-400 font-bold text-sm">{selectedYacht.crew} Members</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">Cruising / Max Speed</span>
                <span className="text-white font-bold text-sm">{selectedYacht.cruisingSpeedKnots} / {selectedYacht.maxSpeedKnots} Knots</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase">Home Port & Berth</span>
                <span className="text-emerald-400 font-bold text-sm">{selectedYacht.berthLocation}</span>
              </div>
            </div>

            {/* Deck Plan Explorer Tabs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Deck-by-Deck Architectural Schematics</span>
                </span>

                <div className="flex items-center gap-1">
                  {selectedYacht.deckPlans.map((deck, idx) => (
                    <button
                      key={deck.deckName}
                      type="button"
                      onClick={() => setActiveDeckTab(idx)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                        activeDeckTab === idx
                          ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                          : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      {deck.deckName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Deck Features Box */}
              <div className="p-5 rounded-2xl bg-[#040914] border border-cyan-500/20 space-y-3">
                <h4 className="text-sm font-bold font-serif text-white">
                  {selectedYacht.deckPlans[activeDeckTab]?.deckName} Specifications:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedYacht.deckPlans[activeDeckTab]?.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-gray-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Water Toys Locker & Action Row */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <LifeBuoy className="w-4 h-4 text-cyan-400" />
                <span>Onboard Marine Water Toy Garage</span>
              </span>

              <div className="flex flex-wrap gap-2">
                {selectedYacht.toys.map((toy, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-mono text-xs"
                  >
                    {toy}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => onSelectForCalculator(selectedYacht.id)}
                className="w-full sm:w-1/2 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CALCULATE APA & CHARTER (AED)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onOpenBooking(selectedYacht.id)}
                className="w-full sm:w-1/2 py-4 rounded-xl bg-[#0F1E38] hover:bg-[#162B4E] border border-cyan-500/40 text-cyan-200 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                REQUEST CHARTER DATES FOR THIS VESSEL
              </button>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="p-8 rounded-3xl bg-[#091322] border border-cyan-500/30 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold font-serif text-white">Side-by-Side Vessel Comparison Matrix</h3>
              <p className="text-xs font-mono text-gray-400">Select up to 3 superyachts to compare technical specifications.</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {YACHT_FLEET_DATA.map((y) => (
                <button
                  key={y.id}
                  type="button"
                  onClick={() => toggleCompare(y.id)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer border ${
                    compareIds.includes(y.id)
                      ? 'bg-cyan-500 text-black border-cyan-400'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                  }`}
                >
                  {compareIds.includes(y.id) ? '✓ ' : '+ '} {y.name}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-cyan-300">
                  <th className="py-3 px-4 font-bold">Metric / Specification</th>
                  {compareIds.map((id) => {
                    const y = YACHT_FLEET_DATA.find((item) => item.id === id);
                    return (
                      <th key={id} className="py-3 px-4 font-bold text-white">
                        {y?.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td className="py-3 px-4 text-gray-400">Length Overall (LOA)</td>
                  {compareIds.map((id) => (
                    <td key={id} className="py-3 px-4 font-bold text-white">
                      {YACHT_FLEET_DATA.find((y) => y.id === id)?.lengthFeet} ft ({YACHT_FLEET_DATA.find((y) => y.id === id)?.lengthMeters}m)
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Builder & Heritage</td>
                  {compareIds.map((id) => (
                    <td key={id} className="py-3 px-4 text-cyan-300">
                      {YACHT_FLEET_DATA.find((y) => y.id === id)?.builder}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Guest Sleep / Cabins</td>
                  {compareIds.map((id) => (
                    <td key={id} className="py-3 px-4">
                      {YACHT_FLEET_DATA.find((y) => y.id === id)?.guestsSleep} Guests ({YACHT_FLEET_DATA.find((y) => y.id === id)?.cabins} Cabins)
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Crew Complement</td>
                  {compareIds.map((id) => (
                    <td key={id} className="py-3 px-4 text-cyan-400 font-bold">
                      {YACHT_FLEET_DATA.find((y) => y.id === id)?.crew} Dedicated Crew
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Helipad Rating</td>
                  {compareIds.map((id) => {
                    const y = YACHT_FLEET_DATA.find((item) => item.id === id);
                    return (
                      <td key={id} className="py-3 px-4">
                        {y?.helipad ? (
                          <span className="text-emerald-400 font-bold">✓ {y.helipadRating || 'Touch-and-Go'}</span>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Weekly Charter Rate</td>
                  {compareIds.map((id) => (
                    <td key={id} className="py-3 px-4 text-cyan-400 font-bold">
                      AED {YACHT_FLEET_DATA.find((y) => y.id === id)?.weeklyRateAed.toLocaleString()} / wk
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
