/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

function Button({ onButtonClick, children, variant = 'secondary' }) {
  return (
    <Wrapper>
      <StyledButton onClick={onButtonClick} variant={variant}>
        {Children.toArray(children)}
      </StyledButton>
    </Wrapper>
  );
}

Button.propTypes = {
  onButtonClick: PropTypes.func,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
