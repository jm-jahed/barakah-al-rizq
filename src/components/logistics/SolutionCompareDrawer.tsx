'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Layers,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { LogisticsProductItem, LOGISTICS_BRAND_INFO } from '@/data/logisticsData';

interface SolutionCompareDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  comparedProducts: LogisticsProductItem[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
  onBookProduct: (product: LogisticsProductItem) => void;
}

export const SolutionCompareDrawer: React.FC<SolutionCompareDrawerProps> = ({
  isOpen,
  onClose,
  comparedProducts,
  onRemoveProduct,
  onClearAll,
  onBookProduct
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Drawer Container */}
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-[#0A0E1A] border-t-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/80 rounded-t-3xl p-6 sm:p-8 overflow-y-auto z-10"
        >
          {/* Header Bar */}
          <div className="max-w-7xl mx-auto flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Side-by-Side Logistics Solutions Comparator</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                    {comparedProducts.length} of 4 Max
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Compare SLA dispatch speeds, payload limits, compliance certifications, and AED pricing.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {comparedProducts.length > 0 && (
                <button
                  onClick={onClearAll}
                  className="text-xs text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/40 border border-rose-800/40 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Comparison Content */}
          <div className="max-w-7xl mx-auto mt-6">
            {comparedProducts.length === 0 ? (
              <div className="py-16 text-center text-slate-400 space-y-3">
                <Layers className="w-12 h-12 text-slate-600 mx-auto" />
                <div className="text-base font-bold text-slate-300">No solutions selected for comparison</div>
                <p className="text-xs max-w-sm mx-auto text-slate-500">
                  Click the "+ Compare" button on any solution card in the catalog above to inspect up to 4 items side-by-side.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {comparedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="rounded-2xl bg-slate-950/80 border border-slate-800 p-5 flex flex-col justify-between space-y-4 relative group"
                  >
                    {/* Delete Item Button */}
                    <button
                      onClick={() => onRemoveProduct(prod.id)}
                      className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900 text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                      title="Remove from comparison"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="space-y-3 pr-6">
                      <div className="text-[10px] font-mono font-bold text-cyan-400">
                        {prod.sku}
                      </div>
                      <h4 className="text-base font-bold text-white leading-snug">
                        {prod.title}
                      </h4>
                      <div className="text-xs text-slate-400 line-clamp-2">
                        {prod.tagline}
                      </div>
                    </div>

                    {/* Compare Attributes Breakdown */}
                    <div className="space-y-3 text-xs border-t border-b border-slate-800/80 py-4 font-mono">
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase">SLA DISPATCH</span>
                        <span className="text-emerald-400 font-bold text-sm block">
                          {prod.sla}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase">PAYLOAD CAPACITY</span>
                        <span className="text-slate-200 font-semibold block">
                          {prod.payloadCapacity}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase">TRANSIT CORRIDOR</span>
                        <span className="text-cyan-300 block">
                          {prod.transitSpeed}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase">COMPLIANCE</span>
                        <span className="text-slate-300 text-[11px] block truncate">
                          {prod.compliance.join(' • ')}
                        </span>
                      </div>
                    </div>

                    {/* Price & Booking Trigger */}
                    <div className="pt-1">
                      <div className="mb-3">
                        <span className="text-[10px] text-slate-400 block font-mono">STARTING FROM</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs text-amber-400 font-bold">AED</span>
                          <span className="text-2xl font-black text-white font-mono">
                            {prod.startingPriceAED.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onBookProduct(prod);
                        }}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                      >
                        <span>Request Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
