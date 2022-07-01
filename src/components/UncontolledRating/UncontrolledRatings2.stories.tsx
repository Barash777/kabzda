import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {UncontrolledRating2, ValueType} from './UncontrolledRating2'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/UncontrolledRating2',
    component: UncontrolledRating2,
} as ComponentMeta<typeof UncontrolledRating2>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof UncontrolledRating2> = (args) => <UncontrolledRating2 {...args} />;


export const ChangeRating = () => {
    // const [stars, setStars] = useState<ValueType>(0)
    return <UncontrolledRating2/>
}