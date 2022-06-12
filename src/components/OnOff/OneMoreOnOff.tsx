import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

const OneMoreOnOff = (props: OnOffPropsType) => {

    let [onOff, setOnOff] = useState(false)

    const color = onOff ? 'green' : 'red'

    const circle = {
        backgroundColor: color,
        width: '15px',
        height: '15px',
        borderRadius: '100%',
        display: 'inline-block',
        marginLeft: '2px'
    }

    const onClickButtonHandler = (state: boolean) => {
        setOnOff(state)
        props.onChange(state)
    }

    return (
        <div>
            {onOff ? <button onClick={() => onClickButtonHandler(true)} style={{backgroundColor: color}}>ON</button> :
                <button onClick={() => onClickButtonHandler(true)}>ON</button>}
            {!onOff ?
                <button onClick={() => onClickButtonHandler(false)} style={{backgroundColor: color}}>OFF</button> :
                <button onClick={() => onClickButtonHandler(false)}>OFF</button>}
            <div style={circle}></div>
        </div>
    );
};

export default OneMoreOnOff;