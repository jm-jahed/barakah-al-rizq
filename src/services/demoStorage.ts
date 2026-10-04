import {
  Client,
  ManagedInvoice,
  Payment,
  DashboardStats,
  ReceivablesSummary,
  ClientStatement,
  ClientStatementEntry,
  AgingBucket,
} from "@/types/dashboard";
import { DEMO_CLIENTS, DEMO_INVOICES, DEMO_PAYMENTS } from "@/data/demoSeedData";
import { parseDate, normalizeInvoiceItem } from "./invoiceStorage";

export const DEMO_STORAGE_KEYS = {
  CLIENTS: "nabta_demo_clients_v3",
  INVOICES: "nabta_demo_invoices_v3",
  PAYMENTS: "nabta_demo_payments_v3",
  SETTINGS: "nabta_demo_settings_v3",
};

export class DemoStorageService {
  /**
   * Initialize Demo storage.
   * If local storage does not contain demo data, loads the 52 clients, 212 invoices, 218 payments.
   * GUARANTEE: Never touches MongoDB.
   */
  static initializeStorage(): { clients: Client[]; invoices: ManagedInvoice[]; payments: Payment[] } {
    if (typeof window === "undefined") {
      return { clients: DEMO_CLIENTS, invoices: DEMO_INVOICES, payments: DEMO_PAYMENTS };
    }

    try {
      // Clean up legacy v2 demo cache if present
      if (localStorage.getItem("nabta_demo_invoices_v2")) {
        localStorage.removeItem("nabta_demo_clients_v2");
        localStorage.removeItem("nabta_demo_invoices_v2");
        localStorage.removeItem("nabta_demo_payments_v2");
        localStorage.removeItem("nabta_demo_settings_v2");
      }

      const existingClients = localStorage.getItem(DEMO_STORAGE_KEYS.CLIENTS);
      const existingInvoices = localStorage.getItem(DEMO_STORAGE_KEYS.INVOICES);
      const existingPayments = localStorage.getItem(DEMO_STORAGE_KEYS.PAYMENTS);

      if (!existingClients || !existingInvoices || !existingPayments) {
        localStorage.setItem(DEMO_STORAGE_KEYS.CLIENTS, JSON.stringify(DEMO_CLIENTS));
        localStorage.setItem(DEMO_STORAGE_KEYS.INVOICES, JSON.stringify(DEMO_INVOICES));
        localStorage.setItem(DEMO_STORAGE_KEYS.PAYMENTS, JSON.stringify(DEMO_PAYMENTS));
        return { clients: DEMO_CLIENTS, invoices: DEMO_INVOICES, payments: DEMO_PAYMENTS };
      }

      return {
        clients: JSON.parse(existingClients),
        invoices: JSON.parse(existingInvoices),
        payments: JSON.parse(existingPayments),
      };
    } catch {
      return { clients: DEMO_CLIENTS, invoices: DEMO_INVOICES, payments: DEMO_PAYMENTS };
    }
  }

  /**
   * Completely reset demo data back to pristine 52 clients / 212 invoices.
   * GUARANTEE: Never touches MongoDB.
   */
  static resetDemoData(): { clients: Client[]; invoices: ManagedInvoice[]; payments: Payment[] } {
    if (typeof window === "undefined") {
      return { clients: DEMO_CLIENTS, invoices: DEMO_INVOICES, payments: DEMO_PAYMENTS };
    }

    localStorage.setItem(DEMO_STORAGE_KEYS.CLIENTS, JSON.stringify(DEMO_CLIENTS));
    localStorage.setItem(DEMO_STORAGE_KEYS.INVOICES, JSON.stringify(DEMO_INVOICES));
    localStorage.setItem(DEMO_STORAGE_KEYS.PAYMENTS, JSON.stringify(DEMO_PAYMENTS));

    return { clients: DEMO_CLIENTS, invoices: DEMO_INVOICES, payments: DEMO_PAYMENTS };
  }

  // --- Clients (Local Only) ---
  static getClients(): Client[] {
    if (typeof window === "undefined") return DEMO_CLIENTS;
    try {
      const raw = localStorage.getItem(DEMO_STORAGE_KEYS.CLIENTS);
      return raw ? JSON.parse(raw) : DEMO_CLIENTS;
    } catch {
      return DEMO_CLIENTS;
    }
  }

  static getClientById(id: string): Client | undefined {
    return this.getClients().find((c) => c.id === id);
  }

  static async saveClient(client: Client): Promise<Client> {
    const updatedClient: Client = {
      ...client,
      updatedAt: new Date().toISOString(),
    };

    const clients = this.getClients();
    const index = clients.findIndex((c) => c.id === client.id);
    if (index >= 0) {
      clients[index] = updatedClient;
    } else {
      clients.unshift(updatedClient);
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(DEMO_STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
    }
    this.recalculateAll();
    return updatedClient;
  }

  static async deleteClient(id: string): Promise<boolean> {
    const clients = this.getClients().filter((c) => c.id !== id);
    if (typeof window !== "undefined") {
      localStorage.setItem(DEMO_STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
    }
    this.recalculateAll();
    return true;
  }

  // --- Invoices (Local Only) ---
  static getInvoices(): ManagedInvoice[] {
    if (typeof window === "undefined") return DEMO_INVOICES;
    try {
      const raw = localStorage.getItem(DEMO_STORAGE_KEYS.INVOICES);
      return raw ? JSON.parse(raw) : DEMO_INVOICES;
    } catch {
      return DEMO_INVOICES;
    }
  }

  static getInvoiceById(id: string): ManagedInvoice | undefined {
    return this.getInvoices().find((inv) => inv.id === id);
  }

  static async saveInvoice(invoice: ManagedInvoice): Promise<ManagedInvoice> {
    const updatedInvoice: ManagedInvoice = {
      ...invoice,
      items: (invoice.items || []).map(normalizeInvoiceItem),
      updatedAt: new Date().toISOString(),
    };

    const invoices = this.getInvoices();
    const index = invoices.findIndex((inv) => inv.id === invoice.id);
    if (index >= 0) {
      invoices[index] = updatedInvoice;
    } else {
      invoices.unshift(updatedInvoice);
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(DEMO_STORAGE_KEYS.INVOICES, JSON.stringify(invoices));
    }
    this.recalculateAll();
    return updatedInvoice;
  }

  static async deleteInvoice(id: string): Promise<boolean> {
    const invoices = this.getInvoices().filter((inv) => inv.id !== id);
    if (typeof window !== "undefined") {
      localStorage.setItem(DEMO_STORAGE_KEYS.INVOICES, JSON.stringify(invoices));
    }
    this.recalculateAll();
    return true;
  }

  // --- Payments (Local Only) ---
  static getPayments(): Payment[] {
    if (typeof window === "undefined") return DEMO_PAYMENTS;
    try {
      const raw = localStorage.getItem(DEMO_STORAGE_KEYS.PAYMENTS);
      const list: Payment[] = raw ? JSON.parse(raw) : DEMO_PAYMENTS;
      return list.sort((a, b) => parseDate(b.paymentDate).getTime() - parseDate(a.paymentDate).getTime());
    } catch {
      return DEMO_PAYMENTS;
    }
  }

  static async recordPayment(payment: Payment): Promise<Payment> {
    const payments = this.getPayments();
    payments.unshift(payment);

    if (typeof window !== "undefined") {
      localStorage.setItem(DEMO_STORAGE_KEYS.PAYMENTS, JSON.stringify(payments));
    }

    // Allocate payment against invoice locally
    const invoice = this.getInvoiceById(payment.invoiceId);
    if (invoice) {
      const newPaid = Math.min(invoice.totals.grandTotal, (invoice.paidAmount || 0) + payment.amount);
      const newDue = Math.max(0, invoice.totals.grandTotal - newPaid);
      let newStatus = invoice.status;
      if (newPaid >= invoice.totals.grandTotal) {
        newStatus = "PAID";
      } else if (newPaid > 0) {
        newStatus = "PARTIALLY PAID";
      }

      const invPayments = invoice.payments ? [...invoice.payments, payment] : [payment];
      await this.saveInvoice({
        ...invoice,
        paidAmount: newPaid,
        dueAmount: newDue,
        status: newStatus,
        overdueDays: newStatus === "PAID" ? 0 : invoice.overdueDays,
        payments: invPayments,
      });
    }

    this.recalculateAll();
    return payment;
  }

  static async deletePayment(id: string): Promise<boolean> {
    const payments = this.getPayments().filter((p) => p.id !== id);
    if (typeof window !== "undefined") {
      localStorage.setItem(DEMO_STORAGE_KEYS.PAYMENTS, JSON.stringify(payments));
    }
    this.recalculateAll();
    return true;
  }

  // --- Calculations & Recalculation (Local Only) ---
  static recalculateAll(): void {
    if (typeof window === "undefined") return;

    const clients = this.getClients();
    const invoices = this.getInvoices();
    const payments = this.getPayments();

    clients.forEach((client) => {
      const clientInvoices = invoices.filter(
        (inv) => inv.customer?.id === client.id || inv.customer?.name === client.name
      );
      const clientPayments = payments.filter((p) => p.clientId === client.id);

      client.totalInvoices = clientInvoices.length;
      client.totalInvoiced = Math.round(clientInvoices.reduce((sum, i) => sum + (i.totals?.grandTotal || 0), 0) * 100) / 100;
      client.totalPaid = Math.round(clientPayments.reduce((sum, p) => sum + p.amount, 0) * 100) / 100;
      client.totalDue = Math.max(0, Math.round((client.totalInvoiced - client.totalPaid) * 100) / 100);
      client.totalOverdue = Math.round(
        clientInvoices
          .filter((i) => i.status === "OVERDUE")
          .reduce((sum, i) => sum + (i.dueAmount || 0), 0) * 100
      ) / 100;

      if (clientInvoices.length > 0) {
        const sorted = [...clientInvoices].sort(
          (a, b) => parseDate(b.meta.invoiceDate).getTime() - parseDate(a.meta.invoiceDate).getTime()
        );
        client.lastInvoiceDate = sorted[0].meta.invoiceDate;
      }
    });

    localStorage.setItem(DEMO_STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
  }

  // --- Dashboard Stats (Local Only) ---
  static getDashboardStats(): DashboardStats {
    const clients = this.getClients();
    const invoices = this.getInvoices();
    const payments = this.getPayments();

    const totalSales = Math.round(invoices.reduce((sum, i) => sum + (i.totals?.grandTotal || 0), 0) * 100) / 100;
    const totalPaid = Math.round(payments.reduce((sum, p) => sum + p.amount, 0) * 100) / 100;
    const totalDue = Math.max(0, Math.round((totalSales - totalPaid) * 100) / 100);
    const totalOverdue = Math.round(
      invoices
        .filter((i) => i.status === "OVERDUE")
        .reduce((sum, i) => sum + (i.dueAmount || 0), 0) * 100
    ) / 100;
    const totalPending = Math.round(
      invoices
        .filter((i) => i.status === "PENDING" || i.status === "DUE")
        .reduce((sum, i) => sum + (i.dueAmount || 0), 0) * 100
    ) / 100;
    const totalPartial = Math.round(
      invoices
        .filter((i) => i.status === "PARTIALLY PAID")
        .reduce((sum, i) => sum + (i.dueAmount || 0), 0) * 100
    ) / 100;

    return {
      totalClients: clients.length,
      totalInvoices: invoices.length,
      totalSales,
      totalPaid,
      totalDue,
      totalOverdue,
      totalPending,
      totalPartial,
    };
  }

  // --- Receivables Summary (Local Only) ---
  static getReceivablesSummary(): ReceivablesSummary {
    const clients = this.getClients();
    const invoices = this.getInvoices();

    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const buckets: AgingBucket[] = clients
      .map((client) => {
        const clientInvoices = invoices.filter(
          (i) => (i.customer?.id === client.id || i.customer?.name === client.name) && (i.dueAmount || 0) > 0
        );

        let within7Days = 0;
        let overdue7Days = 0;
        let current = 0;
        let days1To30 = 0;
        let days31To60 = 0;
        let days61To90 = 0;
        let days90Plus = 0;

        clientInvoices.forEach((inv) => {
          const invDate = parseDate(inv.meta.invoiceDate);
          invDate.setHours(0, 0, 0, 0);
          const ageDays = Math.floor((now.getTime() - invDate.getTime()) / (1000 * 60 * 60 * 24));
          const due = inv.dueAmount || 0;

          if (ageDays <= 7) {
            within7Days += due;
          } else {
            overdue7Days += due;
          }

          if (inv.status === "DUE" || inv.status === "PENDING") {
            current += due;
          } else if (ageDays <= 30) {
            days1To30 += due;
          } else if (ageDays <= 60) {
            days31To60 += due;
          } else if (ageDays <= 90) {
            days61To90 += due;
          } else {
            days90Plus += due;
          }
        });

        const totalDue = Math.round(clientInvoices.reduce((sum, i) => sum + (i.dueAmount || 0), 0) * 100) / 100;

        return {
          clientId: client.id,
          clientName: client.name,
          accountNumber: client.accountNumber,
          paymentTerms: client.paymentTerms,
          within7Days: Math.round(within7Days * 100) / 100,
          overdue7Days: Math.round(overdue7Days * 100) / 100,
          current: Math.round(current * 100) / 100,
          days1To30: Math.round(days1To30 * 100) / 100,
          days31To60: Math.round(days31To60 * 100) / 100,
          days61To90: Math.round(days61To90 * 100) / 100,
          days90Plus: Math.round(days90Plus * 100) / 100,
          totalDue,
        };
      })
      .filter((b) => b.totalDue > 0);

    const totalReceivable = Math.round(buckets.reduce((sum, b) => sum + b.totalDue, 0) * 100) / 100;
    const within7Days = Math.round(buckets.reduce((sum, b) => sum + (b.within7Days || 0), 0) * 100) / 100;
    const overdue7Days = Math.round(buckets.reduce((sum, b) => sum + (b.overdue7Days || 0), 0) * 100) / 100;

    return {
      totalReceivable,
      within7Days,
      overdue7Days,
      current: Math.round(buckets.reduce((sum, b) => sum + b.current, 0) * 100) / 100,
      days1To30: Math.round(buckets.reduce((sum, b) => sum + b.days1To30, 0) * 100) / 100,
      days31To60: Math.round(buckets.reduce((sum, b) => sum + b.days31To60, 0) * 100) / 100,
      days61To90: Math.round(buckets.reduce((sum, b) => sum + b.days61To90, 0) * 100) / 100,
      days90Plus: Math.round(buckets.reduce((sum, b) => sum + b.days90Plus, 0) * 100) / 100,
      buckets,
    };
  }

  // --- Bulk Payment (Local Only - Zero MongoDB Touches) ---
  static async addBulkPayment(params: {
    clientId: string;
    clientName: string;
    amount: number;
    paymentDate: string;
    paymentMethod: any;
    referenceNumber?: string;
    bankAccount?: string;
    notes?: string;
    invoiceIds?: string[];
  }): Promise<Payment[]> {
    const invoices = this.getInvoices();
    let clientInvoices = invoices.filter(
      (i) =>
        (i.customer.id === params.clientId || i.customer.name.trim().toLowerCase() === params.clientName.trim().toLowerCase()) &&
        i.dueAmount > 0
    );

    if (params.invoiceIds && params.invoiceIds.length > 0) {
      clientInvoices = params.invoiceIds
        .map((id) => invoices.find((inv) => inv.id === id))
        .filter((inv): inv is ManagedInvoice => inv !== undefined && inv.dueAmount > 0);
    } else {
      clientInvoices.sort((a, b) => parseDate(a.meta.invoiceDate).getTime() - parseDate(b.meta.invoiceDate).getTime());
    }

    let remainingPayment = params.amount;
    const createdPayments: Payment[] = [];
    const payments = this.getPayments();
    const batchReceiptNumber = `RCT-DEMO-${Math.floor(1000 + Math.random() * 9000)}`;

    for (const inv of clientInvoices) {
      if (remainingPayment <= 0) break;
      const amountForThisInvoice = Math.min(remainingPayment, inv.dueAmount);

      const newPayment: Payment = {
        id: `pay-demo-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        paymentNumber: batchReceiptNumber,
        invoiceId: inv.id,
        invoiceNumber: inv.meta.invoiceNumber,
        clientId: params.clientId,
        clientName: params.clientName,
        amount: amountForThisInvoice,
        paymentDate: params.paymentDate,
        paymentMethod: params.paymentMethod,
        referenceNumber: params.referenceNumber,
        bankAccount: params.bankAccount,
        notes: params.notes || `Demo Bulk invoice settlement (${batchReceiptNumber})`,
        createdAt: new Date().toISOString(),
      };

      payments.unshift(newPayment);
      createdPayments.push(newPayment);
      remainingPayment -= amountForThisInvoice;
    }

    if (remainingPayment > 0) {
      const anchorInv = clientInvoices[clientInvoices.length - 1] || invoices.find(
        (i) => i.customer.id === params.clientId || i.customer.name.trim().toLowerCase() === params.clientName.trim().toLowerCase()
      );
      const excessPayment: Payment = {
        id: `pay-demo-${Date.now()}-excess`,
        paymentNumber: batchReceiptNumber,
        invoiceId: anchorInv?.id || "on-account",
        invoiceNumber: anchorInv?.meta.invoiceNumber || "ON-ACC",
        clientId: params.clientId,
        clientName: params.clientName,
        amount: remainingPayment,
        paymentDate: params.paymentDate,
        paymentMethod: params.paymentMethod,
        referenceNumber: params.referenceNumber,
        bankAccount: params.bankAccount,
        notes: params.notes || `Demo on-account credit (${batchReceiptNumber})`,
        createdAt: new Date().toISOString(),
      };
      payments.unshift(excessPayment);
      createdPayments.push(excessPayment);
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(DEMO_STORAGE_KEYS.PAYMENTS, JSON.stringify(payments));
    }
    this.recalculateAll();

    return createdPayments;
  }

  // --- Client Statement (Local Only) ---
  static getClientStatement(clientId: string): ClientStatement | null {
    const client = this.getClientById(clientId);
    if (!client) return null;

    const invoices = this.getInvoices().filter(
      (inv) => inv.customer?.id === clientId || inv.customer?.name === client.name
    );
    const payments = this.getPayments().filter((p) => p.clientId === clientId);

    const entries: ClientStatementEntry[] = [];
    invoices.forEach((inv) => {
      entries.push({
        id: `stmt-inv-${inv.id}`,
        date: inv.meta.invoiceDate,
        reference: inv.meta.invoiceNumber,
        type: "INVOICE",
        description: `Tax Invoice #${inv.meta.invoiceNumber}`,
        debit: inv.totals.grandTotal,
        credit: 0,
        balance: 0,
      });
    });

    payments.forEach((p) => {
      entries.push({
        id: `stmt-pay-${p.id}`,
        date: p.paymentDate,
        reference: p.paymentNumber,
        type: "PAYMENT",
        description: `Payment Receipt #${p.paymentNumber} (${p.paymentMethod})`,
        debit: 0,
        credit: p.amount,
        balance: 0,
      });
    });

    entries.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());

    let running = 0;
    entries.forEach((e) => {
      running += e.debit - e.credit;
      e.balance = Math.round(running * 100) / 100;
    });

    return {
      client,
      openingBalance: 0,
      entries,
      closingBalance: Math.round(running * 100) / 100,
      totalInvoiced: client.totalInvoiced,
      totalPaid: client.totalPaid,
      generatedAt: new Date().toISOString(),
    };
  }

  static generateClientStatement(clientId: string): ClientStatement | null {
    return this.getClientStatement(clientId);
  }

  /**
   * Safe no-op cloud sync for demo mode.
   * GUARANTEE: Never makes network requests to MongoDB APIs.
   */
  static async syncWithCloud(): Promise<{ synced: boolean; count: number; isDemo: boolean }> {
    return { synced: true, count: this.getInvoices().length, isDemo: true };
  }
}
