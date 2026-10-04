'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ShieldCheck, Plus, Check, Star } from 'lucide-react';
import { NEXARA_STORE_ITEMS, NexaraStoreItem } from '@/data/nexaraData';

interface NexaraStoreProps {
  onAddToCart: (item: NexaraStoreItem) => void;
}

export const NexaraStore: React.FC<NexaraStoreProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [addedItemIds, setAddedItemIds] = useState<string[]>([]);

  const filteredItems = NEXARA_STORE_ITEMS.filter(
    i => selectedCategory === 'ALL' || i.category === selectedCategory
  );

  const handleAdd = (item: NexaraStoreItem) => {
    setAddedItemIds(prev => [...prev, item.id]);
    onAddToCart(item);
    setTimeout(() => {
      setAddedItemIds(prev => prev.filter(id => id !== item.id));
    }, 2000);
  };

  return (
    <section className="py-24 bg-[#07090e] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
              DEMO DIGITAL MARKETPLACE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              NEXARA <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Market</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Equip animated weapon cosmetics, holographic avatar frames, Battle Passes, and taunt emotes in AED.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl text-xs">
            {['ALL', 'Cosmetic Skin', 'Avatar Frame', 'Battle Pass', 'Emote Pack'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isAdded = addedItemIds.includes(item.id);
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-violet-500/40 transition-all shadow-xl shadow-slate-950/40"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-slate-950 border border-slate-800">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2.5 left-2.5">
                      <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] border ${
                        item.rarity === 'Mythic'
                          ? 'bg-rose-950/80 text-rose-300 border-rose-800'
                          : item.rarity === 'Legendary'
                          ? 'bg-amber-950/80 text-amber-300 border-amber-800'
                          : 'bg-violet-950/80 text-violet-300 border-violet-800'
                      }`}>
                        {item.rarity}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-cyan-400 uppercase">{item.game}</span>
                  <h4 className="text-base font-bold text-white mt-1">{item.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed font-light">{item.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                  <div className="text-base font-mono font-bold text-amber-400">
                    AED {item.priceAED}
                  </div>

                  <button
                    onClick={() => handleAdd(item)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 ${
                      isAdded
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 hover:text-slate-950 text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Loadout</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
