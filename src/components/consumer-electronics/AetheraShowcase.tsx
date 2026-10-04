'use client';

import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS, GadgetProduct } from '@/data/consumerElectronicsData';
import { AetheraNav } from './AetheraNav';
import { AetheraHero } from './AetheraHero';
import { AetheraFlagshipShowcase } from './AetheraFlagshipShowcase';
import { AetheraFeaturedEdit } from './AetheraFeaturedEdit';
import { AetheraProductDiscovery } from './AetheraProductDiscovery';
import { AetheraEcosystemBuilder } from './AetheraEcosystemBuilder';
import { AetheraTechJournal } from './AetheraTechJournal';
import { AetheraShowrooms } from './AetheraShowrooms';
import { AetheraFooter } from './AetheraFooter';
import { AetheraProductModal } from './AetheraProductModal';
import { AetheraCartDrawer, CartItem } from './AetheraCartDrawer';
import { AetheraWishlistDrawer } from './AetheraWishlistDrawer';
import { AetheraComparisonMatrix } from './AetheraComparisonMatrix';
import { AetheraSearchOverlay } from './AetheraSearchOverlay';
import { AetheraCheckoutModal } from './AetheraCheckoutModal';

export const AetheraShowcase: React.FC = () => {
  const allProducts = ALL_PRODUCTS;

  // State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: allProducts[0], quantity: 1, selectedVariant: 'Raw Natural Titanium' }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['prod-vr-01', 'prod-hp-01']);
  const [comparedIds, setComparedIds] = useState<string[]>(['prod-sp-01', 'prod-sp-02']);
  
  const [selectedProduct, setSelectedProduct] = useState<GadgetProduct | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Derived lists
  const featuredProducts = useMemo(() => {
    return allProducts.filter((p: GadgetProduct) => p.isFeatured || p.isBestSeller);
  }, [allProducts]);

  const wishlistProducts = useMemo(() => {
    return wishlistIds.map(id => allProducts.find((p: GadgetProduct) => p.id === id)).filter(Boolean) as GadgetProduct[];
  }, [allProducts, wishlistIds]);

  const comparedProducts = useMemo(() => {
    return comparedIds.map(id => allProducts.find((p: GadgetProduct) => p.id === id)).filter(Boolean) as GadgetProduct[];
  }, [allProducts, comparedIds]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  // Cart Handlers
  const handleAddToCart = (product: GadgetProduct, quantity: number = 1, selectedVariant?: string, selectedStorage?: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity, selectedVariant, selectedStorage }];
    });
  };

  const handleAddMultipleToCart = (products: GadgetProduct[]) => {
    products.forEach(p => handleAddToCart(p, 1));
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setCartItems(prev => prev.map(item => item.product.id === productId ? { ...item, quantity } : item));
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: GadgetProduct) => {
    setWishlistIds(prev => {
      if (prev.includes(product.id)) {
        return prev.filter(id => id !== product.id);
      }
      return [...prev, product.id];
    });
  };

  const handleRemoveWishlist = (productId: string) => {
    setWishlistIds(prev => prev.filter(id => id !== productId));
  };

  const handleMoveAllWishlistToCart = () => {
    wishlistProducts.forEach(p => handleAddToCart(p));
    setWishlistIds([]);
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  // Comparison Handlers
  const handleToggleCompare = (product: GadgetProduct) => {
    setComparedIds(prev => {
      if (prev.includes(product.id)) {
        return prev.filter(id => id !== product.id);
      }
      if (prev.length >= 4) {
        return [...prev.slice(1), product.id];
      }
      return [...prev, product.id];
    });
  };

  const handleRemoveCompare = (productId: string) => {
    setComparedIds(prev => prev.filter(id => id !== productId));
  };

  // Navigation category selection
  const handleSelectCategory = (catName: string | null) => {
    setSelectedCategory(catName);
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0C] text-white selection:bg-amber-400 selection:text-black font-sans">
      
      {/* Top Navigation */}
      <AetheraNav
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlistIds.length}
        comparisonCount={comparedIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenComparison={() => setIsComparisonOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
        onBookShowroom={() => setIsBookingOpen(true)}
      />

      {/* Hero Section */}
      <AetheraHero
        onExploreCatalog={() => handleSelectCategory(null)}
        onSelectProduct={setSelectedProduct}
        featuredProducts={featuredProducts}
        onBookShowroom={() => setIsBookingOpen(true)}
      />

      {/* Living Technology Showcase */}
      <AetheraFlagshipShowcase
        allProducts={allProducts}
        onSelectProduct={setSelectedProduct}
        onAddToCart={(p) => {
          handleAddToCart(p);
          setIsCartOpen(true);
        }}
      />

      {/* The Edit: Curated Flagship Editorial */}
      <AetheraFeaturedEdit
        featuredProducts={featuredProducts}
        onSelectProduct={setSelectedProduct}
        onAddToCart={(p) => {
          handleAddToCart(p);
          setIsCartOpen(true);
        }}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={(id) => wishlistIds.includes(id)}
      />

      {/* 200+ Products Discovery Studio */}
      <AetheraProductDiscovery
        allProducts={allProducts}
        onSelectProduct={setSelectedProduct}
        onAddToCart={(p) => handleAddToCart(p)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={(id) => wishlistIds.includes(id)}
        onToggleCompare={handleToggleCompare}
        comparedIds={comparedIds}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Smart Ecosystem Rig Builder */}
      <AetheraEcosystemBuilder
        allProducts={allProducts}
        onAddMultipleToCart={handleAddMultipleToCart}
        onSelectProduct={setSelectedProduct}
      />

      {/* Tech Journal Editorial Essays */}
      <AetheraTechJournal
        allProducts={allProducts}
        onSelectProduct={setSelectedProduct}
      />

      {/* Brand Philosophy & UAE Showroom Ateliers */}
      <AetheraShowrooms
        isOpenBooking={isBookingOpen}
        onOpenBooking={() => setIsBookingOpen(true)}
        onCloseBooking={() => setIsBookingOpen(false)}
      />

      {/* Brand Footer */}
      <AetheraFooter
        onSelectCategory={handleSelectCategory}
        onBookShowroom={() => setIsBookingOpen(true)}
      />

      {/* Interactive PDP Modal */}
      {selectedProduct && (
        <AetheraProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(p, qty, variant, storage) => {
            handleAddToCart(p, qty, variant, storage);
            setIsCartOpen(true);
          }}
          onBuyNow={(p: GadgetProduct, qty: number) => {
            handleAddToCart(p, qty);
            setSelectedProduct(null);
            setIsCheckoutOpen(true);
          }}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={wishlistIds.includes(selectedProduct.id)}
          onSelectProduct={setSelectedProduct}
          relatedProducts={allProducts.filter((p: GadgetProduct) => p.category === selectedProduct.category && p.id !== selectedProduct.id)}
        />
      )}

      {/* Cart Drawer */}
      <AetheraCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => setIsCheckoutOpen(true)}
        onSelectProduct={setSelectedProduct}
        recommendedProducts={allProducts.filter((p: GadgetProduct) => p.category === 'Accessories' || p.category === 'Chargers')}
        onAddToCart={(p: GadgetProduct) => handleAddToCart(p)}
      />

      {/* Wishlist Drawer */}
      <AetheraWishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={handleRemoveWishlist}
        onMoveToCart={(p: GadgetProduct) => {
          handleAddToCart(p);
          setIsCartOpen(true);
        }}
        onMoveAllToCart={handleMoveAllWishlistToCart}
        onSelectProduct={setSelectedProduct}
      />

      {/* Comparison Matrix Modal */}
      {isComparisonOpen && (
        <AetheraComparisonMatrix
          comparedProducts={comparedProducts}
          onRemoveCompare={handleRemoveCompare}
          onClearAll={() => setComparedIds([])}
          onClose={() => setIsComparisonOpen(false)}
          onAddToCart={(p: GadgetProduct) => {
            handleAddToCart(p);
            setIsCartOpen(true);
          }}
          onSelectProduct={setSelectedProduct}
        />
      )}

      {/* Instant Search Overlay */}
      <AetheraSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        allProducts={allProducts}
        onSelectProduct={setSelectedProduct}
        onSelectCategory={handleSelectCategory}
      />

      {/* Luxury UAE Checkout Modal */}
      <AetheraCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={() => setCartItems([])}
      />

    </div>
  );
};
