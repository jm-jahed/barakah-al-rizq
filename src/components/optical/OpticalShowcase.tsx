'use client';
import React, { useState } from 'react';
import { OpticalNav } from './OpticalNav';
import { OpticalHero } from './OpticalHero';
import { OpticalMetrics } from './OpticalMetrics';
import { EyeCareFinder } from './EyeCareFinder';
import { FeaturedEyewear } from './FeaturedEyewear';
import { OpticalProductExplorer } from './OpticalProductExplorer';
import { OpticalDiscovery } from './OpticalDiscovery';
import { OpticalProductModal } from './OpticalProductModal';
import { FrameFinder } from './FrameFinder';
import { VirtualFrameTryOn } from './VirtualFrameTryOn';
import { FrameComparison } from './FrameComparison';
import { LensStudio } from './LensStudio';
import { PrescriptionUpload } from './PrescriptionUpload';
import { EyeCareServices } from './EyeCareServices';
import { EyeCareServiceModal } from './EyeCareServiceModal';
import { OptometristDirectory } from './OptometristDirectory';
import { OptometristProfileModal } from './OptometristProfileModal';
import { EyeTestBookingModal } from './EyeTestBookingModal';
import { VisionAssessment } from './VisionAssessment';
import { EyeHealthTopics } from './EyeHealthTopics';
import { BlueLightSection } from './BlueLightSection';
import { SunglassesCollection } from './SunglassesCollection';
import { KidsEyewear } from './KidsEyewear';
import { ContactLensStudio } from './ContactLensStudio';
import { OpticalCartDrawer } from './OpticalCartDrawer';
import { OpticalWishlist } from './OpticalWishlist';
import { OpticalCheckout } from './OpticalCheckout';
import { OpticalDelivery } from './OpticalDelivery';
import { OpticalStoreExperience } from './OpticalStoreExperience';
import { VisionTransformation } from './VisionTransformation';
import { EyewearStyleGuide } from './EyewearStyleGuide';
import { OpticalGallery } from './OpticalGallery';
import { OpticalReviews } from './OpticalReviews';
import { OpticalJournal } from './OpticalJournal';
import { OpticalLocation } from './OpticalLocation';
import { OpticalFAQ } from './OpticalFAQ';
import { OpticalFinalCTA } from './OpticalFinalCTA';
import { OpticalContact } from './OpticalContact';
import { OpticalFooter } from './OpticalFooter';
import { EyewearProduct, EyeCareService, Optometrist } from '@/data/opticalData';

export const OpticalShowcase: React.FC<any> = () => {
  const [selectedProductModal, setSelectedProductModal] = useState<EyewearProduct | null>(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState<EyeCareService | null>(null);
  const [selectedOptometristModal, setSelectedOptometristModal] = useState<Optometrist | null>(null);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialDoc, setBookingInitialDoc] = useState<string | undefined>(undefined);

  const [cart, setCart] = useState<EyewearProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddToCart = (product: EyewearProduct) => {
    setCart(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleToggleWishlist = (id: string) => {
    setWishlistIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const handleOpenBooking = (docId?: string) => {
    setBookingInitialDoc(docId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070D18] text-white font-sans selection:bg-sky-400 selection:text-slate-950">
      <OpticalNav
        onOpenBooking={() => handleOpenBooking()}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        cartCount={cart.length}
        wishlistCount={wishlistIds.length}
        onSearch={(q: string) => setSearchQuery(q)}
      />
      <OpticalHero onOpenBooking={() => handleOpenBooking()} />
      <OpticalMetrics />
      <EyeCareFinder onSelectService={(s: EyeCareService) => setSelectedServiceModal(s)} onOpenBooking={() => handleOpenBooking()} />
      <OpticalDiscovery
        initialSearchQuery={searchQuery}
        onAddToCart={handleAddToCart}
        onBookExam={() => handleOpenBooking()}
      />
      <FrameFinder onSelectProduct={(p: EyewearProduct) => setSelectedProductModal(p)} />
      <VirtualFrameTryOn />
      <FrameComparison />
      <LensStudio />
      <PrescriptionUpload />
      <EyeCareServices onSelectService={(s: EyeCareService) => setSelectedServiceModal(s)} onOpenBooking={() => handleOpenBooking()} />
      <OptometristDirectory onSelectOptometrist={(d: Optometrist) => setSelectedOptometristModal(d)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <VisionAssessment />
      <EyeHealthTopics />
      <BlueLightSection />
      <SunglassesCollection />
      <KidsEyewear />
      <ContactLensStudio />
      <OpticalDelivery />
      <OpticalStoreExperience />
      <VisionTransformation />
      <EyewearStyleGuide />
      <OpticalGallery />
      <OpticalReviews />
      <OpticalJournal />
      <OpticalLocation />
      <OpticalFAQ />
      <OpticalFinalCTA onOpenBooking={() => handleOpenBooking()} />
      <OpticalContact />
      <OpticalFooter />

      {/* Modals & Drawers */}
      <OpticalProductModal item={selectedProductModal} onClose={() => setSelectedProductModal(null)} onAddToCart={handleAddToCart} />
      <EyeCareServiceModal service={selectedServiceModal} onClose={() => setSelectedServiceModal(null)} onOpenBooking={() => handleOpenBooking()} />
      <OptometristProfileModal optometrist={selectedOptometristModal} onClose={() => setSelectedOptometristModal(null)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <EyeTestBookingModal isOpen={isBookingOpen} initialOptometristId={bookingInitialDoc} onClose={() => setIsBookingOpen(false)} />
      <OpticalCartDrawer isOpen={isCartOpen} cart={cart} onClose={() => setIsCartOpen(false)} onRemove={handleRemoveFromCart} onOpenCheckout={() => setIsCheckoutOpen(true)} />
      <OpticalWishlist isOpen={isWishlistOpen} wishlistIds={wishlistIds} onClose={() => setIsWishlistOpen(false)} onToggle={handleToggleWishlist} />
      <OpticalCheckout isOpen={isCheckoutOpen} cart={cart} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
};
