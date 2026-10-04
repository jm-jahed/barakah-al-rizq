'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Zap, ArrowRight, Star, Layers, Tag } from 'lucide-react';
import { GadgetProduct, GADGET_CATEGORIES } from '@/data/consumerElectronicsData';

interface AetheraSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  allProducts: GadgetProduct[];
  onSelectProduct: (product: GadgetProduct) => void;
  onSelectCategory: (categoryName: string) => void;
}

const TRENDING_TAGS = [
  'Titanium 5G',
  'Planar Magnetic',
  'Spatial AR Glasses',
  'GaN 240W',
  'E-Ink Paper Slate',
  'QD-OLED 240Hz',
  'Medium Format Camera',
  'CNC Mechanical Keyboard'
];

export const AetheraSearchOverlay: React.FC<AetheraSearchOverlayProps> = ({
  isOpen,
  onClose,
  allProducts,
  onSelectProduct,
  onSelectCategory
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search matching
  const matchingProducts = query.trim()
    ? allProducts.filter(p => {
        const q = query.toLowerCase().trim();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
        );
      }).slice(0, 8)
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex flex-col items-center p-4 sm:p-6 md:p-12 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Top Bar with Close */}
      <div className="w-full max-w-4xl flex items-center justify-between pb-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest">
          <Zap className="w-4 h-4" />
          <span>AETHERA Instant Telemetry Search</span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Search Input */}
      <div className="w-full max-w-4xl pt-8 space-y-8">
        
        <div className="relative">
          <Search className="w-6 h-6 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by instrument, ecosystem, brand, or spec..."
            className="w-full bg-[#0E1015] border border-white/15 focus:border-amber-400 rounded-3xl pl-14 pr-12 py-5 text-base sm:text-xl text-white placeholder:text-white/30 focus:outline-none shadow-2xl transition-all font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Trending Searches */}
        {!query && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-white/50 uppercase tracking-wider">Trending Inquiries:</span>
              <div className="flex flex-wrap gap-2">
                {TRENDING_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/40 text-xs text-white/80 hover:text-amber-300 transition-all font-mono"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Categories Shortcut */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-white/50 uppercase tracking-wider">Explore Ecosystems:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {GADGET_CATEGORIES.slice(0, 8).map(c => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectCategory(c.name);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-left text-xs text-white group transition-all"
                  >
                    <div className="font-semibold group-hover:text-amber-300">{c.name}</div>
                    <div className="text-[10px] text-white/40 font-mono mt-0.5">{c.count} Gadgets</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="space-y-4">
            <div className="text-xs font-mono text-white/50 uppercase flex items-center justify-between">
              <span>Matching Instruments ({matchingProducts.length})</span>
              <span>Direct Telemetry Match</span>
            </div>

            {matchingProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingProducts.map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="p-3.5 rounded-2xl bg-[#0E1015] border border-white/10 hover:border-amber-400/40 flex items-center gap-3.5 cursor-pointer group transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-black/60 p-1.5 shrink-0 overflow-hidden">
                      <img src={prod.images[0]} alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono text-white/40 uppercase truncate">{prod.brand} • {prod.category}</div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate">{prod.name}</div>
                      <div className="text-xs font-mono font-bold text-amber-400 mt-0.5">AED {prod.price.toLocaleString()}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-2">
                <p className="text-sm text-white/70">No instruments match &quot;{query}&quot;</p>
                <p className="text-xs text-white/40">Try searching for broader keywords like &quot;Titanium&quot;, &quot;Audio&quot;, or &quot;Camera&quot;.</p>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
