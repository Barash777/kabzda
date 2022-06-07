import React, {useState} from 'react';

type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    //value: ValueType
}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(1);

    const onClickHandler = (value: ValueType) => {
        setValue(value)
    }

    return (
        <div>
            <Star setValue={() => onClickHandler(1)} selected={value >= 1}/>
            {/*<button onClick={() => onClickHandler(1)}>1</button>*/}
            <Star setValue={() => onClickHandler(2)} selected={value >= 2}/>
            {/*<button onClick={() => onClickHandler(2)}>2</button>*/}
            <Star setValue={() => onClickHandler(3)} selected={value >= 3}/>
            {/*<button onClick={() => onClickHandler(3)}>3</button>*/}
            <Star setValue={() => onClickHandler(4)} selected={value >= 4}/>
            {/*<button onClick={() => onClickHandler(4)}>4</button>*/}
            <Star setValue={() => onClickHandler(5)} selected={value >= 5}/>
            {/*<button onClick={() => onClickHandler(5)}>5</button>*/}
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

    return props.selected ?
        <span onClick={onClickSpanHandler}><b>Star </b></span> :
        <span onClick={onClickSpanHandler}>Star </span>
}