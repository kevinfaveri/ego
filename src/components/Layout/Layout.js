/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { useBlinkingFavicon } from '../../hooks/useBlinkingFavicon';
import GlobalStyles from './global-styles';
import Header from '../Header';

const theme = {
  colors: {
    primary: 'teal',
    terciary: '#d9d9d9',
    textPrimary: '#d9d9d9',
    textSecondary: '#343531',
    backgroundPrimary: '#2B2C2C',
    backgroundSecondary: '#303131',
  },
};

const Layout = ({ children }) => {
  useBlinkingFavicon();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
