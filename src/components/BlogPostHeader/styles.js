import styled from 'styled-components';
import { theme, withProp } from 'styled-tools';
import { darken } from 'polished';

export default styled.div`
  padding: 0 20%;
  @media (max-width: 576px) {
    padding: 0 5%;
  }
`;

export const StyledTitle = styled.h1`
  margin: 20px 0;
  font-weight: bold;
  font-size: 40px;
  @media (max-width: 576px) {
    font-size: 30px;
  }
  color: ${theme('colors.primary')};
`;

export const StyledTitleAnchor = styled.a`
  cursor: pointer;
  display: block;
  margin: 20px 0;
  font-weight: bold;
  font-size: 40px;
  @media (max-width: 576px) {
    font-size: 30px;
  }
  color: ${theme('colors.primary')};
  text-decoration: none;

  :hover {
    color: ${withProp(['theme.colors.primary'], darken(0.1))};
  }
`;

export const StyledAuthorAvatar = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const StyledPostInfo = styled.div`
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
`;

export const StyledAuthorName = styled.div`
  font-weight: bold;
  color: ${theme('colors.textPrimary')};
  font-size: 16px;
`;

export const StyledPostData = styled.div`
  color: ${theme('colors.textPrimary')};
  font-size: 16px;
`;
