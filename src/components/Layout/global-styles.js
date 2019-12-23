import styled, { createGlobalStyle } from 'styled-components';
import { theme, withProp } from 'styled-tools';
import { transparentize } from 'polished';

export default createGlobalStyle`
  html {
    font-family: Lato, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    font-family: Lato, sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    margin: 0;
    padding: 0;
  }

  .hover-link {
    text-decoration: none;
    border-radius: 5px;
    color: inherit;
    background-color: ${theme('colors.primary')};

    :hover {
      background-color: ${withProp(
        ['theme.colors.primary'],
        transparentize(0.4)
      )};
    }
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
