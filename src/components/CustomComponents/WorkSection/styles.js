import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledWorkPeriod = styled.h3`
  font-size: 2.5rem;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  color: ${theme('colors.textPrimary')};
  text-align: center;
  margin: 15px auto;
`;
