import { VideoDataProps } from '@/interfaces/videos';

import { VideoCard } from './video-card';

async function getVideos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/video`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch videos');
  }

  const videos: VideoDataProps[] = await res.json();
  return videos;
}

export async function VideoList() {
  const videos = await getVideos();

  return (
    videos &&
    videos.map(({ id, title, duration, views, likes, thumbnail, slug }) => {
      return (
        <VideoCard
          key={id}
          title={title}
          slug={slug}
          duration={duration}
          thumbnail={thumbnail}
          views={views}
          likes={likes}
        />
      );
    })
  );
}
