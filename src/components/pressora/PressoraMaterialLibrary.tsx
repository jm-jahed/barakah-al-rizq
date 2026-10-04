'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, FileText, Check } from 'lucide-react';
import { PRINT_MATERIALS, PrintMaterial } from '@/data/pressoraData';

export const PressoraMaterialLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'Paper' | 'Finish' | 'Binding'>('ALL');
  const [selectedMaterial, setSelectedMaterial] = useState<PrintMaterial>(PRINT_MATERIALS[0]);

  const filteredMaterials = PRINT_MATERIALS.filter(m => activeTab === 'ALL' || m.category === activeTab);

  return (
    <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              TACTILE SPECIFICATION ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Substrates & <span className="font-serif italic text-amber-400">Embellishments</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-xl">
              Inspect premium FSC-certified cotton stocks, velvet laminates, high-gloss 3D Spot UV, and precision foil alloys.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-1.5 rounded-2xl text-xs">
            {(['ALL', 'Paper', 'Finish', 'Binding'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === tab
                    ? 'bg-amber-500 text-neutral-950 font-medium'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List of materials */}
          <div className="lg:col-span-6 space-y-3">
            {filteredMaterials.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              return (
                <div
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-900 border-amber-500/60 shadow-lg shadow-amber-500/5'
                      : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-neutral-800 text-amber-400 border border-neutral-700">
                          {mat.category}
                        </span>
                        <h4 className="text-base font-medium text-white">{mat.name}</h4>
                      </div>
                      <p className="text-xs text-neutral-400 line-clamp-1">{mat.description}</p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 whitespace-nowrap ml-4">
                      {mat.costModifier}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed preview card */}
          <div className="lg:col-span-6">
            <motion.div
              key={selectedMaterial.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Material Profile // {selectedMaterial.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                  {selectedMaterial.costModifier}
                </span>
              </div>

              <h3 className="text-2xl font-light text-white mb-3">{selectedMaterial.name}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {selectedMaterial.description}
              </p>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="text-neutral-500 uppercase font-mono text-[10px] mb-1">Tactile & Visual Feel:</div>
                  <div className="text-white font-medium">{selectedMaterial.tactileFeel}</div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                  <div className="text-neutral-500 uppercase font-mono text-[10px] mb-1">Recommended Usage:</div>
                  <div className="text-amber-300 font-medium">{selectedMaterial.idealFor}</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Certified Raw Substrate</span>
                <span className="font-mono text-neutral-300">UAE Production Hub Sample Ready</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
