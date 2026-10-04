'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { RESTAURANT_REVIEWS as RESTAURANT_TESTIMONIALS } from '@/data/restaurantData';

export const RestaurantTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0E0C0A] border-b border-amber-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <Star className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Guest Impressions Concept
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            What Guests Experience.
          </h2>

          <p className="text-base text-gray-400 leading-relaxed">
            Demonstration testimonial cards reflecting UHNW fine dining and event feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(RESTAURANT_TESTIMONIALS || []).map((t: any, idx: number) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#14100C] border border-amber-500/20 hover:border-amber-400/50 transition-all flex flex-col justify-between shadow-2xl relative"
            >
              <div className="absolute top-6 right-6 text-amber-500/20">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-serif italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">{t.guestName}</h4>
                  <span className="text-[11px] font-mono text-amber-300 block">{t.occasion}</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 border border-white/10 px-2 py-0.5 rounded">
                  Sample Testimonial
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
