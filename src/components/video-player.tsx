import {
  Eye,
  Pin,
  Play,
  Repeat,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';
import Image from 'next/image';

import { VideoDataProps } from '@/interfaces/videos';

import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { VideoDescription } from './video-description';

export type VideoPlayerProps = {
  videoDetails: VideoDataProps;
};

export function VideoPlayer({ videoDetails }: VideoPlayerProps) {
  return (
    <>
      <div className="relative aspect-video bg-foreground">
        <span className="absolute left-1/2 top-1/2 z-20 aspect-video -translate-x-1/2 -translate-y-1/2 transform rounded-2xl border-muted bg-muted px-8 py-2">
          <Play className="h-16 w-16 text-primary" fill="#E11D48" />
        </span>
        <span className="before:absolute before:z-10 before:h-full before:w-full before:bg-black/40 before:content-['']" />
        <Image
          src={`/thumbnails/${videoDetails.thumbnail}`}
          priority={true}
          alt="Video Image"
          fill={true}
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <h3 className="my-4 text-xl font-semibold text-foreground">
          {videoDetails.title}
        </h3>
        <span className="flex items-center justify-center gap-1 text-muted-foreground">
          <Eye />
          <span>{videoDetails.views} Visualizações</span>
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center justify-center rounded-full bg-muted">
            <Button
              variant={'secondary'}
              className="flex items-center justify-center gap-2 rounded-full rounded-br-none rounded-tr-none"
            >
              <ThumbsUp className="text-primary" />
              {videoDetails.likes} Gostei
            </Button>

            <Separator orientation="vertical" className="h-6 bg-zinc-500" />
            <Button
              variant={'secondary'}
              className="flex items-center justify-center gap-2 rounded-full rounded-bl-none rounded-tl-none"
            >
              <ThumbsDown className="text-primary" /> Não gostei
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant={'secondary'} className="rounded-full">
            <Pin /> Salvar
          </Button>

          <Button variant={'secondary'} className="rounded-full">
            <Repeat /> Repostar
          </Button>
          <Button variant={'secondary'} className="rounded-full">
            <Share2 />
            Compartilhar
          </Button>

          <Button variant={'secondary'} className="rounded-full">
            &#x2022; &#x2022; &#x2022;
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <VideoDescription description={videoDetails.description} />
    </>
  );
}
