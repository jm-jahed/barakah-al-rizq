'use client';

import React, { useState } from 'react';
import { Sparkles, Check, Layers } from 'lucide-react';
import { MATERIAL_PALETTE, MaterialFinish } from '@/data/aureliaData';

export const AureliaMaterialExplorer: React.FC = () => {
  const [activeMatId, setActiveMatId] = useState<string>(MATERIAL_PALETTE[0].id);

  const activeMaterial =
    MATERIAL_PALETTE.find((m) => m.id === activeMatId) || MATERIAL_PALETTE[0];

  return (
    <section className="py-24 bg-[#0C1013] border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-500/10 border border-stone-500/30 text-stone-300 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL MATERIAL ATELIER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Finishes, Marble & Millwork
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Directly quarried Italian marbles, precision laser-perforated architectural bronze, and hand-finished smoked oak veneers.
          </p>
        </div>

        {/* Material Switcher Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          {MATERIAL_PALETTE.map((mat) => {
            const isSelected = mat.id === activeMatId;
            return (
              <button
                key={mat.id}
                type="button"
                onClick={() => setActiveMatId(mat.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer space-y-1.5 ${
                  isSelected
                    ? 'bg-stone-200 text-black border-white shadow-[0_0_15px_rgba(214,211,209,0.3)]'
                    : 'bg-[#13191D] border-stone-700/60 text-gray-400 hover:text-white'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${isSelected ? 'text-black/80' : 'text-stone-400'}`}>
                  {mat.category}
                </span>
                <h4 className="text-xs font-bold font-serif">{mat.name}</h4>
              </button>
            );
          })}
        </div>

        {/* Selected Material Showcase Box */}
        <div className="max-w-5xl mx-auto bg-[#13191D] rounded-3xl border border-stone-700 p-6 sm:p-10 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-black">
            <img
              src={activeMaterial.image}
              alt={activeMaterial.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 text-stone-300 font-mono text-[11px] font-bold border border-stone-600 backdrop-blur-md">
              ORIGIN: {activeMaterial.origin.toUpperCase()}
            </div>
          </div>

          <div className="md:col-span-6 space-y-4">
            <span className="text-xs font-mono text-stone-400 font-bold uppercase tracking-wider block">
              {activeMaterial.category} • {activeMaterial.origin}
            </span>
            <h3 className="text-2xl font-bold font-serif text-white">{activeMaterial.name}</h3>
            <p className="text-xs font-sans text-gray-300 leading-relaxed">
              {activeMaterial.description}
            </p>

            <div className="space-y-2 pt-3 border-t border-white/10">
              <span className="text-[11px] font-mono text-stone-400 font-bold uppercase block">
                Primary Architectural Applications:
              </span>
              <div className="space-y-1.5">
                {activeMaterial.applications.map((app, aIdx) => (
                  <div key={aIdx} className="flex items-center gap-2 text-xs font-mono text-gray-300">
                    <Check className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
