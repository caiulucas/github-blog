import styled from 'styled-components';

import coverJpg from '../../assets/cover.jpg';

export const HeaderContainer = styled.header`
  background: url(${coverJpg}) no-repeat;
  background-size: 100% 18.5rem;
  min-height: 18.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
