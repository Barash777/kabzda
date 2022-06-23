import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;


export const Collapsed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Collapsed.args = {
    title: 'TITLE',
    collapsed: true,
    setCollapsed: action('clicked')
};

export const UnCollapsed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnCollapsed.args = {
    ...Collapsed.args,
    collapsed: false,
};

export const ChangeState = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion setCollapsed={setCollapsed} collapsed={collapsed} title={'TEST'}/>
}
