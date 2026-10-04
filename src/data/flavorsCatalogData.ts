// ============================================================
// FLAVORS — 200+ Product Catalog | BDT (৳) Currency Only
// Data is stored in flavorsCatalog.json for performance
// ============================================================

import catalogJson from './flavorsCatalog.json';

export interface FlavorsProduct {
  id: string;
  sku: string;
  name: string;
  categoryId: string;
  subcategory: string;
  description: string;
  price: number;
  previousPrice?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  tags: string[];
  ingredients: string[];
  allergens: string[];
  weight: string;
  serving: string;
  preparationInfo: string;
  isAvailable: boolean;
  isFeatured: boolean;
  isBestseller: boolean;
  isNew: boolean;
  deliveryAvailable: boolean;
  occasion: string[];
  availableBranches: string[];
  estimatedPrepTime: string;
}

// Cast JSON import to typed array
export const FLAVORS_CATALOG: FlavorsProduct[] = (catalogJson as FlavorsProduct[]).map(
  (product, index) => ({
    ...product,
    // Ensure every product has unique, non-duplicated images
    images: [
      `https://loremflickr.com/600/600/dessert,pastry,cake?lock=${index * 2 + 1}`,
      `https://loremflickr.com/600/600/sweet,bakery?lock=${index * 2 + 2}`,
    ],
  })
);

export function getProductsByCategory(categoryId: string): FlavorsProduct[] {
  if (categoryId === 'all') return FLAVORS_CATALOG;
  return FLAVORS_CATALOG.filter(p => p.categoryId === categoryId);
}

export function getProductsByOccasion(occasionId: string): FlavorsProduct[] {
  return FLAVORS_CATALOG.filter(p => p.occasion.includes(occasionId));
}

export function getProductsByBranch(branchId: string): FlavorsProduct[] {
  return FLAVORS_CATALOG.filter(
    p => p.availableBranches.includes(branchId) || p.availableBranches.includes('all')
  );
}

export function getFeaturedProducts(): FlavorsProduct[] {
  return FLAVORS_CATALOG.filter(p => p.isFeatured);
}

export function getBestsellerProducts(): FlavorsProduct[] {
  return FLAVORS_CATALOG.filter(p => p.isBestseller);
}

export function getNewProducts(): FlavorsProduct[] {
  return FLAVORS_CATALOG.filter(p => p.isNew);
}

export function formatBDT(amount: number): string {
  return `৳${amount.toLocaleString('en-BD')}`;
}
