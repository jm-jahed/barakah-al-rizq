'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, CheckCircle2 } from 'lucide-react';
import { CHEF_PROFILE } from '@/data/restaurantData';

export const RestaurantChef: React.FC = () => {
  return (
    <section className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="p-4 rounded-3xl bg-[#10141C] border border-amber-500/30 overflow-hidden shadow-2xl relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src={CHEF_PROFILE.image}
                  alt={CHEF_PROFILE.name}
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-500/30 font-bold uppercase">
                  {CHEF_PROFILE.experienceYears} Years Master Experience
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              CULINARY LEADERSHIP & HERITAGE
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif leading-tight">
              {CHEF_PROFILE.name}.
            </h2>

            <p className="text-sm font-mono text-amber-300 font-bold">
              {CHEF_PROFILE.role}
            </p>

            <p className="text-base text-gray-300 leading-relaxed font-serif italic">
              "{CHEF_PROFILE.philosophy}"
            </p>

            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              {CHEF_PROFILE.biography}
            </p>

            <div className="space-y-2 border-t border-white/10 pt-4">
              <span className="text-[10px] font-mono text-gray-400 uppercase font-bold block">CULINARY SPECIALTIES:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300">
                {CHEF_PROFILE.specialties?.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] font-mono text-amber-400/80 pt-2">
              {CHEF_PROFILE.sampleNotice}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
