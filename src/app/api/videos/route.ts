import { NextRequest, NextResponse } from 'next/server';

import { mockVideosData } from '@/data/videos';
import { VideoDataProps } from '@/interfaces/videos';

export async function GET(request: NextRequest) {
  const search = (
    request?.nextUrl?.searchParams.get('search') || ''
  ).toLowerCase();

  const filteredVideos = mockVideosData.filter((video) =>
    search ? video.title.toLowerCase().includes(search) : true
  );
  return NextResponse.json<VideoDataProps[]>(filteredVideos);
}
