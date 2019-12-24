import styled from 'styled-components';
import { theme, prop } from 'styled-tools';

export const StyledMessage = styled.div`
  font-size: 2.5rem;
  margin-top: 1.5rem;
  color: ${theme('colors.textPrimary')};
  text-align: center;

  > img.emoji {
    height: 1em;
    width: 1em;
    vertical-align: -0.1em;
  }
`;

export const StyledDivider = styled.div`
  transition: ease-in-out 1s;
  width: ${prop('dividerWidth', 0)};
  border-bottom: 5px solid ${theme('colors.primary')};
`;
