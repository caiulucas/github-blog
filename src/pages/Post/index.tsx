import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

import { Anchor } from '@/components/Anchor';
import { InfoLabel } from '@/components/InfoLabel';
import { formatDate } from '@/utils/formatter';

import { PostContainer, PostInfo } from './styles';

type Issue = {
  title: string;
  comments: number;
  username: string;
  updatedAt: Date;
  htmlUrl: string;
  body: string;
};

export function Post() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { url } = state as { url: string };

  const [issue, setIssue] = useState<Issue>();

  const fetchIssue = useCallback(async () => {
    const response = await axios.get(url);

    const data = {
      ...response.data,
      username: response.data.user.login,
      updatedAt: new Date(response.data.updated_at),
      htmlUrl: response.data.html_url
    };

    setIssue(data);
  }, [url]);

  useEffect(() => {
    fetchIssue();
  }, [fetchIssue]);

  return (
    <>
      {issue && (
        <PostContainer>
          <header>
            <Anchor href="#" onClick={() => navigate(-1)}>
              <FaChevronLeft /> Voltar
            </Anchor>
            <Anchor href={issue.htmlUrl}>
              Ver no Github <FaExternalLinkAlt />
            </Anchor>
          </header>

          <h1>{issue.title}</h1>

          <PostInfo>
            <InfoLabel icon={FaGithub} title={issue.username} />
            <InfoLabel
              icon={FaCalendarDay}
              title={formatDate(issue.updatedAt)}
            />
            <InfoLabel
              icon={FaComment}
              title={`${issue.comments} comentários`}
            />
          </PostInfo>
        </PostContainer>
      )}
    </>
  );
}
