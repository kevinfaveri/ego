import React, { memo } from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styles';

function Hero({ id, children, height, bgColor, hasPadding }) {
  return (
    <StyledContainer
      id={id}
      height={height}
      bgColor={bgColor}
      hasPadding={hasPadding}
    >
      {children}
    </StyledContainer>
  );
}

Hero.defaultProps = {
  id: undefined,
  height: 'auto',
  bgColor: 'primary',
  hasPadding: false,
};

Hero.propTypes = {
  id: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.oneOf(['primary', 'secondary']),
  hasPadding: PropTypes.bool,
};

export default memo(Hero);
