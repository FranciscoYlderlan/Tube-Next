import { VideoDataProps } from '@/interfaces/videos';

import { VideoCard } from './video-card';

async function getVideos(search: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/videos?search=${search}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch videos');
  }

  const videos: VideoDataProps[] = await res.json();
  return videos;
}
export type VideoListCardProps = {
  search?: string;
  orientation?: 'horizontal' | 'vertical';
};

export async function VideoList({
  search = '',
  orientation = 'vertical',
}: VideoListCardProps) {
  const videos = await getVideos(search);
  const containerListStyle =
    orientation === 'vertical'
      ? 'grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
      : 'grid grid-cols-1 gap-6';
  return (
    <div className={containerListStyle}>
      {videos &&
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
              orientation={orientation}
            />
          );
        })}
    </div>
  );
}
