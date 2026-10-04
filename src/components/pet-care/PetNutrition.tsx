'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  HeartHandshake,
  AlertCircle
} from 'lucide-react';

const DIETS = [
  {
    id: 'gastro',
    title: 'Gastrointestinal & Pancreatitis Clinical Diet',
    focus: 'Low-Fat • Prebiotic FOS • High Digestibility',
    indications: 'Acute colitis, chronic diarrhea, pancreatitis, malabsorption syndrome',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=800&auto=format&fit=crop',
    brand: 'Royal Canin Vet Diet • Hill’s Prescription i/d'
  },
  {
    id: 'renal',
    title: 'Renal & Kidney Function Support Diet',
    focus: 'Restricted Phosphorus • High-Quality EPA/DHA • Targeted Protein',
    indications: 'Chronic kidney disease (CKD), early renal insufficiency, urolithiasis prevention',
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=800&auto=format&fit=crop',
    brand: 'Hill’s k/d • Royal Canin Renal Feline/Canine'
  },
  {
    id: 'hypo',
    title: 'Hydrolyzed Single-Protein Hypoallergenic Diet',
    focus: 'Feather-Hydrolyzed Peptides • Zero Cross-Reactive Antigens',
    indications: 'Atopic dermatitis, cutaneous adverse food reactions, chronic pruritus & ear infections',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    brand: 'Purina Pro Plan HA • Royal Canin Anallergenic'
  }
];

export const PetNutrition: React.FC<any> = () => {
  return (
    <section id="nutrition" className="py-24 sm:py-32 bg-[#080E14] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
            <Utensils className="w-3.5 h-3.5" />
            <span>VETERINARY CLINICAL NUTRITION & DIETARY APOTHECARY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Medical Prescription Diets & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Therapeutic Nutrition.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Clinically formulated medical diets specifically calibrated to support renal recovery, GI disorders, dermatological allergies, and joint vitality.
          </p>
        </div>

        {/* Diet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIETS.map((d) => (
            <div
              key={d.id}
              className="rounded-3xl bg-[#0E1620] border border-white/10 p-6 space-y-5 shadow-xl backdrop-blur-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-44 rounded-2xl overflow-hidden relative">
                  <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1620] via-transparent to-transparent" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">
                    {d.brand}
                  </span>
                  <h3 className="text-base font-bold text-white font-sans">
                    {d.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    <strong>Key Focus:</strong> {d.focus}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-slate-400 space-y-1">
                  <span className="text-emerald-300 block text-[10px] font-bold uppercase">Clinical Indications:</span>
                  <span className="text-slate-300 text-[11px] block">{d.indications}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="#apothecary"
                  className="w-full py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-400/40 text-xs font-mono font-bold text-emerald-300 text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>Explore in Pharmacy Store</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetNutrition;
