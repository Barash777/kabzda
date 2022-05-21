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
            <Accordion title={"first ACCORDION title"} collapsed={true}/>
            <Accordion title={"second ACCORDION title"} collapsed={false}/>
            Article 2
            <Rating value={4}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>{ props.title }</div>
    );
}


export default App;
