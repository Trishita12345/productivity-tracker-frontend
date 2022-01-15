import React from 'react';
import P from '.';
import { VARIANTS } from '../../utils/constants/variants';

export default {
  title: 'form/P',
  component: P,
  args: {
    label: 'Label',
  },
};

const Template = args => <P {...args} />;

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
