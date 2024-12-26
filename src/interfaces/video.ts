import { CommentsResponse } from './comment';
import { VideoDataProps } from './videos';

export interface VideoDetailsProps {
  video: VideoDataProps;
  commentsResponse: CommentsResponse;
  relatedVideos: VideoDataProps[];
}
