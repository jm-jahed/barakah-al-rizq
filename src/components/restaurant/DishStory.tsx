'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Flame, Layers } from 'lucide-react';

export const DishStory: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'wagyu' | 'seabass' | 'dessert'>('wagyu');

  const dishStories = {
    wagyu: {
      name: "Miyazaki A5 Wagyu Carpaccio",
      rawTitle: "Raw Ingredients: Miyazaki A5 & Black Truffle",
      rawDesc: "Cold-shaved Miyazaki A5 Wagyu beef loin paired with whole Black Perigord Truffles, 24-month Parmigiano Reggiano, and cold-pressed Riviera olive oil.",
      rawImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      platedTitle: "Plated Artistry: Signature Carpaccio",
      platedDesc: "Precision cold-pressed Wagyu sliced to 0.5mm thickness, draped over gold leaf glass plate and finished with micro-herbs & Maldon sea salt.",
      platedImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
    },
    seabass: {
      name: "Brittany Sea Bass & Kashmiri Saffron",
      rawTitle: "Raw Ingredients: Wild Sea Bass & Saffron Threads",
      rawDesc: "Fresh Brittany sea bass fillet with heirloom baby fennel, Kashmiri saffron threads, Normandy butter, and wild chanterelle mushrooms.",
      rawImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop",
      platedTitle: "Plated Artistry: Pan-Seared Perfection",
      platedDesc: "Crispy-skin sea bass rested over saffron foam emulsion, charred fennel bulb, and micro-herbs.",
      platedImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop"
    },
    dessert: {
      name: "Valrhona 24k Gold Chocolate Sphere",
      rawTitle: "Raw Ingredients: 70% Valrhona & Gold Leaf",
      rawDesc: "Pure French Valrhona dark chocolate, Madagascar vanilla bean diplomat cream, hazelnut praline, and edible 24-karat gold foil.",
      rawImage: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1200&auto=format&fit=crop",
      platedTitle: "Plated Artistry: Tableside Melting Sphere",
      platedDesc: "Hand-molded chocolate dome melted tableside with steaming salted caramel poured from a copper pot.",
      platedImage: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1200&auto=format&fit=crop"
    }
  };

  const currentStory = dishStories[activeTab];

  return (
    <section id="dish-story" className="py-24 bg-[#0C0A08] border-b border-amber-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              From Raw Ingredient → Plated Masterpiece
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            Culinary Dish Transformation.
          </h2>

          <p className="text-base text-gray-400 leading-relaxed">
            Drag the interactive slider below to explore how our kitchen transforms raw organic ingredients into signature culinary artwork.
          </p>
        </div>

        {/* Dish Selection Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('wagyu')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'wagyu'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            A5 Wagyu Carpaccio
          </button>
          <button
            onClick={() => setActiveTab('seabass')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'seabass'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            Brittany Sea Bass
          </button>
          <button
            onClick={() => setActiveTab('dessert')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'dessert'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            24k Gold Chocolate Dome
          </button>
        </div>

        {/* Draggable Reveal Showcase Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#14100C] border border-amber-500/30 overflow-hidden shadow-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                INTERACTIVE CULINARY REVEAL
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-serif">
                {currentStory.name}
              </h3>
            </div>
            <span className="text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              Drag Slider ↔
            </span>
          </div>

          {/* Interactive Image Split Container */}
          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden select-none cursor-ew-resize">
            {/* Base Plated Image */}
            <img
              src={currentStory.platedImage}
              alt="Plated Dish"
              className="absolute inset-0 w-full h-full object-cover filter contrast-110"
            />
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-white font-bold z-10">
              Plated Masterpiece
            </div>

            {/* Clipped Raw Image */}
            <div
              className="absolute top-0 bottom-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentStory.rawImage}
                alt="Raw Ingredients"
                className="w-full h-full object-cover filter brightness-90 sepia-[0.3]"
                style={{ width: '100%', maxWidth: 'none' }}
              />
              <div className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-mono font-bold z-10">
                Raw Ingredients
              </div>
            </div>

            {/* Slider Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize flex items-center justify-center z-20 shadow-[0_0_15px_rgba(245,158,11,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-lg font-bold text-xs">
                ↔
              </div>
            </div>
          </div>

          {/* Range Slider Control */}
          <div className="mt-6">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-xs font-mono text-gray-400 mt-2">
              <span>← Raw Prep (0%)</span>
              <span>Plated Artistry (100%) →</span>
            </div>
          </div>

          {/* Description Pair */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
                {currentStory.rawTitle}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {currentStory.rawDesc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
              <h4 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-1">
                {currentStory.platedTitle}
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed">
                {currentStory.platedDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
