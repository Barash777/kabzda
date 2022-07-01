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
}

function Accordion(props: AccordionPropsType) {

    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    return (
        <div>
            <AccordionTitle setCollapsed={onClickHandler} title={props.title} color={props.color}/>
            {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;