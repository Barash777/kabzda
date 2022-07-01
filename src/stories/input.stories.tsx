import React, {useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';
import {Simulate} from 'react-dom/test-utils';
import {Rating, RatingValueType} from '../components/Rating/Rating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/input',
    //component: Button,
}// as ComponentMeta<typeof input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const UncontrolledInput = () => {
    return <input/>
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <>
        <input onChange={onChangeHandler}/> - {value}
    </>
}

export const getValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const v = inputRef.current as HTMLInputElement
        // if (v)
        setValue(v.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={onClickButton}>save</button>
        - value: {value}
    </>
}

export const ControlledInputWithFixedValues = () => {
    return <input value={'input value'}/>
}