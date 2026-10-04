'use client';

import React, { useState } from 'react';
import { AbayaNav } from './AbayaNav';
import { AbayaHero } from './AbayaHero';
import { CollectionShowcase } from './CollectionShowcase';
import { ProductGrid } from './ProductGrid';
import { ProductQuickView } from './ProductQuickView';
import { ShoppingCart, CartItem } from './ShoppingCart';
import { SizeGuide } from './SizeGuide';
import { UaeDelivery } from './UaeDelivery';
import { Testimonials } from './Testimonials';
import { InstagramShowcase } from './InstagramShowcase';
import { AbayaFAQ } from './AbayaFAQ';
import { AbayaFinalCTA } from './AbayaFinalCTA';
import { AbayaFooter } from './AbayaFooter';
import { AbayaProduct } from '@/data/abayaData';

interface AbayaShowcaseProps {
  standalone?: boolean;
}

export const AbayaShowcase: React.FC<AbayaShowcaseProps> = ({ standalone = true }) => {
  // State for Cart, Wishlist, QuickView, SizeGuide, Search, Category Filter
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<AbayaProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');

  // Cart Handlers
  const handleAddToCart = (product: AbayaProduct, selectedSize: string = 'M') => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.size === selectedSize
      );

      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      }

      return [...prev, { product, size: selectedSize, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Handler
  const handleToggleWishlist = (product: AbayaProduct) => {
    setWishlistIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const scrollToCatalog = (cat?: string) => {
    if (cat) setSelectedCategoryFilter(cat);
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] font-sans selection:bg-[#C5A059] selection:text-black">
      
      {/* Navbar */}
      <AbayaNav
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => scrollToCatalog()}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main id="top">
        
        {/* Luxury Hero */}
        <AbayaHero
          onExploreCatalog={() => scrollToCatalog()}
          onSelectCategory={(cat: string) => scrollToCatalog(cat)}
        />

        {/* Curated Collections */}
        <CollectionShowcase
          onSelectCategory={(catName: string) => scrollToCatalog(catName)}
        />

        {/* 100 Unique Products Catalog Grid with 20-item initial pagination */}
        <ProductGrid
          onQuickView={(p: AbayaProduct) => setQuickViewProduct(p)}
          onAddToCart={(p: AbayaProduct) => handleAddToCart(p, 'M')}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          searchQuery={searchQuery}
          externalCategoryFilter={selectedCategoryFilter}
        />

        {/* UAE Doorstep Delivery Strip */}
        <UaeDelivery />

        {/* Client Reviews & Testimonials */}
        <Testimonials />

        {/* Instagram Gallery */}
        

        {/* Accordion FAQ */}
        <AbayaFAQ />

        {/* Final Closing CTA */}
        <AbayaFinalCTA
          onExploreCatalog={() => scrollToCatalog()}
        />

      </main>

      {/* Footer */}
      <AbayaFooter />

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p: AbayaProduct, sz: string) => handleAddToCart(p, sz)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Shopping Cart Drawer */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Size Guide Modal */}
      <SizeGuide
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

    </div>
  );
};
