export interface NexoraProduct {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  startingFee: string;
  badge?: string;
  popularFor: string;
}

export interface Transaction {
  id: string;
  customer: string;
  company: string;
  email: string;
  amount: number;
  currency: string;
  method: string;
  status: 'paid' | 'pending' | 'failed' | 'refunded';
  date: string;
  riskScore: number;
  fee: number;
  location: string;
  settlementTime: string;
}

export interface CustomerProfile {
  id: string;
  name: string;
  company: string;
  email: string;
  country: string;
  city: string;
  totalSpendAED: number;
  totalTxns: number;
  lastPayment: string;
  status: 'Active' | 'VIP' | 'Enterprise';
  preferredRail: string;
}

export interface WebhookEvent {
  id: string;
  event: string;
  endpoint: string;
  status: number;
  timestamp: string;
  response: string;
  retries: number;
  payloadSize: string;
}

export interface POSTerminal {
  id: string;
  name: string;
  tagline: string;
  description: string;
  priceAED: number;
  specs: string[];
  image: string;
  idealFor: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  logo: string;
  metrics: { label: string; value: string }[];
  quote: string;
  author: string;
  role: string;
  challenge: string;
  solution: string;
}

export const NEXORA_BRAND = {
  name: 'NEXORA PAY',
  legalName: 'Nexora Financial Technologies UAE LLC',
  tagline: 'The Financial Operating System for the UAE & MENA.',
  subheading: 'Institutional-grade payment gateway, CBUAE Aani & Jaywan clearing, multi-currency treasury settlement in AED/USD, and corporate virtual cards engineered for modern enterprise.',
  phone: '+971 4 800 6396',
  phoneDisplay: '800-NEXORA (Toll Free UAE)',
  whatsapp: 'https://wa.me/971509988440?text=Hello%20Nexora%20Pay,%20I%20would%20like%20to%20inquire%20about%20enterprise%20payment%20processing%20in%20the%20UAE.',
  email: 'enterprise@nexorapay.ae',
  difcAddress: 'Level 18, Al Fattan Currency House, DIFC Gate Precinct 4, Dubai, UAE',
  adgmAddress: 'Level 12, Al Khatem Tower, ADGM Square, Al Maryah Island, Abu Dhabi, UAE',
  metrics: {
    annualVolumeAED: 'AED 18.4B+',
    uptimeSLA: '99.995%',
    avgLatency: '1.8ms',
    settlementSpeed: 'T+0 Instant AED',
    merchantsCount: '4,200+ Enterprise Merchants',
    fraudReduction: '94.8% AI Shield'
  }
};

export const PRODUCTS: NexoraProduct[] = [
  {
    id: 'online-payments',
    title: 'Omnichannel Payment Gateway',
    tagline: 'Unified checkout across Web, Mobile SDKs, and POS',
    description: 'Accept Visa, Mastercard, American Express, Apple Pay, Google Pay, and Jaywan with intelligent dynamic routing and sub-second authorization.',
    icon: 'CreditCard',
    features: ['Jaywan & Aani Instant Rail Native', 'Smart Multi-Acquirer Routing', '3D Secure 2.3 Frictionless Auth', 'Zero-Redirect Hosted Drop-in'],
    startingFee: '1.75% + AED 0.80',
    badge: 'FLAGSHIP',
    popularFor: 'E-commerce & Enterprise SaaS'
  },
  {
    id: 'aani-instant',
    title: 'CBUAE Aani Instant Settlement',
    tagline: 'Account-to-account instant transfers via UAE Central Bank',
    description: 'Direct zero-chargeback account-to-account transfers with real-time settlement directly into your UAE bank account via phone number or QR.',
    icon: 'Activity',
    features: ['Direct CBUAE IPP Integration', 'Zero Interchange & Zero Chargebacks', 'Instant T+0 Funds Availability', 'Dynamic UAE Merchant QR Codes'],
    startingFee: '0.40% Fixed (Cap AED 5)',
    badge: 'UAE EXCLUSIVE',
    popularFor: 'High-Ticket B2B & Retail'
  },
  {
    id: 'payment-links',
    title: 'Instant WhatsApp Payment Links',
    tagline: 'Collect payments via WhatsApp, SMS, or Email with zero code',
    description: 'Generate branded, secure payment links with dynamic AED amounts, customer pre-fill, installment options, and automated PDF tax invoices.',
    icon: 'Link',
    features: ['WhatsApp Direct Bot Dispatch', 'Custom Domain & Logo Branding', 'One-Click Apple Pay & Tabby BNPL', 'Automated Push SMS Receipts'],
    startingFee: '2.10% + AED 1.00',
    popularFor: 'Luxury Concierge & WhatsApp Commerce'
  },
  {
    id: 'invoicing',
    title: 'Automated B2B Invoicing Engine',
    tagline: 'FTA UAE Corporate Tax compliant e-invoicing',
    description: 'Issue automated multi-currency recurring invoices with QR verification, VAT auto-computation, and 1-click bank wire reconciliation.',
    icon: 'FileText',
    features: ['UAE FTA E-Invoicing Certified', 'Automated Overdue Chasing Dunning', 'Virtual Dedicated IBAN Matching', 'ERP Sync (Oracle, SAP, Xero, Zoho)'],
    startingFee: 'AED 150 / mo + 0.5%',
    popularFor: 'Corporate Services & Wholesale'
  },
  {
    id: 'subscriptions',
    title: 'Smart Recurring Subscriptions',
    tagline: 'Intelligent dunning and localized billing lifecycle',
    description: 'Power recurring monthly retainers, annual memberships, and usage-based metered billing with automated card updating and churn prevention.',
    icon: 'Repeat',
    features: ['Card Life-Cycle Auto-Updater', 'Smart AI Retry on Payday (1st & 25th)', 'Tiered & Overage Metering', 'Customer Self-Service Portal'],
    startingFee: '1.90% + AED 1.00',
    badge: 'AI OPTIMIZED',
    popularFor: 'SaaS, Gyms & Media Subscriptions'
  },
  {
    id: 'marketplace-payments',
    title: 'Marketplace Splits & Escrow',
    tagline: 'Automate multi-vendor payouts and commission deductions',
    description: 'Split complex cart transactions across hundreds of UAE sub-merchants, hold regulated escrow balances, and release funds upon proof of delivery.',
    icon: 'GitFork',
    features: ['Automated Vendor Take-Rates', 'Regulated UAE Escrow Vaults', 'Automated KYB Onboarding for Sellers', 'Cross-Emirate Vendor Payouts'],
    startingFee: '0.85% Split Engine Fee',
    popularFor: 'Food Delivery, Real Estate & Marketplaces'
  },
  {
    id: 'virtual-cards',
    title: 'Corporate Visa & Mastercard Cards',
    tagline: 'Issue physical & virtual employee spend cards in seconds',
    description: 'Provision unlimited virtual employee and vendor cards with custom AED spend limits, merchant category restrictions, and real-time expense capture.',
    icon: 'Shield',
    features: ['Instant Apple Wallet / Google Pay Provisioning', 'Per-Transaction & Daily AED Caps', 'Real-Time WhatsApp Receipt Capture', 'Up to 2.0% Unlimited AED Cashback'],
    startingFee: 'Free Unlimited Cards',
    badge: 'ZERO FX FEE',
    popularFor: 'Media Agencies & Corporate Travel'
  },
  {
    id: 'global-payouts',
    title: 'Multi-Currency Treasury & FX',
    tagline: 'Hold 25+ currencies with institutional wholesale FX rates',
    description: 'Receive AED, USD, EUR, GBP, and SAR locally without conversion penalties. Send batch contractor and supplier payouts to 190+ countries in minutes.',
    icon: 'Globe',
    features: ['Dedicated Virtual IBANs (UAE, US, EU, UK)', 'Wholesale Mid-Market FX +0.15%', 'Instant UAE Central Bank FTS Transfers', 'Batch CSV & REST API Payouts'],
    startingFee: '0.15% FX Spread + AED 5 Wire',
    popularFor: 'Import/Export & Global Technology'
  }
];

export const POS_TERMINALS: POSTerminal[] = [
  {
    id: 'pos-pro',
    name: 'Nexora Smart Terminal Pro',
    tagline: 'Dual-display flagship Android countertop terminal',
    description: 'High-speed 5.5" merchant touchscreen with customer-facing display for instant tip prompt, digital signature, and contactless Apple Pay / Jaywan taps.',
    priceAED: 1199,
    specs: ['Dual Touchscreens (5.5" + 3.5")', '4G LTE + Dual-Band Wi-Fi 6 + Bluetooth 5.2', 'High-Speed Seiko Thermal Printer (100mm/s)', 'Built-in 1D/2D Barcode Scanner'],
    image: 'https://images.unsplash.com/photo-1556742049-0a67e557b445?q=80&w=1000&auto=format&fit=crop',
    idealFor: 'Fine Dining, Luxury Boutiques & Hotel Check-in'
  },
  {
    id: 'pos-go',
    name: 'Nexora Go Wireless Reader',
    tagline: 'Ultra-portable pocket terminal for curbside & delivery',
    description: 'Lightweight, drop-resistant wireless reader designed for delivery fleets, pop-up events, and table-side billing with all-day 18-hour battery life.',
    priceAED: 449,
    specs: ['Pocket Weight (160g)', 'Contactless NFC + EMV Chip + Magstripe', '18-Hour Active Shift Battery (4,000mAh)', 'Instant iOS & Android Bluetooth Sync'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop',
    idealFor: 'Delivery Drivers, Pop-up Kiosks & Valet'
  },
  {
    id: 'pos-kiosk',
    name: 'Nexora Self-Order Kiosk 21.5"',
    tagline: 'Autonomous commercial self-service payment station',
    description: 'Heavy-duty commercial grade aluminum self-checkout kiosk with anti-glare touch glass, integrated payment reader, and QR receipt printer.',
    priceAED: 4299,
    specs: ['21.5" Full HD Capacitive Touchscreen', 'Integrated Level 1 PCI-PTS Pinpad', 'Heavy-Duty Industrial Aluminum Stand', 'Direct Cloud POS Menu Sync'],
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop',
    idealFor: 'QSR Restaurants, Cinemas & Theme Parks'
  }
];

export const TRANSACTIONS: Transaction[] = [
  { id: 'TXN-948201', customer: 'H.E. Tariq Al-Hashimi', company: 'Sovereign Capital DIFC', email: 'tariq@sovereigncap.ae', amount: 84500.00, currency: 'AED', method: 'Aani Instant Transfer', status: 'paid', date: '2026-09-02 21:14:02', riskScore: 2, fee: 5.00, location: 'DIFC Gate Village, Dubai', settlementTime: 'T+0 (Instant)' },
  { id: 'TXN-948200', customer: 'Sarah Jenkins', company: 'Lumina Luxury Retail', email: 'sarah.j@lumina.ae', amount: 14250.00, currency: 'AED', method: 'Apple Pay (Visa •••• 9921)', status: 'paid', date: '2026-09-02 20:58:19', riskScore: 6, fee: 249.38, location: 'The Dubai Mall, Fashion Ave', settlementTime: 'Next Day 08:00 AM' },
  { id: 'TXN-948199', customer: 'Dr. Mansoor Al-Zahrani', company: 'Emirates Health Clinic', email: 'mansoor@emirateshealth.ae', amount: 32000.00, currency: 'AED', method: 'Jaywan Card (•••• 1044)', status: 'paid', date: '2026-09-02 20:41:45', riskScore: 4, fee: 384.00, location: 'Jumeirah 1, Dubai', settlementTime: 'T+0 (Instant)' },
  { id: 'TXN-948198', customer: 'Maximilian Vance', company: 'Helios Global Trading', email: 'max@heliostrading.ch', amount: 25000.00, currency: 'USD', method: 'Direct SWIFT Wire', status: 'paid', date: '2026-09-02 20:12:30', riskScore: 11, fee: 37.50, location: 'ADGM Square, Abu Dhabi', settlementTime: 'Same Day 2 Hours' },
  { id: 'TXN-948197', customer: 'Fatima Al-Kaabi', company: 'Noor Haute Couture', email: 'fatima@noorcouture.ae', amount: 9800.00, currency: 'AED', method: 'Tabby Pay in 4', status: 'paid', date: '2026-09-02 19:45:11', riskScore: 3, fee: 343.00, location: 'Dubai Design District (d3)', settlementTime: 'Next Day 08:00 AM' },
  { id: 'TXN-948196', customer: 'David O’Connor', company: 'Apex Media FZ LLC', email: 'david@apexmedia.ae', amount: 18500.00, currency: 'AED', method: 'Mastercard •••• 4421', status: 'pending', date: '2026-09-02 19:22:04', riskScore: 18, fee: 323.75, location: 'Dubai Media City', settlementTime: 'Processing Auth' },
  { id: 'TXN-948195', customer: 'Anonymous Suspicious Actor', company: 'Unknown Proxy IP', email: 'carder99@tempmail.org', amount: 48000.00, currency: 'AED', method: 'Stolen Visa •••• 0192', status: 'failed', date: '2026-09-02 18:50:22', riskScore: 94, fee: 0.00, location: 'Blocked by AI Fraud Shield', settlementTime: 'Auto-Declined' },
  { id: 'TXN-948194', customer: 'Rashid Al-Falasi', company: 'Desert Horizon Real Estate', email: 'rashid@deserthorizon.ae', amount: 150000.00, currency: 'AED', method: 'Virtual Dedicated IBAN', status: 'paid', date: '2026-09-02 18:10:48', riskScore: 1, fee: 150.00, location: 'Business Bay, Dubai', settlementTime: 'T+0 (Instant)' }
];

export const CUSTOMERS: CustomerProfile[] = [
  { id: 'CUST-3041', name: 'H.E. Tariq Al-Hashimi', company: 'Sovereign Capital DIFC', email: 'tariq@sovereigncap.ae', country: 'United Arab Emirates', city: 'Dubai (DIFC)', totalSpendAED: 1840000, totalTxns: 48, lastPayment: '12 Mins Ago', status: 'Enterprise', preferredRail: 'Aani & Dedicated IBAN' },
  { id: 'CUST-3042', name: 'Sarah Jenkins', company: 'Lumina Luxury Group', email: 'sarah.j@lumina.ae', country: 'United Arab Emirates', city: 'Dubai (Downtown)', totalSpendAED: 942500, totalTxns: 124, lastPayment: '45 Mins Ago', status: 'VIP', preferredRail: 'Apple Pay & Visa' },
  { id: 'CUST-3043', name: 'Dr. Mansoor Al-Zahrani', company: 'Emirates Health Clinic', email: 'mansoor@emirateshealth.ae', country: 'United Arab Emirates', city: 'Dubai (Jumeirah)', totalSpendAED: 620000, totalTxns: 89, lastPayment: '2 Hours Ago', status: 'VIP', preferredRail: 'Jaywan Card' },
  { id: 'CUST-3044', name: 'Maximilian Vance', company: 'Helios Global Commodity', email: 'max@heliostrading.ch', country: 'Switzerland', city: 'Geneva / ADGM', totalSpendAED: 4850000, totalTxns: 16, lastPayment: 'Today', status: 'Enterprise', preferredRail: 'Multi-Currency USD/AED Wire' },
  { id: 'CUST-3045', name: 'Fatima Al-Kaabi', company: 'Noor Haute Couture Atelier', email: 'fatima@noorcouture.ae', country: 'United Arab Emirates', city: 'Dubai (d3)', totalSpendAED: 385000, totalTxns: 72, lastPayment: 'Today', status: 'Active', preferredRail: 'Tabby BNPL & Amex' }
];

export const WEBHOOK_EVENTS: WebhookEvent[] = [
  { id: 'wh_evt_894101', event: 'payment.authorized', endpoint: 'https://api.merchant.ae/webhooks/nexora', status: 200, timestamp: '10:42:15.820 GST', response: '{"received": true, "order_status": "confirmed"}', retries: 0, payloadSize: '2.4 KB' },
  { id: 'wh_evt_894102', event: 'aani.settlement.completed', endpoint: 'https://erp.sovereign.ae/v1/ledger-sync', status: 200, timestamp: '10:41:04.110 GST', response: '{"status": "ledger_updated_t0"}', retries: 0, payloadSize: '1.8 KB' },
  { id: 'wh_evt_894103', event: 'fraud.risk.high_alert', endpoint: 'https://security.luxuryretail.ae/events', status: 200, timestamp: '10:38:40.940 GST', response: '{"action": "transaction_blocked_by_policy"}', retries: 0, payloadSize: '3.1 KB' },
  { id: 'wh_evt_894104', event: 'payout.instant.dispatched', endpoint: 'https://app.deliveries.ae/api/driver-payouts', status: 504, timestamp: '10:35:12.440 GST', response: '{"error": "Gateway Timeout (Target Server 504)"}', retries: 2, payloadSize: '1.9 KB' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-emaar',
    client: 'Emaar Hospitality & Lifestyle',
    industry: 'Luxury Hospitality & Real Estate',
    logo: 'EMAAR',
    metrics: [
      { label: 'Annual Volume Processed', value: 'AED 480M+' },
      { label: 'Authorization Rate Jump', value: '99.4% (+4.2%)' },
      { label: 'Checkout Abandonment', value: '-38% Reduced' },
      { label: 'Settlement Speed', value: 'T+0 Instant' }
    ],
    quote: 'Migrating our 14 luxury hotel properties and online booking engines to Nexora Pay reduced our processing fees by AED 3.2M annually while unlocking native Apple Pay and Aani instant checkouts for GCC guests.',
    author: 'Khaled Al-Marzouqi',
    role: 'Chief Financial Officer, Luxury Hospitality Group',
    challenge: 'High cross-border interchange penalties with legacy UAE banks, 48-hour delayed weekend settlements, and a 12% card drop-off rate on international bookings.',
    solution: 'Implemented Nexora Smart Routing across FAB and Emirates NBD acquirer rails with multi-currency local settlement in AED, SAR, and USD.'
  },
  {
    id: 'case-d3-fashion',
    client: 'Atelier Maison d3 Dubai',
    industry: 'High Fashion & Luxury E-Commerce',
    logo: 'MAISON D3',
    metrics: [
      { label: 'Average Order Value', value: 'AED 3,850' },
      { label: 'WhatsApp Checkout Sales', value: 'AED 24M / Year' },
      { label: 'Chargeback Ratio', value: '0.001% (Zero Fraud)' },
      { label: 'Integration Time', value: '48 Hours' }
    ],
    quote: 'Nexora Pay’s WhatsApp dynamic payment links and Tabby integration doubled our concierge sales within 60 days. Our VIP clients from Saudi Arabia and Kuwait pay effortlessly in their local currency.',
    author: 'Yasmin Bencheikh',
    role: 'Managing Director & Founder',
    challenge: 'Manual bank transfers for high-ticket couture orders created friction, order abandonment, and delayed VIP fitting schedules.',
    solution: 'Deployed Nexora Payment Links with instant WhatsApp dispatch, Apple Pay 1-touch auth, and automated FTA tax invoicing.'
  }
];

export const CODE_SNIPPETS = {
  node: `// 1. Initialize Nexora Pay UAE Client
const Nexora = require('@nexorapay/node')({
  apiKey: process.env.NEXORA_SECRET_KEY,
  environment: 'production', // DIFC Live Gateway
  currency: 'AED'
});

// 2. Create Instant Payment Session with Aani & Apple Pay
async function createCheckoutSession() {
  const session = await Nexora.checkout.sessions.create({
    amount: 14500.00, // AED 14,500.00
    currency: 'AED',
    customer: {
      name: 'Tariq Al-Hashimi',
      email: 'tariq@sovereigncap.ae',
      phone: '+971508924110'
    },
    paymentMethods: ['card', 'apple_pay', 'aani_instant', 'jaywan', 'tabby'],
    settlementAccount: 'UAE_IBAN_AE040330000012345678901',
    instantSettlement: true, // T+0 Real-Time
    taxCalculation: {
      uaeVATPercent: 5.0,
      generateFTAReceipt: true
    },
    successUrl: 'https://merchant.ae/checkout/success?session_id={CHECKOUT_SESSION_ID}',
    cancelUrl: 'https://merchant.ae/checkout/cancel'
  });

  return session.paymentUrl;
}`,

  python: `# 1. Initialize Nexora Pay Python SDK
import os
import nexorapay

nexora = nexorapay.Client(
    api_key=os.environ.get("NEXORA_SECRET_KEY"),
    region="uae-difc",
    default_currency="AED"
)

# 2. Trigger Real-Time Aani Direct Account Transfer
transfer = nexora.aani.initiate_instant_charge(
    amount_aed=32000.00,
    customer_phone="+971508924110",
    merchant_reference="INV-2026-8940",
    description="Sovereign Retainer Q3 - Advisory",
    webhook_url="https://api.company.ae/webhooks/aani"
)

print(f"Aani QR Code & DeepLink: {transfer.qr_payload}")
print(f"Settlement Status: {transfer.settlement_status}") # 'T+0_CONFIRMED'`,

  curl: `# Create Live Payment Intent via cURL
curl -X POST https://api.nexorapay.ae/v1/payment_intents \\
  -H "Authorization: Bearer nex_live_ae_8f94028491a0b" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 2500000,
    "currency": "AED",
    "payment_method_types": ["card", "apple_pay", "aani", "jaywan"],
    "customer": {
      "name": "Sarah Jenkins",
      "email": "sarah@lumina.ae"
    },
    "metadata": {
      "emirate": "Dubai",
      "license_number": "DIFC-84920"
    }
  }'`,

  go: `package main

import (
    "context"
    "fmt"
    "github.com/nexorapay/nexora-go"
)

func main() {
    client := nexora.NewClient("nex_live_ae_8f94028491a0b")

    intent, err := client.PaymentIntents.Create(context.Background(), &nexora.PaymentIntentParams{
        AmountAED: 84500.00,
        Currency:  "AED",
        CustomerID: "CUST-3041",
        EnableAani: true,
        AutoCapture: true,
    })
    if err != nil {
        panic(err)
    }

    fmt.Printf("Payment Authorized ID: %s | Status: %s\\n", intent.ID, intent.Status)
}`
};

export const FAQS = [
  {
    question: 'How fast are merchant payouts settled to our UAE corporate bank account?',
    answer: 'With Nexora Pay, domestic AED transactions via Aani and Jaywan are settled instantly in real-time (T+0). Standard Visa, Mastercard, and Apple Pay transactions are settled next morning at 08:00 AM (T+1) directly into any UAE bank account (Emirates NBD, FAB, ADCB, Mashreq, DIB) with zero holding delays.'
  },
  {
    question: 'Is Nexora Pay licensed and compliant with the Central Bank of the UAE (CBUAE)?',
    answer: 'Yes. Nexora Pay operates under full regulatory compliance with the Central Bank of the UAE (CBUAE) Retail Payment Services and Card Schemes (RPSCS) framework and holds dual Category 4 Authorised Financial Firm status from the Dubai Financial Services Authority (DFSA) in DIFC and FSRA in ADGM. All systems are PCI-DSS Level 1 v4.0 certified.'
  },
  {
    question: 'Can we accept both international credit cards and local UAE rails (Aani & Jaywan)?',
    answer: 'Yes! Our unified checkout engine natively supports 100+ global currencies, international Visa/Mastercard/Amex, Apple Pay, Google Pay, Tabby/Tamara BNPL, and local UAE payment rails including CBUAE Aani Instant Account Transfer and Jaywan national debit cards from a single API integration.'
  },
  {
    question: 'How does the AI Fraud Shield prevent chargebacks without blocking legitimate VIP clients?',
    answer: 'Our AI Risk Engine evaluates over 120 behavioural parameters per millisecond—including device fingerprinting, velocity checks, IP routing, and 3DS 2.3 frictionless biometric authentication. This achieves a 94.8% reduction in fraudulent chargebacks while maintaining a 99.4% approval rate for legitimate high-ticket transactions.'
  },
  {
    question: 'Can we issue physical and virtual corporate cards for our team expenses?',
    answer: 'Yes. You can instantly provision unlimited virtual Visa cards with custom AED spend limits, merchant category restrictions (e.g. software SaaS only, advertising only, travel only), and freeze/unfreeze controls. We also deliver luxury metal physical corporate cards anywhere in the UAE within 24 hours.'
  },
  {
    question: 'How do you handle UAE Corporate Tax and VAT invoicing?',
    answer: 'Every transaction processed through Nexora Pay automatically generates an FTA-compliant electronic tax invoice with standard 5% UAE VAT calculations, verifiable QR codes, and automated synchronization with ERP platforms (Oracle, SAP, Microsoft Dynamics, Xero, and QuickBooks).'
  }
];
