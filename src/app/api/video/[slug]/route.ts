import { NextRequest, NextResponse } from 'next/server';

import { mockCommentsData } from '@/data/comments';
import { mockVideosData } from '@/data/videos';
import { VideoDetailsProps } from '@/interfaces/video';

export async function GET(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const parts = pathname.split('/');
  const slug = parts[3];

  const video = mockVideosData.find((v) => v.slug === slug);
  if (!video) {
    return NextResponse.json({ error: 'Video not found' }, { status: 404 });
  }

  const relatedVideos = mockVideosData.filter((v) => v.slug !== slug);

  const response: VideoDetailsProps = {
    video,
    commentsResponse: mockCommentsData,
    relatedVideos,
  };

  return NextResponse.json<VideoDetailsProps>(response);
}
