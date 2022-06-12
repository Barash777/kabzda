import React, {useState} from 'react';

type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    //value: ValueType
}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(0);

    const onClickHandler = (value: ValueType) => {
        setValue(value)
    }

    return (
        <div>
            <Star setValue={() => onClickHandler(1)} selected={value >= 1}/>
            <Star setValue={() => onClickHandler(2)} selected={value >= 2}/>
            <Star setValue={() => onClickHandler(3)} selected={value >= 3}/>
            <Star setValue={() => onClickHandler(4)} selected={value >= 4}/>
            <Star setValue={() => onClickHandler(5)} selected={value >= 5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {

    const onClickSpanHandler = () => {
        props.setValue()
    }

    /*return props.selected ?
        <span onClick={onClickSpanHandler}><b>Star </b></span> :
        <span onClick={onClickSpanHandler}>Star </span>*/

    return <span onClick={onClickSpanHandler}>{props.selected ? <b>star</b> : 'star'} </span>
}