'use client';

import React, { useState } from 'react';
import { NouraNav } from './NouraNav';
import { NouraHero } from './NouraHero';
import { CollectionShowcase } from './CollectionShowcase';
import { NewArrivals } from './NewArrivals';
import { ProductGrid } from './ProductGrid';
import { ProductQuickView } from './ProductQuickView';
import { ProductDetail } from './ProductDetail';
import { SignatureCollection } from './SignatureCollection';
import { OccasionCollection } from './OccasionCollection';
import { UaeDelivery } from './UaeDelivery';
import { BrandStory } from './BrandStory';
import { Testimonials } from './Testimonials';
import { NouraFAQ } from './NouraFAQ';
import { NouraFinalCTA } from './NouraFinalCTA';
import { NouraFooter } from './NouraFooter';
import { NouraCart, NouraCartItem } from './NouraCart';
import { NouraCustomizerModal } from './NouraCustomizerModal';
import { NouraLookbookDrawer } from './NouraLookbookDrawer';
import { NouraAtelierBookingModal } from './NouraAtelierBookingModal';
import { NouraProduct } from '@/data/nouraAbayaData';
import { NouraLanguageProvider, useNouraLanguage } from '@/context/NouraLanguageContext';

interface NouraAbayaShowcaseProps {
  standalone?: boolean;
}

function NouraAbayaInner() {
  const { isRtl } = useNouraLanguage();

  // State for Cart, Wishlist, QuickView, Detail Modal, Search, Category/Collection Filters
  const [cartItems, setCartItems] = useState<NouraCartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<NouraProduct | null>(null);
  const [detailProduct, setDetailProduct] = useState<NouraProduct | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isAtelierBookingOpen, setIsAtelierBookingOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [selectedCollectionFilter, setSelectedCollectionFilter] = useState<string>('All');

  // Cart Handlers
  const handleAddToCart = (
    product: NouraProduct,
    selectedSize: string = '56"',
    selectedColor: string = '',
    qty: number = 1
  ) => {
    const color = selectedColor || product.colorOptions[0]?.name || 'Classic Black';
    const itemId = `${product.id}-${selectedSize}-${color}`;

    setCartItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.id === itemId);

      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += qty;
        return copy;
      }

      return [
        ...prev,
        {
          id: itemId,
          product,
          size: selectedSize,
          color,
          quantity: qty,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as NouraCartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Handler
  const handleToggleWishlist = (product: NouraProduct) => {
    setWishlistIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const scrollToCatalog = (cat?: string, col?: string) => {
    if (cat) setSelectedCategoryFilter(cat);
    if (col) setSelectedCollectionFilter(col);
    const el = document.getElementById('catalog');
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`min-h-screen bg-[#0A0A0A] text-[#FAFAFA] selection:bg-[#C5A059] selection:text-black overflow-x-clip max-w-full ${
      isRtl ? 'font-arabic' : 'font-sans'
    }`}>
      
      {/* Navbar */}
      <NouraNav
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => scrollToCatalog()}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenLookbook={() => setIsLookbookOpen(true)}
        onOpenAtelierBooking={() => setIsAtelierBookingOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main id="top">
        
        {/* Luxury Hero */}
        <NouraHero
          onShopCollection={() => scrollToCatalog()}
          onExploreNewArrivals={() => scrollToCatalog(undefined, 'NEW ARRIVALS')}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
          onOpenLookbook={() => setIsLookbookOpen(true)}
          onQuickView={(p: NouraProduct) => setQuickViewProduct(p)}
        />

        {/* 4 Curated Collections Cards */}
        <CollectionShowcase
          onSelectCollection={(colName: string) => scrollToCatalog(undefined, colName)}
        />

        {/* New Arrivals Section */}
        <NewArrivals
          onQuickView={(p: NouraProduct) => setQuickViewProduct(p)}
          onOpenDetail={(p: NouraProduct) => setDetailProduct(p)}
          onAddToCart={(p: NouraProduct) => handleAddToCart(p, '56"', '', 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* 248+ Unique Products Catalog Grid with Auto-Scroll */}
        <ProductGrid
          onQuickView={(p: NouraProduct) => setQuickViewProduct(p)}
          onOpenDetail={(p: NouraProduct) => setDetailProduct(p)}
          onAddToCart={(p: NouraProduct) => handleAddToCart(p, '56"', '', 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          searchQuery={searchQuery}
          externalCategoryFilter={selectedCategoryFilter}
          externalCollectionFilter={selectedCollectionFilter}
        />

        {/* Signature Collection Line */}
        <SignatureCollection
          onQuickView={(p: NouraProduct) => setQuickViewProduct(p)}
          onOpenDetail={(p: NouraProduct) => setDetailProduct(p)}
          onAddToCart={(p: NouraProduct) => handleAddToCart(p, '56"', '', 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* Occasion Edit (Ramadan, Eid & Galas) */}
        <OccasionCollection
          onQuickView={(p: NouraProduct) => setQuickViewProduct(p)}
          onOpenDetail={(p: NouraProduct) => setDetailProduct(p)}
          onAddToCart={(p: NouraProduct) => handleAddToCart(p, '56"', '', 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* UAE Emirates Doorstep Delivery Banner */}
        <UaeDelivery />

        {/* Brand Atelier Story */}
        <BrandStory />

        {/* Verified UAE Client Reviews */}
        <Testimonials />

        {/* FAQ Accordion */}
        <NouraFAQ />

        {/* Final Closing Call To Action */}
        <NouraFinalCTA
          onShopCollection={() => scrollToCatalog()}
        />

      </main>

      {/* Footer */}
      <NouraFooter />

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onOpenDetail={(p: NouraProduct) => {
          setQuickViewProduct(null);
          setDetailProduct(p);
        }}
        onAddToCart={(p: NouraProduct, sz: string, col: string, qty: number) =>
          handleAddToCart(p, sz, col, qty)
        }
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Full Product Detail Modal */}
      <ProductDetail
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onAddToCart={(p: NouraProduct, sz: string, col: string, qty: number) =>
          handleAddToCart(p, sz, col, qty)
        }
        isWishlisted={detailProduct ? wishlistIds.includes(detailProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Bespoke Customizer & Measurement Studio Modal */}
      <NouraCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onAddToCart={(p, sz, col, qty) => handleAddToCart(p, sz, col, qty)}
      />

      {/* Lookbook & Styling Ensemble Drawer */}
      <NouraLookbookDrawer
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
        onAddToCart={(p, sz, col, qty) => handleAddToCart(p, sz, col, qty)}
        onOpenProductDetail={(p) => setDetailProduct(p)}
      />

      {/* VIP Private Atelier Fitting Booking Modal */}
      <NouraAtelierBookingModal
        isOpen={isAtelierBookingOpen}
        onClose={() => setIsAtelierBookingOpen(false)}
      />

      {/* Shopping Cart Drawer */}
      <NouraCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}

export const NouraAbayaShowcase: React.FC<NouraAbayaShowcaseProps> = () => {
  return (
    <NouraLanguageProvider>
      <NouraAbayaInner />
    </NouraLanguageProvider>
  );
};
