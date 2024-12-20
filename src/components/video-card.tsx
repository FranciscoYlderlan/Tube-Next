import { ChartLine, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

import thumbnailPlaceholder from '../../public/thumbnail-placeholder.svg';
import { VideoCardDurationLabel } from './video-card-duration-label';

export type videoCardProps = {
  id: string;
  title: string;
  thumbnail?: string;
  views: number;
  likes?: number;
  duration: number;
  orientation?: 'vertical' | 'horizontal';
};

export function VideoCard({
  title,
  thumbnail = thumbnailPlaceholder,
  views,
  likes,
  duration,
  orientation = 'vertical',
}: Omit<videoCardProps, 'id'>) {
  const flexDirection = orientation === 'vertical' ? 'flex-col' : 'flex-row';
  const imageSize = orientation === 'vertical' ? 'w-full h-40' : 'w-5/12 h-24';

  return (
    <div className={`flex ${flexDirection} gap-2 overflow-hidden`}>
      <div className={`${imageSize} relative -z-50`}>
        <Image
          src={thumbnail}
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
            <ChartLine className="h-4 w-4" />
            <span>{views} Visualizações</span>
          </div>
          <div className="flex items-center space-x-1">
            {likes !== undefined && <ThumbsUp className="h-4 w-4" />}
            {likes !== undefined && <span>{likes} likes</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
