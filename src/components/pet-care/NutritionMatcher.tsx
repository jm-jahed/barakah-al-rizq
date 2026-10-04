'use client';

import React, { useState } from 'react';
import { Utensils, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const NutritionMatcher: React.FC<any> = () => {
  const [concern, setConcern] = useState('digestion');

  const getRecommendation = () => {
    switch (concern) {
      case 'digestion':
        return {
          title: 'Royal Canin Gastrointestinal Low-Fat Veterinary Diet',
          rationale: 'Prebiotic FOS and highly digestible proteins to calm intestinal inflammation in UAE climate.',
          feedingGuide: '180g - 240g daily divided into 2 meals.'
        };
      case 'joints':
        return {
          title: 'Hill’s Prescription Diet j/d Joint Care + YuMOVE Plus Chewables',
          rationale: 'High EPA omega-3 levels and green-lipped mussel extract to preserve joint cartilage.',
          feedingGuide: '200g daily + 1 chewable tablet with morning meal.'
        };
      case 'skin':
        return {
          title: 'Purina Pro Plan HA Hydrolyzed Single-Peptide Formula',
          rationale: 'Hydrolyzed proteins preventing histamine release in pets with severe dust/food allergies.',
          feedingGuide: 'Exclusive 8-week elimination diet protocol.'
        };
      default:
        return {
          title: 'Royal Canin Breed Health Nutrition & Vitality Blend',
          rationale: 'Balanced macronutrients tailored for active indoor pets in UAE apartments.',
          feedingGuide: 'Standard age-adjusted weight chart.'
        };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="bg-[#090F16] py-12 px-4 sm:px-8 border-b border-white/5">
      <div className="max-w-5xl mx-auto rounded-3xl bg-[#0D151F] border border-emerald-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT NUTRITION ADVISORY</span>
          </div>
          <h4 className="text-lg font-bold text-white font-sans">
            Need Guidance on Prescription Feeding?
          </h4>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            {rec.rationale}
          </p>
          <span className="text-[11px] font-mono text-emerald-300 font-bold block pt-1">
            Top Recommendation: {rec.title}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <select
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-emerald-400"
          >
            <option value="digestion" className="bg-[#0E1620]">Sensitive Digestion</option>
            <option value="joints" className="bg-[#0E1620]">Joint Mobility & Stiff Hips</option>
            <option value="skin" className="bg-[#0E1620]">Allergic Skin & Itching</option>
            <option value="weight" className="bg-[#0E1620]">Weight Management</option>
          </select>

          <a
            href="#apothecary"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold text-xs uppercase font-mono text-center flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
          >
            <span>Order</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NutritionMatcher;
