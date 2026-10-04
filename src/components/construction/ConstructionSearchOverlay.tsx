'use strict';
import React, { useState, useEffect } from 'react';
import { ConstructionScope, CONSTRUCTION_SCOPES_CATALOG } from '@/data/constructionCatalogData';
import { Search, X, Clock, ArrowRight, Ruler, Crown, MapPin } from 'lucide-react';

interface ConstructionSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScope: (scope: ConstructionScope) => void;
}

export const ConstructionSearchOverlay: React.FC<ConstructionSearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectScope
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? CONSTRUCTION_SCOPES_CATALOG.filter((s) => {
        const q = query.toLowerCase();
        return (
          s.title.toLowerCase().includes(q) ||
          s.categoryName.toLowerCase().includes(q) ||
          s.location.toLowerCase().includes(q) ||
          s.materials.some((m) => m.toLowerCase().includes(q))
        );
      }).slice(0, 8)
    : CONSTRUCTION_SCOPES_CATALOG.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-md">
      <div
        className="w-full max-w-2xl bg-neutral-950 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="relative border-b border-neutral-800 p-4 flex items-center">
          <Search className="w-5 h-5 text-amber-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search 160+ scopes, locations, materials (e.g. Palm Jumeirah, Calacatta, Penthouse)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-neutral-500 text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-2">
          <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold px-2 mb-2">
            {query.trim() ? `Search Results (${results.length})` : 'Featured Contracting Scopes'}
          </p>

          {results.map((scope) => (
            <div
              key={scope.id}
              onClick={() => {
                onClose();
                onSelectScope(scope);
              }}
              className="p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 hover:border-amber-500/40 flex items-center justify-between cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={scope.heroImage}
                  alt={scope.title}
                  className="w-12 h-12 rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-amber-400 truncate">
                    {scope.location.split(',')[0]} • {scope.categoryName}
                  </p>
                  <h4 className="text-xs font-serif font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    {scope.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] text-neutral-400 mt-0.5">
                    <span className="flex items-center gap-1">
                      <Ruler className="w-2.5 h-2.5 text-amber-400" />
                      {scope.buaSqFt.toLocaleString()} sqft
                    </span>
                    <span>{scope.timelineMonths}</span>
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0 pl-3">
                <span className="text-xs font-serif font-bold text-amber-400 block">
                  AED {scope.priceAED.toLocaleString()}
                </span>
                <span className="text-[10px] text-neutral-500 group-hover:text-amber-400 flex items-center justify-end gap-0.5 transition-colors">
                  View <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}

          {results.length === 0 && (
            <div className="text-center py-10 text-neutral-500 text-xs">
              No scopes found matching &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-neutral-900/80 border-t border-neutral-800 text-[11px] text-neutral-500 flex items-center justify-between px-4">
          <span>Press <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-300">ESC</kbd> to close</span>
          <span>160 Architectural Scopes Loaded</span>
        </div>
      </div>
    </div>
  );
};
