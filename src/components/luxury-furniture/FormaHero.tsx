'use client';

import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Crown, 
  ShieldCheck, 
  Compass, 
  Eye, 
  ChevronRight, 
  MapPin, 
  SlidersHorizontal 
} from 'lucide-react';
import { FurnitureProduct, ALL_FURNITURE_PRODUCTS } from '@/data/furnitureData';

interface FormaHeroProps {
  onExploreCatalog?: () => void;
  onExploreCollection?: () => void;
  onSelectProduct?: (product: FurnitureProduct) => void;
  onQuickViewProduct?: (productId: string) => void;
  featuredProducts?: FurnitureProduct[];
  onBookShowroom?: () => void;
  onOpenBespoke?: () => void;
}

export const FormaHero: React.FC<FormaHeroProps> = ({
  onExploreCatalog,
  onExploreCollection,
  onSelectProduct,
  onQuickViewProduct,
  featuredProducts = ALL_FURNITURE_PRODUCTS,
  onBookShowroom,
  onOpenBespoke
}) => {
  const handleExplore = onExploreCollection || onExploreCatalog || (() => {});
  const handleProductSelect = (p: FurnitureProduct) => {
    if (onSelectProduct) onSelectProduct(p);
    if (onQuickViewProduct) onQuickViewProduct(p.id);
  };
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const heroItems = (featuredProducts && featuredProducts.length > 0) ? featuredProducts.slice(0, 3) : ALL_FURNITURE_PRODUCTS.slice(0, 3);
  const activeItem = heroItems[activeTab] || heroItems[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-[#12110F]"
    >
      {/* Cinematic Ambient Glow & Architectural Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-[#C68D4C]/10 via-[#E6AF73]/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#8C6D46]/8 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Architectural Grid Texture */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Architectural Vision & Editorial Typography */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left z-10">
            
            {/* UAE Atelier Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#221F1C] border border-[#3E3832] text-[#E6AF73] text-xs tracking-widest uppercase font-mono">
              <Crown className="w-3.5 h-3.5 text-[#E6AF73]" />
              <span>Maison Forma • Dubai & Abu Dhabi Ateliers</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#F5F2EB] leading-[1.08] font-serif">
                Furniture, <br />
                <span className="italic text-[#E6AF73] font-serif">
                  Shaped Around Living.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#C5BDB5] font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Exceptional furniture designed to transform spaces through proportion, material, craftsmanship, and timeless form across the United Arab Emirates.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={handleExplore}
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#E6AF73] via-[#D89F60] to-[#C68D4C] text-[#121110] font-semibold text-xs tracking-widest uppercase shadow-xl shadow-[#C68D4C]/15 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore 200+ Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#interiors"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#F5F2EB] font-medium text-xs tracking-wider uppercase transition-all backdrop-blur-md"
              >
                <Compass className="w-4 h-4 text-[#E6AF73]" />
                <span>Interior Spaces</span>
              </a>

              {(onBookShowroom || onOpenBespoke) && (
                <button
                  onClick={onBookShowroom || onOpenBespoke}
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-transparent hover:bg-white/5 text-[#C5BDB5] hover:text-white text-xs tracking-wider uppercase transition-all"
                >
                  <span>{onOpenBespoke ? 'Bespoke Studio' : 'Book Atelier Fitting'}</span>
                  <ChevronRight className="w-4 h-4 text-[#A8A096]" />
                </button>
              )}
            </div>

            {/* Trust Metrics Strip */}
            <div className="pt-6 border-t border-[#2C2926] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#F5F2EB]">216+</div>
                <div className="text-[10px] text-[#A8A096] uppercase tracking-wider font-mono">Heirloom Works</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#E6AF73]">7 Spaces</div>
                <div className="text-[10px] text-[#A8A096] uppercase tracking-wider font-mono">Curated Living Zones</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#F5F2EB]">5 Years</div>
                <div className="text-[10px] text-[#A8A096] uppercase tracking-wider font-mono">UAE Structural Warranty</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Flagship Showcase Card */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Interactive Room Tab Switcher */}
            <div className="flex items-center p-1.5 rounded-2xl bg-[#1A1815] border border-[#332F2A] mb-6 shadow-xl w-full max-w-md">
              {heroItems.map((item, idx) => (
                <button
                  key={item?.id || idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium tracking-wide transition-all truncate text-center ${
                    activeTab === idx
                      ? 'bg-[#E6AF73]/20 border border-[#E6AF73]/40 text-[#E6AF73] font-semibold shadow-inner'
                      : 'text-[#A8A096] hover:text-white'
                  }`}
                >
                  {item?.room || `Icon 0${idx + 1}`}
                </button>
              ))}
            </div>

            {/* 3D Tilt Card */}
            {activeItem && (
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProductSelect(activeItem)}
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * -12}deg) rotateY(${mousePosition.x * 12}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="group relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#1C1A17]/90 via-[#151412]/95 to-[#0E0D0C]/95 border border-[#3A352F] p-6 sm:p-8 shadow-2xl shadow-black/90 cursor-pointer overflow-hidden backdrop-blur-2xl"
              >
                {/* Subtle Ambient Card Glow */}
                <div 
                  className="absolute -top-24 -right-24 w-64 h-64 bg-[#E6AF73]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E6AF73]/20 transition-colors" 
                />

                {/* Top Badge Strip */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#C5BDB5]">
                    {activeItem.material}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#E6AF73]/15 border border-[#E6AF73]/30 text-[11px] font-mono font-bold text-[#E6AF73]">
                    AED {activeItem.price.toLocaleString()}
                  </span>
                </div>

                {/* Large Architectural Photography Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-6 flex items-center justify-center p-2">
                  <img
                    src={activeItem.images[0]}
                    alt={activeItem.name}
                    className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-white/90 font-medium truncate">{activeItem.name}</span>
                    <span className="text-[#E6AF73] font-mono font-semibold ml-2 shrink-0">★ {activeItem.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F2EB] group-hover:text-[#E6AF73] transition-colors font-serif">
                    {activeItem.name}
                  </h3>
                  <p className="text-xs text-[#A8A096] line-clamp-2 leading-relaxed">
                    {activeItem.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-[#C5BDB5]">
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5">
                      📐 {activeItem.dimensions}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5">
                      ✨ {activeItem.finish}
                    </span>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-[#2C2926]">
                    <span className="text-[11px] text-[#E6AF73] flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E6AF73]"></span> {activeItem.availability}
                    </span>
                    <span className="text-xs font-semibold text-[#E6AF73] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Inspect Work Details →
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="text-[11px] text-[#7A746C] mt-3 font-mono">
              Hover to tilt • Click piece to open full atelier detail
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
