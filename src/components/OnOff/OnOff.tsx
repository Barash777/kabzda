import React from 'react';

type OnOffPropsType = {
    On: boolean
}

const OnOff = (props: OnOffPropsType) => {
    
    const color = props.On ? 'green' : 'red'

    const circle = {
        backgroundColor: color,
        width: '15px',
        height: '15px',
        borderRadius: '100%',
        display: 'inline-block',
        marginLeft: '2px'
    }

    return (
        <div>
            {props.On ? <button style={{backgroundColor: color}}>ON</button> : <button>ON</button>}
            {!props.On ? <button style={{backgroundColor: color}}>OFF</button> : <button>ON</button>}
            <div style={circle}></div>
        </div>
    );
};

export default OnOff;