import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      flex: 0.9;
      font-size: 1.25rem;
    }

    time {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  p {
    margin-top: 1.25rem;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
