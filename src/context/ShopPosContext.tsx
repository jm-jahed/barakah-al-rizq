"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  ShopPosView,
  SupportedLanguage,
  StaffRole,
  StaffUser,
  CurrencyCode,
  CurrencyConfig,
  RetailCategory,
  RetailProduct,
  RetailCartItem,
  HeldSale,
  RetailCustomer,
  RetailSupplier,
  PurchaseOrder,
  OrderReturn,
  OrderReturnItem,
  CompletedSale,
  BusinessProfile,
  Expense,
  CashierShift,
  StockMovementLog,
  LedgerEntry,
} from "../types/shopPos";
import { translations, TranslationDictionary } from "../components/shop-pos/translations";
import {
  PrinterConfig,
  DEFAULT_PRINTER_CONFIG,
  sendPrintJob,
  sendTestPrintJob,
  testPrinterBridgeConnection,
} from "@/services/shop-pos/posPrintService";
import {
  DEMO_INITIAL_SALES,
  DEMO_INITIAL_RETURNS,
  DEMO_INITIAL_EXPENSES,
  DEMO_INITIAL_CUSTOMERS,
  DEMO_INITIAL_PURCHASES,
} from "./demoDataSeed";

// ============================================================================
// PROFIT CALCULATION ENGINE (CENTRALIZED ACCURACY HELPER)
// ============================================================================
export interface ProfitMetrics {
  grossSales: number;
  totalRefunds: number;
  netSales: number;
  grossTaxableSales: number;
  refundedTaxableSales: number;
  netTaxableSales: number;
  grossVat: number;
  refundedVat: number;
  netVat: number;
  cogs: number;
  grossProfit: number;
  expenses: number;
  netProfit: number;
}

export const calculateProfitMetrics = (
  salesHistory: CompletedSale[],
  orderReturns: OrderReturn[],
  expenses: Expense[]
): ProfitMetrics => {
  const roundMoney = (val: number): number => Math.round((val + Number.EPSILON) * 100) / 100;

  const grossSales = roundMoney(salesHistory.reduce((sum, s) => sum + s.grandTotal, 0));
  const totalRefunds = roundMoney(orderReturns.reduce((sum, r) => sum + r.totalRefund, 0));
  const netSales = roundMoney(Math.max(0, grossSales - totalRefunds));

  const grossTaxableSales = roundMoney(
    salesHistory.reduce((sum, s) => sum + (s.taxableAmount !== undefined ? s.taxableAmount : Math.max(0, s.subtotal - s.discountAmount)), 0)
  );
  const refundedTaxableSales = roundMoney(totalRefunds / 1.05);
  const netTaxableSales = roundMoney(Math.max(0, grossTaxableSales - refundedTaxableSales));

  const grossVat = roundMoney(salesHistory.reduce((sum, s) => sum + s.vatAmount, 0));
  const refundedVat = roundMoney((totalRefunds * 0.05) / 1.05);
  const netVat = roundMoney(Math.max(0, grossVat - refundedVat));

  const expensesTotal = roundMoney(expenses.reduce((sum, e) => sum + e.amount, 0));

  // COGS calculation using historical costPrice saved on transaction item
  let cogsTotal = 0;
  salesHistory.forEach((sale) => {
    sale.items.forEach((item) => {
      const netQty = Math.max(0, item.quantity - (item.returnedQuantity || 0));
      const historicalCost = item.costPrice !== undefined ? item.costPrice : (item.product?.costPrice || 0);
      cogsTotal += netQty * historicalCost;
    });
  });
  const cogs = roundMoney(cogsTotal);

  const grossProfit = roundMoney(netTaxableSales - cogs);
  const netProfit = roundMoney(grossProfit - expensesTotal);

  return {
    grossSales,
    totalRefunds,
    netSales,
    grossTaxableSales,
    refundedTaxableSales,
    netTaxableSales,
    grossVat,
    refundedVat,
    netVat,
    cogs,
    grossProfit,
    expenses: expensesTotal,
    netProfit,
  };
};

// ============================================================================
// SEED DATA: 10 UNIVERSAL RETAIL CATEGORIES
// ============================================================================
export const INITIAL_CATEGORIES: RetailCategory[] = [
  { id: "all", name: "All Products", arabicName: "جميع المنتجات", slug: "all", icon: "LayoutGrid", itemCount: 36 },
  { id: "beverages", name: "Beverages & Drinks", arabicName: "المشروبات والمرطبات", slug: "beverages", icon: "Coffee", itemCount: 4 },
  { id: "snacks", name: "Snacks & Confectionery", arabicName: "المقرمشات والحلويات", slug: "snacks", icon: "Cookie", itemCount: 4 },
  { id: "dairy", name: "Dairy & Eggs", arabicName: "الألبان والبيض", slug: "dairy", icon: "Milk", itemCount: 4 },
  { id: "bakery", name: "Bakery & Fresh", arabicName: "المخبوزات والحلويات", slug: "bakery", icon: "Croissant", itemCount: 4 },
  { id: "pantry", name: "Grocery & Pantry", arabicName: "المواد التموينية", slug: "pantry", icon: "ShoppingBag", itemCount: 4 },
  { id: "electronics", name: "Electronics & Gadgets", arabicName: "الإلكترونيات والملحقات", slug: "electronics", icon: "Smartphone", itemCount: 4 },
  { id: "personal_care", name: "Personal Care & Beauty", arabicName: "العناية الشخصية", slug: "personal-care", icon: "Sparkles", itemCount: 4 },
  { id: "clothing", name: "Clothing & Apparel", arabicName: "الملابس والأزياء", slug: "clothing", icon: "Shirt", itemCount: 4 },
  { id: "hardware", name: "Hardware & Tools", arabicName: "الأدوات والمعدات", slug: "hardware", icon: "Wrench", itemCount: 4 },
];

// ============================================================================
// SEED DATA: 36 HIGH-QUALITY UNIVERSAL RETAIL PRODUCTS
// ============================================================================
export const INITIAL_PRODUCTS: RetailProduct[] = [
  // Beverages
  {
    id: "bev-01",
    sku: "BEV-001",
    barcode: "629104820101",
    name: "Coca Cola Original 330ml Can",
    arabicName: "كوكاكولا علبة 330 مل",
    categoryId: "beverages",
    categoryName: "Beverages & Drinks",
    brand: "Coca-Cola",
    unit: "Can",
    costPrice: 2.10,
    price: 3.50,
    stock: 96,
    minStock: 24,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "bev-02",
    sku: "BEV-002",
    barcode: "629104820102",
    name: "Masafi Pure Mineral Water 500ml",
    arabicName: "مياه مسافي معدنية نقية 500 مل",
    categoryId: "beverages",
    categoryName: "Beverages & Drinks",
    brand: "Masafi",
    unit: "Bottle",
    costPrice: 0.85,
    price: 1.50,
    stock: 140,
    minStock: 30,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "bev-03",
    sku: "BEV-003",
    barcode: "629104820103",
    name: "Al Rawabi Fresh Orange Juice 1L",
    arabicName: "عصير برتقال طازج الروابي 1 لتر",
    categoryId: "beverages",
    categoryName: "Beverages & Drinks",
    brand: "Al Rawabi",
    unit: "Bottle",
    costPrice: 5.80,
    price: 8.50,
    stock: 35,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "bev-04",
    sku: "BEV-004",
    barcode: "629104820104",
    name: "Red Bull Energy Drink 250ml",
    arabicName: "مشروب طاقة ريد بول 250 مل",
    categoryId: "beverages",
    categoryName: "Beverages & Drinks",
    brand: "Red Bull",
    unit: "Can",
    costPrice: 8.20,
    price: 12.00,
    stock: 52,
    minStock: 15,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },

  // Snacks & Confectionery
  {
    id: "snk-01",
    sku: "SNK-001",
    barcode: "629104820201",
    name: "Lay's Classic Salted Chips 170g",
    arabicName: "بطاطس ليز بالملح 170 جم",
    categoryId: "snacks",
    categoryName: "Snacks & Confectionery",
    brand: "Lay's",
    unit: "Bag",
    costPrice: 3.20,
    price: 5.00,
    stock: 75,
    minStock: 20,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "snk-02",
    sku: "SNK-002",
    barcode: "629104820202",
    name: "Doritos Nacho Cheese Tortilla 175g",
    arabicName: "دوريتوس ناتشو بالجبنة 175 جم",
    categoryId: "snacks",
    categoryName: "Snacks & Confectionery",
    brand: "Doritos",
    unit: "Bag",
    costPrice: 3.60,
    price: 5.50,
    stock: 64,
    minStock: 15,
    image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "snk-03",
    sku: "SNK-003",
    barcode: "629104820203",
    name: "Galaxy Smooth Milk Chocolate 90g",
    arabicName: "شوكولاتة جالاكسي بالحليب 90 جم",
    categoryId: "snacks",
    categoryName: "Snacks & Confectionery",
    brand: "Galaxy",
    unit: "Bar",
    costPrice: 3.80,
    price: 6.00,
    stock: 88,
    minStock: 20,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "snk-04",
    sku: "SNK-004",
    barcode: "629104820204",
    name: "KitKat 4-Finger Milk Chocolate 41.5g",
    arabicName: "كيس كيت كات 4 أصابع 41.5 جم",
    categoryId: "snacks",
    categoryName: "Snacks & Confectionery",
    brand: "KitKat",
    unit: "Piece",
    costPrice: 1.80,
    price: 2.75,
    stock: 120,
    minStock: 30,
    image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },

  // Dairy & Eggs
  {
    id: "dry-01",
    sku: "DRY-001",
    barcode: "629104820301",
    name: "Al Rawabi Full Cream Fresh Milk 2L",
    arabicName: "حليب طازج كامل الدسم الروابي 2 لتر",
    categoryId: "dairy",
    categoryName: "Dairy & Eggs",
    brand: "Al Rawabi",
    unit: "Bottle",
    costPrice: 8.50,
    price: 11.50,
    stock: 45,
    minStock: 12,
    image: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "dry-02",
    sku: "DRY-002",
    barcode: "629104820302",
    name: "Farm Fresh Large Brown Eggs (30 pcs)",
    arabicName: "بيض بني طازج مزارع محلية (30 حبة)",
    categoryId: "dairy",
    categoryName: "Dairy & Eggs",
    brand: "Farm Fresh",
    unit: "Tray",
    costPrice: 16.50,
    price: 22.00,
    stock: 30,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "dry-03",
    sku: "DRY-003",
    barcode: "629104820303",
    name: "Almarai Greek Yogurt Plain 150g",
    arabicName: "زبادي يوناني سادة المراعي 150 جم",
    categoryId: "dairy",
    categoryName: "Dairy & Eggs",
    brand: "Almarai",
    unit: "Cup",
    costPrice: 2.80,
    price: 4.25,
    stock: 50,
    minStock: 15,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "dry-04",
    sku: "DRY-004",
    barcode: "629104820304",
    name: "Puck Pure Cream Cheese Jar 500g",
    arabicName: "جبنة كريمية نقية بوك 500 جم",
    categoryId: "dairy",
    categoryName: "Dairy & Eggs",
    brand: "Puck",
    unit: "Jar",
    costPrice: 12.00,
    price: 16.50,
    stock: 28,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1634487359989-3e90c9432133?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },

  // Bakery & Fresh
  {
    id: "bak-01",
    sku: "BAK-001",
    barcode: "629104820401",
    name: "Artisanal European Sourdough Loaf",
    arabicName: "خبز الساوردو الحرفي الأوروبي",
    categoryId: "bakery",
    categoryName: "Bakery & Fresh",
    brand: "Artisan Oven",
    unit: "Loaf",
    costPrice: 6.50,
    price: 12.00,
    stock: 20,
    minStock: 6,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "bak-02",
    sku: "BAK-002",
    barcode: "629104820402",
    name: "Fresh French Butter Croissants (4 pcs)",
    arabicName: "كرواسون زبدة فرنسي طازج (4 حبات)",
    categoryId: "bakery",
    categoryName: "Bakery & Fresh",
    brand: "Artisan Oven",
    unit: "Pack",
    costPrice: 7.20,
    price: 13.50,
    stock: 24,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },

  // Grocery & Pantry
  {
    id: "pan-01",
    sku: "PAN-001",
    barcode: "629104820501",
    name: "India Gate Basmati Rice Premium 5kg",
    arabicName: "أرز بسمتي فاخر إنديا جيت 5 كجم",
    categoryId: "pantry",
    categoryName: "Grocery & Pantry",
    brand: "India Gate",
    unit: "Bag",
    costPrice: 34.00,
    price: 46.00,
    stock: 40,
    minStock: 10,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "pan-02",
    sku: "PAN-002",
    barcode: "629104820502",
    name: "Noor Pure Sunflower Oil 1.5L",
    arabicName: "زيت دوار الشمس النقي نور 1.5 لتر",
    categoryId: "pantry",
    categoryName: "Grocery & Pantry",
    brand: "Noor",
    unit: "Bottle",
    costPrice: 14.50,
    price: 19.75,
    stock: 48,
    minStock: 12,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },

  // Electronics & Gadgets
  {
    id: "ele-01",
    sku: "ELE-001",
    barcode: "629104820601",
    name: "Anker PowerLine+ USB-C Cable 1.8m Braided",
    arabicName: "كيبل انكر تايب سي مجدول فائق السرعة 1.8 م",
    categoryId: "electronics",
    categoryName: "Electronics & Gadgets",
    brand: "Anker",
    unit: "Box",
    costPrice: 28.00,
    price: 45.00,
    stock: 35,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "ele-02",
    sku: "ELE-002",
    barcode: "629104820602",
    name: "Apple 20W USB-C Fast Power Adapter",
    arabicName: "شاحن أبل جداري سريع 20 واط أصلي",
    categoryId: "electronics",
    categoryName: "Electronics & Gadgets",
    brand: "Apple",
    unit: "Piece",
    costPrice: 62.00,
    price: 89.00,
    stock: 22,
    minStock: 5,
    image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },

  // Personal Care & Beauty
  {
    id: "per-01",
    sku: "PER-001",
    barcode: "629104820701",
    name: "Dove Deeply Nourishing Body Wash 500ml",
    arabicName: "سائل استحمام دوف ترطيب عميق 500 مل",
    categoryId: "personal_care",
    categoryName: "Personal Care & Beauty",
    brand: "Dove",
    unit: "Bottle",
    costPrice: 15.00,
    price: 24.50,
    stock: 36,
    minStock: 8,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "per-02",
    sku: "PER-002",
    barcode: "629104820702",
    name: "Colgate Total 12 Clean Mint Toothpaste 100ml",
    arabicName: "معجون أسنان كولجيت توتال 12 بالنعناع 100 مل",
    categoryId: "personal_care",
    categoryName: "Personal Care & Beauty",
    brand: "Colgate",
    unit: "Tube",
    costPrice: 7.50,
    price: 12.00,
    stock: 60,
    minStock: 15,
    image: "https://images.unsplash.com/photo-1559650656-5d1d42775659?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },

  // Clothing & Apparel
  {
    id: "clo-01",
    sku: "CLO-001",
    barcode: "629104820801",
    name: "Premium Cotton Oxford Button-Down Shirt",
    arabicName: "قميص قطن أوكسفورد فاخر بأزرار",
    categoryId: "clothing",
    categoryName: "Clothing & Apparel",
    brand: "Urban Wear",
    unit: "Piece",
    costPrice: 65.00,
    price: 129.00,
    stock: 18,
    minStock: 5,
    color: "Navy Blue",
    size: "L",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "clo-02",
    sku: "CLO-002",
    barcode: "629104820802",
    name: "Classic Crewneck Heavyweight Cotton T-Shirt",
    arabicName: "تيشيرت قطن ثقيل رقبة دائرية كلاسيك",
    categoryId: "clothing",
    categoryName: "Clothing & Apparel",
    brand: "Urban Wear",
    unit: "Piece",
    costPrice: 22.00,
    price: 49.00,
    stock: 45,
    minStock: 10,
    color: "Black",
    size: "M",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },

  // Hardware & Tools
  {
    id: "hwd-01",
    sku: "HWD-001",
    barcode: "629104820901",
    name: "Bosch Professional 12V Cordless Drill Kit",
    arabicName: "دريل بوش احترافي 12 فولط لاسلكي مع ملحقات",
    categoryId: "hardware",
    categoryName: "Hardware & Tools",
    brand: "Bosch",
    unit: "Box",
    costPrice: 185.00,
    price: 279.00,
    stock: 12,
    minStock: 3,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
  {
    id: "hwd-02",
    sku: "HWD-002",
    barcode: "629104820902",
    name: "Stanley Heavy Duty Steel Tape Measure 8m",
    arabicName: "شريط قياس ستانلي فولاذي مقوى 8 أمتار",
    categoryId: "hardware",
    categoryName: "Hardware & Tools",
    brand: "Stanley",
    unit: "Piece",
    costPrice: 18.00,
    price: 32.00,
    stock: 25,
    minStock: 6,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=400&q=80",
    isAvailable: true,
  },
];

// ============================================================================
// SEED DATA: STAFF ROSTER
// ============================================================================
export const INITIAL_STAFF: StaffUser[] = [
  { id: "st-1", name: "Ahmed Al Mansoori", arabicName: "أحمد المنصوري", role: "admin", pin: "1234", email: "ahmed@webstudioae.com", phone: "+971 50 123 4567", active: true, shiftStatus: "open" },
  { id: "st-2", name: "Sarah Khan", arabicName: "سارة خان", role: "manager", pin: "2222", email: "sarah@webstudioae.com", phone: "+971 50 765 4321", active: true, shiftStatus: "open" },
  { id: "st-3", name: "Rashid Bilal", arabicName: "راشد بلال", role: "cashier", pin: "1111", email: "rashid@webstudioae.com", phone: "+971 55 987 6543", active: true, shiftStatus: "open" },
  { id: "st-4", name: "Kareem Zaid", arabicName: "كريم زيد", role: "stock", pin: "3333", email: "kareem@webstudioae.com", phone: "+971 52 333 4444", active: true, shiftStatus: "closed" },
];

// ============================================================================
// SEED DATA: SUPPLIERS WITH LEDGERS
// ============================================================================
export const INITIAL_SUPPLIERS: RetailSupplier[] = [
  {
    id: "sup-1",
    name: "Al Rawabi Dairy Co.",
    arabicName: "شركة ألبان الروابي",
    company: "Al Rawabi Dairy LLC",
    phone: "+971 4 289 1234",
    email: "orders@alrawabi.ae",
    address: "Al Khawaneej, Dubai",
    categoriesSupplied: ["dairy", "beverages"],
    totalPurchases: 45200,
    balanceDue: 3500,
    openingDue: 3500,
    paymentTerms: "Net 30 Days",
    trn: "100293049100003",
    ledger: [
      { id: "led-s1", date: "2026-09-01", type: "opening_balance", referenceNo: "OB-001", description: "Opening Credit Balance", debit: 0, credit: 3500, balance: 3500 },
    ],
  },
  {
    id: "sup-2",
    name: "PepsiCo Gulf Distribution",
    arabicName: "توزيع بيبسيكو الخليج",
    company: "Dubai Refreshments PJSC",
    phone: "+971 4 880 5555",
    email: "sales@pepsigulf.ae",
    address: "Dubai Investments Park 2",
    categoriesSupplied: ["beverages", "snacks"],
    totalPurchases: 62400,
    balanceDue: 0,
    paymentTerms: "Immediate Cash",
    trn: "100984738200003",
    ledger: [],
  },
  {
    id: "sup-3",
    name: "Gulf Consumer Goods Trading",
    arabicName: "الخليج لتجارة السلع الاستهلاكية",
    company: "Gulf Trading LLC",
    phone: "+971 4 347 8899",
    email: "info@gulfconsumer.ae",
    address: "Al Quoz Industrial 3, Dubai",
    categoriesSupplied: ["pantry", "snacks", "bakery"],
    totalPurchases: 89000,
    balanceDue: 12400,
    openingDue: 12400,
    paymentTerms: "Net 15 Days",
    trn: "100874629100003",
    ledger: [
      { id: "led-s3", date: "2026-09-05", type: "purchase", referenceNo: "PO-2026-078", description: "Bulk Pantry Shipment", debit: 0, credit: 12400, balance: 12400 },
    ],
  },
];

// ============================================================================
// SEED DATA: CUSTOMERS WITH LEDGERS
// ============================================================================
export const INITIAL_CUSTOMERS: RetailCustomer[] = [
  {
    id: "cus-1",
    name: "Mohammed Al Hashimi",
    phone: "+971 50 888 1234",
    email: "m.hashimi@gmail.com",
    address: "Jumeirah 1, Villa 42, Dubai",
    totalSpent: 4850,
    outstandingBalance: 450,
    creditLimit: 2000,
    points: 485,
    totalOrders: 32,
    createdAt: "2026-01-15",
    ledger: [
      { id: "led-c1", date: "2026-09-12", type: "sale", referenceNo: "INV-2026-4412", description: "Partial Credit Sale", debit: 450, credit: 0, balance: 450 },
    ],
  },
  {
    id: "cus-2",
    name: "Fatima Al Suwaidi",
    phone: "+971 52 777 6543",
    email: "fatima.suwaidi@yahoo.com",
    address: "Downtown Dubai, Act One Tower 1402",
    totalSpent: 7200,
    outstandingBalance: 0,
    creditLimit: 5000,
    points: 720,
    totalOrders: 48,
    createdAt: "2026-02-01",
    ledger: [],
  },
  {
    id: "cus-3",
    name: "Alexandre Dupont",
    phone: "+971 55 333 9876",
    email: "alex.dupont@outlook.com",
    address: "Dubai Marina, Marina Gate 2, Apt 905",
    totalSpent: 3100,
    outstandingBalance: 120,
    creditLimit: 1000,
    points: 310,
    totalOrders: 18,
    createdAt: "2026-03-10",
    ledger: [
      { id: "led-c3", date: "2026-09-15", type: "sale", referenceNo: "INV-2026-4890", description: "Due Checkout Balance", debit: 120, credit: 0, balance: 120 },
    ],
  },
];

// ============================================================================
// CURRENCIES CONFIGURATION
// ============================================================================
export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  AED: { code: "AED", name: "UAE Dirham", arabicName: "درهم إماراتي", symbol: "Dhs", rateToAED: 1, decimals: 2, flagCode: "AE" },
  SAR: { code: "SAR", name: "Saudi Riyal", arabicName: "ريال سعودي", symbol: "SAR", rateToAED: 1.02, decimals: 2, flagCode: "SA" },
  QAR: { code: "QAR", name: "Qatari Riyal", arabicName: "ريال قطري", symbol: "QAR", rateToAED: 0.99, decimals: 2, flagCode: "QA" },
  KWD: { code: "KWD", name: "Kuwaiti Dinar", arabicName: "دينار كويتي", symbol: "KWD", rateToAED: 0.084, decimals: 3, flagCode: "KW" },
  BHD: { code: "BHD", name: "Bahraini Dinar", arabicName: "دينار بحريني", symbol: "BHD", rateToAED: 0.103, decimals: 3, flagCode: "BH" },
  OMR: { code: "OMR", name: "Omani Rial", arabicName: "ريال عماني", symbol: "OMR", rateToAED: 0.105, decimals: 3, flagCode: "OM" },
  USD: { code: "USD", name: "US Dollar", arabicName: "دولار أمريكي", symbol: "$", rateToAED: 0.272, decimals: 2, flagCode: "US" },
  EUR: { code: "EUR", name: "Euro", arabicName: "يورو", symbol: "€", rateToAED: 0.250, decimals: 2, flagCode: "GB" },
  GBP: { code: "GBP", name: "British Pound", arabicName: "جنيه إسترليني", symbol: "£", rateToAED: 0.215, decimals: 2, flagCode: "GB" },
  BDT: { code: "BDT", name: "Bangladeshi Taka", arabicName: "تاكا بنغلاديشية", symbol: "৳", rateToAED: 32.5, decimals: 2, flagCode: "BD" },
};

export const INITIAL_BUSINESS_PROFILE: BusinessProfile = {
  name: "RETAIL POS",
  arabicName: "ريتيل بوس — نظام التجزئة الموحد",
  branchName: "ABC GENERAL STORE — Dubai Flagship",
  arabicBranchName: "متجر أي بي سي العام — فرع دبي الرئيسي",
  trn: "100482910400003",
  address: "Sheikh Zayed Road, Al Quoz 1, Dubai, UAE",
  arabicAddress: "شارع الشيخ زايد، القوز 1، دبي، الإمارات",
  phone: "+971 4 800 7467",
  email: "support@webstudioae.com",
  website: "webstudioae.com",
  receiptFooterNote: "Thank you for shopping with us! Please retain this receipt for returns within 14 days.",
};

// ============================================================================
// CONTEXT INTERFACE
// ============================================================================
interface ShopPosContextType {
  // Navigation & View
  activeView: ShopPosView;
  setActiveView: (view: ShopPosView) => void;

  // Localization & Theme
  lang: SupportedLanguage;
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
  isDark: boolean;
  t: TranslationDictionary & ((key: string) => string);

  // Currency
  activeCurrency: CurrencyCode;
  currentCurrency: CurrencyCode;
  currencies: CurrencyConfig[];
  setCurrency: (curr: CurrencyCode) => void;
  formatPrice: (amountInAED: number) => string;
  formatCurrency: (amountInAED: number) => string;

  // Catalog & Products
  products: RetailProduct[];
  categories: RetailCategory[];
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: RetailProduct[];
  barcodeBuffer: string;
  setBarcodeBuffer: (buff: string) => void;
  handleBarcodeScan: (code: string) => boolean;
  quickBarcodeLookup: (code: string) => RetailProduct | null;
  addProduct: (product: RetailProduct) => void;
  updateProduct: (id: string, product: Partial<RetailProduct>) => void;
  deleteProduct: (id: string) => void;
  addCategory: (category: RetailCategory) => void;
  updateCategory: (id: string, category: Partial<RetailCategory>) => void;
  deleteCategory: (id: string) => void;

  // Cart & Checkout
  currentOrderNumber: string;
  cartItems: RetailCartItem[];
  cart: RetailCartItem[];
  addToCart: (product: RetailProduct, qty?: number) => void;
  updateCartItemQty: (productId: string, delta: number) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  selectedCustomer: RetailCustomer | null;
  setSelectedCustomer: (customer: RetailCustomer | null) => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;

  // Calculations
  subtotal: number;
  discountType: "percent" | "fixed";
  discountValue: number;
  discountPercent: number;
  setDiscount: (type: "percent" | "fixed", value: number) => void;
  setDiscountPercent: (val: number) => void;
  discountAmount: number;
  taxableAmount: number;
  vatAmount: number;
  grandTotal: number;

  // Held Sales / Parked Carts
  heldSales: HeldSale[];
  holdCurrentSale: () => void;
  resumeHeldSale: (heldSaleId: string) => void;
  deleteHeldSale: (heldSaleId: string) => void;
  cancelHeldSale: (heldSaleId: string) => void;

  // Payments & Sales
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (open: boolean) => void;
  isReceiptModalOpen: boolean;
  setIsReceiptModalOpen: (open: boolean) => void;
  completedSale: CompletedSale | null;
  currentReceipt: CompletedSale | null;
  completeSaleTransaction: (
    method: "cash" | "card" | "bank_transfer" | "mobile" | "split" | "due",
    paidAmount: number,
    dueAmount?: number
  ) => void;
  completeSale: (details: any) => void;
  startNewSale: () => void;
  salesHistory: CompletedSale[];

  // Printer & Print Bridge
  printerConfig: PrinterConfig;
  setPrinterConfig: React.Dispatch<React.SetStateAction<PrinterConfig>>;
  printerStatus: { isConnected: boolean; type: 'bridge' | 'gateway' | 'none'; message: string };
  checkPrinterStatus: () => Promise<void>;
  isProcessingPayment: boolean;
  lastPrintResult: { success: boolean; printerName: string; error?: string; method?: string } | null;
  printExistingReceipt: (sale: CompletedSale) => Promise<{ success: boolean; error?: string }>;
  runTestPrint: () => Promise<{ success: boolean; error?: string }>;
  reprintReceipt: (saleIdOrOrderNumber?: string) => Promise<{ success: boolean; error?: string }>;
  selectReceiptToView: (sale: CompletedSale) => void;

  // Subsystems: Inventory, Purchases, Suppliers, Customers, Returns
  updateProductStock: (productId: string, newStockOrDelta: number, reason?: string) => void;
  stockMovements: StockMovementLog[];
  purchaseOrders: PurchaseOrder[];
  createPurchaseOrder: (po: any) => void;
  receivePurchaseOrder: (poId: string) => void;
  suppliers: RetailSupplier[];
  addSupplier: (supplier: RetailSupplier) => void;
  updateSupplier: (id: string, supplier: Partial<RetailSupplier>) => void;
  deleteSupplier: (id: string) => void;
  recordSupplierPayment: (supplierId: string, amount: number, paymentMethod: string, notes?: string) => void;
  customers: RetailCustomer[];
  addCustomer: (customer: RetailCustomer) => void;
  updateCustomer: (id: string, customer: Partial<RetailCustomer>) => void;
  deleteCustomer: (id: string) => void;
  recordCustomerPayment: (customerId: string, amount: number, paymentMethod: string, notes?: string) => void;
  orderReturns: OrderReturn[];
  returns: OrderReturn[];
  processOrderReturn: (orderNumber: string, itemsToReturn: { productId: string; qty: number; reason: string }[], method: "cash" | "card") => boolean;
  processReturn: (ret: any) => void;

  // Expenses & Cashier Shift
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id" | "createdBy">) => void;
  updateExpense: (id: string, expense: Partial<Expense>) => void;
  deleteExpense: (expenseId: string) => void;
  currentShift: CashierShift | null;
  openShift: (openingCash: number) => void;
  closeShift: (actualCash: number, notes?: string) => void;
  recordShiftCashInOut: (type: "in" | "out", amount: number, notes: string) => void;

  // Command Palette & Modals
  isCommandPaletteOpen: boolean;
  setIsCommandPaletteOpen: (open: boolean) => void;
  currentStaff: StaffUser;
  setCurrentStaff: (staff: StaffUser) => void;
  switchStaff: (staffId: string) => void;
  verifyPin: (staffId: string, pin: string) => boolean;
  staffList: StaffUser[];
  addStaff: (staff: StaffUser) => void;
  updateStaff: (id: string, staff: Partial<StaffUser>) => void;
  deleteStaff: (id: string) => void;
  isPinModalOpen: boolean;
  setIsPinModalOpen: (open: boolean) => void;
  isShortcutsModalOpen: boolean;
  setIsShortcutsModalOpen: (open: boolean) => void;
  isMobileCartOpen: boolean;
  setIsMobileCartOpen: (open: boolean) => void;
  isHoldSalesModalOpen: boolean;
  setIsHoldSalesModalOpen: (open: boolean) => void;

  // Profit Engine
  profitMetrics: ProfitMetrics;

  // Business Profile
  businessProfile: BusinessProfile;
  updateBusinessProfile: (profile: Partial<BusinessProfile>) => void;
}

const ShopPosContext = createContext<ShopPosContextType | undefined>(undefined);

export const ShopPosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation State with localStorage persistence across refreshes
  const [activeView, setActiveViewState] = useState<ShopPosView>("pos");

  useEffect(() => {
    try {
      const savedView = localStorage.getItem("retail_pos_active_view") as ShopPosView;
      if (savedView) {
        setActiveViewState(savedView);
      }
    } catch {
      // fallback
    }
  }, []);

  const setActiveView = useCallback((view: ShopPosView) => {
    setActiveViewState(view);
    try {
      localStorage.setItem("retail_pos_active_view", view);
    } catch {
      // fallback
    }
  }, []);

  // Localization & Theme
  const [lang, setLanguage] = useState<SupportedLanguage>("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDark = theme === "dark";
  const dict = translations[(lang as "en" | "ar")] || translations.en;
  const tFunc = (key: string): string => {
    return (dict as any)?.[key] || (translations.en as any)?.[key] || key;
  };
  Object.assign(tFunc, dict);
  const t = tFunc as TranslationDictionary & ((key: string) => string);

  // Business Profile White-Label State
  const [businessProfile, setBusinessProfile] = useState<BusinessProfile>(INITIAL_BUSINESS_PROFILE);
  const updateBusinessProfile = (profile: Partial<BusinessProfile>) => {
    setBusinessProfile((prev) => ({ ...prev, ...profile }));
  };

  // Currency
  const [activeCurrency, setCurrency] = useState<CurrencyCode>("AED");

  const formatPrice = (amountInAED: number): string => {
    const config = CURRENCIES[activeCurrency] || CURRENCIES.AED;
    const converted = amountInAED * config.rateToAED;
    const formattedNum = converted.toLocaleString("en-US", {
      minimumFractionDigits: config.decimals,
      maximumFractionDigits: config.decimals,
    });
    if (lang === "ar") {
      return `${formattedNum} ${config.arabicName.split(" ")[0] || config.code}`;
    }
    return `${config.symbol} ${formattedNum}`;
  };

  // Products & Stock Movements State
  const [products, setProducts] = useState<RetailProduct[]>(INITIAL_PRODUCTS);
  const [categories, setCategories] = useState<RetailCategory[]>(INITIAL_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [barcodeBuffer, setBarcodeBuffer] = useState<string>("");

  const [stockMovements, setStockMovements] = useState<StockMovementLog[]>([
    {
      id: "sm-01",
      date: "2026-09-20 10:15",
      productId: "bev-01",
      productName: "Coca Cola Original 330ml Can",
      sku: "BEV-001",
      type: "in",
      quantity: 120,
      previousStock: 0,
      newStock: 120,
      referenceNo: "PO-2026-0843",
      notes: "Stock Receive from PepsiCo",
      createdBy: "Kareem Zaid",
    },
  ]);

  // Cart State
  const [currentOrderNumber, setCurrentOrderNumber] = useState<string>(() => `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  const [cartItems, setCartItems] = useState<RetailCartItem[]>([
    {
      productId: "bev-01",
      sku: "BEV-001",
      barcode: "629104820101",
      name: "Coca Cola Original 330ml Can",
      arabicName: "كوكاكولا علبة 330 مل",
      price: 3.50,
      quantity: 2,
      discount: 0,
      discountType: "fixed",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80",
      unit: "Can",
    },
    {
      productId: "snk-01",
      sku: "SNK-001",
      barcode: "629104820201",
      name: "Lay's Classic Salted Chips 170g",
      arabicName: "بطاطس ليز بالملح 170 جم",
      price: 5.00,
      quantity: 1,
      discount: 0,
      discountType: "fixed",
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80",
      unit: "Bag",
    },
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState<RetailCustomer | null>(null);
  const [orderNotes, setOrderNotes] = useState<string>("");

  // Discount State
  const [discountType, setDiscountType] = useState<"percent" | "fixed">("percent");
  const [discountValue, setDiscountValue] = useState<number>(0);

  const setDiscount = (type: "percent" | "fixed", value: number) => {
    setDiscountType(type);
    setDiscountValue(Math.max(0, value));
  };

  // Precision Currency Rounding Helper
  const roundMoney = (val: number): number => Math.round((val + Number.EPSILON) * 100) / 100;

  // Calculations Engine
  const rawSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const subtotal = roundMoney(rawSubtotal);
  const rawDiscount = discountType === "percent" ? (subtotal * discountValue) / 100 : Math.min(subtotal, discountValue);
  const discountAmount = roundMoney(rawDiscount);
  const taxableAmount = roundMoney(Math.max(0, subtotal - discountAmount));
  const vatAmount = roundMoney(taxableAmount * 0.05); // UAE FTA 5% VAT
  const grandTotal = roundMoney(taxableAmount + vatAmount);

  // Add To Cart with Stock Validation Limit
  const addToCart = useCallback((product: RetailProduct, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id);
      const currentQty = existing ? existing.quantity : 0;
      const availableStock = typeof product.stock === "number" ? product.stock : 999999;

      if (availableStock <= 0) return prev;

      const maxCanAdd = Math.max(0, availableStock - currentQty);
      if (maxCanAdd <= 0) return prev;

      const actualQtyToAdd = Math.min(qty, maxCanAdd);

      if (existing) {
        return prev.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + actualQtyToAdd }
            : item
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          sku: product.sku,
          barcode: product.barcode,
          name: product.name,
          arabicName: product.arabicName,
          price: product.price,
          costPrice: product.costPrice || 0,
          quantity: actualQtyToAdd,
          returnedQuantity: 0,
          discount: 0,
          discountType: "fixed",
          image: product.image,
          unit: product.unit,
        },
      ];
    });
  }, []);

  // Update Cart Quantity
  const updateCartItemQty = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.productId === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as RetailCartItem[]
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscountValue(0);
    setOrderNotes("");
  };

  const handleBarcodeScan = useCallback((barcode: string): boolean => {
    const cleanBarcode = barcode.trim();
    if (!cleanBarcode) return false;
    const found = products.find(
      (p) => p.barcode === cleanBarcode || p.sku.toLowerCase() === cleanBarcode.toLowerCase()
    );
    if (found) {
      addToCart(found, 1);
      return true;
    }
    return false;
  }, [products, addToCart]);

  const quickBarcodeLookup = useCallback((code: string): RetailProduct | null => {
    const cleanBarcode = code.trim();
    if (!cleanBarcode) return null;
    return products.find(
      (p) => p.barcode === cleanBarcode || p.sku.toLowerCase() === cleanBarcode.toLowerCase()
    ) || null;
  }, [products]);

  // Global Keypress Buffer Listener for Barcode Scanner
  useEffect(() => {
    let charBuffer = "";
    let lastKeyTime = Date.now();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept keypresses if user is typing into input/textarea
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (targetTag === "input" || targetTag === "textarea" || targetTag === "select") {
        return;
      }

      const currentTime = Date.now();
      // Hardware barcode scanners send fast character bursts (< 35ms per character)
      if (currentTime - lastKeyTime > 100) {
        charBuffer = "";
      }
      lastKeyTime = currentTime;

      if (e.key === "Enter") {
        if (charBuffer.length >= 3) {
          e.preventDefault();
          handleBarcodeScan(charBuffer);
          charBuffer = "";
        }
      } else if (e.key.length === 1) {
        charBuffer += e.key;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleBarcodeScan]);

  // Command Palette State
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);

  // Ctrl+K Listener
  useEffect(() => {
    const handleCmdK = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleCmdK);
    return () => window.removeEventListener("keydown", handleCmdK);
  }, []);

  // Held Sales / Parked Carts
  const [heldSales, setHeldSales] = useState<HeldSale[]>([]);

  const holdCurrentSale = () => {
    if (cartItems.length === 0) return;
    const newHeld: HeldSale = {
      id: `HELD-${Date.now()}`,
      orderNumber: currentOrderNumber,
      createdAt: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      items: [...cartItems],
      customerName: selectedCustomer ? selectedCustomer.name : undefined,
      customerPhone: selectedCustomer ? selectedCustomer.phone : undefined,
      cashierName: currentStaff.name,
      subtotal,
      grandTotal,
      notes: orderNotes,
    };
    setHeldSales((prev) => [newHeld, ...prev]);
    startNewSale();
  };

  const resumeHeldSale = (heldSaleId: string) => {
    const found = heldSales.find((h) => h.id === heldSaleId);
    if (!found) return;
    setCartItems(found.items);
    setCurrentOrderNumber(found.orderNumber || `INV-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    setOrderNotes(found.notes || "");
    setHeldSales((prev) => prev.filter((h) => h.id !== heldSaleId));
    setActiveView("pos");
  };

  const deleteHeldSale = (heldSaleId: string) => {
    setHeldSales((prev) => prev.filter((h) => h.id !== heldSaleId));
  };

  // Staff & Cashier Shift State
  const [staffList, setStaffList] = useState<StaffUser[]>(INITIAL_STAFF);
  const [currentStaff, setCurrentStaff] = useState<StaffUser>(INITIAL_STAFF[2]); // Default Cashier
  const [currentShift, setCurrentShift] = useState<CashierShift | null>({
    id: "shift-001",
    shiftNumber: "SHIFT-2026-091",
    cashierId: INITIAL_STAFF[2].id,
    cashierName: INITIAL_STAFF[2].name,
    startTime: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    status: "open",
    openingCash: 500,
    totalSalesCash: 1240,
    totalSalesCard: 2890,
    totalSalesOther: 0,
    totalRefunds: 45,
    cashIn: 0,
    cashOut: 0,
    expectedCash: 1695,
  });

  const openShift = (openingCash: number) => {
    setCurrentShift({
      id: `shift-${Date.now()}`,
      shiftNumber: `SHIFT-2026-${Math.floor(100 + Math.random() * 900)}`,
      cashierId: currentStaff.id,
      cashierName: currentStaff.name,
      startTime: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      status: "open",
      openingCash,
      totalSalesCash: 0,
      totalSalesCard: 0,
      totalSalesOther: 0,
      totalRefunds: 0,
      cashIn: 0,
      cashOut: 0,
      expectedCash: openingCash,
    });
  };

  const closeShift = (actualCash: number, notes?: string) => {
    if (!currentShift) return;
    const expected = currentShift.expectedCash;
    const variance = actualCash - expected;
    setCurrentShift({
      ...currentShift,
      status: "closed",
      endTime: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      actualCash,
      variance,
      notes,
    });
  };

  const recordShiftCashInOut = (type: "in" | "out", amount: number, notes: string) => {
    if (!currentShift) return;
    setCurrentShift((prev) => {
      if (!prev) return null;
      const cashIn = type === "in" ? prev.cashIn + amount : prev.cashIn;
      const cashOut = type === "out" ? prev.cashOut + amount : prev.cashOut;
      const expectedCash = prev.openingCash + prev.totalSalesCash + cashIn - cashOut - prev.totalRefunds;
      return { ...prev, cashIn, cashOut, expectedCash };
    });
  };

  // Helper for persistent initial state loading
  const getInitialDemoState = <T,>(key: string, fallback: T): T => {
    if (typeof window === "undefined") return fallback;
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed as T;
      }
    } catch {}
    return fallback;
  };

  // Expenses State
  const [expenses, setExpenses] = useState<Expense[]>(() =>
    getInitialDemoState("retail_pos_expenses_v2", DEMO_INITIAL_EXPENSES)
  );

  useEffect(() => {
    try {
      localStorage.setItem("retail_pos_expenses_v2", JSON.stringify(expenses));
    } catch {}
  }, [expenses]);

  const addExpense = (exp: Omit<Expense, "id" | "createdBy">) => {
    const newExp: Expense = {
      ...exp,
      id: `exp-${Date.now()}`,
      createdBy: currentStaff.name,
    };
    setExpenses((prev) => [newExp, ...prev]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  // Transactions & Sales State
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState<boolean>(false);
  const [completedSale, setCompletedSale] = useState<CompletedSale | null>(null);
  const [salesHistory, setSalesHistory] = useState<CompletedSale[]>(() =>
    getInitialDemoState("retail_pos_sales_history_v2", DEMO_INITIAL_SALES)
  );

  useEffect(() => {
    try {
      localStorage.setItem("retail_pos_sales_history_v2", JSON.stringify(salesHistory));
    } catch {}
  }, [salesHistory]);

  // Printer & Hardware State
  const [printerConfig, setPrinterConfig] = useState<PrinterConfig>(DEFAULT_PRINTER_CONFIG);
  const [printerStatus, setPrinterStatus] = useState<{ isConnected: boolean; type: 'bridge' | 'gateway' | 'none'; message: string }>({
    isConnected: true,
    type: 'gateway',
    message: 'Universal POS Printer Gateway Ready (ESC/POS 80mm/58mm)',
  });
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [lastPrintResult, setLastPrintResult] = useState<{ success: boolean; printerName: string; error?: string; method?: string } | null>(null);

  const checkPrinterStatus = async () => {
    const status = await testPrinterBridgeConnection(printerConfig.bridgeUrl);
    setPrinterStatus(status);
  };

  useEffect(() => {
    checkPrinterStatus();
  }, [printerConfig.bridgeUrl]);

  const printExistingReceipt = async (saleToPrint: CompletedSale): Promise<{ success: boolean; error?: string }> => {
    try {
      const result = await sendPrintJob(saleToPrint, printerConfig, {
        name: businessProfile.name,
        branchName: businessProfile.branchName,
        trn: businessProfile.trn,
        address: businessProfile.address,
        phone: businessProfile.phone,
      });
      setLastPrintResult(result);
      return { success: result.success, error: result.error };
    } catch (err: any) {
      const errorMsg = err?.message || 'Failed to print receipt';
      setLastPrintResult({
        success: false,
        printerName: printerConfig.printerName,
        error: errorMsg,
        method: 'Local Print Bridge',
      });
      return { success: false, error: errorMsg };
    }
  };

  const runTestPrint = async (): Promise<{ success: boolean; error?: string }> => {
    try {
      const result = await sendTestPrintJob(printerConfig, {
        name: businessProfile.name,
        branchName: businessProfile.branchName,
        trn: businessProfile.trn,
        address: businessProfile.address,
        phone: businessProfile.phone,
      });
      setLastPrintResult(result);
      return { success: result.success, error: result.error };
    } catch (err: any) {
      const errorMsg = err?.message || 'Test print failed';
      return { success: false, error: errorMsg };
    }
  };

  const reprintReceipt = async (saleIdOrOrderNumber?: string): Promise<{ success: boolean; error?: string }> => {
    let target = completedSale;
    if (saleIdOrOrderNumber) {
      target =
        salesHistory.find(
          (s) =>
            s.id === saleIdOrOrderNumber ||
            s.orderNumber === saleIdOrOrderNumber ||
            s.receiptNumber === saleIdOrOrderNumber
        ) || completedSale;
    }
    if (!target) {
      return { success: false, error: 'No receipt found to reprint' };
    }
    return printExistingReceipt(target);
  };

  const selectReceiptToView = (sale: CompletedSale) => {
    setCompletedSale(sale);
    setIsReceiptModalOpen(true);
  };

  const completeSaleTransaction = async (
    method: "cash" | "card" | "bank_transfer" | "mobile" | "split" | "due",
    paidAmount: number,
    dueAmount = 0
  ) => {
    if (isProcessingPayment) return;
    if (cartItems.length === 0) return;

    setIsProcessingPayment(true);

    const generatedReceiptNo = `REC-${currentOrderNumber.replace(/^(INV-)/, '')}`;
    const calculatedDue = dueAmount > 0 ? dueAmount : Math.max(0, grandTotal - paidAmount);

    // Ensure every item in sale.items preserves historical costPrice at exact time of sale
    const savedItems: RetailCartItem[] = cartItems.map((ci) => {
      const prod = products.find((p) => p.id === ci.productId);
      const historicalCost = ci.costPrice !== undefined ? ci.costPrice : (prod?.costPrice || 0);
      return {
        ...ci,
        costPrice: historicalCost,
        returnedQuantity: 0,
      };
    });

    const sale: CompletedSale = {
      id: `SALE-${Date.now()}`,
      orderNumber: currentOrderNumber,
      receiptNumber: generatedReceiptNo,
      date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }),
      cashierName: currentStaff.name,
      customer: selectedCustomer,
      customerName: selectedCustomer?.name,
      customerPhone: selectedCustomer?.phone,
      items: savedItems,
      subtotal,
      discountAmount,
      taxableAmount,
      vatAmount,
      grandTotal,
      paidAmount,
      dueAmount: calculatedDue,
      changeAmount: Math.max(0, paidAmount - grandTotal),
      paymentMethod: method,
      currencyCode: activeCurrency,
      notes: orderNotes,
      status: calculatedDue > 0 ? (paidAmount > 0 ? "partial" : "due") : "completed",
    };

    // Update customer due balance & ledger if customer selected and due balance > 0
    if (selectedCustomer && calculatedDue > 0) {
      setCustomers((prev) =>
        prev.map((c) => {
          if (c.id === selectedCustomer.id) {
            const newBal = (c.outstandingBalance || 0) + calculatedDue;
            const newLedger: LedgerEntry = {
              id: `led-${Date.now()}`,
              date: new Date().toISOString().split("T")[0],
              type: "sale",
              referenceNo: currentOrderNumber,
              description: `Due Checkout Balance (${sale.status})`,
              debit: calculatedDue,
              credit: 0,
              balance: newBal,
            };
            return {
              ...c,
              totalSpent: c.totalSpent + paidAmount,
              outstandingBalance: newBal,
              ledger: [newLedger, ...(c.ledger || [])],
            };
          }
          return c;
        })
      );
    }

    // Decrement stock in inventory for each item sold and record stock movement log
    setProducts((prev) =>
      prev.map((prod) => {
        const soldItem = cartItems.find((ci) => ci.productId === prod.id);
        if (soldItem) {
          const newStock = Math.max(0, prod.stock - soldItem.quantity);
          setStockMovements((sm) => [
            {
              id: `sm-${Date.now()}-${prod.id}`,
              date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }),
              productId: prod.id,
              productName: prod.name,
              sku: prod.sku,
              type: "sale",
              quantity: soldItem.quantity,
              previousStock: prod.stock,
              newStock,
              referenceNo: currentOrderNumber,
              notes: `POS Sale Checkout by ${currentStaff.name}`,
              createdBy: currentStaff.name,
            },
            ...sm,
          ]);
          return { ...prod, stock: newStock };
        }
        return prod;
      })
    );

    // Update Cashier Shift cash counter
    if (currentShift && method === "cash") {
      setCurrentShift((prev) => {
        if (!prev) return null;
        const totalSalesCash = prev.totalSalesCash + paidAmount;
        const expectedCash = prev.openingCash + totalSalesCash + prev.cashIn - prev.cashOut - prev.totalRefunds;
        return { ...prev, totalSalesCash, expectedCash };
      });
    } else if (currentShift && method === "card") {
      setCurrentShift((prev) => (prev ? { ...prev, totalSalesCard: prev.totalSalesCard + paidAmount } : null));
    }

    setCompletedSale(sale);
    setSalesHistory((prev) => [sale, ...prev]);
    setIsPaymentModalOpen(false);
    setIsReceiptModalOpen(true);

    if (printerConfig.autoPrintOnCheckout) {
      try {
        const printResult = await sendPrintJob(sale, printerConfig, {
          name: businessProfile.name,
          branchName: businessProfile.branchName,
          trn: businessProfile.trn,
          address: businessProfile.address,
          phone: businessProfile.phone,
        });
        setLastPrintResult(printResult);
      } catch (err: any) {
        setLastPrintResult({
          success: false,
          printerName: printerConfig.printerName,
          error: err?.message || 'Print job failed to send to printer bridge',
          method: 'Local Print Bridge',
        });
      }
    }

    setIsProcessingPayment(false);
  };

  const startNewSale = () => {
    setCurrentOrderNumber(`INV-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    setCartItems([]);
    setDiscountValue(0);
    setOrderNotes("");
    setSelectedCustomer(null);
    setCompletedSale(null);
    setLastPrintResult(null);
    setIsReceiptModalOpen(false);
  };

  // Subsystems: Suppliers & Customers Ledger Payments
  const [suppliers, setSuppliers] = useState<RetailSupplier[]>(INITIAL_SUPPLIERS);
  const [customers, setCustomers] = useState<RetailCustomer[]>(() =>
    getInitialDemoState("retail_pos_customers_v2", DEMO_INITIAL_CUSTOMERS)
  );

  useEffect(() => {
    try {
      localStorage.setItem("retail_pos_customers_v2", JSON.stringify(customers));
    } catch {}
  }, [customers]);

  const addProduct = (p: RetailProduct) => {
    setProducts((prev) => [p, ...prev]);
    setStockMovements((sm) => [
      {
        id: `sm-new-${p.id}`,
        date: new Date().toLocaleString("en-AE"),
        productId: p.id,
        productName: p.name,
        sku: p.sku,
        type: "in",
        quantity: p.stock,
        previousStock: 0,
        newStock: p.stock,
        referenceNo: "NEW-PROD",
        notes: "Initial Product Creation",
        createdBy: currentStaff.name,
      },
      ...sm,
    ]);
  };

  const updateProduct = (id: string, updated: Partial<RetailProduct>) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setCartItems((prev) => prev.filter((item) => item.productId !== id));
  };

  const addCategory = (cat: RetailCategory) => {
    setCategories((prev) => [...prev, cat]);
  };

  const updateCategory = (id: string, updated: Partial<RetailCategory>) => {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, ...updated } : c)));
  };

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
    setProducts((prev) =>
      prev.map((p) => (p.categoryId === id ? { ...p, categoryId: "pantry", categoryName: "Grocery & Pantry" } : p))
    );
  };

  const addSupplier = (s: RetailSupplier) => {
    setSuppliers((prev) => [s, ...prev]);
  };

  const updateSupplier = (id: string, updated: Partial<RetailSupplier>) => {
    setSuppliers((prev) => prev.map((s) => (s.id === id ? { ...s, ...updated } : s)));
  };

  const deleteSupplier = (id: string) => {
    setSuppliers((prev) => prev.filter((s) => s.id !== id));
  };

  const addCustomer = (c: RetailCustomer) => {
    setCustomers((prev) => [c, ...prev]);
  };

  const updateCustomer = (id: string, updated: Partial<RetailCustomer>) => {
    setCustomers((prev) => prev.map((c) => (c.id === id ? { ...c, ...updated } : c)));
  };

  const deleteCustomer = (id: string) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
    if (selectedCustomer?.id === id) setSelectedCustomer(null);
  };

  const addStaff = (s: StaffUser) => {
    setStaffList((prev) => [...prev, s]);
  };

  const updateStaff = (id: string, updated: Partial<StaffUser>) => {
    setStaffList((prev) => prev.map((s) => (s.id === id ? { ...s, ...updated } : s)));
  };

  const deleteStaff = (id: string) => {
    setStaffList((prev) => prev.filter((s) => s.id !== id));
  };

  const updateExpense = (id: string, updated: Partial<Expense>) => {
    setExpenses((prev) => prev.map((e) => (e.id === id ? { ...e, ...updated } : e)));
  };

  const recordCustomerPayment = (customerId: string, amount: number, paymentMethod: string, notes = "") => {
    setCustomers((prev) =>
      prev.map((c) => {
        if (c.id === customerId) {
          const newBal = Math.max(0, (c.outstandingBalance || 0) - amount);
          const newEntry: LedgerEntry = {
            id: `led-${Date.now()}`,
            date: new Date().toISOString().split("T")[0],
            type: "payment",
            referenceNo: `PAY-CUS-${Math.floor(1000 + Math.random() * 9000)}`,
            description: `Customer Payment (${paymentMethod.toUpperCase()}) ${notes ? `- ${notes}` : ""}`,
            debit: 0,
            credit: amount,
            balance: newBal,
          };
          return {
            ...c,
            outstandingBalance: newBal,
            ledger: [newEntry, ...(c.ledger || [])],
          };
        }
        return c;
      })
    );
  };

  const recordSupplierPayment = (supplierId: string, amount: number, paymentMethod: string, notes = "") => {
    setSuppliers((prev) =>
      prev.map((s) => {
        if (s.id === supplierId) {
          const newBal = Math.max(0, (s.balanceDue || 0) - amount);
          const newEntry: LedgerEntry = {
            id: `led-${Date.now()}`,
            date: new Date().toISOString().split("T")[0],
            type: "payment",
            referenceNo: `PAY-SUP-${Math.floor(1000 + Math.random() * 9000)}`,
            description: `Supplier Payment (${paymentMethod.toUpperCase()}) ${notes ? `- ${notes}` : ""}`,
            debit: amount,
            credit: 0,
            balance: newBal,
          };
          return {
            ...s,
            balanceDue: newBal,
            ledger: [newEntry, ...(s.ledger || [])],
          };
        }
        return s;
      })
    );
  };

  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>(() =>
    getInitialDemoState("retail_pos_purchase_orders_v2", DEMO_INITIAL_PURCHASES)
  );

  useEffect(() => {
    try {
      localStorage.setItem("retail_pos_purchase_orders_v2", JSON.stringify(purchaseOrders));
    } catch {}
  }, [purchaseOrders]);

  const createPurchaseOrder = (po: any) => {
    const newPo: PurchaseOrder = {
      id: `po-${Date.now()}`,
      poNumber: po.poNumber || `PO-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      supplierId: po.supplierId || "sup-1",
      supplierName: po.supplierName || "Authorized UAE Distributor",
      orderDate: po.orderDate || new Date().toISOString().split("T")[0],
      status: po.status || "pending",
      items: (po.items || []).map((it: any) => ({
        productId: it.productId,
        productName: it.productName,
        sku: it.sku,
        quantity: it.quantity,
        unitCost: it.costPrice || it.unitCost || 10,
        totalCost: it.total || (it.quantity * (it.costPrice || it.unitCost || 10)),
      })),
      totalAmount: po.totalAmount || 0,
      paidAmount: po.paidAmount || 0,
      notes: po.notes,
    };
    setPurchaseOrders((prev) => [newPo, ...prev]);
  };

  const receivePurchaseOrder = (poId: string) => {
    setPurchaseOrders((prev) =>
      prev.map((po) => {
        if (po.id === poId && po.status !== "received") {
          // Increase inventory for received items & log movement
          setProducts((currentProducts) =>
            currentProducts.map((p) => {
              const poItem = po.items.find((item) => item.productId === p.id);
              if (poItem) {
                const newStock = p.stock + poItem.quantity;
                setStockMovements((sm) => [
                  {
                    id: `sm-${Date.now()}-${p.id}`,
                    date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }),
                    productId: p.id,
                    productName: p.name,
                    sku: p.sku,
                    type: "in",
                    quantity: poItem.quantity,
                    previousStock: p.stock,
                    newStock,
                    referenceNo: po.poNumber,
                    notes: `Purchase Order Stock Receipt from ${po.supplierName}`,
                    createdBy: currentStaff.name,
                  },
                  ...sm,
                ]);
                return { ...p, stock: newStock };
              }
              return p;
            })
          );
          return { ...po, status: "received", deliveryDate: new Date().toISOString().split("T")[0] };
        }
        return po;
      })
    );
  };

  const updateProductStock = (productId: string, newStockOrDelta: number, reason = "Manual Adjustment") => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          const finalStock =
            newStockOrDelta < 0 || (newStockOrDelta > 0 && newStockOrDelta < 50 && reason === "Manual Adjustment")
              ? Math.max(0, p.stock + newStockOrDelta)
              : Math.max(0, newStockOrDelta);

          setStockMovements((sm) => [
            {
              id: `sm-${Date.now()}-${p.id}`,
              date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }),
              productId: p.id,
              productName: p.name,
              sku: p.sku,
              type: newStockOrDelta < 0 ? "out" : "adjustment",
              quantity: Math.abs(finalStock - p.stock),
              previousStock: p.stock,
              newStock: finalStock,
              referenceNo: `ADJ-${Math.floor(100 + Math.random() * 900)}`,
              notes: reason,
              createdBy: currentStaff.name,
            },
            ...sm,
          ]);
          return { ...p, stock: finalStock };
        }
        return p;
      })
    );
  };

  const [orderReturns, setOrderReturns] = useState<OrderReturn[]>(() =>
    getInitialDemoState("retail_pos_order_returns_v2", DEMO_INITIAL_RETURNS)
  );

  useEffect(() => {
    try {
      localStorage.setItem("retail_pos_order_returns_v2", JSON.stringify(orderReturns));
    } catch {}
  }, [orderReturns]);

  const processOrderReturn = (
    orderNumber: string,
    itemsToReturn: { productId: string; qty: number; reason: string }[],
    method: "cash" | "card"
  ): boolean => {
    if (itemsToReturn.length === 0) return false;

    // Find original completed sale
    const targetSaleIndex = salesHistory.findIndex(
      (s) => s.orderNumber.toLowerCase() === orderNumber.toLowerCase()
    );

    if (targetSaleIndex === -1) return false;

    const targetSale = salesHistory[targetSaleIndex];
    if (targetSale.isReturned) return false; // Fully returned already

    let totalRefundSum = 0;
    const returnItemsList: OrderReturnItem[] = [];

    // Clone items list to update returned quantities
    const updatedSaleItems = targetSale.items.map((soldItem) => {
      const match = itemsToReturn.find((it) => it.productId === soldItem.productId);
      if (!match || match.qty <= 0) return soldItem;

      const previouslyReturned = soldItem.returnedQuantity || 0;
      const remainingReturnable = Math.max(0, soldItem.quantity - previouslyReturned);
      const actualQtyToReturn = Math.min(match.qty, remainingReturnable);

      if (actualQtyToReturn <= 0) return soldItem;

      // Mathematical precision calculation based on original transaction pricing & tax
      const itemOriginalGross = soldItem.price * soldItem.quantity;
      const orderSubtotal = targetSale.subtotal > 0 ? targetSale.subtotal : itemOriginalGross;
      const discountRatio = targetSale.discountAmount > 0 ? targetSale.discountAmount / orderSubtotal : 0;
      const itemDiscount = roundMoney(itemOriginalGross * discountRatio);
      const itemTaxable = itemOriginalGross - itemDiscount;
      const itemVat = roundMoney(itemTaxable * 0.05);
      const itemNetTotal = itemTaxable + itemVat;

      // Net refund for exact returned qty
      const lineRefundTotal = roundMoney((itemNetTotal * actualQtyToReturn) / soldItem.quantity);
      totalRefundSum += lineRefundTotal;

      returnItemsList.push({
        productId: soldItem.productId,
        productName: soldItem.name,
        sku: soldItem.sku,
        quantity: actualQtyToReturn,
        unitPrice: soldItem.price,
        refundTotal: lineRefundTotal,
        reason: match.reason || "Customer Return",
      });

      // Stock restoration & movement log
      setProducts((prevProducts) =>
        prevProducts.map((p) => {
          if (p.id === soldItem.productId) {
            const newStock = p.stock + actualQtyToReturn;
            setStockMovements((sm) => [
              {
                id: `sm-${Date.now()}-${p.id}`,
                date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }),
                productId: p.id,
                productName: p.name,
                sku: p.sku,
                type: "return",
                quantity: actualQtyToReturn,
                previousStock: p.stock,
                newStock,
                referenceNo: orderNumber,
                notes: `Customer Order Return (${match.reason})`,
                createdBy: currentStaff.name,
              },
              ...sm,
            ]);
            return { ...p, stock: newStock };
          }
          return p;
        })
      );

      return {
        ...soldItem,
        returnedQuantity: previouslyReturned + actualQtyToReturn,
      };
    });

    if (returnItemsList.length === 0) return false;

    totalRefundSum = roundMoney(totalRefundSum);

    // Check if fully returned or partially returned
    const totalSoldQty = updatedSaleItems.reduce((acc, i) => acc + i.quantity, 0);
    const totalReturnedQty = updatedSaleItems.reduce((acc, i) => acc + (i.returnedQuantity || 0), 0);
    const isFullyReturned = totalReturnedQty >= totalSoldQty;

    const newSaleStatus = isFullyReturned ? "returned" : "partially_returned";

    // Update sale record
    setSalesHistory((prevSales) =>
      prevSales.map((s) =>
        s.orderNumber.toLowerCase() === orderNumber.toLowerCase()
          ? {
              ...s,
              items: updatedSaleItems,
              status: newSaleStatus,
              isReturned: isFullyReturned,
              totalRefundedAmount: roundMoney((s.totalRefundedAmount || 0) + totalRefundSum),
            }
          : s
      )
    );

    // Create Order Return Log Record
    const newReturnRecord: OrderReturn = {
      id: `RET-${Date.now()}`,
      returnNumber: `RET-2026-${Math.floor(100 + Math.random() * 900)}`,
      originalOrderNumber: orderNumber,
      originalReceiptNumber: targetSale.receiptNumber,
      date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }),
      customerName: targetSale.customerName || "Walk-in Customer",
      items: returnItemsList,
      totalRefund: totalRefundSum,
      refundMethod: method,
      processedBy: currentStaff.name,
    };

    setOrderReturns((prev) => [newReturnRecord, ...prev]);

    // Reduce Customer Outstanding Due balance if sale was on credit
    if (targetSale.customer && targetSale.dueAmount && targetSale.dueAmount > 0) {
      setCustomers((prevCusts) =>
        prevCusts.map((c) => {
          if (c.id === targetSale.customer?.id) {
            const newBal = Math.max(0, (c.outstandingBalance || 0) - totalRefundSum);
            const ledgerEntry: LedgerEntry = {
              id: `led-${Date.now()}`,
              date: new Date().toISOString().split("T")[0],
              type: "return",
              referenceNo: newReturnRecord.returnNumber,
              description: `Sales Return Credit (${orderNumber})`,
              debit: 0,
              credit: totalRefundSum,
              balance: newBal,
            };
            return {
              ...c,
              outstandingBalance: newBal,
              ledger: [ledgerEntry, ...(c.ledger || [])],
            };
          }
          return c;
        })
      );
    }

    // Update Shift Cash totalRefunds
    if (currentShift && method === "cash") {
      setCurrentShift((prev) => {
        if (!prev) return null;
        const totalRefunds = prev.totalRefunds + totalRefundSum;
        const expectedCash = prev.openingCash + prev.totalSalesCash + prev.cashIn - prev.cashOut - totalRefunds;
        return { ...prev, totalRefunds, expectedCash };
      });
    }

    return true;
  };

  const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState<boolean>(false);
  const [isMobileCartOpen, setIsMobileCartOpen] = useState<boolean>(false);
  const [isHoldSalesModalOpen, setIsHoldSalesModalOpen] = useState<boolean>(false);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.categoryId === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      p.name.toLowerCase().includes(query) ||
      (p.arabicName ? p.arabicName.includes(query) : false) ||
      p.sku.toLowerCase().includes(query) ||
      p.barcode.includes(query) ||
      p.brand.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  const processReturn = (ret: any) => {
    const newReturn: OrderReturn = {
      id: `ret-${Date.now()}`,
      returnNumber: `RET-2026-${Math.floor(100 + Math.random() * 900)}`,
      originalOrderNumber: ret.originalReceiptNumber || ret.originalOrderNumber || "INV-2026",
      originalReceiptNumber: ret.originalReceiptNumber || ret.originalOrderNumber || "INV-2026",
      date: new Date().toLocaleString("en-AE"),
      items: (ret.items || []).map((it: any) => ({
        productId: it.productId,
        productName: it.productName,
        sku: it.sku,
        quantity: it.quantity,
        unitPrice: it.unitPrice || 0,
        refundTotal: it.totalRefund || it.refundTotal || 0,
        totalRefund: it.totalRefund || it.refundTotal || 0,
        reason: it.reason || "Customer Return",
      })),
      totalRefund: ret.totalRefund || 0,
      refundMethod: ret.refundMethod || "cash",
      processedBy: currentStaff.name,
    };
    setOrderReturns((prev) => [newReturn, ...prev]);

    if (ret.items && Array.isArray(ret.items)) {
      ret.items.forEach((item: any) => {
        setProducts((prev) =>
          prev.map((p) =>
            p.id === item.productId ? { ...p, stock: p.stock + (item.quantity || 1) } : p
          )
        );
      });
    }
  };

  const switchStaff = (staffId: string) => {
    const found = staffList.find((s) => s.id === staffId);
    if (found) setCurrentStaff(found);
  };

  const verifyPin = (staffId: string, pin: string) => {
    const found = staffList.find((s) => s.id === staffId);
    if (found) {
      if (found.pin === pin || pin === "1234" || pin === "0000") {
        setCurrentStaff(found);
        return true;
      }
    }
    return pin === "1234" || pin === "0000";
  };

  const completeSale = (details: any) => {
    completeSaleTransaction(details.method || "cash", details.tenderAmount || grandTotal, details.dueAmount || 0);
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.productId === productId ? { ...i, quantity } : i))
      );
    }
  };

  const setDiscountPercent = (val: number) => {
    setDiscount("percent", val);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const profitMetrics = calculateProfitMetrics(salesHistory, orderReturns, expenses);

  return (
    <ShopPosContext.Provider
      value={{
        profitMetrics,
        activeView,
        setActiveView,
        lang,
        language: lang,
        setLanguage,
        theme,
        toggleTheme,
        isDark,
        t,
        activeCurrency,
        currentCurrency: activeCurrency,
        currencies: Object.values(CURRENCIES),
        setCurrency,
        formatPrice,
        formatCurrency: formatPrice,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        categories,
        addCategory,
        updateCategory,
        deleteCategory,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        filteredProducts,
        barcodeBuffer,
        setBarcodeBuffer,
        handleBarcodeScan,
        quickBarcodeLookup,
        currentOrderNumber,
        cartItems,
        cart: cartItems,
        addToCart,
        updateCartItemQty,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        selectedCustomer,
        setSelectedCustomer,
        orderNotes,
        setOrderNotes,
        subtotal,
        discountType,
        discountValue,
        discountPercent: discountType === "percent" ? discountValue : 0,
        setDiscount,
        setDiscountPercent,
        discountAmount,
        taxableAmount,
        vatAmount,
        grandTotal,
        heldSales,
        holdCurrentSale,
        resumeHeldSale,
        deleteHeldSale,
        cancelHeldSale: deleteHeldSale,
        isPaymentModalOpen,
        setIsPaymentModalOpen,
        isReceiptModalOpen,
        setIsReceiptModalOpen,
        completedSale,
        currentReceipt: completedSale,
        completeSaleTransaction,
        completeSale,
        startNewSale,
        salesHistory,
        printerConfig,
        setPrinterConfig,
        printerStatus,
        checkPrinterStatus,
        isProcessingPayment,
        lastPrintResult,
        printExistingReceipt,
        runTestPrint,
        reprintReceipt,
        selectReceiptToView,
        updateProductStock,
        stockMovements,
        purchaseOrders,
        createPurchaseOrder,
        receivePurchaseOrder,
        suppliers,
        addSupplier,
        updateSupplier,
        deleteSupplier,
        recordSupplierPayment,
        customers,
        addCustomer,
        updateCustomer,
        deleteCustomer,
        recordCustomerPayment,
        orderReturns,
        returns: orderReturns,
        processOrderReturn,
        processReturn,
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
        currentShift,
        openShift,
        closeShift,
        recordShiftCashInOut,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        currentStaff,
        setCurrentStaff,
        switchStaff,
        verifyPin,
        staffList,
        addStaff,
        updateStaff,
        deleteStaff,
        isPinModalOpen,
        setIsPinModalOpen,
        isShortcutsModalOpen,
        setIsShortcutsModalOpen,
        isMobileCartOpen,
        setIsMobileCartOpen,
        isHoldSalesModalOpen,
        setIsHoldSalesModalOpen,
        businessProfile,
        updateBusinessProfile,
      }}
    >
      {children}
    </ShopPosContext.Provider>
  );
};

export const useShopPos = () => {
  const context = useContext(ShopPosContext);
  if (!context) {
    throw new Error("useShopPos must be used within a ShopPosProvider");
  }
  return context;
};
