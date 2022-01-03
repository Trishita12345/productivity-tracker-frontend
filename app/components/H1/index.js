import React from 'react';
import PropTypes from 'prop-types';

import StyledH1 from './StyledH1';
import { VARIANTS } from '../../utils/constants/variants';

const H1 = ({ label, variant = VARIANTS.PRIMARY }) => (
  <StyledH1 variant={variant}>{label}</StyledH1>
);

H1.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    VARIANTS.PRIMARY,
    VARIANTS.SECONDARY,
    VARIANTS.TERTIARY,
  ]),
};

export default H1;
