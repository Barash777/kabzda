import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    return (
        <div>
            <AppTitle />
            <Rating />
            <Accordion />
        </div>
    );
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
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
}

function Accordion() {
    return (
        <div>
            <h3>HEY</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

function Star() {
    return (
        <h4>Star</h4>
    );
}

export default App;
