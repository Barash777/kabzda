import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import Accordion, {AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: { // doesn't need this for color
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        },
        title: {
            table: {
                category: 'Text'
            }
        },
        collapsed: {
            table: {
                category: 'Boolean'
            }
        },
        setCollapsed: {
            table: {
                category: 'Callbacks'
            }
        },
    }
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;


export const Collapsed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Collapsed.args = {
    title: 'TITLE',
    collapsed: true,
    setCollapsed: action('clicked'),
    color: 'red'
};

export const UnCollapsed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnCollapsed.args = {
    ...Collapsed.args,
    collapsed: false,
    color: 'blue'
};

export const ChangeState: ComponentStory<typeof Accordion> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion {...args} setCollapsed={setCollapsed} collapsed={collapsed}/>
}
ChangeState.args = {
    title: 'Title from args'
}
