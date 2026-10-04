'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronLeft, ChevronRight, Maximize2, Users, Bed, Eye, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { RoomType } from '@/data/hotelData';

interface RoomDetailModalProps {
  room: RoomType | null;
  onClose: () => void;
  onBookRoom: (room: RoomType) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose, onBookRoom }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  if (!room) return null;

  const images = room.galleryImages && room.galleryImages.length > 0 ? room.galleryImages : [room.image];

  const handleNext = () => {
    setCurrentImgIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#29221D] border border-stone-800 rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto font-sans text-stone-100"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Media Gallery Slider */}
        <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[400px] mb-8 bg-[#1C1917]">
          <img
            src={images[currentImgIdx]}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#29221D] via-transparent to-transparent" />

          {images.length > 1 && (
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-black/60 text-white pointer-events-auto hover:bg-black transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-black/60 text-white pointer-events-auto hover:bg-black transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono text-stone-300 border border-white/10">
            {currentImgIdx + 1} / {images.length} • Sanctuary Suite
          </div>
        </div>

        {/* Room Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-stone-800 mb-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest block mb-1">
              PALACE RESIDENCE #{room.code} • {room.floor || 'Executive Level'}
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#F7F4EE]">{room.name}</h3>
            <p className="text-xs font-mono text-stone-400 mt-1">View: {room.view}</p>
          </div>

          <div className="text-left sm:text-right font-mono">
            <span className="text-xs text-stone-400 block">EXCLUSIVE PALACE RATE</span>
            <span className="text-2xl font-bold text-[#C5A059]">AED {room.pricePerNightAED.toLocaleString()}</span>
            <span className="text-[10px] text-stone-400 block">/ Night (AED currency)</span>
          </div>
        </div>

        {/* Room Description & Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 font-mono text-xs">
          <div className="p-4 rounded-xl bg-[#1C1917] border border-stone-800">
            <span className="text-stone-400 text-[10px] uppercase block mb-1">RESIDENCE SIZE</span>
            <span className="text-[#F7F4EE] font-bold text-sm">{room.sizeSqM} m² Private Sanctuary</span>
          </div>
          <div className="p-4 rounded-xl bg-[#1C1917] border border-stone-800">
            <span className="text-stone-400 text-[10px] uppercase block mb-1">BED CONFIGURATION</span>
            <span className="text-[#F7F4EE] font-bold text-sm">{room.bedType}</span>
          </div>
          <div className="p-4 rounded-xl bg-[#1C1917] border border-stone-800">
            <span className="text-stone-400 text-[10px] uppercase block mb-1">OCCUPANCY</span>
            <span className="text-[#F7F4EE] font-bold text-sm">Up to {room.maxGuests} Guests</span>
          </div>
        </div>

        <p className="text-sm text-stone-300 font-light leading-relaxed mb-8">
          {room.description}
        </p>

        {/* Amenities Grid */}
        <h4 className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest mb-4">
          INCLUDED PALACE AMENITIES & COMPLIMENTARY SERVICES
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {room.amenities.map((amenity) => (
            <div key={amenity} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#1C1917] border border-stone-800 text-xs text-stone-200 font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        {/* Direct Booking Inclusions Badge */}
        <div className="p-4 rounded-2xl bg-[#12100E] border border-[#C5A059]/30 mb-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>24/7 Dedicated Butler + Daily Champagne Breakfast included</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>Complimentary Rolls-Royce airport transfers</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between pt-6 border-t border-stone-800">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-serif"
          >
            Close Details
          </button>

          <button
            onClick={() => {
              onClose();
              onBookRoom(room);
            }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b38e47] text-black font-bold text-xs flex items-center gap-2 shadow-lg hover:scale-[1.02] transition-transform"
          >
            <span>Reserve {room.name} (AED {room.pricePerNightAED.toLocaleString()})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
