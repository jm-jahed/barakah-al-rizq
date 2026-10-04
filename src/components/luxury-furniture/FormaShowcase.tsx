'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingBag, Heart, Crown } from 'lucide-react';

import { FurnitureProduct, ALL_FURNITURE_PRODUCTS } from '@/data/furnitureData';

// Components
import { FormaNav } from './FormaNav';
import { FormaHero } from './FormaHero';
import { FormaInteriorExperience } from './FormaInteriorExperience';
import { FormaBeforeAfter } from './FormaBeforeAfter';
import { FormaMaterialExplorer } from './FormaMaterialExplorer';
import { FormaSignatureEdit } from './FormaSignatureEdit';
import { FormaProductDiscovery } from './FormaProductDiscovery';
import { FormaProductModal } from './FormaProductModal';
import { FormaBespokeStudio } from './FormaBespokeStudio';
import { FormaCraftsmanshipStory } from './FormaCraftsmanshipStory';
import { FormaJournal } from './FormaJournal';
import { FormaShowrooms } from './FormaShowrooms';
import { FormaCartDrawer, CartItem } from './FormaCartDrawer';
import { FormaWishlistDrawer } from './FormaWishlistDrawer';
import { FormaSearchOverlay } from './FormaSearchOverlay';
import { FormaCheckoutModal } from './FormaCheckoutModal';
import { FormaFooter } from './FormaFooter';

export const FormaShowcase: React.FC = () => {
  // Products Data
  const products = ALL_FURNITURE_PRODUCTS;

  // Cart State (Initialized with 2 signature items for realistic luxury experience)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => [
    {
      product: products.find((p) => p.id === 'fur-sofa-01') || products[0],
      quantity: 1,
      selectedColor: 'Pebble Bouclé',
      selectedMaterial: 'Italian Wool Bouclé'
    },
    {
      product: products.find((p) => p.id === 'fur-tbl-01') || products[1],
      quantity: 1,
      selectedColor: 'Honed Navona',
      selectedMaterial: 'Roman Navona Travertine'
    }
  ]);

  // Wishlist State
  const [wishlist, setWishlist] = useState<FurnitureProduct[]>(() => [
    products.find((p) => p.id === 'fur-chair-01') || products[2],
    products.find((p) => p.id === 'fur-dtbl-01') || products[3]
  ]);

  // Drawers & Modals State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<FurnitureProduct | null>(null);

  // Active Filters from Navigation / Materials
  const [activeRoomFilter, setActiveRoomFilter] = useState<string>('all');
  const [activeMaterialFilter, setActiveMaterialFilter] = useState<string | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'cart' | 'wishlist' } | null>(null);

  const showToast = (text: string, type: 'cart' | 'wishlist') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart Handlers
  const handleAddToCart = (
    product: FurnitureProduct, 
    quantity: number = 1, 
    selectedColor?: string, 
    selectedMaterial?: string
  ) => {
    setCartItems((prev) => {
      const color = selectedColor || product.colorOptions[0]?.name;
      const mat = selectedMaterial || product.material;
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color && item.selectedMaterial === mat
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [...prev, { product, quantity, selectedColor: color, selectedMaterial: mat }];
      }
    });

    showToast(`Added ${product.name} to portfolio`, 'cart');
  };

  const handleUpdateCartQuantity = (productId: string, delta: number, color?: string, material?: string) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (
            item.product.id === productId &&
            (!color || item.selectedColor === color) &&
            (!material || item.selectedMaterial === material)
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveFromCart = (productId: string, color?: string, material?: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            (!color || item.selectedColor === color) &&
            (!material || item.selectedMaterial === material)
          )
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: FurnitureProduct) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`Saved ${product.name} to wishlist`, 'wishlist');
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleAddAllWishlistToCart = () => {
    wishlist.forEach((product) => {
      handleAddToCart(product);
    });
    setWishlist([]);
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  // Navigation scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Room Selection from Nav or Interior Experience
  const handleSelectRoom = (roomId: string) => {
    setActiveRoomFilter(roomId);
    scrollToSection('products');
  };

  // Handle Material Selection
  const handleSelectMaterial = (materialId: string) => {
    setActiveMaterialFilter(materialId);
    scrollToSection('products');
  };

  return (
    <div className="min-h-screen bg-[#0E0C0B] text-[#F5F2EB] font-sans antialiased selection:bg-[#9E7A52] selection:text-white">
      {/* Top Glass Navigation */}
      <FormaNav
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectRoom={handleSelectRoom}
        onSelectMaterial={handleSelectMaterial}
        onOpenShowrooms={() => scrollToSection('showrooms')}
      />

      <main>
        {/* 1. Fullscreen Hero Section */}
        <FormaHero
          onExploreCollection={() => scrollToSection('products')}
          onOpenBespoke={() => scrollToSection('bespoke')}
          onQuickViewProduct={(prodId: string) => {
            const p = products.find((x) => x.id === prodId) || products[0];
            setSelectedProductModal(p);
          }}
        />

        {/* 2. Curated Interior Space Experience with Pins */}
        <section id="interiors">
          <FormaInteriorExperience
            onSelectProduct={(p) => setSelectedProductModal(p)}
            onViewRoom={(roomId: string) => handleSelectRoom(roomId)}
          />
        </section>

        {/* 3. Interactive Before & After Room Transformation Slider */}
        <FormaBeforeAfter />

        {/* 4. Tactile Material Matrix & Sourcing Story */}
        <section id="materials">
          <FormaMaterialExplorer
            onSelectProduct={(p) => setSelectedProductModal(p)}
            onSelectMaterialFilter={(matId: string) => handleSelectMaterial(matId)}
          />
        </section>

        {/* 5. Signature Editorial Edit */}
        <section id="signature">
          <FormaSignatureEdit
            onSelectProduct={(p) => setSelectedProductModal(p)}
            onAddToCart={(p) => handleAddToCart(p)}
          />
        </section>

        {/* 6. Comprehensive 200+ Furniture Product Catalog */}
        <section id="products">
          <FormaProductDiscovery
            products={products}
            initialRoomFilter={activeRoomFilter}
            initialMaterialFilter={activeMaterialFilter}
            onSelectProduct={(p) => setSelectedProductModal(p)}
            onAddToCart={(p) => handleAddToCart(p)}
            wishlistIds={wishlist.map((w) => w.id)}
            onToggleWishlist={handleToggleWishlist}
          />
        </section>

        {/* 7. Bespoke Customizer Studio (Live UAE Price Calculation) */}
        <section id="bespoke">
          <FormaBespokeStudio
            onOrderCustomPiece={() => {
              showToast('Custom bespoke commission registered', 'cart');
            }}
          />
        </section>

        {/* 8. Craftsmanship 5-Chapter Story */}
        <section id="craftsmanship">
          <FormaCraftsmanshipStory />
        </section>

        {/* 9. The Journal Editorial Magazine */}
        <section id="journal">
          <FormaJournal
            onSelectProduct={(p) => setSelectedProductModal(p)}
          />
        </section>

        {/* 10. Brand Philosophy & UAE Showrooms (d3, Al Quoz, Saadiyat) */}
        <section id="showrooms">
          <FormaShowrooms />
        </section>
      </main>

      {/* Global Footer */}
      <FormaFooter
        onNavigateSection={(sec) => scrollToSection(sec)}
        onOpenShowrooms={() => scrollToSection('showrooms')}
      />

      {/* Interactive Drawers & Modals */}
      <FormaCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onQuickView={(p) => setSelectedProductModal(p)}
      />

      <FormaWishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={(p) => handleAddToCart(p)}
        onAddAllToCart={handleAddAllWishlistToCart}
        onQuickView={(p) => setSelectedProductModal(p)}
      />

      <FormaSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => setSelectedProductModal(p)}
        onAddToCart={(p) => handleAddToCart(p)}
        wishlistIds={wishlist.map((w) => w.id)}
        onToggleWishlist={handleToggleWishlist}
      />

      <FormaCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderComplete={() => {
          setCartItems([]);
          setIsCheckoutOpen(false);
        }}
      />

      {selectedProductModal && (
        <FormaProductModal
          product={selectedProductModal}
          onClose={() => setSelectedProductModal(null)}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlist.some((w) => w.id === selectedProductModal.id)}
          onToggleWishlist={() => handleToggleWishlist(selectedProductModal)}
          onSelectProduct={(p) => setSelectedProductModal(p)}
        />
      )}

      {/* Global Feedback Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#191613] border border-[#9E7A52]/50 text-white px-4 py-3 rounded-sm shadow-2xl flex items-center gap-3"
          >
            <div className="w-7 h-7 rounded-full bg-[#9E7A52]/20 border border-[#9E7A52]/40 flex items-center justify-center text-[#C9A97A]">
              {toastMessage.type === 'cart' ? (
                <ShoppingBag className="w-3.5 h-3.5" />
              ) : (
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              )}
            </div>
            <span className="text-xs font-serif font-light">{toastMessage.text}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
