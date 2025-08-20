import { generateAbstractThumbnail } from '@/lib/generate-thumbnail';
import { NextRequest, NextResponse } from 'next/server';

type RouteContext = {
  params: {
    id: string;
  };
};

export const GET = async (req: NextRequest, context: RouteContext): Promise<NextResponse> => {
  try {
    const { id } = context.params;
    if (!id) {
      return new NextResponse('Bad Request: id is required', { status: 400 });
    }

    const pngBuffer = await generateAbstractThumbnail(id);

    return new NextResponse(pngBuffer, {
      headers: {
        'Content-Type': 'image/png',
      },
    });
  } catch (error) {
    console.error('Error generating thumbnail:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};