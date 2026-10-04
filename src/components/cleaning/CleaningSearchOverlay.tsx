'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CleaningService } from '@/data/cleaningCatalogData';
import { CLEANING_CATEGORIES } from '@/data/cleaningData';
import { Search, X, Layers, Clock, ArrowUpRight } from 'lucide-react';

interface CleaningSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  services: CleaningService[];
  onSelectService: (s: CleaningService) => void;
  onSelectCategory: (catId: string) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const CleaningSearchOverlay: React.FC<CleaningSearchOverlayProps> = ({
  isOpen,
  onClose,
  services,
  onSelectService,
  onSelectCategory,
  currency
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

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

  const filtered = query.trim() === '' ? [] : services.filter((s) => {
    const q = query.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.categoryName.toLowerCase().includes(q) ||
      s.propertyType.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
    );
  }).slice(0, 8);

  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };
  const currentRate = rates[currency];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-zinc-950 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="flex items-center px-6 py-4 border-b border-zinc-800 bg-zinc-900/60">
          <Search className="w-5 h-5 text-emerald-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search 160+ cleaning protocols by keyword, surface, or property type..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded-lg bg-zinc-800 text-[10px] font-mono text-zinc-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-6 py-3 border-b border-zinc-900 bg-zinc-950/80 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="text-zinc-500 text-[10px] uppercase">Disciplines:</span>
          {CLEANING_CATEGORIES.slice(0, 4).map((c) => (
            <button
              key={c.id}
              onClick={() => {
                onSelectCategory(c.id);
                onClose();
                const el = document.getElementById('service-discovery');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-emerald-500/20 hover:text-emerald-300 border border-zinc-800 text-[11px] transition-colors"
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-zinc-500 text-xs font-mono">
              Type keywords or select a discipline chip above to initiate real-time search.
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 text-xs font-mono">
              No matching services found for "{query}". Try "Deep Clean", "Marble", or "AC Duct".
            </div>
          ) : (
            filtered.map((service) => {
              const convertedPrice = Math.round(service.priceAED * currentRate);
              return (
                <div
                  key={service.id}
                  onClick={() => {
                    onClose();
                    onSelectService(service);
                  }}
                  className="p-3 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 hover:border-emerald-500/40 flex items-center justify-between gap-4 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-emerald-400">
                        {service.categoryName}
                      </div>
                      <div className="text-xs sm:text-sm font-serif font-bold text-white truncate">
                        {service.title}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400">
                        {service.durationHours} Hours • {service.crewSize} Staff • {service.propertyType}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs sm:text-sm font-serif font-bold text-emerald-400">
                      {currency} {convertedPrice.toLocaleString()}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500">
                      {service.turnaroundSpeed}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
