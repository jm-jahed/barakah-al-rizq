'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Utensils, Check, Star } from 'lucide-react';
import { CHEF_PROFILE } from '@/data/restaurantData';

export const ChefProfile: React.FC = () => {
  return (
    <section id="chef" className="py-24 bg-[#0E0C0A] border-b border-amber-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Chef Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black group">
              <img
                src={CHEF_PROFILE.image}
                alt={CHEF_PROFILE.name}
                className="w-full h-[480px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-transparent to-transparent opacity-80" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono text-amber-300 bg-black/80 backdrop-blur-md border border-amber-500/40 font-bold">
                  Sample Chef Profile
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  EXECUTIVE CULINARY DIRECTOR
                </span>
                <h4 className="text-xl font-extrabold text-white font-serif">{CHEF_PROFILE.name}</h4>
                <p className="text-xs text-gray-300 mt-1">{CHEF_PROFILE.experienceYears}+ Years International Fine Dining</p>
              </div>
            </div>
          </div>

          {/* Chef Biography & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                Culinary Direction
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif mb-6">
              Chef {CHEF_PROFILE.name}.
            </h2>

            <p className="text-base text-gray-300 leading-relaxed mb-6">
              {CHEF_PROFILE.biography}
            </p>

            {/* Philosophy Quote */}
            <div className="p-6 rounded-2xl bg-[#14100C] border-l-4 border-amber-400 border-y border-r border-white/10 mb-8 shadow-xl">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-2 font-bold">
                CULINARY PHILOSOPHY
              </span>
              <blockquote className="text-sm sm:text-base italic text-gray-200 leading-relaxed font-serif">
                "{CHEF_PROFILE.philosophy}"
              </blockquote>
            </div>

            {/* Specialties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
                  Culinary Specialties
                </h4>
                <div className="space-y-2">
                  {(CHEF_PROFILE.specialties || []).map((spec: string) => (
                    <div key={spec} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
                  Signature Creations
                </h4>
                <div className="space-y-2">
                  {(CHEF_PROFILE.signatureDishes || []).map((dish: string) => (
                    <div key={dish} className="flex items-center gap-2.5 text-xs text-amber-300 font-medium">
                      <Star className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{dish}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
              Sample Chef Profile — Created strictly for portfolio concept showcase.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
