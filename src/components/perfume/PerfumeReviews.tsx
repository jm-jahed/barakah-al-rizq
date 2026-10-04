'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const PerfumeReviews: React.FC = () => {
  const reviews = [
    {
      id: "pr-1",
      name: "Tariq Al-Hashemi",
      product: "Midnight Oud Extrait",
      rating: 5,
      comment: "The Cambodian Oud and saffron note profile is magnificent. I sprayed it in the morning and could still smell the warm resin sillage late into the evening.",
      notice: "Sample Review — Concept Project"
    },
    {
      id: "pr-2",
      name: "Camilla V.",
      product: "Rose Élan",
      rating: 5,
      comment: "A dreamy May rose paired with juicy lychee and white musk. Arrived in a stunning gold-embossed wax box. Extremely high quality.",
      notice: "Sample Review — Concept Project"
    },
    {
      id: "pr-3",
      name: "Dr. Hamdan S.",
      product: "Santal 27",
      rating: 5,
      comment: "Creamy Australian sandalwood with a dry papyrus and cardamom edge. My default daily signature scent now.",
      notice: "Sample Review — Concept Project"
    }
  ];

  return (
    <section className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            SAMPLE REVIEWS PLACEHOLDER
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            Olfactory Reviews.
          </h2>
          <p className="text-base text-gray-400">
            Sample client impressions demonstrating retail luxury review integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 font-bold">{rev.product}</span>
                </div>

                <p className="text-xs text-gray-300 italic leading-relaxed mb-6 font-serif">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div>
                  <h4 className="text-xs font-bold text-white">{rev.name}</h4>
                  <span className="text-[10px] font-mono text-gray-400">Verified Collector</span>
                </div>
                <span className="text-[9px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  {rev.notice}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
