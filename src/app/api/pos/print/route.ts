import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    bridgeAvailable: true,
    message: 'Retail POS Print Gateway Spooler Active',
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { isTestPrint, sale, config, rawText } = body;

    // Simulate print job processing or log ESC/POS job
    console.log(`[POS PRINT GATEWAY] Job received: ${isTestPrint ? 'Test Print' : sale?.orderNumber || 'Order'}`);

    return NextResponse.json({
      success: true,
      printerName: config?.printerName || 'Default ESC/POS Printer',
      method: 'POS Print Gateway Spooler',
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Print Gateway Spooler Error' },
      { status: 500 }
    );
  }
}
