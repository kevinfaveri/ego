import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { useBlinkingFavicon } from '../../hooks/useBlinkingFavicon';
import ThemeContainer from './ThemeContainer';

const Layout = ({ children }) => {
  useBlinkingFavicon();
  return <ThemeContainer>{children}</ThemeContainer>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Layout);
