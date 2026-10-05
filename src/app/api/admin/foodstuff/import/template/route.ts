import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { stringifyCsv } from '@/lib/csv';

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const type = (searchParams.get('type') || '').toLowerCase().trim();

  let headers: string[] = [];
  let filename = `barakah_template_${type || 'data'}.csv`;

  switch (type) {
    case 'products':
      headers = [
        'id',
        'name',
        'arabicName',
        'category',
        'origin',
        'variety',
        'grade',
        'size',
        'defaultPackagingUnit',
        'defaultPackagingDetails',
        'defaultNetWeightKg',
        'defaultMoq',
        'containerPriceAED',
        'marketPriceAED',
        'published',
      ];
      filename = 'barakah_template_products.csv';
      break;

    case 'categories':
      headers = [
        'id',
        'name',
        'displayName',
        'arabicName',
        'description',
        'displayOrder',
        'active',
      ];
      filename = 'barakah_template_categories.csv';
      break;

    case 'customers':
      headers = [
        'id',
        'name',
        'companyName',
        'phone',
        'email',
        'whatsapp',
        'trn',
        'notes',
      ];
      filename = 'barakah_template_customers.csv';
      break;

    case 'orders':
      headers = [
        'id',
        'customerName',
        'companyName',
        'phone',
        'email',
        'pickupDate',
        'pickupTime',
        'pickupLocation',
        'orderType',
        'totalCtn',
        'totalAED',
        'notes',
        'status',
      ];
      filename = 'barakah_template_wholesale_orders.csv';
      break;

    case 'payments':
      headers = [
        'id',
        'orderId',
        'customerName',
        'companyName',
        'phone',
        'email',
        'amountAED',
        'paymentDate',
        'paymentMethod',
        'paymentType',
        'referenceNumber',
        'bankAccount',
        'notes',
        'status',
      ];
      filename = 'barakah_template_payments.csv';
      break;

    default:
      return NextResponse.json(
        { error: 'Invalid template type. Allowed types: products, categories, customers, orders, payments.' },
        { status: 400 }
      );
  }

  // Template contains ONLY headers to prevent accidental insertion of dummy data
  const csvString = stringifyCsv([headers]);

  return new NextResponse(csvString, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}
