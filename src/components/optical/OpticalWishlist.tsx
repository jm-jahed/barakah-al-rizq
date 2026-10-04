'use client';
import React from 'react';
import { X, Heart, Trash2 } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/opticalData';

export const OpticalWishlist: React.FC<{ isOpen: boolean; wishlistIds: string[]; onClose: () => void; onToggle: (id: string) => void }> = ({ isOpen, wishlistIds, onClose, onToggle }) => {
  if (!isOpen) return null;

  const wishedItems = PRODUCTS_DATA.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 border-l border-sky-500/30 w-full max-w-md h-full p-6 text-white flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h3 className="font-sans text-xl font-bold text-white flex items-center gap-2"><Heart className="w-5 h-5 text-rose-500" /> Wishlist ({wishedItems.length})</h3>
            <button onClick={onClose} className="p-2 rounded-full bg-slate-800"><X className="w-5 h-5" /></button>
          </div>

          <div className="space-y-4 py-6 max-h-[70vh] overflow-y-auto">
            {wishedItems.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-8">Your wishlist is empty.</p>
            ) : (
              wishedItems.map(item => (
                <div key={item.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-xl" />
                    <div>
                      <h4 className="font-sans font-bold text-xs text-white">{item.name}</h4>
                      <span className="text-xs font-mono text-sky-300">AED {item.price}</span>
                    </div>
                  </div>
                  <button onClick={() => onToggle(item.id)} className="p-2 text-slate-400 hover:text-rose-400"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
