'use strict';
'use client';

import React, { useState } from 'react';
import { MarketingNav } from './MarketingNav';
import { MarketingHero } from './MarketingHero';
import { GrowthDisciplineExplorer } from './GrowthDisciplineExplorer';
import { MarketingSolutionDiscovery } from './MarketingSolutionDiscovery';
import { MarketingRoiCalculator } from './MarketingRoiCalculator';
import { MarketingFooter } from './MarketingFooter';
import { MarketingSolutionModal } from './MarketingSolutionModal';
import { MarketingComparator } from './MarketingComparator';
import { MarketingAuditDrawer } from './MarketingAuditDrawer';
import { MarketingSavedDrawer } from './MarketingSavedDrawer';
import { MarketingSearchOverlay } from './MarketingSearchOverlay';
import { MarketingSolution, MARKETING_SOLUTIONS_CATALOG } from '@/data/marketingCatalogData';

interface MarketingShowcaseProps {
  standalone?: boolean;
}

export const MarketingShowcase: React.FC<MarketingShowcaseProps> = ({ standalone = true }) => {
  // State
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>(['NX-001', 'NX-021']);
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [selectedSolution, setSelectedSolution] = useState<MarketingSolution | null>(null);
  const [bookingSolution, setBookingSolution] = useState<MarketingSolution | null>(null);
  const [customProposalPayload, setCustomProposalPayload] = useState<any | null>(null);

  // Modals & Drawers
  const [isAuditOpen, setIsAuditOpen] = useState<boolean>(false);
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

  // Select Solution for Detailed Modal
  const handleSelectSolution = (solution: MarketingSolution) => {
    setSelectedSolution(solution);
  };

  // Book Single Solution Sprint
  const handleBookSolution = (solution: MarketingSolution) => {
    setCustomProposalPayload(null);
    setBookingSolution(solution);
    setIsAuditOpen(true);
  };

  // Generate Custom Proposal from ROI Simulator
  const handleGenerateProposal = (payload: any) => {
    setBookingSolution(null);
    setCustomProposalPayload(payload);
    setIsAuditOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Navigation Header */}
      <MarketingNav
        onOpenAudit={() => {
          setCustomProposalPayload(null);
          setBookingSolution(null);
          setIsAuditOpen(true);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSaved={() => setIsSavedOpen(true)}
        onOpenComparator={() => setIsComparatorOpen(true)}
        savedCount={savedIds.length}
        compareCount={comparedIds.length}
      />

      <main>
        {/* Fullscreen Hero */}
        <MarketingHero
          onOpenAudit={() => {
            setCustomProposalPayload(null);
            setBookingSolution(null);
            setIsAuditOpen(true);
          }}
          onExploreSolutions={() => {
            const el = document.getElementById('solutions');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenRoiSimulator={() => {
            const el = document.getElementById('roi-simulator');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8 Growth Disciplines Explorer */}
        <GrowthDisciplineExplorer
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const el = document.getElementById('solutions');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 160+ Solutions Discovery Catalog */}
        <MarketingSolutionDiscovery
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          savedIds={savedIds}
          comparedIds={comparedIds}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onSelectSolution={handleSelectSolution}
          onBookSolution={handleBookSolution}
        />

        {/* Interactive Dubai ROI Simulator */}
        <MarketingRoiCalculator onGenerateProposal={handleGenerateProposal} />
      </main>

      {/* Footer */}
      <MarketingFooter />

      {/* Solution Details PDP Modal */}
      {selectedSolution && (
        <MarketingSolutionModal
          solution={selectedSolution}
          onClose={() => setSelectedSolution(null)}
          isSaved={savedIds.includes(selectedSolution.id)}
          isCompared={comparedIds.includes(selectedSolution.id)}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onBook={handleBookSolution}
        />
      )}

      {/* Side-by-Side Comparator Modal */}
      {isComparatorOpen && (
        <MarketingComparator
          comparedIds={comparedIds}
          onClose={() => setIsComparatorOpen(false)}
          onRemove={(id) => setComparedIds((prev) => prev.filter((i) => i !== id))}
          onClear={() => setComparedIds([])}
          onBook={handleBookSolution}
        />
      )}

      {/* Audit & Growth Request Drawer */}
      <MarketingAuditDrawer
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        selectedSolution={bookingSolution}
        customProposalPayload={customProposalPayload}
      />

      {/* Saved Wishlist Drawer */}
      <MarketingSavedDrawer
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedIds={savedIds}
        onRemoveSave={handleToggleSave}
        onClearAll={() => setSavedIds([])}
        onSelectSolution={handleSelectSolution}
        onBookSolution={handleBookSolution}
      />

      {/* Instant ⌘K Search Overlay */}
      <MarketingSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSolution={handleSelectSolution}
      />
    </div>
  );
};
