'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Check, ArrowRight, Droplets, ShoppingBag } from 'lucide-react';
import { PERFUME_PRODUCTS, PerfumeProduct } from '@/data/perfumeData';

interface FragranceFinderProps {
  onSelectProduct: (product: PerfumeProduct) => void;
  onAddToCart: (product: PerfumeProduct) => void;
}

export const FragranceFinder: React.FC<FragranceFinderProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [recipient, setRecipient] = useState('Me');
  const [preference, setPreference] = useState('Unisex');
  const [family, setFamily] = useState('Oud');
  const [intensity, setIntensity] = useState('Strong');
  const [occasion, setOccasion] = useState('Special Occasion');

  const [recommendation, setRecommendation] = useState<any | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleRecommend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setRecommendation(null);

    setTimeout(() => {
      setIsAnalyzing(false);

      let matchedProduct = PERFUME_PRODUCTS.find((p) => p.id === 'midnight-oud') || PERFUME_PRODUCTS[0];
      if (preference === 'Men') matchedProduct = PERFUME_PRODUCTS.find((p) => p.id === 'noir-sovereign') || matchedProduct;
      if (preference === 'Women') matchedProduct = PERFUME_PRODUCTS.find((p) => p.id === 'rose-elan') || matchedProduct;

      setRecommendation({
        matchedProduct,
        matchScore: '98%',
        whyMatches: `Harmonizes your preference for ${preference} ${family} fragrances with ${intensity} intensity tailored for ${occasion}.`
      });
    }, 1100);
  };

  return (
    <section id="finder" className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10141C] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  AI-STYLE OLFACTORY MATCHING
                </span>
                <h2 className="text-2xl font-extrabold text-white font-serif">Find Your Signature Scent</h2>
              </div>
            </div>

            <span className="text-xs font-mono text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full font-bold">
              DEMO FRAGRANCE RECOMMENDATION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-6 space-y-6">
              <form onSubmit={handleRecommend} className="space-y-4">
                {/* 1. Recipient */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                    01. Who is this fragrance for?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Me', 'Partner', 'Gift'].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRecipient(r)}
                        className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                          recipient === r
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Preference */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                    02. Olfactory Gender Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Masculine', 'Feminine', 'Unisex'].map((pref) => (
                      <button
                        key={pref}
                        type="button"
                        onClick={() => setPreference(pref)}
                        className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
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

                {/* 3. Scent Family */}
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                    03. Preferred Scent Family
                  </label>
                  <select
                    value={family}
                    onChange={(e) => setFamily(e.target.value)}
                    className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  >
                    <option value="Oud">Oud (Royal Agarwood & Amber)</option>
                    <option value="Woody">Woody (Sandalwood & Cedar)</option>
                    <option value="Floral">Floral (Grasse Rose & Jasmine)</option>
                    <option value="Fresh">Fresh (Clean Linen & Pear)</option>
                    <option value="Citrus">Citrus (Italian Bergamot)</option>
                    <option value="Amber">Amber (Benzoin & Cinnamon)</option>
                  </select>
                </div>

                {/* 4. Intensity & Occasion */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 mb-1">Intensity</label>
                    <select
                      value={intensity}
                      onChange={(e) => setIntensity(e.target.value)}
                      className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                    >
                      <option value="Soft">Soft & Intimate</option>
                      <option value="Moderate">Moderate Daily</option>
                      <option value="Strong">Strong Statement</option>
                      <option value="Very Strong">Very Strong / Royal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 mb-1">Occasion</label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                    >
                      <option value="Everyday">Everyday Signature</option>
                      <option value="Office">Office & Meetings</option>
                      <option value="Date Night">Date Night & Dinners</option>
                      <option value="Special Occasion">Weddings & Galas</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
                >
                  {isAnalyzing ? 'Calculating Olfactory Profile...' : 'Find My Signature Match →'}
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
                      RECOMMENDED FRAGRANCE MATCH
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      Match Score: {recommendation.matchScore}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <img
                      src={recommendation.matchedProduct.image}
                      alt={recommendation.matchedProduct.name}
                      className="w-20 h-24 rounded-xl object-cover bg-black border border-white/10 shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-mono text-amber-300 font-bold">
                        {recommendation.matchedProduct.category} • {recommendation.matchedProduct.concentration}
                      </span>
                      <h4 className="text-xl font-bold text-white font-serif">{recommendation.matchedProduct.name}</h4>
                      <div className="text-base font-extrabold text-amber-400 font-mono mt-1">
                        AED {recommendation.matchedProduct.price}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed font-sans border-t border-white/10 pt-3">
                    {recommendation.whyMatches}
                  </p>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(recommendation.matchedProduct)}
                      className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs"
                    >
                      Inspect Pyramid
                    </button>

                    <button
                      onClick={() => onAddToCart(recommendation.matchedProduct)}
                      className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-4 h-4" /> Add to Bag
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full min-h-[320px] p-6 rounded-2xl bg-[#161D27] border border-white/10 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-amber-400">
                    <Droplets className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-serif">Simulated Olfactory Engine</h4>
                    <p className="text-xs text-gray-400 max-w-xs mt-1">
                      Select your fragrance preferences to reveal your personalized perfume recommendation.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300/80 border border-amber-500/30 px-3 py-1 rounded-full">
                    DEMO RECOMMENDATION WIZARD — Concept Build #11
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
