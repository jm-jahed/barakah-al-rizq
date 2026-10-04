'use client';

import React, { useState } from 'react';
import { LogisticsNav } from './LogisticsNav';
import { LogisticsHero } from './LogisticsHero';
import { LiveTrackingBar } from './LiveTrackingBar';
import { TrustStrip } from './TrustStrip';
import { LogisticsSolutionsCatalog } from './LogisticsSolutionsCatalog';
import { LiveFleetRadarHUD } from './LiveFleetRadarHUD';
import { LogisticsRateCalculator } from './LogisticsRateCalculator';
import { ColdChainTelemetrySection } from './ColdChainTelemetrySection';
import { IndustrySolutions } from './IndustrySolutions';
import { CaseStudySection } from './CaseStudySection';
import { LogisticsFAQ } from './LogisticsFAQ';
import { LogisticsFinalCTA } from './LogisticsFinalCTA';
import { LogisticsFooter } from './LogisticsFooter';
import { SolutionQuickViewModal } from './SolutionQuickViewModal';
import { SolutionCompareDrawer } from './SolutionCompareDrawer';
import { ShipmentTrackingDrawer } from './ShipmentTrackingDrawer';
import { BookingRFQModal } from './BookingRFQModal';
import { LogisticsProductItem, LOGISTICS_PRODUCTS } from '@/data/logisticsData';

interface LogisticsShowcaseProps {
  standalone?: boolean;
}

export const LogisticsShowcase: React.FC<LogisticsShowcaseProps> = ({ standalone = true }) => {
  // Modal & Drawer states
  const [selectedProduct, setSelectedProduct] = useState<LogisticsProductItem | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [comparedProducts, setComparedProducts] = useState<LogisticsProductItem[]>([]);
  const [isTrackingDrawerOpen, setIsTrackingDrawerOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefillData, setBookingPrefillData] = useState<any>(null);

  // Handlers
  const handleOpenQuickView = (product: LogisticsProductItem) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleToggleCompare = (product: LogisticsProductItem) => {
    if (comparedProducts.some((p) => p.id === product.id)) {
      setComparedProducts(comparedProducts.filter((p) => p.id !== product.id));
    } else {
      if (comparedProducts.length < 4) {
        const next = [...comparedProducts, product];
        setComparedProducts(next);
        setIsCompareOpen(true);
      }
    }
  };

  const handleRemoveCompare = (productId: string) => {
    setComparedProducts(comparedProducts.filter((p) => p.id !== productId));
  };

  const handleClearCompare = () => {
    setComparedProducts([]);
  };

  const handleOpenBooking = (productOrService?: LogisticsProductItem | string) => {
    if (typeof productOrService === 'object' && productOrService !== null) {
      setBookingPrefillData({
        packageType: productOrService.title,
        sku: productOrService.sku,
        rate: `AED ${productOrService.startingPriceAED} / ${productOrService.pricingUnit}`
      });
    } else if (typeof productOrService === 'string') {
      setBookingPrefillData({
        packageType: productOrService
      });
    } else {
      setBookingPrefillData(null);
    }
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithData = (data: any) => {
    setBookingPrefillData(data);
    setIsBookingModalOpen(true);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-gray-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Sticky Global Navigation */}
      <LogisticsNav
        onOpenQuoteModal={handleOpenBooking}
        onOpenTrackingModal={() => setIsTrackingDrawerOpen(true)}
        activeCompareCount={comparedProducts.length}
        onOpenCompareDrawer={() => setIsCompareOpen(true)}
      />

      {/* Main Page Flow */}
      <main id="top">
        
        {/* Full-Screen Cinematic Hero */}
        <LogisticsHero
          onOpenQuoteModal={() => handleOpenBooking()}
          onOpenTrackingModal={() => setIsTrackingDrawerOpen(true)}
          onExploreCatalog={scrollToCatalog}
        />

        {/* Client Trust Verification Logos */}
        <TrustStrip />

        {/* 200+ Logistics Solutions Catalog Matrix */}
        <LogisticsSolutionsCatalog
          onSelectProduct={handleOpenQuickView}
          onBookProduct={handleOpenBooking}
          onToggleCompare={handleToggleCompare}
          comparedProductIds={comparedProducts.map((p) => p.id)}
        />

        {/* Live Satellite Fleet Radar HUD */}
        <LiveFleetRadarHUD
          onOpenTrackingModal={() => setIsTrackingDrawerOpen(true)}
        />

        {/* Dynamic Freight & Parcel Rate Calculator in AED */}
        <LogisticsRateCalculator
          onOpenQuoteModalWithData={handleOpenBookingWithData}
        />

        {/* GDP-Certified Cold-Chain BioPharma IoT Telemetry */}
        <ColdChainTelemetrySection />

        {/* Vertical Industry Specialized Blueprints */}
        <IndustrySolutions
          onOpenQuoteModal={handleOpenBooking}
        />

        {/* Interactive Live Tracking Search Widget */}
        <LiveTrackingBar />

        {/* Enterprise Case Studies & ROI Verification */}
        <CaseStudySection
          onOpenQuoteModal={() => handleOpenBooking()}
        />

        {/* FAQ Accordion */}
        <LogisticsFAQ />

        {/* Final High-Conversion CTA */}
        <LogisticsFinalCTA
          onOpenQuoteModal={() => handleOpenBooking()}
        />

      </main>

      {/* Global Enterprise Footer */}
      <LogisticsFooter />

      {/* Quick View Spec Sheet Modal */}
      <SolutionQuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onBookNow={handleOpenBooking}
      />

      {/* Side-by-Side Comparison Drawer */}
      <SolutionCompareDrawer
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        comparedProducts={comparedProducts}
        onRemoveProduct={handleRemoveCompare}
        onClearAll={handleClearCompare}
        onBookProduct={handleOpenBooking}
      />

      {/* Real-time Shipment Tracking Drawer */}
      <ShipmentTrackingDrawer
        isOpen={isTrackingDrawerOpen}
        onClose={() => setIsTrackingDrawerOpen(false)}
      />

      {/* Multi-step Booking & RFQ Modal */}
      <BookingRFQModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        prefillData={bookingPrefillData}
      />

    </div>
  );
};
