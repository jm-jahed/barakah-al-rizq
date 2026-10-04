'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/logisticsData';

export const CustomerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#070B14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Trusted by market leaders.
            </h2>
            <p className="text-base text-gray-400 mt-2">
              Hear directly from supply chain directors and e-commerce leaders operating with VELOX.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-[#0F172A] border border-white/15 text-white hover:border-cyan-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-[#0F172A] border border-white/15 text-white hover:border-cyan-400 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Main Display Card */}
        <div className="bg-[#0F172A] rounded-3xl border border-blue-500/30 p-8 sm:p-12 shadow-2xl relative">
          <Quote className="w-16 h-16 text-blue-500/20 absolute top-8 right-8 pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center gap-1 text-amber-400 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-lg sm:text-2xl font-medium text-white leading-relaxed mb-8 max-w-4xl">
            "{current.quote}"
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <img
              src={current.avatar}
              alt={current.author}
              className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400"
            />
            <div>
              <h4 className="text-base font-extrabold text-white">{current.author}</h4>
              <p className="text-xs text-cyan-300 font-mono">{current.role} • {current.company}</p>
              <span className="text-[10px] text-gray-400 font-mono">{current.location}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
