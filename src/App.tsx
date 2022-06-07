import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import OnOffFromDimych from './components/OnOff/OnOffFromDimych';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontolledRating/UncontrolledRating';

function App() {

    return (
        <div className={'App'}>
            <Rating value={0}/>
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
            <p></p>
            <UncontrolledRating/>
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
