import { css } from 'styled-components';

const textColor = {
  primary: '#fffaff',
  secondary: '#87797F',
};
const bgColor = {
  primary: '#0f1322',
  secondary: '#F5F5F5',
};
const bgColorActive = {
  primary: '#4e63b2',
  secondary: '#C6C6C6',
};

const buttonStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 19px;
  color: ${({ variant }) => textColor[variant]};

  background: ${({ variant }) => bgColor[variant]};
  border-radius: 10px;

  &:active {
    background: ${({ variant }) => bgColorActive[variant]};
    cursor: pointer;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default buttonStyles;
