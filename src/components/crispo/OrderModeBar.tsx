'use client';

import React from 'react';
import { MapPin, Search, ArrowRight, ArrowLeft, Car, User, Utensils } from 'lucide-react';
import { CRISPO_LOCATIONS } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface OrderModeBarProps {
  activeMode: 'Delivery' | 'Pickup' | 'DineIn';
  setActiveMode: (mode: 'Delivery' | 'Pickup' | 'DineIn') => void;
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  onStartOrder: () => void;
}

export const OrderModeBar: React.FC<OrderModeBarProps> = ({
  activeMode,
  setActiveMode,
  selectedLocation,
  setSelectedLocation,
  onStartOrder,
}) => {
  const { t, isRtl, translateLocation } = useCrispoLanguage();

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16">
      <div className="bg-[#1A1715] border border-stone-800 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        
        {/* Mode Selector */}
        <div className="lg:col-span-5 flex items-center bg-[#12100E] p-1.5 rounded-2xl border border-stone-800 font-mono text-xs font-bold">
          <button
            onClick={() => setActiveMode('Delivery')}
            className={`flex-1 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeMode === 'Delivery' ? 'bg-[#E63946] text-white shadow-md' : 'text-stone-400 hover:text-white'
            }`}
          >
            <span>🚗 {t('orderModeDelivery')}</span>
          </button>
          <button
            onClick={() => setActiveMode('Pickup')}
            className={`flex-1 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeMode === 'Pickup' ? 'bg-[#E63946] text-white shadow-md' : 'text-stone-400 hover:text-white'
            }`}
          >
            <span>🏃 {t('orderModePickup')}</span>
          </button>
          <button
            onClick={() => setActiveMode('DineIn')}
            className={`flex-1 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeMode === 'DineIn' ? 'bg-[#E63946] text-white shadow-md' : 'text-stone-400 hover:text-white'
            }`}
          >
            <span>🍽️ {t('orderModeDineIn')}</span>
          </button>
        </div>

        {/* Location Picker */}
        <div className="lg:col-span-4 p-3 rounded-2xl bg-[#12100E] border border-stone-800 font-mono text-xs">
          <label className="text-[10px] text-stone-400 uppercase block mb-1 font-bold">
            {isRtl ? 'اختر فرع مطعم كريسبو' : 'SELECT CRISPO RESTAURANT'}
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full bg-transparent text-[#FAF6EE] font-bold focus:outline-none font-sans"
          >
            {CRISPO_LOCATIONS.map((loc) => {
              const transLoc = translateLocation(loc);
              return (
                <option key={loc.id} value={loc.name} className="bg-[#12100E] text-white">
                  {transLoc.name} ({transLoc.deliveryTimeMins})
                </option>
              );
            })}
          </select>
        </div>

        {/* Start Order Button */}
        <div className="lg:col-span-3">
          <button
            onClick={onStartOrder}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FFC107] via-[#FFA000] to-[#FFB703] hover:from-[#e0a800] hover:to-[#e69000] text-black font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>{isRtl ? `ابدأ طلب ${t(`orderMode${activeMode}`)}` : `Start ${activeMode} Order`}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </div>
  );
};
