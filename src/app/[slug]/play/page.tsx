import { Suspense } from 'react';

import { VideoCard } from '@/components/video-card';
import VideoCardSkeleton from '@/components/video-card-skeleton';
import { VideoPlayer } from '@/components/video-player';
import { VideoDetailsProps } from '@/interfaces/video';

export async function getVideoDetails(param: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/video/${param}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch videos');
  }

  const video: VideoDetailsProps = await res.json();
  return video;
}

export default async function Play({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const videoDetails = await getVideoDetails(slug);

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <div className="overflow-hidden rounded-lg">
            <VideoPlayer videoDetails={videoDetails.video} />
          </div>

          <h2 className="mt-4 text-2xl font-bold text-primary">
            {/* {video.title} */}
          </h2>

          <div className="mt-2 flex items-center justify-between text-secondary">
            <Suspense
              fallback={
                <div className="mr-2 h-8 w-24 animate-pulse rounded bg-secondary"></div>
              }
            >
              {/* <VideoLikeCounter videoId={video.id} /> */}
            </Suspense>
          </div>

          <div className="mt-2 rounded-lg bg-primary">
            {/* <p className="text-primary">{video.description}</p> */}
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="mb-4 text-xl font-semibold text-primary">
            Vídeos Recomendados
          </h3>

          <div className="flex flex-col gap-4">
            <div className="p-2">
              <div className="grid grid-cols-1 gap-6">
                <Suspense
                  fallback={new Array(10).fill(null).map((_, index) => (
                    <VideoCardSkeleton key={index} orientation="horizontal" />
                  ))}
                >
                  {videoDetails.relatedVideos.map(
                    ({
                      id,
                      title,
                      duration,
                      views,
                      likes,
                      thumbnail,
                      slug,
                    }) => {
                      return (
                        <VideoCard
                          key={id}
                          title={title}
                          slug={slug}
                          duration={duration}
                          thumbnail={thumbnail}
                          views={views}
                          likes={likes}
                          orientation={'horizontal'}
                        />
                      );
                    }
                  )}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
