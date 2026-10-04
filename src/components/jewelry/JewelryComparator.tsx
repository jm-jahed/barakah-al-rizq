import React from 'react';
import { X, SlidersHorizontal, Award, ShieldCheck, Gem } from 'lucide-react';
import { JewelryItem } from '@/data/jewelryCatalogData';

interface JewelryComparatorProps {
  items: JewelryItem[];
  onRemove: (itemId: string) => void;
  onClear: () => void;
  onClose: () => void;
  onAddToCart: (item: JewelryItem) => void;
}

export const JewelryComparator: React.FC<JewelryComparatorProps> = ({
  items,
  onRemove,
  onClear,
  onClose,
  onAddToCart
}) => {
  if (items.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/70 my-auto text-zinc-100 p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-amber-400">
              Gemological &amp; Horological Matrix
            </div>
            <h3 className="text-2xl font-serif font-bold text-zinc-100">
              Side-by-Side Sovereign Comparison
            </h3>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onClear}
              className="text-xs text-zinc-400 hover:text-amber-400 font-mono underline"
            >
              Clear All ({items.length})
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="mt-6 overflow-x-auto">
          <div className="min-w-[650px] grid grid-cols-4 gap-4">
            
            {/* Metric Labels */}
            <div className="space-y-6 pt-48 text-xs font-mono text-zinc-400">
              <div className="h-8 flex items-center border-b border-zinc-900">Precious Metal</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Primary Gemstone</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Carat Weight</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Certification</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Gold Weight</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Dimensions</div>
              <div className="h-8 flex items-center border-b border-zinc-900">Price (AED)</div>
            </div>

            {/* Items Columns */}
            {items.map(item => (
              <div key={item.id} className="space-y-6">
                
                {/* Item Card Head */}
                <div className="relative h-44 rounded-2xl overflow-hidden bg-black border border-zinc-800 p-2 flex flex-col justify-between">
                  <img
                    src={item.heroImage}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  <div className="relative z-10 flex justify-end">
                    <button
                      onClick={() => onRemove(item.id)}
                      className="p-1 rounded-full bg-black/80 text-zinc-400 hover:text-white border border-zinc-700"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="relative z-10 bg-black/80 p-2 rounded-xl border border-white/10">
                    <span className="text-[10px] font-mono text-amber-400 block truncate">{item.disciplineName}</span>
                    <h4 className="text-xs font-serif font-bold text-white truncate">{item.title}</h4>
                  </div>
                </div>

                {/* Spec Rows */}
                <div className="space-y-6 text-xs font-mono">
                  <div className="h-8 flex items-center border-b border-zinc-900 text-zinc-200 truncate">{item.material}</div>
                  <div className="h-8 flex items-center border-b border-zinc-900 text-zinc-200">{item.gemstone}</div>
                  <div className="h-8 flex items-center border-b border-zinc-900 text-amber-300 font-bold">{item.caratWeight}</div>
                  <div className="h-8 flex items-center border-b border-zinc-900 text-zinc-300 text-[11px] truncate">{item.certificationLab}</div>
                  <div className="h-8 flex items-center border-b border-zinc-900 text-zinc-300">{item.weightGrams}</div>
                  <div className="h-8 flex items-center border-b border-zinc-900 text-zinc-300 text-[10px] truncate">{item.dimensions}</div>
                  <div className="h-8 flex items-center border-b border-zinc-900 text-amber-400 font-bold text-sm">
                    AED {item.priceAED.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Acquire Piece
                </button>
              </div>
            ))}

            {/* Empty Placeholders */}
            {Array.from({ length: 3 - items.length }).map((_, idx) => (
              <div
                key={idx}
                className="h-full rounded-2xl border border-dashed border-zinc-800 flex flex-col items-center justify-center p-6 text-center text-zinc-600 font-mono text-xs"
              >
                <Gem className="w-8 h-8 mb-2 opacity-40" />
                <span>Select another creation to compare gemological parameters</span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};
