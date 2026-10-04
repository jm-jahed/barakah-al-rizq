'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Box, Wrench, Globe, Warehouse, Shield, ArrowRight, CheckCircle2, X, Sparkles, Package, ShieldCheck } from 'lucide-react';
import { MOVING_SERVICES, MovingServiceItem } from '@/data/movingData';

interface MovingServicesProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const MovingServices: React.FC<MovingServicesProps> = ({ onOpenQuoteModal }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<MovingServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-6 h-6 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
      case 'Box':
        return <Box className="w-6 h-6 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Warehouse':
        return <Warehouse className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-300" />;
      case 'Package':
        return <Package className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Shield':
      default:
        return <Shield className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0806] relative border-b border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
              SPECIALIZED RELOCATION SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4">
              Everything Needed For{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                A Seamless Move.
              </span>
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-xl">
              From delicate glassware wrapping and museum-grade art crating to master carpentry and international shipping, our moving teams take care of every detail.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-amber-500/40 text-amber-400 font-bold text-xs flex items-center gap-2 transition-all self-start md:self-auto shadow-lg"
          >
            <span>Request Full Relocation Plan</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOVING_SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-[#14100C] to-[#0D0B08] rounded-3xl border border-slate-800 p-6 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-black font-mono text-slate-600 group-hover:text-amber-400 transition-colors">
                    {service.code}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                    {service.badge}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit mb-4 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed line-clamp-2">
                  {service.tagline}
                </p>

                <div className="space-y-1.5 mb-4 text-[11px] text-slate-300">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="py-2.5 px-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-slate-400 text-[10px]">STARTING RATE:</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] text-amber-400 font-bold">AED</span>
                    <span className="text-base font-black text-white font-mono">
                      {service.startingPriceAED.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold transition-colors border border-slate-700/80"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs transition-all shadow-md"
                  >
                    Book
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedServiceModal(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl rounded-3xl bg-[#14100C] border border-amber-500/40 p-6 sm:p-8 z-10 space-y-6 shadow-2xl"
            >
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-8">
                <span className="text-xs font-mono font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-950 border border-amber-500/30">
                  {selectedServiceModal.badge}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {selectedServiceModal.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {selectedServiceModal.description}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase block">
                  Service Standards & Inclusions:
                </span>
                <div className="space-y-2">
                  {selectedServiceModal.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">STARTING RATE</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-amber-400 font-bold">AED</span>
                    <span className="text-2xl font-black text-white font-mono">
                      {selectedServiceModal.startingPriceAED.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400">/{selectedServiceModal.pricingUnit}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const title = selectedServiceModal.title;
                    setSelectedServiceModal(null);
                    onOpenQuoteModal(title);
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
