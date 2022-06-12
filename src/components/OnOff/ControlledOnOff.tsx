import React, {useState} from 'react';

type OnOffPropsType = {
    OnOff: boolean
    onChangeOnOff: (state: boolean) => void
}

const ControlledOnOff = (props: OnOffPropsType) => {

    // let [onOff, setOnOff] = useState(props.On)

    const color = props.OnOff ? 'green' : 'red'

    const circle = {
        backgroundColor: color,
        width: '15px',
        height: '15px',
        borderRadius: '100%',
        display: 'inline-block',
        marginLeft: '2px'
    }

    const onClickButtonHandler = (state: boolean) => {
        props.onChangeOnOff(state)
    }

    return (
        <div>
            {props.OnOff ?
                <button onClick={() => onClickButtonHandler(true)} style={{backgroundColor: color}}>ON</button> :
                <button onClick={() => onClickButtonHandler(true)}>ON</button>}
            {!props.OnOff ?
                <button onClick={() => onClickButtonHandler(false)} style={{backgroundColor: color}}>OFF</button> :
                <button onClick={() => onClickButtonHandler(false)}>OFF</button>}
            <div style={circle}></div>
        </div>
    );
};

export default ControlledOnOff;