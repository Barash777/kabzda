import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
    //collapsed: boolean
}

export function UncontrolledAccordion2(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true);

    /*const onClickHandler = () => {
        setCollapsed(!collapsed)
    }*/

    return (
        <div>
            <AccordionTitle setCollapsed={() => setCollapsed(!collapsed)} title={props.title}/>
            {/*<button onClick={onClickHandler}>toggle</button>*/}
            {collapsed && <AccordionBody/>}
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