'use client';

import { useState } from 'react';

type durationLabelProps = {
  duration: number;
};

export function VideoCardDurationLabel({ duration }: durationLabelProps) {
  const [videoDuration] = useState<string>(handleDurationFormat());
  function handleDurationFormat() {
    const pad = (num: number) => String(num).padStart(2, '0');

    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    return hours > 0
      ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
      : `${pad(minutes)}:${pad(seconds)}`;
  }
  return (
    <span className="absolute bottom-1 right-1 rounded bg-black bg-opacity-85 p-1 text-xs leading-none text-rose-50">
      {videoDuration}
    </span>
  );
}
