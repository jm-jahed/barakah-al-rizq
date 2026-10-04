// ============================================================================
// UNIVERSAL RETAIL POS — TYPES & INTERFACES
// White-label retail management system data models
// ============================================================================

export type ShopPosView =
  | "pos"
  | "inventory"
  | "products"
  
  | "purchases"
  | "suppliers"
  | "customers"
  | "returns"
  | "reports"
  | "staff"
  | "expenses"
  | "sales"
  | "settings"
  | "dashboard";

export type StaffRole = "admin" | "manager" | "cashier" | "stock" | "stock_staff";

export interface StaffUser {
  id: string;
  name: string;
  arabicName?: string;
  role: StaffRole;
  pin: string;
  email: string;
  phone: string;
  active?: boolean;
  shiftStatus?: "open" | "closed";
}

export type StaffMember = StaffUser;

export type SupportedLanguage = "en" | "ar" | "hi" | "bn";

export type CurrencyCode = "AED" | "SAR" | "QAR" | "KWD" | "BHD" | "OMR" | "USD" | "EUR" | "GBP" | "BDT";

export interface CurrencyConfig {
  code: CurrencyCode;
  name: string;
  arabicName: string;
  symbol: string;
  rateToAED: number; // 1 AED = X Currency
  decimals: number;
  flagCode: string;
}

export interface RetailCategory {
  id: string;
  name: string;
  arabicName: string;
  slug: string;
  icon: string;
  itemCount: number;
}

export interface CategoryDefinition {
  id: string;
  nameKey: string;
  name: string;
  arabicName: string;
  icon: string;
}

export const RETAIL_CATEGORIES: CategoryDefinition[] = [
  { id: 'all', nameKey: 'all_categories', name: 'All Products', arabicName: 'جميع المنتجات', icon: '🏪' },
  { id: 'beverages', nameKey: 'cat_beverages', name: 'Beverages & Drinks', arabicName: 'المشروبات والمرطبات', icon: '🥤' },
  { id: 'snacks', nameKey: 'cat_snacks', name: 'Snacks & Confectionery', arabicName: 'المقرمشات والحلويات', icon: '🍿' },
  { id: 'dairy', nameKey: 'cat_dairy', name: 'Dairy & Eggs', arabicName: 'الألبان والبيض', icon: '🧀' },
  { id: 'bakery', nameKey: 'cat_bakery', name: 'Bakery & Fresh', arabicName: 'المخبوزات والحلويات', icon: '🥐' },
  { id: 'pantry', nameKey: 'cat_pantry', name: 'Grocery & Pantry', arabicName: 'المواد التموينية', icon: '🥫' },
  { id: 'electronics', nameKey: 'cat_electronics', name: 'Electronics & Gadgets', arabicName: 'الإلكترونيات والملحقات', icon: '⚡' },
  { id: 'personal_care', nameKey: 'cat_personal', name: 'Personal Care & Beauty', arabicName: 'العناية الشخصية', icon: '✨' },
  { id: 'clothing', nameKey: 'cat_clothing', name: 'Clothing & Apparel', arabicName: 'الملابس والأزياء', icon: '👕' },
  { id: 'hardware', nameKey: 'cat_hardware', name: 'Hardware & Tools', arabicName: 'الأدوات والمعدات', icon: '🔧' },
];

export interface RetailProduct {
  id: string;
  sku: string;
  barcode: string;
  name: string;
  arabicName?: string;
  nameAr?: string;
  categoryId?: string;
  category?: string;
  categoryName?: string;
  brand: string;
  unit: string;
  costPrice: number;
  price: number; // Retail selling price in AED
  wholesalePrice?: number;
  stock: number;
  minStock: number;
  image: string;
  isAvailable?: boolean;
  expiryDate?: string;
  batchNumber?: string;
  serialNumber?: string;
  color?: string;
  size?: string;
  vatRate?: number;
  description?: string;
  supplierId?: string;
  status?: string;
}

export interface RetailCartItem {
  product?: RetailProduct;
  productId: string;
  sku: string;
  barcode: string;
  name: string;
  arabicName?: string;
  price: number;
  quantity: number;
  discount: number; // Discount amount
  discountType: "percent" | "fixed";
  costPrice?: number;
  returnedQuantity?: number;
  taxRate?: number;
  taxAmount?: number;
  notes?: string;
  image: string;
  unit: string;
}

export interface HeldSale {
  id: string;
  orderNumber?: string;
  createdAt?: string;
  timestamp?: number;
  items: RetailCartItem[];
  customer?: RetailCustomer | null;
  customerName?: string;
  customerPhone?: string;
  cashierName?: string;
  subtotal: number;
  grandTotal: number;
  notes?: string;
}

export interface LedgerEntry {
  id: string;
  date: string;
  type: "sale" | "payment" | "purchase" | "return" | "opening_balance";
  referenceNo: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
}

export interface RetailCustomer {
  id: string;
  name: string;
  arabicName?: string;
  phone: string;
  email: string;
  address: string;
  openingDue?: number;
  creditLimit?: number;
  outstandingBalance?: number;
  totalSpent: number;
  points?: number;
  loyaltyPoints?: number;
  totalOrders?: number;
  notes?: string;
  createdAt?: string;
  ledger?: LedgerEntry[];
}

export interface RetailSupplier {
  id: string;
  name: string;
  arabicName?: string;
  company?: string;
  contactPerson?: string;
  phone: string;
  email: string;
  address: string;
  categoriesSupplied?: string[];
  totalPurchases: number;
  balanceDue?: number;
  outstandingBalance?: number;
  openingDue?: number;
  paymentTerms?: string;
  notes?: string;
  status?: string;
  trn?: string;
  ledger?: LedgerEntry[];
}

export type Supplier = RetailSupplier;
export type Customer = RetailCustomer;
export type ReturnRecord = OrderReturn;

export interface PurchaseOrderItem {
  productId: string;
  productName: string;
  sku: string;
  quantity: number;
  unitCost: number;
  totalCost: number;
}

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  supplierId: string;
  supplierName: string;
  orderDate: string;
  deliveryDate?: string;
  status: "pending" | "received" | "cancelled";
  items: PurchaseOrderItem[];
  totalAmount: number;
  paidAmount: number;
  dueAmount?: number;
  paymentMethod?: "cash" | "card" | "bank_transfer" | "due";
  notes?: string;
}

export interface OrderReturnItem {
  productId: string;
  productName: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  refundTotal?: number;
  totalRefund?: number;
  reason: string;
}

export interface OrderReturn {
  id: string;
  returnNumber: string;
  originalOrderNumber?: string;
  originalReceiptNumber?: string;
  date?: string;
  customerName?: string;
  items: OrderReturnItem[];
  totalRefund: number;
  refundMethod: "cash" | "card" | "store_credit" | "original";
  processedBy?: string;
  reasonSummary?: string;
}

export interface CompletedSale {
  id: string;
  orderNumber: string;
  receiptNumber?: string;
  date: string;
  cashierName: string;
  customer?: RetailCustomer | null;
  customerName?: string;
  customerPhone?: string;
  items: RetailCartItem[];
  subtotal: number;
  discountAmount: number;
  taxableAmount?: number;
  vatAmount: number;
  grandTotal: number;
  paidAmount: number;
  dueAmount?: number;
  changeAmount: number;
  paymentMethod: "cash" | "card" | "bank_transfer" | "mobile" | "split" | "due";
  currencyCode: CurrencyCode;
  notes?: string;
  status?: "completed" | "partial" | "due" | "returned" | "partially_returned";
  totalRefundedAmount?: number;
  isReturned?: boolean;
}

export interface StockMovementLog {
  id: string;
  date: string;
  productId: string;
  productName: string;
  sku: string;
  type: "in" | "out" | "adjustment" | "transfer" | "damage" | "return" | "sale";
  quantity: number;
  previousStock: number;
  newStock: number;
  referenceNo: string;
  notes: string;
  createdBy: string;
}

export interface Expense {
  id: string;
  category: "Rent" | "Electricity" | "Transport" | "Salary" | "Maintenance" | "Supplies" | "Other";
  amount: number;
  date: string;
  paymentMethod: "cash" | "card" | "bank_transfer";
  description: string;
  createdBy: string;
  referenceNo?: string;
}

export interface CashierShift {
  id: string;
  shiftNumber: string;
  cashierId: string;
  cashierName: string;
  startTime: string;
  endTime?: string;
  status: "open" | "closed";
  openingCash: number;
  totalSalesCash: number;
  totalSalesCard: number;
  totalSalesOther: number;
  totalRefunds: number;
  cashIn: number;
  cashOut: number;
  expectedCash: number;
  actualCash?: number;
  variance?: number;
  notes?: string;
}

export interface BusinessProfile {
  name: string;
  arabicName: string;
  branchName: string;
  arabicBranchName: string;
  trn: string;
  address: string;
  arabicAddress: string;
  phone: string;
  email: string;
  website: string;
  logoUrl?: string;
  receiptFooterNote?: string;
}
