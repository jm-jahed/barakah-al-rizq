'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Compass, Users, Clock, Flame, ArrowRight, RotateCcw, Plus, Check } from 'lucide-react';
import { BakeryProduct, BAKERY_PRODUCTS } from '@/data/flameFlourData';

interface FlameFlourSmartRecommenderProps {
  onSelectProduct: (product: BakeryProduct) => void;
  onAddToCart: (product: BakeryProduct) => void;
}

const CRAVINGS = [
  { id: 'buttery', label: 'Buttery & Flaky', icon: '🥐', desc: 'Laminated French doughs & rich croissants' },
  { id: 'chocolate', label: 'Deep Valrhona Chocolate', icon: '🍫', desc: 'Bittersweet ganache & molten babka' },
  { id: 'savory', label: 'Savory & Herbaceous', icon: '🌿', desc: 'Focaccia, sea salt & sourdough crusts' },
  { id: 'fresh-bread', label: 'Crusty Artisan Bread', icon: '🥖', desc: 'Slow-fermented levain loaves' },
  { id: 'fruity', label: 'Light & Fresh Fruit', icon: '🍓', desc: 'Local berries, lemon curds & danishes' },
  { id: 'indulgent', label: 'Rich & Indulgent', icon: '🍯', desc: 'Basque cheesecake & salted caramel' }
];

const GROUP_SIZES = [
  { id: 'solo', label: 'Just Me (Solo)', count: '1 Person', icon: '👤' },
  { id: 'duo', label: 'Duo / Couple', count: '2–3 People', icon: '👥' },
  { id: 'family', label: 'Family / Small Group', count: '4–6 People', icon: '👨‍👩‍👧' },
  { id: 'gathering', label: 'Celebration / Office', count: '8+ People', icon: '🎉' }
];

const OCCASIONS = [
  { id: 'morning', label: 'Early Morning Ritual', icon: '🌅' },
  { id: 'afternoon', label: 'Afternoon Tea / Coffee', icon: '☕' },
  { id: 'evening', label: 'Dinner Table & Wine', icon: '🍷' },
  { id: 'weekend', label: 'Lazy Weekend Brunch', icon: '🥞' },
  { id: 'gift', label: 'Thoughtful Host Gift', icon: '🎁' }
];

export const FlameFlourSmartRecommender: React.FC<FlameFlourSmartRecommenderProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [craving, setCraving] = useState<string>('buttery');
  const [groupSize, setGroupSize] = useState<string>('duo');
  const [occasion, setOccasion] = useState<string>('morning');
  const [hasGenerated, setHasGenerated] = useState<boolean>(true);
  const [addedId, setAddedId] = useState<string | null>(null);

  const getRecommendations = (): BakeryProduct[] => {
    if (craving === 'buttery') {
      return BAKERY_PRODUCTS.filter(p => p.id === 'prod-04' || p.id === 'prod-05' || p.id === 'prod-08');
    }
    if (craving === 'chocolate') {
      return BAKERY_PRODUCTS.filter(p => p.id === 'prod-07' || p.id === 'prod-10' || p.id === 'prod-12');
    }
    if (craving === 'savory' || craving === 'fresh-bread') {
      return BAKERY_PRODUCTS.filter(p => p.id === 'prod-01' || p.id === 'prod-02' || p.id === 'prod-03');
    }
    if (craving === 'fruity') {
      return BAKERY_PRODUCTS.filter(p => p.id === 'prod-13' || p.id === 'prod-14' || p.id === 'prod-18');
    }
    return BAKERY_PRODUCTS.filter(p => p.id === 'prod-11' || p.id === 'prod-15' || p.id === 'prod-21');
  };

  const recommendations = getRecommendations();

  const handleAdd = (prod: BakeryProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(prod);
    setAddedId(prod.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-24 bg-[#0a0807] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Compass className="w-3.5 h-3.5" />
            <span>AI BAKER MATCHMAKER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Find Your Perfect Bake
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Tell our digital oven master what flavor, company, and moment you're gathering for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Form (Left 6 Cols) */}
          <div className="lg:col-span-6 bg-[#120f0d] p-6 sm:p-8 rounded-3xl border border-stone-800/80 shadow-xl space-y-6">
            {/* Step 1: Craving */}
            <div>
              <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                01. What are you craving?
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {CRAVINGS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCraving(c.id)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all flex items-center gap-2.5 ${
                      craving === c.id
                        ? 'bg-amber-950/60 border-amber-500 text-amber-200'
                        : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <span className="text-xl">{c.icon}</span>
                    <div>
                      <div className="font-medium text-stone-100">{c.label}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Group Size */}
            <div>
              <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                02. How many people?
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {GROUP_SIZES.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGroupSize(g.id)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all flex items-center gap-2.5 ${
                      groupSize === g.id
                        ? 'bg-amber-950/60 border-amber-500 text-amber-200'
                        : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <span className="text-xl">{g.icon}</span>
                    <div>
                      <div className="font-medium text-stone-100">{g.label}</div>
                      <div className="text-[10px] text-stone-400">{g.count}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Occasion */}
            <div>
              <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                03. When are you enjoying it?
              </label>
              <div className="flex flex-wrap gap-2">
                {OCCASIONS.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => setOccasion(o.id)}
                    className={`px-3 py-2 rounded-xl text-xs border transition-all flex items-center gap-1.5 ${
                      occasion === o.id
                        ? 'bg-amber-500 text-stone-950 font-bold border-amber-400'
                        : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    <span>{o.icon}</span>
                    <span>{o.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Result (Right 6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-stone-400 uppercase">
                Curated Oven Recommendations
              </span>
              <span className="text-xs font-mono text-amber-400">
                Tailored for {GROUP_SIZES.find(g => g.id === groupSize)?.count}
              </span>
            </div>

            <div className="space-y-3">
              {recommendations.map((prod) => {
                const isJustAdded = addedId === prod.id;
                return (
                  <motion.div
                    key={prod.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => onSelectProduct(prod)}
                    className="p-4 rounded-2xl bg-[#130f0d] hover:bg-[#181310] border border-stone-800 hover:border-amber-600/40 transition-all flex items-center justify-between gap-4 cursor-pointer shadow-lg"
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-16 h-16 rounded-xl object-cover border border-stone-800"
                      />
                      <div>
                        <div className="text-[10px] font-mono text-amber-400 uppercase">
                          {prod.category} · {prod.availability}
                        </div>
                        <h4 className="text-base font-serif text-stone-100">{prod.name}</h4>
                        <p className="text-xs text-stone-400 line-clamp-1 font-light">{prod.tagline}</p>
                        <div className="text-xs font-mono font-bold text-amber-400 mt-1">
                          AED {prod.priceAED}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleAdd(prod, e)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 shrink-0 transition-all ${
                        isJustAdded
                          ? 'bg-emerald-500 text-stone-950 font-bold'
                          : 'bg-amber-500 hover:bg-amber-400 text-stone-950'
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
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/40 border border-stone-850 text-xs text-stone-400 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                Tip: Pair our warm wood-fired loaves with Normandy churned butter and Maldon sea salt flakes for the pinnacle table experience.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
