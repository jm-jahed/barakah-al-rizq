'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Users, Flame, Eye } from 'lucide-react';
import { EMBERWILD_STAYS } from '@/data/emberwildData';

export const EmberwildStayComparison: React.FC<{ onSelectStay?: (stay: any) => void }> = ({ onSelectStay }) => {
  // Compare 3 flagship stay architectures
  const stays = [EMBERWILD_STAYS[0], EMBERWILD_STAYS[1], EMBERWILD_STAYS[2]]; // Dome, Cabin, Desert Camp

  return (
    <section className="py-20 bg-[#080c08] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
            ARCHITECTURAL BENCHMARK MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-100">
            Compare Retreat <span className="font-serif italic text-amber-400">Typologies</span>
          </h2>
          <p className="text-stone-400 text-sm mt-2">
            Side-by-side comparison of glass domes, cedar forest cabins, and desert canvas suites.
          </p>
        </div>

        <div className="bg-stone-900/60 rounded-3xl border border-stone-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-950 text-stone-400 font-mono text-[11px] border-b border-stone-800">
                <tr>
                  <th className="py-4 px-6 font-medium">Feature / Attribute</th>
                  {stays.map(s => (
                    <th key={s.id} className="py-4 px-6 font-medium text-stone-100">
                      <div className="text-base font-light text-white font-sans">{s.name}</div>
                      <div className="text-amber-400 text-xs font-mono">{s.stayType}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/80">
                <tr className="hover:bg-stone-900/40">
                  <td className="py-4 px-6 font-mono text-stone-400">Landscape Location</td>
                  {stays.map(s => (
                    <td key={s.id} className="py-4 px-6 text-stone-200">{s.location}</td>
                  ))}
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-4 px-6 font-mono text-stone-400">Nightly Price (AED)</td>
                  {stays.map(s => (
                    <td key={s.id} className="py-4 px-6 font-mono font-bold text-amber-400">
                      AED {s.pricePerNightAED.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-4 px-6 font-mono text-stone-400">Guest Capacity</td>
                  {stays.map(s => (
                    <td key={s.id} className="py-4 px-6 font-mono text-stone-300">
                      {s.capacity} Guests ({s.bedrooms} Bed · {s.bathrooms} Bath)
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-4 px-6 font-mono text-stone-400">Private Sunken Firepit</td>
                  {stays.map(s => (
                    <td key={s.id} className="py-4 px-6 text-emerald-400">
                      <Check className="w-4 h-4" />
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-4 px-6 font-mono text-stone-400">Outdoor Hot Tub / Pool</td>
                  {stays.map(s => (
                    <td key={s.id} className="py-4 px-6">
                      {s.features.outdoorHotTub ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <X className="w-4 h-4 text-stone-600" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-4 px-6 font-mono text-stone-400">Stargazing Glass Ceiling</td>
                  {stays.map(s => (
                    <td key={s.id} className="py-4 px-6">
                      {s.features.stargazingRoof ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <X className="w-4 h-4 text-stone-600" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-4 px-6 font-mono text-stone-400">Pet Friendly</td>
                  {stays.map(s => (
                    <td key={s.id} className="py-4 px-6">
                      {s.features.petFriendly ? (
                        <span className="text-emerald-400 font-mono">Yes (Welcome)</span>
                      ) : (
                        <span className="text-stone-500 font-mono">Wildlife Zone (No)</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-4 px-6 font-mono text-stone-400">Actions</td>
                  {stays.map(s => (
                    <td key={s.id} className="py-4 px-6">
                      <button
                        onClick={() => onSelectStay && onSelectStay(s)}
                        className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs transition-colors"
                      >
                        Inspect Stay
                      </button>
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
