import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OneMoreOnOff from './components/OnOff/OneMoreOnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [collapsed, setCollapsed] = useState<boolean>(false);
    let [onOff, setOnOff] = useState<boolean>(false)


    return (
        <div className={'App'}>

            <Rating
                value={ratingValue}
                onStarClick={setRatingValue}
            />

            {/*<UncontrolledAccordion title={'TITLE'}/>*/}

            {/*<Accordion
                title={'Accordion again'}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />*/}


            <OneMoreOnOff onChange={setOnOff}/> {onOff.toString()}


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>{props.title}</div>
    );
}


export default App;
