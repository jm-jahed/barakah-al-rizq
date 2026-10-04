'use client';
import React from 'react';
import { X, Heart } from 'lucide-react';

export const PetWishlistDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 border-l border-emerald-500/30 w-full max-w-md h-full p-6 text-white flex flex-col justify-between shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h3 className="font-sans text-xl font-bold text-white flex items-center gap-2"><Heart className="w-5 h-5 text-rose-500" /> Wishlist</h3>
          <button onClick={onClose} className="p-2 rounded-full bg-slate-800"><X className="w-5 h-5" /></button>
        </div>
        <p className="text-xs text-slate-400 text-center py-8">Your saved products will appear here.</p>
      </div>
    </div>
  );
};
