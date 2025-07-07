import React from 'react';
import './child1.css'
const Child1 = () => {
    let name = "John";
    let designation = "Software Developer";
    let skills = ["PHP","JS","Python","GenAI"]
    return (
        <div>
            <h2>This is Child1 component</h2>
            <div className={'outer'}>
                <div>Name: {name}</div>
                <div>Title: {designation}</div>
                <div>Skills: {skills[0]}|{skills[1]}|{skills[2]}|{skills[3]}</div>
            </div>
        </div>
    );
};

export default Child1;