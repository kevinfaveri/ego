import styled from 'styled-components';
import { switchProp, theme } from 'styled-tools';

export default styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${switchProp('bgColor', {
    primary: theme('colors.backgroundPrimary'),
    secondary: theme('colors.backgroundSecondary'),
  })};
  display: inline-block;
`;
