import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styles';

function Hero({ id, children, height, bgColor }) {
  return (
    <StyledContainer id={id} height={height} bgColor={bgColor}>
      {children}
    </StyledContainer>
  );
}

Hero.defaultProps = {
  id: undefined,
  height: 'auto',
  bgColor: 'primary',
};

Hero.propTypes = {
  id: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.oneOf(['primary', 'secondary']),
};

export default Hero;
