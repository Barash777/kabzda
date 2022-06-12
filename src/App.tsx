import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import OnOffFromDimych from './components/OnOff/OnOffFromDimych';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontolledRating/UncontrolledRating';
import {UncontrolledRating2} from './components/UncontolledRating/UncontrolledRating2';
import {UncontrolledAccordion2} from './components/UncontrolledAccordion/UncontrolledAccordion2';
import ControlledOnOff from './components/OnOff/ControlledOnOff';
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

            <Accordion
                title={'Accordion again'}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />

            {/*<ControlledOnOff
                OnOff={onOff}
                onChangeOnOff={setOnOff}
            />*/}

            <OneMoreOnOff onChange={setOnOff}/> {onOff.toString()}

            {/*<Rating value={0}/>
            <PageTitle title={'This is page title 1'}/>
            <PageTitle title={'Second title'}/>
            Article 1
            <Rating value={2}/>
            <Accordion title={'first ACCORDION title'} collapsed={true}/>
            <Accordion title={'second ACCORDION title'} collapsed={false}/>
            Article 2
            <Rating value={4}/>
            <hr/>
            <OnOff On={true}/>
            <OnOff On={false}/>
            <hr/>
            <OnOffFromDimych on={true}/>
            <OnOffFromDimych on={false}/>
            <hr/>
            <UncontrolledAccordion title={'One more thing'}/>
            <UncontrolledAccordion2 title={'Dimych way'}/>
            <p></p>
            <UncontrolledRating/>
            <UncontrolledRating2/>*/}

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
