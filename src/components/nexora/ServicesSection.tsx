'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ShieldCheck, Globe2, TrendingUp, DollarSign, FileCheck, Award, Briefcase, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NEXORA_SERVICES, NexoraService } from '@/data/nexoraData';

interface ServicesSectionProps {
  onOpenConsultationWithService: (service: NexoraService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultationWithService }) => {
  const [selectedServiceDrawer, setSelectedServiceDrawer] = useState<NexoraService | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Globe2': return <Globe2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#D4AF37]" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-[#D4AF37]" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Briefcase className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              EXECUTIVE ADVISORY CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
              Core Advisory Services.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              From corporate structuring to 9% UAE Corporate Tax compliance, corporate PRO, and M&A advisory.
            </p>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEXORA_SERVICES.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedServiceDrawer(srv)}
              className="bg-[#1A1D24] rounded-3xl border border-stone-800 p-8 shadow-xl hover:border-[#D4AF37]/40 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-[#121417] border border-stone-800 group-hover:scale-110 transition-transform">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-500">{srv.number}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#F7F6F2] mb-2 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs font-mono text-[#D4AF37] mb-3 block">{srv.subtitle}</p>
                <p className="text-xs text-stone-300 font-light line-clamp-3 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between font-mono text-xs text-[#D4AF37] font-bold">
                <span>View Full Scope</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Expanded Service Scope Drawer Modal */}
      <AnimatePresence>
        {selectedServiceDrawer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1A1D24] border border-stone-700 rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative font-sans text-stone-100"
            >
              <button
                onClick={() => setSelectedServiceDrawer(null)}
                className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#121417] border border-stone-800 text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4 font-mono text-xs text-[#D4AF37]">
                <div className="p-2 rounded-xl bg-[#121417] border border-stone-800">
                  {getIcon(selectedServiceDrawer.iconName)}
                </div>
                <span>SERVICE SCOPE MODULE {selectedServiceDrawer.number}</span>
              </div>

              <h3 className="text-3xl font-serif font-bold text-[#F7F6F2] mb-2">{selectedServiceDrawer.title}</h3>
              <p className="text-sm font-mono text-[#D4AF37] mb-4">{selectedServiceDrawer.subtitle}</p>
              <p className="text-sm text-stone-300 font-light leading-relaxed mb-6">{selectedServiceDrawer.description}</p>

              <div className="mb-6 space-y-2 font-mono text-xs">
                <span className="text-[10px] text-stone-400 uppercase block font-bold">KEY DELIVERABLES & OUTCOMES:</span>
                {selectedServiceDrawer.outcomes.map((out) => (
                  <div key={out} className="p-3 rounded-xl bg-[#121417] border border-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-stone-200">{out}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#121417] border border-stone-800 flex items-center justify-between font-mono text-xs mb-6">
                <span className="text-stone-400">TYPICAL TIMELINE:</span>
                <span className="text-[#D4AF37] font-bold">{selectedServiceDrawer.timeline}</span>
              </div>

              <button
                onClick={() => {
                  const s = selectedServiceDrawer;
                  setSelectedServiceDrawer(null);
                  onOpenConsultationWithService(s);
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Consult Advisor On {selectedServiceDrawer.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
