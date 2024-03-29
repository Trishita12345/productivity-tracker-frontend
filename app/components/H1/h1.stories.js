import React from 'react';
import H1 from '.';
import { VARIANTS } from '../../utils/constants/variants';

export default {
  title: 'form/H1',
  component: H1,
  args: {
    label: 'Label',
  },
};

const Template = args => <H1 {...args} />;

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
