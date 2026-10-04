'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Truck, Container, Warehouse, Globe, ShieldCheck, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { LOGISTICS_SERVICES, LogisticsServiceItem } from '@/data/logisticsData';

interface LogisticsServicesProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const LogisticsServices: React.FC<LogisticsServicesProps> = ({ onOpenQuoteModal }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<LogisticsServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-blue-400" />;
      case 'Container':
        return <Container className="w-6 h-6 text-cyan-400" />;
      case 'Warehouse':
        return <Warehouse className="w-6 h-6 text-blue-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#070B14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              CORE INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Logistics without the complexity.
            </h2>
            <p className="text-base text-gray-400 mt-2 max-w-xl">
              From same-day local dispatch to global cross-border air freight, we manage every shipment movement with ultra-precise SLAs.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-cyan-300 font-bold text-xs flex items-center gap-2 transition-all self-start md:self-auto"
          >
            <span>Request Service Custom Plan</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOGISTICS_SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0F172A] rounded-3xl border border-blue-500/20 p-8 hover:border-cyan-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                {/* Header: Code & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black font-mono text-gray-600 group-hover:text-blue-400 transition-colors">
                    {service.code}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                    {service.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="p-3.5 rounded-2xl bg-[#070B14] border border-blue-500/30 w-fit mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 font-mono mb-4 leading-relaxed">
                  {service.tagline}
                </p>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                {/* SLA & Price bar */}
                <div className="py-3 px-4 rounded-xl bg-[#070B14] border border-white/10 flex items-center justify-between text-xs font-mono mb-6">
                  <span className="text-gray-400">SLA: <strong className="text-white">{service.sla}</strong></span>
                  <span className="text-cyan-300 font-bold">From {service.startingPrice}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1 group/btn"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="px-3.5 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/40 text-blue-300 text-xs font-bold transition-all"
                  >
                    Book Now
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0F172A] border border-blue-500/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  SERVICE SPECIFICATION #{selectedServiceModal.code}
                </span>
                <span className="text-xs font-mono text-gray-400">SLA Target: {selectedServiceModal.sla}</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">{selectedServiceModal.title}</h3>
              <p className="text-xs text-gray-300 mb-6">{selectedServiceModal.description}</p>

              <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
                KEY OPERATIONAL FEATURES
              </h4>

              <div className="space-y-3 mb-8">
                {selectedServiceModal.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3 p-3 rounded-xl bg-[#070B14] border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-200">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">STARTING RATE</span>
                  <span className="text-lg font-bold text-cyan-300 font-mono">{selectedServiceModal.startingPrice}</span>
                </div>

                <button
                  onClick={() => {
                    const title = selectedServiceModal.title;
                    setSelectedServiceModal(null);
                    onOpenQuoteModal(title);
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <span>Request Instant Quote for this Service</span>
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
