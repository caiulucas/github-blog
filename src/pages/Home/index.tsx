import { useEffect, useState } from 'react';
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends
} from 'react-icons/fa';

import { api } from '@/libs/api';

import { PostCard } from './components/PostCard';
import { Author, AuthorContent, AuthorInfo, Content, Posts } from './styles';

type User = {
  avatarUrl: string;
  bio: string;
  name: string;
  followers: number;
  login: string;
  location: string;
  url: string;
};

type Issue = {
  id: string;
  title: string;
  url: string;
  body: string;
  updatedAt: Date;
};

const username = 'caiulucas';
const repository = 'github-blog';

export function Home() {
  const [user, setUser] = useState<User>();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [searchText, setSearchText] = useState('');

  async function fetchUser() {
    const response = await api.get(`/users/${username}`);
    const data = response.data;

    setUser({
      ...data,
      avatarUrl: data.avatar_url,
      url: data.html_url
    });
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await api.get('/search/issues', {
      params: {
        q: `${searchText}repo:${username}/${repository}`
      }
    });

    const data = response.data.items.map((issue: any) => ({
      ...issue,
      updatedAt: new Date(issue.updated_at)
    }));

    setIssues(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Author>
        <img src={user?.avatarUrl} alt="Author" />

        <AuthorContent>
          <header>
            <h2>{user?.name}</h2>
            <a href={user?.url} target="_blank" rel="noreferrer">
              Github <FaExternalLinkAlt />
            </a>
          </header>
          <p>{user?.bio}</p>
          <AuthorInfo>
            <span>
              <FaGithub />
              {user?.login}
            </span>
            <span>
              <FaBuilding />
              {user?.location}
            </span>
            <span>
              <FaUserFriends />
              {user?.followers} seguidores
            </span>
          </AuthorInfo>
        </AuthorContent>
      </Author>

      <Content>
        <header>
          <div>
            <h2>Publicações</h2>
            <span>{issues.length} publicações</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar conteúdo"
              value={searchText}
              onChange={(e) => setSearchText(e.currentTarget.value)}
            />
          </form>
        </header>

        <Posts>
          {issues.map((issue) => (
            <PostCard key={issue.id} data={issue} />
          ))}
        </Posts>
      </Content>
    </>
  );
}
