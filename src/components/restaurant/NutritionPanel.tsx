'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const NutritionPanel: React.FC = () => {
  const sampleNutrition = [
    { dish: "24K Gold Wagyu Ribeye Kebabs", cal: "680 kcal", protein: "52g", carbs: "18g", fat: "42g" },
    { dish: "Smoked Lamb Shank Mandi", cal: "820 kcal", protein: "64g", carbs: "78g", fat: "34g" },
    { dish: "Pan-Seared Sea Bass", cal: "520 kcal", protein: "48g", carbs: "14g", fat: "22g" },
    { dish: "Signature Pistachio Kunafa", cal: "610 kcal", protein: "14g", carbs: "72g", fat: "28g" }
  ];

  return (
    <section className="py-16 bg-[#080B0F] border-b border-amber-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            NUTRITIONAL BREAKDOWN
          </span>
          <h3 className="text-2xl font-bold text-white font-serif mt-3">Sample Caloric & Macro Profiles</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sampleNutrition.map((n, idx) => (
            <motion.div
              key={n.dish}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-[#10141C] border border-amber-500/20 space-y-2 shadow-xl"
            >
              <h4 className="text-xs font-bold text-white font-serif line-clamp-1">{n.dish}</h4>
              <div className="text-2xl font-extrabold text-amber-400 font-mono">{n.cal}</div>

              <div className="grid grid-cols-3 gap-1 pt-2 border-t border-white/10 text-[10px] font-mono text-gray-300 text-center">
                <div>
                  <span className="text-gray-400 block">PROTEIN</span>
                  <strong className="text-white">{n.protein}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block">CARBS</span>
                  <strong className="text-white">{n.carbs}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block">FAT</span>
                  <strong className="text-white">{n.fat}</strong>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center text-[10px] font-mono text-gray-400">
          Sample Nutrition Data — Concept Project Build #12
        </div>
      </div>
    </section>
  );
};
