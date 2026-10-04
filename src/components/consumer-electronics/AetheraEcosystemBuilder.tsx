'use client';

import React, { useState } from 'react';
import { 
  Crown, 
  Layers, 
  ShoppingBag, 
  Check, 
  Plus, 
  X, 
  Cpu, 
  Monitor, 
  Volume2, 
  Zap, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { GadgetProduct, ECOSYSTEM_KITS } from '@/data/consumerElectronicsData';

interface AetheraEcosystemBuilderProps {
  allProducts: GadgetProduct[];
  onAddMultipleToCart: (products: GadgetProduct[]) => void;
  onSelectProduct: (product: GadgetProduct) => void;
}

export const AetheraEcosystemBuilder: React.FC<AetheraEcosystemBuilderProps> = ({
  allProducts,
  onAddMultipleToCart,
  onSelectProduct
}) => {
  const [activeKitIdx, setActiveKitIdx] = useState(0);
  const [builderSlot1, setBuilderSlot1] = useState<string>('prod-mon-01');
  const [builderSlot2, setBuilderSlot2] = useState<string>('prod-kb-01');
  const [builderSlot3, setBuilderSlot3] = useState<string>('prod-hp-01');
  const [builderSlot4, setBuilderSlot4] = useState<string>('prod-chg-01');
  const [addedKitToast, setAddedKitToast] = useState(false);

  const currentKit = ECOSYSTEM_KITS[activeKitIdx];
  const kitProducts = (currentKit?.productIds || [])
    .map(id => allProducts.find(p => p.id === id))
    .filter(Boolean) as GadgetProduct[];

  // Custom items
  const customProducts = [
    allProducts.find(p => p.id === builderSlot1),
    allProducts.find(p => p.id === builderSlot2),
    allProducts.find(p => p.id === builderSlot3),
    allProducts.find(p => p.id === builderSlot4),
  ].filter(Boolean) as GadgetProduct[];

  const customRawTotal = customProducts.reduce((sum, p) => sum + p.price, 0);
  const customBundleSavings = Math.round(customRawTotal * 0.12);
  const customFinalTotal = customRawTotal - customBundleSavings;

  const handleAddCurrentKit = () => {
    onAddMultipleToCart(kitProducts);
    setAddedKitToast(true);
    setTimeout(() => setAddedKitToast(false), 2000);
  };

  const handleAddCustomBundle = () => {
    onAddMultipleToCart(customProducts);
    setAddedKitToast(true);
    setTimeout(() => setAddedKitToast(false), 2000);
  };

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0C10] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span>Intelligent Rig Architect</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
              The <span className="font-serif italic text-amber-300">Ecosystem</span> Builder
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-2 max-w-xl">
              Compose complete hardware workstations, audio listening chambers, and creator rigs with unified single-cable architecture and bundle savings in AED.
            </p>
          </div>

          {/* Preset Kits Switcher */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 overflow-x-auto custom-scrollbar">
            {ECOSYSTEM_KITS.map((kit, idx) => (
              <button
                key={kit.id}
                onClick={() => setActiveKitIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all shrink-0 ${
                  activeKitIdx === idx
                    ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-500/20'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {kit.name.split(' ')[0]} Suite
              </button>
            ))}
          </div>
        </div>

        {/* Master Preset Showcase */}
        {currentKit && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0E1015] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            
            {/* Left: Kit Visual & Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-widest">
                  {currentKit.targetUser}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {currentKit.name}
                </h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  {currentKit.description}
                </p>
              </div>

              {/* Kit Highlights */}
              <div className="space-y-2">
                {currentKit.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/80 bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Pricing & 1-Click Action */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-400/15 to-transparent border border-amber-400/30 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">Ecosystem Total (AED)</div>
                    <div className="text-2xl font-bold font-mono text-amber-300">
                      AED {currentKit.basePrice.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-400 font-mono text-xs font-bold">
                      Save AED {currentKit.savings.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleAddCurrentKit}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold text-xs uppercase tracking-wider hover:scale-[1.01] transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Full Ecosystem to Bag ({kitProducts.length} Instruments)</span>
                </button>
              </div>
            </div>

            {/* Right: Included Instruments Grid (7 cols) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {kitProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => onSelectProduct(prod)}
                    className="p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-400/40 cursor-pointer group transition-all"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden bg-black/60 mb-3 p-3 flex items-center justify-center">
                      <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="text-[10px] font-mono text-white/40 uppercase truncate">{prod.brand}</div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate">{prod.name}</div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-xs font-mono">
                      <span className="text-amber-300 font-bold">AED {prod.price.toLocaleString()}</span>
                      <span className="text-white/40 text-[10px] group-hover:text-white">Inspect →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
