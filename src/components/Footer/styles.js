import styled from 'styled-components';
import { theme } from 'styled-tools';

export default styled.footer`
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  width: 100%;
  height: 10vh;
  background-color: ${theme('colors.backgroundSecondary')};
`;
