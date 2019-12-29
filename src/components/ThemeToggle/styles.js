import styled from 'styled-components';
import { theme, withProp } from 'styled-tools';
import { darken } from 'polished';

export default styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  opacity: 1;
  border-radius: 32px;
  height: 64px;
  width: 64px;
  background-color: ${withProp(
    ['theme.colors.backgroundPrimary'],
    darken(0.15)
  )};
  position: fixed;
  bottom: 15px;
  right: 15px;
  font-size: 2rem;
  color: ${theme('colors.primary')};
  text-align: center;

  :hover {
    opacity: 0.6;
  }

  > svg {
    margin-top: 3px;
  }
`;
