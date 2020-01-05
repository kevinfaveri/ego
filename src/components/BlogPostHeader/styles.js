import styled from 'styled-components';
import { theme } from 'styled-tools';

export default styled.div`
  padding: 0 20%;
`;

export const StyledTitle = styled.h1`
  margin: 20px 0;
  font-weight: bold;
  font-size: 40px;
  color: ${theme('colors.primary')};
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
