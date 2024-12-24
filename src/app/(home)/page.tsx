import { Suspense } from 'react';

import { Header } from '@/components/header';
import VideoCardSkeleton from '@/components/video-card-skeleton';
import { VideoList } from '@/components/video-list';

export default function Home() {
  return (
    <div className="p-2">
      <Header />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <Suspense
          fallback={new Array(15).fill(null).map((_, index) => (
            <VideoCardSkeleton key={index} />
          ))}
        >
          <VideoList />
        </Suspense>
      </div>
    </div>
  );
}
