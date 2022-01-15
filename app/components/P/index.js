import React from 'react';
import PropTypes from 'prop-types';

import StyledP from './StyledP';
import { VARIANTS } from '../../utils/constants/variants';

const P = ({ label, variant = VARIANTS.PRIMARY }) => (
  <StyledP variant={variant}>{label}</StyledP>
);

P.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    VARIANTS.PRIMARY,
    VARIANTS.SECONDARY,
    VARIANTS.TERTIARY,
  ]),
};

export default P;
