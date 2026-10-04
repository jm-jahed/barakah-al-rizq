import { Client, ManagedInvoice, Payment, PaymentMethod, PaymentStatus, PaymentTerms, ClientStatement, ClientStatementEntry, ReceivablesSummary, AgingBucket, DashboardStats } from "@/types/dashboard";
import { SAMPLE_INVOICE } from "@/data/sampleInvoice";
import { formatUAEAmount } from "@/utils/calculations";
import { XENDER_CLIENT, XENDER_INVOICES, XENDER_PAYMENTS } from "@/data/xenderBillingData";
import { DemoStorageService } from "./demoStorage";

export function isDemoMode(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("nabta_auth_mode") === "demo";
}

export function getAuthMode(): "demo" | "production" {
  if (typeof window === "undefined") return "production";
  return (localStorage.getItem("nabta_auth_mode") as "demo" | "production") || "production";
}

const STORAGE_KEYS = {
  CLIENTS: "nabta_db_clients_v9",
  INVOICES: "nabta_db_invoices_v9",
  PAYMENTS: "nabta_db_payments_v9",
  SETTINGS: "nabta_db_settings_v9",
};

export function normalizeInvoiceItem(item: any) {
  const isPotato =
    item.itemCode === "01001" ||
    item.itemCode === "10004" ||
    item.itemCode === "100004" ||
    (item.description && (item.description.includes("بطاطس") || item.description.toLowerCase().includes("potato")));

  if (isPotato) {
    return {
      ...item,
      itemNumber: 1,
      itemCode: "100004",
      description: "Potato Cubes",
      unit: "وحدة",
    };
  }
  return item;
}

export function sanitizeInvoice(invoice: ManagedInvoice): ManagedInvoice {
  const isCustom = invoice.paymentTerms === "Custom" || invoice.paymentTerms?.toLowerCase() === "custom";
  const status = isCustom && invoice.status === "OVERDUE" ? ("PENDING" as PaymentStatus) : invoice.status;
  const overdueDays = isCustom ? 0 : invoice.overdueDays;

  return {
    ...invoice,
    status,
    overdueDays,
    items: (invoice.items || []).map(normalizeInvoiceItem),
  };
}

export function calculateDueDate(invoiceDateStr: string, terms: PaymentTerms): string {
  try {
    let baseDate = new Date();
    // Parse formats like DD-MM-YYYY or YYYY-MM-DD
    if (invoiceDateStr.includes("-")) {
      const parts = invoiceDateStr.split("-");
      if (parts[0].length === 2 && parts[2].length === 4) {
        // DD-MM-YYYY
        baseDate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
      } else if (parts[0].length === 4) {
        // YYYY-MM-DD
        baseDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      }
    }

    if (isNaN(baseDate.getTime())) baseDate = new Date();

    let daysToAdd = 0;
    switch (terms) {
      case "Due Immediately": daysToAdd = 0; break;
      case "15 Days": daysToAdd = 15; break;
      case "30 Days": daysToAdd = 30; break;
      case "45 Days": daysToAdd = 45; break;
      case "60 Days": daysToAdd = 60; break;
      case "90 Days": daysToAdd = 90; break;
      case "Custom": daysToAdd = 365; break;
      default: daysToAdd = 30; break;
    }

    const dueDate = new Date(baseDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    const day = String(dueDate.getDate()).padStart(2, "0");
    const month = String(dueDate.getMonth() + 1).padStart(2, "0");
    const year = dueDate.getFullYear();
    return `${day}-${month}-${year}`;
  } catch {
    return invoiceDateStr;
  }
}

export function parseDate(dateStr: string): Date {
  if (!dateStr) return new Date();
  if (dateStr.includes("-")) {
    const parts = dateStr.split("-");
    if (parts[0].length === 2 && parts[2].length === 4) {
      return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    } else if (parts[0].length === 4) {
      return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    }
  }
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

export function calculateInvoiceStatus(
  grandTotal: number,
  paidAmount: number,
  dueDateStr: string,
  isCancelled: boolean = false,
  paymentTerms?: string
): { status: PaymentStatus; overdueDays: number } {
  if (isCancelled) return { status: "CANCELLED", overdueDays: 0 };

  const total = Math.round(grandTotal * 1000) / 1000;
  const paid = Math.round(paidAmount * 1000) / 1000;
  const dueAmount = Math.max(0, total - paid);

  if (paid >= total && total > 0) {
    return { status: "PAID", overdueDays: 0 };
  }

  // When Terms is "Custom", status remains PENDING (or PARTIALLY PAID) until fully paid, NEVER OVERDUE!
  const isCustom = paymentTerms === "Custom" || paymentTerms?.toLowerCase() === "custom";
  if (isCustom) {
    if (paid > 0 && paid < total) {
      return { status: "PARTIALLY PAID", overdueDays: 0 };
    }
    return { status: "PENDING", overdueDays: 0 };
  }

  const dueDate = parseDate(dueDateStr);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = now.getTime() - dueDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (dueAmount > 0 && diffDays > 0) {
    return { status: "OVERDUE", overdueDays: diffDays };
  }

  if (paid > 0 && paid < total) {
    return { status: "PARTIALLY PAID", overdueDays: 0 };
  }

  if (diffDays === 0) {
    return { status: "DUE", overdueDays: 0 };
  }

  return { status: "PENDING", overdueDays: 0 };
}

// Initial Seed Data - Real Xender Billing & Payment Ledger
const SEED_CLIENTS: Client[] = [XENDER_CLIENT];
const SEED_INVOICES: ManagedInvoice[] = XENDER_INVOICES.map(sanitizeInvoice);

export class InvoiceStorageService {
  // --- Initialization (Authoritative MongoDB Mode - Zero Seed Auto-Injection) ---
  static initializeStorage(): { clients: Client[]; invoices: ManagedInvoice[]; payments: Payment[] } {
    if (isDemoMode()) {
      return DemoStorageService.initializeStorage();
    }

    if (typeof window === "undefined") {
      return { clients: [], invoices: [], payments: [] };
    }

    const clients = this.getClients();
    const invoices = this.getInvoices();
    const payments = this.getPayments();

    return { clients, invoices, payments };
  }

  // --- Clients CRUD ---
  static getClients(): Client[] {
    if (isDemoMode()) {
      return DemoStorageService.getClients();
    }
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CLIENTS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  static getClientById(id: string): Client | undefined {
    if (isDemoMode()) {
      return DemoStorageService.getClientById(id);
    }
    return this.getClients().find((c) => c.id === id);
  }

  static async saveClient(client: Client): Promise<Client> {
    if (isDemoMode()) {
      return DemoStorageService.saveClient(client);
    }

    const updatedClient: Client = {
      ...client,
      updatedAt: new Date().toISOString(),
    };

    // 1. Authoritative Cloud Write MUST succeed first
    if (typeof window !== "undefined") {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedClient),
      });
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Server rejected client save (HTTP ${res.status})`);
      }
    }

    // 2. Update Local Cache ONLY after server confirms
    const clients = this.getClients();
    const index = clients.findIndex((c) => c.id === client.id);
    if (index >= 0) {
      clients[index] = updatedClient;
    } else {
      clients.unshift(updatedClient);
    }

    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
    this.recalculateAll();
    return updatedClient;
  }

  static async deleteClient(id: string): Promise<boolean> {
    if (isDemoMode()) {
      return DemoStorageService.deleteClient(id);
    }

    // 1. Authoritative Cloud Deletion MUST succeed first
    if (typeof window !== "undefined") {
      const res = await fetch(`/api/clients/${encodeURIComponent(id)}`, { method: "DELETE" });
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Server rejected client deletion (HTTP ${res.status})`);
      }
    }

    // 2. Update Local Cache ONLY after server confirms
    const clients = this.getClients().filter((c) => c.id !== id);
    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
    this.recalculateAll();
    return true;
  }

  // --- Invoices CRUD ---
  static getInvoices(): ManagedInvoice[] {
    if (isDemoMode()) {
      return DemoStorageService.getInvoices();
    }
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.INVOICES);
      if (!raw) return [];
      const parsed: ManagedInvoice[] = JSON.parse(raw);
      const clients = this.getClients();
      return parsed.map((inv) => {
        const client = clients.find((c) => c.id === inv.customer?.id || c.name === inv.customer?.name);
        const isCustom =
          inv.paymentTerms === "Custom" ||
          inv.paymentTerms?.toLowerCase() === "custom" ||
          client?.paymentTerms === "Custom" ||
          client?.paymentTerms?.toLowerCase() === "custom";
        if (isCustom && inv.status === "OVERDUE") {
          return {
            ...sanitizeInvoice(inv),
            status: "PENDING" as PaymentStatus,
            overdueDays: 0,
          };
        }
        return sanitizeInvoice(inv);
      });
    } catch {
      return [];
    }
  }

  static getInvoiceById(id: string): ManagedInvoice | undefined {
    if (isDemoMode()) {
      return DemoStorageService.getInvoiceById(id);
    }
    return this.getInvoices().find((i) => i.id === id);
  }

  static async saveInvoice(invoice: ManagedInvoice): Promise<ManagedInvoice> {
    if (isDemoMode()) {
      return DemoStorageService.saveInvoice(invoice);
    }

    const clients = this.getClients();
    const client = clients.find((c) => c.id === invoice.customer?.id || c.name === invoice.customer?.name);
    const terms = invoice.paymentTerms || client?.paymentTerms || "30 Days";

    // Compute due date & status
    const dueDate = invoice.dueDate || calculateDueDate(invoice.meta.invoiceDate, terms as PaymentTerms);
    const { status, overdueDays } = calculateInvoiceStatus(
      invoice.totals.grandTotal,
      invoice.paidAmount || 0,
      dueDate,
      false,
      terms
    );

    const managed: ManagedInvoice = {
      ...invoice,
      dueDate,
      dueAmount: Math.max(0, invoice.totals.grandTotal - (invoice.paidAmount || 0)),
      status,
      overdueDays,
      updatedAt: new Date().toISOString(),
    };

    // 1. Authoritative Cloud Write MUST succeed first
    if (typeof window !== "undefined") {
      const res = await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(managed),
      });
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Server rejected invoice save (HTTP ${res.status})`);
      }
    }

    // 2. Update Local Cache ONLY after server confirms
    const invoices = this.getInvoices();
    const index = invoices.findIndex((i) => i.id === invoice.id);
    if (index >= 0) {
      invoices[index] = managed;
    } else {
      invoices.unshift(managed);
    }

    localStorage.setItem(STORAGE_KEYS.INVOICES, JSON.stringify(invoices));
    this.recalculateAll();

    return managed;
  }

  static async deleteInvoice(id: string): Promise<boolean> {
    if (isDemoMode()) {
      return DemoStorageService.deleteInvoice(id);
    }

    // 1. Authoritative Cloud Deletion MUST succeed first
    if (typeof window !== "undefined") {
      const res = await fetch(`/api/invoices/${encodeURIComponent(id)}`, { method: "DELETE" });
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Server rejected invoice deletion (HTTP ${res.status})`);
      }
    }

    // 2. Update Local Cache
    const invoices = this.getInvoices().filter((i) => i.id !== id);
    localStorage.setItem(STORAGE_KEYS.INVOICES, JSON.stringify(invoices));

    const payments = this.getPayments().filter((p) => p.invoiceId !== id);
    localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(payments));

    this.recalculateAll();

    return true;
  }

  // --- Payments CRUD ---
  static getPayments(): Payment[] {
    if (isDemoMode()) {
      return DemoStorageService.getPayments();
    }
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.PAYMENTS);
      const list: Payment[] = raw ? JSON.parse(raw) : [];
      return list.sort((a, b) => {
        const timeDiff = parseDate(b.paymentDate).getTime() - parseDate(a.paymentDate).getTime();
        if (timeDiff !== 0) return timeDiff;
        return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
      });
    } catch {
      return [];
    }
  }

  static async addPayment(paymentData: Omit<Payment, "id" | "createdAt">): Promise<Payment> {
    if (isDemoMode()) {
      const newPayment: Payment = {
        ...paymentData,
        id: `pay-demo-${Date.now()}`,
        createdAt: new Date().toISOString(),
      };
      return DemoStorageService.recordPayment(newPayment);
    }

    const newPayment: Payment = {
      ...paymentData,
      id: `pay-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    // 1. Authoritative Cloud Write MUST succeed first
    if (typeof window !== "undefined") {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPayment),
      });
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Server rejected payment save (HTTP ${res.status})`);
      }
    }

    // 2. Update Local Cache
    const payments = this.getPayments();
    payments.unshift(newPayment);
    localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(payments));

    // Update the invoice paid amount & status locally
    const invoices = this.getInvoices();
    const invIndex = invoices.findIndex((i) => i.id === paymentData.invoiceId);
    if (invIndex >= 0) {
      const inv = invoices[invIndex];
      const invPayments = payments.filter((p) => p.invoiceId === inv.id);
      const totalPaid = Math.min(
        inv.totals.grandTotal,
        invPayments.reduce((acc, p) => acc + p.amount, 0)
      );
      const clients = this.getClients();
      const client = clients.find((c) => c.id === inv.customer?.id || c.name === inv.customer?.name);
      const terms = inv.paymentTerms || client?.paymentTerms;
      const { status, overdueDays } = calculateInvoiceStatus(inv.totals.grandTotal, totalPaid, inv.dueDate, false, terms);

      invoices[invIndex] = {
        ...inv,
        paidAmount: totalPaid,
        dueAmount: Math.max(0, inv.totals.grandTotal - totalPaid),
        status,
        overdueDays,
        payments: invPayments,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEYS.INVOICES, JSON.stringify(invoices));
    }

    this.recalculateAll();
    return newPayment;
  }

  static async addBulkPayment(params: {
    clientId: string;
    clientName: string;
    amount: number;
    paymentDate: string;
    paymentMethod: PaymentMethod;
    referenceNumber?: string;
    bankAccount?: string;
    notes?: string;
    invoiceIds?: string[];
  }): Promise<Payment[]> {
    if (isDemoMode()) {
      return DemoStorageService.addBulkPayment(params);
    }

    const invoices = this.getInvoices();
    let clientInvoices = invoices.filter(
      (i) =>
        (i.customer.id === params.clientId || i.customer.name.trim().toLowerCase() === params.clientName.trim().toLowerCase()) &&
        i.dueAmount > 0
    );

    // If specific invoice IDs are provided, filter to those in specified order
    if (params.invoiceIds && params.invoiceIds.length > 0) {
      clientInvoices = params.invoiceIds
        .map((id) => invoices.find((inv) => inv.id === id))
        .filter((inv): inv is ManagedInvoice => inv !== undefined && inv.dueAmount > 0);
    } else {
      // Sort oldest first (FIFO)
      clientInvoices.sort((a, b) => parseDate(a.meta.invoiceDate).getTime() - parseDate(b.meta.invoiceDate).getTime());
    }

    let remainingPayment = params.amount;
    const createdPayments: Payment[] = [];
    const payments = this.getPayments();
    const batchReceiptNumber = `RCT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    for (const inv of clientInvoices) {
      if (remainingPayment <= 0) break;
      const amountForThisInvoice = Math.min(remainingPayment, inv.dueAmount);

      const newPayment: Payment = {
        id: `pay-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
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
        notes: params.notes || `Bulk invoice settlement (Receipt ${batchReceiptNumber})`,
        createdAt: new Date().toISOString(),
      };

      payments.unshift(newPayment);
      createdPayments.push(newPayment);
      remainingPayment -= amountForThisInvoice;
    }

    // Excess payment recorded as on-account credit
    if (remainingPayment > 0) {
      const anchorInv = clientInvoices[clientInvoices.length - 1] || invoices.find(
        (i) => i.customer.id === params.clientId || i.customer.name.trim().toLowerCase() === params.clientName.trim().toLowerCase()
      );
      const excessPayment: Payment = {
        id: `pay-${Date.now()}-excess`,
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
        notes: params.notes || `On-account settlement credit (Receipt ${batchReceiptNumber})`,
        createdAt: new Date().toISOString(),
      };
      payments.unshift(excessPayment);
      createdPayments.push(excessPayment);
    }

    // 1. Authoritative Cloud Writes (save all created payments to MongoDB)
    if (typeof window !== "undefined") {
      const responses = await Promise.all(
        createdPayments.map((p) =>
          fetch("/api/payments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(p),
          })
        )
      );
      const failed = responses.find((r) => !r.ok);
      if (failed) {
        const errJson = await failed.json().catch(() => ({}));
        throw new Error(errJson.error || `Server rejected bulk payment save (HTTP ${failed.status})`);
      }
    }

    // 2. Update Local Cache
    localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(payments));
    this.recalculateAll();

    return createdPayments;
  }

  static async deletePayment(paymentId: string): Promise<boolean> {
    if (isDemoMode()) {
      return DemoStorageService.deletePayment(paymentId);
    }

    const payments = this.getPayments();
    const target = payments.find((p) => p.id === paymentId);
    if (!target) return false;

    // 1. Authoritative Cloud Deletion MUST succeed first
    if (typeof window !== "undefined") {
      const res = await fetch(`/api/payments?id=${encodeURIComponent(paymentId)}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Server rejected payment deletion (HTTP ${res.status})`);
      }
    }

    // 2. Update Local Cache
    const remainingPayments = payments.filter((p) => p.id !== paymentId);
    localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(remainingPayments));

    this.recalculateAll();
    return true;
  }

  // --- Recalculation Engine (Authoritative FIFO Client Reconciliation) ---
  static recalculateAll(): void {
    if (isDemoMode()) {
      DemoStorageService.recalculateAll();
      return;
    }

    if (typeof window === "undefined") return;

    try {
      const rawClients = localStorage.getItem(STORAGE_KEYS.CLIENTS);
      const rawInvoices = localStorage.getItem(STORAGE_KEYS.INVOICES);
      const rawPayments = localStorage.getItem(STORAGE_KEYS.PAYMENTS);

      if (!rawClients || !rawInvoices) return;

      let clients: Client[] = JSON.parse(rawClients);
      let invoices: ManagedInvoice[] = JSON.parse(rawInvoices);
      let payments: Payment[] = rawPayments ? JSON.parse(rawPayments) : [];

      // 1. Reconcile invoices and client totals per client
      clients = clients.map((client) => {
        const cId = client.id;
        const cName = (client.name || "").trim().toLowerCase();

        // Invoices for this client, sorted chronologically (oldest invoice first)
        const clientInvoices = invoices
          .filter(
            (i) =>
              i.customer.id === cId ||
              (i.customer.name || "").trim().toLowerCase() === cName
          )
          .sort(
            (a, b) =>
              parseDate(a.meta.invoiceDate).getTime() -
              parseDate(b.meta.invoiceDate).getTime()
          );

        // Payments for this client
        const clientPayments = payments.filter(
          (p) =>
            p.clientId === cId ||
            (p.clientName || "").trim().toLowerCase() === cName
        );

        const totalClientPayments = clientPayments.reduce(
          (sum, p) => sum + (p.amount || 0),
          0
        );

        // Allocation logic
        let unallocatedFunds = totalClientPayments;
        const allocationPerInv: Record<string, number> = {};
        clientInvoices.forEach((inv) => {
          allocationPerInv[inv.id] = 0;
        });

        // Pass 1: Direct 1-to-1 invoice matches
        for (const p of clientPayments) {
          if (p.invoiceId && allocationPerInv[p.invoiceId] !== undefined) {
            const targetInv = clientInvoices.find((i) => i.id === p.invoiceId);
            const grand = targetInv?.totals?.grandTotal || 0;
            if (p.amount <= grand && allocationPerInv[p.invoiceId] + p.amount <= grand) {
              allocationPerInv[p.invoiceId] += p.amount;
              unallocatedFunds -= p.amount;
            }
          }
        }

        // Pass 2: FIFO allocate any remaining / bulk funds across unpaid invoices
        for (const inv of clientInvoices) {
          if (unallocatedFunds <= 0) break;
          const grand = inv.totals?.grandTotal || 0;
          const alreadyAllocated = allocationPerInv[inv.id] || 0;
          const remainingDue = Math.max(0, grand - alreadyAllocated);

          if (remainingDue > 0) {
            const allocate = Math.min(unallocatedFunds, remainingDue);
            allocationPerInv[inv.id] += allocate;
            unallocatedFunds -= allocate;
          }
        }

        // Update the invoices in the main invoices array
        clientInvoices.forEach((clientInv) => {
          const mainIdx = invoices.findIndex((i) => i.id === clientInv.id);
          if (mainIdx >= 0) {
            const grandTotal = clientInv.totals?.grandTotal || 0;
            const invPaid = Math.min(
              grandTotal,
              Math.round((allocationPerInv[clientInv.id] || 0) * 1000) / 1000
            );
            const invDue = Math.max(
              0,
              Math.round((grandTotal - invPaid) * 1000) / 1000
            );
            const terms = clientInv.paymentTerms || client.paymentTerms;
            const { status, overdueDays } = calculateInvoiceStatus(
              grandTotal,
              invPaid,
              clientInv.dueDate || clientInv.meta?.invoiceDate,
              false,
              terms
            );

            invoices[mainIdx] = {
              ...invoices[mainIdx],
              paidAmount: invPaid,
              dueAmount: invDue,
              status,
              overdueDays,
              payments: clientPayments.filter((p) => p.invoiceId === clientInv.id),
              updatedAt: new Date().toISOString(),
            };
          }
        });

        // Re-read updated client invoices from main array
        const updatedClientInvoices = invoices.filter(
          (i) =>
            i.customer.id === cId ||
            (i.customer.name || "").trim().toLowerCase() === cName
        );

        const totalInvoiced = Math.round(
          updatedClientInvoices.reduce((acc, i) => acc + i.totals.grandTotal, 0) * 1000
        ) / 1000;
        const totalPaid = Math.min(
          totalInvoiced,
          Math.round(totalClientPayments * 1000) / 1000
        );
        const totalDue = Math.max(0, Math.round((totalInvoiced - totalPaid) * 1000) / 1000);
        const isClientCustom = client.paymentTerms === "Custom" || client.paymentTerms?.toLowerCase() === "custom";
        const totalOverdue = isClientCustom
          ? 0
          : Math.round(
              updatedClientInvoices
                .filter((i) => i.status === "OVERDUE")
                .reduce((acc, i) => acc + i.dueAmount, 0) * 1000
            ) / 1000;

        const latestInvoice = [...updatedClientInvoices].sort(
          (a, b) =>
            parseDate(b.meta.invoiceDate).getTime() -
            parseDate(a.meta.invoiceDate).getTime()
        )[0];

        return {
          ...client,
          totalInvoices: updatedClientInvoices.length,
          totalInvoiced,
          totalPaid,
          totalDue,
          totalOverdue,
          lastInvoiceDate: latestInvoice
            ? latestInvoice.meta.invoiceDate
            : client.lastInvoiceDate,
        };
      });

      localStorage.setItem(STORAGE_KEYS.INVOICES, JSON.stringify(invoices));
      localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
    } catch (e) {
      console.error("Failed to recalculate accounting tables:", e);
    }
  }

  // --- Real-time Dashboard Statistics ---
  static getDashboardStats(): DashboardStats {
    if (isDemoMode()) {
      return DemoStorageService.getDashboardStats();
    }

    const clients = this.getClients();
    const invoices = this.getInvoices();

    const totalSales = invoices.reduce((sum, i) => sum + i.totals.grandTotal, 0);
    const totalPaid = invoices.reduce((sum, i) => sum + i.paidAmount, 0);
    const totalDue = invoices.reduce((sum, i) => sum + i.dueAmount, 0);

    const totalPending = invoices
      .filter((i) => i.status === "PENDING")
      .reduce((sum, i) => sum + i.dueAmount, 0);

    const totalOverdue = invoices
      .filter((i) => i.status === "OVERDUE")
      .reduce((sum, i) => sum + i.dueAmount, 0);

    const totalPartial = invoices
      .filter((i) => i.status === "PARTIALLY PAID")
      .reduce((sum, i) => sum + i.paidAmount, 0);

    return {
      totalClients: clients.length,
      totalInvoices: invoices.length,
      totalSales,
      totalPaid,
      totalDue,
      totalPending,
      totalOverdue,
      totalPartial,
    };
  }

  // --- Accounts Receivable Aging Breakdown ---
  static getReceivablesSummary(): ReceivablesSummary {
    if (isDemoMode()) {
      return DemoStorageService.getReceivablesSummary();
    }

    const clients = this.getClients();
    const invoices = this.getInvoices();

    let totalReceivable = 0;
    let currentTotal = 0;
    let days1To30Total = 0;
    let days31To60Total = 0;
    let days61To90Total = 0;
    let days90PlusTotal = 0;

    let within7DaysTotal = 0;
    let overdue7DaysTotal = 0;

    const buckets: AgingBucket[] = clients.map((client) => {
      const clientInvoices = invoices.filter(
        (i) => (i.customer.id === client.id || i.customer.name.trim().toLowerCase() === client.name.trim().toLowerCase()) && i.dueAmount > 0
      );

      let current = 0;
      let within7Days = 0;
      let overdue7Days = 0;
      let days1To30 = 0;
      let days31To60 = 0;
      let days61To90 = 0;
      let days90Plus = 0;
      let clientTotalDue = 0;

      const now = new Date();
      now.setHours(0, 0, 0, 0);

      const isClientCustom = client.paymentTerms === "Custom" || client.paymentTerms?.toLowerCase() === "custom";

      clientInvoices.forEach((inv) => {
        const isInvCustom = isClientCustom || inv.paymentTerms === "Custom" || inv.paymentTerms?.toLowerCase() === "custom";
        const dueDate = parseDate(inv.dueDate);
        dueDate.setHours(0, 0, 0, 0);
        const diffDays = Math.floor((now.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24));
        const amount = inv.dueAmount;
        clientTotalDue += amount;

        if (isInvCustom) {
          // Custom terms: always in current receivables until paid, never overdue
          within7Days += amount;
          current += amount;
        } else {
          // Normal terms:
          if (diffDays <= 7) {
            within7Days += amount;
          } else {
            overdue7Days += amount;
          }

          if (diffDays <= 0) {
            current += amount;
          } else if (diffDays <= 30) {
            days1To30 += amount;
          } else if (diffDays <= 60) {
            days31To60 += amount;
          } else if (diffDays <= 90) {
            days61To90 += amount;
          } else {
            days90Plus += amount;
          }
        }
      });

      totalReceivable += clientTotalDue;
      within7DaysTotal += within7Days;
      overdue7DaysTotal += overdue7Days;
      currentTotal += current;
      days1To30Total += days1To30;
      days31To60Total += days31To60;
      days61To90Total += days61To90;
      days90PlusTotal += days90Plus;

      return {
        clientId: client.id,
        clientName: client.name,
        accountNumber: client.accountNumber,
        paymentTerms: client.paymentTerms || "Net 30",
        within7Days,
        overdue7Days,
        current,
        days1To30,
        days31To60,
        days61To90,
        days90Plus,
        totalDue: clientTotalDue,
      };
    });

    return {
      totalReceivable,
      within7Days: within7DaysTotal,
      overdue7Days: overdue7DaysTotal,
      current: currentTotal,
      days1To30: days1To30Total,
      days31To60: days31To60Total,
      days61To90: days61To90Total,
      days90Plus: days90PlusTotal,
      buckets: buckets.filter((b) => b.totalDue > 0 || clients.length <= 5),
    };
  }

  // --- Client Account Statement Generator ---
  static generateClientStatement(clientId: string): ClientStatement | null {
    if (isDemoMode()) {
      return DemoStorageService.generateClientStatement(clientId);
    }

    const client = this.getClientById(clientId);
    if (!client) return null;

    const invoices = this.getInvoices().filter(
      (i) => i.customer.id === client.id || i.customer.name.trim().toLowerCase() === client.name.trim().toLowerCase()
    );
    const payments = this.getPayments().filter(
      (p) => p.clientId === client.id || p.clientName.trim().toLowerCase() === client.name.trim().toLowerCase()
    );

    const entries: ClientStatementEntry[] = [];
    let runningBalance = 0;

    // Collect all transaction events
    const events: { date: Date; dateStr: string; type: "INVOICE" | "PAYMENT"; ref: string; desc: string; amount: number; id: string }[] = [];

    invoices.forEach((inv) => {
      events.push({
        id: inv.id,
        date: parseDate(inv.meta.invoiceDate),
        dateStr: inv.meta.invoiceDate,
        type: "INVOICE",
        ref: `#${inv.meta.invoiceNumber}`,
        desc: `Tax Invoice #${inv.meta.invoiceNumber} (${inv.items.map(it => it.description).join(", ")})`,
        amount: inv.totals.grandTotal,
      });
    });

    payments.forEach((pay) => {
      events.push({
        id: pay.id,
        date: parseDate(pay.paymentDate),
        dateStr: pay.paymentDate,
        type: "PAYMENT",
        ref: pay.paymentNumber || `REC-${pay.id.slice(-4)}`,
        desc: `Payment against Invoice #${pay.invoiceNumber} via ${pay.paymentMethod} ${pay.referenceNumber ? `[Ref: ${pay.referenceNumber}]` : ""}`,
        amount: pay.amount,
      });
    });

    // Sort chronologically
    events.sort((a, b) => a.date.getTime() - b.date.getTime());

    events.forEach((ev) => {
      let debit = 0;
      let credit = 0;

      if (ev.type === "INVOICE") {
        debit = ev.amount;
        runningBalance += debit;
      } else {
        credit = ev.amount;
        runningBalance -= credit;
      }

      entries.push({
        id: ev.id,
        date: ev.dateStr,
        reference: ev.ref,
        type: ev.type,
        description: ev.desc,
        debit,
        credit,
        balance: runningBalance,
      });
    });

    return {
      client,
      openingBalance: 0,
      entries,
      closingBalance: runningBalance,
      totalInvoiced: client.totalInvoiced,
      totalPaid: client.totalPaid,
      generatedAt: new Date().toLocaleDateString("en-GB") + " " + new Date().toLocaleTimeString("en-GB"),
    };
  }

  // --- Reset to Initial Seed Data (Production Xender Data Only) ---
  static resetToSeed(): void {
    if (isDemoMode()) {
      DemoStorageService.resetDemoData();
      return;
    }
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(SEED_CLIENTS));
    localStorage.setItem(STORAGE_KEYS.INVOICES, JSON.stringify(SEED_INVOICES));
    localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(XENDER_PAYMENTS));
    this.recalculateAll();
  }

  // --- Reset Demo Data (Purely Local, Never Touches MongoDB) ---
  static resetDemoData(): void {
    DemoStorageService.resetDemoData();
  }

  // --- Cloud Sync & Migration Methods ---
  static async syncWithCloud(): Promise<{ synced: boolean; count?: number; error?: string }> {
    if (isDemoMode()) {
      return DemoStorageService.syncWithCloud();
    }
    if (typeof window === "undefined") return { synced: false };
    try {
      console.log("[Cloud Sync] Fetching latest authoritative data from MongoDB Atlas...");
      const [invRes, cRes, pRes] = await Promise.all([
        fetch("/api/invoices", { cache: "no-store" }),
        fetch("/api/clients", { cache: "no-store" }),
        fetch("/api/payments", { cache: "no-store" }),
      ]);

      let updated = false;
      let count = 0;

      // 1. Invoices Sync (MongoDB is authoritative cloud source of truth)
      if (invRes.ok) {
        const json = await invRes.json();
        if (json.success && Array.isArray(json.data)) {
          localStorage.setItem(STORAGE_KEYS.INVOICES, JSON.stringify(json.data));
          count = json.data.length;
          updated = true;
        }
      }

      // 2. Clients Sync
      if (cRes.ok) {
        const cJson = await cRes.json();
        if (cJson.success && Array.isArray(cJson.data)) {
          localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(cJson.data));
          updated = true;
        }
      }

      // 3. Payments Sync
      if (pRes.ok) {
        const pJson = await pRes.json();
        if (pJson.success && Array.isArray(pJson.data)) {
          const sorted = pJson.data.sort((a: Payment, b: Payment) => {
            const timeDiff = parseDate(b.paymentDate).getTime() - parseDate(a.paymentDate).getTime();
            if (timeDiff !== 0) return timeDiff;
            return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
          });
          localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(sorted));
          updated = true;
        }
      }

      if (updated) {
        this.recalculateAll();
        console.log(`[Cloud Sync] Cloud data loaded: ${count} invoices, clients & payments. Local cache updated.`);
        return { synced: true, count };
      }
      return { synced: false };
    } catch (err: any) {
      console.warn("[Cloud Sync] Working offline — local data preserved:", err?.message);
      return { synced: false, error: err?.message };
    }
  }

  static async uploadLocalToCloud(): Promise<any> {
    if (isDemoMode()) {
      return { success: false, error: "Demo mode is completely isolated and cannot touch MongoDB." };
    }
    const clients = this.getClients();
    const invoices = this.getInvoices();
    const payments = this.getPayments();

    try {
      const res = await fetch("/api/migrate-local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clients, invoices, payments }),
      });
      return await res.json();
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }

  static async exportBackupBlob(): Promise<Blob | null> {
    try {
      const res = await fetch("/api/backup/export");
      if (res.ok) {
        return await res.blob();
      }
    } catch {}
    // Fallback local backup
    const backupData = {
      backupVersion: "nabta_erp_backup_v1",
      createdAt: new Date().toISOString(),
      clients: this.getClients(),
      invoices: this.getInvoices(),
      payments: this.getPayments(),
    };
    return new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
  }

  static async restoreBackupFromJSON(backupJson: any): Promise<{ success: boolean; message?: string; error?: string }> {
    try {
      const res = await fetch("/api/backup/restore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backupJson),
      });
      const data = await res.json();
      if (data.success) {
        if (Array.isArray(backupJson.clients)) localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(backupJson.clients));
        if (Array.isArray(backupJson.invoices)) localStorage.setItem(STORAGE_KEYS.INVOICES, JSON.stringify(backupJson.invoices));
        if (Array.isArray(backupJson.payments)) localStorage.setItem(STORAGE_KEYS.PAYMENTS, JSON.stringify(backupJson.payments));
        this.recalculateAll();
        return { success: true, message: data.message };
      }
      return { success: false, error: data.error };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  }
}

export const InvoiceStorage = InvoiceStorageService;
export default InvoiceStorageService;
