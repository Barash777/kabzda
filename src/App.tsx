import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function hey() {
    return <>asd</>
}

function AppTitle() {
    return (
        <>This is APP component</>
    );
}

function Rating() {
    return (
        <div>
            {/*<h4>Star</h4>
            <h4>Star</h4>
            <h4>Star</h4>
            <h4>Star</h4>
            <h4>Star</h4>*/}
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle() {
    return <h3>MENU</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

function Star() {
    return (
        <h4>Star</h4>
    );
}

export default App;
