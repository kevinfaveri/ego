import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { lighten } from 'polished';
import GlobalStyles from './global-styles';
import Header from '../Header';
import Footer from '../Footer';
import { useDarkMode } from '../../hooks/useDarkMode';
import ThemeToggle from '../ThemeToggle';

const darkTheme = {
  colors: {
    primary: 'teal',
    textPrimary: '#d9d9d9',
    textSecondary: '#4e5049',
    backgroundPrimary: '#2B2C2C',
    backgroundSecondary: '#303131',
  },
};

const lightTheme = {
  colors: {
    primary: lighten(0.05, 'teal'),
    textPrimary: '#4e5049',
    textSecondary: '#d9d9d9',
    backgroundPrimary: '#fafafa',
    backgroundSecondary: '#ededed',
  },
};

const ThemeContainer = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const isLight = theme === 'light';
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

ThemeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ThemeContainer);
