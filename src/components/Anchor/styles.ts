import styled from 'styled-components';

export const AnchorContainer = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 0.75rem;
  }
`;
