import styled from 'styled-components';
import { COLORS } from '../../utils/constants/colorCodes';

const textColor = {
  primary: COLORS.WHITE,
  secondary: COLORS.DARK_GREY,
};
const bgColor = {
  primary: COLORS.DARK_VIOLET,
  secondary: COLORS.LIGHT_GREY,
};
const bgColorActive = {
  primary: COLORS.BLUE,
  secondary: COLORS.GREY,
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 19px;
  color: ${({ variant }) => textColor[variant]};

  background: ${({ variant }) => bgColor[variant]};
  border: ${({ variant }) => bgColor[variant]};
  border-radius: 10px;
  filter: drop-shadow(6px 6px 6px rgba(0, 0, 0, 0.25));

  &:active {
    background: ${({ variant }) => bgColorActive[variant]};
    cursor: pointer;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default StyledButton;
