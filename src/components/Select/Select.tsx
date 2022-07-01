import React, {useState} from 'react';

export type ItemType = {
    title: string
    value: string
}

export type SelectPropsType = {
    title: string
    onChange: (value: string) => void
    items: ItemType[]
}


export function Select({title, onChange, items}: SelectPropsType) {

    const [selectedValue, setSelectedValue] = useState<any>(title)
    const [selectMode, setSelectMode] = useState<boolean>(false)

    const found = items.find(i => i.value === selectedValue)
    const SelectedTitleJSX = found ? found.title : title

    const onClickTitle = () => {
        setSelectMode(!selectMode)
    }

    const onClickItem = (value: string) => {
        setSelectedValue(value)
        setSelectMode(false)
        onChange(value)
    }

    return (
        <div>
            <div onClick={onClickTitle}>{SelectedTitleJSX}</div>
            {selectMode && items.map((i, index) =>
                <div key={index}
                     onClick={() => onClickItem(i.value)}
                >{i.title}</div>)}
        </div>
    )
}

/*export const Select(props: SelectPropsType) => {

    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    return (
        <div>
            <SelectTitle setCollapsed={onClickHandler} title={props.title} color={props.color}/>
            {!props.collapsed && <SelectBody items={props.items} onClick={props.onClick}/>}
        </div>
    );

}*/

/*

type SelectTitlePropsType = {
    title: string
    setCollapsed: () => void
    color?: string
}

function SelectTitle(props: SelectTitlePropsType) {
    return <h3 onClick={props.setCollapsed} style={{color: props.color ?? ''}}>{props.title}</h3>
}

type SelectBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function SelectBody(props: SelectBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
}

export default Select;*/
