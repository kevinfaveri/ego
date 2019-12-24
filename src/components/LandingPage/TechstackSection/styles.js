import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledHeader = styled.h1`
  font-size: 4rem;
  color: ${theme('colors.primary')};
  text-align: center;
`;

export const StyledContent = styled.div`
  font-size: 1.3rem;
  color: ${theme('colors.textPrimary')};
  text-align: center;
`;
