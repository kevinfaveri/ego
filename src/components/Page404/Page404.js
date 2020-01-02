import React from 'react';

import StyledContainer from './styles';

export default function Page404() {
  return (
    <StyledContainer>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        <a href="/">Go Back Home</a>
      </p>
    </StyledContainer>
  );
}
