export interface VideoDataProps {
  id: string;
  title: string;
  slug: string;
  thumbnail?: string;
  live: boolean;
  views: number;
  description: string;
  likes?: number;
  duration: number;
  orientation?: 'vertical' | 'horizontal';
}
