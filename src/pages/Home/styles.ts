import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const Author = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;
export const AuthorContent = styled.div`
  margin-left: 2rem;

  header {
    display: flex;
    justify-content: space-between;
  }

  p {
    margin-top: 0.5rem;
    line-height: 1.6;
  }

  a {
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-left: 0.5rem;
      width: 0.75rem;
    }
  }
`;

export const AuthorInfo = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.6;

    svg {
      height: 1.125rem;
      width: 1.125rem;
      color: ${({ theme }) => theme['base-label']};
    }
  }
`;

export const Content = styled.main`
  margin-top: 4.5rem;

  header {
    div {
      display: flex;
      justify-content: space-between;

      h2 {
        font-size: 1.125rem;
        color: ${({ theme }) => theme['base-subtitle']};
      }

      span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme['base-span']};
      }
    }
  }

  input {
    width: 100%;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;

    background-color: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};

    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`;

export const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  margin-top: 3rem;
`;
