import styled from 'styled-components';
import { COLORS } from '../../utils/constants/colorCodes';

const StyledTextInput = styled.input`
  display: flex;
  flex: 100%;
  flex-direction: row;
  padding: 13px 3px;
  color: ${COLORS.DARK_VIOLET};
  border: none;
  border-bottom: 1.5px solid ${COLORS.DARK_VIOLET};
  &::placeholder {
    color: ${COLORS.DARK_VIOLET};
  }
  &:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid ${COLORS.DARK_VIOLET};
  }
`;

export default StyledTextInput;
