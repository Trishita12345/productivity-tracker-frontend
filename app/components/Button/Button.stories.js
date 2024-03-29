import React from 'react';
import Button from '.';
import { VARIANTS } from '../../utils/constants/variants';

export default {
  title: 'form/Button',
  component: Button,
  args: {
    children: 'Click Me',
  },
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: VARIANTS.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: VARIANTS.SECONDARY,
};
