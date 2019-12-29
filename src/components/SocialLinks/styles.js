import styled from 'styled-components';
import { theme } from 'styled-tools';

export default styled.div`
  font-size: 2rem;
  color: ${theme('colors.textPrimary')};
  text-align: center;

  a {
    margin: 0 10px;
    color: ${theme('colors.primary')};
  }
`;
