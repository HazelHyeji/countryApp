import React from 'react';

const Quiz = (props) => {
    // const countryArr = Object.keys(props.nations);
    // console.log(countryArr);
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.flag} />
            <ul>
                <li>Quiz1</li>
                <li>Quiz1</li>
                <li>Quiz1</li>
            </ul>
        </div>
    )
}

export default Quiz;