'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Flame, CheckCircle, AlertTriangle, XCircle, Plus, Check } from 'lucide-react';
import { BAKERY_PRODUCTS, BakeryProduct } from '@/data/flameFlourData';

interface FlameFlourDailyBakeBoardProps {
  onSelectProduct: (product: BakeryProduct) => void;
  onAddToCart: (product: BakeryProduct) => void;
}

export const FlameFlourDailyBakeBoard: React.FC<FlameFlourDailyBakeBoardProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [addedId, setAddedId] = useState<string | null>(null);

  const statuses = ['All', 'Fresh from Oven', 'Available', 'Limited Batch', 'Baking Now'];

  const filtered = filterStatus === 'All'
    ? BAKERY_PRODUCTS.slice(0, 16)
    : BAKERY_PRODUCTS.filter(p => p.availability === filterStatus);

  const handleAdd = (p: BakeryProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(p);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const getBadge = (status: BakeryProduct['availability']) => {
    switch (status) {
      case 'Fresh from Oven':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/80 border border-emerald-700 text-emerald-300">Fresh from Oven</span>;
      case 'Baking Now':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-950/80 border border-amber-700 text-amber-300">Baking Now</span>;
      case 'Limited Batch':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-orange-950/80 border border-orange-700 text-orange-300">Limited Batch</span>;
      case 'Sold Out':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-red-950/80 border border-red-800 text-red-300">Sold Out</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-stone-900 border border-stone-700 text-stone-300">Available</span>;
    }
  };

  return (
    <section className="py-24 bg-[#0c0908] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>LIVE AVAILABILITY BOARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
              Today’s Bake Status
            </h2>
            <p className="mt-3 text-stone-400 max-w-xl text-sm sm:text-base font-light">
              Live batch inventory updating in synchrony with our morning deck oven timers.
            </p>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {statuses.map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  filterStatus === st
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Board Table / Grid */}
        <div className="bg-[#120f0d] rounded-3xl border border-stone-800/80 overflow-hidden shadow-2xl">
          <div className="divide-y divide-stone-850">
            {filtered.map((item) => {
              const isJustAdded = addedId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectProduct(item)}
                  className="p-4 sm:p-5 hover:bg-stone-850/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover border border-stone-800 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-serif text-stone-100">{item.name}</h4>
                        {getBadge(item.availability)}
                      </div>
                      <p className="text-xs text-stone-400 line-clamp-1 font-light">{item.tagline}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-0 border-stone-850">
                    <div className="text-right">
                      <span className="text-[11px] font-mono text-stone-400 block">Unit Price</span>
                      <span className="text-base font-serif font-bold text-amber-400">
                        AED {item.priceAED}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleAdd(item, e)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        isJustAdded
                          ? 'bg-emerald-500 text-stone-950 font-bold'
                          : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md shadow-amber-950/30'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
