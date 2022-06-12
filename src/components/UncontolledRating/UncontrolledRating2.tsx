import React, {useState} from 'react';

type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    //value: ValueType
}

export function UncontrolledRating2(props: RatingPropsType) {

    let [value, setValue] = useState<ValueType>(0);

    return (
        <div>
            <Star setValue={setValue} selected={value >= 1} value={1}/>
            <Star setValue={setValue} selected={value >= 2} value={2}/>
            <Star setValue={setValue} selected={value >= 3} value={3}/>
            <Star setValue={setValue} selected={value >= 4} value={4}/>
            <Star setValue={setValue} selected={value >= 5} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: ValueType
    setValue: (value: ValueType) => void
}

function Star(props: StarPropsType) {

    const onClickSpanHandler = () => {
        props.setValue(props.value)
    }

    /*return props.selected ?
        <span onClick={onClickSpanHandler}><b>Star </b></span> :
        <span onClick={onClickSpanHandler}>Star </span>*/

    return <span onClick={onClickSpanHandler}>{props.selected ? <b>star</b> : 'star'} </span>
}