'use client';

import React, { useState } from 'react';
import { 
  Crown, 
  Layers, 
  Cpu, 
  Shield, 
  Volume2, 
  Eye, 
  Zap, 
  Maximize2, 
  ShoppingBag, 
  Check, 
  Sliders, 
  Activity,
  RotateCw,
  Compass
} from 'lucide-react';
import { GadgetProduct } from '@/data/consumerElectronicsData';

interface AetheraFlagshipShowcaseProps {
  onSelectProduct: (product: GadgetProduct) => void;
  onAddToCart: (product: GadgetProduct) => void;
  allProducts: GadgetProduct[];
}

const FLAGSHIP_SPOTLIGHTS = [
  {
    id: 'prod-fold-01',
    headline: 'The Tri-Fold Paradigm',
    subtitle: 'Zero-crease aerospace dual synchronised hinges transforming pocket form into 10.2-inch 3K OLED workspace.',
    accentColor: 'from-amber-400 to-orange-500',
    layers: [
      { name: 'Layer 1: 0.03mm Ultra-Thin Flexible Glass (UTG)', desc: 'Molecularly tempered glass substrate rated for 600,000 fold cycles with zero micro-fracturing.' },
      { name: 'Layer 2: Dual Tiangong MIM Titanium Hinges', desc: 'Precision CNC micro-gears with liquid metal damping for smooth fluid resistance at any angle.' },
      { name: 'Layer 3: Tandem Silicon-Carbon High Density Cells', desc: 'Dual-cell 6,000mAh array delivering 18 hours of continuous multi-window productivity.' }
    ],
    stats: [
      { label: 'Unfolded Display', val: '10.2" 3K OLED' },
      { label: 'Chassis Profile', val: '3.8mm Ultra-Thin' },
      { label: 'Fold Longevity', val: '600k Cycles' }
    ]
  },
  {
    id: 'prod-vr-01',
    headline: 'Spatial Computing Reality',
    subtitle: 'Dual 4K Micro-OLED displays delivering 64 pixels-per-degree optical clarity with sub-millimeter eye tracking.',
    accentColor: 'from-cyan-400 to-blue-500',
    layers: [
      { name: 'Layer 1: 3-Element Custom Pancake Optical Stack', desc: 'Eliminates chromatic aberration and distortion across 110-degree field of view.' },
      { name: 'Layer 2: Dual 1.3" Sony 4K Micro-OLED Panels', desc: '3,800 PPI density offering retina-grade resolution where virtual pixels dissolve.' },
      { name: 'Layer 3: 6-Camera Spatial Tracking & LiDAR Mesh', desc: 'Real-time room reconstruction in 4.8ms with zero positional drifting.' }
    ],
    stats: [
      { label: 'Pixel Density', val: '3,800 PPI' },
      { label: 'Tracking Latency', val: '4.8ms STAT' },
      { label: 'Field of View', val: '110° Spatial' }
    ]
  },
  {
    id: 'prod-hp-01',
    headline: 'Acoustic Absolute Masterpiece',
    subtitle: 'Hand-crafted open-back planar electrostatic headphones engineered with gold-etched 2-micron polyimide diaphragm.',
    accentColor: 'from-purple-400 to-pink-500',
    layers: [
      { name: 'Layer 1: Dual Push-Pull N52 Neodymium Arrays', desc: 'Creates perfectly symmetrical magnetic flux across the entire driver surface.' },
      { name: 'Layer 2: 2-Micron Gold-Vapor Diaphragm', desc: 'Sub-millisecond transient response yielding 0.038% total harmonic distortion.' },
      { name: 'Layer 3: Solid CNC Billet & Tuscan Leather', desc: 'Acoustically inert earcups trimmed with hand-stitched breathable lambskin.' }
    ],
    stats: [
      { label: 'Frequency Range', val: '5Hz – 52kHz' },
      { label: 'Total Harmonic Distortion', val: '< 0.038% THD' },
      { label: 'Driver Size', val: '50mm Planar' }
    ]
  }
];

export const AetheraFlagshipShowcase: React.FC<AetheraFlagshipShowcaseProps> = ({
  onSelectProduct,
  onAddToCart,
  allProducts
}) => {
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'360' | 'xray' | 'specs'>('xray');
  const [activeLayer, setActiveLayer] = useState(0);

  const currentSpotlight = FLAGSHIP_SPOTLIGHTS[activeSpotlightIdx];
  const matchedProduct = allProducts.find(p => p.id === currentSpotlight.id) || allProducts[0];

  return (
    <section id="showcase" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C10] border-t border-b border-white/5 overflow-hidden">
      
      {/* Dynamic Background Atmospheric Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span>Interactive Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
              The Living <span className="font-serif italic text-amber-300">Showcase</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-2 max-w-xl">
              Inspect the inner engineering, x-ray layer decomposition, and acoustic physics behind our flagship hardware instruments.
            </p>
          </div>

          {/* Flagship Selector Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 overflow-x-auto custom-scrollbar">
            {FLAGSHIP_SPOTLIGHTS.map((spot, idx) => (
              <button
                key={spot.id}
                onClick={() => {
                  setActiveSpotlightIdx(idx);
                  setActiveLayer(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all shrink-0 ${
                  activeSpotlightIdx === idx
                    ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-500/20'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                0{idx + 1} • {spot.headline.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Showcase Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Product Visual + Mode Controls */}
          <div className="lg:col-span-7 bg-[#0E1015] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-6 z-20 relative">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-mono text-white/80 uppercase">Live Telemetry & Diagnostics</span>
              </div>

              {/* Mode Buttons */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/50 border border-white/10 text-xs">
                <button
                  onClick={() => setViewMode('xray')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    viewMode === 'xray' ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" /> X-Ray Layers
                </button>
                <button
                  onClick={() => setViewMode('360')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    viewMode === '360' ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <RotateCw className="w-3.5 h-3.5" /> 360° Studio
                </button>
                <button
                  onClick={() => setViewMode('specs')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    viewMode === 'specs' ? 'bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" /> Benchmarks
                </button>
              </div>
            </div>

            {/* Central Visual Presentation */}
            <div className="relative aspect-[16/10] rounded-2xl bg-black/60 border border-white/5 flex items-center justify-center p-6 overflow-hidden">
              
              {/* Product Image */}
              <img
                src={matchedProduct?.images[0]}
                alt={matchedProduct?.name}
                className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:scale-105"
              />

              {/* X-Ray Overlays when in xray mode */}
              {viewMode === 'xray' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 p-4 flex flex-col justify-end">
                  <div className="p-3 rounded-xl bg-black/80 border border-amber-400/40 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2">
                    <div className="text-[11px] font-mono text-amber-400 font-semibold uppercase">
                      Active Sub-Assembly:
                    </div>
                    <div className="text-xs text-white font-medium">
                      {currentSpotlight.layers[activeLayer]?.name}
                    </div>
                    <div className="text-[11px] text-white/60 mt-0.5">
                      {currentSpotlight.layers[activeLayer]?.desc}
                    </div>
                  </div>
                </div>
              )}

              {/* 360 Degree Indicator */}
              {viewMode === '360' && (
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-[11px] font-mono text-white/90 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>360° Studio Orbit Active</span>
                </div>
              )}
            </div>

            {/* Bottom Layer Selector Switcher */}
            {viewMode === 'xray' && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {currentSpotlight.layers.map((layer, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveLayer(idx)}
                    className={`text-left p-2.5 rounded-xl text-[11px] transition-all border ${
                      activeLayer === idx
                        ? 'bg-amber-400/15 border-amber-400/50 text-amber-300 font-medium'
                        : 'bg-white/5 border-white/5 text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="font-mono text-[10px] text-amber-400/80 uppercase">Layer 0{idx + 1}</div>
                    <div className="truncate font-semibold text-white/90">{layer.name.split(':')[0]}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Engineering Breakdown & Instant Acquisition */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                {matchedProduct?.brand} • {matchedProduct?.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {currentSpotlight.headline}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {currentSpotlight.subtitle}
              </p>
            </div>

            {/* Highlight Metric Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              {currentSpotlight.stats.map((st, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-[10px] uppercase font-mono text-white/50">{st.label}</div>
                  <div className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">{st.val}</div>
                </div>
              ))}
            </div>

            {/* Pricing & Acquisition Strip */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-400/10 via-white/5 to-transparent border border-amber-400/20 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-mono">Official UAE Price</div>
                  <div className="text-2xl font-bold font-mono text-amber-300">
                    AED {matchedProduct?.price.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono font-medium">
                    ● UAE Stock Available
                  </span>
                  <div className="text-[10px] text-white/40 mt-1">2-Year Official VIP Warranty</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => onSelectProduct(matchedProduct)}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Inspect Specs</span>
                </button>

                <button
                  onClick={() => onAddToCart(matchedProduct)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02] flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
