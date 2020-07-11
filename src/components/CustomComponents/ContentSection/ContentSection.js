import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Hero from '../../Hero';
import {
  StyledColumn,
  StyledHeader,
  StyledContent,
  StyledFlex,
} from '../../Layout/global-styles';
import useWindowSize from '../../../hooks/useWindowSize';

export const ContentSectionBlock = {
  label: 'Content Section',
  key: shortid.generate(),
  defaultItem: {
    title: 'Title here.',
    html: 'Edit your content here.',
    bgBrightness: 'Lighten',
    columnOrder: 'Title First',
  },
  fields: [
    { name: 'title', label: 'Title', component: 'text' },
    {
      name: 'bgBrightness',
      label: 'Background Color Brightness',
      component: 'select',
      options: ['Lighten', 'Darken'],
    },
    {
      name: 'columnOrder',
      label: 'Column Order',
      component: 'select',
      options: ['Title First', 'Content First'],
    },
    { name: 'html', label: 'Content', component: 'html' },
  ],
};

function ContentSection({
  id,
  html,
  title,
  bgBrightness,
  columnOrder: columnOrderString,
}) {
  const { width } = useWindowSize();
  const isMobile = useMemo(() => width <= 576, [width]);

  const getColumn = useCallback(
    columnNumber => {
      const columnOrder = isMobile ? null : columnOrderString;
      switch (columnOrder) {
        case 'Title First':
          if (columnNumber === 1) return <StyledHeader>{title}</StyledHeader>;
          return <StyledContent dangerouslySetInnerHTML={{ __html: html }} />;
        case 'Content First':
          if (columnNumber === 1)
            return <StyledContent dangerouslySetInnerHTML={{ __html: html }} />;
          return <StyledHeader>{title}</StyledHeader>;
        default:
          if (columnNumber === 1) return <StyledHeader>{title}</StyledHeader>;
          return <StyledContent dangerouslySetInnerHTML={{ __html: html }} />;
      }
    },
    [html, title, columnOrderString, isMobile]
  );

  return (
    <Hero bgBrightness={bgBrightness} id={`content-section-${id}`} key={id}>
      <StyledFlex>
        <StyledColumn>{getColumn(1)}</StyledColumn>
        <StyledColumn>{getColumn(2)}</StyledColumn>
      </StyledFlex>
    </Hero>
  );
}

ContentSection.defaultProps = {
  id: shortid.generate(),
};

ContentSection.propTypes = {
  id: PropTypes.string,
  bgBrightness: PropTypes.string.isRequired,
  columnOrder: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default memo(ContentSection);
