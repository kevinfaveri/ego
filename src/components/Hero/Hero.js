import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styles';

function Hero({ id, children, bgColor }) {
  return (
    <StyledContainer id={id} bgColor={bgColor}>
      {children}
    </StyledContainer>
  );
}

Hero.defaultProps = {
  id: undefined,
  bgColor: 'primary',
};

Hero.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.oneOf(['primary', 'secondary']),
};

export default Hero;
