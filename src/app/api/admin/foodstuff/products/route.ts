import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import {
  getFoodstuffProducts,
  getFoodstuffCategories,
  getFoodstuffContainerPrices,
  getFoodstuffMarketPrices,
  createFoodstuffProduct,
  updateFoodstuffProduct,
  archiveFoodstuffProduct,
  activateFoodstuffProduct,
  deleteFoodstuffProduct,
} from '@/lib/mongodb';
import { FoodstuffProduct } from '@/lib/db/types';

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || 'ALL';
    const status = searchParams.get('status') || 'ALL'; // ALL | ACTIVE | ARCHIVED
    const search = (searchParams.get('search') || '').toLowerCase().trim();

    const [products, categories, containerPrices, marketPrices] = await Promise.all([
      getFoodstuffProducts(),
      getFoodstuffCategories(),
      getFoodstuffContainerPrices(),
      getFoodstuffMarketPrices(),
    ]);

    let filtered = products;

    if (category !== 'ALL') {
      filtered = filtered.filter(p => p.category.toUpperCase() === category.toUpperCase());
    }

    if (status === 'ACTIVE') {
      filtered = filtered.filter(p => p.published !== false);
    } else if (status === 'ARCHIVED') {
      filtered = filtered.filter(p => p.published === false);
    }

    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search) ||
        (p.arabicName && p.arabicName.includes(search)) ||
        p.id.toLowerCase().includes(search) ||
        (p.origin && p.origin.toLowerCase().includes(search))
      );
    }

    // Attach current pricing snapshot for easy display in admin table
    const enriched = filtered.map(prod => {
      const cp = containerPrices.find(c => c.productId === prod.id);
      const mp = marketPrices.find(m => m.productId === prod.id);
      return {
        ...prod,
        containerPriceAED: cp?.priceAED ?? null,
        containerMoq: cp?.moq ?? prod.defaultMoq ?? '100 CTN',
        containerPackagingDetails: cp?.packagingDetails ?? prod.defaultPackagingDetails,
        containerBusinessStatus: cp?.businessStatus ?? 'AVAILABLE',
        marketPriceAED: mp?.priceAED ?? null,
        marketMoq: mp?.minPurchaseQty ?? '10 CTN',
        marketTrend: mp?.trend ?? 'STABLE',
        marketBusinessStatus: mp?.businessStatus ?? 'AVAILABLE',
      };
    });

    return NextResponse.json({
      success: true,
      totalCount: products.length,
      filteredCount: enriched.length,
      products: enriched,
      categories,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch products';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      name,
      arabicName,
      slug,
      category,
      origin,
      grade,
      variety,
      size,
      image,
      description,
      defaultPackagingUnit,
      defaultPackagingDetails,
      defaultNetWeightKg,
      defaultMoq,
      published,
      featured,
      displayOrder,
      containerPriceAED,
      containerMoq,
      marketPriceAED,
      marketMoq,
    } = body;

    // Required Field Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Product name is required (minimum 2 characters).' }, { status: 400 });
    }

    if (!category || typeof category !== 'string') {
      return NextResponse.json({ error: 'Valid category selection is required.' }, { status: 400 });
    }

    if (!origin || typeof origin !== 'string') {
      return NextResponse.json({ error: 'Country / Region of Origin is required.' }, { status: 400 });
    }

    // Slug / ID generation & validation
    const rawSlug = slug && typeof slug === 'string' && slug.trim().length > 0 
      ? slug.trim() 
      : name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    
    const safeId = rawSlug.toLowerCase();
    if (!safeId || safeId.length < 2) {
      return NextResponse.json({ error: 'Invalid product slug/ID generated.' }, { status: 400 });
    }

    // Numeric price validations
    let parsedContainerPrice: number | null = null;
    if (containerPriceAED !== undefined && containerPriceAED !== null && containerPriceAED !== '') {
      parsedContainerPrice = parseFloat(containerPriceAED);
      if (isNaN(parsedContainerPrice) || parsedContainerPrice < 0) {
        return NextResponse.json({ error: 'Container price must be a non-negative number.' }, { status: 400 });
      }
    }

    let parsedMarketPrice: number | null = null;
    if (marketPriceAED !== undefined && marketPriceAED !== null && marketPriceAED !== '') {
      parsedMarketPrice = parseFloat(marketPriceAED);
      if (isNaN(parsedMarketPrice) || parsedMarketPrice < 0) {
        return NextResponse.json({ error: 'Dubai wholesale market price must be a non-negative number.' }, { status: 400 });
      }
    }

    let parsedWeight: number | null = null;
    if (defaultNetWeightKg !== undefined && defaultNetWeightKg !== null && defaultNetWeightKg !== '') {
      parsedWeight = parseFloat(defaultNetWeightKg);
      if (isNaN(parsedWeight) || parsedWeight <= 0) {
        parsedWeight = null;
      }
    }

    const productPayload: Omit<FoodstuffProduct, 'createdAt' | 'updatedAt'> = {
      id: safeId,
      slug: safeId,
      name: name.trim(),
      arabicName: arabicName && typeof arabicName === 'string' ? arabicName.trim() : '',
      category: category.trim().toUpperCase(),
      origin: origin.trim(),
      grade: grade && typeof grade === 'string' ? grade.trim() : 'GRADE A (PREMIUM)',
      variety: variety && typeof variety === 'string' ? variety.trim() : undefined,
      size: size && typeof size === 'string' ? size.trim() : undefined,
      image: image && typeof image === 'string' && image.trim().length > 0 
        ? image.trim() 
        : 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop',
      description: description && typeof description === 'string' ? description.trim() : '',
      defaultPackagingUnit: defaultPackagingUnit || 'CTN',
      defaultPackagingDetails: defaultPackagingDetails || 'Standard Wholesale Package',
      defaultNetWeightKg: parsedWeight,
      defaultMoq: defaultMoq || '100 CTN',
      published: published !== undefined ? Boolean(published) : true,
      featured: Boolean(featured),
      displayOrder: typeof displayOrder === 'number' ? displayOrder : 0,
    };

    const result = await createFoodstuffProduct(
      productPayload,
      {
        priceAED: parsedContainerPrice,
        moq: containerMoq || defaultMoq || '100 CTN',
        packagingUnit: defaultPackagingUnit || 'CTN',
        packagingDetails: defaultPackagingDetails,
        netWeightKg: parsedWeight,
      },
      {
        priceAED: parsedMarketPrice,
        minPurchaseQty: marketMoq || '10 CTN',
        packagingUnit: defaultPackagingUnit || 'CTN',
        packagingDetails: defaultPackagingDetails,
        netWeightKg: parsedWeight,
      },
      session.email
    );

    return NextResponse.json({
      success: true,
      product: result.product,
      containerPrice: result.containerPrice,
      marketPrice: result.marketPrice,
    }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to create product';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, productUpdates, containerUpdates, marketUpdates, action } = body;

    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    if (action === 'ARCHIVE') {
      const archived = await archiveFoodstuffProduct(id, session.email);
      if (!archived) return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      return NextResponse.json({ success: true, product: archived, action: 'ARCHIVED' });
    }

    if (action === 'ACTIVATE') {
      const activated = await activateFoodstuffProduct(id, session.email);
      if (!activated) return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      return NextResponse.json({ success: true, product: activated, action: 'ACTIVATED' });
    }

    // Sanitize container price updates if provided
    let safeCpUpdates = containerUpdates;
    if (containerUpdates && containerUpdates.priceAED !== undefined && containerUpdates.priceAED !== null && containerUpdates.priceAED !== '') {
      const parsed = parseFloat(containerUpdates.priceAED);
      if (!isNaN(parsed) && parsed >= 0) {
        safeCpUpdates = { ...containerUpdates, priceAED: parsed };
      }
    }

    // Sanitize market price updates if provided
    let safeMpUpdates = marketUpdates;
    if (marketUpdates && marketUpdates.priceAED !== undefined && marketUpdates.priceAED !== null && marketUpdates.priceAED !== '') {
      const parsed = parseFloat(marketUpdates.priceAED);
      if (!isNaN(parsed) && parsed >= 0) {
        safeMpUpdates = { ...marketUpdates, priceAED: parsed };
      }
    }

    const updated = await updateFoodstuffProduct(
      id,
      productUpdates || {},
      safeCpUpdates,
      safeMpUpdates,
      session.email
    );

    if (!updated) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, product: updated });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update product';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const result = await deleteFoodstuffProduct(id, session.email);
    return NextResponse.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to delete product';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
