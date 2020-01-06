import styled, { createGlobalStyle } from 'styled-components';
import { theme, withProp } from 'styled-tools';
import { transparentize } from 'polished';

export default createGlobalStyle`

  * {
    transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
  }

  html {
    margin:0;
    padding:0;
    font-family: Lato, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height:100%;
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

  main {
    margin: 0;
    padding: 0;
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

  .hover-img-link {
    opacity: 1;

    :hover {
      opacity: 0.6;
    }
  }

  img.emoji {
    height: 1em;
    width: 1em;
    vertical-align: -0.1em;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 4rem;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  color: ${theme('colors.primary')};
  text-align: center;
  margin: auto;
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  padding-left: 10%;
  padding-right: 10%;
`;

export const StyledFlexReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  padding-left: 10%;
  padding-right: 10%;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledDividerResponsive = styled.div`
  border: 1px solid teal;
  visibility: hidden;
  @media (max-width: 1024px) {
    width: 50%;
    visibility: visible;
  }
  align-self: center;
  margin: 20px 0;
`;

export const StyledDivider = styled.div`
  border: 1px solid teal;
  width: 50%;
  align-self: center;
  margin: 20px 0;
`;

export const StyledContent = styled.div`
  font-size: 1.3rem;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  color: ${theme('colors.textPrimary')};
  text-align: justify;
`;
