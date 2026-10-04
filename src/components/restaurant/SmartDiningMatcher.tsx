'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Check, ArrowRight, Heart, Star } from 'lucide-react';
import { RESTAURANT_MENU_ITEMS, MenuItem } from '@/data/restaurantData';

interface SmartDiningMatcherProps {
  onOpenReservationModal: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export const SmartDiningMatcher: React.FC<SmartDiningMatcherProps> = ({
  onOpenReservationModal,
  onAddToCart,
}) => {
  const [occasion, setOccasion] = useState<string>('Date Night');
  const [preference, setPreference] = useState<string>('Grill');
  const [budget, setBudget] = useState<string>('AED 200–400');
  const [recommendation, setRecommendation] = useState<any | null>(null);
  const [isMatching, setIsMatching] = useState<boolean>(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMatching(true);
    setRecommendation(null);

    setTimeout(() => {
      setIsMatching(false);
      // Pick matching dishes from dataset
      const matchedDishes = RESTAURANT_MENU_ITEMS.filter((item) => {
        if (preference === 'Grill') return item.category === 'Grills' || item.category === 'Signature';
        if (preference === 'Seafood') return item.name.includes('Lobster') || item.name.includes('Prawns') || item.name.includes('Sea Bass');
        if (preference === 'Vegetarian') return item.dietary.includes('Vegetarian');
        return item.category === 'Signature' || item.category === 'Mains';
      }).slice(0, 3);

      setRecommendation({
        occasion,
        preference,
        budget,
        recommendedTable: occasion === 'Date Night' ? 'Sunset Terrace Outdoor Seating' : occasion === 'Business Dinner' ? 'DIFC Main Dining Alcove' : 'Chef’s Table VIP Counter',
        dishes: matchedDishes.length > 0 ? matchedDishes : RESTAURANT_MENU_ITEMS.slice(0, 3),
        estimatedSpend: budget.includes('400') ? 'AED 380 – AED 450 per guest' : 'AED 180 – AED 250 per guest',
      });
    }, 1200);
  };

  return (
    <section id="matcher" className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10141C] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  AI-STYLE DINING ASSISTANT
                </span>
                <h2 className="text-2xl font-extrabold text-white font-serif">What Are You In The Mood For?</h2>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 self-start sm:self-auto font-bold">
              <span>DEMO RECOMMENDATION ENGINE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-6 space-y-6">
              <form onSubmit={handleGenerate} className="space-y-5">
                {/* Occasion */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                    01. Dining Occasion
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Date Night', 'Family Dinner', 'Business Dinner', 'Celebration', 'Casual Meal'].map((o) => (
                      <button
                        key={o}
                        type="button"
                        onClick={() => setOccasion(o)}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          occasion === o
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preference */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                    02. Flavor & Cuisine Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Arabic & Spices', 'International', 'Grill & Steak', 'Vegetarian', 'Seafood', 'Dessert & Coffee'].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPreference(p)}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          preference === p
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                    03. Target Budget per Guest
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['AED 50–100', 'AED 100–200', 'AED 200–400', 'AED 400+'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                          budget === b
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isMatching}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
                >
                  {isMatching ? 'Calculating Culinary Recommendation...' : 'Generate Recommended Experience →'}
                </button>
              </form>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-6">
              {recommendation ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-[#161D27] border border-amber-500/40 space-y-4 shadow-xl"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                      RECOMMENDED EXPERIENCE
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      Match Score: 98%
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gray-400 block">SUGGESTED SEATING AREA</span>
                    <h4 className="text-base font-bold text-white font-serif">{recommendation.recommendedTable}</h4>
                    <span className="text-xs font-mono text-amber-300">{recommendation.estimatedSpend}</span>
                  </div>

                  {/* Recommended Dishes */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-bold">
                      RECOMMENDED DISHES FOR YOUR OCCASION:
                    </span>

                    {recommendation.dishes.map((dish: MenuItem) => (
                      <div key={dish.id} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                        <img src={dish.image} alt={dish.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div className="flex-1">
                          <h5 className="text-xs font-bold text-white line-clamp-1">{dish.name}</h5>
                          <span className="text-[10px] font-mono text-amber-300">AED {dish.price}</span>
                        </div>
                        <button
                          onClick={() => onAddToCart(dish)}
                          className="px-2.5 py-1 rounded bg-amber-500 text-black font-bold text-[10px]"
                        >
                          + Select
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenReservationModal}
                    className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg"
                  >
                    Reserve Table For This Experience →
                  </button>
                </motion.div>
              ) : (
                <div className="h-full min-h-[320px] p-6 rounded-2xl bg-[#161D27] border border-white/10 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-amber-400">
                    <Utensils className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-serif">Simulated Smart Matcher</h4>
                    <p className="text-xs text-gray-400 max-w-xs mt-1">
                      Select your occasion, flavor preference, and budget to receive an instant custom menu recommendation.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300/80 border border-amber-500/30 px-3 py-1 rounded-full">
                    DEMO RECOMMENDATION ENGINE — Concept Build #08
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
