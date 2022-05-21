import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {

    return (
        <div>
            <PageTitle title={"This is page title 1"}/>
            <PageTitle title={"Second title"}/>
            Article 1
            <Rating value={2}/>
            <Accordion title={"first ACCORDION title"}/>
            <Accordion title={"second ACCORDION title"}/>
            Article 2
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props: any) {
    return (
        <div>{ props.title }</div>
    );
}


export default App;
