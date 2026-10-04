'use client';

import React, { useState } from 'react';
import { 
  Eye, 
  ShoppingBag, 
  Compass, 
  Maximize2, 
  Check, 
  ArrowRight,
  Layers,
  Crown
} from 'lucide-react';
import { FurnitureProduct, ALL_FURNITURE_PRODUCTS } from '@/data/furnitureData';

interface FormaInteriorExperienceProps {
  allProducts?: FurnitureProduct[];
  onSelectProduct: (product: FurnitureProduct) => void;
  onAddToCart?: (product: FurnitureProduct) => void;
  onViewRoom?: (roomId: string) => void;
}

const INTERIOR_SCENES = [
  {
    id: 'living',
    title: 'THE LIVING ROOM',
    subtitle: 'Designed for conversation.',
    concept: 'A harmonious sanctuary anchored in low-slung tactile seating, monolithic Roman travertine stone, and ambient light that breathes tranquility into the home.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      { x: '35%', y: '60%', productId: 'fur-sofa-01', label: 'Koto Curved Bouclé Sofa' },
      { x: '60%', y: '75%', productId: 'fur-tbl-01', label: 'Monolith Travertine Coffee Table' },
      { x: '82%', y: '50%', productId: 'fur-chair-01', label: 'Atelier Sculptural Armchair' }
    ]
  },
  {
    id: 'dining',
    title: 'THE DINING ROOM',
    subtitle: 'Designed for gathering.',
    concept: 'Natural bookmatched American walnut slabs and architectural saddle leather seating create an intimate stage for ceremony and enduring memories.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      { x: '45%', y: '55%', productId: 'fur-dtbl-01', label: 'Palazzo 10-Seater Solid Walnut Table' },
      { x: '25%', y: '68%', productId: 'fur-dchr-01', label: 'Tulia Sculptural Dining Chairs' },
      { x: '85%', y: '40%', productId: 'fur-sbd-01', label: 'Maison Fluted Walnut Sideboard' }
    ]
  },
  {
    id: 'bedroom',
    title: 'THE BEDROOM',
    subtitle: 'Designed for stillness.',
    concept: 'Restorative architecture defined by floating platform beds, soft acoustic velvet fluting, and subtle warm luminescence.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      { x: '50%', y: '55%', productId: 'fur-bed-01', label: 'Aurelia Floating Bouclé King Bed' },
      { x: '22%', y: '65%', productId: 'fur-nst-01', label: 'Veneer Single-Drawer Nightstand' },
      { x: '82%', y: '50%', productId: 'fur-dec-01', label: 'Alabaster Column Floor Lamp' }
    ]
  },
  {
    id: 'outdoor',
    title: 'THE SANCTUARY TERRACE',
    subtitle: 'Designed for retreat.',
    concept: 'Marine-grade Burmese teak and fiber concrete compositions tailored to celebrate open sea breezes and starry desert nights.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      { x: '40%', y: '60%', productId: 'fur-out-01', label: 'Amalfi Teak Outdoor 3-Seater Sofa' },
      { x: '75%', y: '68%', productId: 'fur-out-02', label: 'Riviera Double Sun Lounger' },
      { x: '18%', y: '50%', productId: 'fur-dec-03', label: 'Atlas Hand-Knotted Wool Rug' }
    ]
  }
];

export const FormaInteriorExperience: React.FC<FormaInteriorExperienceProps> = ({
  allProducts = ALL_FURNITURE_PRODUCTS,
  onSelectProduct,
  onAddToCart,
  onViewRoom
}) => {
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  const scene = INTERIOR_SCENES[activeSceneIdx];

  return (
    <section id="interiors" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#151412] border-t border-b border-[#2C2926] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2926] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6AF73]/10 border border-[#E6AF73]/20 text-[#E6AF73] text-xs font-mono tracking-widest uppercase mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Architectural Living Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F2EB] tracking-tight font-serif">
              Spaces <span className="italic text-[#E6AF73]">Shaped for Living</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8A096] mt-2 max-w-xl">
              Immerse yourself in our curated interior environments. Tap the architectural pins to inspect materials, dimensions, and craftsmanship.
            </p>
          </div>

          {/* Scene Selector Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#1D1B18] border border-[#38332E] overflow-x-auto custom-scrollbar">
            {INTERIOR_SCENES.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveSceneIdx(idx);
                  setSelectedHotspot(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium tracking-wider uppercase transition-all shrink-0 font-mono ${
                  activeSceneIdx === idx
                    ? 'bg-[#E6AF73] text-black font-bold shadow-lg shadow-[#E6AF73]/20'
                    : 'text-[#A8A096] hover:text-white hover:bg-white/5'
                }`}
              >
                0{idx + 1} • {sc.id}
              </button>
            ))}
          </div>
        </div>

        {/* Master Interactive Interior Canvas */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0C0B0A] border border-[#38332E] shadow-2xl">
          
          {/* Main Visual with Ambient Vignette */}
          <div className="relative aspect-[16/9] w-full overflow-hidden group">
            <img
              src={scene.image}
              alt={scene.title}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.02]"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Interactive Pins on the Scene */}
            {scene.hotspots.map((spot, i) => {
              const matchedProd = allProducts.find(p => p.id === spot.productId);
              const isSelected = selectedHotspot === spot.productId;

              return (
                <div
                  key={i}
                  style={{ top: spot.y, left: spot.x }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setSelectedHotspot(isSelected ? null : spot.productId)}
                    className="relative group/pin p-2"
                  >
                    <span className="absolute inset-0 rounded-full bg-[#E6AF73] animate-ping opacity-75"></span>
                    <span className="relative w-8 h-8 rounded-full bg-[#E6AF73] text-black font-bold font-mono text-xs flex items-center justify-center shadow-2xl border-2 border-[#151412] hover:scale-110 transition-transform">
                      +
                    </span>
                  </button>

                  {/* Pin Popup Card */}
                  {isSelected && matchedProd && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3.5 rounded-2xl bg-[#1A1815]/95 backdrop-blur-xl border border-[#E6AF73]/40 shadow-2xl z-30 animate-in fade-in slide-in-from-bottom-2">
                      <div className="text-[10px] font-mono text-[#E6AF73] uppercase">{matchedProd.material}</div>
                      <div className="text-xs font-bold text-[#F5F2EB] truncate mt-0.5">{matchedProd.name}</div>
                      <div className="text-xs font-mono font-bold text-[#E6AF73] mt-1">AED {matchedProd.price.toLocaleString()}</div>
                      
                      <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-[#2C2926]">
                        <button
                          onClick={() => onSelectProduct(matchedProd)}
                          className="py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-semibold uppercase"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onAddToCart && onAddToCart(matchedProd)}
                          className="py-1.5 rounded-lg bg-[#E6AF73] text-black text-[10px] font-bold uppercase hover:bg-[#D89F60]"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Scene Story Strip */}
          <div className="p-6 sm:p-10 bg-[#12110F] border-t border-[#2C2926] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-widest text-[#E6AF73] font-semibold">
                {scene.title}
              </div>
              <h3 className="text-2xl font-bold text-[#F5F2EB] font-serif">
                {scene.subtitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A096] leading-relaxed pt-1">
                {scene.concept}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#catalog"
                className="px-6 py-3.5 rounded-2xl bg-[#E6AF73] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#D89F60] transition-all shadow-lg flex items-center gap-2"
              >
                <span>Browse {scene.title} Collection</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
