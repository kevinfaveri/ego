import React, { memo } from 'react';
import Twemoji from 'twemoji';
import StyledContainer from './styles';
import { StyledFlex, StyledContent } from '../Layout/global-styles';

function Footer() {
  return (
    <StyledContainer id="credits">
      <StyledFlex style={{ margin: 'auto', marginTop: '80px' }}>
        <StyledContent
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: Twemoji.parse('Made with ❤️ by Kevin.'),
          }}
        />
      </StyledFlex>

      <StyledFlex style={{ margin: 'auto', marginTop: '80px' }}>
        <StyledContent
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: `
            Built with
            <a
              class="hover-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org"
            >
              Gatsby
            </a>.
            `,
          }}
        />
      </StyledFlex>

      <StyledFlex style={{ margin: 'auto', marginTop: '80px' }}>
        <StyledContent
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: `
            Source code is available <a
              class="hover-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kevinfaguiar/ego"
            >
              here
            </a>.`,
          }}
        />
      </StyledFlex>
    </StyledContainer>
  );
}

export default memo(Footer);
