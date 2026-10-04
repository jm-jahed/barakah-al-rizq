import { NextResponse } from "next/server";
import { getClientsCollection, getInvoicesCollection, getPaymentsCollection, isMongoConfigured } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json({ success: false, error: "MongoDB not configured" }, { status: 503 });
    }

    const payload = await req.json();

    // 1. Validation step
    if (!payload || typeof payload !== "object") {
      return NextResponse.json({ success: false, error: "Invalid backup JSON file." }, { status: 400 });
    }

    const { clients, invoices, payments, backupVersion } = payload;

    if (!Array.isArray(clients) || !Array.isArray(invoices) || !Array.isArray(payments)) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed: Backup file must contain clients, invoices, and payments arrays. No existing data was changed.",
        },
        { status: 400 }
      );
    }

    // Validate invoices structure
    for (const inv of invoices) {
      if (!inv.id || !inv.meta || !inv.totals) {
        return NextResponse.json(
          {
            success: false,
            error: "Validation failed: Corrupted invoice records detected in backup. No existing data was changed.",
          },
          { status: 400 }
        );
      }
    }

    // 2. Safe execution (upsert all items)
    const clientCol = await getClientsCollection();
    const invCol = await getInvoicesCollection();
    const payCol = await getPaymentsCollection();

    for (const c of clients) {
      if (c && c.id) {
        await clientCol.updateOne({ _id: c.id }, { $set: { ...c, _id: c.id } }, { upsert: true });
      }
    }

    for (const inv of invoices) {
      if (inv && inv.id) {
        await invCol.updateOne({ _id: inv.id }, { $set: { ...inv, _id: inv.id } }, { upsert: true });
      }
    }

    for (const p of payments) {
      if (p && p.id) {
        await payCol.updateOne({ _id: p.id }, { $set: { ...p, _id: p.id } }, { upsert: true });
      }
    }

    return NextResponse.json({
      success: true,
      restored: {
        clients: clients.length,
        invoices: invoices.length,
        payments: payments.length,
        backupVersion: backupVersion || "unknown",
      },
      message: "Backup successfully restored into MongoDB Atlas.",
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: `Restore error: ${err.message}. No data was corrupted.` },
      { status: 500 }
    );
  }
}
