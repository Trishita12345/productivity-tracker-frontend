import React from 'react';
import PropTypes from 'prop-types';

import StyledH3 from './StyledH3';
import { VARIANTS } from '../../utils/constants/variants';

const H3 = ({ label, variant = VARIANTS.PRIMARY }) => (
  <StyledH3 variant={variant}>{label}</StyledH3>
);

H3.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    VARIANTS.PRIMARY,
    VARIANTS.SECONDARY,
    VARIANTS.TERTIARY,
  ]),
};

export default H3;
