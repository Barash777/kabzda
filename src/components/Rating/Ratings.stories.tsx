import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
// import {action} from '@storybook/addon-actions';

import {Rating, RatingValueType} from './Rating'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
    value: 0,
    // onStarClick: action('clicked')
};

export const OneStar = Template.bind({});
OneStar.args = {
    value: 1,
    onStarClick: (value: RatingValueType) => {
        alert('star clicked: ' + value)
    }
};

export const FiveStars = Template.bind({});
FiveStars.args = {
    value: 5,
};

export const ChangeRating = () => {
    const [stars, setStars] = useState<RatingValueType>(0)
    return <Rating value={stars} onStarClick={setStars}/>
}