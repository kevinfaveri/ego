import React, { memo } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const LazyImage = ({ imageFluid, imageFixed, style, imgStyle }) => {
  if (imageFluid)
    return <Img fluid={imageFluid} style={style} imgStyle={imgStyle} />;
  if (imageFixed)
    return <Img fixed={imageFixed} style={style} imgStyle={imgStyle} />;
  return <span>Image Not Supplied</span>;
};

LazyImage.defaultProps = {
  imageFluid: undefined,
  imageFixed: undefined,
  style: {},
  imgStyle: {},
};

LazyImage.propTypes = {
  imageFluid: PropTypes.object,
  imageFixed: PropTypes.object,
  style: PropTypes.object,
  imgStyle: PropTypes.object,
};

export default memo(LazyImage);
