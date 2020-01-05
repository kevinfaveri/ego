import styled, { css } from 'styled-components';
import { theme, ifProp, withProp } from 'styled-tools';
import { darken } from 'polished';

export default styled.header`
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 80px;

  background-color: ${ifProp(
    'hasScrolled',
    withProp(['theme.colors.backgroundPrimary'], darken(0.1)),
    theme('colors.backgroundPrimary')
  )};

  ${ifProp(
    'hasScrolled',
    css`
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    `,
    ''
  )}
`;

export const StyledSiteSection = styled.a`
  cursor: pointer;
  display: inline-block;
  position: absolute;
  margin: 20px 0;
  padding-left: 10px;
  border-radius: 3px;
  font-size: 30px;
  font-weight: bold;
  color: ${theme('colors.primary')};
  text-decoration: none;
  ::before {
    content: '|';
    padding-right: 20px;
  }

  :hover {
    color: ${withProp(['theme.colors.primary'], darken(0.1))};
  }
`;
