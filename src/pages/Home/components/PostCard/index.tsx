import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

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
  function formatDate() {
    return formatDistance(data.updatedAt, new Date(), {
      addSuffix: true,
      locale: ptBR
    });
  }

  return (
    <PostCardContainer to={`/post/${data.id}`}>
      <div>
        <h1>{data.title}</h1>
        <time dateTime={data.updatedAt.toLocaleString()}>{formatDate()}</time>
      </div>

      <p>{data.body}</p>
    </PostCardContainer>
  );
}
