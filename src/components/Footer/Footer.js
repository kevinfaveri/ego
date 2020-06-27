import React, { memo } from 'react';
import Twemoji from 'twemoji';
import StyledContainer from './styles';
import { StyledFlex, StyledContent } from '../Layout/global-styles';
import { usePageContext } from '../../reducers/custom-page';

function Footer() {
  const [state] = usePageContext();
  const {
    pageContext: { footerMessage = '' },
  } = state;

  return (
    <StyledContainer id="credits">
      <StyledFlex style={{ margin: '40px auto' }}>
        <StyledContent
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: Twemoji.parse(footerMessage ?? ''),
          }}
        />
      </StyledFlex>
    </StyledContainer>
  );
}

export default memo(Footer);
