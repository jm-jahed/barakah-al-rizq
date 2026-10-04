'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  Crown, 
  ShieldCheck, 
  Zap, 
  Eye, 
  Compass, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Volume2, 
  Smartphone,
  ChevronRight
} from 'lucide-react';
import { GadgetProduct } from '@/data/consumerElectronicsData';

interface AetheraHeroProps {
  onExploreCatalog: () => void;
  onSelectProduct: (product: GadgetProduct) => void;
  featuredProducts: GadgetProduct[];
  onBookShowroom: () => void;
}

export const AetheraHero: React.FC<AetheraHeroProps> = ({
  onExploreCatalog,
  onSelectProduct,
  featuredProducts,
  onBookShowroom
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroCardRef = useRef<HTMLDivElement>(null);

  // Default featured products if empty
  const heroItems = featuredProducts.slice(0, 3);

  const activeItem = heroItems[activeTab] || heroItems[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#090A0C] via-[#0C0D11] to-[#090A0C]"
    >
      {/* Cinematic Ambient Glow & Background Rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/5 to-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-amber-400/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Vision & Cinematic Typography */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left z-10">
            
            {/* UAE Luxury Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/20 text-amber-300 text-xs tracking-widest uppercase font-mono">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>UAE Flagship Tech Atelier • 2026 Collection</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06] font-sans">
                Technology, <br />
                <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent italic font-serif">
                  Elevated.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              A curated universe of premium gadgets, intelligent devices, and next-generation technology — engineered for the way you live, work, create, and play across Dubai, Abu Dhabi, and beyond.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreCatalog}
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-semibold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore 210+ Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#showcase"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium text-sm tracking-wide transition-all backdrop-blur-md"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Living Showcase</span>
              </a>

              <button
                onClick={onBookShowroom}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-transparent hover:bg-white/5 text-white/70 hover:text-white text-sm tracking-wide transition-all"
              >
                <span>Book Dubai Atelier</span>
                <ChevronRight className="w-4 h-4 text-white/40" />
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">210+</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider">Unique Gadgets</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">40</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider">Tech Ecosystems</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">Same-Day</div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider">UAE VIP Dispatch</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Parallax Flagship Card */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Interactive Tab Switcher */}
            <div className="flex items-center p-1.5 rounded-2xl bg-[#121318] border border-white/10 mb-6 shadow-xl w-full max-w-md">
              {heroItems.map((item, idx) => (
                <button
                  key={item?.id || idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium tracking-wide transition-all truncate text-center ${
                    activeTab === idx
                      ? 'bg-amber-400/20 border border-amber-400/40 text-amber-300 font-semibold shadow-inner'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item?.category || `Flagship 0${idx + 1}`}
                </button>
              ))}
            </div>

            {/* 3D Tilt Card Container */}
            {activeItem && (
              <div
                ref={heroCardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => onSelectProduct(activeItem)}
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * -14}deg) rotateY(${mousePosition.x * 14}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="group relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#16171E]/90 via-[#101116]/90 to-[#0A0B0E]/95 border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/90 cursor-pointer overflow-hidden backdrop-blur-2xl"
              >
                {/* Dynamic Card Glow */}
                <div 
                  className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/25 transition-colors" 
                />

                {/* Card Top Strip */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/70">
                    {activeItem.brand}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[11px] font-mono font-bold text-amber-300">
                    AED {activeItem.price.toLocaleString()}
                  </span>
                </div>

                {/* Hero Product Visual with Hover Zoom */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-6 flex items-center justify-center p-4">
                  <img
                    src={activeItem.images[0]}
                    alt={activeItem.name}
                    className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
                  />
                  
                  {/* Floating Specs Hotspot */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-white/80 font-medium truncate">{activeItem.name}</span>
                    <span className="text-amber-400 font-mono font-semibold ml-2 shrink-0">★ {activeItem.rating}</span>
                  </div>
                </div>

                {/* Description & Quick Details */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {activeItem.name}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                    {activeItem.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {activeItem.keyFeatures.slice(0, 2).map((feat, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-white/75 truncate max-w-[200px]">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 flex items-center justify-between border-t border-white/10">
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> In Stock • Dubai Dispatch
                    </span>
                    <span className="text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Inspect Product Details →
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="text-[11px] text-white/40 mt-3 font-mono">
              Hover to tilt • Click card to open full interactive studio
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
