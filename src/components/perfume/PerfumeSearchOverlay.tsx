import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Search, X, Clock, Droplets, ArrowRight, Crown } from 'lucide-react';
import { PERFUME_CATALOG, PerfumeItem } from '@/data/perfumeCatalogData';

interface PerfumeSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPerfume: (perfume: PerfumeItem) => void;
}

export const PerfumeSearchOverlay: React.FC<PerfumeSearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectPerfume
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = query.trim()
    ? PERFUME_CATALOG.filter(p => {
        const q = query.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.scentProfile.toLowerCase().includes(q) ||
          p.masterPerfumer.name.toLowerCase().includes(q) ||
          Object.values(p.pyramid).flat().some(n => n.toLowerCase().includes(q))
        );
      }).slice(0, 8)
    : PERFUME_CATALOG.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-zinc-950 border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl shadow-amber-950/70 text-zinc-100 z-10">
        
        {/* Search Bar */}
        <div className="relative flex items-center p-4 border-b border-zinc-800">
          <Search className="w-5 h-5 text-amber-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 160 perfumes by oud, amber, frankincense, perfumer, notes..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-zinc-400 hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-[11px] font-mono text-zinc-400 hover:text-white bg-zinc-900 rounded border border-zinc-700"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-2 divide-y divide-zinc-900">
          <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 px-3 py-1">
            {query.trim() ? `Found ${results.length} Matches` : 'Curated Royal Distillations'}
          </div>

          {results.map(p => (
            <div
              key={p.id}
              onClick={() => {
                onClose();
                onSelectPerfume(p);
              }}
              className="group flex items-center justify-between p-3 rounded-xl hover:bg-zinc-900/90 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="relative h-12 w-12 rounded-lg overflow-hidden shrink-0 bg-zinc-900">
                  <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-serif font-bold text-zinc-100 group-hover:text-amber-300 transition-colors truncate">
                    {p.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-400 mt-0.5">
                    <span className="text-amber-400">{p.concentration}</span>
                    <span>•</span>
                    <span>{p.bottleVolume}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 text-right">
                <div>
                  <div className="text-xs font-serif font-bold text-amber-300">
                    AED {p.priceAED.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono">
                    {p.longevityHours}h Longevity
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}

          {results.length === 0 && (
            <div className="py-12 text-center text-zinc-500">
              <Droplets className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <div className="text-xs">No matching fragrance flacons found.</div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-zinc-900/50 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
          <span>OUD ROYALE DUBAI & PARIS • 160 HAUTE EXTRAITS</span>
          <span>PRESS ESC TO CLOSE</span>
        </div>

      </div>
    </div>
  );
};
