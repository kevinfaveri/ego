import React from 'react';
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
  style: {},
  imgStyle: {},
};

LazyImage.propTypes = {
  imageFluid: PropTypes.object.isRequired,
  imageFixed: PropTypes.object.isRequired,
  style: PropTypes.object,
  imgStyle: PropTypes.object,
};

export default LazyImage;
