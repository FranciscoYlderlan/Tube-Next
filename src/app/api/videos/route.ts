import { NextResponse } from 'next/server';

import { mockVideosData } from '@/data/videos';
import { VideoDataProps } from '@/interfaces/videos';

export async function GET() {
  return NextResponse.json<VideoDataProps[]>(mockVideosData);
}
