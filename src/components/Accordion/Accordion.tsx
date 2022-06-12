import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {

    const onClickHandler = () => {
        props.setCollapsed(!props.collapsed)
    }

    return (
        <div>
            <AccordionTitle setCollapsed={onClickHandler} title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );

}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
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