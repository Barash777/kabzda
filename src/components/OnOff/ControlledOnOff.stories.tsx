import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import ControlledOnOff from './ControlledOnOff'
import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Controlled OnOff',
    component: ControlledOnOff,
} as ComponentMeta<typeof ControlledOnOff>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledOnOff> = (args) => <ControlledOnOff {...args} />;

const callback = action('on or off clicked')

export const TurningOn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TurningOn.args = {
    OnOff: true,
    onChangeOnOff: callback
};

export const TurningOff = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TurningOff.args = {
    OnOff: false,
    onChangeOnOff: callback
};

export const ManualTurning = () => {
    const [onOff, setOnOff] = useState<boolean>(false)
    return <ControlledOnOff OnOff={onOff} onChangeOnOff={setOnOff}/>
    // return <ControlledOnOff OnOff={onOff} onChangeOnOff={callback}/>
}
