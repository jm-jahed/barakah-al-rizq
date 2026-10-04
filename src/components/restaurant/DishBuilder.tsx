'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, CheckCircle2, ShoppingBag } from 'lucide-react';
import { MenuItem } from '@/data/restaurantData';

interface DishBuilderProps {
  onAddToCart: (item: MenuItem) => void;
}

export const DishBuilder: React.FC<DishBuilderProps> = ({ onAddToCart }) => {
  const [base, setBase] = useState('Smoked Saffron Rice');
  const [protein, setProtein] = useState('Charred Wagyu Ribeye');
  const [sauce, setSauce] = useState('Lemon Tahini Emulsion');
  const [side, setSide] = useState('Flame-Grilled Vegetables');
  const [garnish, setGarnish] = useState('Khorasan Saffron Threads');

  const calculatePrice = () => {
    let p = 95;
    if (protein.includes('Wagyu')) p += 40;
    if (protein.includes('Sea Bass')) p += 30;
    if (garnish.includes('Gold')) p += 20;
    return p;
  };

  const handleAddCustomPlate = () => {
    const customItem: MenuItem = {
      id: `custom-${Date.now()}`,
      name: `Custom Plate: ${protein} & ${base}`,
      category: "Signature",
      description: `Custom open-fire arrangement featuring ${protein} served over ${base} with ${sauce}, ${side}, and garnished with ${garnish}.`,
      ingredients: [protein, base, sauce, side, garnish],
      dietary: ["Chef Special", "Halal"],
      price: calculatePrice(),
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
    };

    onAddToCart(customItem);
  };

  return (
    <section className="py-24 bg-[#0A0D14] border-b border-amber-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  CUSTOM WOOD-FIRE ARRANGEMENT
                </span>
                <h3 className="text-2xl font-bold text-white font-serif">Interactive Dish Builder</h3>
              </div>
            </div>

            <span className="text-xs font-mono text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full font-bold">
              Concept Dish Builder — Sample Customization
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Options Column */}
            <div className="lg:col-span-7 space-y-4">
              {/* Base */}
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                  01. Choose Culinary Base
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Smoked Saffron Rice', 'Roasted Eggplant Puree', 'Za\'atar Flatbread', 'Warm Quinoa & Lentils'].map((b) => (
                    <button
                      key={b}
                      onClick={() => setBase(b)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                        base === b
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Protein */}
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                  02. Choose Open-Fire Protein
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Charred Wagyu Ribeye', 'Milk-Fed Lamb Skewers', 'Pan-Seared Sea Bass', 'Grilled Halloumi'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setProtein(p)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                        protein === p
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sauce & Garnish */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">03. House Sauce</label>
                  <select
                    value={sauce}
                    onChange={(e) => setSauce(e.target.value)}
                    className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  >
                    <option value="Lemon Tahini Emulsion">Lemon Tahini Emulsion</option>
                    <option value="Pomegranate Molasses">Pomegranate Molasses</option>
                    <option value="Green Shatta Chili">Green Shatta Chili</option>
                    <option value="Garlic Toum">Garlic Toum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-300 mb-1">04. Finishing Garnish</label>
                  <select
                    value={garnish}
                    onChange={(e) => setGarnish(e.target.value)}
                    className="w-full bg-[#161D26] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  >
                    <option value="Khorasan Saffron Threads">Khorasan Saffron Threads</option>
                    <option value="Toasted Pine Nuts">Toasted Pine Nuts</option>
                    <option value="Fresh Pomegranate Arils">Fresh Pomegranate Arils</option>
                    <option value="24K Gold Leaf Dust">24K Gold Leaf Dust</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Custom Plate Preview */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#161D27] border border-amber-500/40 space-y-4 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  YOUR BESPOKE CREATION
                </span>
                <h4 className="text-xl font-bold text-white font-serif mt-1">{protein} Plate</h4>
                <div className="text-2xl font-extrabold text-amber-400 font-mono mt-1">
                  AED {calculatePrice()}
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 mt-3 text-xs font-mono text-gray-300 space-y-1">
                  <div>• Base: <strong className="text-white">{base}</strong></div>
                  <div>• Sauce: <strong className="text-amber-300">{sauce}</strong></div>
                  <div>• Garnish: <strong className="text-emerald-400">{garnish}</strong></div>
                </div>
              </div>

              <button
                onClick={handleAddCustomPlate}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Add Custom Plate to Order →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
