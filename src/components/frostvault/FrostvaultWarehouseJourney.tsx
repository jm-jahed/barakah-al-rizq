'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, CheckSquare, Thermometer, Box, Layers, Activity, ShoppingCart, Send, ArrowRight } from 'lucide-react';
import { WAREHOUSE_JOURNEY_STAGES } from '@/data/frostvaultData';

export const FrostvaultWarehouseJourney: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const icons = [Truck, CheckSquare, Thermometer, Box, Layers, Activity, ShoppingCart, Send];
  const currentStage = WAREHOUSE_JOURNEY_STAGES[activeStageIndex];

  return (
    <section className="py-24 bg-[#090e13] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#38bdf8] font-mono mb-3">
            CONTINUOUS PRODUCT STEWARDSHIP
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Smart Warehouse Journey.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Eight uncompromising operational checkpoints ensuring zero thermal break from arrival at refrigerated dock to customer dispatch.
          </p>
        </div>

        {/* 8-Stage Stepper Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-12">
          {WAREHOUSE_JOURNEY_STAGES.map((stage, idx) => {
            const Icon = icons[idx];
            const isSelected = idx === activeStageIndex;

            return (
              <button
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3.5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between min-h-[110px] cursor-pointer ${
                  isSelected
                    ? 'bg-[#0f2238] border-[#38bdf8] text-[#f8fafc] shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                    : 'bg-[#0a121c] border-[#15283c] text-[#64748b] hover:bg-[#0e1927] hover:text-[#cbd5e1]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#38bdf8]' : 'text-[#475569]'}`}>
                    {stage.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#38bdf8]' : 'text-[#475569]'}`} />
                </div>
                <div>
                  <div className={`text-xs font-bold font-mono tracking-tight mt-2 ${isSelected ? 'text-[#f8fafc]' : 'text-[#94a3b8]'}`}>
                    {stage.title}
                  </div>
                  <div className="text-[10px] text-[#64748b] font-mono truncate">
                    {stage.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Highlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c1926] via-[#09131d] to-[#060a0f] border border-[#1b3a5a] shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-2 uppercase tracking-widest">
                  <span>Phase {currentStage.step} of 08</span>
                  <span>·</span>
                  <span>{currentStage.subtitle}</span>
                </div>

                <h3 className="text-3xl font-bold text-[#f8fafc] mb-4">
                  {currentStage.title}
                </h3>

                <p className="text-sm sm:text-base text-[#94a3b8] font-light leading-relaxed mb-6">
                  {currentStage.description}
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                    disabled={activeStageIndex === 0}
                    className="px-5 py-2.5 rounded-xl bg-[#0f1d2c] hover:bg-[#15273b] disabled:opacity-30 text-xs font-mono text-[#cbd5e1] border border-[#18314a] transition-colors cursor-pointer"
                  >
                    Previous Phase
                  </button>
                  <button
                    onClick={() => setActiveStageIndex((prev) => Math.min(WAREHOUSE_JOURNEY_STAGES.length - 1, prev + 1))}
                    disabled={activeStageIndex === WAREHOUSE_JOURNEY_STAGES.length - 1}
                    className="px-5 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] disabled:opacity-30 text-xs font-mono font-bold text-[#ffffff] transition-colors cursor-pointer flex items-center gap-1.5 shadow-md"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#08111a] border border-[#162c44] space-y-3 font-mono text-xs">
                <div className="text-[10px] text-[#64748b] uppercase tracking-wider font-bold">
                  Stage Verification Specs
                </div>
                <div className="text-[#94a3b8] space-y-1.5">
                  <p>• Zero temperature variance tolerance during dock coupling.</p>
                  <p>• Automated barcode verification against cloud ERP manifests.</p>
                  <p>• Autonomous robotic shuttle routing to pre-cooled bays.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
