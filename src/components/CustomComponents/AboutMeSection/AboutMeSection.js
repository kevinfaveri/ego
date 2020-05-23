import React, { memo } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Hero from '../../Hero';
import {
  StyledColumn,
  StyledHeader,
  StyledContent,
  StyledFlex,
} from '../../Layout/global-styles';

function AboutMeSection({ id, html, title }) {
  return (
    <Hero bgColor="secondary" id={`about-me-${id}`} key={id}>
      <StyledFlex>
        <StyledColumn>
          <StyledHeader>{title}</StyledHeader>
        </StyledColumn>
        <StyledColumn>
          <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
        </StyledColumn>
      </StyledFlex>
    </Hero>
  );
}

AboutMeSection.defaultProps = {
  id: shortid.generate(),
};

AboutMeSection.propTypes = {
  id: PropTypes.string,
  html: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default memo(AboutMeSection);
