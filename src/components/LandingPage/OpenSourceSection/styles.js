import styled from 'styled-components';
import { theme } from 'styled-tools';
import { StyledColumn } from '../../Layout/global-styles';

export const StyledHeader = styled.h1`
  font-size: 4rem;
  color: ${theme('colors.primary')};
  text-align: center;
  margin: auto;
`;

export const StyledProjectColumn = styled(StyledColumn)`
  justify-content: flex-start;
`;

export const StyledProjectTitle = styled.h3`
  margin: 30px;
  font-size: 2.5rem;
  color: ${theme('colors.textPrimary')};
  text-align: center;
  margin: auto;
`;

export const StyledContent = styled.div`
  font-size: 1.3rem;
  color: ${theme('colors.textPrimary')};
  text-align: justify;
`;
