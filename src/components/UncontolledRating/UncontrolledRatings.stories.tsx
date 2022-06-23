import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {UncontrolledRating, ValueType} from './UncontrolledRating'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;


export const ChangeRating = () => {
    // const [stars, setStars] = useState<ValueType>(0)
    return <UncontrolledRating/>
}