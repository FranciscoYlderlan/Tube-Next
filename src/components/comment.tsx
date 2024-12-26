import { Comment as CommentProps } from '@/data/comments';

export function Comment({ id, postId, body, likes, user }: CommentProps) {
  return (
    <div>
      <h4>@{user.username}</h4>
      <p>{body}</p>
      <span></span>
    </div>
  );
}
