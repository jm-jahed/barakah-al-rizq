'use client';

import React, { useState } from 'react';
import { CrispoNav } from './CrispoNav';
import { CrispoHero } from './CrispoHero';
import { OrderModeBar } from './OrderModeBar';
import { BestSellers } from './BestSellers';
import { MenuCategories } from './MenuCategories';
import { FullMenu } from './FullMenu';
import { ProductModal } from './ProductModal';
import { ComboSection } from './ComboSection';
import { OfferBanner } from './OfferBanner';
import { MealBuilder } from './MealBuilder';
import { FamilySection } from './FamilySection';
import { KidsMenu } from './KidsMenu';
import { DeliveryExperience } from './DeliveryExperience';
import { OrderTracking } from './OrderTracking';
import { RewardsSection } from './RewardsSection';
import { OffersSection } from './OffersSection';
import { RestaurantLocator } from './RestaurantLocator';
import { QualitySection } from './QualitySection';
import { SocialFeed } from './SocialFeed';
import { CustomerReviews } from './CustomerReviews';
import { CrispoFAQ } from './CrispoFAQ';
import { CartDrawer } from './CartDrawer';
import { CheckoutFlow } from './CheckoutFlow';
import { CrispoFinalCTA } from './CrispoFinalCTA';
import { CrispoFooter } from './CrispoFooter';
import { MobileOrderBar } from './MobileOrderBar';
import { CRISPO_PRODUCTS, CrispoProduct, CartItem, CrispoCombo } from '@/data/crispoData';
import { CrispoLanguageProvider, useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface CrispoShowcaseProps {
  standalone?: boolean;
}

function CrispoShowcaseInner() {
  const { isRtl, t } = useCrispoLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeOrderMode, setActiveOrderMode] = useState<'Delivery' | 'Pickup' | 'DineIn'>('Delivery');
  const [selectedLocation, setSelectedLocation] = useState('CRISPO Downtown Dubai');
  
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: CRISPO_PRODUCTS[0],
      quantity: 1,
      totalPrice: 39,
    },
    {
      product: CRISPO_PRODUCTS[3],
      quantity: 1,
      selectedAddons: [{ name: 'Melted Cheddar Cheese Sauce', priceAED: 4 }],
      totalPrice: 33,
    }
  ]);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<CrispoProduct | null>(null);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPriceAED = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleAddToCart = (product: CrispoProduct) => {
    const existingIdx = cartItems.findIndex((ci) => ci.product.id === product.id);
    if (existingIdx > -1) {
      const updated = [...cartItems];
      updated[existingIdx].quantity += 1;
      updated[existingIdx].totalPrice = updated[existingIdx].quantity * product.priceAED;
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { product, quantity: 1, totalPrice: product.priceAED }]);
    }
    setIsCartOpen(true);
  };

  const handleAddToCartWithAddons = (
    product: CrispoProduct,
    quantity: number,
    addons: { name: string; priceAED: number }[]
  ) => {
    const addonsTotal = addons.reduce((acc, curr) => acc + curr.priceAED, 0);
    const unitPrice = product.priceAED + addonsTotal;
    const totalPrice = unitPrice * quantity;

    setCartItems([
      ...cartItems,
      {
        product,
        quantity,
        selectedAddons: addons,
        totalPrice,
      }
    ]);
    setIsCartOpen(true);
  };

  const handleAddComboToCart = (combo: CrispoCombo) => {
    const comboProduct: CrispoProduct = {
      id: combo.id,
      code: 'CMB',
      name: combo.name,
      category: 'Combos',
      description: combo.includes.join(', '),
      priceAED: combo.comboPriceAED,
      calories: 1400,
      image: combo.image,
      ingredients: combo.includes,
      allergens: ['Gluten', 'Dairy']
    };
    handleAddToCart(comboProduct);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    const updated = cartItems
      .map((item) => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          if (newQty <= 0) return null;
          const unitPrice = item.product.priceAED + (item.selectedAddons?.reduce((acc, a) => acc + a.priceAED, 0) || 0);
          return { ...item, quantity: newQty, totalPrice: newQty * unitPrice };
        }
        return item;
      })
      .filter(Boolean) as CartItem[];

    setCartItems(updated);
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));
  };

  const handleOrderConfirmedClearCart = () => {
    setCartItems([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#12100E] text-[#FAF6EE] selection:bg-[#E63946] selection:text-white ${
      isRtl ? 'font-arabic' : 'font-sans'
    }`}>
      
      {/* Sticky QSR Navbar */}
      <CrispoNav
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        activeOrderMode={activeOrderMode}
        setActiveOrderMode={setActiveOrderMode}
      />

      <main id="top">
        
        {/* QSR Hero */}
        <CrispoHero
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          onExploreMenu={scrollToMenu}
        />

        {/* Quick Order Bar */}
        <OrderModeBar
          activeMode={activeOrderMode}
          setActiveMode={setActiveOrderMode}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          onStartOrder={() => setIsCheckoutOpen(true)}
        />

        {/* Best Sellers */}
        <BestSellers
          onAddToCart={handleAddToCart}
          onOpenProductModal={(p) => setSelectedProductModal(p)}
        />

        {/* Sticky Horizontal Menu Categories */}
        <MenuCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Full Interactive Menu Grid */}
        <FullMenu
          activeCategory={activeCategory}
          onAddToCart={handleAddToCart}
          onOpenProductModal={(p) => setSelectedProductModal(p)}
        />

        {/* Signature Value Combos */}
        <ComboSection
          onAddComboToCart={handleAddComboToCart}
        />

        {/* Promo Offer Banner with Live Countdown */}
        <OfferBanner
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Custom Meal Builder */}
        <MealBuilder
          onAddCustomMealToCart={(cm) => {
            const customProduct: CrispoProduct = {
              id: `custom-box-${Date.now()}`,
              code: 'MB-CUS',
              name: cm.name,
              category: 'Combos',
              description: cm.details,
              priceAED: cm.priceAED,
              calories: 950,
              image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1200&auto=format&fit=crop',
              ingredients: [cm.details],
              allergens: ['Gluten', 'Dairy']
            };
            handleAddToCart(customProduct);
          }}
        />

        {/* Family Sharing Section */}
        <FamilySection
          onExploreFamilyMeals={scrollToMenu}
        />

        {/* Kids Menu */}
        <KidsMenu
          onAddToCart={handleAddToCart}
        />

        {/* Delivery Experience & 28-Min SLA */}
        <DeliveryExperience
          onStartDeliveryOrder={() => setIsCheckoutOpen(true)}
        />

        {/* Real-time Order Tracking Console */}
        <OrderTracking />

        {/* Crispo Rewards Club */}
        <RewardsSection />

        {/* Weekly Promos & Offers */}
        <OffersSection
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Restaurant Locator */}
        <RestaurantLocator
          onStartOrderFromLocation={(locName) => {
            setSelectedLocation(locName);
            setIsCheckoutOpen(true);
          }}
        />

        {/* Quality Standards */}
        <QualitySection />

        {/* Social Feed */}
        <SocialFeed />

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Accordion FAQ */}
        <CrispoFAQ />

        {/* Final Conversion CTA */}
        <CrispoFinalCTA
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

      </main>

      {/* Footer */}
      <CrispoFooter />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Checkout Drawer Flow */}
      <CheckoutFlow
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderConfirmedClearCart={handleOrderConfirmedClearCart}
      />

      {/* Product Detail & Customization Modal */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onAddToCartWithAddons={handleAddToCartWithAddons}
      />

      {/* Fixed Bottom Mobile Order Bar */}
      <MobileOrderBar
        cartCount={cartCount}
        totalPriceAED={totalPriceAED}
        onOpenCart={() => setIsCartOpen(true)}
      />

    </div>
  );
}

export const CrispoShowcase: React.FC<CrispoShowcaseProps> = () => {
  return (
    <CrispoLanguageProvider>
      <CrispoShowcaseInner />
    </CrispoLanguageProvider>
  );
};
