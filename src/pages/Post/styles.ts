import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }
`;

export const PostInfo = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
`;
