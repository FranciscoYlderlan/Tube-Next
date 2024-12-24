import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { videos } from '@/data/videos';
import { VideoDataProps } from '@/interfaces/videos';

export async function GET() {
  return NextResponse.json<VideoDataProps[]>(videos);
}
