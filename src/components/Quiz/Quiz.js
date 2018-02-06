import React from 'react';

const Quiz = ({name, flag, demonym}) => {
    return(
        <div>
            <h1>{name}</h1>
            <img src={flag}/>
            <ul>
                <li>Quiz1</li>
                <li>Quiz1</li>
                <li>Quiz1</li>
            </ul>
        </div>
    )
}

export default Quiz;