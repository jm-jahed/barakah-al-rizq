'use client';

import React, { useRef } from 'react';
import { SupermarketThemeProvider } from '../../context/SupermarketThemeContext';
import { SupermarketLanguageProvider } from '../../context/SupermarketLanguageContext';
import { SupermarketCartProvider, useSupermarketCart } from '../../context/SupermarketCartContext';
import SupermarketTopBar from './SupermarketTopBar';
import SupermarketHeader from './SupermarketHeader';
import SupermarketCategoryNav from './SupermarketCategoryNav';
import SupermarketHero from './SupermarketHero';
import SupermarketCategoryGrid from './SupermarketCategoryGrid';
import SupermarketDealsSection from './SupermarketDealsSection';
import SupermarketUnder10Section from './SupermarketUnder10Section';
import SupermarketFreshMarket from './SupermarketFreshMarket';
import SupermarketWeeklyBundles from './SupermarketWeeklyBundles';
import SupermarketUaeLocal from './SupermarketUaeLocal';
import SupermarketBrandShowcase from './SupermarketBrandShowcase';
import SupermarketCatalogView from './SupermarketCatalogView';
import SupermarketDeliveryPromise from './SupermarketDeliveryPromise';
import SupermarketReviews from './SupermarketReviews';
import SupermarketFAQ from './SupermarketFAQ';
import SupermarketFooter from './SupermarketFooter';
import SupermarketProductModal from './SupermarketProductModal';
import SupermarketCartDrawer from './SupermarketCartDrawer';
import SupermarketWishlistDrawer from './SupermarketWishlistDrawer';
import SupermarketAccountModal from './SupermarketAccountModal';
import SupermarketCheckoutModal from './SupermarketCheckoutModal';
import SupermarketFloatingCartBar from './SupermarketFloatingCartBar';

function SupermarketInner() {
  const catalogRef = useRef<HTMLDivElement>(null);
  const { setSelectedCategorySlug, setSearchQuery } = useSupermarketCart();

  const scrollToCatalog = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (slug: string | null) => {
    setSelectedCategorySlug(slug);
    scrollToCatalog();
  };

  const handleSelectBrand = (brand: string) => {
    setSearchQuery(brand);
    scrollToCatalog();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* 1. Top Delivery & Language Bar */}
      <SupermarketTopBar />

      {/* 2. Main Header with Search & Cart */}
      <SupermarketHeader
        onOpenCategoriesModal={scrollToCatalog}
        onNavigateToCatalog={scrollToCatalog}
      />

      {/* 3. Horizontal Fast Category Nav */}
      <SupermarketCategoryNav onSelectCategory={handleSelectCategory} />

      {/* 4. Hero Section */}
      <SupermarketHero
        onShopClick={scrollToCatalog}
        onDealsClick={() => {
          setSelectedCategorySlug('offers-clearance');
          scrollToCatalog();
        }}
      />

      {/* 5. Shop by Category Grid (40 Aisles) */}
      <SupermarketCategoryGrid onSelectCategory={handleSelectCategory} />

      {/* 6. Today's Super Deals */}
      <SupermarketDealsSection onViewAllDeals={scrollToCatalog} />

      {/* 7. Under AED 10 Affordability Section */}
      <SupermarketUnder10Section onViewMore={scrollToCatalog} />

      {/* 8. Fresh Market (Produce, Butchery, Seafood, Bakery) */}
      <SupermarketFreshMarket onViewCategory={handleSelectCategory} />

      {/* 9. Curated Family Weekly Value Packs */}
      <SupermarketWeeklyBundles />

      {/* 10. UAE Local Farms Harvest */}
      <SupermarketUaeLocal onViewAllLocal={scrollToCatalog} />

      {/* 11. Leading Supermarket Brands */}
      <SupermarketBrandShowcase onSelectBrand={handleSelectBrand} />

      {/* 12. Full 1,000+ Catalog View with Filters & Search */}
      <div ref={catalogRef}>
        <SupermarketCatalogView />
      </div>

      {/* 13. Trust & Delivery Pillars */}
      <SupermarketDeliveryPromise />

      {/* 14. Customer Testimonials */}
      <SupermarketReviews />

      {/* 15. FAQ Accordion */}
      <SupermarketFAQ />

      {/* 16. Footer */}
      <SupermarketFooter />

      {/* Global Interactive Drawers & Modals */}
      <SupermarketProductModal />
      <SupermarketCartDrawer />
      <SupermarketWishlistDrawer />
      <SupermarketAccountModal />
      <SupermarketCheckoutModal />
      <SupermarketFloatingCartBar />

    </div>
  );
}

export default function SupermarketShowcase() {
  return (
    <SupermarketThemeProvider>
      <SupermarketLanguageProvider>
        <SupermarketCartProvider>
          <SupermarketInner />
        </SupermarketCartProvider>
      </SupermarketLanguageProvider>
    </SupermarketThemeProvider>
  );
}
