'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, MapPin, Eye, ChevronRight, Check, X, SlidersHorizontal, ArrowRight, Shield, Layers, Key } from 'lucide-react';
import { AURELIA_RESIDENCES_DATA, AureliaResidence } from '@/data/aureliaData';

interface AureliaResidenceMatrixProps {
  onSelectResidence: (residence: AureliaResidence) => void;
  onRequestViewing: (residenceName: string) => void;
}

export const AureliaResidenceMatrix: React.FC<AureliaResidenceMatrixProps> = ({
  onSelectResidence,
  onRequestViewing
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterDistrict, setFilterDistrict] = useState<string>('all');
  const [compareIds, setCompareIds] = useState<string[]>(['res-1', 'res-2', 'res-3']);

  const filteredResidences = AURELIA_RESIDENCES_DATA.filter((r) => {
    if (filterType !== 'all' && r.type !== filterType) return false;
    if (filterDistrict !== 'all' && r.district !== filterDistrict) return false;
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
    <section id="residences-section" className="py-24 bg-[#090C0E] border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-500/10 border border-stone-500/30 text-stone-300 text-xs font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>INTERACTIVE RESIDENCE MATRIX (12 SIGNATURE ESTATES)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            The Signature Portfolio
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Inspect our 12 ultra-prime private villas, branded beachfront residences, and trophy sky penthouses across Palm Jumeirah, Emirates Hills, and Saadiyat Island.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-5 rounded-3xl bg-[#13191D] border border-stone-700/60 mb-12 space-y-4 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Type Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Estates (12)' },
                { id: 'Waterfront Villa', label: 'Waterfront Villas' },
                { id: 'Signature Penthouse', label: 'Sky Penthouses' },
                { id: 'Private Compound', label: 'Private Compounds' },
                { id: 'Golf Estate', label: 'Golf Estates' },
                { id: 'Branded Residence', label: 'Branded Residences' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setFilterType(t.id)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                    filterType === t.id
                      ? 'bg-stone-200 text-black border-white shadow-[0_0_12px_rgba(214,211,209,0.3)]'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* District Dropdown */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-gray-400 font-bold uppercase">District:</span>
              <select
                value={filterDistrict}
                onChange={(e) => setFilterDistrict(e.target.value)}
                className="px-3 py-2 rounded-xl bg-[#090C0E] border border-stone-600 text-white font-mono text-xs outline-none cursor-pointer"
              >
                <option value="all">All Prime Enclaves</option>
                <option value="Palm Jumeirah">Palm Jumeirah</option>
                <option value="Emirates Hills">Emirates Hills</option>
                <option value="Saadiyat Island">Saadiyat Island (Abu Dhabi)</option>
                <option value="Jumeirah Bay Island">Jumeirah Bay Island</option>
                <option value="Dubai Hills">Dubai Hills</option>
                <option value="DIFC">DIFC</option>
              </select>
            </div>
          </div>
        </div>

        {/* Residences Cards Grid (12 Estates) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredResidences.map((res) => (
            <div
              key={res.id}
              className="bg-[#13191D] rounded-3xl border border-stone-800 hover:border-stone-400 transition-all flex flex-col justify-between overflow-hidden group shadow-xl hover:scale-[1.01]"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13191D] via-transparent to-black/30" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/80 text-stone-300 font-mono text-[10px] font-bold border border-stone-600 backdrop-blur-md">
                      {res.type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/40 backdrop-blur-md">
                      {res.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] font-mono text-stone-300 font-bold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>{res.location}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-serif text-white">{res.name}</h3>
                  <p className="text-xs font-sans text-gray-300 line-clamp-2 leading-relaxed">
                    {res.headlineFeature}
                  </p>

                  <div className="grid grid-cols-2 gap-2 py-3 border-t border-b border-white/5 font-mono text-xs text-gray-300">
                    <div>
                      <span className="text-gray-500 block text-[10px]">Bedrooms:</span>
                      <span className="text-white font-bold">{res.bedrooms} Master Suites</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block text-[10px]">BUA Area:</span>
                      <span className="text-white font-bold">{res.buaSqFt.toLocaleString()} sq ft</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400">Capital Value:</span>
                  <span className="text-lg font-mono font-extrabold text-emerald-400">{res.priceFormatted}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectResidence(res)}
                    className="w-1/2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-white/10"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>INSPECT SPECS</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onRequestViewing(res.name)}
                    className="w-1/2 py-3 rounded-xl bg-stone-200 hover:bg-white text-black font-mono text-xs font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Key className="w-3.5 h-3.5" />
                    <span>VIEWING</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="p-8 rounded-3xl bg-[#13191D] border border-stone-700 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold font-serif text-white">Side-by-Side Residence Comparison</h3>
              <p className="text-xs font-mono text-gray-400">Compare architectural layouts, built-up areas, and prices in AED.</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {AURELIA_RESIDENCES_DATA.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => toggleCompare(r.id)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer border ${
                    compareIds.includes(r.id)
                      ? 'bg-stone-200 text-black border-white'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                  }`}
                >
                  {compareIds.includes(r.id) ? '✓ ' : '+ '} {r.name.split(' ')[1] || r.name}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-stone-300">
                  <th className="py-3 px-4 font-bold">Specification</th>
                  {compareIds.map((id) => {
                    const r = AURELIA_RESIDENCES_DATA.find((item) => item.id === id);
                    return (
                      <th key={id} className="py-3 px-4 font-bold text-white">
                        {r?.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td className="py-3 px-4 text-gray-400">Prime Address</td>
                  {compareIds.map((id) => (
                    <td key={id} className="py-3 px-4 text-stone-300">
                      {AURELIA_RESIDENCES_DATA.find((r) => r.id === id)?.location}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Built-Up Area (BUA)</td>
                  {compareIds.map((id) => (
                    <td key={id} className="py-3 px-4 font-bold text-white">
                      {AURELIA_RESIDENCES_DATA.find((r) => r.id === id)?.buaSqFt.toLocaleString()} sq ft ({AURELIA_RESIDENCES_DATA.find((r) => r.id === id)?.buaSqM} sq m)
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Bedrooms / Baths</td>
                  {compareIds.map((id) => (
                    <td key={id} className="py-3 px-4">
                      {AURELIA_RESIDENCES_DATA.find((r) => r.id === id)?.bedrooms} Beds / {AURELIA_RESIDENCES_DATA.find((r) => r.id === id)?.bathrooms} Baths
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Garage & Showroom</td>
                  {compareIds.map((id) => (
                    <td key={id} className="py-3 px-4 text-stone-300">
                      {AURELIA_RESIDENCES_DATA.find((r) => r.id === id)?.garage}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Capital Value (AED)</td>
                  {compareIds.map((id) => (
                    <td key={id} className="py-3 px-4 font-bold text-emerald-400">
                      {AURELIA_RESIDENCES_DATA.find((r) => r.id === id)?.priceFormatted}
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
