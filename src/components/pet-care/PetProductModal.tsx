'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShieldCheck, CheckCircle2, Truck, Plus, ShoppingBag } from 'lucide-react';
import { PetProduct } from '@/data/petCareData';

interface PetProductModalProps {
  item: PetProduct | null;
  onClose: () => void;
  onAddToCart: (item: PetProduct) => void;
}

export const PetProductModal: React.FC<PetProductModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#0E1720] border border-emerald-500/30 shadow-2xl p-6 sm:p-8 space-y-6 text-white my-8 overflow-hidden backdrop-blur-xl"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Image */}
            <div className="sm:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="sm:col-span-7 space-y-3">
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                {item.brand} • {item.size}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans leading-snug">
                {item.name}
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{item.rating} ({item.reviews} verified reviews)</span>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#090F15] border border-white/10 space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-emerald-400">
              <Truck className="w-4 h-4" />
              <span>Same-day temperature-controlled van delivery across Dubai & Abu Dhabi.</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Genuine manufacturer batches sourced directly from licensed UAE distributors.</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-white/10">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">PRICE</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">
                AED {item.price}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                onAddToCart(item);
                onClose();
              }}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Express Order</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PetProductModal;
