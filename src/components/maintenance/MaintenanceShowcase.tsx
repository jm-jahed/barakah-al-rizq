'use strict';
'use client';

import React, { useState } from 'react';
import { MaintenanceNav } from './MaintenanceNav';
import { MaintenanceHero } from './MaintenanceHero';
import { MaintenanceDisciplineExplorer } from './MaintenanceDisciplineExplorer';
import { MaintenanceScopeDiscovery } from './MaintenanceScopeDiscovery';
import { MaintenanceAmcEstimator } from './MaintenanceAmcEstimator';
import { MaintenanceFooter } from './MaintenanceFooter';
import { MaintenanceScopeModal } from './MaintenanceScopeModal';
import { MaintenanceComparator } from './MaintenanceComparator';
import { MaintenanceDispatchDrawer } from './MaintenanceDispatchDrawer';
import { MaintenanceSavedDrawer } from './MaintenanceSavedDrawer';
import { MaintenanceSearchOverlay } from './MaintenanceSearchOverlay';
import { MaintenanceScope, MAINTENANCE_SCOPES_CATALOG } from '@/data/maintenanceCatalogData';

interface MaintenanceShowcaseProps {
  standalone?: boolean;
}

export const MaintenanceShowcase: React.FC<MaintenanceShowcaseProps> = ({ standalone = true }) => {
  // State
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>(['AM-001', 'AM-021']);
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [selectedScope, setSelectedScope] = useState<MaintenanceScope | null>(null);
  const [bookingScope, setBookingScope] = useState<MaintenanceScope | null>(null);
  const [customAmcPayload, setCustomAmcPayload] = useState<any | null>(null);

  // Modals & Drawers
  const [isDispatchOpen, setIsDispatchOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSavedOpen, setIsSavedOpen] = useState<boolean>(false);
  const [isComparatorOpen, setIsComparatorOpen] = useState<boolean>(false);

  // Toggle Save
  const handleToggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Toggle Compare
  const handleToggleCompare = (id: string) => {
    setComparedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        return [prev[1], prev[2], id]; // max 3
      }
      return [...prev, id];
    });
  };

  // Select Scope for Detailed Modal
  const handleSelectScope = (scope: MaintenanceScope) => {
    setSelectedScope(scope);
  };

  // Book Single Scope Van Dispatch
  const handleBookScope = (scope: MaintenanceScope) => {
    setCustomAmcPayload(null);
    setBookingScope(scope);
    setIsDispatchOpen(true);
  };

  // Deploy Annual AMC Contract from Estimator
  const handleDeployAmc = (payload: any) => {
    setBookingScope(null);
    setCustomAmcPayload(payload);
    setIsDispatchOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-emerald-500 selection:text-neutral-950">
      {/* Navigation Header */}
      <MaintenanceNav
        onOpenDispatch={() => {
          setCustomAmcPayload(null);
          setBookingScope(null);
          setIsDispatchOpen(true);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSaved={() => setIsSavedOpen(true)}
        onOpenComparator={() => setIsComparatorOpen(true)}
        savedCount={savedIds.length}
        compareCount={comparedIds.length}
      />

      <main>
        {/* Fullscreen Hero */}
        <MaintenanceHero
          onOpenDispatch={() => {
            setCustomAmcPayload(null);
            setBookingScope(null);
            setIsDispatchOpen(true);
          }}
          onExploreScopes={() => {
            const el = document.getElementById('scopes');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenAmcEstimator={() => {
            const el = document.getElementById('amc-estimator');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8 MEP Disciplines Explorer */}
        <MaintenanceDisciplineExplorer
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const el = document.getElementById('scopes');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 160+ Maintenance Scopes Discovery Catalog */}
        <MaintenanceScopeDiscovery
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          savedIds={savedIds}
          comparedIds={comparedIds}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onSelectScope={handleSelectScope}
          onBookScope={handleBookScope}
        />

        {/* Interactive Villa AMC Estimator */}
        <MaintenanceAmcEstimator onDeployAmc={handleDeployAmc} />
      </main>

      {/* Footer */}
      <MaintenanceFooter />

      {/* Scope PDP Modal */}
      {selectedScope && (
        <MaintenanceScopeModal
          scope={selectedScope}
          onClose={() => setSelectedScope(null)}
          isSaved={savedIds.includes(selectedScope.id)}
          isCompared={comparedIds.includes(selectedScope.id)}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onBook={handleBookScope}
        />
      )}

      {/* Side-by-Side Comparator Modal */}
      {isComparatorOpen && (
        <MaintenanceComparator
          comparedIds={comparedIds}
          onClose={() => setIsComparatorOpen(false)}
          onRemove={(id) => setComparedIds((prev) => prev.filter((i) => i !== id))}
          onClear={() => setComparedIds([])}
          onBook={handleBookScope}
        />
      )}

      {/* Rapid Mobile Van Dispatch Drawer */}
      <MaintenanceDispatchDrawer
        isOpen={isDispatchOpen}
        onClose={() => setIsDispatchOpen(false)}
        selectedScope={bookingScope}
        customAmcPayload={customAmcPayload}
      />

      {/* Saved Wishlist Drawer */}
      <MaintenanceSavedDrawer
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedIds={savedIds}
        onRemoveSave={handleToggleSave}
        onClearAll={() => setSavedIds([])}
        onSelectScope={handleSelectScope}
        onBookScope={handleBookScope}
      />

      {/* Instant ⌘K Search Overlay */}
      <MaintenanceSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectScope={handleSelectScope}
      />
    </div>
  );
};
