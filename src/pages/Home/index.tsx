import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends
} from 'react-icons/fa';

import { Post } from './components/Post';
import { Author, AuthorContent, AuthorInfo, Content, Posts } from './styles';

export function Home() {
  return (
    <>
      <Author>
        <img src="https://github.com/caiulucas.png" alt="Author" />

        <AuthorContent>
          <header>
            <h2>Caio Lucas</h2>
            <a href="">
              Github <FaExternalLinkAlt />
            </a>
          </header>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <AuthorInfo>
            <span>
              <FaGithub />
              caiulucas
            </span>
            <span>
              <FaBuilding />
              UFOP
            </span>
            <span>
              <FaUserFriends />
              32 seguidores
            </span>
          </AuthorInfo>
        </AuthorContent>
      </Author>

      <Content>
        <header>
          <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
        </header>

        <Posts>
          <Post />
          <Post />
          <Post />
        </Posts>
      </Content>
    </>
  );
}
