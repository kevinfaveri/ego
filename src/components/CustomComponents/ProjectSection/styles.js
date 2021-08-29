import styled from 'styled-components';
import { theme } from 'styled-tools';
import { StyledColumn } from '../../Layout/global-styles';

export const StyledProjectColumn = styled(StyledColumn)`
  justify-content: flex-start;
  margin: 0 30px;
  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const StyledProjectTitle = styled.h3`
  margin: 30px;
  font-size: 1.5rem;
  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
  color: ${theme('colors.textPrimary')};
  text-align: center;
  margin: auto;
`;
