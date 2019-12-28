import React from 'react';
import Twemoji from 'twemoji';
import StyledContainer, { StyledContent } from './styles';
import { StyledColumn } from '../Layout/global-styles';

export default function Footer() {
  const footerMessage = `Made with ❤️ by Kevin.
  Built with
  <a
    class="hover-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.gatsbyjs.org"
  >
    Gatsby
  </a>.
  Source code is available <a
    class="hover-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/kevinfaguiar/ego"
  >
    here
  </a>.`;
  return (
    <StyledContainer>
      <StyledColumn>
        <StyledContent
          dangerouslySetInnerHTML={{
            __html: Twemoji.parse(footerMessage),
          }}
        />
      </StyledColumn>
    </StyledContainer>
  );
}
