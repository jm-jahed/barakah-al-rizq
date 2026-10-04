'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShoppingBag, 
  Star, 
  Plus, 
  ShieldCheck, 
  CheckCircle2, 
  Truck, 
  Eye, 
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { PET_PRODUCTS_DATA, PetProduct } from '@/data/petCareData';

interface PetProductsProps {
  onSelectProduct: (product: PetProduct) => void;
  onAddToCart: (product: PetProduct) => void;
}

const PRODUCT_CATEGORIES = ['All Pharmacy', 'Food', 'Supplements', 'Wellness', 'Treats'];

export const PetProducts: React.FC<PetProductsProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCat, setSelectedCat] = useState('All Pharmacy');
  const shouldReduceMotion = useReducedMotion();

  const filteredProducts = PET_PRODUCTS_DATA.filter((p) => {
    if (selectedCat === 'All Pharmacy') return true;
    return p.category === selectedCat;
  });

  return (
    <section id="apothecary" className="py-24 sm:py-32 bg-[#0A1118] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>VETERINARY APOTHECARY & PRESCRIPTION PHARMACY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Medical Diets, Supplements & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Prescription Wellness.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Genuine cold-chain stored veterinary prescription diets, medical joint therapeutics, calming pheromones, and parasite protectants delivered same-day across Dubai and Abu Dhabi.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-[#0E1720] border border-emerald-500/30 text-right">
              <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-wider">UAE EXPRESS DISPATCH</span>
              <span className="text-xs font-bold font-mono text-emerald-300 flex items-center gap-1.5 justify-end mt-0.5">
                <Truck className="w-4 h-4 text-emerald-400" />
                Same-Day Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.07] border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="rounded-3xl bg-[#0E1620] border border-white/10 hover:border-emerald-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden group backdrop-blur-md"
            >
              {/* Image & Tags */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1620] via-transparent to-transparent" />

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-300 font-bold">
                  {prod.brand}
                </span>

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center gap-1 text-[10px] font-mono font-bold text-amber-300">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{prod.rating}</span>
                  <span className="text-slate-400">({prod.reviews})</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                    {prod.category} • {prod.size}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors font-sans leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>
                </div>

                {/* In Stock Guarantee */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 pt-2 border-t border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>In Stock • Cold-Chain Warehouse Dubai</span>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">PRICE</span>
                    <span className="text-xl font-black text-emerald-400 font-mono">
                      AED {prod.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(prod)}
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-emerald-500/15 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all cursor-pointer"
                      title="Inspect specs"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onAddToCart(prod)}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetProducts;
