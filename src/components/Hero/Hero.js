import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styles';

function Hero({ children, bgColor }) {
  return <StyledContainer bgColor={bgColor}>{children}</StyledContainer>;
}

Hero.defaultProps = {
  bgColor: 'primary',
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.oneOf(['primary', 'secondary']),
};

export default Hero;
