'use strict';
import React from 'react';
import { MaintenanceScope, MAINTENANCE_SCOPES_CATALOG } from '@/data/maintenanceCatalogData';
import { X, Heart, Clock, Trash2, Truck, ArrowRight, Wrench } from 'lucide-react';

interface MaintenanceSavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onRemoveSave: (id: string) => void;
  onClearAll: () => void;
  onSelectScope: (scope: MaintenanceScope) => void;
  onBookScope: (scope: MaintenanceScope) => void;
}

export const MaintenanceSavedDrawer: React.FC<MaintenanceSavedDrawerProps> = ({
  isOpen,
  onClose,
  savedIds,
  onRemoveSave,
  onClearAll,
  onSelectScope,
  onBookScope
}) => {
  if (!isOpen) return null;

  const savedScopes = MAINTENANCE_SCOPES_CATALOG.filter((s) => savedIds.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="w-full max-w-md h-full bg-neutral-950 border-l border-emerald-500/30 flex flex-col justify-between overflow-y-auto text-neutral-200 shadow-2xl p-6 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="text-lg font-serif font-bold text-white">Saved Services ({savedScopes.length})</h3>
          </div>

          <div className="flex items-center gap-2">
            {savedScopes.length > 0 && (
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
          {savedScopes.length > 0 ? (
            savedScopes.map((scope) => (
              <div
                key={scope.id}
                className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 flex gap-3.5 items-center group relative hover:border-emerald-500/40 transition-all"
              >
                <img
                  src={scope.heroImage}
                  alt={scope.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectScope(scope);
                  }}
                />

                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase font-bold text-emerald-400 truncate">
                    {scope.communityTarget.split(' ')[0]}
                  </p>
                  <h4
                    onClick={() => {
                      onClose();
                      onSelectScope(scope);
                    }}
                    className="text-xs font-serif font-bold text-white truncate cursor-pointer hover:text-emerald-300 transition-colors"
                  >
                    {scope.title}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs font-serif font-bold text-emerald-400">
                      AED {scope.priceAED.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-neutral-400 flex items-center gap-1 font-mono">
                      <Truck className="w-2.5 h-2.5 text-emerald-400" />
                      {scope.responseTime.split(' ')[0]}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => onRemoveSave(scope.id)}
                    className="p-1.5 text-neutral-500 hover:text-rose-400 transition-colors"
                    title="Remove from saved"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onBookScope(scope);
                    }}
                    className="p-2 rounded-lg bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-colors"
                    title="Dispatch van"
                  >
                    <Truck className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-neutral-500">
              <Heart className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-serif text-neutral-400 mb-1">Your saved list is empty</p>
              <p className="text-xs">Browse our 160+ maintenance services and tap the heart icon to save.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {savedScopes.length > 0 && (
          <div className="pt-4 border-t border-neutral-800">
            <button
              onClick={() => {
                onClose();
                onBookScope(savedScopes[0]);
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-neutral-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Dispatch First Saved Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
