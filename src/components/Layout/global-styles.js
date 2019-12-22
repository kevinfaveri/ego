import { createGlobalStyle } from 'styled-components';

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
`;
