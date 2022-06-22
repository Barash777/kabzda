import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import OnOff from './OnOff'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff stories',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const TurningOn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TurningOn.args = {
    On: true
};

export const TurningOff = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TurningOff.args = {
    On: false
};