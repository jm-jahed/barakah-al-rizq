'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Brain, Database, Bot, ShieldCheck, ArrowRight, Cpu, Activity, CheckCircle, Code2 } from 'lucide-react';
import { ARCHITECTURE_LAYERS, ArchitectureLayer } from '@/data/tensorisData';

export const TensorisArchitecture: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('intelligence');

  const activeLayer = ARCHITECTURE_LAYERS.find(l => l.id === selectedLayerId) || ARCHITECTURE_LAYERS[0];

  const getLayerIcon = (id: string) => {
    switch (id) {
      case 'intelligence': return Brain;
      case 'data': return Database;
      case 'automation': return Bot;
      case 'governance': return ShieldCheck;
      default: return Layers;
    }
  };

  return (
    <section id="architecture" className="relative py-24 bg-[#030712] text-slate-100 overflow-hidden">
      {/* Background Grid & Accents */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>FULL-STACK COGNITIVE FABRIC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The 4-Layer Architecture of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Deterministic Enterprise AI
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Engineered to bridge fragmented enterprise databases and transactional APIs with high-speed neural reasoning, autonomous agent verification, and sovereign governance.
          </p>
        </div>

        {/* Interactive 4-Layer Architecture Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Layer Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2 px-1">
              Select Architecture Layer:
            </div>
            {ARCHITECTURE_LAYERS.map((layer) => {
              const IconComponent = getLayerIcon(layer.id);
              const isSelected = selectedLayerId === layer.id;

              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 relative overflow-hidden border ${
                    isSelected
                      ? 'bg-gradient-to-r from-slate-900 to-slate-900/90 border-cyan-500/60 shadow-xl shadow-cyan-950/40 text-white'
                      : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 hover:border-slate-700'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeLayerIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl border ${
                        isSelected 
                          ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300' 
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-cyan-400 tracking-wider">
                          {layer.tag}
                        </div>
                        <h3 className="text-base font-bold tracking-tight text-white">
                          {layer.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-2 py-1 rounded bg-slate-950/80 border border-slate-800 text-slate-400">
                      {layer.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">
                    {layer.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Inspection Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-[#030712] border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl space-y-6"
              >
                {/* Layer Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                      {activeLayer.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {activeLayer.title}
                    </h3>
                    <p className="text-sm font-mono text-slate-400 mt-0.5">
                      {activeLayer.subtitle}
                    </p>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
                    {activeLayer.badge}
                  </div>
                </div>

                {/* Layer Narrative */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeLayer.description}
                </p>

                {/* Sub-Features Matrix */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Core Technical Modules:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeLayer.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-2"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                          <span className="font-semibold">{feat.metric}</span>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <h4 className="text-xs font-bold text-white leading-tight">
                          {feat.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="pt-3 border-t border-slate-800/90 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Hardware & Protocol Specs:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeLayer.technicalDetails.map((spec, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                        <div className="text-[10px] font-mono text-slate-500 uppercase">{spec.label}</div>
                        <div className="text-xs font-mono text-slate-200 font-semibold mt-0.5 truncate">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
