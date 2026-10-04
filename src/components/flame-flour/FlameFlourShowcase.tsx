'use client';

import React, { useState } from 'react';
import { FlameFlourHero } from './FlameFlourHero';
import { FlameFlourCounter } from './FlameFlourCounter';
import { FlameFlourProductDiscovery } from './FlameFlourProductDiscovery';
import { FlameFlourProductModal } from './FlameFlourProductModal';
import { FlameFlourBoxBuilder } from './FlameFlourBoxBuilder';
import { FlameFlourSmartRecommender } from './FlameFlourSmartRecommender';
import { FlameFlourFreshnessTimeline } from './FlameFlourFreshnessTimeline';
import { FlameFlourArtisanProcess } from './FlameFlourArtisanProcess';
import { FlameFlourSourdoughExperience } from './FlameFlourSourdoughExperience';
import { FlameFlourOvenVisualization } from './FlameFlourOvenVisualization';
import { FlameFlourDailyBakeBoard } from './FlameFlourDailyBakeBoard';
import { FlameFlourCakeStudio } from './FlameFlourCakeStudio';
import { FlameFlourCartDrawer, CartItem } from './FlameFlourCartDrawer';
import { FlameFlourOrderFlowModal } from './FlameFlourOrderFlowModal';
import { FlameFlourOrderTracker } from './FlameFlourOrderTracker';
import { FlameFlourCorporateOrders } from './FlameFlourCorporateOrders';
import { FlameFlourGiftExperience } from './FlameFlourGiftExperience';
import { FlameFlourIngredientLibrary } from './FlameFlourIngredientLibrary';
import { FlameFlourStory } from './FlameFlourStory';
import { FlameFlourOperationsCenter } from './FlameFlourOperationsCenter';
import { FlameFlourSeasonalCollection } from './FlameFlourSeasonalCollection';
import { FlameFlourMembership } from './FlameFlourMembership';
import { FlameFlourArchitecture } from './FlameFlourArchitecture';
import { FlameFlourClosingCTA } from './FlameFlourClosingCTA';
import { BakeryProduct, BAKERY_PRODUCTS } from '@/data/flameFlourData';

export const FlameFlourShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<BakeryProduct | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderFlowOpen, setOrderFlowOpen] = useState(false);

  // Initial cart demo items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'prod-01',
      name: 'Signature Sourdough',
      category: 'Bread',
      priceAED: 42,
      quantity: 1,
      image: BAKERY_PRODUCTS[0].image,
      details: '7-Year Levain · 245°C Hearth'
    },
    {
      id: 'prod-04',
      name: 'French Butter Croissant',
      category: 'Croissants',
      priceAED: 24,
      quantity: 2,
      image: BAKERY_PRODUCTS[3].image,
      details: 'Normandy Beurre d’Isigny AOP'
    }
  ]);

  const handleAddToCart = (product: BakeryProduct, quantity = 1, selectedSize?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        {
          id: product.id,
          name: product.name,
          category: product.category,
          priceAED: product.priceAED,
          quantity,
          image: product.image,
          details: selectedSize ? `Size: ${selectedSize}` : product.servingSize
        },
        ...prev
      ];
    });
    setCartOpen(true);
  };

  const handleAddBoxToCart = (boxConfig: {
    boxName: string;
    items: Array<{ name: string; quantity: number }>;
    packaging: string;
    message: string;
    priceAED: number;
  }) => {
    const boxId = `custom-box-${Date.now()}`;
    const itemSummary = boxConfig.items.map((i) => `${i.name} (×${i.quantity})`).join(', ');
    setCartItems((prev) => [
      {
        id: boxId,
        name: `Curated ${boxConfig.boxName}`,
        category: 'Custom Box',
        priceAED: boxConfig.priceAED,
        quantity: 1,
        details: `${boxConfig.packaging} · ${itemSummary}`
      },
      ...prev
    ]);
    setCartOpen(true);
  };

  const handleAddCakeToCart = (cakeConfig: {
    name: string;
    size: string;
    flavor: string;
    filling: string;
    finish: string;
    inscription: string;
    priceAED: number;
  }) => {
    const cakeId = `custom-cake-${Date.now()}`;
    setCartItems((prev) => [
      {
        id: cakeId,
        name: cakeConfig.name,
        category: 'Custom Cake',
        priceAED: cakeConfig.priceAED,
        quantity: 1,
        details: `${cakeConfig.flavor} · ${cakeConfig.filling} · "${cakeConfig.inscription}"`
      },
      ...prev
    ]);
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070504] text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans">
      {/* Hero Experience */}
      <FlameFlourHero
        onExploreBakery={() => scrollToSection('counter')}
        onBuildBox={() => scrollToSection('box-builder')}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      {/* The Digital Counter */}
      <div id="counter">
        <FlameFlourCounter
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product)}
        />
      </div>

      {/* 24 Products Discovery Engine */}
      <div id="discovery">
        <FlameFlourProductDiscovery
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product)}
        />
      </div>

      {/* 6-Step Build Your Box */}
      <FlameFlourBoxBuilder onAddBoxToCart={handleAddBoxToCart} />

      {/* Smart Recommender: Find Your Perfect Bake */}
      <FlameFlourSmartRecommender
        onSelectProduct={(product) => setSelectedProduct(product)}
        onAddToCart={(product) => handleAddToCart(product)}
      />

      {/* Freshness Timeline: Baked for the Moment */}
      <FlameFlourFreshnessTimeline />

      {/* Artisan Process: From Flour to Flame (7 Stages) */}
      <FlameFlourArtisanProcess />

      {/* The Sourdough Culture Experience */}
      <FlameFlourSourdoughExperience />

      {/* Inside the Refractory Oven Simulation */}
      <FlameFlourOvenVisualization />

      {/* Today's Bake Availability Board */}
      <FlameFlourDailyBakeBoard
        onSelectProduct={(product) => setSelectedProduct(product)}
        onAddToCart={(product) => handleAddToCart(product)}
      />

      {/* Custom Cake Studio Configurator */}
      <FlameFlourCakeStudio onAddCakeToCart={handleAddCakeToCart} />

      {/* Seasonal Culinary Collection */}
      <FlameFlourSeasonalCollection
        onSelectProductByName={(name) => {
          const prod = BAKERY_PRODUCTS.find((p) => p.name.includes(name)) || BAKERY_PRODUCTS[0];
          setSelectedProduct(prod);
        }}
      />

      {/* Artisan Ingredient Library */}
      <FlameFlourIngredientLibrary />

      {/* Live Order Bake Tracker */}
      <div id="tracking">
        <FlameFlourOrderTracker />
      </div>

      {/* Corporate Catering & Event Quotes */}
      <FlameFlourCorporateOrders />

      {/* Luxury Hamper & Gift Concierge */}
      <FlameFlourGiftExperience onAddToCart={(product) => handleAddToCart(product)} />

      {/* Bakery Story & Manifesto */}
      <FlameFlourStory />

      {/* Operations Control Center Simulation */}
      <FlameFlourOperationsCenter />

      {/* Bakery Membership Tiers */}
      <FlameFlourMembership />

      {/* Digital Bakery Architecture & Tech Ecosystem */}
      <FlameFlourArchitecture />

      {/* Closing Call to Action */}
      <FlameFlourClosingCTA
        onExploreBakery={() => scrollToSection('counter')}
        onBuildBox={() => scrollToSection('box-builder')}
      />

      {/* Product Detail Modal */}
      <FlameFlourProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping Cart Drawer */}
      <FlameFlourCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={() => {
          setCartOpen(false);
          setOrderFlowOpen(true);
        }}
      />

      {/* Demo Checkout & Fulfillment Modal */}
      <FlameFlourOrderFlowModal
        isOpen={orderFlowOpen}
        onClose={() => setOrderFlowOpen(false)}
        cartItems={cartItems}
        onOrderCompleted={() => {
          setCartItems([]);
        }}
      />
    </div>
  );
};
