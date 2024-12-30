import { MessageCircle, ThumbsUp, UserRound } from 'lucide-react';

import { Comment as CommentProps } from '@/interfaces/comment';

import { Button } from './ui/button';

export function Comment({ body, likes, user }: CommentProps) {
  return (
    <div className="mb-6 flex flex-col">
      <div className="flex items-start gap-4">
        <span className="rounded-full bg-muted-foreground">
          <UserRound className="h-12 w-12 text-muted" />
        </span>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-primary">@{user.username}</h4>
          <p>{body}</p>
          <div className="flex gap-2">
            <Button
              variant={'ghost'}
              className="flex items-center justify-center"
            >
              <MessageCircle />
              Responder comentário
            </Button>
            <Button
              variant={'ghost'}
              className="flex items-center justify-center"
            >
              <ThumbsUp className="text-primary" />
              {likes}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
