import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onStarClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value >= 1} onClickThisStar={props.onStarClick} value={1}/>
            <Star selected={props.value >= 2} onClickThisStar={props.onStarClick} value={2}/>
            <Star selected={props.value >= 3} onClickThisStar={props.onStarClick} value={3}/>
            <Star selected={props.value >= 4} onClickThisStar={props.onStarClick} value={4}/>
            <Star selected={props.value >= 5} onClickThisStar={props.onStarClick} value={5}/>
        </div>
    );

}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClickThisStar: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.onClickThisStar(props.value)}>{props.selected ? <b>star</b> : 'star'} </span>
}