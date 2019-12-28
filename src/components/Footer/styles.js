import styled from 'styled-components';
import { theme } from 'styled-tools';

export default styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  background-color: ${theme('colors.backgroundSecondary')};
`;

export const StyledContent = styled.span`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  color: ${theme('colors.textPrimary')};
  text-align: center;
`;
