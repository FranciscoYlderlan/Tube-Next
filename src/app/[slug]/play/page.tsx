import { Suspense } from 'react';

import { Comment } from '@/components/comment';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
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

export default async function Play({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const videoDetails = await getVideoDetails(slug);

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-col gap-10">
          <div className="overflow-hidden rounded-lg">
            <VideoPlayer videoDetails={videoDetails.video} />
          </div>
          <div>
            <span className="text-2xl font-bold">
              {videoDetails.commentsResponse.comments.length} Comentários
            </span>
            <Separator className="mb-4 mt-2" />
            <div className="flex flex-col items-start gap-4">
              <Input
                type={'text'}
                placeholder="Diga algo sobre isto ..."
                className="bg-muted p-7 !text-lg hover:border-ring"
              />
              <Button className="flex items-center justify-center px-4 py-2 text-lg font-semibold">
                Mandar
              </Button>
            </div>
          </div>

          <div>
            {videoDetails.commentsResponse.comments.map(
              ({ id, body, likes, postId, user }) => (
                <Comment
                  key={id}
                  id={id}
                  body={body}
                  likes={likes}
                  postId={postId}
                  user={user}
                />
              )
            )}
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
