import { Invoice } from "./invoice";

export type PaymentStatus = "PAID" | "PARTIALLY PAID" | "PENDING" | "DUE" | "OVERDUE" | "CANCELLED";

export type PaymentMethod = "Cash" | "Bank Transfer" | "Card" | "Cheque" | "Online" | "Other";

export type PaymentTerms = "Due Immediately" | "7 Days" | "15 Days" | "30 Days" | "45 Days" | "60 Days" | "90 Days" | "Custom";

export interface Client {
  id: string;
  clientCode: string;
  name: string;
  companyName: string;
  arabicName: string;
  englishName: string;
  contactPerson: string;
  mobile: string;
  email: string;
  address: string;
  city: string;
  country: string;
  trn: string;
  accountNumber: string;
  paymentTerms: PaymentTerms;
  creditLimit: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  lastInvoiceDate?: string;
  totalInvoices: number;
  totalInvoiced: number;
  totalPaid: number;
  totalDue: number;
  totalOverdue: number;
}

export interface Payment {
  id: string;
  paymentNumber: string;
  invoiceId: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  amount: number;
  paymentDate: string;
  paymentMethod: PaymentMethod;
  referenceNumber?: string;
  bankAccount?: string;
  notes?: string;
  createdAt: string;
}

export interface ManagedInvoice extends Invoice {
  paymentTerms: PaymentTerms;
  dueDate: string;
  paidAmount: number;
  dueAmount: number;
  status: PaymentStatus;
  overdueDays: number;
  payments: Payment[];
}

export interface ClientStatementEntry {
  id: string;
  date: string;
  reference: string;
  type: "INVOICE" | "PAYMENT" | "ADJUSTMENT";
  description: string;
  debit: number;
  credit: number;
  balance: number;
}

export interface ClientStatement {
  client: Client;
  openingBalance: number;
  entries: ClientStatementEntry[];
  closingBalance: number;
  totalInvoiced: number;
  totalPaid: number;
  generatedAt: string;
}

export interface AgingBucket {
  clientId: string;
  clientName: string;
  accountNumber: string;
  paymentTerms?: string;
  within7Days?: number;
  overdue7Days?: number;
  current: number;
  days1To30: number;
  days31To60: number;
  days61To90: number;
  days90Plus: number;
  totalDue: number;
}

export interface ReceivablesSummary {
  totalReceivable: number;
  within7Days?: number;
  overdue7Days?: number;
  current: number;
  days1To30: number;
  days31To60: number;
  days61To90: number;
  days90Plus: number;
  buckets: AgingBucket[];
}

export interface DashboardStats {
  totalClients: number;
  totalInvoices: number;
  totalSales: number;
  totalPaid: number;
  totalDue: number;
  totalPending: number;
  totalOverdue: number;
  totalPartial: number;
}
