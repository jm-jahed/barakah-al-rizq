'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Activity, Car, Cpu, Utensils, CheckCircle2, ArrowRight } from 'lucide-react';
import { INDUSTRY_SOLUTIONS, IndustrySolution } from '@/data/logisticsData';

interface IndustrySolutionsProps {
  onOpenQuoteModal: (industryName?: string) => void;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ onOpenQuoteModal }) => {
  const [activeIndustry, setActiveIndustry] = useState<IndustrySolution>(INDUSTRY_SOLUTIONS[0]);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'Car':
        return <Car className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Utensils':
      default:
        return <Utensils className="w-4 h-4" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-[#0B1120] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
            VERTICAL SPECIALIZATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
            Logistics built for your industry.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-2">
            Tailored supply chain workflows engineered for specialized compliance, speed, and handling requirements.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {INDUSTRY_SOLUTIONS.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustry(ind)}
              className={`px-5 py-3 rounded-2xl text-xs font-mono font-bold flex items-center gap-2.5 transition-all ${
                activeIndustry.id === ind.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30 border border-cyan-400'
                  : 'bg-[#0F172A] border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {getIndustryIcon(ind.icon)}
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Active Industry Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-[#0F172A] rounded-3xl border border-blue-500/30 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  {activeIndustry.name}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  {activeIndustry.metrics}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {activeIndustry.headline}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {activeIndustry.description}
              </p>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeIndustry.keyFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#070B14] border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-200">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Case Snippet Box */}
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 font-mono text-xs text-blue-200">
                <strong>VERIFIED IMPACT:</strong> {activeIndustry.caseSnippet}
              </div>

              <button
                onClick={() => onOpenQuoteModal(activeIndustry.name)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <span>Request {activeIndustry.name} Solution Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Media Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl h-[340px] sm:h-[400px]">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent" />
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
