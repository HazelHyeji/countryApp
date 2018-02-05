import React from 'react';

const Quiz = (props) => {
    return(
        <div>
            <h1>{props.nations.name}</h1>
            <img src={props.nations.flag}/>
            <ul>
                <li>Quiz1</li>
                <li>Quiz1</li>
                <li>Quiz1</li>
            </ul>
        </div>
    )
}

export default Quiz;