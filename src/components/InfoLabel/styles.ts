import styled from 'styled-components';

export const InfoLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.6;

  svg {
    height: 1.125rem;
    width: 1.125rem;
    color: ${({ theme }) => theme['base-label']};
  }
`;
