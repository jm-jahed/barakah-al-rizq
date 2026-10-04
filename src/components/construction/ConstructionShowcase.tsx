'use strict';
'use client';

import React, { useState } from 'react';
import { ConstructionNav } from './ConstructionNav';
import { ConstructionHero } from './ConstructionHero';
import { ConstructionDisciplineExplorer } from './ConstructionDisciplineExplorer';
import { ConstructionScopeDiscovery } from './ConstructionScopeDiscovery';
import { ConstructionCostEstimator } from './ConstructionCostEstimator';
import { ConstructionFooter } from './ConstructionFooter';
import { ConstructionScopeModal } from './ConstructionScopeModal';
import { ConstructionComparator } from './ConstructionComparator';
import { ConstructionSiteSurveyDrawer } from './ConstructionSiteSurveyDrawer';
import { ConstructionSavedDrawer } from './ConstructionSavedDrawer';
import { ConstructionSearchOverlay } from './ConstructionSearchOverlay';
import { ConstructionScope, CONSTRUCTION_SCOPES_CATALOG } from '@/data/constructionCatalogData';

interface ConstructionShowcaseProps {
  standalone?: boolean;
}

export const ConstructionShowcase: React.FC<ConstructionShowcaseProps> = ({ standalone = true }) => {
  // State
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>(['VX-001', 'VX-021']);
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [selectedScope, setSelectedScope] = useState<ConstructionScope | null>(null);
  const [bookingScope, setBookingScope] = useState<ConstructionScope | null>(null);
  const [customEstimationPayload, setCustomEstimationPayload] = useState<any | null>(null);

  // Modals & Drawers
  const [isSurveyOpen, setIsSurveyOpen] = useState<boolean>(false);
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
  const handleSelectScope = (scope: ConstructionScope) => {
    setSelectedScope(scope);
  };

  // Book Single Scope Survey
  const handleBookScope = (scope: ConstructionScope) => {
    setCustomEstimationPayload(null);
    setBookingScope(scope);
    setIsSurveyOpen(true);
  };

  // Schedule Survey from Cost Estimator
  const handleScheduleSurvey = (payload: any) => {
    setBookingScope(null);
    setCustomEstimationPayload(payload);
    setIsSurveyOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Navigation Header */}
      <ConstructionNav
        onOpenSurvey={() => {
          setCustomEstimationPayload(null);
          setBookingScope(null);
          setIsSurveyOpen(true);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSaved={() => setIsSavedOpen(true)}
        onOpenComparator={() => setIsComparatorOpen(true)}
        savedCount={savedIds.length}
        compareCount={comparedIds.length}
      />

      <main>
        {/* Fullscreen Hero */}
        <ConstructionHero
          onOpenSurvey={() => {
            setCustomEstimationPayload(null);
            setBookingScope(null);
            setIsSurveyOpen(true);
          }}
          onExploreScopes={() => {
            const el = document.getElementById('scopes');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCostEstimator={() => {
            const el = document.getElementById('cost-estimator');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8 Disciplines Explorer */}
        <ConstructionDisciplineExplorer
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const el = document.getElementById('scopes');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 160+ Scopes Discovery Catalog */}
        <ConstructionScopeDiscovery
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          savedIds={savedIds}
          comparedIds={comparedIds}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onSelectScope={handleSelectScope}
          onBookScope={handleBookScope}
        />

        {/* Interactive Dubai Turnkey Cost Estimator */}
        <ConstructionCostEstimator onScheduleSurvey={handleScheduleSurvey} />
      </main>

      {/* Footer */}
      <ConstructionFooter />

      {/* Scope PDP Modal */}
      {selectedScope && (
        <ConstructionScopeModal
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
        <ConstructionComparator
          comparedIds={comparedIds}
          onClose={() => setIsComparatorOpen(false)}
          onRemove={(id) => setComparedIds((prev) => prev.filter((i) => i !== id))}
          onClear={() => setComparedIds([])}
          onBook={handleBookScope}
        />
      )}

      {/* Site Survey & Engineering Assessment Drawer */}
      <ConstructionSiteSurveyDrawer
        isOpen={isSurveyOpen}
        onClose={() => setIsSurveyOpen(false)}
        selectedScope={bookingScope}
        customEstimationPayload={customEstimationPayload}
      />

      {/* Saved Wishlist Drawer */}
      <ConstructionSavedDrawer
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedIds={savedIds}
        onRemoveSave={handleToggleSave}
        onClearAll={() => setSavedIds([])}
        onSelectScope={handleSelectScope}
        onBookScope={handleBookScope}
      />

      {/* Instant ⌘K Search Overlay */}
      <ConstructionSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectScope={handleSelectScope}
      />
    </div>
  );
};
