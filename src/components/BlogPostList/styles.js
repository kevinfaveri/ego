import styled, { css } from 'styled-components';
import { theme, ifProp, withProp } from 'styled-tools';
import { darken, transparentize } from 'polished';
import { Link } from 'gatsby';

export default styled.div`
  padding: 80px 0 50px;
`;

export const StyledPost = styled.div`
  flex: 1;
  min-height: 100px;
  padding: 30px 0 50px;
  width: 100%;
  ${ifProp(
    'isOdd',
    css`
      background-color: ${withProp(
        ['theme.colors.backgroundPrimary'],
        darken(0.05)
      )};
    `,
    css`
      background-color: ${withProp(
        ['theme.colors.backgroundSecondary'],
        darken(0.05)
      )};
    `
  )}
`;

export const StyledContent = styled.div`
  text-align: justify;
  color: ${theme('colors.textPrimary')};
  padding: 0 20%;
  font-size: 21px;
  @media (max-width: 576px) {
    padding: 0 5%;
    font-size: 18px;
  }
`;

export const StyledAnchor = styled.a`
  display: inline-block;
  padding: 10px;
  margin: 10px 20%;
  @media (max-width: 576px) {
    margin-left: 5%;
  }
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  color: ${theme('colors.textPrimary')};
  background-color: ${theme('colors.primary')};

  :nth-child(1) {
    margin: 20px 0;
    margin-left: 20%;
    margin-right: 20px;
    @media (max-width: 576px) {
      margin-left: 5%;
    }
  }

  :hover {
    background-color: ${withProp(
      ['theme.colors.primary'],
      transparentize(0.4)
    )};
  }
`;
