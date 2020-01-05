import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { useBlinkingFavicon } from '../../hooks/useBlinkingFavicon';
import ThemeContainerNoNav from './ThemeContainerNoNav';

const LayoutNoNavigation = ({ children }) => {
  useBlinkingFavicon();
  return <ThemeContainerNoNav>{children}</ThemeContainerNoNav>;
};

LayoutNoNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(LayoutNoNavigation);
