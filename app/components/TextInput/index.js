/**
 *
 * TextInput.js
 *
 * A common TextInput, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onChange
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledTextInput from './StyledTextInput';

const TextInput = ({ onTextInputChange, placeholder = '', type = 'text' }) => (
  <StyledTextInput
    onChange={onTextInputChange}
    placeholder={placeholder}
    type={type}
  />
);

TextInput.propTypes = {
  onTextInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
