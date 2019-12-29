import React, { memo } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';
import StyledContainer from './styles';

function ThemeToggle({ theme, toggleTheme }) {
  const isLight = theme === 'light';

  return (
    <StyledContainer onClick={toggleTheme}>
      {isLight ? <FaSun /> : <FaMoon />}
    </StyledContainer>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default memo(ThemeToggle);
