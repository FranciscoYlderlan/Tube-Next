import { ChartLine, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import thumbnailPlaceholder from '../../public/thumbnail-placeholder.svg';
import { VideoCardDurationLabel } from './video-card-duration-label';

export type videoCardProps = {
  id: string;
  title: string;
  slug: string;
  thumbnail?: string;
  views: number;
  likes?: number;
  duration: number;
  orientation?: 'vertical' | 'horizontal';
};

export function VideoCard({
  title,
  slug,
  thumbnail = thumbnailPlaceholder,
  views,
  likes,
  duration,
  orientation = 'vertical',
}: Omit<videoCardProps, 'id'>) {
  const flexDirection = orientation === 'vertical' ? 'flex-col' : 'flex-row';
  const imageSize = orientation === 'vertical' ? 'w-full h-40' : 'w-5/12 h-24';

  return (
    <Link
      href={`/${slug}/play`}
      className={`flex ${flexDirection} gap-2 overflow-hidden rounded-md p-2 transition-colors duration-300 hover:bg-accent`}
    >
      <div className={`${imageSize} relative`}>
        <Image
          // loader={ImageLoader}
          src={`/thumbnails/${thumbnail}`}
          priority={true}
          alt="Video thumbnail"
          fill={true}
          sizes="100%"
          className="rounded-lg object-cover"
        />
        <VideoCardDurationLabel duration={duration} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <ChartLine className="h-4 w-4 text-primary" />
            <span>{views} Visualizações</span>
          </div>
          <div className="flex items-center space-x-1">
            {likes !== undefined && (
              <div className="relative h-4 w-4">
                <ThumbsUp
                  className="h-[15px] w-[15px] text-primary"
                  fill="#e11d48"
                />
                <div className="absolute bottom-[.5px] left-[3px] top-[6px] w-[1px] bg-background" />
              </div>
            )}
            {likes !== undefined && <span>{likes} likes</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}
