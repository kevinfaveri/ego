import styled from 'styled-components';
import { switchProp, theme, prop, ifProp } from 'styled-tools';

export default styled.div`
  width: 100%;
  padding: ${ifProp('hasPadding', '80px 0 10px', '10px 0')};
  height: ${prop('height', 'auto')};
  background-color: ${switchProp('bgColor', {
    primary: theme('colors.backgroundPrimary'),
    secondary: theme('colors.backgroundSecondary'),
  })};
  display: inline-block;
`;
