import { NextResponse } from "next/server";
import { getClientsCollection, getInvoicesCollection, getPaymentsCollection, isMongoConfigured } from "@/lib/mongodb";
import { Client, ManagedInvoice, Payment } from "@/types/dashboard";

export async function POST(req: Request) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json({ success: false, error: "MongoDB not configured in environment variables" }, { status: 503 });
    }

    const payload = await req.json();
    const { clients = [], invoices = [], payments = [] }: { clients: Client[]; invoices: ManagedInvoice[]; payments: Payment[] } = payload;

    const clientCol = await getClientsCollection();
    const invCol = await getInvoicesCollection();
    const payCol = await getPaymentsCollection();

    let insertedClients = 0;
    let updatedClients = 0;
    let skippedClients = 0;

    let insertedInvoices = 0;
    let updatedInvoices = 0;
    let skippedInvoices = 0;

    let insertedPayments = 0;
    let updatedPayments = 0;
    let skippedPayments = 0;

    // 1. Upsert Clients with validation
    for (const c of clients) {
      if (!c || !c.id || !c.name) {
        skippedClients++;
        continue;
      }
      const res = await clientCol.updateOne(
        { _id: c.id },
        { $set: { ...c, _id: c.id } },
        { upsert: true }
      );
      if (res.upsertedCount > 0) insertedClients++;
      else updatedClients++;
    }

    // 2. Upsert Invoices with validation
    for (const inv of invoices) {
      if (!inv || !inv.id || !inv.meta || !inv.totals) {
        skippedInvoices++;
        continue;
      }
      const res = await invCol.updateOne(
        { _id: inv.id },
        { $set: { ...inv, _id: inv.id } },
        { upsert: true }
      );
      if (res.upsertedCount > 0) insertedInvoices++;
      else updatedInvoices++;
    }

    // 3. Upsert Payments with validation
    for (const p of payments) {
      if (!p || !p.id || !p.invoiceId || typeof p.amount !== "number" || p.amount <= 0) {
        skippedPayments++;
        continue;
      }
      const res = await payCol.updateOne(
        { _id: p.id },
        { $set: { ...p, _id: p.id } },
        { upsert: true }
      );
      if (res.upsertedCount > 0) insertedPayments++;
      else updatedPayments++;
    }

    // Get current total counts from MongoDB
    const totalClientsInCloud = await clientCol.countDocuments();
    const totalInvoicesInCloud = await invCol.countDocuments();
    const totalPaymentsInCloud = await payCol.countDocuments();

    return NextResponse.json({
      success: true,
      migrated: {
        clients: { inserted: insertedClients, updated: updatedClients, skipped: skippedClients },
        invoices: { inserted: insertedInvoices, updated: updatedInvoices, skipped: skippedInvoices },
        payments: { inserted: insertedPayments, updated: updatedPayments, skipped: skippedPayments },
      },
      cloudTotals: {
        clients: totalClientsInCloud,
        invoices: totalInvoicesInCloud,
        payments: totalPaymentsInCloud,
      },
      message: "Data migrated successfully into MongoDB Atlas with zero duplicates.",
    });
  } catch (err: any) {
    console.error("Migration error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
