import React from 'react';
import Button from '.';

export default {
  title: 'form/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Args',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Args',
};
