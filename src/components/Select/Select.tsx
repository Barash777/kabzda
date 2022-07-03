import React, {useState} from 'react';
import css from './Select.module.css'

export type ItemType = {
    title: string
    value: string
}

export type SelectPropsType = {
    value?: string
    onChange: (value: string) => void
    items: ItemType[]
}


/*
export function Select({value, onChange, items}: SelectPropsType) {

    const [selectedValue, setSelectedValue] = useState<any>(value)
    const [selectMode, setSelectMode] = useState<boolean>(false)

    const found = items.find(i => i.value === selectedValue)
    const SelectedTitleJSX = found ? found.title : 'title'

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
}*/

export function Select(props: SelectPropsType) {

    // const [value, setValue] = useState<any>(props.value)
    const [hoveredValue, setHoveredValue] = useState(props.value)
    const [selectMode, setSelectMode] = useState<boolean>(false)


    const onClickTitle = () => {
        setSelectMode(!selectMode)
        setHoveredValue(props.value)
    }

    const onClickItem = (value: string) => {
        // setValue(value)
        setSelectMode(false)
        props.onChange(value)
    }

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredValue)

    //↑ ↓

    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (!selectMode)
            return

        for (let i = 0; i < props.items.length; i++) {

            if (props.items[i].value === hoveredValue) {

                if (e.key === 'ArrowUp' && i > 0) {
                    setHoveredValue(props.items[i - 1].value)
                    // props.onChange(props.items[i - 1].value) // I'm not sure it's needed
                    return;
                    // console.log(props.items.indexOf(selectedItem))
                } else if (e.key === 'ArrowDown' && i < props.items.length - 1) {
                    setHoveredValue(props.items[i + 1].value)
                    // props.onChange(props.items[i + 1].value) // I'm not sure it's needed
                    return;
                } else if (e.key === 'Enter') {
                    setSelectMode(false)
                    props.onChange(hoveredValue)
                    return;
                } else if (e.key === 'Escape') {
                    setSelectMode(false)
                    return;
                }

            }

        }
    }

    return (
        <div
            className={css.select}
            onKeyUp={onKeyUp}
            tabIndex={0}
        >
            <span className={css.title}
                  onClick={onClickTitle}>{selectedItem && selectedItem.title} {selectMode ? '↑' : '↓'}</span>
            {selectMode &&
                <div className={css.items}>
                    {props.items.map((i, index) =>
                        <div key={index}
                             onMouseEnter={() => {
                                 setHoveredValue(i.value)
                             }}
                            // className={css.item + ' ' + (i.value === props.value ? css.selected : '')}
                             className={css.item + ' ' + (hoveredItem === i ? css.selected : '')}
                             onClick={() => onClickItem(i.value)}
                        >{i.title}</div>)}
                </div>
            }
        </div>
    )
}