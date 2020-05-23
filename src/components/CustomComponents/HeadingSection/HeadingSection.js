import React, { memo } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Hero from '../../Hero';
import {
  StyledColumn,
  StyledHeader,
  StyledFlex,
} from '../../Layout/global-styles';

function HeadingSection({ id, children, height }) {
  return (
    <Hero
      bgColor="secondary"
      id={`heading-section-${id}`}
      key={id}
      height={height}
    >
      <StyledFlex>
        <StyledColumn>
          <StyledHeader>{children}</StyledHeader>
        </StyledColumn>
      </StyledFlex>
    </Hero>
  );
}

HeadingSection.defaultProps = {
  id: shortid.generate(),
  height: 'auto',
};

HeadingSection.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default memo(HeadingSection);
