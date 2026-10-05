import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { logActivityToMongo } from '@/lib/mongodb';

const ALLOWED_MIME_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/svg+xml',
]);

const EXTENSION_MAP: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/svg+xml': 'svg',
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No image file uploaded.' }, { status: 400 });
    }

    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return NextResponse.json({
        error: `Invalid file type "${file.type}". Allowed types: JPG, PNG, WEBP, AVIF, SVG.`
      }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({
        error: `File size exceeds the 5MB maximum limit (${(file.size / (1024 * 1024)).toFixed(2)} MB uploaded).`
      }, { status: 400 });
    }

    const ext = EXTENSION_MAP[file.type] || 'jpg';
    const randToken = crypto.randomBytes(4).toString('hex');
    const safeFilename = `prod-${Date.now()}-${randToken}.${ext}`;

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'products');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, safeFilename);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/products/${safeFilename}`;

    await logActivityToMongo(session.email, 'PRODUCT_IMAGE_UPLOADED', safeFilename);

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: safeFilename,
      size: file.size,
      mimeType: file.type,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to upload image';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
