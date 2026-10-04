'use strict';
import React from 'react';
import { ConstructionScope, CONSTRUCTION_SCOPES_CATALOG } from '@/data/constructionCatalogData';
import { X, Clock, Crown, ShieldCheck, Check, Trash2, Ruler, MapPin, Compass } from 'lucide-react';

interface ConstructionComparatorProps {
  comparedIds: string[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  onBook: (scope: ConstructionScope) => void;
}

export const ConstructionComparator: React.FC<ConstructionComparatorProps> = ({
  comparedIds,
  onClose,
  onRemove,
  onClear,
  onBook
}) => {
  const items = CONSTRUCTION_SCOPES_CATALOG.filter((s) => comparedIds.includes(s.id));

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-5xl bg-neutral-950 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl p-6 text-neutral-200 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white">Contracting Scope Side-by-Side Comparator</h3>
              <p className="text-xs text-neutral-400">Comparing {items.length} selected architectural scopes</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClear}
              className="text-xs text-neutral-400 hover:text-rose-400 px-3 py-1.5 rounded-lg border border-neutral-800 hover:border-rose-500/30 transition-all flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="flex-1 overflow-x-auto py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-[650px]">
            {items.map((scope) => (
              <div
                key={scope.id}
                className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Image & Remove */}
                  <div className="relative h-40 rounded-xl overflow-hidden mb-4 bg-neutral-950">
                    <img
                      src={scope.heroImage}
                      alt={scope.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => onRemove(scope.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-neutral-950/80 text-neutral-400 hover:text-rose-400 border border-neutral-700"
                      title="Remove from comparator"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-neutral-950/80 text-[10px] text-amber-300 font-medium">
                      {scope.location.split(',')[0]}
                    </span>
                  </div>

                  <p className="text-[10px] uppercase font-semibold text-amber-400 mb-1">
                    {scope.categoryName}
                  </p>
                  <h4 className="text-base font-serif font-bold text-white mb-2 line-clamp-2">
                    {scope.title}
                  </h4>

                  {/* Attributes */}
                  <div className="space-y-2 text-xs border-t border-neutral-800 pt-3 mb-4">
                    <div className="flex justify-between text-neutral-300">
                      <span className="text-neutral-500">Built-Up Area:</span>
                      <span className="font-medium text-white flex items-center gap-1">
                        <Ruler className="w-3 h-3 text-amber-400" />
                        {scope.buaSqFt.toLocaleString()} sq ft
                      </span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span className="text-neutral-500">Rate / sq ft:</span>
                      <span className="font-medium text-amber-300 font-mono">
                        AED {scope.pricePerSqFtAED} / sq ft
                      </span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span className="text-neutral-500">Timeline:</span>
                      <span className="font-medium text-white flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {scope.timelineMonths}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="border-t border-neutral-800 pt-3 mb-4">
                    <p className="text-[10px] uppercase font-semibold text-neutral-500 mb-2">Key Deliverables</p>
                    <ul className="space-y-1 text-xs text-neutral-300">
                      {scope.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                          <span className="truncate">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-neutral-500">Contract Value:</span>
                    <span className="text-xl font-serif font-bold text-amber-400">
                      AED {scope.priceAED.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onBook(scope);
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Book Site Survey</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
