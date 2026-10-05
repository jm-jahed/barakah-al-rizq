import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { getFoodstuffCategories, saveFoodstuffCategory, getFoodstuffProducts } from '@/lib/mongodb';
import { FoodstuffCategoryItem } from '@/lib/db/types';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [categories, products] = await Promise.all([
      getFoodstuffCategories(),
      getFoodstuffProducts(),
    ]);

    // Calculate product counts per category
    const enriched = categories.map(cat => {
      const prodsInCategory = products.filter(p => p.category.toUpperCase() === cat.name.toUpperCase());
      return {
        ...cat,
        productCount: prodsInCategory.length,
        activeProductCount: prodsInCategory.filter(p => p.published !== false).length,
      };
    });

    return NextResponse.json({
      success: true,
      categories: enriched,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch categories';
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
    const { name, displayName, arabicName, description, image, displayOrder, active } = body;

    if (!displayName || typeof displayName !== 'string' || displayName.trim().length < 2) {
      return NextResponse.json({ error: 'Category display name is required (minimum 2 characters).' }, { status: 400 });
    }

    const rawName = name && typeof name === 'string' && name.trim().length > 0
      ? name.trim().toUpperCase()
      : displayName.trim().toUpperCase().replace(/[^A-Z0-9]+/g, '_');

    const rawId = rawName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const existingCategories = await getFoodstuffCategories();
    const existing = existingCategories.find(c => c.id === rawId || c.name === rawName);
    if (existing) {
      return NextResponse.json({ error: `Category "${rawName}" already exists.` }, { status: 400 });
    }

    const newCategory: FoodstuffCategoryItem = {
      id: rawId,
      name: rawName,
      displayName: displayName.trim(),
      arabicName: arabicName && typeof arabicName === 'string' ? arabicName.trim() : '',
      description: description && typeof description === 'string' ? description.trim() : '',
      image: image && typeof image === 'string' ? image.trim() : '',
      displayOrder: typeof displayOrder === 'number' ? displayOrder : existingCategories.length + 1,
      active: active !== undefined ? Boolean(active) : true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const saved = await saveFoodstuffCategory(newCategory, session.email);
    return NextResponse.json({ success: true, category: saved }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to create category';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, displayName, arabicName, description, image, displayOrder, active } = body;

    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
    }

    const categories = await getFoodstuffCategories();
    const existing = categories.find(c => c.id === id);
    if (!existing) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    const updatedCategory: FoodstuffCategoryItem = {
      ...existing,
      ...(displayName !== undefined ? { displayName: displayName.trim() } : {}),
      ...(arabicName !== undefined ? { arabicName: arabicName.trim() } : {}),
      ...(description !== undefined ? { description: description.trim() } : {}),
      ...(image !== undefined ? { image: image.trim() } : {}),
      ...(displayOrder !== undefined ? { displayOrder: Number(displayOrder) } : {}),
      ...(active !== undefined ? { active: Boolean(active) } : {}),
      updatedAt: new Date().toISOString(),
    };

    const saved = await saveFoodstuffCategory(updatedCategory, session.email);
    return NextResponse.json({ success: true, category: saved });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update category';
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
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
    }

    const categories = await getFoodstuffCategories();
    const existing = categories.find(c => c.id === id);
    if (!existing) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    // Check if any products currently use this category
    const products = await getFoodstuffProducts();
    const hasProducts = products.some(p => p.category.toUpperCase() === existing.name.toUpperCase());

    if (hasProducts) {
      // Deactivate instead of delete to protect existing product references
      existing.active = false;
      existing.updatedAt = new Date().toISOString();
      await saveFoodstuffCategory(existing, session.email);
      return NextResponse.json({
        success: true,
        action: 'DEACTIVATED',
        message: `Category has associated products. It has been deactivated to preserve catalog relations.`
      });
    }

    // If completely empty, we can mark inactive
    existing.active = false;
    await saveFoodstuffCategory(existing, session.email);
    return NextResponse.json({ success: true, action: 'DEACTIVATED', message: 'Category deactivated.' });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to process category deletion';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
