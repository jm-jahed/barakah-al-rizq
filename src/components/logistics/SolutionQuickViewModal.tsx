'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Truck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  FileText,
  MapPin,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  Award,
  Layers
} from 'lucide-react';
import { LogisticsProductItem, LOGISTICS_BRAND_INFO } from '@/data/logisticsData';

interface SolutionQuickViewModalProps {
  product: LogisticsProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (product: LogisticsProductItem) => void;
}

export const SolutionQuickViewModal: React.FC<SolutionQuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onBookNow
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'compliance' | 'routes'>('specs');

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#0A0E1A] border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 pr-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/40">
                {product.sku}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {product.category}
              </span>
              {product.badge && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  {product.badge}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {product.title}
            </h2>
            <p className="text-sm text-slate-300">
              {product.tagline}
            </p>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 my-6">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-xs font-bold transition-all border-b-2 ${
                activeTab === 'specs'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Operational Specs & Features
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`pb-3 text-xs font-bold transition-all border-b-2 ${
                activeTab === 'compliance'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Customs & Compliance
            </button>
            <button
              onClick={() => setActiveTab('routes')}
              className={`pb-3 text-xs font-bold transition-all border-b-2 ${
                activeTab === 'routes'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Emirates & GCC Routes
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === 'specs' && (
              <div className="space-y-5">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs font-mono">
                  <div className="p-2.5 rounded bg-slate-900/60">
                    <span className="text-slate-500 block">SLA DISPATCH:</span>
                    <span className="text-emerald-400 font-bold text-sm mt-0.5 block">
                      {product.sla}
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/60">
                    <span className="text-slate-500 block">PAYLOAD LIMIT:</span>
                    <span className="text-white font-bold text-sm mt-0.5 block">
                      {product.payloadCapacity}
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900/60 col-span-2 sm:col-span-1">
                    <span className="text-slate-500 block">TRANSIT SPEED:</span>
                    <span className="text-cyan-300 font-bold text-sm mt-0.5 block">
                      {product.transitSpeed}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                    Standard Operational Inclusions:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'compliance' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Full Legal & Regulatory Clearances</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      This service operates in full compliance with UAE Federal Transport Authority, Dubai Customs Mirsal II, and applicable GCC customs harmonization frameworks.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
                    Mandatory Compliance Standards:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.compliance.map((c, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-cyan-300 font-mono">
                        ✓ {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'routes' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">
                    Primary Route Availability:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.popularInEmirates.map((em, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300 font-bold flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{em}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <span className="font-bold text-white block">Recommended Industry Applications:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.industryFit.map((ind, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer CTA Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-mono block">STARTING STANDARD RATE</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm text-amber-400 font-bold">AED</span>
                <span className="text-3xl font-black text-white font-mono">
                  {product.startingPriceAED.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">/{product.pricingUnit}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`${LOGISTICS_BRAND_INFO.whatsapp}%20I%20am%20inquiring%20about%20SKU%20${product.sku}:%20${encodeURIComponent(product.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onBookNow(product);
                }}
                className="flex-1 sm:flex-initial px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/30 transition-all"
              >
                <span>Request Formal Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
