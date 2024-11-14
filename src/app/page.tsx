import { Header } from '@/components/header';
import { VideoCard } from '@/components/video-card';

export default function Home() {
  return (
    <div className="p-2">
      <Header />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <VideoCard title="examplo de título" views={100} likes={10} />
      </div>
    </div>
  );
}
