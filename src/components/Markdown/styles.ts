import styled from 'styled-components';

export const Content = styled.div`
  padding: 2.5rem 2rem;
`;

export const Paragraph = styled.p`
  line-height: 1.6;
`;

export const Anchor = styled.a`
  color: ${({ theme }) => theme.blue};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const H1 = styled.h1`
  margin-top: 2rem;
`;

export const H2 = styled.h2`
  margin-top: 1.5rem;
`;

export const H3 = styled.h3`
  margin-top: 1rem;
`;
