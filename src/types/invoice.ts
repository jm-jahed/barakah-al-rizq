export interface InvoiceItem {
  id: string;
  itemNumber: number;
  itemCode: string;
  description: string;
  unit: string;
  quantity: number;
  vatPercent: number;
  unitPrice: number;
  lineTotal: number;
}

export interface CompanyInfo {
  arabicName: string;
  englishName: string;
  mobile: string;
  mobileArabic: string;
  email: string;
  trn: string;
  addressArabic1: string;
  addressArabic2: string;
  phone?: string;
}

export interface CustomerInfo {
  id?: string;
  name: string;
  accountNumber: string;
  trn: string;
  cityOrBranch: string;
}

export interface InvoiceMeta {
  invoiceNumber: string;
  invoiceDate: string; // DD-MM-YYYY
  notes: string;
  receiverTitle: string;
  sellerTitle: string;
}

export interface InvoiceTotals {
  totalQuantity: number;
  subtotal: number;
  discount: number;
  netAmount: number;
  vatAmount: number;
  grandTotal: number;
  amountInWordsArabic: string;
  amountInWordsEnglish: string;
}

export interface Invoice {
  id: string;
  company: CompanyInfo;
  customer: CustomerInfo;
  meta: InvoiceMeta;
  items: InvoiceItem[];
  totals: InvoiceTotals;
  createdAt: string;
  updatedAt: string;
}
