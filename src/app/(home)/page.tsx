import { Suspense } from 'react';

import VideoCardSkeleton from '@/components/video-card-skeleton';
import { VideoList } from '@/components/video-list';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  return (
    <div className="p-2">
      <Suspense
        fallback={
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {new Array(15).fill(null).map((_, index) => (
              <VideoCardSkeleton key={index} />
            ))}
          </div>
        }
      >
        <VideoList search={(await searchParams).search} />
      </Suspense>
    </div>
  );
}
