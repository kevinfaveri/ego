import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { type, type as loopType } from '@camwiegert/typical';

import Container from './styles';

function AnimatedTyping({ steps, loop }) {
  const compRef = useRef(null);

  useEffect(() => {
    if (loop) type(compRef.current, ...steps, loopType);
    else type(compRef.current, ...steps);
  }, []);

  return <Container ref={compRef} />;
}

AnimatedTyping.defaultProps = {
  loop: false,
};

AnimatedTyping.propTypes = {
  steps: PropTypes.array.isRequired,
  loop: PropTypes.bool,
};

export default AnimatedTyping;
