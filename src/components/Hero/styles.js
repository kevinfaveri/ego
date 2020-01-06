import styled from 'styled-components';
import { switchProp, prop, ifProp, withProp } from 'styled-tools';
import { darken } from 'polished';

export default styled.div`
  width: 100%;
  padding: ${ifProp('hasPadding', '80px 0 10px', '10px 0')};
  height: ${prop('height', 'auto')};
  background-color: ${switchProp('bgColor', {
    primary: withProp(['theme.colors.backgroundPrimary'], darken(0.05)),
    secondary: withProp(['theme.colors.backgroundSecondary'], darken(0.05)),
  })};
  display: inline-block;
`;
