'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MEDIVANTA_MEDICINES, MedicineItem } from '@/data/medivantaData';
import { Search, ShoppingBag, Thermometer, FileText, CheckCircle2, Clock, Filter, Plus, Minus, ShieldCheck, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Chronic Care',
  'Everyday Medicines',
  'Vitamins & Supplements',
  'First Aid',
  'Wellness & Immunity'
];

interface MedivantaOrderingProps {
  onOpenOrderModal?: (med?: MedicineItem) => void;
}

export const MedivantaOrdering: React.FC<MedivantaOrderingProps> = ({ onOpenOrderModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState<Record<string, number>>({});

  const filteredMedicines = MEDIVANTA_MEDICINES.filter((med) => {
    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
    const matchesSearch =
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleIncrement = (id: string) => {
    setCartCount((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id: string) => {
    setCartCount((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1)
    }));
  };

  const totalCartItems = Object.values(cartCount).reduce((a, b) => a + b, 0);

  return (
    <section className="relative py-28 bg-[#03070e] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-300" />
              SMART MEDICINE ORDERING
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Everyday & Prescription Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Verified and Delivered in Minutes.
              </span>
            </h2>
          </div>

          {/* Cart Badge Summary */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenOrderModal?.()}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-bold text-xs sm:text-sm font-mono flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <ShoppingBag className="w-4 h-4" />
              View Basket ({totalCartItems})
            </button>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by brand, active generic, or condition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#070e17] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    active
                      ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Medicine Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((med) => {
            const count = cartCount[med.id] || 0;
            return (
              <div
                key={med.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#070f1a] to-[#040810] border border-emerald-500/20 hover:border-emerald-500/45 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Badge Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                      {med.category}
                    </span>

                    {med.prescriptionRequired ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300 flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        Rx Required
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Direct Order
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {med.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mb-2">{med.genericName}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{med.description}</p>

                  {/* Dosage & Packaging Info */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300 mb-4 p-3 rounded-xl bg-[#04070e] border border-slate-800/80">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Dosage:</span>
                      {med.dosage}
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Pack Size:</span>
                      {med.packSize}
                    </div>
                  </div>

                  {/* Cold chain indicator */}
                  {med.temperatureControlled && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 mb-4">
                      <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Cold-Chain Vault: {med.tempRange}</span>
                    </div>
                  )}
                </div>

                {/* Price & Cart Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Price</span>
                    <div className="text-xl font-extrabold text-white font-mono">
                      AED {med.priceAED}
                    </div>
                  </div>

                  {count === 0 ? (
                    <button
                      onClick={() => handleIncrement(med.id)}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-black text-slate-200 text-xs font-bold font-mono transition-colors flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add to Order
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-xl p-1 font-mono text-xs">
                      <button
                        onClick={() => handleDecrement(med.id)}
                        className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-bold text-emerald-400">{count}</span>
                      <button
                        onClick={() => handleIncrement(med.id)}
                        className="w-7 h-7 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center font-bold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
