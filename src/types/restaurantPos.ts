export type ProductCategory =
  | "all"
  | "burgers"
  | "pizza"
  | "rice"
  | "grill"
  | "pasta"
  | "appetizers"
  | "salads"
  | "main_course"
  | "beverages"
  | "drinks"
  | "coffee"
  | "desserts"
  | string;

export interface Category {
  id: string;
  slug: string;
  name: string;
  arabicName: string;
  icon: string;
  displayOrder: number;
  isActive: boolean;
}

export type StaffRole = "admin" | "manager" | "cashier" | "kitchen";

export interface StaffMember {
  id: string;
  employeeId: string;
  name: string;
  arabicName: string;
  role: StaffRole;
  pin: string; // 4-digit PIN for quick terminal switch
  email: string;
  phone: string;
  isActive: boolean;
  avatar?: string;
  shiftStartedAt?: string;
}

export type OrderType = "dine_in" | "takeaway" | "delivery";

export type OrderStatus =
  | "open"
  | "preparing"
  | "ready"
  | "served"
  | "completed"
  | "paid"
  | "cancelled"
  | "voided";

export type PaymentMethod = "cash" | "card" | "apple_pay" | "bank_transfer" | "split";

export type PaymentStatus = "unpaid" | "partially_paid" | "paid" | "refunded";

export type TableStatus = "available" | "occupied" | "reserved" | "billed";

export type TableZone = "indoor" | "terrace" | "vip_majlis" | "family";

export type KOTStatus = "new" | "preparing" | "ready" | "completed" | "served";

export interface Product {
  id: string;
  sku: string;
  name: string;
  arabicName: string;
  category: ProductCategory;
  price: number; // in AED
  costPrice?: number;
  vatPercent: number; // default 5%
  image: string;
  description?: string;
  arabicDescription?: string;
  isAvailable: boolean;
  stock: number;
  prepTimeMinutes: number;
  spicyLevel?: 0 | 1 | 2 | 3;
  isPopular?: boolean;
  isChefSpecial?: boolean;
}

export interface OrderItem {
  id: string; // unique item id within order
  productId: string;
  name: string;
  arabicName: string;
  price: number;
  quantity: number;
  lineTotal: number;
  notes?: string;
  category: ProductCategory;
}

export interface PaymentSplit {
  method: PaymentMethod;
  amount: number;
  reference?: string;
}

export interface Customer {
  id: string;
  name: string;
  arabicName?: string;
  phone: string; // e.g., +971 50 123 4567
  email?: string;
  address?: string;
  deliveryArea?: string;
  totalOrders: number;
  totalSpent: number; // AED
  notes?: string;
  createdAt: string;
}

export interface Order {
  id: string;
  orderNumber: string; // e.g. #ORD-1048
  receiptNumber: string; // e.g. RCT-2026-0842
  orderType: OrderType;
  tableNumber?: string; // e.g. T05
  guestCount?: number;
  customer?: Customer;
  deliveryAddress?: string;
  deliveryPhone?: string;
  items: OrderItem[];
  subtotal: number;
  discountType: "percent" | "fixed";
  discountValue: number; // e.g. 10 (%) or 25 (AED)
  discountAmount: number; // calculated in AED
  taxableAmount: number;
  vatPercent: number; // default 5
  vatAmount: number; // calculated in AED
  serviceCharge: number; // AED
  deliveryFee: number; // AED
  grandTotal: number; // AED
  paidAmount: number; // AED
  changeAmount: number; // AED
  paymentMethod: PaymentMethod;
  splits?: PaymentSplit[];
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  cashierName: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  paidAt?: string;
}

export interface Table {
  id: string;
  number: string; // e.g. T01, T02
  label: string;
  arabicLabel: string;
  capacity: number;
  zone: TableZone;
  status: TableStatus;
  currentOrderId?: string;
  activeOrderTotal?: number;
  seatedAt?: string;
}

export interface KOTTicket {
  id: string;
  orderId: string;
  orderNumber: string;
  tableNumber?: string;
  orderType: OrderType;
  items: {
    name: string;
    arabicName: string;
    quantity: number;
    notes?: string;
  }[];
  specialInstructions?: string;
  status: KOTStatus;
  serverName: string;
  createdAt: string;
  updatedAt: string;
}

export interface BusinessProfile {
  name: string;
  arabicName: string;
  tagline: string;
  arabicTagline: string;
  trn: string; // UAE Tax Registration Number
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  emirate: string;
  country: string;
  currency: string; // "AED"
  currencyCode?: string;
  currencySymbol: string; // "Dhs"
  currencyName?: string;
  defaultVatPercent: number; // 5
  defaultServiceCharge: number;
  defaultDeliveryFee: number;
  receiptFooterEn: string;
  receiptFooterAr: string;
  logoUrl?: string;
  branchName: string;
}

export interface PosStats {
  todaySales: number;
  todayOrders: number;
  avgOrderValue: number;
  totalCash: number;
  totalCard: number;
  totalDelivery: number;
  dineInCount: number;
  takeawayCount: number;
  deliveryCount: number;
  pendingKOTs: number;
  activeTablesCount: number;
}

