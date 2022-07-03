import React, {useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'kabzda/input',
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

export const GetValueOfUncontrolledInputByButtonPress = () => {
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


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    return <input value={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.value)
    }}/>
}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    return <input type={'checkbox'} checked={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.checked)
    }}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string>('0')

    return <select value={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.value)
    }}>
        <option value="0">none</option>
        <option value="1">Elena</option>
        <option value="2">Eric</option>
        <option value="3">HZ</option>
    </select>
}