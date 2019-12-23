import styled from 'styled-components';
import { switchProp, theme, prop } from 'styled-tools';

export default styled.div`
  width: 100%;
  height: ${prop('height', 'auto')};
  background-color: ${switchProp('bgColor', {
    primary: theme('colors.backgroundPrimary'),
    secondary: theme('colors.backgroundSecondary'),
  })};
  display: inline-block;
  padding: 50px 0;
`;
