import { VideoCard, videoCardProps } from './video-card';

async function getFakeVideos() {
  return new Promise<videoCardProps[]>((resolve) => {
    const fakeVideos: videoCardProps[] = Array.from({ length: 15 }, (_, i) => ({
      id: i + '',
      title: `Video de exemplo ${i + 1}`,
      thumbnail: undefined,
      views: Math.floor(Math.random() * 1000),
      likes: Math.random() > 0.5 ? Math.floor(Math.random() * 500) : undefined,
      duration: Math.floor(Math.random() * 150) + 60,
      orientation: undefined,
    }));

    setTimeout(() => resolve(fakeVideos), 3000);
  });
}

export async function VideoList() {
  const videos = await getFakeVideos();
  return (
    // <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    videos.map(({ id, title, duration, views, likes }) => {
      return (
        <VideoCard
          key={id}
          title={title}
          duration={duration}
          views={views}
          likes={likes}
        />
      );
    })
    // </div>
  );
}
