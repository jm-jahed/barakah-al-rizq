'use client';

import React, { useState } from 'react';
import { LuxuryProperty } from '@/data/realEstateData';
import { LUXURY_PROPERTIES_CATALOG } from '@/data/realEstateCatalogData';
import { RealEstateNav } from './RealEstateNav';
import { RealEstateHero } from './RealEstateHero';
import { RealEstateCommunities } from './RealEstateCommunities';
import { RealEstatePropertyDiscovery } from './RealEstatePropertyDiscovery';
import { RealEstatePropertyModal } from './RealEstatePropertyModal';
import { RealEstateMortgageCalculator } from './RealEstateMortgageCalculator';
import { RealEstateComparator } from './RealEstateComparator';
import { RealEstateOffPlanStudio } from './RealEstateOffPlanStudio';
import { RealEstateGoldenVisaHub } from './RealEstateGoldenVisaHub';
import { RealEstateJournal } from './RealEstateJournal';
import { RealEstateViewingDrawer } from './RealEstateViewingDrawer';
import { RealEstateSavedDrawer } from './RealEstateSavedDrawer';
import { RealEstateSearchOverlay } from './RealEstateSearchOverlay';
import { RealEstateFooter } from './RealEstateFooter';

interface RealEstateShowcaseProps {
  standalone?: boolean;
}

export const RealEstateShowcase: React.FC<RealEstateShowcaseProps> = ({ standalone = true }) => {
  // Global State
  const [currency, setCurrency] = useState<'AED' | 'USD' | 'EUR' | 'GBP'>('AED');
  const [activeCommunity, setActiveCommunity] = useState<string>('all');
  const [selectedProperty, setSelectedProperty] = useState<LuxuryProperty | null>(null);
  const [viewingTargetProperty, setViewingTargetProperty] = useState<LuxuryProperty | null>(null);
  
  // Drawer & Overlay Visibilities
  const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);
  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [viewingDrawerOpen, setViewingDrawerOpen] = useState(false);

  // Saved & Compared Lists
  const [savedProperties, setSavedProperties] = useState<LuxuryProperty[]>([
    LUXURY_PROPERTIES_CATALOG[0],
    LUXURY_PROPERTIES_CATALOG[18]
  ]);
  const [comparedProperties, setComparedProperties] = useState<LuxuryProperty[]>([
    LUXURY_PROPERTIES_CATALOG[0],
    LUXURY_PROPERTIES_CATALOG[36]
  ]);

  // Search keyword from Hero
  const [heroSearchQuery, setHeroSearchQuery] = useState('');

  // Handlers
  const handleToggleSave = (prop: LuxuryProperty) => {
    setSavedProperties((prev) => {
      const exists = prev.some((p) => p.id === prop.id);
      if (exists) {
        return prev.filter((p) => p.id !== prop.id);
      } else {
        return [...prev, prop];
      }
    });
  };

  const handleToggleCompare = (prop: LuxuryProperty) => {
    setComparedProperties((prev) => {
      const exists = prev.some((p) => p.id === prop.id);
      if (exists) {
        return prev.filter((p) => p.id !== prop.id);
      } else {
        if (prev.length >= 4) {
          alert('You can compare a maximum of 4 luxury properties simultaneously.');
          return prev;
        }
        return [...prev, prop];
      }
    });
  };

  const handleRemoveCompare = (id: string) => {
    setComparedProperties((prev) => prev.filter((p) => p.id !== id));
  };

  const handleRemoveSaved = (id: string) => {
    setSavedProperties((prev) => prev.filter((p) => p.id !== id));
  };

  const handleHeroSearch = (query: string, community: string, type: string) => {
    setHeroSearchQuery(query);
    if (community) setActiveCommunity(community);
  };

  const handleBookViewing = (prop?: LuxuryProperty) => {
    if (prop) {
      setViewingTargetProperty(prop);
    } else {
      setViewingTargetProperty(null);
    }
    setViewingDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-amber-500 selection:text-zinc-950">
      {/* Fixed Navigation */}
      <RealEstateNav
        savedCount={savedProperties.length}
        compareCount={comparedProperties.length}
        onOpenSearch={() => setSearchOverlayOpen(true)}
        onOpenSaved={() => setSavedDrawerOpen(true)}
        onOpenCompare={() => setCompareModalOpen(true)}
        onOpenViewing={() => handleBookViewing()}
        activeCommunity={activeCommunity}
        onSelectCommunity={(id) => setActiveCommunity(id)}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* Hero Section */}
      <RealEstateHero
        onSearchSubmit={handleHeroSearch}
        onSelectCommunity={(id) => setActiveCommunity(id)}
        onOpenViewing={() => handleBookViewing()}
      />

      {/* 12 Prime UAE Communities Explorer */}
      <RealEstateCommunities
        activeCommunity={activeCommunity}
        onSelectCommunity={(id) => setActiveCommunity(id)}
      />

      {/* 200+ Luxury Property Catalog & Discovery Engine */}
      <RealEstatePropertyDiscovery
        properties={LUXURY_PROPERTIES_CATALOG}
        activeCommunity={activeCommunity}
        onSelectCommunity={(id) => setActiveCommunity(id)}
        savedIds={savedProperties.map((p) => p.id)}
        compareIds={comparedProperties.map((p) => p.id)}
        onToggleSave={handleToggleSave}
        onToggleCompare={handleToggleCompare}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        currency={currency}
        searchFilter={heroSearchQuery}
      />

      {/* Off-Plan Developer Studio */}
      <RealEstateOffPlanStudio
        onOpenViewing={() => handleBookViewing()}
      />

      {/* Interactive UAE Mortgage & ROI Calculator */}
      <RealEstateMortgageCalculator
        onOpenViewing={() => handleBookViewing()}
        currency={currency}
      />

      {/* UAE 10-Year Golden Visa & DLD Escrow Hub */}
      <RealEstateGoldenVisaHub
        onOpenViewing={() => handleBookViewing()}
      />

      {/* Institutional Market Research Journal */}
      <RealEstateJournal
        onOpenViewing={() => handleBookViewing()}
      />

      {/* Corporate Footer */}
      <RealEstateFooter
        onSelectCommunity={(id) => setActiveCommunity(id)}
        onOpenViewing={() => handleBookViewing()}
      />

      {/* Modals & Drawers */}
      {/* 1. PDP Property Modal */}
      {selectedProperty && (
        <RealEstatePropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isSaved={savedProperties.some((p) => p.id === selectedProperty.id)}
          isCompared={comparedProperties.some((p) => p.id === selectedProperty.id)}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onBookViewing={handleBookViewing}
          currency={currency}
        />
      )}

      {/* 2. Side-by-Side Comparator Modal */}
      {compareModalOpen && (
        <RealEstateComparator
          properties={comparedProperties}
          onClose={() => setCompareModalOpen(false)}
          onRemove={handleRemoveCompare}
          onSelectProperty={(p) => setSelectedProperty(p)}
          onBookViewing={handleBookViewing}
          currency={currency}
        />
      )}

      {/* 3. VIP Viewing Booking Drawer */}
      <RealEstateViewingDrawer
        isOpen={viewingDrawerOpen}
        onClose={() => setViewingDrawerOpen(false)}
        selectedProperty={viewingTargetProperty}
      />

      {/* 4. Saved Estates Portfolio Drawer */}
      <RealEstateSavedDrawer
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
        savedProperties={savedProperties}
        onRemove={handleRemoveSaved}
        onSelectProperty={(p) => setSelectedProperty(p)}
        onBookViewing={handleBookViewing}
        currency={currency}
      />

      {/* 5. ⌘K Instant Search Overlay */}
      <RealEstateSearchOverlay
        isOpen={searchOverlayOpen}
        onClose={() => setSearchOverlayOpen(false)}
        properties={LUXURY_PROPERTIES_CATALOG}
        onSelectProperty={(p) => setSelectedProperty(p)}
        onSelectCommunity={(id) => setActiveCommunity(id)}
        currency={currency}
      />
    </div>
  );
};
