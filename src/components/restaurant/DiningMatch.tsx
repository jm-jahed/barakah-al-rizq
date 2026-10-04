'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Check, ArrowRight, ShoppingBag } from 'lucide-react';
import { RESTAURANT_MENU_ITEMS, MenuItem } from '@/data/restaurantData';

interface DiningMatchProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
  onOpenReservation: () => void;
}

export const DiningMatch: React.FC<DiningMatchProps> = ({
  onSelectItem,
  onAddToCart,
  onOpenReservation,
}) => {
  const [occasion, setOccasion] = useState('Date Night');
  const [preference, setPreference] = useState('Grilled');
  const [atmosphere, setAtmosphere] = useState('Romantic');
  const [budget, setBudget] = useState('AED 200–350');

  const [recommendation, setRecommendation] = useState<any | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleRecommend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setRecommendation(null);

    setTimeout(() => {
      setIsAnalyzing(false);

      let matchedItem = RESTAURANT_MENU_ITEMS.find((i) => i.id === 'sig-1') || RESTAURANT_MENU_ITEMS[0];
      if (preference === 'Seafood') matchedItem = RESTAURANT_MENU_ITEMS.find((i) => i.id === 'sig-3') || matchedItem;
      if (preference === 'Vegetarian') matchedItem = RESTAURANT_MENU_ITEMS.find((i) => i.id === 'veg-1') || matchedItem;

      setRecommendation({
        matchedItem,
        suggestedExperience: occasion === 'Date Night' ? 'DIFC Sunset Terrace' : 'Signature Royal Dinner',
        estimatedSpend: budget,
        seating: atmosphere === 'Romantic' ? 'Terrace Window Table' : 'Royal Majlis Booth',
        whyMatches: `Harmonizes your ${occasion} plans with ${preference} cuisine in an ${atmosphere} environment matching ${budget}.`
      });
    }, 1100);
  };

  return (
    <section id="diningmatch" className="py-24 bg-[#0A0D14] border-b border-amber-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10141C] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  AI-STYLE DINING RECOMMENDATION
                </span>
                <h2 className="text-2xl font-extrabold text-white font-serif">What Are You In The Mood For?</h2>
              </div>
            </div>

            <span className="text-xs font-mono text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full font-bold">
              Demo AI-Style Recommendation
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-6 space-y-4">
              <form onSubmit={handleRecommend} className="space-y-4">
                {/* 1. Occasion */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                    01. Dining Occasion
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Date Night', 'Family Dinner', 'Business Dinner', 'Celebration', 'Casual Lunch', 'Private Event'].map((occ) => (
                      <button
                        key={occ}
                        type="button"
                        onClick={() => setOccasion(occ)}
                        className={`p-2 rounded-xl border text-[11px] font-bold text-center transition-all ${
                          occasion === occ
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Preference */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                    02. Flavor & Culinary Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Light', 'Rich', 'Spicy', 'Grilled', 'Seafood', 'Vegetarian'].map((pref) => (
                      <button
                        key={pref}
                        type="button"
                        onClick={() => setPreference(pref)}
                        className={`p-2 rounded-xl border text-[11px] font-bold text-center transition-all ${
                          preference === pref
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {pref}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Atmosphere & Budget */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 mb-1">Atmosphere</label>
                    <select
                      value={atmosphere}
                      onChange={(e) => setAtmosphere(e.target.value)}
                      className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                    >
                      <option value="Quiet">Quiet & Intimate</option>
                      <option value="Romantic">Romantic Terrace</option>
                      <option value="Social">Lively & Social</option>
                      <option value="Elegant">VIP Elegant Majlis</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 mb-1">Budget Target</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                    >
                      <option value="AED 100–200">AED 100–200</option>
                      <option value="AED 200–350">AED 200–350</option>
                      <option value="AED 350–500">AED 350–500</option>
                      <option value="AED 500+">AED 500+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
                >
                  {isAnalyzing ? 'Analyzing Gastronomy Profile...' : 'Generate Dining Match →'}
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
                      RECOMMENDED DINING MATCH
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      98% Match Score
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <img
                      src={recommendation.matchedItem.image}
                      alt={recommendation.matchedItem.name}
                      className="w-20 h-24 rounded-xl object-cover bg-black border border-white/10 shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-mono text-amber-300 font-bold">
                        RECOMMENDED STAR DISH
                      </span>
                      <h4 className="text-xl font-bold text-white font-serif">{recommendation.matchedItem.name}</h4>
                      <div className="text-base font-extrabold text-amber-400 font-mono mt-1">
                        AED {recommendation.matchedItem.price}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed font-sans border-t border-white/10 pt-3">
                    {recommendation.whyMatches}
                  </p>

                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-gray-300 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Suggested Experience:</span>
                      <span className="text-amber-300 font-bold">{recommendation.suggestedExperience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Recommended Seating:</span>
                      <span className="text-white font-bold">{recommendation.seating}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectItem(recommendation.matchedItem)}
                      className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs"
                    >
                      Inspect Dish
                    </button>

                    <button
                      onClick={onOpenReservation}
                      className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg flex items-center justify-center gap-1.5"
                    >
                      Reserve This Table →
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full min-h-[320px] p-6 rounded-2xl bg-[#161D27] border border-white/10 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-amber-400">
                    <Utensils className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-serif">Simulated Gastronomy Matcher</h4>
                    <p className="text-xs text-gray-400 max-w-xs mt-1">
                      Select your dining occasion and preferences to reveal your personalized menu recommendation.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300/80 border border-amber-500/30 px-3 py-1 rounded-full">
                    DEMO RECOMMENDATION WIZARD — Concept Build #12
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
