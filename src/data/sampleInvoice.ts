import { Invoice } from "@/types/invoice";
import { calculateInvoiceTotals } from "@/utils/calculations";

const initialTotals = calculateInvoiceTotals([
  {
    id: "item-1",
    itemNumber: 1,
    itemCode: "100004",
    description: "Potato Cubes",
    unit: "وحدة",
    quantity: 120,
    vatPercent: 5,
    unitPrice: 4.0,
    lineTotal: 480.0,
  },
], 0);

initialTotals.amountInWordsArabic = "فقط خمس مائة و أربعة درهم لاغير";

export const DEMO_COMPANY = {
  arabicName: "شركة القمة للتجارة والخدمات التجارية – ذ.م.م",
  englishName: "APEX COMMERCIAL TRADING & SERVICES L.L.C",
  mobile: "+971 50 842 1980",
  mobileArabic: "متحرك : ٠٥٠٨٤٢١٩٨٠",
  email: "billing@apextrading.ae",
  phone: "+971 4 388 9200",
  trn: "100294817200003",
  addressArabic1: "منطقة القوز الصناعية ۳ ، دبي",
  addressArabic2: "دولة الإمارات العربية المتحدة ، ص.ب 48920",
};

export const DEMO_SAMPLE_INVOICE: Invoice = {
  id: "inv-demo-sample-1001",
  company: {
    ...DEMO_COMPANY,
  },
  customer: {
    name: "AL NOOR SUPERMARKET L.L.C .المحترمين",
    accountNumber: "401",
    trn: "DUBAI 100482910400003",
    cityOrBranch: "Abu Dhabi",
  },
  meta: {
    invoiceNumber: "INV-2026-1001",
    invoiceDate: "15-08-2026",
    notes: "Goods received in excellent condition. Standard 5% UAE VAT applied.",
    receiverTitle: ":المستلم",
    sellerTitle: ":البائع",
  },
  items: [
    {
      id: "item-demo-1",
      itemNumber: 1,
      itemCode: "200104",
      description: "Premium Organic Produce & Commercial Supplies",
      unit: "وحدة",
      quantity: 120,
      vatPercent: 5,
      unitPrice: 4.0,
      lineTotal: 480.0,
    },
  ],
  totals: initialTotals,
  createdAt: "2026-08-15T10:00:00.000Z",
  updatedAt: "2026-08-15T10:00:00.000Z",
};

export const PRODUCTION_SAMPLE_INVOICE: Invoice = {
  id: "inv-sample-8206",
  company: {
    arabicName: "نبتة لتجارة الخضروات و الفاكهة – ذ.م.م – ش.ش.و",
    englishName: "NABTA VEGETABLES AND FRUITS TRADING L.L.C – S.P.C",
    mobile: "052512775",
    mobileArabic: "متحرك : ٠٥٢٥١٢٧٧٠٥",
    email: "kattan4@hotmail.com",
    trn: "104798388500003",
    addressArabic1: "مدينة ابوظبي الصناعية، ايكاد ۲ مبنى",
    addressArabic2: "شركة ابوظبي المواني ش م ع",
  },
  customer: {
    name: "XENDER FOR TRADING L.L.C .المحترمين",
    accountNumber: "429",
    trn: "DUBAI 100584661100003",
    cityOrBranch: "DUBAI",
  },
  meta: {
    invoiceNumber: "8206",
    invoiceDate: "17-08-2026",
    notes: "",
    receiverTitle: ":المستلم",
    sellerTitle: ":البائع",
  },
  items: [
    {
      id: "item-1",
      itemNumber: 1,
      itemCode: "100004",
      description: "Potato Cubes",
      unit: "وحدة",
      quantity: 120,
      vatPercent: 5,
      unitPrice: 4.0,
      lineTotal: 480.0,
    },
  ],
  totals: initialTotals,
  createdAt: "2026-08-17T10:00:00.000Z",
  updatedAt: "2026-08-17T10:00:00.000Z",
};

export const getSampleInvoice = (isDemo = false): Invoice => {
  return isDemo ? DEMO_SAMPLE_INVOICE : PRODUCTION_SAMPLE_INVOICE;
};

// Default export maintained for backwards compatibility
export const SAMPLE_INVOICE: Invoice = PRODUCTION_SAMPLE_INVOICE;

