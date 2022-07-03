import React, {useReducer, useState} from 'react';

type AccordionPropsType = {
    title: string
    //collapsed: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            // return state
            throw new Error('Bad action type')
    }

    // return state
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(true);
    let [state, dispatch] = useReducer(reducer, {collapsed: true});

    const onClickHandler = () => {
        // setCollapsed(!collapsed)
        dispatch({type: TOGGLE_COLLAPSED})
    }

    return (
        <div>
            <AccordionTitle setCollapsed={onClickHandler} title={props.title}/>
            {/*<button onClick={onClickHandler}>toggle</button>*/}
            {state.collapsed && <AccordionBody/>}
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