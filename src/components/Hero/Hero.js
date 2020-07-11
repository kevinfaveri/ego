import React, { memo } from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styles';

function Hero({ id, children, height, bgBrightness, hasPadding }) {
  return (
    <StyledContainer
      id={id}
      // eslint-disable-next-line
      height={isNaN(height) ? height : `${height}px`}
      bgColor={bgBrightness === 'Lighten' ? 'secondary' : 'primary'}
      hasPadding={hasPadding}
    >
      {children}
    </StyledContainer>
  );
}

Hero.defaultProps = {
  id: undefined,
  height: 'auto',
  bgBrightness: 'Lighten',
  hasPadding: false,
};

Hero.propTypes = {
  id: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
  bgBrightness: PropTypes.oneOf(['Lighten', 'Darken']),
  hasPadding: PropTypes.bool,
};

export default memo(Hero);
