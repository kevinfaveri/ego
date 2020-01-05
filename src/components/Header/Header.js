import React, { memo } from 'react';
import useWindowScrollPosition from '@rehooks/window-scroll-position';
import { Location } from '@reach/router';
import BurgerMenu from '../BurgerMenu';
import StyledContainer, { StyledSiteSection } from './styles';
import Logo from '../Logo';

function Header() {
  const position = useWindowScrollPosition();
  const hasScrolled = position.y > 20;
  return (
    <StyledContainer hasScrolled={hasScrolled}>
      <Logo />
      <Location>
        {({ location }) =>
          location.pathname.includes('blog') && (
            <StyledSiteSection href="/blog">Blog</StyledSiteSection>
          )
        }
      </Location>

      <BurgerMenu />
    </StyledContainer>
  );
}

export default memo(Header);
