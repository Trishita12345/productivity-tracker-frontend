import styled from 'styled-components';
import { COLORS } from '../../utils/constants/colorCodes';

const textColor = {
  primary: COLORS.DARK_VIOLET,
  secondary: COLORS.WHITE,
  tertiary: COLORS.DARK_GREY,
};

const StyledP = styled.p`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-size: 1em;
  line-height: 24px;
  color: ${({ variant }) => textColor[variant]};
  margin-bottom: 0.25em;
`;

export default StyledP;
