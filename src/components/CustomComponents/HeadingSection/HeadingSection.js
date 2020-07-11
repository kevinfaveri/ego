import React, { memo } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Hero from '../../Hero';
import {
  StyledColumn,
  StyledHeader,
  StyledFlex,
} from '../../Layout/global-styles';

export const HeadingSectionBlock = {
  label: 'Heading Section',
  key: shortid.generate(),
  defaultItem: {
    text: 'A MESSAGE HERE',
    bgBrightness: 'Lighten',
    height: 100,
  },
  fields: [
    { name: 'text', label: 'Text', component: 'text' },
    {
      name: 'bgBrightness',
      label: 'Background Color Brightness',
      component: 'select',
      options: ['Lighten', 'Darken'],
    },

    { name: 'height', label: 'Height', component: 'number' },
  ],
};

function HeadingSection({ id, bgBrightness, text, height }) {
  return (
    <Hero
      bgBrightness={bgBrightness}
      id={`heading-section-${id}`}
      key={id}
      height={height}
    >
      <StyledFlex>
        <StyledColumn>
          <StyledHeader>{text}</StyledHeader>
        </StyledColumn>
      </StyledFlex>
    </Hero>
  );
}

HeadingSection.defaultProps = {
  id: shortid.generate(),
  height: 100,
};

HeadingSection.propTypes = {
  id: PropTypes.string,
  bgBrightness: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default memo(HeadingSection);
