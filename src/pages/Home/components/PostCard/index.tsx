import { formatDate } from '@/utils/formatter';

import { PostCardContainer } from './styles';

interface PostCardProps {
  data: {
    id: string;
    title: string;
    url: string;
    body: string;
    updatedAt: Date;
  };
}

export function PostCard({ data }: PostCardProps) {
  return (
    <PostCardContainer to={`/post/${data.id}`} state={{ url: data.url }}>
      <div>
        <h1>{data.title}</h1>
        <time dateTime={data.updatedAt.toLocaleString()}>
          {formatDate(data.updatedAt)}
        </time>
      </div>

      <p>{data.body}</p>
    </PostCardContainer>
  );
}
