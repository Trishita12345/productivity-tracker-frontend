import React from "react";
import Button from ".";

export default {
    title: 'form/Button',
    component: Button,
    args: {
        children: 'Click Me'
    }
}

const Template = args => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary'
}