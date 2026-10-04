'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Maximize2, ShieldCheck, Sun, Layers, Eye, Activity, Truck, ArrowRight, Check, X, Clock } from 'lucide-react';
import { LUXSHIELD_SERVICES, LuxshieldService } from '@/data/luxshieldData';

interface ServicesSectionProps {
  onOpenBookingModal: (pkgId?: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6 text-blue-400" />,
  Maximize2: <Maximize2 className="w-6 h-6 text-blue-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-400" />,
  Sun: <Sun className="w-6 h-6 text-blue-400" />,
  Layers: <Layers className="w-6 h-6 text-blue-400" />,
  Eye: <Eye className="w-6 h-6 text-blue-400" />,
  Activity: <Activity className="w-6 h-6 text-blue-400" />,
  Truck: <Truck className="w-6 h-6 text-blue-400" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingModal }) => {
  const [selectedService, setSelectedService] = useState<LuxshieldService | null>(null);

  return (
    <section id="services" className="py-24 bg-[#0B0C0E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            STUDIO SERVICE MODULES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Precision Automotive Protection &amp; <br />
            <span className="text-blue-500">Paint Restoration.</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            Engineered specifically for the harsh UAE climate. From multi-layer 9H ceramic matrix coatings to self-healing PPF wraps.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LUXSHIELD_SERVICES.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-[#14161A] border border-white/10 shadow-xl flex flex-col justify-between hover:border-blue-500/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B0C0E] flex items-center justify-center border border-white/10 group-hover:border-blue-500/40 transition-colors">
                    {ICON_MAP[srv.iconName]}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-500">
                    {srv.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {srv.title}
                </h3>

                <div className="flex items-center justify-between text-[11px] font-mono text-amber-300 mb-4 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-blue-400" />
                    <span>{srv.duration}</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">{srv.warranty}</span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-light">
                  {srv.shortDescription}
                </p>
              </div>

              <div>
                <div className="space-y-1.5 mb-6 pt-4 border-t border-white/10">
                  {srv.outcomes.map((out, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedService(srv)}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-blue-600 text-gray-300 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all font-mono"
                >
                  <span>SERVICE DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expandable Module Drawer Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl w-full rounded-3xl bg-[#14161A] p-8 text-white shadow-2xl relative border border-blue-500/30"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/40">
                  {ICON_MAP[selectedService.iconName]}
                </div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  SERVICE MODULE {selectedService.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">{selectedService.title}</h3>
              <div className="flex items-center gap-4 text-xs font-mono text-amber-300 mb-4">
                <span>Duration: {selectedService.duration}</span>
                <span>•</span>
                <span className="text-emerald-400">{selectedService.warranty}</span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                {selectedService.fullDescription}
              </p>

              <div className="space-y-2 mb-8 bg-[#0B0C0E] p-4 rounded-2xl border border-white/10">
                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
                  INCLUDED SERVICE DELIVERABLES
                </span>
                {selectedService.outcomes.map((out, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-white">
                    <Check className="w-4 h-4 text-blue-400" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenBookingModal();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-blue-950/50 hover:bg-blue-700 transition-colors"
                >
                  BOOK THIS SERVICE NOW
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};