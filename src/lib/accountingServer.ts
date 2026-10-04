import { Db } from "mongodb";
import { parseDate, calculateInvoiceStatus } from "@/services/invoiceStorage";

/**
 * Recalculates all accounting balances for a specific client in MongoDB Atlas.
 * Guarantees that clients in the cloud database always reflect the exact truth
 * of all their invoices and payments.
 */
export async function recalculateServerClientTotals(db: Db, clientIdOrName: string): Promise<void> {
  if (!clientIdOrName) return;

  try {
    const clientsCol = db.collection<any>("clients");
    const invoicesCol = db.collection<any>("invoices");
    const paymentsCol = db.collection<any>("payments");

    // Find the client record
    const client = await clientsCol.findOne({
      $or: [
        { _id: clientIdOrName },
        { id: clientIdOrName },
        { name: clientIdOrName },
        { englishName: clientIdOrName },
      ],
    });

    if (!client) return;

    const cId = client.id || client._id;
    const cName = (client.name || "").trim().toLowerCase();

    // Find all invoices belonging to this client
    const clientInvoices = await invoicesCol
      .find({
        $or: [
          { "customer.id": cId },
          { "customer.name": new RegExp(`^${cName}$`, "i") },
        ],
      })
      .toArray();

    // Recalculate each invoice's payments and status using authoritative FIFO reconciliation
    // 1. Sort client invoices oldest first (chronological order)
    const sortedClientInvoices = [...clientInvoices].sort(
      (a, b) => parseDate(a.meta?.invoiceDate || "").getTime() - parseDate(b.meta?.invoiceDate || "").getTime()
    );

    // 2. Fetch all payments for this client
    const clientPayments = await paymentsCol
      .find({
        $or: [
          { clientId: cId },
          { clientName: new RegExp(`^${cName}$`, "i") },
        ],
      })
      .toArray();

    const totalClientPayments = clientPayments.reduce((s, p) => s + (p.amount || 0), 0);

    // 3. Allocate payments across invoices
    let unallocatedFunds = totalClientPayments;
    const allocationPerInv: Record<string, number> = {};
    sortedClientInvoices.forEach((inv) => {
      allocationPerInv[inv.id || inv._id] = 0;
    });

    // Pass 1: Direct 1-to-1 invoice matches where payment specifically specifies invoiceId
    for (const p of clientPayments) {
      if (p.invoiceId && allocationPerInv[p.invoiceId] !== undefined) {
        const targetInv = sortedClientInvoices.find((i) => (i.id || i._id) === p.invoiceId);
        const grand = targetInv?.totals?.grandTotal || 0;
        // Direct allocation if payment is within this invoice's grand total
        if (p.amount <= grand && allocationPerInv[p.invoiceId] + p.amount <= grand) {
          allocationPerInv[p.invoiceId] += p.amount;
          unallocatedFunds -= p.amount;
        }
      }
    }

    // Pass 2: FIFO allocate any remaining / bulk funds across unpaid invoices
    for (const inv of sortedClientInvoices) {
      if (unallocatedFunds <= 0) break;
      const invId = inv.id || inv._id;
      const grand = inv.totals?.grandTotal || 0;
      const alreadyAllocated = allocationPerInv[invId] || 0;
      const remainingDue = Math.max(0, grand - alreadyAllocated);

      if (remainingDue > 0) {
        const allocate = Math.min(unallocatedFunds, remainingDue);
        allocationPerInv[invId] += allocate;
        unallocatedFunds -= allocate;
      }
    }

    let totalInvoiced = 0;
    let totalPaid = 0;
    let totalDue = 0;
    let totalOverdue = 0;

    for (const inv of sortedClientInvoices) {
      const invId = inv.id || inv._id;
      const grandTotal = inv.totals?.grandTotal || 0;
      const invPaid = Math.min(grandTotal, Math.round((allocationPerInv[invId] || 0) * 1000) / 1000);
      const invDue = Math.max(0, Math.round((grandTotal - invPaid) * 1000) / 1000);
      const terms = inv.paymentTerms || client.paymentTerms;
      const { status, overdueDays } = calculateInvoiceStatus(
        grandTotal,
        invPaid,
        inv.dueDate || inv.meta?.invoiceDate,
        false,
        terms
      );

      const invPayments = clientPayments.filter((p) => p.invoiceId === invId);

      // Update invoice in MongoDB if values differ
      if (inv.paidAmount !== invPaid || inv.dueAmount !== invDue || inv.status !== status) {
        await invoicesCol.updateOne(
          { _id: inv._id },
          {
            $set: {
              paidAmount: invPaid,
              dueAmount: invDue,
              status,
              overdueDays,
              payments: invPayments.map(({ _id, ...r }) => ({ ...r, id: r.id || _id })),
              updatedAt: new Date().toISOString(),
            },
          }
        );
      }

      totalInvoiced += grandTotal;
      totalPaid += invPaid;
      totalDue += invDue;
      const isCustom = terms === "Custom" || terms?.toLowerCase() === "custom";
      if (status === "OVERDUE" && !isCustom) {
        totalOverdue += invDue;
      }
    }

    // Sort to find the latest invoice date
    const latestInvoices = [...sortedClientInvoices].reverse();
    const lastInvoiceDate = latestInvoices[0]?.meta?.invoiceDate || client.lastInvoiceDate || "";

    // Update the client in MongoDB Atlas with authoritative reconciliation
    await clientsCol.updateOne(
      { _id: client._id },
      {
        $set: {
          totalInvoices: sortedClientInvoices.length,
          totalInvoiced: Math.round(totalInvoiced * 1000) / 1000,
          totalPaid: Math.round(totalPaid * 1000) / 1000,
          totalDue: Math.round(totalDue * 1000) / 1000,
          totalOverdue: Math.round(totalOverdue * 1000) / 1000,
          lastInvoiceDate,
          updatedAt: new Date().toISOString(),
        },
      }
    );
  } catch (err) {
    console.error("Failed to recalculate server client totals:", err);
  }
}
