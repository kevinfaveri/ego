import React, { memo } from 'react';
import useWindowScrollPosition from '@rehooks/window-scroll-position';
import BurgerMenu from '../BurgerMenu';
import StyledContainer from './styles';

function Header() {
  const position = useWindowScrollPosition();
  const hasScrolled = position.y > 20;
  return (
    <StyledContainer hasScrolled={hasScrolled}>
      <BurgerMenu />
    </StyledContainer>
  );
}

export default memo(Header);
