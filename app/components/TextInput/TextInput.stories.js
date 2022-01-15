/*
 * TextInput Stories
 *
 * This contains all the story for the TextInput component.
 */
import React from 'react';
import TextInput from '.';

export default {
  title: 'form/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Placeholder',
    type: 'text',
  },
};

const Template = args => <TextInput {...args} />;

export const Primary = Template.bind({});
