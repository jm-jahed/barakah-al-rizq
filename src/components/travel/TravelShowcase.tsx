'use client';

import React, { useState } from 'react';
import { TravelNav } from './TravelNav';
import { TravelHero } from './TravelHero';
import { TravelMetrics } from './TravelMetrics';
import { TravelDiscovery } from './TravelDiscovery';
import { LuxuryPackages } from './LuxuryPackages';
import { SmartTripMatcher } from './SmartTripMatcher';
import { ItineraryBuilder } from './ItineraryBuilder';
import { TravelBudgetCalculator } from './TravelBudgetCalculator';
import { LuxuryHotels } from './LuxuryHotels';
import { PrivateExperiences } from './PrivateExperiences';
import { UAEDeparture } from './UAEDeparture';
import { TravelMembership } from './TravelMembership';
import { TravelJournal } from './TravelJournal';
import { TravelReviews } from './TravelReviews';
import { TravelFAQ } from './TravelFAQ';
import { TravelFinalCTA } from './TravelFinalCTA';
import { TravelFooter } from './TravelFooter';

import { DestinationDetailModal } from './DestinationDetailModal';
import { PackageDetailModal } from './PackageDetailModal';
import { HotelDetailModal } from './HotelDetailModal';
import { ArticleDetailModal } from './ArticleDetailModal';
import { TripComparisonDrawer } from './TripComparisonDrawer';
import { TravelWishlistDrawer } from './TravelWishlistDrawer';
import { TravelInquiryModal } from './TravelInquiryModal';

import { Destination, TravelPackage, LuxuryHotel, Article } from '@/data/travelData';

export const TravelShowcase: React.FC = () => {
  // Modal & Drawer State
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<LuxuryHotel | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [inquiryContext, setInquiryContext] = useState<string>('');
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);

  // Collections State
  const [wishlistIds, setWishlistIds] = useState<string[]>(['dest-maldives']);
  const [compareIds, setCompareIds] = useState<string[]>(['pkg-maldives-royal', 'pkg-swiss-grandeur']);

  const handleToggleWishlist = (destId: string) => {
    setWishlistIds((prev) => 
      prev.includes(destId) ? prev.filter((id) => id !== destId) : [...prev, destId]
    );
  };

  const handleRemoveWishlist = (destId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== destId));
  };

  const handleToggleCompare = (pkgId: string) => {
    setCompareIds((prev) => 
      prev.includes(pkgId) ? prev.filter((id) => id !== pkgId) : [...prev, pkgId]
    );
  };

  const handleRemoveCompare = (pkgId: string) => {
    setCompareIds((prev) => prev.filter((id) => id !== pkgId));
  };

  const handleOpenInquiry = (context: string = '') => {
    setInquiryContext(context);
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
    setInquiryContext('');
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1. Luxury Sticky Nav */}
      <TravelNav
        wishlistCount={wishlistIds.length}
        compareCount={compareIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 2. Cinematic Hero with Direct Flights Marquee */}
      <TravelHero onOpenInquiry={handleOpenInquiry} />

      {/* 3. Luxury Travel Proof HUD & Metrics */}
      <TravelMetrics />

      {/* 4. Global Sanctuaries Discovery Catalog */}
      <TravelDiscovery
        onSelectDestination={(dest) => setSelectedDestination(dest)}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 5. Curated All-Inclusive Luxury Packages */}
      <LuxuryPackages
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
        onToggleCompare={handleToggleCompare}
        compareIds={compareIds}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 6. AI Trip Matcher for UAE Holidays */}
      <SmartTripMatcher
        onSelectDestination={(dest) => setSelectedDestination(dest)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 7. Interactive Itinerary & Quote Builder */}
      <ItineraryBuilder onOpenInquiry={handleOpenInquiry} />

      {/* 8. Private Jet Aviation Desk & Charter Calculator */}
      <TravelBudgetCalculator onOpenInquiry={handleOpenInquiry} />

      {/* 9. Palatial Residences & 5-Star Suites Visualizer */}
      <LuxuryHotels
        onSelectHotel={(hotel) => setSelectedHotel(hotel)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 10. Private & Bespoke VIP Experiences */}
      <PrivateExperiences onOpenInquiry={handleOpenInquiry} />

      {/* 11. UAE Home-to-Tarmac VIP Protocols */}
      <UAEDeparture onOpenInquiry={handleOpenInquiry} />

      {/* 12. VIP Membership Retainers */}
      <TravelMembership onOpenInquiry={handleOpenInquiry} />

      {/* 13. Editorial Travel Journal */}
      <TravelJournal onSelectArticle={(art) => setSelectedArticle(art)} />

      {/* 14. Verified Client Testimonials */}
      <TravelReviews />

      {/* 15. FAQ & Travel Policies */}
      <TravelFAQ />

      {/* 16. Final Booking CTA */}
      <TravelFinalCTA onOpenInquiry={handleOpenInquiry} />

      {/* 17. Luxury Footer */}
      <TravelFooter />

      {/* MODAL 1: Destination Detail Modal */}
      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onOpenInquiry={handleOpenInquiry}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedDestination ? wishlistIds.includes(selectedDestination.id) : false}
      />

      {/* MODAL 2: Day-by-Day Package Detail Modal */}
      <PackageDetailModal
        packageData={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* MODAL 3: Hotel Suite Detail Modal */}
      <HotelDetailModal
        hotel={selectedHotel}
        onClose={() => setSelectedHotel(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* MODAL 4: Article Detail Modal */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* DRAWER 1: Side-by-Side Trip Comparison Drawer */}
      <TripComparisonDrawer
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        compareIds={compareIds}
        onRemoveCompare={handleRemoveCompare}
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* DRAWER 2: Saved Wishlist Drawer */}
      <TravelWishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onRemoveWishlist={handleRemoveWishlist}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* MODAL 5: Bespoke Consultation Inquiry Modal */}
      <TravelInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
        initialContext={inquiryContext}
      />

    </div>
  );
};
