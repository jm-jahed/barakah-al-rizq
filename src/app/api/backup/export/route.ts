import { NextResponse } from "next/server";
import { getClientsCollection, getInvoicesCollection, getPaymentsCollection, getSettingsCollection, isMongoConfigured } from "@/lib/mongodb";

export async function GET() {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json({ success: false, error: "MongoDB not configured" }, { status: 503 });
    }

    const clientCol = await getClientsCollection();
    const invCol = await getInvoicesCollection();
    const payCol = await getPaymentsCollection();
    const setCol = await getSettingsCollection();

    const clients = await clientCol.find({}).toArray();
    const invoices = await invCol.find({}).toArray();
    const payments = await payCol.find({}).toArray();
    const settings = await setCol.find({}).toArray();

    const clean = (arr: any[]) => arr.map(({ _id, ...r }) => ({ ...r, id: r.id || _id }));

    const backupData = {
      backupVersion: "nabta_erp_backup_v1",
      createdAt: new Date().toISOString(),
      metadata: {
        totalClients: clients.length,
        totalInvoices: invoices.length,
        totalPayments: payments.length,
      },
      clients: clean(clients),
      invoices: clean(invoices),
      payments: clean(payments),
      settings: clean(settings),
    };

    return new NextResponse(JSON.stringify(backupData, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="nabta_erp_backup_${new Date().toISOString().slice(0, 10)}.json"`,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
