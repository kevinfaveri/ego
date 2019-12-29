import styled from 'styled-components';
import { theme } from 'styled-tools';

export default styled.div`
  font-family: Poppins, sans-serif;
  font-size: 5rem;
  height: 110px;
  @media (max-width: 1024px) {
    font-size: 2.5rem;
    height: 60px;
  }
  font-weight: bold;
  color: ${theme('colors.primary')};
  text-align: center;

  &:empty {
    display: block;
  }
`;
