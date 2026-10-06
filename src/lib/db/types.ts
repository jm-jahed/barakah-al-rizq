export type Role = 'ADMIN' | 'SUPERADMIN';
export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'PROPOSAL' | 'WON' | 'LOST';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  featured: boolean;
  featuredRank?: number;
  published: boolean;
  order: number;
  heroImage: string;
  thumbnail?: string;
  priority?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  featured: boolean;
  published: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  slug: string;
  priceAED: number;
  description: string;
  features: string[];
  featured: boolean;
  published: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
  rating: number;
  published: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  source: string;
  status: LeadStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed: boolean;
  createdAt: string;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string;
  updatedAt: string;
}

export interface HomepageContent {
  heroEyebrow: string;
  heroHeadline: string;
  heroSubtitle: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaUrl: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaUrl: string;
  aboutTitle: string;
  aboutDescription: string;
  statsProjects: string;
  statsClients: string;
  statsUaeDistricts: string;
  statsCompileRate: string;
  selectedProjectIds?: string[];
}

export interface NavigationItem {
  id: string;
  label: string;
  url: string;
  order: number;
  visible: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  published: boolean;
}

export interface MediaItem {
  id: string;
  title: string;
  url: string;
  type: string;
  size: string;
  createdAt: string;
}

export interface SEOConfig {
  defaultTitle: string;
  defaultDescription: string;
  ogImage: string;
  indexingEnabled: boolean;
}

export interface ActivityLog {
  id: string;
  user: string;
  action: string;
  entity: string;
  timestamp: string;
}

export interface AnalyticsEvent {
  id: string;
  eventName: string;
  path: string;
  metadata?: string;
  createdAt: string;
}

// ==========================================
// FOODSTUFF WHOLESALE LIVE PRICING SYSTEM
// ==========================================

export type FoodstuffCategory = 'VEGETABLES' | 'FRUITS' | 'SPICES' | 'PULSES' | 'RICE & GRAINS' | 'DRY FOOD';
export type FoodstuffPackagingUnit = 'CTN' | 'BOX' | 'BAG' | 'KG' | 'TON' | 'PCS' | string;
export type FoodstuffBusinessStatus = 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
export type FoodstuffFreshnessStatus = 'LIVE' | 'UPDATED' | 'STALE';
export type FoodstuffSession = 'MORNING' | 'MIDDAY' | 'EVENING';
export type FoodstuffPriceTrend = 'UP' | 'DOWN' | 'STABLE';
export type FoodstuffPriceSource = 
  | 'VERIFIED_SUPPLIER_QUOTE'
  | 'AL_AWEER_MARKET_UPDATE'
  | 'ADMIN_VERIFIED_RATE_SHEET'
  | 'CSV_IMPORT'
  | 'EXCEL_IMPORT'
  | 'API_VERIFIED_FEED';

export interface FoodstuffCategoryItem {
  id: string;
  name: string;
  displayName: string;
  arabicName: string;
  description?: string;
  image?: string;
  displayOrder: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FoodstuffProduct {
  id: string;
  slug?: string;
  name: string;
  arabicName: string;
  category: FoodstuffCategory | string;
  origin: string;
  variety?: string;
  grade: 'GRADE A (PREMIUM)' | 'GRADE B (COMMERCIAL)' | 'STANDARD' | 'ORGANIC' | string;
  size?: string;
  image: string;
  description: string;
  defaultPackagingUnit: FoodstuffPackagingUnit;
  defaultPackagingDetails: string;
  defaultNetWeightKg: number | null;
  defaultMoq: string;
  published: boolean;
  featured?: boolean;
  displayOrder?: number;
  createdAt: string;
  updatedAt: string;
}

export interface FoodstuffContainerPrice {
  id: string;
  productId: string;
  importerSupplierName: string;
  packagingUnit: FoodstuffPackagingUnit;
  packagingDetails: string;
  netWeightKg: number | null;
  priceAED: number | null; // null if PRICE_ON_REQUEST
  calculatedPricePerKg: number | null; // priceAED / netWeightKg ONLY when both > 0
  moq: string;
  containerAvailability: string;
  portOfArrival?: string;
  businessStatus: FoodstuffBusinessStatus;
  validUntil: string | null;
  lastUpdated: string | null; // Canonical ISO timestamp
  updateSession: FoodstuffSession | 'OFF_CYCLE' | null;
  updateSource: FoodstuffPriceSource | null;
  updatedBy: string | null;
  quotationNotes?: string;
}

export interface FoodstuffMarketPrice {
  id: string;
  productId: string;
  marketLocation: string;
  packagingUnit: FoodstuffPackagingUnit;
  packagingDetails: string;
  netWeightKg: number | null;
  priceAED: number | null; // null if PRICE_ON_REQUEST
  previousPriceAED: number | null;
  changePercent: number | null;
  trend: FoodstuffPriceTrend | null;
  calculatedPricePerKg: number | null; // priceAED / netWeightKg ONLY when both > 0
  minPurchaseQty: string;
  qualityGrade: string;
  marketSession: FoodstuffSession | null;
  businessStatus: FoodstuffBusinessStatus;
  lastUpdated: string | null; // Canonical ISO timestamp
  updateSource: FoodstuffPriceSource | null;
  updatedBy: string | null;
}

export interface FoodstuffPriceHistory {
  id: string;
  priceType: 'CONTAINER' | 'DUBAI_MARKET';
  priceRecordId: string;
  productId: string;
  productName: string;
  packagingDetails: string;
  oldPriceAED: number | null; // null for first entry
  newPriceAED: number | null; // null if transitioned to PRICE_ON_REQUEST
  differenceAED: number | null;
  changePercent: number | null;
  oldStatus?: FoodstuffBusinessStatus;
  newStatus?: FoodstuffBusinessStatus;
  session: FoodstuffSession | 'OFF_CYCLE';
  source: FoodstuffPriceSource;
  updatedBy: string;
  timestamp: string; // Canonical ISO timestamp
  notes?: string;
}

export interface FoodstuffUpdateSchedule {
  morningTime: string; // '06:30' (Dubai Market Open)
  middayTime: string; // '12:30' (Midday Trading)
  eveningTime: string; // '18:00' (Evening Inbound Dispatch)
  timezone: string; // 'Asia/Dubai' (Fixed UTC+4)
  staleThresholdHours: number; // default: 8
  lastSyncAt: string | null; // Canonical ISO timestamp
  autoFeedEnabled: boolean; // false
  feedSourceUrl?: string;
}

// ==========================================
// B2B WHOLESALE ORDER & PICKUP SYSTEM
// ==========================================

export type WholesaleOrderStatus = 'PENDING' | 'CONFIRMED' | 'READY_FOR_PICKUP' | 'COMPLETED' | 'CANCELLED';

export interface WholesaleOrderItem {
  productId: string;
  productName: string;
  productArabicName?: string;
  orderType: 'CONTAINER' | 'DUBAI_WHOLESALE';
  packagingUnit: string;
  pricePerCtn: number;
  quantityCtn: number;
  lineTotalAED: number;
  moq: number; // 100 for Container, 10 for Dubai Wholesale
  image?: string;
}

export interface WholesaleOrder {
  id: string; // e.g. BARAKAH-ORD-20261005-XXXX
  customerName: string;
  companyName?: string;
  phone: string;
  email: string;
  pickupDate: string;
  pickupTime?: string;
  pickupLocation: string; // Strictly Store Pickup
  orderType: 'CONTAINER' | 'DUBAI_WHOLESALE' | 'MIXED';
  items: WholesaleOrderItem[];
  totalCtn: number;
  totalAED: number;
  notes?: string;
  status: WholesaleOrderStatus;
  createdAt: string;
  updatedAt: string;
}

export interface WholesaleCustomer {
  id: string;
  name: string;
  companyName?: string;
  phone: string;
  email: string;
  whatsapp?: string;
  trn?: string;
  notes?: string;
  totalOrders: number;
  totalCtn: number;
  totalOrderValueAED: number;
  completedOrderValueAED: number;
  lastOrderDate?: string;
  latestStatus?: WholesaleOrderStatus;
  createdAt: string;
  updatedAt: string;
}

export type WholesalePaymentMethod = 'CASH' | 'BANK_TRANSFER' | 'CARD' | 'CHEQUE' | 'OTHER';
export type WholesalePaymentType = 'FULL' | 'PARTIAL' | 'ADVANCE';
export type PaymentTransactionStatus = 'VALID' | 'REVERSED' | 'REFUNDED';

export interface WholesalePaymentAudit {
  action: 'RECORDED' | 'REVERSED' | 'REFUNDED' | 'NOTE_UPDATED';
  performedBy: string; // Admin email or ID
  timestamp: string;
  reason?: string;
  previousStatus?: PaymentTransactionStatus;
}

export interface WholesalePayment {
  id: string; // e.g. BARAKAH-PAY-YYYYMMDD-XXXX
  orderId: string;
  orderNumber?: string;
  customerId?: string;
  customerName: string;
  companyName?: string;
  phone: string;
  email?: string;
  amountAED: number;
  paymentDate: string; // YYYY-MM-DD
  paymentMethod: WholesalePaymentMethod;
  paymentType: WholesalePaymentType;
  referenceNumber?: string;
  bankAccount?: string;
  notes?: string;
  status: PaymentTransactionStatus;
  auditTrail: WholesalePaymentAudit[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderPaymentSummary {
  orderId: string;
  orderTotalAED: number;
  totalPaidAED: number;
  refundedAED: number;
  netPaidAED: number;
  outstandingBalanceAED: number;
  paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID';
  paymentsCount: number;
  lastPaymentDate?: string;
}

export interface CustomerStatementItem {
  id: string;
  date: string;
  type: 'ORDER_INVOICE' | 'PAYMENT' | 'REFUND' | 'REVERSAL';
  reference: string;
  description: string;
  debitAED: number;  // Increases receivables
  creditAED: number; // Decreases receivables
  runningBalanceAED: number;
}

// ==========================================
// ADMIN INCOMING EMAIL INBOX & MAILBOXES
// ==========================================

export type InboxMailbox = 'info' | 'sales' | 'orders' | 'habeeb';
export type InboxMessageStatus = 'UNREAD' | 'READ' | 'REPLIED' | 'TRASH';

export interface EmailMailbox {
  id: string; // e.g. "mailbox-info"
  email: string; // e.g. "info@barakahalrizquae.com"
  displayName: string; // e.g. "General Inquiries"
  department: string; // e.g. "Business Inquiries"
  channel: InboxMailbox;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InboxMessage {
  id: string;
  messageId: string;
  inReplyTo?: string;
  references?: string;
  mailbox: InboxMailbox;
  fromEmail: string;
  fromName: string;
  toEmail: string;
  replyTo?: string;
  subject: string;
  previewText: string;
  textBody: string;
  htmlBody: string;
  rawHtml?: string;
  hasAttachments: boolean;
  attachmentsCount: number;
  status: InboxMessageStatus;
  isSpam: boolean;
  receivedAt: string;
  readAt?: string;
  repliedAt?: string;
  deletedAt?: string;
  createdAt: string;
  updatedAt: string;
}


