import styled from 'styled-components';
import { theme } from 'styled-tools';

export default styled.div`
  margin-bottom: 2rem;
  font-family: Poppins, sans-serif;
  font-size: 5rem;
  font-weight: bold;
  color: ${theme('colors.primary')};
  height: 7rem;
  text-align: center;

  &:empty {
    display: block;
  }
`;
