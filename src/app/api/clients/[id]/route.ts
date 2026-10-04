import { NextResponse } from "next/server";
import { getClientsCollection, isMongoConfigured } from "@/lib/mongodb";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function DELETE(req: Request, { params }: any) {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json({ success: false, error: "MongoDB not configured" }, { status: 503 });
    }
    const { id } = await params;
    const col = await getClientsCollection();
    await col.deleteOne({ $or: [{ _id: id }, { id: id }] });
    return NextResponse.json({ success: true, message: `Client ${id} deleted` });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
