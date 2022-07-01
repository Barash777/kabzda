import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Select} from './Select';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;


export const usualBehaviour = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
usualBehaviour.args = {
    title: 'TITLE',
    items: [
        {title: 'One', value: '1'},
        {title: 'Two', value: '2'},
        {title: 'Three', value: '3'},
        {title: 'Four', value: '4'}
    ],
    onChange: (value: string) => {
    }
};

/*
export const UnCollapsed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnCollapsed.args = {
    ...Collapsed.args,
    collapsed: false,
    color: 'blue'
};
*/
