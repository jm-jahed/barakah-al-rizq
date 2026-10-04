'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FlavorsBranch } from '@/data/flavorsData';
import { FlavorsProduct } from '@/data/flavorsCatalogData';

// Components
import { FlavorsBranchSelector } from '@/components/flavors/FlavorsBranchSelector';
import { FlavorsNav } from '@/components/flavors/FlavorsNav';
import { FlavorsHero } from '@/components/flavors/FlavorsHero';
import { FlavorsCollections } from '@/components/flavors/FlavorsCollections';
import { FlavorsProductExplorer } from '@/components/flavors/FlavorsProductExplorer';
import { FlavorsCorporate } from '@/components/flavors/FlavorsCorporate';
import { FlavorsReviews } from '@/components/flavors/FlavorsReviews';
import { FlavorsFooter } from '@/components/flavors/FlavorsFooter';
import { FlavorsProductModal } from '@/components/flavors/FlavorsProductModal';
import { FlavorsSearch } from '@/components/flavors/FlavorsSearch';
import { FlavorsCartDrawer, FulfillmentData } from '@/components/flavors/FlavorsCartDrawer';
import { FlavorsCustomCakeBuilder } from '@/components/flavors/FlavorsCustomCakeBuilder';

export interface CartItem {
  product: FlavorsProduct;
  quantity: number;
  note?: string;
}

export default function FlavorsProjectPage() {
  const [selectedBranch, setSelectedBranch] = useState<FlavorsBranch | null>(null);
  const [showBranchSelector, setShowBranchSelector] = useState(true);

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals & Overlays State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCakeBuilderOpen, setIsCakeBuilderOpen] = useState(false);
  const [viewedProduct, setViewedProduct] = useState<FlavorsProduct | null>(null);

  // Load branch from localStorage
  useEffect(() => {
    const savedBranch = localStorage.getItem('flavors_branch');
    if (savedBranch) {
      try {
        const branch = JSON.parse(savedBranch);
        setSelectedBranch(branch);
        setShowBranchSelector(false);
      } catch (e) {
        console.error('Error parsing saved branch', e);
      }
    }
  }, []);

  const handleBranchSelect = (branch: FlavorsBranch) => {
    setSelectedBranch(branch);
    setShowBranchSelector(false);
    localStorage.setItem('flavors_branch', JSON.stringify(branch));
    // When branch changes, we ideally should clear the cart if items are not available, 
    // but for simplicity in this demo, we'll keep the cart and let the user handle it.
  };

  const handleChangeBranch = () => {
    setShowBranchSelector(true);
  };

  const handleAddToCart = (product: FlavorsProduct, qty: number = 1, note: string = '') => {
    setCartItems(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.note === note);
      if (existing) {
        return prev.map(i => i.product.id === product.id && i.note === note ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...prev, { product, quantity: qty, note }];
    });
  };

  const handleUpdateCartQty = (productId: string, delta: number) => {
    setCartItems(prev => prev.map(i => {
      if (i.product.id === productId) {
        const newQty = i.quantity + delta;
        return newQty > 0 ? { ...i, quantity: newQty } : i;
      }
      return i;
    }));
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(i => i.product.id !== productId));
  };

  const handleCheckout = (data: FulfillmentData) => {
    console.log('Order placed', { branch: selectedBranch, items: cartItems, fulfillment: data });
    alert('Order placed successfully! In a real app, this would route to a payment gateway.');
    setCartItems([]);
  };

  return (
    <>
      <Head>
        <title>FLAVORS | Premium Sweets & Bakers Bangladesh</title>
        <meta name="description" content="Bangladesh's premium destination for cakes, sweets, bakery items, and custom celebration cakes." />
      </Head>

      <div style={{ background: '#0a1f12', minHeight: '100vh', color: '#ffffff' }}>
        
        {/* Entry Barrier: Mandatory Branch Selector */}
        {showBranchSelector ? (
          <FlavorsBranchSelector onBranchSelect={handleBranchSelect} />
        ) : (
          <>
            <FlavorsNav
              selectedBranch={selectedBranch}
              cartItems={cartItems}
              onCartOpen={() => setIsCartOpen(true)}
              onSearchOpen={() => setIsSearchOpen(true)}
              onChangeBranch={handleChangeBranch}
              onCakeBuilderOpen={() => setIsCakeBuilderOpen(true)}
            />

            <main>
              <FlavorsHero
                selectedBranch={selectedBranch}
                onOrderNow={() => {
                  const el = document.getElementById('cakes');
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                onCakeBuilder={() => setIsCakeBuilderOpen(true)}
              />

              <FlavorsCollections
                onAddToCart={handleAddToCart}
                branchId={selectedBranch?.id ?? ''}
              />

              <FlavorsProductExplorer
                branchId={selectedBranch?.id ?? ''}
                onAddToCart={handleAddToCart}
                onViewProduct={setViewedProduct}
              />

              <FlavorsCorporate />

              <FlavorsReviews />
            </main>

            <FlavorsFooter />

            {/* Overlays & Modals */}
            <FlavorsSearch
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
              onAddToCart={handleAddToCart}
              onViewProduct={setViewedProduct}
              branchId={selectedBranch?.id ?? ''}
            />

            <FlavorsProductModal
              product={viewedProduct}
              onClose={() => setViewedProduct(null)}
              onAddToCart={handleAddToCart}
              selectedBranch={selectedBranch}
            />

            <FlavorsCartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cartItems={cartItems}
              onUpdateQty={handleUpdateCartQty}
              onRemoveItem={handleRemoveFromCart}
              selectedBranch={selectedBranch}
              onChangeBranch={handleChangeBranch}
              onCheckout={handleCheckout}
            />

            <FlavorsCustomCakeBuilder
              isOpen={isCakeBuilderOpen}
              onClose={() => setIsCakeBuilderOpen(false)}
              onAddToCart={(cake) => handleAddToCart(cake as any)}
              selectedBranch={selectedBranch}
            />
          </>
        )}
      </div>
    </>
  );
}
