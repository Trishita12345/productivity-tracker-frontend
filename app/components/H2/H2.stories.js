import React from 'react';
import H2 from '.';
import { VARIANTS } from '../../utils/constants/variants';

export default {
  title: 'form/H2',
  component: H2,
  args: {
    label: 'Label',
  },
};

const Template = args => <H2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: VARIANTS.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: VARIANTS.SECONDARY,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: VARIANTS.TERTIARY,
};
