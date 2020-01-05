import React, { useEffect, memo } from 'react';

import StyledContainer, { GlobalStyles } from './styles';
import ErrorXp from '../../images/error_xp.gif';

function Page404() {
  return (
    <StyledContainer>
      <GlobalStyles />
      <img src={ErrorXp} alt="Windows XP Error" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        <a className="hover-link" href="/">
          Go Back Home
        </a>
      </p>
    </StyledContainer>
  );
}

export default memo(Page404);
