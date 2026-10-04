'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { DESERT_STORIES } from '@/data/desertMirageData';

export const DesertStories: React.FC = () => {
  return (
    <section id="stories" className="relative py-24 bg-[#090706] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>EDITORIAL PUBLICATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Stories From the Sand
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Essays, field journals, and gastronomic reflections on the Arabian desert by master navigators, astronomers, and desert culinary artisans.
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESERT_STORIES.map((story) => (
            <div
              key={story.id}
              className="rounded-2xl bg-gradient-to-b from-[#140F0C] to-[#0A0806] border border-[#C9A265]/20 overflow-hidden group hover:border-[#C9A265]/50 transition-all flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#090706]/80 backdrop-blur-md text-[10px] font-mono text-[#E8D7B8]">
                  {story.category}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-stone-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C9A265]" />
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="text-base font-serif text-white group-hover:text-[#E8D7B8] transition-colors leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-3">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800 text-[10px] font-mono text-stone-500">
                  By {story.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
