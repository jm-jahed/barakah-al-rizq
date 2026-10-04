'use client';

import React, { useState } from 'react';
import { PressoraHero } from './PressoraHero';
import { PressoraProductCatalog } from './PressoraProductCatalog';
import { PressoraBusinessCardConfigurator } from './PressoraBusinessCardConfigurator';
import { PressoraInvoiceBookConfigurator } from './PressoraInvoiceBookConfigurator';
import { PressoraPackagingStudio } from './PressoraPackagingStudio';
import { PressoraArtworkPreflight } from './PressoraArtworkPreflight';
import { PressoraPriceEngine } from './PressoraPriceEngine';
import { PressoraPrintSuites } from './PressoraPrintSuites';
import { PressoraProductionCenter } from './PressoraProductionCenter';
import { PressoraOrderManagement } from './PressoraOrderManagement';
import { PressoraSmartReorder } from './PressoraSmartReorder';
import { PressoraQuoteEngine } from './PressoraQuoteEngine';
import { PressoraMaterialLibrary } from './PressoraMaterialLibrary';
import { PressoraSmartRecommendation } from './PressoraSmartRecommendation';
import { PressoraOrderTracker } from './PressoraOrderTracker';
import { PressoraArchitecture } from './PressoraArchitecture';
import { PressoraSignatureStory } from './PressoraSignatureStory';
import { PressoraClosingCTA } from './PressoraClosingCTA';
import { PressoraCartDrawer, CartItem } from './PressoraCartDrawer';
import { PressoraCheckoutModal } from './PressoraCheckoutModal';
import { PrintProduct } from '@/data/pressoraData';

export const PressoraShowcase: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'init-item-1',
      productName: 'Executive Business Cards',
      configSummary: 'Luxury Cotton (450gsm) • Gold Foil Stamping • Double Sided',
      quantity: 500,
      priceAED: 245
    }
  ]);

  const handleAddFromConfig = (item: {
    productName: string;
    configSummary: string;
    quantity: number;
    priceAED: number;
  }) => {
    const newItem: CartItem = {
      id: `item-${Date.now()}`,
      productName: item.productName,
      configSummary: item.configSummary,
      quantity: item.quantity,
      priceAED: item.priceAED
    };
    setCartItems(prev => [newItem, ...prev]);
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(100, item.quantity + delta);
        const pricePerUnit = item.priceAED / item.quantity;
        return {
          ...item,
          quantity: newQty,
          priceAED: Math.round(pricePerUnit * newQty)
        };
      }
      return item;
    }));
  };

  const handleProductSelect = (product: PrintProduct) => {
    const el = document.getElementById('configurators');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f8fafc] selection:bg-amber-500 selection:text-neutral-950 overflow-x-clip max-w-full">
      {/* Hero */}
      <PressoraHero 
        onStartOrder={() => scrollToSection('configurators')}
        onExploreProducts={() => scrollToSection('catalog')}
        onSelectStudioTab={(tab) => scrollToSection('configurators')}
      />

      {/* Production & Telemetry Floor */}
      <PressoraProductionCenter />

      {/* 24 Products Catalog */}
      <div id="catalog">
        <PressoraProductCatalog onSelectProduct={handleProductSelect} />
      </div>

      {/* Interactive Configurators Section */}
      <div id="configurators" className="py-12 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
            INTERACTIVE CUSTOMIZERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Interactive Product <span className="font-serif italic text-amber-400">Configurators</span>
          </h2>
        </div>

        {/* Business Card Configurator */}
        <PressoraBusinessCardConfigurator onAddToCart={handleAddFromConfig} />

        {/* Invoice Book Configurator */}
        <div className="mt-16">
          <PressoraInvoiceBookConfigurator onAddToCart={handleAddFromConfig} />
        </div>
      </div>

      {/* Packaging 3D Studio */}
      <PressoraPackagingStudio onStartCustomBox={() => scrollToSection('quote')} />

      {/* Automated Artwork Preflight Engine */}
      <div id="preflight">
        <PressoraArtworkPreflight />
      </div>

      {/* Dynamic Instant Price Matrix Engine */}
      <PressoraPriceEngine />

      {/* Curated Print Bundles / Suites */}
      <PressoraPrintSuites onSelectSuite={() => scrollToSection('quote')} />

      {/* Smart Product Match Wizard */}
      <PressoraSmartRecommendation onSelectProduct={handleProductSelect} />

      {/* Tactile Substrates & Finishes Library */}
      <div id="materials">
        <PressoraMaterialLibrary />
      </div>

      {/* Bespoke Quote Calculator & Form */}
      <div id="quote">
        <PressoraQuoteEngine />
      </div>

      {/* 1-Click Reorder System */}
      <PressoraSmartReorder 
        onAddToCart={(item) => handleAddFromConfig({
          productName: item.productName,
          configSummary: item.specs,
          quantity: item.quantity,
          priceAED: item.priceAED
        })} 
      />

      {/* Dispatch Tracking & 10 Demo Orders Ledger */}
      <div id="orders">
        <PressoraOrderManagement />
      </div>

      {/* Visual Live Order Tracker */}
      <PressoraOrderTracker />

      {/* Technical Print & Software Architecture */}
      <PressoraArchitecture />

      {/* Signature Brand Story */}
      <PressoraSignatureStory />

      {/* Closing CTA */}
      <PressoraClosingCTA 
        onStartConfig={() => scrollToSection('configurators')}
        onRequestQuote={() => scrollToSection('quote')}
      />

      {/* Slide-out Cart / Trip Bag Drawer */}
      <PressoraCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onProceedCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* 4-Step Checkout Modal */}
      <PressoraCheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cartItems}
        onClearCart={() => setCartItems([])}
      />
    </div>
  );
};
