import { Metadata } from 'next';
import UniversalRetailPOSPage from '@/app/projects/retail-pos/page';

export const metadata: Metadata = {
  title: 'Retail POS — Universal Retail Management, Billing & Inventory System | WebStudio UAE',
  description:
    'Commercial product-based retail POS & inventory management system for supermarkets, grocery stores, electronics, fashion, cosmetics, and retail businesses across Dubai and the UAE. Features barcode scanning, 5% UAE VAT, stock replenishment, and multi-currency billing.',
  keywords: [
    'Retail POS Dubai',
    'UAE Retail Management System',
    'Supermarket POS Software',
    'Inventory Management UAE',
    'Barcode Billing System',
    'FTA Tax Invoice POS',
    'WebStudio Retail POS',
  ],
  openGraph: {
    title: 'Retail POS — Commercial Retail Management & Billing System',
    description:
      'High-speed checkout, barcode scanning, stock tracking, and UAE FTA tax invoice compliance for retail enterprises.',
    type: 'website',
  },
};

export default function RetailPosPage() {
  return <UniversalRetailPOSPage />;
}
