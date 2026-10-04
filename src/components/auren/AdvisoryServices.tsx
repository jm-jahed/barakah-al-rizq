'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, PieChart, Compass, Building, Briefcase, Lock, Building2, Globe, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AUREN_SERVICES, AurenService } from '@/data/aurenData';

interface AdvisoryServicesProps {
  onOpenConsultationWithService: (service: AurenService) => void;
}

export const AdvisoryServices: React.FC<AdvisoryServicesProps> = ({ onOpenConsultationWithService }) => {
  const [selectedDrawer, setSelectedDrawer] = useState<AurenService | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield': return <Shield className="w-6 h-6 text-[#D4AF37]" />;
      case 'PieChart': return <PieChart className="w-6 h-6 text-[#D4AF37]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#D4AF37]" />;
      case 'Building': return <Building className="w-6 h-6 text-[#D4AF37]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#D4AF37]" />;
      case 'Lock': return <Lock className="w-6 h-6 text-[#D4AF37]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Globe className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#080A09] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              AUREN PRACTICE DISCIPLINES
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F8F6F0] mt-4">
              Our Advisory Practices.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Eight institutional wealth practices designed to preserve, structure, and evolve private capital across generations.
            </p>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUREN_SERVICES.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedDrawer(srv)}
              className="bg-[#1A1D1B] rounded-3xl border border-stone-800 p-6 shadow-xl hover:border-[#D4AF37]/40 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#080A09] border border-stone-800 group-hover:scale-110 transition-transform">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-500">{srv.number}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#F8F6F0] mb-2 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs font-mono text-[#D4AF37] mb-3 block">{srv.subtitle}</p>
                <p className="text-xs text-stone-300 font-light line-clamp-3 leading-relaxed mb-4">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between font-mono text-xs text-[#D4AF37] font-bold">
                <span>Inspect Practice Mandate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Expanded Service Drawer Modal */}
      <AnimatePresence>
        {selectedDrawer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1A1D1B] border border-stone-700 rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative font-sans text-stone-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedDrawer(null)}
                className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#080A09] border border-stone-800 text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4 font-mono text-xs text-[#D4AF37]">
                <div className="p-2 rounded-xl bg-[#080A09] border border-stone-800">
                  {getIcon(selectedDrawer.iconName)}
                </div>
                <span>ADVISORY PRACTICE MANDATE {selectedDrawer.number}</span>
              </div>

              <h3 className="text-3xl font-serif font-bold text-[#F8F6F0] mb-2">{selectedDrawer.title}</h3>
              <p className="text-sm font-mono text-[#D4AF37] mb-4">{selectedDrawer.subtitle}</p>
              <p className="text-sm text-stone-300 font-light leading-relaxed mb-6">{selectedDrawer.description}</p>

              {/* Outcomes */}
              <div className="mb-6 space-y-2 font-mono text-xs">
                <span className="text-[10px] text-stone-400 uppercase block font-bold">KEY ADVISORY DELIVERABLES & OUTCOMES:</span>
                {selectedDrawer.outcomes.map((out) => (
                  <div key={out} className="p-3 rounded-xl bg-[#080A09] border border-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-stone-200">{out}</span>
                  </div>
                ))}
              </div>

              {/* Client Profile */}
              <div className="mb-6 font-mono text-xs p-3 rounded-xl bg-[#080A09] border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase block font-bold">TYPICAL CLIENT MANDATE PROFILE:</span>
                <span className="text-[#D4AF37] font-bold text-sm">{selectedDrawer.clientProfile}</span>
              </div>

              <button
                onClick={() => {
                  const srv = selectedDrawer;
                  setSelectedDrawer(null);
                  onOpenConsultationWithService(srv);
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Private Consultation on {selectedDrawer.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
