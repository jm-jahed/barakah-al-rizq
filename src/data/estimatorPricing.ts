import { Code2, Bot, ShoppingBag, Layers } from 'lucide-react';
import React from 'react';

export interface EstimatorPlatformOption {
  id: string;
  name: string;
  basePrice: number;
  timeline: string;
  desc: string;
  icon: React.ElementType;
}

export interface EstimatorAddonOption {
  id: string;
  name: string;
  price: number;
  desc: string;
}

export interface EstimatorVelocityOption {
  id: 'standard' | 'rapid';
  name: string;
  label: string;
  timeline: string;
  surchargePercent: number;
}

export const ESTIMATOR_PLATFORMS: EstimatorPlatformOption[] = [
  {
    id: 'starter-web',
    name: 'Bespoke Web Platform',
    basePrice: 799,
    timeline: '10 – 14 Days',
    desc: 'Next.js 16 high-performance corporate platform',
    icon: Code2,
  },
  {
    id: 'ai-solution',
    name: 'AI & RAG Intelligence',
    basePrice: 1499,
    timeline: '2 – 3 Weeks',
    desc: 'Custom OpenAI RAG embeddings & multi-lingual agents',
    icon: Bot,
  },
  {
    id: 'ecommerce',
    name: 'Headless E-Commerce',
    basePrice: 2499,
    timeline: '2 – 3 Weeks',
    desc: 'Shopify / custom headless store with AED checkout',
    icon: ShoppingBag,
  },
  {
    id: 'full-saas',
    name: 'Enterprise SaaS',
    basePrice: 4999,
    timeline: '3 – 4 Weeks',
    desc: 'End-to-end cloud platform with custom databases',
    icon: Layers,
  },
];

export const ESTIMATOR_VELOCITIES: EstimatorVelocityOption[] = [
  {
    id: 'standard',
    name: 'Standard Schedule',
    label: 'Standard',
    timeline: '10 – 14 Days',
    surchargePercent: 0,
  },
  {
    id: 'rapid',
    name: 'Rapid MVP Sprint',
    label: 'Rapid Sprint',
    timeline: '48 – 72 Hours',
    surchargePercent: 0.25,
  },
];

export const ESTIMATOR_ADDONS: EstimatorAddonOption[] = [
  { id: 'arabic-rtl', name: 'Arabic RTL Localization', price: 200, desc: 'Dual English/Arabic layout & typography' },
  { id: 'payment-gateway', name: 'UAE Payment Engine (Stripe/Tabby)', price: 300, desc: 'AED checkout & split payments' },
  { id: 'seo-aeo', name: 'Deep SEO & AEO Optimization', price: 200, desc: 'Structured JSON-LD & LLM answer optimization' },
];

export interface ScopeQuotePayload {
  platformId: string;
  velocityId: 'standard' | 'rapid';
  addonIds: string[];
  customTitle?: string;
  customPrice?: number;
}

export interface QuoteCalculationResult {
  basePrice: number;
  velocitySurcharge: number;
  addonsTotal: number;
  total: number;
  platform: EstimatorPlatformOption;
  velocity: EstimatorVelocityOption;
  selectedAddons: EstimatorAddonOption[];
}

export function calculateEstimatorTotal(
  platformId: string,
  velocityId: 'standard' | 'rapid',
  addonIds: string[]
): QuoteCalculationResult {
  const platform = ESTIMATOR_PLATFORMS.find((p) => p.id === platformId) || ESTIMATOR_PLATFORMS[0];
  const velocity = ESTIMATOR_VELOCITIES.find((v) => v.id === velocityId) || ESTIMATOR_VELOCITIES[0];
  const selectedAddons = ESTIMATOR_ADDONS.filter((a) => addonIds.includes(a.id));

  const basePrice = platform.basePrice;
  const velocitySurcharge = Math.round(basePrice * velocity.surchargePercent);
  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const total = basePrice + velocitySurcharge + addonsTotal;

  return {
    basePrice,
    velocitySurcharge,
    addonsTotal,
    total,
    platform,
    velocity,
    selectedAddons,
  };
}
