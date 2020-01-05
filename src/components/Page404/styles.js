import styled, { createGlobalStyle } from 'styled-components';
import { theme, withProp } from 'styled-tools';
import { transparentize } from 'polished';

export default styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme('colors.primary')};
  text-align: center;
  > img {
    height: 25%;
    width: 25%;
    border-radius: 50%;
    @media (max-width: 576px) {
      height: 50%;
      width: 50%;
    }
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  > * {
    flex: 1;
  }
`;

export const GlobalStyles = createGlobalStyle`
  html {
    margin:0;
    padding:0;
    font-family: Lato, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height:100%;
    overflow: hidden;
    background-color: ${theme('colors.backgroundPrimary')};
  }
  
  body {
    font-family: Lato, sans-serif;
    margin:0;
    padding:0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100%;
    background-color: ${theme('colors.backgroundPrimary')};
  }

  .hover-link {
    text-decoration: none;
    border-radius: 5px;
    color: ${theme('colors.textPrimary')};
    background-color: ${theme('colors.primary')};

    :hover {
      background-color: ${withProp(
        ['theme.colors.primary'],
        transparentize(0.4)
      )};
    }
  }
`;
