import { Skeleton } from './ui/skeleton';

export type VideoCardSkeletonProps = {
  orientation?: 'horizontal' | 'vertical';
};

export default function VideoCardSkeleton(props: VideoCardSkeletonProps) {
  const { orientation = 'vertical' } = props;
  return orientation === 'vertical' ? (
    <div className="rounded-lg">
      <Skeleton className="h-40 w-full rounded-lg" />
      <div className="mt-3">
        <Skeleton className="mb-3 h-5 w-3/4 rounded" />
        <div className="flex justify-between">
          <Skeleton className="mb-2 h-4 w-2/4 rounded" />
          <Skeleton className="mb-2 h-4 w-1/4 rounded" />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex space-x-2">
      <Skeleton className="h-24 w-5/12 rounded-md" />
      <div className="flex-1 items-center space-y-2 py-1">
        <Skeleton className="block h-4 w-3/4 rounded" />
        <Skeleton className="block h-3 w-1/2 rounded" />
      </div>
    </div>
  );
}
