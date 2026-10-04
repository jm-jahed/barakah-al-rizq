'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, FileCheck, Wallet, Wrench, Palmtree, CheckSquare, ShieldCheck, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NESTORA_SERVICES, NestoraService } from '@/data/nestoraData';

interface ServicesSectionProps {
  onOpenConsultationWithService: (service: NestoraService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultationWithService }) => {
  const [selectedDrawer, setSelectedDrawer] = useState<NestoraService | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-6 h-6 text-[#C5A059]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#C5A059]" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-[#C5A059]" />;
      case 'Wallet': return <Wallet className="w-6 h-6 text-[#C5A059]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#C5A059]" />;
      case 'Palmtree': return <Palmtree className="w-6 h-6 text-[#C5A059]" />;
      case 'CheckSquare': return <CheckSquare className="w-6 h-6 text-[#C5A059]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              NESTORA MANAGEMENT DISCIPLINES
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F4EFE6] mt-4">
              Our Landlord Services.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              From full 360° hands-off management and tenant placement to 24/7 maintenance and DTCM holiday home yield optimization.
            </p>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NESTORA_SERVICES.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedDrawer(srv)}
              className="bg-[#0C2D31] rounded-3xl border border-stone-800 p-6 shadow-xl hover:border-[#C5A059]/40 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#082023] border border-stone-800 group-hover:scale-110 transition-transform">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-500">{srv.number}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#F4EFE6] mb-2 group-hover:text-[#C5A059] transition-colors leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs font-mono text-[#C5A059] mb-3 block">{srv.subtitle}</p>
                <p className="text-xs text-stone-300 font-light line-clamp-3 leading-relaxed mb-4">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between font-mono text-xs text-[#C5A059] font-bold">
                <span>Inspect Deliverables</span>
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
              className="bg-[#0C2D31] border border-stone-700 rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative font-sans text-stone-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedDrawer(null)}
                className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#082023] border border-stone-800 text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4 font-mono text-xs text-[#C5A059]">
                <div className="p-2 rounded-xl bg-[#082023] border border-stone-800">
                  {getIcon(selectedDrawer.iconName)}
                </div>
                <span>PROPERTY MANAGEMENT MODULE {selectedDrawer.number}</span>
              </div>

              <h3 className="text-3xl font-serif font-bold text-[#F4EFE6] mb-2">{selectedDrawer.title}</h3>
              <p className="text-sm font-mono text-[#C5A059] mb-4">{selectedDrawer.subtitle}</p>
              <p className="text-sm text-stone-300 font-light leading-relaxed mb-6">{selectedDrawer.description}</p>

              {/* Deliverables */}
              <div className="mb-6 space-y-2 font-mono text-xs">
                <span className="text-[10px] text-stone-400 uppercase block font-bold">KEY DELIVERABLES & SERVICES:</span>
                {selectedDrawer.deliverables.map((del) => (
                  <div key={del} className="p-3 rounded-xl bg-[#082023] border border-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                    <span className="text-stone-200">{del}</span>
                  </div>
                ))}
              </div>

              {/* Fee Structure */}
              <div className="mb-6 font-mono text-xs p-3 rounded-xl bg-[#082023] border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase block font-bold">FEE STRUCTURE:</span>
                <span className="text-[#C5A059] font-bold text-sm">{selectedDrawer.feeStructure}</span>
              </div>

              <button
                onClick={() => {
                  const srv = selectedDrawer;
                  setSelectedDrawer(null);
                  onOpenConsultationWithService(srv);
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Assessment for {selectedDrawer.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
