import { NextApiRequest, NextApiResponse } from 'next';

import { videos } from '@/data/videos';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await res.status(200).json(videos);
}
