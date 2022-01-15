import React from 'react';
import PropTypes from 'prop-types';

import StyledH2 from './StyledH2';
import { VARIANTS } from '../../utils/constants/variants';

const H2 = ({ label, variant = VARIANTS.PRIMARY }) => (
  <StyledH2 variant={variant}>{label}</StyledH2>
);

H2.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    VARIANTS.PRIMARY,
    VARIANTS.SECONDARY,
    VARIANTS.TERTIARY,
  ]),
};

export default H2;
