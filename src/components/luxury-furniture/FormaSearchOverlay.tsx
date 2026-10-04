'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  ArrowRight, 
  Crown, 
  SlidersHorizontal,
  Armchair,
  ShoppingBag,
  Heart
} from 'lucide-react';
import Image from 'next/image';
import { FurnitureProduct } from '@/data/furnitureData';

interface FormaSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  products: FurnitureProduct[];
  onSelectProduct: (product: FurnitureProduct) => void;
  onAddToCart: (product: FurnitureProduct) => void;
  wishlistIds?: string[];
  onToggleWishlist?: (product: FurnitureProduct) => void;
}

const POPULAR_SEARCHES = [
  'Roman Travertine',
  'Bouclé Modular Sofa',
  'Solid American Walnut',
  'Calacatta Viola Table',
  'Minimalist Floating Bed',
  'Executive Leather Desk',
  'Burmese Teak Outdoor',
  'Brushed Champagne Brass'
];

export const FormaSearchOverlay: React.FC<FormaSearchOverlayProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onAddToCart,
  wishlistIds = [],
  onToggleWishlist
}) => {
  const [query, setQuery] = useState('');
  const [selectedRoom, setSelectedRoom] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
      setSelectedRoom('all');
    }
  }, [isOpen]);

  // Filter products
  const searchResults = query.trim() === '' 
    ? [] 
    : products.filter((p: FurnitureProduct) => {
        const matchesQuery = 
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.room.toLowerCase().includes(query.toLowerCase()) ||
          p.material.toLowerCase().includes(query.toLowerCase()) ||
          p.collection.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
        
        const matchesRoom = selectedRoom === 'all' || p.room.toLowerCase() === selectedRoom.toLowerCase();

        return matchesQuery && matchesRoom;
      });

  const rooms = ['all', 'Living Room', 'Dining Room', 'Bedroom', 'Home Office', 'Outdoor & Terrace', 'Lighting & Objects'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F0D0C]/90 backdrop-blur-xl"
          />

          {/* Search Container */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-24 h-full flex flex-col"
          >
            {/* Top Bar with Input */}
            <div className="relative border-b border-stone-800 pb-4">
              <div className="flex items-center gap-4">
                <Search className="w-6 h-6 text-[#C9A97A] flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search 200+ luxury furniture works, materials, rooms..."
                  className="w-full bg-transparent text-xl md:text-2xl font-serif text-white placeholder-stone-400 focus:outline-none tracking-wide"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="p-1 text-stone-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 rounded-sm border border-stone-800 text-xs uppercase tracking-wider text-stone-400 hover:text-white hover:border-stone-700 transition-colors"
                >
                  ESC
                </button>
              </div>

              {/* Room Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pt-4 no-scrollbar">
                <span className="text-[11px] uppercase tracking-widest text-stone-400 mr-2 flex-shrink-0">
                  Filter:
                </span>
                {rooms.map((room) => (
                  <button
                    key={room}
                    onClick={() => setSelectedRoom(room)}
                    className={`px-3 py-1 rounded-full text-xs transition-colors whitespace-nowrap ${
                      selectedRoom === room
                        ? 'bg-[#9E7A52] text-white'
                        : 'bg-stone-900/80 text-stone-400 hover:text-stone-200 border border-stone-800'
                    }`}
                  >
                    {room === 'all' ? 'All Rooms' : room}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto mt-6 pr-2 space-y-8">
              {query.trim() === '' ? (
                /* Initial State: Popular Searches & Categories */
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2">
                      <Crown className="w-3.5 h-3.5 text-[#C9A97A]" />
                      Popular Inquiries
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {POPULAR_SEARCHES.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-3.5 py-1.5 bg-[#171412] hover:bg-[#201C18] border border-stone-800/80 hover:border-[#9E7A52]/50 rounded-sm text-xs text-stone-300 hover:text-white transition-all duration-200"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-stone-400 mb-4">
                      Featured Atelier Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {products.slice(0, 3).map((p: FurnitureProduct) => (
                        <div
                          key={p.id}
                          onClick={() => {
                            onSelectProduct(p);
                            onClose();
                          }}
                          className="group relative bg-[#141210] border border-stone-800/80 hover:border-[#9E7A52]/60 rounded-sm overflow-hidden p-3 cursor-pointer transition-all duration-300"
                        >
                          <div className="relative h-36 w-full rounded-sm overflow-hidden bg-stone-900 mb-3">
                            <Image
                              src={p.images[0]}
                              alt={p.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 300px"
                            />
                          </div>
                          <span className="text-[10px] uppercase tracking-wider text-[#C9A97A] font-medium block">
                            {p.room}
                          </span>
                          <h4 className="text-sm font-serif font-light text-white truncate group-hover:text-[#C9A97A] transition-colors">
                            {p.name}
                          </h4>
                          <p className="text-xs font-sans text-stone-400 mt-1">
                            AED {p.price.toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                /* Empty Results State */
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mx-auto text-stone-500">
                    <Search className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-serif text-white">No curated works match &quot;{query}&quot;</h3>
                  <p className="text-xs text-stone-400 max-w-sm mx-auto">
                    Try searching for materials like &quot;Travertine&quot;, &quot;Walnut&quot;, or room collections like &quot;Living Room&quot;.
                  </p>
                  <button
                    onClick={() => setQuery('')}
                    className="mt-2 text-xs uppercase tracking-wider text-[#C9A97A] hover:underline"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                /* Search Results Grid */
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-stone-400 uppercase tracking-wider">
                      Found <strong className="text-white">{searchResults.length}</strong> design works
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {searchResults.map((product: FurnitureProduct) => {
                      const isWishlisted = wishlistIds.includes(product.id);
                      return (
                        <div
                          key={product.id}
                          className="group relative bg-[#141210] border border-stone-800/80 hover:border-[#9E7A52]/60 rounded-sm overflow-hidden flex flex-col transition-all duration-300"
                        >
                          {/* Image */}
                          <div 
                            onClick={() => {
                              onSelectProduct(product);
                              onClose();
                            }}
                            className="relative h-44 w-full bg-stone-900 overflow-hidden cursor-pointer"
                          >
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 300px"
                            />
                            {product.badge && (
                              <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#0F0D0C]/80 backdrop-blur-md border border-stone-700 text-[10px] text-[#C9A97A] uppercase tracking-wider font-medium">
                                {product.badge}
                              </span>
                            )}
                            {onToggleWishlist && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onToggleWishlist(product);
                                }}
                                className="absolute top-2 right-2 p-1.5 rounded-full bg-stone-900/80 border border-stone-700 text-stone-300 hover:text-rose-400 transition-colors"
                              >
                                <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                              </button>
                            )}
                          </div>

                          {/* Info */}
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between text-[10px] text-stone-400 uppercase tracking-wider mb-1">
                                <span>{product.room}</span>
                                <span>{product.material.split(' ')[0]}</span>
                              </div>
                              <h4 
                                onClick={() => {
                                  onSelectProduct(product);
                                  onClose();
                                }}
                                className="text-sm font-serif font-light text-white hover:text-[#C9A97A] cursor-pointer transition-colors"
                              >
                                {product.name}
                              </h4>
                              <p className="text-xs text-stone-400 line-clamp-1 mt-1">
                                {product.dimensions}
                              </p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between">
                              <span className="text-sm font-medium font-sans text-[#F5F2EB]">
                                AED {product.price.toLocaleString()}
                              </span>

                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => {
                                    onSelectProduct(product);
                                    onClose();
                                  }}
                                  className="px-2.5 py-1 text-[11px] text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700 rounded-sm transition-colors"
                                >
                                  View
                                </button>
                                <button
                                  onClick={() => onAddToCart(product)}
                                  className="p-1.5 bg-[#9E7A52] hover:bg-[#8A6740] text-white rounded-sm transition-colors"
                                  title="Add to Bag"
                                >
                                  <ShoppingBag className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
