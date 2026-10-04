'use strict';
import React from 'react';
import { MarketingSolution, MARKETING_SOLUTIONS_CATALOG } from '@/data/marketingCatalogData';
import { X, Heart, Clock, Trash2, Zap, ArrowRight, TrendingUp } from 'lucide-react';

interface MarketingSavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onRemoveSave: (id: string) => void;
  onClearAll: () => void;
  onSelectSolution: (solution: MarketingSolution) => void;
  onBookSolution: (solution: MarketingSolution) => void;
}

export const MarketingSavedDrawer: React.FC<MarketingSavedDrawerProps> = ({
  isOpen,
  onClose,
  savedIds,
  onRemoveSave,
  onClearAll,
  onSelectSolution,
  onBookSolution
}) => {
  if (!isOpen) return null;

  const savedSolutions = MARKETING_SOLUTIONS_CATALOG.filter((s) => savedIds.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="w-full max-w-md h-full bg-neutral-950 border-l border-amber-500/30 flex flex-col justify-between overflow-y-auto text-neutral-200 shadow-2xl p-6 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="text-lg font-serif font-bold text-white">Saved Sprints ({savedSolutions.length})</h3>
          </div>

          <div className="flex items-center gap-2">
            {savedSolutions.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-neutral-400 hover:text-rose-400 p-1.5"
                title="Clear all saved"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex-1 py-6 overflow-y-auto space-y-4">
          {savedSolutions.length > 0 ? (
            savedSolutions.map((solution) => (
              <div
                key={solution.id}
                className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 flex gap-3.5 items-center group relative hover:border-amber-500/40 transition-all"
              >
                <img
                  src={solution.heroImage}
                  alt={solution.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectSolution(solution);
                  }}
                />

                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase font-bold text-amber-400 truncate">
                    {solution.industryFocus}
                  </p>
                  <h4
                    onClick={() => {
                      onClose();
                      onSelectSolution(solution);
                    }}
                    className="text-xs font-serif font-bold text-white truncate cursor-pointer hover:text-amber-300 transition-colors"
                  >
                    {solution.title}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs font-serif font-bold text-amber-400">
                      AED {solution.priceAED.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <TrendingUp className="w-2.5 h-2.5" />
                      {solution.projectedRoas}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => onRemoveSave(solution.id)}
                    className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors"
                    title="Remove from saved"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onBookSolution(solution);
                    }}
                    className="p-2 rounded-lg bg-amber-500 text-neutral-950 hover:bg-amber-400 transition-colors"
                    title="Deploy sprint"
                  >
                    <Zap className="w-3.5 h-3.5 fill-neutral-950" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-neutral-500">
              <Heart className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-serif text-neutral-400 mb-1">Your saved list is empty</p>
              <p className="text-xs">Browse our 160+ growth solutions and tap the heart icon to save.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {savedSolutions.length > 0 && (
          <div className="pt-4 border-t border-neutral-800">
            <button
              onClick={() => {
                onClose();
                onBookSolution(savedSolutions[0]);
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Deploy First Saved Sprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
