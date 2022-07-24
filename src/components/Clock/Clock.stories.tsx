import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Clock from './Clock';

export default {
    title: 'components/Clock',
    component: Clock
} as ComponentMeta<typeof Clock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const ClockDigital = Template.bind({});

export const ClockAnalog = Template.bind({});
ClockAnalog.args = {
    mode: 'Analog'
}


