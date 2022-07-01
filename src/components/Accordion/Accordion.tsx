import React from 'react';

export type AccordionPropsType = {
    /**
     * Title value in header
     */
    title: string
    /**
     * collapsed property to show/hide items
     */
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    /**
     * color of the title
     */
    color?: string
    items: ItemType[]
    onClick: (value: any) => void
}

export type ItemType = {
    title: string
    value: any
}

function Accordion(props: AccordionPropsType) {

    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    return (
        <div>
            <AccordionTitle setCollapsed={onClickHandler} title={props.title} color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );

}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setCollapsed} style={{color: props.color ?? ''}}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
}

export default Accordion;