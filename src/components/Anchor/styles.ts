import styled from 'styled-components';

export const AnchorContainer = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 0.75rem;
  }
`;

export const ButtonAnchorContainer = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 0.75rem;
  }
`;
