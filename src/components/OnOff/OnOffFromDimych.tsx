import React, {useState} from 'react';

type OnOffProps = {
    on: boolean
}


const OnOffFromDimych = (props: OnOffProps) => {

    let [on, setOn] = useState(props.on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px',
        padding: '2px',
        cursor: 'pointer',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px',
        padding: '2px',
        cursor: 'pointer',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px',
        padding: '2px',
        backgroundColor: on ? 'green' : 'red'
    }


    return (
        <div>
            <div onClick={() => setOn(true)} style={onStyle}>On</div>
            <div onClick={() => setOn(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOffFromDimych;